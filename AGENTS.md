# AGENTS.md

## Commands
- `npm install` - install dependencies (npm, lockfile: package-lock.json)
- `npm run dev` / `npm run start` - dev server at http://localhost:4321
- `npm run build` - build to `./dist/` (primary verification; no separate test/lint/typecheck scripts defined)
- `npm run preview` - preview built site locally before deploy
- `npm run astro ...` - run Astro CLI (e.g. `astro check`)

## Architecture
- Astro 3.1.0 static site (blog + portfolio). TypeScript strict with `strictNullChecks: true` (extends `astro/tsconfigs/strict`).
- Content collections: `src/content/blog/*.md` validated by `src/content/config.ts`. Required: `title`, `description`, `pubDate`. Optional: `postTags`, `updatedDate`, `heroImage`.
- Real entrypoints: `src/pages/` (routes), `src/layouts/`, `src/components/`, content in `src/content/`. Global constants in `src/consts.ts`.
- Integrations: `@astrojs/mdx`, `@astrojs/sitemap`. Config: `astro.config.mjs` (site `https://devstylish.com`).

## Deployment
- GitHub Pages via `.github/workflows/astro.yml` on push to `main`. CI sets `--site`/`--base` dynamically from Pages; local builds use config site.
- Prod serves under subpath `/webfolio`. NEVER use root-absolute `href="/..."`/`src="/..."` for internal links or `public/` assets — always wrap with `withBase()` from `src/consts.ts`. Verify with `npx astro build --site https://devstylish.github.io --base /webfolio` and grep `dist/` for `src="/` or `href="/blog"`.
