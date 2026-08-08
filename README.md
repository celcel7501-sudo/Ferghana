# Ferghana

Page statique qui intègre l'épisode Apple Podcasts **« Au Boulot »** (Dj Rim'K
production, feat. Prestige Old production), de l'émission **Dj Rim K & Dj Nut
( Podcast Official )**.

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
https://embed.podcasts.apple.com/fr/podcast/<slug>/id<PODCAST_ID>?i=<EPISODE_ID>&theme=auto
```

Le segment `fr` est la boutique Apple : il détermine la langue de l'interface du
lecteur. Le code copié depuis Apple Podcasts contient souvent `us` — pensez à le
remplacer.

Copiez le code d'intégration depuis Apple Podcasts (« Partager » → « Copier le
code d'intégration ») et remplacez l'attribut `src`.

Les intitulés affichés vivent à quatre endroits dans `index.html`, à mettre à
jour ensemble :

| Emplacement | Contenu |
| --- | --- |
| `<title>` | épisode — émission |
| `<meta name="description">` | phrase de résumé |
| `.eyebrow` | nom de l'émission |
| `.title` / `.byline` | titre de l'épisode / crédits |

Le `title` de l'iframe reprend l'épisode et l'émission, pour les lecteurs
d'écran.
