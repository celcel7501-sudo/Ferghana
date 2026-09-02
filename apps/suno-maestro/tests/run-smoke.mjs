#!/usr/bin/env node
/** Compile le noyau, reecrit les alias @/ puis lance les verifications. */
import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = '/tmp/sm-build';

execSync(`npx tsc -p ${join(here, 'smoke.tsconfig.json')}`, { stdio: 'inherit', cwd: join(here, '..') });

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

for (const f of walk(out).filter((p) => p.endsWith('.js'))) {
  const depth = relative(out, f).split('/').length - 1;
  const pre = depth ? '../'.repeat(depth) : './';
  let s = readFileSync(f, 'utf8');
  s = s.replace(/from '@\/([^']+)'/g, (_, m) => `from '${pre}${m}.js'`);
  s = s.replace(/from '(\.\/[^']+)'(?!\.js)/g, (_, m) => `from '${m}.js'`);
  writeFileSync(f, s);
}

copyFileSync(join(here, 'smoke.source.mjs'), join(out, 'smoke.mjs'));
execSync(`node ${join(out, 'smoke.mjs')}`, { stdio: 'inherit' });
