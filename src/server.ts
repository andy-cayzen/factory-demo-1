import Fastify from "fastify";
import { registerReleaseRoutes } from "./releases/routes.js";

export function buildServer() {
  const server = Fastify({ logger: true });

  server.get("/health", async () => ({ ok: true, service: "release-evidence-api" }));
  registerReleaseRoutes(server);

  return server;
}

if (import.meta.url === new URL(process.argv[1], "file:").href) {
  const port = Number(process.env.PORT ?? "4010");
  const server = buildServer();
  await server.listen({ host: "0.0.0.0", port });
}
