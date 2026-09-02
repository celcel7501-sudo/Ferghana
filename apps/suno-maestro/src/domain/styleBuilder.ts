import type { Brief } from '@/types';
import { styleById } from '@/data/styles';
import { ENERGY_TAGS, INSTRUMENT_TAGS, languageTag, voiceTag } from '@/data/options';
import { CHORUS_REGULARITY_TAG } from './hookBuilder';
import { compressStyle, STYLE_LIMIT, SAFE_MARGIN } from './sunoFields';

/**
 * Assemble le champ "Style of Music" en couches ordonnees :
 * genre -> rythme -> persistance -> instrumentation -> voix -> spatialisation -> mastering.
 * Aucune etiquette de couche n'est ecrite : Suno n'en tire rien et elles coutent
 * une centaine de caracteres.
 */
export const buildStylePrompt = (brief: Brief): string => {
  const fam = styleById(brief.styleId);
  const layers: string[] = [];

  // 1. Genre + tempo + humeur
  const era = brief.era && brief.era !== 'Intemporel' ? `, ${brief.era.toLowerCase()} flavour` : '';
  layers.push(`${fam.tags[0] ?? 'contemporary urban music'}${era}, ${ENERGY_TAGS[brief.energy]}, ${brief.bpm} BPM.`);

  // 2. Rythme
  const rhythm = fam.tags.slice(1, 3).join(', ');
  layers.push(`${rhythm ? rhythm + ', ' : ''}layered claps on the backbeat, tight closed hats.`);

  // 3. Persistance — un seul element, celui qui survit a toutes les ruptures
  const anchor = brief.instruments[0] ?? 'piano';
  const anchorTag = INSTRUMENT_TAGS[anchor] ?? 'piano motif';
  layers.push(`Persistent ${anchorTag} motif throughout, present in every section.`);

  // 4. Instrumentation
  const instr = brief.instruments
    .slice(1)
    .map((i) => INSTRUMENT_TAGS[i])
    .filter(Boolean);
  if (instr.length) layers.push(`${instr.join(', ')}.`);

  // 5. Voix
  const rapPart =
    brief.rapRatio >= 70
      ? 'articulate rap delivery with clear diction on the verses'
      : brief.rapRatio <= 30
        ? 'fully sung throughout'
        : 'rapped verses and a fully sung chorus';
  const choir = brief.choirs ? ', lush stacked harmonies, panoramic group responses' : '';
  layers.push(`${voiceTag(brief.voice)}, ${rapPart}${choir}, ${languageTag(brief.language)}.`);

  // 6. Regularite du refrain
  layers.push(CHORUS_REGULARITY_TAG);

  // 7. Turntablism optionnel
  if (brief.scratches) layers.push('Transformer cuts, crab scratches, backspin rewind.');

  // 8. Spatialisation + mastering
  layers.push('Ultra-wide stereo field, panoramic vocal layering, lead centred and dry.');
  layers.push('Polished master, deep round low end, preserved dynamics.');

  const prompt = layers.join(' ');
  return prompt.length > STYLE_LIMIT - SAFE_MARGIN
    ? compressStyle(prompt, STYLE_LIMIT - SAFE_MARGIN)
    : prompt;
};

/**
 * Bloc d'exclusion. Regle absolue : ne jamais exclure ce que le champ positif
 * demande par ailleurs. On filtre donc les contradictions connues.
 */
export const buildExcludeBlock = (brief: Brief, stylePrompt: string): string => {
  const base = [
    'no mumble rap',
    'no distorted vocals',
    'no generic EDM',
    'avoid messy mix',
    'no cluttered low end',
    'avoid thin sounds',
  ];

  const conflicts: { tag: string; forbiddenWhen: RegExp }[] = [
    { tag: 'no low-quality recording', forbiddenWhen: /vinyl crackle|sampler grit|tape/i },
    { tag: 'no autotune', forbiddenWhen: /stacked harmonies|choir|talkbox/i },
    { tag: 'no trap drums', forbiddenWhen: /808|rolling hi-hats|drill/i },
  ];

  const extra = conflicts
    .filter((c) => !c.forbiddenWhen.test(stylePrompt))
    .map((c) => c.tag);

  const userAvoid = brief.avoid
    .map((a) => a.trim())
    .filter(Boolean)
    .map((a) => (/^(no|avoid)\b/i.test(a) ? a.toLowerCase() : `no ${a.toLowerCase()}`));

  return [...base, ...extra, ...userAvoid].join(', ');
};

/**
 * Contradictions detectees, pour pouvoir les expliquer a l'utilisateur.
 * Deux familles :
 *  - les exclusions AUTOMATIQUES ecartees par le moteur ;
 *  - les exclusions DEMANDEES par l'utilisateur qui contredisent son propre
 *    style. Celles-la sont conservees — c'est sa decision — mais signalees.
 */
export const excludeConflicts = (stylePrompt: string, brief?: Brief): string[] => {
  const out: string[] = [];

  if (/vinyl crackle|sampler grit|tape/i.test(stylePrompt))
    out.push('« no low-quality recording » retiré : le style demande du grain analogique.');
  if (/stacked harmonies|choir|talkbox/i.test(stylePrompt))
    out.push('« no autotune » retiré : le morceau empile des harmonies.');
  if (/808|rolling hi-hats|drill/i.test(stylePrompt))
    out.push('« no trap drums » retiré : la rythmique repose sur une 808.');

  for (const raw of brief?.avoid ?? []) {
    const a = raw.trim().toLowerCase();
    if (!a) continue;
    if (/autotune/.test(a) && /stacked harmonies|choir/i.test(stylePrompt))
      out.push(`« ${raw} » est conservé, mais il s'oppose aux harmonies empilées du style.`);
    if (/(vinyle|vinyl|lo-?fi|grain)/.test(a) && /vinyl crackle|sampler grit/i.test(stylePrompt))
      out.push(`« ${raw} » est conservé, mais le style demande justement du grain.`);
    if (/(808|trap)/.test(a) && /808|rolling hi-hats/i.test(stylePrompt))
      out.push(`« ${raw} » est conservé, mais la rythmique repose sur une 808.`);
  }
  return out;
};
