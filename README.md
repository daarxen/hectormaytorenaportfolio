# Hector Maytorena Abreu — Personal Brand Site

**Business-minded. Finance-driven. Always evolving.**

A static [Astro](https://astro.build) site deployed to **Cloudflare Workers** as static assets.

## Commands

| Command          | Action                                                    |
| :--------------- | :-------------------------------------------------------- |
| `bun install`    | Install dependencies                                      |
| `astro dev --background` | Start the dev server at `localhost:4321` (stop with `astro dev stop`) |
| `bun run build`  | Build the production site to `./dist/`                    |
| `bun run check`  | Type-check Astro/TS files                                 |
| `bun run cf:dev` | Build, then serve `dist/` locally through Wrangler (`localhost:8787`) |
| `bun run deploy` | Build and deploy to Cloudflare Workers                    |

## Updating content

| What                         | Where                                   |
| :--------------------------- | :-------------------------------------- |
| Email, LinkedIn, nav, tagline | `src/data/site.ts`                     |
| Work experience               | `src/data/experience.ts`               |
| Projects / case studies       | `src/data/projects.ts` (each entry → `/work/<slug>/`) |
| Evolution story chapters      | `src/components/Evolution.astro` (top of file) |
| Education & recognition       | `src/components/Education.astro`        |
| Skills, interests             | `src/components/Skills.astro`, `Interests.astro` |
| Photos                        | `src/assets/photos/` (auto-optimized to AVIF/WebP) |

**Résumé:** add the PDF as `public/Hector-Maytorena-Abreu-Resume.pdf`. On the next build, every résumé
button switches from “Request by email” to view/download, and `/resume/` embeds the PDF.

**Evolution photos:** chapters 1–2 render a typographic quote card. To use a photo instead, import it
and set `image`, `alt` and `caption` on that chapter.

## Deploying to Cloudflare Workers

The site is fully static, so no adapter is needed: `wrangler.jsonc` serves `./dist` with Workers static assets
(clean trailing-slash URLs, custom `404.html`, headers from `public/_headers`).

1. `bunx wrangler login` (one-time; opens Cloudflare in your browser).
2. `bun run deploy`. The site goes live at `hector-maytorena-portfolio.<your-subdomain>.workers.dev`.
3. Custom domain: once `hectormaytorena.com` is registered and added to your Cloudflare account,
   uncomment the `routes` block in `wrangler.jsonc` and redeploy. If you use a different domain, also update
   `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.

Alternatively, connect the Git repo in **Cloudflare dashboard → Workers & Pages → Create → Import a repository**
with build command `bun run build` and deploy command `bunx wrangler deploy`.
