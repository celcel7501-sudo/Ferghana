import assert from 'node:assert/strict';
import { buildStylePrompt, buildExcludeBlock, excludeConflicts } from './domain/styleBuilder.js';
import { buildDemoLyrics, buildStructure, estimateSeconds, formatDuration } from './domain/lyricsBuilder.js';
import { measure, compressStyle, STYLE_LIMIT, LYRICS_LIMIT } from './domain/sunoFields.js';
import { hookVerseRatio, ratioLabel } from './domain/ratio.js';
import { analyseHook, countSyllables } from './domain/hookBuilder.js';

const brief = {
  title: 'Dernier message', story: 'Un message vocal jamais envoyé.', emotion: 'Nostalgie',
  styleId: 'rap_fr', era: 'Années 90', bpm: 92, voice: 'tenor', language: 'fr',
  energy: 3, rapRatio: 55,
  instruments: ['Piano', 'Rhodes', 'Cordes', 'Basse fretless', 'Chœur gospel'],
  choirs: true, scratches: true,
  keywords: ['le dernier message', 'la boîte vocale', 'minuit'], avoid: ['autotune agressif'],
};

let pass = 0;
const check = (name, fn) => { fn(); pass++; console.log('  ok', name); };

console.log('\n== Champ de style ==');
const style = buildStylePrompt(brief);
check('tient sous 1000 caracteres', () => assert.ok(style.length <= STYLE_LIMIT));
check('ne contient aucun nom propre d artiste', () =>
  assert.ok(!/booba|ninho|kore|brandy|timbaland|rohff/i.test(style)));
check('declare le tempo', () => assert.match(style, /92 BPM/));
check('declare un element persistant', () => assert.match(style, /Persistent/));
console.log(`  -> ${style.length} / ${STYLE_LIMIT} caracteres`);

console.log('\n== Bloc d exclusion ==');
const exclude = buildExcludeBlock(brief, style);
check('reprend la demande utilisateur', () => assert.match(exclude, /autotune agressif/));
check('le bloc automatique ne contredit pas les harmonies empilees', () => {
  const auto = buildExcludeBlock({ ...brief, avoid: [] }, style);
  if (/stacked harmonies|choir/i.test(style)) assert.ok(!/\bno autotune\b/.test(auto));
});
check('un evitement utilisateur contradictoire est signale', () => {
  const warn = excludeConflicts(style, brief);
  assert.ok(warn.some((w) => /autotune agressif/.test(w)), 'aucun avertissement emis');
});
console.log('  conflits ecartes :', excludeConflicts(style).length);

console.log('\n== Paroles ==');
const hook = ['Garde le dernier message pour toi,','Moi j’ai gardé la nostalgie,','On s’était dit qu’on dirait rien,','Garde le dernier message pour toi.'].join('\n');
const lyrics = buildDemoLyrics({ brief, hook });
check('tient sous 5000 caracteres', () => assert.ok(lyrics.length <= LYRICS_LIMIT));
check('contient les balises attendues', () => {
  for (const t of ['[Intro', '[Couplet 1', '[Pré-refrain', '[Refrain', '[Post-refrain', '[Pont', '[Break', '[Outro'])
    assert.ok(lyrics.includes(t), 'manque ' + t);
});
check('integre le mot-cle fourni', () => assert.ok(lyrics.includes('le dernier message')));
console.log(`  -> ${lyrics.length} / ${LYRICS_LIMIT} caracteres`);

console.log('\n== Mesures ==');
const budget = measure(style, lyrics, exclude);
check('mesure coherente', () => {
  assert.equal(budget.styleChars, style.trim().length);
  assert.equal(budget.lyricsChars, lyrics.trim().length);
});
check('mode repli calcule', () => assert.ok(budget.styleWithExclude > budget.styleChars));
console.log(`  repli : ${budget.styleWithExclude} / ${STYLE_LIMIT} — possible : ${budget.fallbackPossible}`);

console.log('\n== Ratio ==');
const r = hookVerseRatio(lyrics);
check('ratio strictement positif', () => assert.ok(r > 0));
console.log(`  -> ${r} (${ratioLabel(r)})`);

console.log('\n== Squelette syllabique ==');
const a = analyseHook(hook);
check('quatre lignes detectees', () => assert.equal(a.lines.length, 4));
console.log('  syllabes :', a.syllables.join(' / '), '| regulier :', a.isRegular);
// « gard(e) » et « messag(e) » perdent leur e final en chant : 8 syllabes, pas 9.
check('compteur de syllabes correct', () => assert.equal(countSyllables('Garde le dernier message pour toi'), 8));
check('detecte un hook irregulier', () => assert.equal(analyseHook(hook).isRegular, false));

console.log('\n== Structure et duree ==');
const st = buildStructure(brief);
check('treize sections', () => assert.equal(st.length, 13));
console.log(`  -> ${formatDuration(estimateSeconds(st, brief.bpm))} a ${brief.bpm} BPM`);

console.log('\n== Compression ==');
const long = Array.from({length: 30}, (_, i) => `Sentence number ${i} with some texture words.`).join(' ');
const squeezed = compressStyle('Genre anthem, 92 BPM. ' + long, 400);
check('compresse sous la cible', () => assert.ok(squeezed.length < long.length));
check('preserve la premiere phrase', () => assert.ok(squeezed.startsWith('Genre anthem, 92 BPM.')));

console.log(`\n${pass} verifications passees.\n`);
