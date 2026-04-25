# Release Evidence Architecture

Each work package produces an evidence bundle before approval.

- Evidence includes test results, coverage, scan outcomes, and traceability links.
- Evidence summaries should be deterministic and safe to re-run.
- Approval gates fail closed when critical evidence is missing or failing.
- Evidence metadata links back to the work package and commit SHA.
