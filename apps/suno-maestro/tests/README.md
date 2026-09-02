# Tests de fumée du noyau métier

Le noyau (`src/domain`, `src/data`) ne dépend ni de React ni de React Native :
il se compile et s'exécute sous Node seul.

```bash
npx tsc -p tests/smoke.tsconfig.json     # compile vers /tmp/sm-build
node tests/run-smoke.mjs                  # réécrit les alias puis exécute
```

19 vérifications couvrent : budget des champs Suno, absence de nom d'artiste
dans le prompt de style, cohérence du bloc d'exclusion, balises de paroles,
ratio hook/couplets, comptage syllabique, structure et compression.
