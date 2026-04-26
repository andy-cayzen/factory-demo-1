# Cayzen Dev Runner Notes

- Work package: WP-LIVE-DEMO-001
- Build run: BR-WP-LIVE-DEMO-001
- Repository: andy-cayzen/factory-demo-1
- Branch: cayzen/live-demo-runner-health

## Context

# Cayzen Sandbox Context

## Work Package

WP-LIVE-DEMO-001: Validate Cayzen dev-local runner health evidence

Repository: andy-cayzen/factory-demo-1
Branch: cayzen/live-demo-runner-health

Resettable real API demo fixture for proving dev-local branch, PR, and AI test evidence capture end to end.

## Acceptance Criteria

- Dev-local runner reuses the allowlisted demo repository.
- Runner verifies a generated health endpoint test before PR evidence is recorded.
- Test with AI validates the build branch and attaches passing evidence.

## Plan

Use the trusted dev-local runner to add or verify lightweight health evidence in the demo repository.

## Build Design

Add a focused src/dev-runner/health.test.ts test plus a Cayzen runner note, then push the Cayzen branch and reuse an existing PR when present.

## Knowledge Base

- Billing architecture overview (docs/architecture/billing.md): Defines service boundaries, invoice generation, payment provider integration, and audit constraints.
- Currency and locale coding standard (docs/standards/currency.md): Requires ISO 4217 currency codes, Intl.NumberFormat, and locale-specific snapshot tests.
- Release approval runbook (runbooks/release-approval.md): Explains evidence-pack requirements, reviewer roles, rollback expectations, and audit export steps.
- MCP tool access policy (policies/mcp-tools.md): Lists tool namespaces and the approval requirements for write or deployment actions.
- New Delivery Design Note (factory/new-delivery-design-note.md): New Delivery Design Note
- README (andy-cayzen/factory-demo-1/README.md): # factory-demo-1
- Billing (andy-cayzen/factory-demo-1/docs/architecture/billing.md): # Billing Architecture
- Release Evidence (andy-cayzen/factory-demo-1/docs/architecture/release-evidence.md): # Release Evidence Architecture
- Testing (andy-cayzen/factory-demo-1/docs/standards/testing.md): # Testing Standards
- Currency Format (andy-cayzen/factory-demo-1/src/billing/currency-format.ts): const fractionDigitsByCurrency: Record<string, number> = {
- Invoice Generator (andy-cayzen/factory-demo-1/src/billing/invoice-generator.ts): export type InvoiceLine = {
- Rate Limit (andy-cayzen/factory-demo-1/src/gateway/rate-limit.ts): export type RateLimitDecision = {
- Evidence Export (andy-cayzen/factory-demo-1/src/releases/evidence-export.ts): export type EvidenceItem = {

## Policy

- Commit to the configured work package branch.
- Do not open a pull request.
- Run tests and record evidence before marking the build ready for review.

