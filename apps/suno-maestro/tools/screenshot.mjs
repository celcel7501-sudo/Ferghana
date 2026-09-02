#!/usr/bin/env node
/**
 * Capture un ecran de l'app a une taille de telephone, via le rendu web.
 *
 *   npx expo export --platform web --output-dir dist
 *   (cd dist && python3 -m http.server 8900) &
 *   node tools/screenshot.mjs [url] [fichier-de-sortie]
 *
 * Signale aussi les requetes en echec et les erreurs console : une capture
 * jolie au-dessus d'une console rouge n'est pas un ecran qui marche.
 */
import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:8900/';
const out = process.argv[3] ?? 'ecran.png';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });

const problems = [];
page.on('pageerror', (e) => problems.push(`erreur JS : ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error') problems.push(`console : ${m.text()}`); });
page.on('response', (r) => { if (r.status() >= 400) problems.push(`${r.status()} ${r.url()}`); });

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
await page.screenshot({ path: out });

console.log(`capture : ${out}`);
console.log(problems.length ? `problemes :\n  ${problems.join('\n  ')}` : 'problemes : aucun');

await browser.close();
