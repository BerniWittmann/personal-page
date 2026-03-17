# CLAUDE.md — Personal Page

Berni's personal portfolio site at [bernhardwittmann.com](https://bernhardwittmann.com).

## Stack

- **Framework**: Astro 5 (static site generator)
- **Styling**: Scoped CSS per component + global CSS custom properties
- **Content**: Markdown/MDX via Astro content collections
- **Fonts**: Bunny Fonts (Public Sans body, Rubik headings)
- **Integrations**: MDX, Sitemap, Swup (page transitions), Playform Compress (image optimization)
- **Analytics**: TWIPLA

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview production build locally
```

## Project Structure

```
src/
  components/     # Reusable Astro components (Hero, Skills, Grid, Nav, etc.)
  content/        # Content collections
    work/         # Portfolio projects (MDX)
    photos/       # Photography gallery (Markdown)
  layouts/        # BaseLayout wraps all pages
  pages/          # File-based routing (index, about, work, photos)
  assets/         # Images (portrait, at-work, project thumbnails, etc.)
  styles/         # global.css with CSS custom properties
public/           # Static assets (favicon, OG image)
```

## Content Collections

Both collections are defined in `src/content/config.ts` with Zod schemas.

**work** — portfolio projects:
- Required: `title`, `description`, `publishDate`, `tags`, `img`
- Optional: `img_alt`, `hiddenOnMain` (default `false` — set `true` to hide from homepage grid)

**photos** — photography gallery:
- Required: `title`, `description`, `img`, `aspectRatio`, `publishDate`
- Optional: `unsplashUrl`, `hiddenOnMain`

To add a project, create a new `.mdx` file in `src/content/work/`. To add a photo, create a `.md` file in `src/content/photos/`.

## Theme System

Colors use a `--gray-0` (darkest) to `--gray-999` (lightest) scale that **inverts** in dark mode — light mode text `var(--gray-0)` becomes white in dark mode automatically. Accent colors are blue-based (`--accent-regular`, `--accent-light`, `--accent-dark`).

Responsive breakpoints: `50em` (main desktop layout), `60em` (social links in nav).

## Key Conventions

- Sorted by `publishDate` descending — newest projects/photos appear first
- Homepage shows the 4 most recent items per section (excluding `hiddenOnMain: true`)
- Page transitions handled by Swup — avoid breaking the `swup` global instance
- No JS frameworks — Astro components only; interactive elements use native custom elements (`<theme-toggle>`, `<menu-button>`)
