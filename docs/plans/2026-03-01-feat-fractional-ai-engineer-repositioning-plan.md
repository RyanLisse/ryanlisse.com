---
title: Fractional AI Engineer Repositioning — ryanlisse.com
type: feat
date: 2026-03-01
---

# Fractional AI Engineer & Agent Architect Repositioning

## Overview

Reposition ryanlisse.com from a generic portfolio ("AI Agentic Software Engineer") to a conversion-focused **Fractional AI Engineer & Agent Architect** services site. The goal: 2–3 retainer clients generating €5–10K/mo within 3 months.

This is a content + positioning overhaul, not a design rebuild. The existing "Atmospheric Dark Industrial" aesthetic, Once UI component system, and Next.js/MDX architecture are solid — we only change content, copy, and add a new `/services` route.

## Problem Statement / Motivation

**Current state:** Site positions Ryan as a portfolio engineer. No service offering, no pricing, no clear CTA for business engagement.

**Target state:** A services-forward site where a Series A founder or technical co-founder can land, immediately understand what Ryan offers, see proof of work, and book a call — in under 60 seconds.

**Revenue gap:** Ryan ships production AI systems (Engram, OpenClaw, 60+ repos) but the site doesn't reflect this or offer a clear commercial path.

## Proposed Solution

### Architecture Unchanged

- **Framework**: Next.js 16 + Once UI + SCSS modules + MDX
- **No new dependencies** — use existing component primitives
- **No design system changes** — preserve the dark atmospheric theme

### What Changes

| Area | Current | Target |
|------|---------|--------|
| `person.role` in content.tsx | "AI Agentic Software Engineer" | "Fractional AI Engineer & Agent Architect" |
| Hero headline | "BUILDING / intelligent / SYSTEMS" | Updated copy (see below) |
| Hero subtext | Technical readouts | Conversion-focused positioning statement |
| Marquee items | Generic labels | "Agent Architect" / "AI Builder" / "Production Systems" |
| Navigation | Home / About / Work / Blog | + Services |
| Routes | 4 enabled routes | +`/services` enabled |
| Projects | 5 projects (Quorum/Briefly/Caly/ContactBook/Stellar) | +5 new AI agent projects |
| Meta/OG | Generic | "Fractional AI Engineer" SEO-optimized |
| Contact | Cal.com link in About | Dedicated `/contact` section (or embedded in Services) |

## Technical Considerations

### Once UI Route System

To add `/services` to the nav, two changes are needed:
1. `src/resources/once-ui.config.ts` — add `"/services": true` to routes
2. Create `src/app/services/page.tsx`

Nav links auto-generate from the routes config — no Header.tsx changes needed.

### Content Architecture

All content flows through `src/resources/content.tsx`. Hero text, person data, home sections — all edited there. MDX files in `src/app/work/projects/` handle project case studies.

### New Project Images

New project MDX files need images in `/public/images/projects/<slug>/`. We'll use placeholder covers initially (can be generated or sourced later). Required structure:
```
/public/images/projects/engram/cover-01.jpg
/public/images/projects/openclaw/cover-01.jpg
/public/images/projects/mexc-sniper/cover-01.jpg
/public/images/projects/rra/cover-01.jpg
/public/images/projects/d2l-pipeline/cover-01.jpg
```

Since the FrostedCard grayscale-hover effect uses `img` tags, any real screenshot or diagram image works. We can use the existing architecture diagram images already in the repo (`/public/images/projects/*/`) or generate new ones.

## Implementation Phases

### Phase 1: Hero + Positioning (Foundation)

**Files to edit:**
- `src/resources/content.tsx` — Update `person.role`, home headline, marquee items
- `src/app/page.tsx` — Revise hero headline, subtext, and CTA copy
- `src/resources/once-ui.config.ts` — Enable `/services` route

**Hero Copy (target):**
```
FRACTIONAL AI
engineer &
AGENT ARCHITECT

I ship AI systems to production.
Not decks. Not mockups. Working agents.

[Book a Call]  [See My Work]
```

**Marquee items (target):**
```
"Agent Architect"  ✦  "Production Systems"  ✦  "AI Engineer"  ✦  "Builder"
```

**Person role:** `"Fractional AI Engineer & Agent Architect"`

### Phase 2: Services Page

**File to create:** `src/app/services/page.tsx`

**Structure:**
```tsx
// 3-card grid using Once UI Grid + Column
// Card 1: AI Kickstart ($7-10K/week)
// Card 2: Fractional AI Engineer ($5-10K/mo)
// Card 3: Agent Architecture Review ($2-5K)
// CTA: Book a Call button → cal.com/ryan-lisse/30min
```

Each service card includes:
- Emoji icon (🚀 / 🤝 / 🔍)
- Title + price range
- Description paragraph
- Bullet list of deliverables
- "Inquire" or "Book a Call" CTA

**FAQ section** (collapsible): Who is this for? What's included? How do we start?

### Phase 3: New Project Case Studies

**5 new MDX files** in `src/app/work/projects/`:

| File | Slug | Title | Tech |
|------|------|-------|------|
| `engram.mdx` | engram | Engram — Multi-Agent Memory System | TypeScript, Claude API |
| `openclaw.mdx` | openclaw | OpenClaw Tools — 15+ CLI Agent Tools | TypeScript, Swift, MCP |
| `mexc-sniper.mdx` | mexc-sniper | MEXC Sniper Bot — Sub-Second Crypto Trading | TypeScript, WebSocket |
| `rra.mdx` | rra | RRA — Production RAG Chat Application | TypeScript, Convex |
| `d2l-pipeline.mdx` | d2l-pipeline | D2L Pipeline — Document-to-LoRA Internalization | Python, TypeScript |

Each MDX follows the existing frontmatter schema:
```yaml
---
title: [Project Name]
publishedAt: YYYY-MM-DD
summary: [2-sentence outcome description]
images:
  - /images/projects/[slug]/cover-01.jpg
team:
  - name: Ryan Lisse
    role: AI Engineer
    avatar: /images/avatar.jpg
    linkedIn: https://linkedin.com/in/ryanlisse
link: https://github.com/RyanLisse/[repo]
---
```

### Phase 4: SEO & Meta Tags

**File to edit:** `src/resources/content.tsx`

Update:
- `home.title` — include "Fractional AI Engineer"
- `home.description` — SEO-optimized meta description
- OG image alt text
- `person.role` — propagates to JSON-LD schema

**Target keywords:**
- "fractional AI engineer"
- "AI agent architect"
- "hire AI developer"
- "AI engineer for hire"

### Phase 5: Blog Post — "The New Software Stack"

**File to create:** `src/app/blog/posts/new-software-stack.mdx`

Draft exists. Publish as cornerstone SEO content with:
- Target keyword: "AI agent architecture"
- Internal links to services page
- CTA at bottom: Book a strategy call

## Acceptance Criteria

### Phase 1 — Hero
- [x] `person.role` shows "Fractional AI Engineer & Agent Architect"
- [x] Hero headline communicates builder identity, not advisor
- [x] "Book a Call" CTA in hero links to `https://cal.com/ryan-lisse/30min`
- [x] Marquee reflects agent/builder identity

### Phase 2 — Services Page
- [x] `/services` route is enabled and visible in nav
- [x] All 3 service tiers are shown with pricing ranges
- [x] Each card has: title, price, description, deliverables, CTA
- [x] "Book a Call" links to Cal.com
- [x] Page uses existing Once UI design system (no new CSS frameworks)

### Phase 3 — Projects
- [x] 5 new project MDX files exist with correct frontmatter
- [x] Projects appear in `/work` masonry grid
- [x] Each project has a cover image (can be placeholder)
- [x] Project detail pages render without errors

### Phase 4 — SEO
- [x] Meta title includes "Fractional AI Engineer"
- [x] Meta description is under 160 chars, conversion-focused
- [x] OG image alt text updated
- [x] `robots.ts` allows all routes

### Phase 5 — Blog
- [x] Blog post published and visible at `/blog/new-software-stack`
- [x] Has proper frontmatter (title, publishedAt, summary, tag)
- [x] Internal link to /services page exists

## Success Metrics

- Site communicates services offering within 10 seconds of landing
- "Book a Call" CTA is visible without scrolling on desktop
- 5+ new projects in portfolio showcase AI agent work
- SEO meta includes "fractional AI engineer" in title/description

## Dependencies & Risks

**Dependencies:**
- `src/resources/once-ui.config.ts` — must enable `/services` route before page is live
- Image assets for new projects — can use existing arch diagram images as placeholders initially
- Cal.com link — already set up at `https://cal.com/ryan-lisse/30min`

**Risks:**
- **Existing project images**: New project slugs need `/public/images/projects/<slug>/cover-01.jpg`. Risk: images don't exist yet. Mitigation: Use existing architecture diagrams from other project folders, or reuse placeholder image.
- **Content.tsx type safety**: The `home` object has typed `featured` projects array — adding new projects won't break this as long as slugs match MDX filenames.
- **Masonry grid**: New projects will auto-appear in the masonry grid. Visual check needed to ensure layout looks good with 10 cards.

## File Manifest

### Modified Files

```
src/resources/content.tsx                        — person.role, hero copy, marquee items, SEO meta
src/resources/once-ui.config.ts                  — enable /services route
src/app/page.tsx                                 — hero headline, CTA buttons
```

### New Files

```
src/app/services/page.tsx                        — Services page with 3 tiers
src/app/work/projects/engram.mdx                 — Engram project case study
src/app/work/projects/openclaw.mdx               — OpenClaw project case study
src/app/work/projects/mexc-sniper.mdx            — MEXC Sniper project case study
src/app/work/projects/rra.mdx                    — RRA project case study
src/app/work/projects/d2l-pipeline.mdx           — D2L Pipeline project case study
src/app/blog/posts/new-software-stack.mdx        — Cornerstone blog post
```

### Image Assets (needed)

```
public/images/projects/engram/cover-01.jpg       — Can reuse architecture diagram
public/images/projects/openclaw/cover-01.jpg     — Can reuse CLI screenshot
public/images/projects/mexc-sniper/cover-01.jpg  — Can reuse trading chart image
public/images/projects/rra/cover-01.jpg          — Can reuse RAG diagram
public/images/projects/d2l-pipeline/cover-01.jpg — Can reuse pipeline diagram
```

## References & Research

### Internal References

- Content config: `src/resources/content.tsx`
- Route config: `src/resources/once-ui.config.ts:1`
- Services page template: `src/app/about/page.tsx` (similar structure to start from)
- Existing projects: `src/app/work/projects/*.mdx`
- FrostedCard component: `src/components/work/FrostedCard.tsx`
- Projects grid: `src/components/work/Projects.tsx`
- Cal.com link in About: `src/resources/content.tsx` (about.tableOfContent / Cal.com reference)

### External References

- Once UI docs: https://once-ui.com/docs
- Cal.com embed docs (for contact page): https://cal.com/docs/enterprise-features/embed/embed-snippet-works-on-all-websites
- fractional.ai competitor example: https://stevens.dev

### Strategy Source

- PLAN.md in project root (compiled 2026-03-01 from market research)
