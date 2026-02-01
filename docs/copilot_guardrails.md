# Copilot Guardrails – Matrimony Utsav

These rules MUST be followed for all code changes without exception.

Develop in SMALL, incremental steps.  
Do NOT refactor unrelated code.  
Do NOT introduce new libraries unless explicitly requested.  
Preserve existing behavior unless the prompt explicitly says otherwise.

Client components MUST include `"use client"` at the top.  
Server components MUST NOT use client hooks.  
If interactivity is required in a server-rendered area, extract a small client subcomponent.

`FiltersSidebar` is a NAMED export and MUST remain a named export.

```ts
export function FiltersSidebar() {}
It MUST be imported exactly as:

import { FiltersSidebar } from "@/components/results/filters-sidebar";
Do NOT switch between default and named exports unless explicitly instructed.
Do NOT change existing exports or imports unless the task explicitly requires it.

URL query parameters are the SINGLE source of truth for filters.
Use useSearchParams() to READ query parameters.
Use useRouter().replace() to WRITE query parameters.
Do NOT trigger full page reloads.

Filter behavior MUST follow Amazon-style rules:

City filter MUST be a dropdown and MUST auto-apply.
Category filter MUST be checkboxes and MUST auto-apply.
Sort MUST be a dropdown in the top-right of results and MUST auto-apply.
Price filter (min/max) MUST use local state and MUST apply ONLY when the Apply button is clicked.

Query keys MUST NOT be changed:

city
categories (comma-separated)
minPrice
maxPrice
sort

Sidebar UI MUST be Amazon-style: dense, vertical, scrollable, and sticky.
The Apply button is allowed ONLY for range filters (price).
All other filters MUST apply automatically.

Always guard against undefined values.
Always use (array ?? []) when iterating.
Optional query params MUST be handled safely.

NEVER index URL search params directly.

❌ searchParams[key]
✅ searchParams.get(key)

City filter logic is considered STABLE and FROZEN.

Copilot MUST NOT:
- Change how cities are populated.
- Change how the city value is read from the URL.
- Change how the city value is written to the URL.
- Change how city filtering affects the results page.

City-related changes are allowed ONLY if the task explicitly states:
“Modify city filter logic”.

UI-only changes (styling, spacing, labels) are allowed.
Logic changes are strictly forbidden without explicit instruction.
