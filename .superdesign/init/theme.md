# Theme & Design Tokens

## Framework
- Next.js 16.0.10, React 19.2.0, TypeScript 5.8.3
- Design System: @once-ui-system/core v1.5.6
- Styling: SCSS/CSS Modules + Once UI tokens

## Style Config (`src/resources/once-ui.config.ts`)
```ts
const style: StyleConfig = {
  theme: "dark",
  neutral: "slate",
  brand: "blue",
  accent: "cyan",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};
```

## Fonts
- Heading: Inter (`--font-heading`)
- Body: Inter (`--font-body`)
- Label: Inter (`--font-label`)
- Code: JetBrains Mono (`--font-code`)

## Effects
```ts
const effects: EffectsConfig = {
  mask: { cursor: false, x: 50, y: 0, radius: 100 },
  gradient: { display: true, opacity: 60, x: 50, y: 60, width: 100, height: 50, tilt: 0, colorStart: "accent-background-strong", colorEnd: "page-background" },
  dots: { display: true, opacity: 30, size: "2", color: "brand-background-strong" },
  grid: { display: false },
  lines: { display: false },
};
```

## Breakpoints (`src/components/breakpoints.scss`)
```scss
$s: 768px;
$m: 1024px;
$l: 1440px;
```

## Custom CSS (`src/resources/custom.css`)
Currently all commented out (example palette). No active custom overrides.

## Global CSS Imports (in layout.tsx)
```ts
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
```
