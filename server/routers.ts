import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createFileRecord, deleteFileRecord, listFilesByUserId } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";

const MAX_FILE_SIZE = 15 * 1024 * 1024;
const allowedMimeTypes = new Set([
  "image/jpeg", "image/png", "image/webp", "application/pdf", "application/zip",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]);

function safeFilename(filename: string) {
  return filename.replace(/[^\u0600-\u06FFa-zA-Z0-9._-]/g, "-").slice(0, 180) || "file";
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  files: router({
    list: protectedProcedure.query(({ ctx }) => listFilesByUserId(ctx.user.id)),
    upload: protectedProcedure.input(z.object({
      filename: z.string().min(1).max(255),
      mimeType: z.string().min(1).max(150),
      size: z.number().int().positive().max(MAX_FILE_SIZE),
      data: z.string().min(1),
    })).mutation(async ({ ctx, input }) => {
      if (!allowedMimeTypes.has(input.mimeType)) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "نوع الملف غير مدعوم" });
      }
      const buffer = Buffer.from(input.data, "base64");
      if (buffer.length === 0 || buffer.length > MAX_FILE_SIZE || buffer.length !== input.size) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "حجم الملف غير صالح" });
      }
      const filename = safeFilename(input.filename);
      const { key, url } = await storagePut(`${ctx.user.id}-files/${filename}`, buffer, input.mimeType);
      return createFileRecord({ userId: ctx.user.id, filename, storageKey: key, url, mimeType: input.mimeType, size: buffer.length });
    }),
    remove: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
      const removed = await deleteFileRecord(input.id, ctx.user.id);
      if (!removed) throw new TRPCError({ code: "NOT_FOUND", message: "الملف غير موجود" });
      return { success: true } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
