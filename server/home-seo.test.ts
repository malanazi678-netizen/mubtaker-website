import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("home page SEO limits", () => {
  it("keeps the description within 50–160 characters and uses 3–8 keywords", () => {
    const html = readFileSync(resolve(import.meta.dirname, "../client/index.html"), "utf8");
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1] ?? "";
    const keywords = html.match(/<meta name="keywords" content="([^"]+)"/)?.[1] ?? "";
    const keywordCount = keywords.split("،").map((item) => item.trim()).filter(Boolean).length;

    expect(description.length).toBeGreaterThanOrEqual(50);
    expect(description.length).toBeLessThanOrEqual(160);
    expect(keywordCount).toBeGreaterThanOrEqual(3);
    expect(keywordCount).toBeLessThanOrEqual(8);
  });
});
