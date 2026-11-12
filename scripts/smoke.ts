import assert from 'node:assert/strict';
import { GENRES, STRUCTURES, VOCALS } from '../src/data/genres.ts';
import { LIBRARY } from '../src/data/library.ts';
import { MASTER_PROMPT } from '../src/data/masterPrompt.ts';
import { audit, LANGUAGES, LIMITS } from '../src/lib/engine.ts';
import { computeOutput, DEFAULT_STATE, type GenState } from '../src/lib/state.ts';

const langs = LANGUAGES.map((l) => l.id);

function run(partial: Partial<GenState>) {
  return computeOutput({ ...DEFAULT_STATE, ...partial }, MASTER_PROMPT);
}

const baseline = run({});
assert.equal(baseline.layers.length, 6);
assert.equal(baseline.titles.length, 3);
assert.match(baseline.style, /\d+\s?BPM/);
assert.match(baseline.lyrics, /\[[^\]]+\|[^\]]+\]/);
assert.ok(baseline.master.includes(DEFAULT_STATE.idea));
assert.ok(!baseline.master.includes('{{IDEE}}'));
assert.equal(baseline.tracks.length, 0);

let maxStyle = 0;
let maxLyrics = 0;
for (const genre of GENRES) {
  for (const structure of STRUCTURES) {
    for (const lang of langs) {
      const out = run({
        genreId: genre.id,
        structureId: structure.id,
        lang,
        bpm: genre.bpm[0],
        mood: genre.moods[0],
        vocalId: VOCALS[genre.id.length % VOCALS.length].id,
        idea: 'Un album road trip où chaque titre est dédié à un État',
        seed: 3,
      });
      assert.equal(out.layers.length, 6, genre.id);
      assert.ok(out.style.length > 40, genre.id);
      assert.ok(out.exclude.length > 0, genre.id);
      assert.ok(out.blocks.length === structure.sections.length, `${genre.id}/${structure.id}`);
      assert.match(out.lyrics, /\[[^\]]+\|/);
      maxStyle = Math.max(maxStyle, out.style.length);
      maxLyrics = Math.max(maxLyrics, out.lyrics.length);
    }
  }
}

const album = run({ album: true, albumCount: 12, idea: 'Un album road trip dédié aux États' });
assert.equal(album.tracks.length, 12);
assert.ok(album.tracks.every((t) => t.bpm >= 60 && t.bpm <= 180));

const own = run({
  keepOwn: true,
  ownLyrics: 'Ligne personnelle un\nLigne personnelle deux\nLigne personnelle trois',
  structureId: 'radio',
});
assert.ok(own.lyrics.includes('Ligne personnelle un'));

const imported = run({
  importedStyle: 'juste un style court',
  importedExclude: 'country',
  importedName: 'Court',
});
assert.equal(imported.style, 'juste un style court');
assert.equal(imported.layers.length, 1);
assert.equal(imported.exclude, 'country');

const bad = audit('professional radio-ready hit by Taylor Swift', 'x', 'no tags here');
assert.ok(bad.issues.some((i) => i.level === 'error' && /génériques/i.test(i.text)));
assert.ok(bad.issues.some((i) => i.level === 'error' && /artiste/i.test(i.text)));
assert.ok(bad.issues.some((i) => i.level === 'warn'));

const good = audit(baseline.style, baseline.exclude, baseline.lyrics);
assert.ok(good.rows.every((r) => r.ok));
assert.ok(baseline.style.length <= LIMITS.style);
assert.ok(baseline.lyrics.length <= LIMITS.lyrics);
assert.equal(LIBRARY.length, 28);
assert.ok(GENRES.length >= 20);
assert.equal(VOCALS.length, 14);

console.log(
  JSON.stringify(
    {
      genres: GENRES.length,
      structures: STRUCTURES.length,
      languages: langs.length,
      vocals: VOCALS.length,
      library: LIBRARY.length,
      maxStyle,
      maxLyrics,
      baselineStyle: baseline.style.length,
      baselineLyrics: baseline.lyrics.length,
      sampleTitle: baseline.titles[0],
    },
    null,
    2,
  ),
);
