# Testing Standards

Changes require focused unit tests and at least one integration-level validation when data crosses a service boundary.

- Keep calculation logic deterministic and unit tested.
- Test error messages for user-facing failure paths.
- Avoid live third-party calls in unit tests.
- Prefer fixtures that explain the business scenario being tested.
