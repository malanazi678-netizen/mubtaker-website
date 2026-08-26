import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  storagePut: vi.fn(),
  createFileRecord: vi.fn(),
  deleteFileRecord: vi.fn(),
  listFilesByUserId: vi.fn(),
}));
const { storagePut, createFileRecord, deleteFileRecord, listFilesByUserId } = mocks;

vi.mock("./storage", () => ({ storagePut: mocks.storagePut }));
vi.mock("./db", () => ({ createFileRecord: mocks.createFileRecord, deleteFileRecord: mocks.deleteFileRecord, listFilesByUserId: mocks.listFilesByUserId }));

import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const user = { id: 7, openId: "success-user", name: "Test", email: "test@example.com", loginMethod: "manus", role: "user" as const, createdAt: new Date(), updatedAt: new Date(), lastSignedIn: new Date() };
const ctx = { user, req: { protocol: "https", headers: {} } as TrpcContext["req"], res: { clearCookie: () => undefined } as TrpcContext["res"] } satisfies TrpcContext;

describe("files success flow", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    storagePut.mockResolvedValue({ key: "7-files/brief_a1.pdf", url: "/manus-storage/7-files/brief_a1.pdf" });
    createFileRecord.mockImplementation(async (record) => ({ id: 12, ...record, createdAt: new Date() }));
    deleteFileRecord.mockResolvedValue(true);
    listFilesByUserId.mockResolvedValue([]);
  });

  it("uploads a supported PDF and deletes its record", async () => {
    const caller = appRouter.createCaller(ctx);
    const data = Buffer.from("test-pdf").toString("base64");
    const created = await caller.files.upload({ filename: "brief.pdf", mimeType: "application/pdf", size: 8, data });
    expect(storagePut).toHaveBeenCalledWith("7-files/brief.pdf", Buffer.from("test-pdf"), "application/pdf");
    expect(created?.id).toBe(12);
    expect(created?.url).toContain("/manus-storage/");
    await expect(caller.files.remove({ id: 12 })).resolves.toEqual({ success: true });
    expect(deleteFileRecord).toHaveBeenCalledWith(12, 7);
  });
});
