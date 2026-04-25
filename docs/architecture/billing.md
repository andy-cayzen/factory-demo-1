# Billing Architecture

Billing code keeps invoice calculation separate from presentation formatting.

- Invoice totals are grouped by currency before export.
- Formatting is handled at the edge so API responses remain numeric.
- Mixed-currency invoices are valid when every line preserves its source currency.
- Export failures must include account, invoice date, and affected currency context.
