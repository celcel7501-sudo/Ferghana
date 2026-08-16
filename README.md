# Ferghana

Page statique autour de l'émission **Prestige Old School** : le lecteur de
l'épisode **« Au boulot »** (DJ Rim K | Prestige Old School Production), suivi
du lecteur de l'émission complète.

Les lecteurs viennent d'Apple Podcasts ; le pied de page renvoie aussi vers
Amazon Music.

## Contenu

- `index.html` — la page et les deux iframes Apple Podcasts
- `styles.css` — mise en page, thèmes clair et sombre
- `app.js` — révèle chaque lecteur une fois chargé, sinon laisse le repli

## Message de repli

Chaque lecteur est doublé d'un `.player__fallback` — une phrase et un lien vers
Apple Podcasts — posé sous l'iframe. `app.js` marque le bloc `is-loaded` à
l'événement `load` de l'iframe, ce qui révèle le lecteur et masque le repli.

Deux garde-fous :

- **Sans JavaScript**, l'iframe est visible d'emblée et le repli reste masqué
  dessous : la page ne dépend pas du script.
- **Au `load` de la fenêtre**, tous les lecteurs sont révélés, au cas où une
  iframe aurait fini de charger avant que le script n'attache son écouteur.

Limite : une iframe tierce est opaque au JavaScript de la page. Si Apple répond
une page d'erreur, le navigateur déclenche quand même `load` et affiche sa
propre erreur. Le repli couvre les cas où rien n'arrive — hors ligne, réseau
filtré, requête sans réponse.

## Lancer en local

Ouvrez `index.html` dans un navigateur, ou servez le dossier :

```sh
python3 -m http.server 8000
# puis http://localhost:8000
```

Un serveur local est préférable : certains navigateurs restreignent les iframes
tierces chargées depuis `file://`.

## Remplacer l'épisode

`index.html` contient deux iframes, qui ne diffèrent que par leur `src` et leur
hauteur :

```
épisode  (175px)  .../fr/podcast/<slug>/id<PODCAST_ID>?i=<EPISODE_ID>&theme=auto
émission (450px)  .../fr/podcast/<slug>/id<PODCAST_ID>?theme=auto
```

Le préfixe est `https://embed.podcasts.apple.com`. C'est le paramètre `i` qui
distingue un épisode de l'émission entière ; les hauteurs correspondantes sont
fixées dans `styles.css` (`.player` et `.player--show`).

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
