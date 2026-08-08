# Ferghana

Page statique qui intègre l'épisode Apple Podcasts **« Au Boulot »** (DJ Rim'K
production, feat. Prestige Old production).

## Contenu

- `index.html` — la page et l'iframe du lecteur Apple Podcasts
- `styles.css` — mise en page, thèmes clair et sombre

## Lancer en local

Ouvrez `index.html` dans un navigateur, ou servez le dossier :

```sh
python3 -m http.server 8000
# puis http://localhost:8000
```

Un serveur local est préférable : certains navigateurs restreignent les iframes
tierces chargées depuis `file://`.

## Remplacer l'épisode

L'épisode est identifié par l'URL de l'iframe dans `index.html` :

```
https://embed.podcasts.apple.com/us/podcast/<slug>/id<PODCAST_ID>?i=<EPISODE_ID>&theme=auto
```

Copiez le code d'intégration depuis Apple Podcasts (« Partager » → « Copier le
code d'intégration ») et remplacez l'attribut `src`, puis mettez à jour le titre
et la ligne d'auteur dans l'en-tête.
