import type { Brief, Project } from '@/types';
import { demoProvider } from '@/services/ai/demoProvider';

/** Brief du projet de demonstration livre avec l'application. */
export const SEED_BRIEF: Brief = {
  title: 'Dernier message',
  story:
    "Un message vocal qu'on n'a jamais osé envoyer. On le réécoute des années plus tard, et on comprend enfin ce qu'on voulait dire.",
  emotion: 'Nostalgie',
  styleId: 'rap_fr',
  era: 'Années 90',
  bpm: 92,
  voice: 'tenor',
  language: 'fr',
  energy: 3,
  rapRatio: 55,
  instruments: ['Piano', 'Rhodes', 'Cordes', 'Basse fretless', 'Chœur gospel'],
  choirs: true,
  scratches: true,
  keywords: ['le dernier message', 'la boîte vocale', 'minuit'],
  avoid: ['autotune agressif'],
};

/**
 * Le projet de demonstration est produit par le generateur local, pas fige en
 * dur : il reste donc coherent avec toute evolution du moteur.
 */
export const buildSeedProject = async (): Promise<Project> => {
  const result = await demoProvider.generate({ brief: SEED_BRIEF, scope: 'full' });
  const now = new Date().toISOString();
  return {
    id: 'seed-dernier-message',
    title: SEED_BRIEF.title,
    styleId: SEED_BRIEF.styleId,
    status: 'genere',
    createdAt: now,
    updatedAt: now,
    brief: SEED_BRIEF,
    results: [result],
  };
};
