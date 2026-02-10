# Routes

| Route | File | Status |
|-------|------|--------|
| `/` | `src/app/page.tsx` | Enabled |
| `/about` | `src/app/about/page.tsx` | Enabled |
| `/work` | `src/app/work/page.tsx` | Enabled |
| `/work/[slug]` | `src/app/work/[slug]/page.tsx` | Dynamic |
| `/blog` | `src/app/blog/page.tsx` | Enabled |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Dynamic |
| `/gallery` | `src/app/gallery/page.tsx` | Disabled |
| `/not-found` | `src/app/not-found.tsx` | Always |

## API Routes
- `/api/authenticate` - Password auth
- `/api/check-auth` - Auth check
- `/api/og/fetch` - OG image fetch
- `/api/og/generate` - Dynamic OG generation
- `/api/og/proxy` - OG image proxy
- `/api/rss` - RSS feed
