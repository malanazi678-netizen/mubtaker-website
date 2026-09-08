import { describe, expect, it } from "vitest";
import { storageGet } from "./storage";

describe("storage download links", () => {
  it("returns a stable built-in storage URL for a stored key", async () => {
    await expect(storageGet("7-files/brief_a1.pdf")).resolves.toEqual({
      key: "7-files/brief_a1.pdf",
      url: "/manus-storage/7-files/brief_a1.pdf",
    });
  });
});
