import { describe, expect, it } from "vitest";
import { buildServer } from "../server.js";

describe("Cayzen dev runner health", () => {
  it("exposes the existing health endpoint as delivery evidence", async () => {
    const server = buildServer();
    const response = await server.inject({ method: "GET", url: "/health" });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ ok: true, service: "release-evidence-api" });

    await server.close();
  });
});
