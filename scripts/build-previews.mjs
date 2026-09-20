#!/usr/bin/env node
/**
 * Build all prospect previews into deploy/previews/<slug>/ for GitHub Pages.
 * Allowed remote only: Bengitshub/seq-accountant-preview-kit
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const SITE = 'https://bengitshub.github.io';
const REPO_BASE = '/seq-accountant-preview-kit';

const BATCH_SLUGS = [
  'optio-accountants',
  'suncoast-accounting-bookkeeping',
  'absolute-business-solutions',
  'jorgensen-associates',
  'accounting-balance',
  'crane-crain',
  'accounting-on-me',
  'eyes-on-business',
];

const ALL_SLUGS = ['harbour', ...BATCH_SLUGS];

function writeSiteConfig(slug) {
  const content = `/**
 * Active prospect config — switched by scripts/build-previews.mjs during multi-builds.
 * Default on main: Harbour demo sample.
 */
export type { ServiceItem, SiteConfig } from './types';
export { default } from '../prospects/${slug}';
`;
  fs.writeFileSync(path.join(root, 'src/config/site.config.ts'), content);
}

function writeAstroConfig({ base, outDir }) {
  const content = `import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: '${SITE}',
  base: '${base}',
  outDir: '${outDir}',
});
`;
  fs.writeFileSync(path.join(root, 'astro.config.mjs'), content);
}

function firmNameFromSlug(slug) {
  const file = path.join(root, 'src/prospects', `${slug}.ts`);
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/firmName:\s*"([^"]+)"/);
  return m ? m[1] : slug;
}

function suburbFromSlug(slug) {
  const file = path.join(root, 'src/prospects', `${slug}.ts`);
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/suburb:\s*"([^"]+)"/);
  return m ? m[1] : '';
}

console.log('Building multi-prospect previews…\n');

const deployRoot = path.join(root, 'deploy');
fs.rmSync(deployRoot, { recursive: true, force: true });
fs.mkdirSync(path.join(deployRoot, 'previews'), { recursive: true });

// Copy favicon to deploy root
fs.copyFileSync(
  path.join(root, 'public/favicon.svg'),
  path.join(deployRoot, 'favicon.svg'),
);

for (const slug of ALL_SLUGS) {
  const base = `${REPO_BASE}/previews/${slug}/`;
  const outDir = `deploy/previews/${slug}`;
  console.log(`→ ${slug} (base ${base})`);
  writeSiteConfig(slug);
  writeAstroConfig({ base, outDir });
  execSync('npx astro build', { cwd: root, stdio: 'inherit' });
}

// Restore defaults for main branch development
writeSiteConfig('harbour');
writeAstroConfig({
  base: `${REPO_BASE}/`,
  outDir: 'dist',
});

// Landing index
const cards = BATCH_SLUGS.map((slug, i) => {
  const name = firmNameFromSlug(slug);
  const suburb = suburbFromSlug(slug);
  const href = `${REPO_BASE}/previews/${slug}/`;
  return `    <li>
      <a href="${href}">
        <span class="num">${i + 1}</span>
        <span class="meta">
          <strong>${name}</strong>
          <span>${suburb}</span>
        </span>
      </a>
    </li>`;
}).join('\n');

const harbourHref = `${REPO_BASE}/previews/harbour/`;

fs.writeFileSync(
  path.join(deployRoot, 'index.html'),
  `<!doctype html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SEQ Accountant Preview Kit — Batch 1</title>
  <link rel="icon" href="${REPO_BASE}/favicon.svg" type="image/svg+xml" />
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; }
    body { margin: 0; background: #f4f7fa; color: #0b3b5a; }
    main { max-width: 720px; margin: 0 auto; padding: 3rem 1.25rem; }
    h1 { font-size: 1.75rem; margin: 0 0 0.5rem; }
    p { color: #475569; line-height: 1.55; }
    ul { list-style: none; padding: 0; margin: 2rem 0; display: grid; gap: 0.75rem; }
    a { display: flex; gap: 1rem; align-items: center; text-decoration: none; color: inherit;
        background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem 1.15rem; }
    a:hover { border-color: #1a5f7a; box-shadow: 0 4px 14px rgb(11 59 90 / 8%); }
    .num { font-weight: 700; color: #c4a35a; width: 1.5rem; }
    .meta { display: flex; flex-direction: column; gap: 0.15rem; }
    .meta span { font-size: 0.875rem; color: #64748b; }
    .demo { margin-top: 2rem; font-size: 0.9rem; }
  </style>
</head>
<body>
  <main>
    <h1>SEQ Accountant Preview Kit</h1>
    <p>Public speculative brochure previews for batch-1 A-leads. Demonstration only — not live client sites.</p>
    <ul>
${cards}
    </ul>
    <p class="demo">Sample demo: <a href="${harbourHref}" style="display:inline;border:none;padding:0;background:none;color:#1a5f7a;text-decoration:underline;">Harbour Tax &amp; Advisory (Cleveland)</a></p>
  </main>
</body>
</html>
`,
);

console.log('\nDone. Output in deploy/');
console.log(`Landing: ${SITE}${REPO_BASE}/`);
for (const slug of BATCH_SLUGS) {
  console.log(`  ${SITE}${REPO_BASE}/previews/${slug}/`);
}
