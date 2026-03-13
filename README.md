# Hacking The World — Site MVP

Static website prepared for GitHub Pages.

## Structure

- `index.html` — landing
- `sessions.html` — keynote/session catalogue
- `airdrop.html` — Airdrop subsystem page
- `about.html` — project and founders
- `css/` — tokens, fonts, layout and components
- `js/main.js` — simple includes + nav state
- `components/` — reusable navbar + footer
- `generator/` — visual generator MVP
- `assets/` — icons, images, clusters and fonts

## Fonts

Custom fonts are not embedded as base64. Place real files in:

- `assets/fonts/HTW-Display.woff2`
- `assets/fonts/HTW-Body.woff2`
- `assets/fonts/HTW-Mono.woff2`

Until then, the site falls back to system fonts.

## GitHub Pages

1. Push repo to GitHub
2. Open **Settings → Pages**
3. Select **Deploy from branch**
4. Choose **main / root**

## Notes

This version is intentionally lightweight:
- no build tools
- no framework
- easy to edit manually
- generator can evolve independently
