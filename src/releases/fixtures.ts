import type { ReleaseRecord } from "./types.js";

export const releaseFixtures: ReleaseRecord[] = [
  {
    id: "REL-1001",
    version: "2026.04.25-demo",
    status: "approved",
    approver: "Nora Patel",
    evidence: [
      { id: "EV-1", label: "Unit tests", status: "present", sourceUrl: "https://ci.example/jobs/1001" },
      { id: "EV-2", label: "Coverage report", status: "present", sourceUrl: "https://ci.example/coverage/1001" },
      { id: "EV-3", label: "Security scan", status: "missing" }
    ]
  },
  {
    id: "REL-1002",
    version: "2026.04.26-demo",
    status: "draft",
    approver: "Unassigned",
    evidence: [
      { id: "EV-4", label: "Unit tests", status: "present", sourceUrl: "https://ci.example/jobs/1002" },
      { id: "EV-5", label: "Traceability review", status: "failed" }
    ]
  }
];
