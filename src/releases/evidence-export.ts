export type EvidenceItem = {
  label: string;
  status: "pass" | "warn" | "fail";
  value: string;
  sourceUrl?: string;
};

export type EvidenceBundle = {
  workPackageId: string;
  commitSha: string;
  generatedAt: string;
  items: EvidenceItem[];
};

export function summarizeEvidence(bundle: EvidenceBundle) {
  const failed = bundle.items.filter((item) => item.status === "fail");
  const warnings = bundle.items.filter((item) => item.status === "warn");
  return {
    workPackageId: bundle.workPackageId,
    readyForApproval: failed.length === 0,
    failed: failed.length,
    warnings: warnings.length
  };
}
