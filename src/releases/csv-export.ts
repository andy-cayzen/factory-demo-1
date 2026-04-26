import type { ReleaseRecord } from "./types.js";

export function exportReleaseEvidenceCsv(release: ReleaseRecord): string {
  const evidenceCount = release.evidence.length;
  const missingEvidenceCount = release.evidence.filter((item) => item.status === "missing" || item.status === "failed").length;
  const rows = [
    ["releaseId", "status", "approver", "evidenceCount", "missingEvidenceCount"],
    [release.id, release.status, release.approver, String(evidenceCount), String(missingEvidenceCount)]
  ];
  return rows.map((row) => row.map(escapeCsvCell).join(",")).join("\n");
}

function escapeCsvCell(value: string): string {
  return /[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}
