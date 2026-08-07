# ytmp3 — convertisseur de vidéos YouTube en MP3

Outil en ligne de commande qui extrait la piste audio d'une vidéo YouTube et
l'encode en MP3, avec les tags et la pochette. Le téléchargement est confié à
[yt-dlp](https://github.com/yt-dlp/yt-dlp), l'encodage à
[ffmpeg](https://ffmpeg.org/).

> **Usage licite uniquement.** Ne convertissez que des contenus dont vous
> détenez les droits, placés sous licence libre, ou dont le téléchargement est
> autorisé par leur auteur et par les conditions d'utilisation de la
> plateforme. Cet outil ne contourne aucune protection technique.

## Installation

`ffmpeg` doit être présent dans le `PATH` :

```bash
sudo apt install ffmpeg      # Debian / Ubuntu
brew install ffmpeg          # macOS
winget install Gyan.FFmpeg   # Windows
```

Puis :

```bash
pip install .
```

Pour travailler sur le projet sans l'installer : `pip install -r requirements.txt`
et lancez `python -m ytmp3`.

## Utilisation

```bash
ytmp3 https://www.youtube.com/watch?v=XXXXXXXXXXX
```

Le MP3 atterrit dans `./mp3/Titre de la vidéo.mp3`, en 192 kbit/s.

```bash
# Qualité maximale, dans un dossier précis
ytmp3 -b 320 -o ~/Musique https://www.youtube.com/watch?v=XXXXXXXXXXX

# Plusieurs vidéos d'un coup
ytmp3 URL1 URL2 URL3

# Toute une playlist (sans --playlist, seule la vidéo pointée est convertie)
ytmp3 --playlist https://www.youtube.com/playlist?list=XXXXXXXX

# Une liste d'URL dans un fichier, une par ligne
ytmp3 --from-file mes-urls.txt

# Numéroter les pistes d'une playlist
ytmp3 --playlist --template "%(playlist_index)02d - %(title)s.%(ext)s" URL
```

### Options

| Option | Effet |
| --- | --- |
| `-o`, `--output-dir` | Dossier de destination (défaut : `./mp3`) |
| `-b`, `--bitrate` | `64`…`320` kbit/s, ou `best` pour le VBR maximal (défaut : `192`) |
| `-f`, `--from-file` | Lit les URL depuis un fichier (`#` = commentaire) |
| `--playlist` | Convertit toute la playlist |
| `--template` | Modèle de nom de fichier [yt-dlp](https://github.com/yt-dlp/yt-dlp#output-template) |
| `--overwrite` | Réécrit les MP3 déjà présents |
| `--no-metadata` | N'écrit pas les tags |
| `--no-thumbnail` | N'intègre pas la miniature comme pochette |
| `--cookies-from-browser` | Cookies d'un navigateur, pour les vidéos nécessitant une connexion |
| `--retries` | Tentatives réseau par fichier (défaut : `3`) |
| `-q`, `--quiet` | N'affiche que les erreurs |
| `-v`, `--verbose` | Affiche le détail de yt-dlp (diagnostic) |

### Codes de retour

| Code | Signification |
| --- | --- |
| `0` | Tous les fichiers sont disponibles (convertis ou déjà présents) |
| `1` | Au moins une conversion a échoué, ou interruption clavier |
| `2` | Problème d'usage : aucune URL, fichier illisible, `ffmpeg` absent |

### Comportement

- **Les fichiers déjà présents sont ignorés**, sans le moindre téléchargement :
  relancer la même commande reprend une série interrompue. `--overwrite` force
  la reconversion.
- **Un échec n'arrête pas la série.** Une vidéo indisponible est signalée sur
  `stderr` ; les suivantes sont traitées, et le code de retour final vaut `1`.
- Dans une playlist, les vidéos privées ou supprimées sont sautées.

## Utilisation comme bibliothèque

```python
from pathlib import Path
from ytmp3 import ConversionOptions, Converter

converter = Converter(ConversionOptions(output_dir=Path("~/Musique").expanduser(), bitrate="320"))
for result in converter.convert("https://www.youtube.com/watch?v=XXXXXXXXXXX"):
    if result.ok:
        print(result.path)
    else:
        print(f"échec : {result.error}")
```

`Converter.convert()` renvoie toujours une liste : une entrée pour une vidéo
seule, autant que de pistes pour une playlist. Chaque `ConversionResult` porte
`url`, `title`, `path`, `duration`, `skipped` et `error`.

## Développement

```bash
pip install -e ".[dev]"
pytest
```

La suite de tests n'accède pas au réseau : `yt_dlp.YoutubeDL` est remplacé par
un double qui rejoue des dictionnaires d'information.

## Licence

MIT.
