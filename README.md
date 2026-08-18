# sureshmuruges.github.io

Personal portfolio of Suresh M. — Senior Drupal Developer. Built with Next.js (App Router, static export),
Tailwind CSS v4, Motion, and MDX. Deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → out/
```

Node 22+ recommended.

## Where content lives

All content is data-driven — you can edit copy without touching components:

| Content | File |
| --- | --- |
| Name, title, contact, socials, summary | `data/profile.ts` |
| Work history, education, certifications | `data/experience.ts` |
| Skills matrix + home-page skill strip | `data/skills.ts` |
| Project cards (work + personal) | `data/projects.ts` |
| Work case-study bodies | `content/work/<slug>.mdx` |
| Tracksen deep-dive body | `content/projects/laravel-tracksen.mdx` |
| Downloadable resume PDF | `public/Suresh_M_Resume.pdf` |

## Adding a work project

1. Add an entry to `workProjects` in `data/projects.ts` — the `slug` becomes the route (`/work/<slug>/`),
   `tags` feed the filter on `/work`, and `size` controls its bento-grid footprint
   (`large` / `wide` / `tall` / `small`). Set `featured: true` to surface it on the home page.
2. Create `content/work/<slug>.mdx` with the case-study body. Code blocks get Shiki syntax highlighting;
   use ` ```php title="path/to/file.php" ` for titled excerpts.
3. `npm run build` — the static route, sitemap entry, and metadata are generated automatically.

## How deploy works

Push to `main` (or run the workflow manually) → `.github/workflows/deploy.yml`:

1. `actions/configure-pages` + `npm run build` produce the static site in `out/`
   (`output: 'export'` in `next.config.mjs`).
2. `actions/upload-pages-artifact` uploads `out/`.
3. `actions/deploy-pages` publishes it to GitHub Pages.

Because this repo is a **user site** (`sureshmuruges.github.io`), it deploys at the domain root — no
`basePath`/`assetPrefix`. If the repo is ever renamed to a project repo, set both to `/<repo-name>` in
`next.config.mjs`. `public/.nojekyll` prevents Jekyll from mangling `_next/` assets.

### One-time repo setting

In GitHub → **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
