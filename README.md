# Chaitanya's Personal Website & Blog

A fast, minimalist, content-focused personal website and blog hosted on GitHub Pages ([sanivada.github.io](https://sanivada.github.io/)).

Built from scratch with **Astro 5**, vanilla CSS, and the **Computer Modern (`CMS`)** typography system.

---

## 🎨 Design Philosophy & Inspirations

This website combines design choices inspired by influential technical blogs:

- **Chris Olah ([colah.github.io](https://colah.github.io/))**:
  - **Typography**: Exact Computer Modern (`CMS`) serif font stack (`cmunrm`, `cmunbx`, `cmunti`, `cmunbi`) for headings and body prose.
  - **Homepage**: 80vw full-height content container resting on a fixed cover background image (`src/assets/beach.webp`).
  - **About Page**: Clean, full-viewport 55:45 split layout (photo on the left, bio on the right) with no vertical overflow.
  - **Prose**: Left-aligned, essay-grade reading experience with clean math/code support.
- **Lilian Weng ([lilianweng.github.io](https://lilianweng.github.io/))**:
  - Clean, unboxed post list view with metadata.
  - Instant, zero-FOUC (flash of unstyled content) Dark/Light mode theme switcher.
- **Christine ([christine8888.github.io](https://christine8888.github.io/))**:
  - Interactive, minimalist single-photo gallery viewer with instant randomized photo swapping.

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to GitHub Pages (Node 22)
├── public/
│   ├── favicon.ico             # Multi-resolution (16x16, 32x32, 48x48) favicon
│   ├── favicon.png             # 128x128px high-res favicon
│   ├── fonts/                  # Computer Modern WOFF font files
│   │   ├── cmunrm.woff         # Regular
│   │   ├── cmunbx.woff         # Bold
│   │   ├── cmunti.woff         # Italic
│   │   └── cmunbi.woff         # Bold Italic
│   └── images/                  # (moved) site images now live in src/assets/
├── src/
│   ├── assets/                  # Optimized at build time by astro:assets
│   │   ├── beach.webp           # Home page background cover (1920w WebP)
│   │   ├── chai-trek-wide.JPG   # About page portrait photo
│   │   └── gallery/             # Photography gallery images (auto-discovered & optimized)
│   ├── components/
│   │   ├── Header.astro        # Top navbar with navigation links and ThemeToggle
│   │   ├── Footer.astro        # Minimal site footer
│   │   ├── ThemeToggle.astro   # Lilian Weng-style Dark/Light theme toggle
│   │   └── WritingCard.astro   # Post row component with clickable tag chips
│   ├── content/
│   │   ├── posts/              # Technical essays & in-depth articles
│   │   ├── personal/           # Personal reflections & essays
│   │   └── notes/              # Working notes and rough drafts (e.g. MCP notes)
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Global master layout shell (theme script, header, footer)
│   │   └── PostLayout.astro    # Markdown article reading layout
│   ├── pages/
│   │   ├── index.astro         # Homepage (Recent writings on beach background)
│   │   ├── blog.astro          # Writings archive with live search & category tabs
│   │   ├── about.astro         # 55:45 split-screen about page
│   │   ├── gallery.astro       # Interactive photo gallery viewer
│   │   ├── contact.astro       # Minimal contact information
│   │   ├── posts/[...slug].astro    # Dynamic route for /posts/*
│   │   ├── personal/[...slug].astro # Dynamic route for /personal/*
│   │   └── notes/[...slug].astro    # Dynamic route for /notes/*
│   ├── content.config.ts       # Astro 5 Content Collections & Zod schema definitions
│   └── styles/
│       └── global.css          # Master stylesheet (CSS variables, CMS fonts, layouts)
├── astro.config.mjs            # Astro configuration (site: 'https://sanivada.github.io')
├── package.json
└── tsconfig.json
```

---

## 🛠️ Instructions for AI Agents & Developers

When modifying or adding features to this codebase, follow these established patterns:

### 1. Adding New Writings / Articles
All content lives in `src/content/` under three collections:
- `src/content/posts/` → Technical essays (`/posts/<slug>`)
- `src/content/personal/` → Thoughts on craft and life (`/personal/<slug>`)
- `src/content/notes/` → Rough notes and working ideas (`/notes/<slug>`)

Every Markdown file requires this frontmatter schema:
```markdown
---
title: "Article Title"
description: "A short summary of the article."
pubDate: 2026-08-18
tags: ["machine-learning", "systems"]
draft: false
---

Your markdown content here...
```

### 2. Adding Photos to the Gallery
- **Do not edit JSON or code to add photos.**
- Simply place any image (`.jpg`, `.jpeg`, `.png`, `.webp`) into `src/assets/gallery/`.
- `src/pages/gallery.astro` discovers all images in this folder automatically, and **Astro optimizes them at build time** (resized to max 1600px wide, converted to WebP) — no manual resizing needed.
- The same applies to other site images: reference them via `astro:assets` (`<Image>` / `getImage`) from `src/assets/` and they are optimized automatically.

### 3. Styling & CSS Rules
- Keep styling vanilla; all styles are centralized in `src/styles/global.css`.
- Headings and body prose use the `CMS` font family (`var(--font-cms)` and `var(--font-heading)`).
- Preserve the theme variables in `:root` and `[data-theme="dark"]`.
- Maintain left-aligned text orientation inside centered page containers.

### 4. Verification & Testing
Before committing or proposing changes, always run:
```bash
# 1. Type-check Astro files and content collection schemas
npm run check

# 2. Verify production static build
npm run build
```

---

## 🚀 Development & Build Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start local development server at `http://localhost:4321` |
| `npm run check` | Run Astro type diagnostics and schema validation |
| `npm run build` | Build production static site into `dist/` |
| `npm run preview` | Locally preview production build |

---

## 🚢 Deployment

The repository is configured for automatic deployment to **GitHub Pages** via GitHub Actions:
- **Trigger**: Every push to the `main` branch.
- **Workflow**: `.github/workflows/deploy.yml` (runs on Node 22).
- **Target URL**: `https://sanivada.github.io/`
