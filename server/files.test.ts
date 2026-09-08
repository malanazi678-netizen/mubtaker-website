import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function context(user: TrpcContext["user"]): TrpcContext {
  return {
    user,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => undefined } as TrpcContext["res"],
  };
}

describe("files router", () => {
  it("rejects unauthenticated users", async () => {
    const caller = appRouter.createCaller(context(null));
    await expect(caller.files.list()).rejects.toMatchObject({ code: "UNAUTHORIZED" });
  });

  it("rejects unsupported file types before storage", async () => {
    const caller = appRouter.createCaller(context({
      id: 1,
      openId: "test-user",
      name: "Test User",
      email: "test@example.com",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    }));
    await expect(caller.files.upload({
      filename: "malware.exe",
      mimeType: "application/x-msdownload",
      size: 4,
      data: "dGVzdA==",
    })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });
});
