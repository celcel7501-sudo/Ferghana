"""Exceptions du convertisseur."""


class YtMp3Error(Exception):
    """Erreur de base : tout ce que le CLI sait présenter proprement."""


class FFmpegNotFoundError(YtMp3Error):
    """ffmpeg est absent du PATH ; l'extraction audio est impossible."""

    def __init__(self, message=None):
        super().__init__(
            message
            or (
                "ffmpeg est introuvable dans le PATH. Installez-le :\n"
                "  Debian/Ubuntu : sudo apt install ffmpeg\n"
                "  macOS         : brew install ffmpeg\n"
                "  Windows       : winget install Gyan.FFmpeg"
            )
        )


class InvalidOptionError(YtMp3Error):
    """Combinaison d'options refusée avant tout accès réseau."""


class ExtractionError(YtMp3Error):
    """yt-dlp n'a pas pu récupérer ou convertir la vidéo."""
