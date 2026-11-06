# Pearl Removals: design kit

A modern, conversion-focused design for a house removals website. It uses plain HTML, CSS and JavaScript with no framework, so any tool (including Antigravity) can drop it into React, Next.js, Astro, WordPress or plain HTML.

| File | What it is |
|---|---|
| `index.html` | Full homepage: header, hero, services, stats, how it works, why us, pricing, areas, reviews, FAQ, CTA and footer |
| `styles.css` | The design system. Colours, fonts and radii are CSS variables at the top. |
| `script.js` | Sticky header, mega-menu, mobile drawer, scroll reveal, count-up stats, quote form and postcode checker |
| `images/` | Put your photos here (see below) |

## Photos to add

These sections show a branded gradient until you add the images. Use real photos of your team and van; they convert far better than stock photos.

- `images/hero-movers.jpg`: team and van, portrait, about 1200×1400
- `images/service-house.jpg`: movers carrying furniture, about 1000×800
- `images/why-us.jpg`: mover wrapping furniture, portrait 4:5

## Reusable building blocks

Each block works on any page:

- **Buttons:** `.btn` plus one of `.btn--accent`, `.btn--ghost`, `.btn--light` or `.btn--outline-light`, with optional `.btn--sm` and `.btn--block`
- **Section wrapper:** `.section`, with `.section--white` or `.section--dark` for alternating backgrounds
- **Section heading:** `.section-head` (add `--center` or `--split`) containing `.eyebrow`, `h2` and `p`
- **Cards:** `.service`, `.service--feature`, `.plan`, `.plan--popular`, `.review`, `.review--big`
- **Other parts:** `.icon-tile`, `.pill`, `.chip`, `.stars`, `.accordion`, `.cta-band`, `.photo`
- **Icons:** `<svg><use href="#i-truck"/></svg>`. The sprite is at the top of `index.html`.

## Prompt to give Antigravity

> Use the design in `designs/pearl-removals/` (index.html, styles.css, script.js) as the single source of truth for the site's look. Rebuild my site's frontend to match it exactly: same colours, fonts (Bricolage Grotesque + Inter), spacing, border radii, shadows and components.
>
> 1. Turn the header (top bar + sticky nav + mega menu + mobile drawer) and the footer into shared layout components used on every page.
> 2. Turn each section (hero, services, stats, how it works, why us, pricing, areas, reviews, FAQ, CTA band) into its own reusable component that takes props for its text, so I can reuse them on service and area pages.
> 3. Keep the CSS variables in `:root` as global design tokens. Do not introduce other colours.
> 4. Keep all interactions from script.js: sticky header shadow, dropdowns, mobile drawer, reveal on scroll, count-up stats, quote form and postcode checker.
> 5. Keep it fully responsive (desktop, tablet and mobile, including the sticky mobile Call / Free quote bar) and accessible (aria labels, focus states, reduced motion).
> 6. Connect the quote form to my existing form handler or email.
> 7. Do not change the design, and do not add a dark mode toggle.

## Before going live

Replace the sample figures (review counts, "2,400+ moves", insurance amount, prices, years trading) and the trust-strip badges with your real details. Only show accreditations you actually hold.
