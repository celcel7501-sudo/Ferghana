"""Extraction de la piste audio d'une vidéo YouTube vers un fichier MP3.

Le travail lourd est délégué à yt-dlp (téléchargement) et ffmpeg (encodage) ;
ce module se charge du choix des options, du calcul du fichier de sortie et de
la remontée d'un résultat exploitable pour chaque URL traitée.
"""

from __future__ import annotations

import shutil
from dataclasses import dataclass
from pathlib import Path
from typing import Callable, Iterable, List, Optional

from .errors import FFmpegNotFoundError, InvalidOptionError

#: Débits constants proposés par le CLI, plus le mode VBR maximal.
BITRATES = ("64", "96", "128", "160", "192", "256", "320", "best")

DEFAULT_TEMPLATE = "%(title)s.%(ext)s"


@dataclass(frozen=True)
class ConversionOptions:
    """Réglages d'une session de conversion."""

    output_dir: Path = Path("mp3")
    bitrate: str = "192"
    filename_template: str = DEFAULT_TEMPLATE
    playlist: bool = False
    embed_metadata: bool = True
    embed_thumbnail: bool = True
    overwrite: bool = False
    cookies_from_browser: Optional[str] = None
    retries: int = 3
    quiet: bool = False
    verbose: bool = False

    def __post_init__(self):
        if str(self.bitrate) not in BITRATES:
            raise InvalidOptionError(
                f"Débit invalide : {self.bitrate!r}. Valeurs acceptées : {', '.join(BITRATES)}."
            )
        if self.retries < 0:
            raise InvalidOptionError("Le nombre de tentatives doit être positif ou nul.")
        if not self.filename_template.strip():
            raise InvalidOptionError("Le modèle de nom de fichier ne peut pas être vide.")


@dataclass
class ConversionResult:
    """Issue de la conversion d'une vidéo."""

    url: str
    title: str = ""
    path: Optional[Path] = None
    duration: Optional[float] = None
    skipped: bool = False
    error: Optional[str] = None
    hint: Optional[str] = None

    @property
    def ok(self) -> bool:
        """Vrai si le MP3 est disponible — qu'il vienne d'être écrit ou non."""
        return self.error is None

    def fail(self, message: str) -> "ConversionResult":
        """Marque l'échec et y attache un conseil quand la cause est connue."""
        self.error = message
        self.hint = hint_for(message)
        return self


#: Messages de yt-dlp (en anglais) et le conseil correspondant. Les motifs sont
#: cherchés en minuscules, dans l'ordre : le plus spécifique d'abord.
_HINTS = (
    (
        ("confirm your age", "age-restricted", "inappropriate for some users"),
        "Vidéo soumise à une limite d'âge : --cookies-from-browser transmet votre session.",
    ),
    (
        # Volontairement après la règle d'âge : « sign in to confirm » est un
        # préfixe commun aux deux messages de YouTube.
        ("confirm you're not a bot", "confirm you are not a bot", "sign in to confirm"),
        "YouTube réclame une authentification. Relancez avec "
        "--cookies-from-browser firefox (ou chrome, edge…).",
    ),
    (
        ("private video", "this video is private"),
        "Vidéo privée : elle n'est lisible qu'avec un compte autorisé "
        "(--cookies-from-browser).",
    ),
    (
        ("members-only", "join this channel"),
        "Vidéo réservée aux membres de la chaîne (--cookies-from-browser).",
    ),
    (
        ("live event will begin", "premieres in", "not yet available"),
        "La diffusion n'a pas commencé : il n'y a encore rien à convertir.",
    ),
    (
        ("video unavailable", "in your country", "removed by the uploader", "account associated"),
        "Vidéo supprimée, ou indisponible depuis votre pays.",
    ),
    (
        ("unable to extract", "nsig", "player response", "signature extraction"),
        "yt-dlp ne sait plus lire cette page — YouTube a changé. "
        "Mettez-le à jour : pip install -U yt-dlp",
    ),
    (
        ("http error 429", "too many requests"),
        "Trop de requêtes envoyées : patientez quelques minutes avant de réessayer.",
    ),
    (
        ("requested format is not available", "no video formats"),
        "Aucune piste audio téléchargeable pour cette vidéo.",
    ),
    (
        ("unable to connect to proxy", "connection refused", "temporary failure in name resolution"),
        "Connexion impossible : vérifiez votre accès réseau ou vos variables de proxy.",
    ),
    (
        ("postprocessing", "ffmpeg exited", "ffprobe"),
        "L'encodage a échoué : vérifiez votre installation de ffmpeg (ffmpeg -version).",
    ),
)


def hint_for(message: str) -> Optional[str]:
    """Traduit un message de yt-dlp en conseil actionnable, si on le reconnaît."""
    lowered = message.lower()
    for needles, hint in _HINTS:
        if any(needle in lowered for needle in needles):
            return hint
    return None


def ffmpeg_available() -> bool:
    return shutil.which("ffmpeg") is not None


class _SilentLogger:
    """Absorbe la sortie de yt-dlp.

    Les échecs sont déjà rapportés via :class:`ConversionResult` ; sans cela,
    chaque erreur s'afficherait deux fois.
    """

    def debug(self, message):
        pass

    info = warning = error = debug


def _quality_argument(bitrate: str) -> str:
    """Traduit un débit en argument ``preferredquality`` pour yt-dlp.

    yt-dlp interprète une valeur < 10 comme une qualité VBR ffmpeg (0 = la
    meilleure) et toute autre valeur comme un débit constant en kbit/s.
    """
    return "0" if bitrate == "best" else str(bitrate)


class Converter:
    """Convertit des URL YouTube en fichiers MP3.

    ``on_progress`` reçoit les dictionnaires d'avancement de yt-dlp ; il est
    appelé aussi bien pendant le téléchargement que le post-traitement.
    """

    def __init__(
        self,
        options: Optional[ConversionOptions] = None,
        on_progress: Optional[Callable[[dict], None]] = None,
    ):
        self.options = options or ConversionOptions()
        self.on_progress = on_progress

    # ------------------------------------------------------------------ setup

    def ydl_options(self) -> dict:
        """Construit le dictionnaire d'options passé à ``yt_dlp.YoutubeDL``."""
        opts = self.options
        postprocessors: List[dict] = [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": _quality_argument(opts.bitrate),
            }
        ]
        if opts.embed_metadata:
            postprocessors.append({"key": "FFmpegMetadata", "add_metadata": True})
        if opts.embed_thumbnail:
            # La pochette doit être convertie en JPEG : les WebP de YouTube ne
            # sont pas lisibles comme image embarquée par la plupart des lecteurs.
            postprocessors.append({"key": "FFmpegThumbnailsConvertor", "format": "jpg"})
            postprocessors.append({"key": "EmbedThumbnail", "already_have_thumbnail": False})

        ydl_opts = {
            "format": "bestaudio/best",
            "outtmpl": str(Path(opts.output_dir) / opts.filename_template),
            "postprocessors": postprocessors,
            "writethumbnail": opts.embed_thumbnail,
            "noplaylist": not opts.playlist,
            "ignoreerrors": False,
            "retries": opts.retries,
            "fragment_retries": opts.retries,
            "overwrites": opts.overwrite,
            # Les échecs sont remontés via ConversionResult ; yt-dlp ne parle
            # que si l'utilisateur demande explicitement le détail.
            "quiet": not opts.verbose,
            "no_warnings": not opts.verbose,
            "verbose": opts.verbose,
            "noprogress": True,
            "consoletitle": False,
        }
        if not opts.verbose:
            ydl_opts["logger"] = _SilentLogger()
        if self.on_progress:
            ydl_opts["progress_hooks"] = [self.on_progress]
            ydl_opts["postprocessor_hooks"] = [self.on_progress]
        if opts.cookies_from_browser:
            ydl_opts["cookiesfrombrowser"] = (opts.cookies_from_browser,)
        return ydl_opts

    def _youtube_dl(self):
        import yt_dlp  # importé tardivement : garde le CLI réactif sur --help

        return yt_dlp.YoutubeDL(self.ydl_options())

    # ------------------------------------------------------------------- API

    def target_path(self, info: dict, ydl=None) -> Path:
        """Chemin du MP3 attendu pour une vidéo, avant tout téléchargement.

        L'extension est imposée via ``info['ext']`` plutôt que remplacée après
        coup : un titre contenant un point (« Format 16.9 ») serait tronqué par
        un simple ``with_suffix``.
        """
        ydl = ydl or self._youtube_dl()
        path = Path(ydl.prepare_filename({**info, "ext": "mp3"}))
        # Modèle sans %(ext)s : yt-dlp rend le nom tel quel, on complète.
        return path if path.suffix == ".mp3" else path.with_name(path.name + ".mp3")

    def convert(self, url: str) -> List[ConversionResult]:
        """Convertit une URL — une vidéo, ou toutes celles d'une playlist."""
        self.ensure_ready()
        try:
            with self._youtube_dl() as ydl:
                info = ydl.extract_info(url, download=False)
        except Exception as exc:  # yt-dlp lève des types variés selon l'extracteur
            return [ConversionResult(url=url).fail(_clean_message(exc))]

        if info is None:
            return [ConversionResult(url=url).fail("Aucune information récupérée pour cette URL.")]

        entries = _entries(info)
        if not entries:
            return [ConversionResult(url=url).fail("Playlist vide ou entièrement indisponible.")]

        return [self._convert_entry(entry, fallback_url=url) for entry in entries]

    def convert_many(self, urls: Iterable[str]) -> List[ConversionResult]:
        results: List[ConversionResult] = []
        for url in urls:
            results.extend(self.convert(url))
        return results

    def ensure_ready(self) -> None:
        """Vérifie les dépendances externes avant d'engager le moindre octet."""
        if not ffmpeg_available():
            raise FFmpegNotFoundError()
        Path(self.options.output_dir).mkdir(parents=True, exist_ok=True)

    # -------------------------------------------------------------- internals

    def _convert_entry(self, entry: dict, fallback_url: str) -> ConversionResult:
        url = entry.get("webpage_url") or entry.get("original_url") or fallback_url
        result = ConversionResult(
            url=url,
            title=entry.get("title") or url,
            duration=entry.get("duration"),
        )

        try:
            target = self.target_path(entry)
        except Exception as exc:
            result.fail(_clean_message(exc))
            return result

        if target.exists() and not self.options.overwrite:
            result.path = target
            result.skipped = True
            return result

        try:
            with self._youtube_dl() as ydl:
                downloaded = ydl.extract_info(url, download=True)
        except Exception as exc:
            result.fail(_clean_message(exc))
            return result

        result.path = _final_path(downloaded) or target
        if not result.path.exists():
            result.fail("La conversion s'est terminée sans produire de fichier MP3.")
        return result


def _entries(info: dict) -> List[dict]:
    """Aplatit une playlist (éventuellement imbriquée) en liste de vidéos."""
    if "entries" not in info:
        return [info]
    flat: List[dict] = []
    for entry in info.get("entries") or []:
        if entry is None:  # vidéo privée ou supprimée : ignorée par yt-dlp
            continue
        flat.extend(_entries(entry))
    return flat


def _final_path(info: Optional[dict]) -> Optional[Path]:
    """Récupère le chemin réel produit par le post-traitement de yt-dlp."""
    if not info:
        return None
    for entry in _entries(info):
        for download in entry.get("requested_downloads") or []:
            path = download.get("filepath")
            if path:
                return Path(path).with_suffix(".mp3")
    return None


#: Bavardage que yt-dlp ajoute à ses erreurs : il invite à ouvrir un ticket
#: chez lui, y compris quand la panne est purement locale (réseau, ffmpeg).
_BOILERPLATE = (
    "; please report this issue",
    ". please report this issue",
    "please report this issue",
)


def _clean_message(exc: BaseException) -> str:
    """Réduit une erreur yt-dlp à sa cause : sans préfixe ni appel à ticket."""
    message = str(exc).strip() or exc.__class__.__name__
    for prefix in ("ERROR: ", "\033[0;31mERROR:\033[0m "):
        if message.startswith(prefix):
            message = message[len(prefix) :]

    lowered = message.lower()
    for marker in _BOILERPLATE:
        cut = lowered.find(marker)
        if cut != -1:
            message = message[:cut]
            break

    return message.strip().rstrip(";,") or exc.__class__.__name__
