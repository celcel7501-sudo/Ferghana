# Ferghana Podcasts

Application web pour rechercher des podcasts et écouter leurs épisodes directement dans le navigateur.

## Fonctionnalités

- Recherche de podcasts via l'API iTunes Search (aucune clé API requise)
- Affichage des épisodes d'un podcast à partir de son flux RSS
- Lecture audio des épisodes intégrée à la page

## Démarrage

```bash
npm install
npm start
```

L'application est ensuite disponible sur [http://localhost:3000](http://localhost:3000).

## Architecture

- `server.js` — serveur Express qui expose deux routes :
  - `GET /api/search?term=...` — recherche des podcasts via l'API iTunes
  - `GET /api/feed?url=...` — récupère et analyse un flux RSS de podcast (évite les problèmes de CORS côté navigateur)
- `public/` — frontend statique (HTML/CSS/JS vanilla), aucune étape de build nécessaire
