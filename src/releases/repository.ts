import { releaseFixtures } from "./fixtures.js";
import type { ReleaseRecord } from "./types.js";

export function listReleases(): ReleaseRecord[] {
  return releaseFixtures;
}

export function getRelease(id: string): ReleaseRecord | null {
  return releaseFixtures.find((release) => release.id === id) ?? null;
}
