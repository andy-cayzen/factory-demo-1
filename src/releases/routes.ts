import type { FastifyInstance } from "fastify";
import { getRelease, listReleases } from "./repository.js";

export function registerReleaseRoutes(server: FastifyInstance): void {
  server.get("/releases", async () => ({ releases: listReleases() }));

  server.get<{ Params: { id: string } }>("/releases/:id", async (request, reply) => {
    const release = getRelease(request.params.id);
    if (!release) return reply.code(404).send({ ok: false, message: "Release not found" });
    return { release };
  });
}
