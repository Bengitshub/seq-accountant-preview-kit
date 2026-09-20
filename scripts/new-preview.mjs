#!/usr/bin/env node
/**
 * Interactive helper to stamp a new prospect into src/config/site.config.ts
 * Run: npm run new-preview
 *
 * This rewrites key branding fields. Review copy (about, services, hero) afterwards —
 * do not invent compliance claims the client did not supply.
 */

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, '..', 'src', 'config', 'site.config.ts');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q, def = '') =>
  new Promise((resolve) => {
    const hint = def ? ` [${def}]` : '';
    rl.question(`${q}${hint}: `, (ans) => resolve(ans.trim() || def));
  });

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function replaceStringField(src, field, value) {
  const re = new RegExp(`(${field}:\\s*)'([^']*)'`, 'm');
  if (!re.test(src)) {
    console.warn(`Warning: could not find field "${field}" — skipped.`);
    return src;
  }
  return src.replace(re, `$1'${esc(value)}'`);
}

console.log('\nSEQ Accountant Preview Kit — new prospect\n');
console.log('Enter details for the sample/config firm. Press Enter to keep the default.\n');

const firmName = await ask('Firm name', 'Harbour Tax & Advisory');
const tagline = await ask('Tagline', 'Clear advice for local businesses and families');
const suburb = await ask('Suburb', 'Cleveland');
const region = await ask('Region', 'Redland City, QLD');
const phone = await ask('Phone (display)', '07 3488 2140');
const phoneDigits = phone.replace(/\D/g, '');
const phoneHrefDefault = phoneDigits.startsWith('61')
  ? `tel:+${phoneDigits}`
  : phoneDigits.startsWith('0')
    ? `tel:+61${phoneDigits.slice(1)}`
    : `tel:+${phoneDigits}`;
const phoneHref = await ask('Phone href', phoneHrefDefault);
const email = await ask('Email', 'hello@example.com.au');
const abn = await ask('ABN (optional)', '');
const formspreeId = await ask('Formspree form ID', 'xxxxxxxx');

let src = fs.readFileSync(configPath, 'utf8');
src = replaceStringField(src, 'firmName', firmName);
src = replaceStringField(src, 'tagline', tagline);
src = replaceStringField(src, 'suburb', suburb);
src = replaceStringField(src, 'region', region);
src = replaceStringField(src, 'phone', phone);
src = replaceStringField(src, 'phoneHref', phoneHref);
src = replaceStringField(src, 'email', email);
src = replaceStringField(src, 'formspreeId', formspreeId);

if (abn) {
  if (/abn:\s*'[^']*'/.test(src)) {
    src = replaceStringField(src, 'abn', abn);
  }
} 

// Refresh default SEO strings to match firm/suburb
src = replaceStringField(
  src,
  'defaultTitle',
  `${firmName} | Accountants in ${suburb} QLD`,
);
src = replaceStringField(src, 'titleTemplate', `%s | ${firmName}`);
src = replaceStringField(
  src,
  'defaultDescription',
  `${suburb} accountants for tax returns, BAS, bookkeeping and practical business advice. Serving ${region}.`,
);

fs.writeFileSync(configPath, src);
rl.close();

console.log(`\nUpdated ${configPath}`);
console.log('Next:');
console.log('  1. Review hero, about, services copy in site.config.ts (no invented compliance).');
console.log('  2. npm run dev');
console.log('  3. Deploy (see README).\n');
