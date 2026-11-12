# HookPrompt Studio

Reconstruction opérationnelle du moteur de prompts de [HookGenius.app](https://hookgenius.app/) : un générateur qui transforme une idée en pack prêt à coller dans Suno Custom mode (style en 6 couches, Exclude Styles, paroles balisées), le prompt maître avec les variables déjà injectées, une bibliothèque de prompts copiables et un inspecteur de conformité Suno v6.

Le prompt système original n’est pas public. Ce dépôt reprend l’architecture documentée publiquement (passage auteur, passage producteur, critic pass, limites lyrics 5 000 / style 1 000 / exclude 1 000) et l’exécute dans le navigateur. Aucun compte, aucun appel réseau.

## Démarrage

```bash
npm install
npm run dev
```

L’application est disponible sur [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # vérification TypeScript, puis bundle HTML unique dans dist/
npm run preview  # sert le build de production
```

## Modules

- **Générateur** — idée, genre, BPM, voix, humeur, structure, langue, paroles personnelles et mode album
- **Prompt maître** — texte reconstruit, variables du générateur déjà remplies
- **Bibliothèque** — prompts copiables, chargeables dans le générateur
- **Conformité Suno** — jauges de caractères et diagnostic (tags génériques, noms d’artiste, indices de livraison)

Les sauvegardes restent dans `localStorage` (`hookprompt.saved.v1`).
