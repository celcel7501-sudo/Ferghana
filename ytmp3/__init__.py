"""ytmp3 — convertisseur de vidéos YouTube en MP3."""

from .converter import ConversionOptions, ConversionResult, Converter
from .errors import ExtractionError, FFmpegNotFoundError, InvalidOptionError, YtMp3Error

__version__ = "1.0.0"

__all__ = [
    "ConversionOptions",
    "ConversionResult",
    "Converter",
    "ExtractionError",
    "FFmpegNotFoundError",
    "InvalidOptionError",
    "YtMp3Error",
    "__version__",
]
