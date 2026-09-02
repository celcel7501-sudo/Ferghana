# Suno Maestro

Application mobile (iOS / Android) qui transforme une idée musicale en prompt
Suno mesuré, paroles originales, structure, direction vocale et arrangement.

React Native + Expo + TypeScript strict.

---

## Démarrage

```bash
cd apps/suno-maestro
npm install
npm start          # puis « i » pour iOS, « a » pour Android
npm run typecheck  # tsc --noEmit
npm test           # 19 vérifications du noyau métier, sous Node seul
```

## État réel des fonctionnalités

Le tableau distingue ce qui fonctionne de ce qui est simulé. Aucune ligne n'est
annoncée comme terminée si elle ne l'est pas.

| Fonction | État |
|---|---|
| Navigation, écrans, formulaires | **Fonctionnel** |
| Validation du brief, mode « brief rapide » | **Fonctionnel** — détection locale du style, du tempo, des chœurs et des scratches par expressions régulières |
| Sauvegarde, recherche, duplication, suppression des projets | **Fonctionnel** — AsyncStorage, persistant entre deux lancements |
| Mesure des champs Suno (1000 / 5000) | **Fonctionnel** — calculée, jamais estimée |
| Ratio hook / couplets, analyse syllabique du refrain | **Fonctionnel** |
| Copie presse-papiers, export Markdown et texte | **Fonctionnel** |
| Génération du prompt de style et du bloc d'exclusion | **Fonctionnel** — moteur déterministe local, à partir du brief |
| Génération des paroles | **Simulée** — moteur de gabarits local. Le texte est original et composé à partir des entrées de l'utilisateur, mais il n'a pas la finesse d'un modèle de langue |
| Appel d'un modèle d'IA réel | **Non connecté** — la couche `remoteProvider` est écrite et typée, mais il n'existe aucun serveur en face |
| Partage de fichier, anglais, comptes utilisateurs | **Non implémenté** |

## Sécurité des clés

L'application ne contient **aucune** clé secrète et n'en contiendra jamais.
`EXPO_PUBLIC_AI_BASE_URL` ne contient qu'une URL publique : celle de *votre*
serveur. C'est ce serveur qui détient la clé du fournisseur d'IA et qui effectue
l'appel. Si la variable est vide, l'application bascule en mode démonstration et
l'affiche clairement à l'écran.

## Contrat attendu du serveur

`POST {EXPO_PUBLIC_AI_BASE_URL}/generate`

```jsonc
// requête
{
  "system": "règles de production (fournies par l'app)",
  "scope":  "instruction de périmètre",
  "refine": "instruction de retouche ou null",
  "brief":  "brief formaté en texte",
  "raw":    { /* objet Brief complet */ }
}
```

La réponse doit être un objet `GenerationResult` (voir `src/types/generation.ts`).
`budget` et `hookVerseRatio` sont **recalculés côté application** : une
contrainte dure ne se délègue pas à un compteur distant.

## Règles de contenu appliquées

Elles sont dans `src/services/ai/prompts.ts` et s'appliquent aussi au serveur :

- les paroles doivent être originales ; aucune reprise de paroles existantes,
  de mélodie connue, de flow identifiable ou de signature exacte d'un artiste ;
- un nom d'artiste cité par l'utilisateur est traduit en caractéristiques
  générales — énergie, époque, instrumentation, groove, traitement vocal ;
- le champ de style ne contient jamais de nom propre d'artiste, de groupe ou de
  label, ni de paroles.

Le moteur de démonstration respecte ces règles par construction : il assemble
uniquement les mots fournis par l'utilisateur dans des gabarits de structure.

## Architecture

```
src/
├── theme/        jetons de design (couleurs, espacements, typographie)
├── types/        modèle de données, aucune dépendance
├── data/         catalogues (styles, options) et projet d'exemple
├── domain/       logique métier pure — testable sous Node
├── storage/      persistance AsyncStorage
├── services/     ai/ (demo | remote) et export/ (markdown, texte)
├── state/        contexte projets, hook de génération
├── components/   ui/ (primitives) et domain/ (métier)
├── navigation/   pile + onglets
└── screens/      6 écrans
```

`domain/` et `data/` ne dépendent ni de React ni de React Native : c'est ce qui
permet de les tester sous Node seul, sans émulateur.
