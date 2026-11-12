import { GENRES, STRUCTURES, VOCALS, type Genre } from '../data/genres';

/* ---------------- RNG déterministe ---------------- */
export function seedFrom(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function makeRng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Rng = () => number;
const pick = <T,>(arr: T[], rng: Rng): T => arr[Math.floor(rng() * arr.length) % arr.length];
const pickN = <T,>(arr: T[], n: number, rng: Rng): T[] => {
  const pool = [...arr];
  const out: T[] = [];
  while (out.length < n && pool.length) out.push(pool.splice(Math.floor(rng() * pool.length), 1)[0]);
  return out;
};

/* ---------------- Banques de lignes ---------------- */
const STOPWORDS = new Set(
  `le la les un une des de du d au aux et ou avec pour dans sur par je tu il elle on nous vous ils elles me te se ce cet cette ces mon ma mes ton ta tes son sa ses notre nos votre vos leur leurs qui que quoi dont est sont était être avoir plus moins très vraiment comme mais donc car si ne pas je tu the a an and or with for in on of to my your his her is are was be it this that about track song write like make wants each one dedicated different state paroie paroles chanson musique style prompt suno`.split(
    /\s+/,
  ),
);

export function keywords(idea: string): string[] {
  const raw = idea
    .toLowerCase()
    .replace(/[^\p{L}\s'-]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
  const uniq = Array.from(new Set(raw));
  return uniq.sort((a, b) => b.length - a.length).slice(0, 5);
}

const HOOK_FORMULAS: Record<string, string[]> = {
  fr: [
    'Tout ce que je voulais, c’était {kw}',
    'On a parlé de {kw} jusqu’à trois heures du matin',
    'Ne me dis pas que {kw} ne compte pas',
    'Je marche sur des braises et je n’appelle pas ça {kw}',
    'Il reste juste {kw} et le silence après',
    'Promets-moi {kw} une dernière fois',
  ],
  en: [
    'All I ever wanted was {kw}',
    'We talked about {kw} till three in the morning',
    'Don’t tell me {kw} never counted',
    'I walk on embers and I don’t call it {kw}',
    'There’s just {kw} and the silence after',
    'Promise me {kw} one last time',
  ],
  es: [
    'Todo lo que quería era {kw}',
    'Hablamos de {kw} hasta las tres de la mañana',
    'No me digas que {kw} no contaba',
    'Camino sobre brasas y no lo llamo {kw}',
    'Queda solo {kw} y el silencio después',
    'Prométeme {kw} una última vez',
  ],
  de: [
    'Ich wollte nur {kw}',
    'Wir sprachen von {kw} bis drei Uhr nachts',
    'Sag nicht, {kw} zählte nie',
    'Ich laufe über Glut und nenne es nicht {kw}',
    'Nur {kw} und die Stille danach',
    'Versprich mir {kw} ein letztes Mal',
  ],
  it: [
    'Volevo solo {kw}',
    'Abbiamo parlato di {kw} fino alle tre',
    'Non dirmi che {kw} non contava',
    'Cammino sulle braci e non lo chiamo {kw}',
    'Resta solo {kw} e il silenzio dopo',
    'Promettimi {kw} un’ultima volta',
  ],
  pt: [
    'Eu só queria {kw}',
    'Falamos de {kw} até às três da manhã',
    'Não me digas que {kw} não contava',
    'Ando sobre brasas e não chamo isso {kw}',
    'Sobra {kw} e o silêncio depois',
    'Promete {kw} uma última vez',
  ],
  ja: ['ほしくは {kw} だけ', '朝の三時まで {kw} を話した', '{kw} は無意味じゃなかったと', '炭の上を歩いても {kw} とは言わない', '残るのは {kw} と静けさ', '最後にもう一度 {kw} と約束して'],
  ko: ['내가 원한 건 {kw} 뿐이야', '새 세 시까지 {kw} 이야기를 했어', '{kw} 는 의미 없었다고 말하지 마', '불씨 위를 걸어도 {kw} 라 부르지 않아', '남은 건 {kw} 와 그 뒤의 침묵', '마지막으로 {kw} 를 약속해 줘'],
};

const VERSE_BANK: Record<string, string[]> = {
  fr: [
    'Les néons m’ont appris à mentir doucement',
    'Je garde la fenêtre ouverte pour le bruit de la rue',
    'On compte les pièces et on appelle ça un plan',
    'Ton nom dans ma gorge comme une chanson à moitié apprise',
    'La ville respire plus vite que moi ces temps-ci',
    'J’ai vendu mes certitudes pour un aller simple',
    'On invente un avenir avec ce qui traîne',
    'Le matin arrive sans demander la permission',
  ],
  en: [
    'The neon taught me how to lie politely',
    'I keep the window open for the sound of the street',
    'We count the coins and call it a plan',
    'Your name sits in my throat like a half-learned song',
    'The city breathes faster than me lately',
    'I sold my certainties for a one-way ticket',
    'We invent a future out of what is lying around',
    'Morning arrives without asking permission',
  ],
  es: [
    'El neón me enseñó a mentir con suavidad',
    'Dejo la ventana abierta por el ruido de la calle',
    'Contamos las monedas y lo llamamos un plan',
    'Tu nombre en la garganta como una canción a medio aprender',
    'La ciudad respira más rápido que yo últimamente',
    'Vendí mis certezas por un billete de ida',
    'Inventamos un futuro con lo que queda',
    'La mañana llega sin pedir permiso',
  ],
  de: ['Das Neonlicht lehrte mich höflich zu lügen', 'Ich lasse das Fenster offen für den Lärm der Straße', 'Wir zählen Münzen und nennen es einen Plan', 'Dein Name in meinem Hals wie ein halb gelerntes Lied', 'Die Stadt atmet schneller als ich, gerade', 'Ich verkaufte meine Gewissheiten für eine einfache Fahrt', 'Wir erfinden eine Zukunft aus dem, was liegt', 'Der Morgen kommt ohne Erlaubnis'],
  it: ['Il neon mi ha insegnato a mentire gentilmente', 'Lascio la finestra aperta per il rumore della strada', 'Contiamo le monete e lo chiamiamo un piano', 'Il tuo nome in gola come una canzione imparata a metà', 'La città respira più veloce di me, ultimamente', 'Ho venduto le mie certezze per un solo andata', 'Inventiamo un futuro con quello che resta', 'Il mattino arriva senza chiedere permesso'],
  pt: ['O neon me ensinou a mentir com jeito', 'Deixo a janela aberta pelo barulho da rua', 'Contamos as moedas e chamamos de plano', 'Teu nome na garganta como canção mal aprendida', 'A cidade respira mais rápido que eu', 'Vendi minhas certezas por passagem de ida', 'Inventamos um futuro com o que sobrou', 'A manhã chega sem pedir licença'],
  ja: ['ネオンは丁寧に嘘をつくことを教えた', '通り騒音のために窓を開けておく', '小銭を数えてそれを計画と呼ぶ', '喉に途中まで覚えた歌のように名前がいる', '街は最近僕より速く息をする', '確かなものを片道切符に変えた', '転がっているもので未来をでっち上げる', '朝は許可を求めずに来る'],
  ko: ['네온은 점잖게 거짓말하는 법을 가르쳤다', '거리 소리 때문에 창문을 열어 둔다', '동전을 세고 그걸 계획이라 부른다', '반쯤 외운 노래처럼 목에 이름이 있다', '요즘 도시는 나보다 빨리 숨을 쉰다', '확신을 편도 표로 팔아버렸다', '남은 걸로 미래를 지어낸다', '아침은 허락 없이 찾아온다'],
};

const LANG_LABEL: Record<string, string> = {
  fr: 'français',
  en: 'anglais',
  es: 'espagnol',
  de: 'allemand',
  it: 'italien',
  pt: 'portugais',
  ja: 'japonais',
  ko: 'coréen',
};

export const LANGUAGES = Object.keys(LANG_LABEL).map((id) => ({ id, label: LANG_LABEL[id] }));

/* ---------------- Cue de section ---------------- */
type CueCtx = { genre: Genre; vocalId: string; bpm: number };

const VOCAL = (id: string) => VOCALS.find((v) => v.id === id) ?? VOCALS[0];

function cueFor(section: string, ctx: CueCtx, rng: Rng): string {
  const inst = ctx.genre.instrumentation;
  const g = ctx.genre.genreLayer;
  const s = section.toLowerCase();
  if (s.startsWith('intro')) return `${pick(inst, rng)} seul(e), tout le reste entre progressivement`;
  if (s.startsWith('intro') || s.startsWith('outro')) return `${inst[0]} seul(e), fondu`;
  if (s.startsWith('build')) return `tension montante, roulement de caisse claire, riser, la basse s’ouvre`;
  if (s.startsWith('drop')) return `plein régime, ${pick(inst, rng)} en avant, réverbération large`;
  if (s.startsWith('breakdown')) return `batterie sortie, nappes et une seule voix`;
  if (s.includes('pre')) return `la basse monte, la voix s’élève d’une nuance`;
  if (s.startsWith('hook') || s.startsWith('chorus') || s.startsWith('final'))
    return `${VOCAL(ctx.vocalId).textures[0]}, ${ctx.genre.production[0]}, plein régime`;
  if (s.startsWith('bridge')) return `batterie sortie, ${pick(inst, rng)} et voix uniquement, texture dépouillée`;
  if (s.startsWith('instrumental')) return `solo de ${pick(inst, rng)}, pas de voix`;
  if (s.startsWith('verse')) return `${VOCAL(ctx.vocalId).textures[1] ?? 'phrasé posé'}, voix proche et sèche`;
  return `${g}, ${ctx.genre.production[1] ?? 'mixage équilibré'}`;
}

/* ---------------- Style prompt : 6 couches ---------------- */
export type StyleResult = { text: string; layers: { n: string; label: string; value: string }[] };

export function buildStyle(opts: {
  genre: Genre;
  bpm: number;
  vocalId: string;
  mood: string;
  structureId: string;
  idea: string;
  rng: Rng;
}): StyleResult {
  const { genre, bpm, vocalId, mood, structureId, idea, rng } = opts;
  const voc = VOCAL(vocalId);
  const st = STRUCTURES.find((s) => s.id === structureId) ?? STRUCTURES[0];
  const hook = st.sections.find((x) => /^(hook|chorus|drop)/i.test(x)) ?? 'Chorus';
  const kw = keywords(idea);
  const texture = pick(voc.textures, rng);
  const inst = pickN(genre.instrumentation, Math.min(4, genre.instrumentation.length), rng).join(', ');
  const prod = pickN(genre.production, Math.min(2, genre.production.length), rng).join(', ');

  const layers = [
    { n: '1', label: 'Genre', value: `${genre.genreLayer} (${genre.name})` },
    { n: '2', label: 'Tempo', value: `${bpm} BPM` },
    { n: '3', label: 'Vocal', value: `${voc.label}, ${voc.desc}, ${texture}` },
    { n: '4', label: 'Instrumentation', value: inst },
    {
      n: '5',
      label: 'Structure',
      value: `plan ${st.sections.length} sections, ${hook.toLowerCase()} au premier plan${kw[0] ? ` autour de « ${kw[0]} »` : ''}`,
    },
    { n: '6', label: 'Production', value: `${prod}, ambiance ${mood}` },
  ];

  const text = `${genre.genreLayer}, ${bpm} BPM, ${voc.label.toLowerCase()} — ${voc.desc}, ${texture}, ${inst}, ${
    st.sections.length
  } sections avec ${hook.toLowerCase()} en premier plan, ${prod}, ${mood}`;
  return { text, layers };
}

/* ---------------- Exclude styles ---------------- */
export function buildExclude(genre: Genre, bpm: number, _rng?: Rng): string {
  const neg: string[] = [...genre.exclude];
  if (bpm >= 120) neg.push('ballade lente', 'intro de 15 secondes');
  if (bpm < 100) neg.push('drop de festival', 'tempo rapide');
  neg.push('tag générique radio-ready', 'nom d’artiste réel');
  return Array.from(new Set(neg)).slice(0, 7).join(', ');
}

/* ---------------- Paroles ---------------- */
export type LyricBlock = { tag: string; cue: string; lines: string[] };

export function buildLyrics(opts: {
  genre: Genre;
  structureId: string;
  vocalId: string;
  bpm: number;
  idea: string;
  lang: string;
  ownLyrics?: string;
  rng: Rng;
}): LyricBlock[] {
  const { genre, structureId, vocalId, bpm, idea, lang, ownLyrics, rng } = opts;
  const st = STRUCTURES.find((s) => s.id === structureId) ?? STRUCTURES[0];
  const ctx: CueCtx = { genre, vocalId, bpm };
  const kw = keywords(idea);
  const hooks = (HOOK_FORMULAS[lang] ?? HOOK_FORMULAS.en).map((f) =>
    f.replace('{kw}', kw[0] ?? (lang === 'fr' ? 'cette chose' : 'this')),
  );
  const verses = VERSE_BANK[lang] ?? VERSE_BANK.en;
  const shuffled = pickN(verses, verses.length, rng);
  const own = (ownLyrics ?? '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  let hookCursor = 0;
  let verseCursor = 0;
  let ownCursor = 0;

  // Règle du moteur : le hook est répété à l'identique au moins deux fois pour ancrer la mémoire.
  const nextHook = () => {
    hookCursor += 1;
    return hooks[0];
  };
  const hookVariation = () => pick(hooks, rng);
  const nextVerse = () => {
    if (own.length) {
      const chunk = own.slice(ownCursor, ownCursor + 2);
      ownCursor += 2;
      if (chunk.length) return chunk;
    }
    const a = shuffled[verseCursor % shuffled.length];
    const b = shuffled[(verseCursor + 3) % shuffled.length];
    verseCursor += 1;
    return [a, b];
  };

  return st.sections.map((section, i) => {
    const tag = `${section} | ${cueFor(section, ctx, rng)}`;
    const s = section.toLowerCase();
    let lines: string[] = [];
    if (s.startsWith('intro')) {
      lines = [`(${pick(genre.instrumentation, rng)} seule, ${Math.max(4, Math.round(bpm / 30))} mesures)`];
    } else if (s.startsWith('instrumental')) {
      lines = [`(solo — ${pick(genre.instrumentation, rng)} en avant, la voix reste hors champ)`];
    } else if (s.startsWith('outro')) {
      lines = [`(${pick(genre.instrumentation, rng)} seul, fondu de sortie)`, nextHook()];
    } else if (s.startsWith('hook') || s.startsWith('chorus') || s.startsWith('final')) {
      lines = [nextHook(), nextHook(), hookVariation()];
    } else if (s.startsWith('bridge')) {
      lines = [pick(verses, rng), pick(verses, rng)];
    } else if (s.startsWith('build') || s.startsWith('breakdown') || s.startsWith('drop')) {
      lines = [hookVariation()];
    } else {
      lines = [...nextVerse(), ...nextVerse()];
    }
    if (i === st.sections.length - 1 && lines.length > 2) lines = lines.slice(0, 2);
    return { tag, cue: cueFor(section, ctx, rng), lines };
  });
}

export function lyricsText(blocks: LyricBlock[]): string {
  return blocks.map((b) => `[${b.tag}]\n${b.lines.join('\n')}`).join('\n\n');
}

/* ---------------- Titres ---------------- */
export function buildTitles(idea: string, rng: Rng): string[] {
  const kw = keywords(idea);
  const a = kw[0] ? kw[0].replace(/^\p{L}/u, (c) => c.toUpperCase()) : 'Sans Nom';
  const b = kw[1] ? kw[1].replace(/^\p{L}/u, (c) => c.toUpperCase()) : 'Nuit';
  const evocatrice = `${a} ${pick(['Bleu', 'de Cendres', 'en Deux', 'à Quatre Heures', 'Sans Fin'], rng)}`;
  const directe = `${a} & ${b}`;
  const conceptuelle = pick(
    [`Leçons de ${a}`, `Manifeste ${b}`, `${a} / ${b}`, `${b} (variation sur ${a})`],
    rng,
  );
  return [evocatrice, directe, conceptuelle];
}

/* ---------------- ADN d'artiste ---------------- */
export type DNA = { tempo: string; vocal: string; instrumentation: string; production: string; pov: string };

export function buildDNA(reference: string, genre: Genre, rng: Rng): DNA {
  void reference;
  const g = genre;
  return {
    tempo: `${g.bpm[0]}–${g.bpm[1]} BPM, ${pick(['4/4 droit', '4/4 avec swing léger', 'half-time sur le hook', 'shuffle souple'], rng)}`,
    vocal: `${VOCAL(g.vocal).label.toLowerCase()} — ${VOCAL(g.vocal).desc}`,
    instrumentation: pickN(g.instrumentation, 4, rng).join(', '),
    production: `${pickN(g.production, 2, rng).join(', ')} — esthétique ${pick(['2020s', 'analogique fin 90s', 'bande magnetique', 'hybride orchestro-électro'], rng)}`,
    pov: `référence « ${reference} » décomposée sans la citer — POV ${pick(['je', 'nous', 'tu', 'il/elle'], rng)}, ${pick(
      ['présent de l’indicatif', 'futur prometteur', 'passé assumé'],
      rng,
    )}, sujet récurrent : ${pick(['la loyauté', 'la distance', 'l’argent', 'la ville', 'la famille', 'le temps qui file'], rng)}`,
  };
}

/* ---------------- Mode album ---------------- */
export type Track = { title: string; hook: string; bpm: number; signature: string; role: string };

export function buildAlbum(idea: string, genre: Genre, count: number, rng: Rng): Track[] {
  const kw = keywords(idea);
  const base = Math.round((genre.bpm[0] + genre.bpm[1]) / 2);
  const roles = ['Ouverture', 'Établissement', 'Tension', 'Point de rupture', 'Chute', 'Résolution', 'Épilogue', 'Reprise', 'Réponse', 'Clôture', 'Passage', 'Retour'];
  const hooks = [...HOOK_FORMULAS.fr];
  const tracks: Track[] = [];
  for (let i = 0; i < count; i++) {
    const kwA = kw[i % Math.max(1, kw.length)] ?? 'piste';
    tracks.push({
      title: `${kwA.replace(/^\p{L}/u, (c) => c.toUpperCase())} ${pick(['I', 'II', 'Bleu', 'Nocturne', 'Interlude', 'Reprise', 'Coda', 'Braise', 'Sillage', 'Vertige'], rng)}`,
      hook: `${hooks[i % hooks.length].replace('{kw}', kwA)}${i > 0 ? ` — variation ${i + 1}` : ''}`,
      bpm: Math.max(60, Math.min(180, base + (Math.round(rng() * 12) - 6))),
      signature: pick(genre.instrumentation, rng),
      role: roles[i % roles.length],
    });
  }
  return tracks;
}

/* ---------------- Conformité Suno ---------------- */
export const LIMITS = { lyrics: 5000, style: 1000, exclude: 1000 };

const BANNED = ['radio-ready', 'radio ready', 'hit song', 'professional', 'best quality', 'trending', 'grammy', 'radio hit'];
const ARTIST_HINT =
  /\b(taylor swift|drake|beyoncé|beyonce|bad bunny|sza|kanye|kendrick|rihanna|the weeknd|billie eilish|ed sheeran|ariana|post malone|travis scott|dua lipa|coldplay|beatles|queen|nirvana|daft punk|adele|eminem|bob dylan|fela|elvis)\b/i;

export type AuditRow = { label: string; value: string; limit: number; ok: boolean; note?: string };
export type AuditIssue = { level: 'error' | 'warn' | 'ok'; text: string };

export function audit(style: string, exclude: string, lyrics: string): { rows: AuditRow[]; issues: AuditIssue[] } {
  const rows: AuditRow[] = [
    { label: 'Style', value: `${style.length}`, limit: LIMITS.style, ok: style.length <= LIMITS.style },
    { label: 'Exclude Styles', value: `${exclude.length}`, limit: LIMITS.exclude, ok: exclude.length <= LIMITS.exclude },
    { label: 'Lyrics', value: `${lyrics.length}`, limit: LIMITS.lyrics, ok: lyrics.length <= LIMITS.lyrics },
  ];
  const issues: AuditIssue[] = [];
  const found = BANNED.filter((b) => style.toLowerCase().includes(b));
  if (found.length) issues.push({ level: 'error', text: `Tags génériques détectés dans le Style : ${found.join(', ')}` });
  else issues.push({ level: 'ok', text: 'Aucun tag générique diluant (radio-ready, hit, professional).' });

  const artist = style.match(ARTIST_HINT);
  if (artist) issues.push({ level: 'error', text: `Nom d’artiste réel dans le Style : « ${artist[0]} ». Décompose-le en ADN sonore.` });
  else issues.push({ level: 'ok', text: 'Aucun nom d’artiste réel : la référence est décomposée en ADN.' });

  if (!/\[[^\]]+\]/.test(lyrics)) issues.push({ level: 'warn', text: 'Aucun tag de structure entre crochets dans les paroles.' });
  else if (!/\[[^\]|]+\|[^\]]*\]/.test(lyrics)) issues.push({ level: 'warn', text: 'Les tags de structure n’ont pas d’indice de livraison après « | ».' });
  else issues.push({ level: 'ok', text: 'Tags de structure + indices de livraison présents.' });

  if (style.length < 120) issues.push({ level: 'warn', text: 'Style trop court : Suno remplira les vides par défaut.' });
  const bpmed = /\b\d{2,3}\s?bpm\b/i.test(style) || /\b\d{2,3}\s?BPM\b/.test(style);
  if (!bpmed) issues.push({ level: 'warn', text: 'Aucun BPM ferme dans le Style.' });

  return { rows, issues };
}

export function findGenre(id: string): Genre {
  return GENRES.find((g) => g.id === id) ?? GENRES[0];
}
