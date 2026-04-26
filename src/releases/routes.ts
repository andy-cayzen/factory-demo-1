import type { FastifyInstance } from "fastify";
import { exportReleaseEvidenceCsv } from "./csv-export.js";
import { getRelease, listReleases } from "./repository.js";

export function registerReleaseRoutes(server: FastifyInstance): void {
  server.get("/releases", async () => ({ releases: listReleases() }));

  server.get<{ Params: { id: string } }>("/releases/:id", async (request, reply) => {
    const release = getRelease(request.params.id);
    if (!release) return reply.code(404).send({ ok: false, message: "Release not found" });
    return { release };
  });

  server.get<{ Params: { id: string } }>("/releases/:id/evidence.csv", async (request, reply) => {
    const release = getRelease(request.params.id);
    if (!release) return reply.code(404).send({ ok: false, message: "Release not found" });
    return reply.header("content-type", "text/csv; charset=utf-8").send(exportReleaseEvidenceCsv(release));
  });
}
