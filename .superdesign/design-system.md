# Design System — Warm Industrial

## Color Palette
- Background: #EBEBE8 (warm gray)
- Foreground: #18181B (near-black)
- Accent Blue: #0066FF (electric blue)
- Borders: #D4D4D8 (Zinc-300)
- Grid Lines: #18181B at 0.1 opacity
- Footer BG: #18181B
- Footer Text: #EBEBE8
- Status Green: #22C55E (Green-500)
- Marquee BG: #F4F4F5

## Typography
- Primary: Inter (400, 700, 900)
- Secondary: Playfair Display (Italic, 400)
- Labels: 10px bold uppercase, tracking 0.2em–0.3em
- Hero headings: 128px–160px (8xl–10xl), tracking -0.05em
- Stroke text: -webkit-text-stroke: 1px #18181B, color: transparent

## Layout
- Max width: 1600px, centered
- 12-column structural grid with thin vertical lines at 0.1 opacity behind all content
- Sections divided by 1px horizontal rules
- Sharp rectangular corners everywhere except CTA buttons and status badges

## Spacing & Grid
- Sticky header: 80px height
- Hero: 7-col left / 5-col right split
- Marquee: 120px height
- Project rows: 300px height each
- Footer: dark inverted section

## Effects
- Global noise texture: fractal noise SVG at 0.04 opacity overlay
- Transitions: cubic-bezier(0.16, 1, 0.3, 1) for all transforms/clip-paths
- Clip-path reveals: inset(0 0 0 100%) → inset(0 0 0 0) over 0.6s
- Image treatment: grayscale(1) with #0066FF/20 mix-blend-multiply
- Header: backdrop-blur 10px, bg at 0.8 opacity
- Status pulse: 6px green circle with scale/box-shadow animation

## Components
- Sticky Header: blurred warm gray, 1px bottom border, centered serif-italic logo, tiny caps nav
- Hero: split layout, massive stroke-text heading, technical readouts, grayscale image with glass card
- Marquee Ticker: rapidly scrolling alternating heavy sans + italic serif, blue star separators
- Project List: hover-triggered clip-path image reveals, floating "View" circle
- Footer: inverted dark, 20vw background marquee at 0.1 opacity, green pulse indicator

## Rules
- MUST maintain #EBEBE8 background throughout
- MUST use strict grid alignment with 12-column lines
- NO rounded corners except CTA buttons and status badges
- Noise texture visible but subtle (0.04 opacity)
