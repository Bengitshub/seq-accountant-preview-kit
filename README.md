# SEQ Accountant Preview Kit

Config-driven marketing website kit for South East Queensland accounting firm **prospect previews**.

Sample firm: **Harbour Tax & Advisory** (Cleveland QLD).

Stack: **Astro 4 + Tailwind CSS + TypeScript** (static output).

Repo: https://github.com/Bengitshub/seq-accountant-preview-kit

---

## Local run

```bash
npm install
npm run dev
```

Open http://localhost:4321

Production build:

```bash
npm run build
npm run preview
```

Output lands in `dist/` (static HTML/CSS/JS).

---

## Create a new prospect preview

**Preferred path — edit one file:**

1. Open `src/config/site.config.ts`
2. Update branding fields:
   - `firmName`, `tagline`, `suburb`, `region`
   - `phone`, `phoneHref`, `email`, optional `abn`, `addressLine`
   - `colours` (primary / secondary / accent / muted)
   - `hero`, `cta`, `about`, `services[]`
   - `seo.defaultTitle`, `seo.titleTemplate`, `seo.defaultDescription`
   - `formspreeId` (see Contact form below)
3. Keep **only** these routes: `/`, `/services`, `/about`, `/contact`
4. Run `npm run build` and spot-check on mobile widths
5. Deploy (below)

**Optional helper:**

```bash
npm run new-preview
```

Prompts for firm name, suburb, phone, email, Formspree ID, etc., then rewrites key fields in `site.config.ts`. **Always review** hero / about / services copy afterwards — do not invent licences, fee guarantees, or compliance claims the client did not supply.

---

## Contact form (Formspree)

1. Create a form at [formspree.io](https://formspree.io/)
2. Copy the form ID (e.g. `xyzabcde`)
3. Set `formspreeId` in `src/config/site.config.ts` (replace the placeholder `xxxxxxxx`)

Until configured, the Contact page shows a warning and disables the submit button. A **mailto fallback** to `config.email` remains available.

---

## Deploy (Vercel — recommended)

One path that works for this static Astro site:

1. Push this repo (or a fork/branch) to GitHub
2. In [vercel.com](https://vercel.com): **Add New Project** → import this repository
3. Framework preset: **Astro** (auto-detected)
4. Build command: `npm run build` · Output: `dist`
5. Deploy

Custom domain: add in Vercel → Domains, then point DNS as instructed.

**Alternative (static hosting):** run `npm run build` and upload `dist/` to Netlify, Cloudflare Pages, or any static host.

---

## Project map

```
src/
  config/site.config.ts   ← edit this for each prospect
  components/             Header, Footer, PhoneBar, CtaBand
  layouts/BaseLayout.astro
  pages/                  index, services, about, contact
  styles/global.css
scripts/new-preview.mjs
AGENTS.md                 Claude Code / agent instructions
HANDOFF.md                Client handoff after go-live
```

Out of scope: client portals, booking engines, e-commerce, blogs, multi-language.

---

## Claude Code / agents

See [AGENTS.md](./AGENTS.md). Short version: edit `site.config.ts` first; four pages only; no invented compliance.
