date: 2026-03-01
topic: webmcp-agent-access

# WebMCP Agent Access for ryanlisse.com

## What We're Building

Add a WebMCP layer to `ryanlisse.com` so external agents and visitors using their own agents can interact with the site through a structured capability surface instead of scraping DOM content.

The first release should support two things equally well:

1. **Public read access** to the portfolio's core entities and comparisons:
   projects, blog posts, services, profile/about content, contact methods, and route-level discovery.
2. **Public action access** for high-value commercial flows:
   inquiry, booking, newsletter signup, and similar business-facing actions the site already exposes.

This should be invisible infrastructure in v1. The site does not need a visible "agent-ready" page or UI badge yet. The goal is to make the site agent-addressable without changing the human-facing experience.

## Why This Approach

We considered three shapes:

### Approach A: Read-only WebMCP

Expose portfolio content and metadata for agents, but leave all commercial flows outside the WebMCP surface.

**Pros**
- Safest and smallest first release
- Easy to reason about and test
- Improves agent discovery immediately

**Cons**
- Fails the "commercial intent" success criterion
- Leaves high-value lead flows dependent on scraping or manual handoff

**Best when:** the goal is search/discovery only.

### Approach B: Full UI parity through WebMCP

Expose everything the UI can do, including low-value controls like theme changes and protected-route flows.

**Pros**
- Strong parity story
- Architecturally pure

**Cons**
- Too much v1 scope
- Adds low-value capabilities that do not improve business outcomes
- Risks complexity before proving demand

**Best when:** the site is becoming a true agent product, not just an agent-accessible portfolio.

### Approach C: Public read + high-value public actions

Expose structured read access for all portfolio entities plus business-relevant actions like inquiry, booking, and newsletter signup. Leave low-value UI-only behaviors out of scope for now.

**Pros**
- Hits both launch success criteria
- Keeps scope aligned with business value
- Avoids overbuilding parity where it does not matter

**Cons**
- Not full UI parity in v1
- Requires clearer action modeling and abuse handling

**Best when:** the goal is practical agent access that improves discovery and conversion.

**Recommended:** Approach C. It matches the repo's current role as a services portfolio and applies YAGNI: expose the content and actions that matter commercially, not every incidental UI control.

## Key Decisions

- **Decision:** WebMCP is an infrastructure layer, not a visible product feature in v1.
  **Why:** The user chose invisible infrastructure only. Human-facing UI changes are unnecessary for initial validation.

- **Decision:** The primary audience is both external agents and human visitors using their own agents.
  **Why:** The design should not assume a single embedded assistant. It needs to work as a public capability surface.

- **Decision:** Day-one scope includes public read capabilities plus commercial actions.
  **Why:** Launch success requires both structured understanding and structured intent submission.

- **Decision:** Public actions should remain public rather than gated.
  **Why:** The user changed direction from gated inquiry/booking to fully public access for everything the site exposes.

- **Decision:** v1 should not chase full UI parity.
  **Why:** Theme toggles, password flows, and other low-value controls add complexity without helping the core portfolio use case.

- **Decision:** Existing file-backed content should be the source of truth for agent-readable entities.
  **Why:** The repo already centralizes portfolio content in MDX and config files, so the WebMCP surface should describe those same resources rather than introduce a parallel content system.

## Repository Context

- The site is a conventional Next.js + MDX portfolio with centralized route/config data in `src/resources/once-ui.config.ts`.
- Portfolio entities already exist in structured form through:
  - `src/resources/content.tsx`
  - `src/app/work/projects/*.mdx`
  - `src/app/blog/posts/*.mdx`
- Existing high-value human actions already exist in the UI:
  - book a call
  - service inquiry
  - newsletter signup
  - share/copy post actions
- There is no current WebMCP implementation in the runtime codebase; MCP appears only in portfolio content describing Ryan's other projects.

## What V1 Should Expose

- **Readable entities**
  - services
  - projects
  - blog posts
  - about/profile summary
  - contact options
  - route and content discovery

- **Structured actions**
  - book a call
  - submit inquiry
  - subscribe to newsletter
  - share/copy public content links where useful

- **Out of scope for v1**
  - theme toggles
  - protected-route auth flows
  - generic UI parity for every button on the site
  - visible `/agent` or `/for-agents` landing page

## Success Criteria

- Agents can extract and compare projects, services, and posts without scraping page structure.
- Agents can discover commercial actions from the site surface without guesswork.
- Agents can submit or initiate inquiry, booking, and signup flows through a structured site capability layer.
- The site remains source-of-truth aligned with existing portfolio content rather than duplicating content into a separate agent-only model.

## Open Questions

- None for the brainstorm stage. The product boundary is clear enough to proceed to planning.

## Next Steps

→ Run `/prompts:workflows-plan` using this brainstorm as the source document for implementation planning.
