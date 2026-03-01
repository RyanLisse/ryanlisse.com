Run the full quality gate for ryanlisse.com: format, lint, test, and build.

```bash
npm run biome-write && npm run lint && npm test && npm run build
```

Report status of each step. Stop and diagnose on first failure. Only declare success when all four pass cleanly.

Steps:
1. **Format** — `npm run biome-write` (Biome formatter)
2. **Lint** — `npm run lint` (Next.js ESLint)
3. **Test** — `npm test` (Vitest)
4. **Build** — `npm run build` (Next.js production build)
