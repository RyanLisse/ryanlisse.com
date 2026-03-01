Document a recently solved problem as a structured solution in docs/solutions/.

$ARGUMENTS

Use the compound-docs workflow to capture the solution while context is fresh.

## What this creates

A searchable markdown file in `docs/solutions/[category]/[filename].md` with:
- YAML frontmatter (tags, symptoms, severity, module)
- Root cause analysis
- Step-by-step solution with code examples
- Prevention strategies
- Warning signs for future reference

## Categories auto-detected from problem type:
- `security-issues/` — CVEs, auth bugs, injection vulnerabilities
- `build-errors/` — TypeScript, Next.js, bundler failures
- `test-failures/` — Vitest, assertion errors
- `runtime-errors/` — production exceptions, hydration errors
- `performance-issues/` — slow builds, N+1, memory leaks
- `ui-bugs/` — layout, styling, responsive issues
- `integration-issues/` — Vercel, third-party APIs, WebMCP

Run this immediately after solving a non-trivial problem. Knowledge compounds.
