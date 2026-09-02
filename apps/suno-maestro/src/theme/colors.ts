/** Palette sombre premium. Une seule source de verite pour les couleurs. */
export const palette = {
  // Fonds
  bg: '#0B0B10',
  surface: '#14141C',
  surfaceRaised: '#1C1C26',
  border: '#2A2A38',

  // Texte
  text: '#F2F2F7',
  textMuted: '#9A9AAE',
  textFaint: '#63637A',

  // Accents
  violet: '#8B5CF6',
  violetDim: '#6D3FE0',
  orange: '#FF8A3D',
  neon: '#38BDF8',

  // Etats
  success: '#34D399',
  warning: '#FBBF24',
  danger: '#F87171',

  // Neutres utilitaires
  overlay: 'rgba(0,0,0,0.6)',
  transparent: 'transparent',
} as const;

export type ColorName = keyof typeof palette;

/** Accent par famille de style musical, pour differencier les cartes. */
export const accentFor = (index: number): string => {
  const wheel = [palette.violet, palette.orange, palette.neon];
  return wheel[index % wheel.length] ?? palette.violet;
};
