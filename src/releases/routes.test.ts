import { describe, expect, it } from "vitest";
import { buildServer } from "../server.js";

describe("release routes", () => {
  it("returns release list", async () => {
    const server = buildServer();
    const response = await server.inject({ method: "GET", url: "/releases" });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      releases: [
        { id: "REL-1001", status: "approved" },
        { id: "REL-1002", status: "draft" }
      ]
    });

    await server.close();
  });

  it("returns release detail", async () => {
    const server = buildServer();
    const response = await server.inject({ method: "GET", url: "/releases/REL-1001" });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      release: {
        id: "REL-1001",
        approver: "Nora Patel",
        evidence: expect.arrayContaining([expect.objectContaining({ label: "Security scan", status: "missing" })])
      }
    });

    await server.close();
  });

  it("returns 404 for an unknown release", async () => {
    const server = buildServer();
    const response = await server.inject({ method: "GET", url: "/releases/REL-NOPE" });

    expect(response.statusCode).toBe(404);
    expect(response.json()).toMatchObject({ ok: false, message: "Release not found" });

    await server.close();
  });
});
