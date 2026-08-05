# Ferghana Podcasts

Page web présentant le podcast Ferghana avec un lecteur intégré (widget Ausha).

## Démarrage

```bash
npm install
npm start
```

L'application est ensuite disponible sur [http://localhost:3000](http://localhost:3000).

## Architecture

- `server.js` — serveur Express qui sert les fichiers statiques du dossier `public/`
- `public/` — page statique (HTML/CSS), aucune étape de build nécessaire
