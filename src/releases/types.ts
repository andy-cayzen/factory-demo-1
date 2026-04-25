export type EvidenceStatus = "present" | "missing" | "failed";

export type ReleaseEvidence = {
  id: string;
  label: string;
  status: EvidenceStatus;
  sourceUrl?: string;
};

export type ReleaseRecord = {
  id: string;
  version: string;
  status: "draft" | "approved" | "released";
  approver: string;
  evidence: ReleaseEvidence[];
};
