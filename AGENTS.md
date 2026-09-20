# AGENTS.md — Claude Code / coding agents

Instructions for editing this SEQ accountant preview kit.

## Hard constraints

1. **Edit config first.** Almost every prospect change belongs in `src/config/site.config.ts` (firmName, tagline, suburb, phone, email, colours, services, about, hero, CTA, SEO, formspreeId).
2. **Four pages only:** `/`, `/services`, `/about`, `/contact`. Do not add blog, portal, booking, shop, or extra languages.
3. **No invented compliance.** Do not invent ABN validity, TPB registration, professional memberships, fee guarantees, “ATO approved” language, or insurance claims unless the client supplied them in writing. Sample ABN/phone/email in the default config are **fictional placeholders** for demos.
4. **Australian English** for marketing copy (e.g. organised, honour only if needed; prefer plain AU business tone). Suburb/region should feel SEQ-real.
5. **Phone CTA stays prominent** — header, phone bar, and primary buttons should keep a clear `tel:` link from config.
6. **GitHub:** only work in `https://github.com/Bengitshub/seq-accountant-preview-kit`. Never push to other repos.

## Workflow for a new preview

1. `npm run new-preview` **or** manually edit `src/config/site.config.ts`
2. Rewrite `hero`, `about`, `services` so copy matches the real firm (still no invented credentials)
3. Set `formspreeId` when the form should work; otherwise leave `xxxxxxxx` and rely on mailto
4. `npm run build` — must succeed before handoff
5. Deploy via Vercel (see README)

## Safe to change

- Copy and colours in `site.config.ts`
- Layout spacing / Tailwind classes in existing components
- README / HANDOFF details for a specific client

## Avoid

- New routes or CMS
- Auth, databases, booking widgets
- Copying content from unrelated repos
- Claiming regulatory status you cannot verify

## Stack notes

- Astro 4 static site + `@astrojs/tailwind` + TypeScript
- Brand colours injected as CSS variables from config in `BaseLayout.astro`
