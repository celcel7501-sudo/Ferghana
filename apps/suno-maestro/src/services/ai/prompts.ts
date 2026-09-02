import type { Brief, GenerationScope, RefineAction } from '@/types';
import { styleById } from '@/data/styles';

/**
 * Instructions envoyees au serveur. Elles decrivent le comportement attendu de
 * l'equipe simulee (DA, auteur, topliner, producteur, arrangeur, directeur
 * vocal, DJ) et posent les regles non negociables.
 */
export const SYSTEM_RULES = [
  'Tu es une equipe de production : directeur artistique, auteur-compositeur, topliner, producteur hip-hop, arrangeur, directeur vocal et DJ scratch.',
  'Les paroles doivent etre ORIGINALES. Ne reproduis jamais des paroles existantes, une melodie connue, un flow identifiable ou la signature exacte d un artiste.',
  'Si l utilisateur cite un artiste ou un producteur, traduis la demande en caracteristiques generales : energie, epoque, instrumentation, type de groove, traitement vocal, densite d arrangement, attitude.',
  'Le champ de style est en anglais et ne contient JAMAIS de paroles ni de nom propre d artiste, de groupe ou de label.',
  'Le champ de style tient en 1000 caracteres, les paroles en 5000 caracteres, balises comprises. Au-dela, Suno tronque en silence.',
  'Le refrain doit avoir quatre lignes de meme longueur syllabique.',
  'Chaque section porte une seule indication de debit, en tete de la balise.',
].join('\n');

export const scopeInstruction = (scope: GenerationScope): string => {
  const map: Record<GenerationScope, string> = {
    prompt: 'Produis uniquement le prompt de style et le bloc d exclusion.',
    lyrics: 'Produis les paroles completes avec balises de direction.',
    hook: 'Produis le hook principal et trois variantes de refrain.',
    structure: 'Produis la structure detaillee avec le nombre de mesures.',
    vocal: 'Produis la direction vocale detaillee.',
    production: 'Produis les notes de production et d arrangement.',
    full: 'Produis le pack complet : direction artistique, prompt, exclusions, structure, paroles, hook, variantes, production, conseils.',
  };
  return map[scope];
};

export const refineInstruction = (action: RefineAction): string => {
  const map: Record<RefineAction, string> = {
    regenerate: 'Regenere en gardant le brief mais en changeant les images et le hook.',
    better_chorus: 'Garde tout, mais reecris le refrain : lignes de meme longueur syllabique, plus concret, plus facile a retenir.',
    more_commercial: 'Rends le morceau plus radiophonique : hook plus tot, texte plus litteral, refrain plus repete.',
    more_rap: 'Augmente la part rappee : couplets plus denses, debit plus technique, refrain plus scande.',
    more_melodic: 'Augmente la part chantee : hook entierement chante, harmonies empilees, moins de syllabes au couplet.',
    add_break: 'Ajoute une rupture qui ne coupe pas le groove : demi-temps, double-temps ou harmonie coupee.',
  };
  return map[action];
};

export const briefToPrompt = (brief: Brief): string => {
  const fam = styleById(brief.styleId);
  return [
    `Titre ou theme : ${brief.title || '(libre)'}`,
    `Histoire : ${brief.story || '(libre)'}`,
    `Emotion : ${brief.emotion || '(libre)'}`,
    `Style : ${fam.label}`,
    `Epoque / influence : ${brief.era || 'intemporel'}`,
    `Tempo : ${brief.bpm} BPM`,
    `Voix : ${brief.voice}`,
    `Langue : ${brief.language}`,
    `Energie : ${brief.energy}/5`,
    `Part de rap : ${brief.rapRatio}%`,
    `Instruments : ${brief.instruments.join(', ') || '(au choix)'}`,
    `Choeurs : ${brief.choirs ? 'oui' : 'non'}`,
    `Scratches : ${brief.scratches ? 'oui' : 'non'}`,
    `Mots ou images a integrer : ${brief.keywords.join(', ') || '(aucun)'}`,
    `A eviter : ${brief.avoid.join(', ') || '(rien de particulier)'}`,
  ].join('\n');
};
