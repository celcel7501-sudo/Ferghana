"""Interface en ligne de commande du convertisseur YouTube → MP3."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import List, Optional, Sequence

from . import __version__
from .converter import BITRATES, DEFAULT_TEMPLATE, ConversionOptions, ConversionResult, Converter
from .errors import YtMp3Error

EXIT_OK = 0
EXIT_FAILED = 1
EXIT_USAGE = 2


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="ytmp3",
        description="Convertit des vidéos YouTube en fichiers MP3.",
        epilog=(
            "Exemples :\n"
            "  ytmp3 https://www.youtube.com/watch?v=XXXX\n"
            "  ytmp3 -b 320 -o ~/Musique URL1 URL2\n"
            "  ytmp3 --playlist https://www.youtube.com/playlist?list=XXXX\n"
            "  ytmp3 --from-file urls.txt\n\n"
            "N'utilisez cet outil que pour des contenus dont vous détenez les droits\n"
            "ou dont la licence autorise le téléchargement."
        ),
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("urls", nargs="*", metavar="URL", help="une ou plusieurs URL YouTube")
    parser.add_argument(
        "-o",
        "--output-dir",
        type=Path,
        default=Path("mp3"),
        metavar="DOSSIER",
        help="dossier de destination (défaut : ./mp3)",
    )
    parser.add_argument(
        "-b",
        "--bitrate",
        default="192",
        choices=BITRATES,
        help="débit en kbit/s, ou « best » pour le VBR maximal (défaut : 192)",
    )
    parser.add_argument(
        "-f",
        "--from-file",
        type=Path,
        metavar="FICHIER",
        help="lit les URL depuis un fichier, une par ligne (« # » = commentaire)",
    )
    parser.add_argument(
        "--playlist",
        action="store_true",
        help="convertit toute la playlist au lieu de la seule vidéo pointée",
    )
    parser.add_argument(
        "--template",
        default=DEFAULT_TEMPLATE,
        metavar="MODÈLE",
        # argparse applique un %-format sur l'aide : les « % » du modèle sont doublés.
        help=f"modèle de nom de fichier yt-dlp (défaut : {DEFAULT_TEMPLATE.replace('%', '%%')})",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="réécrit les MP3 déjà présents au lieu de les ignorer",
    )
    parser.add_argument(
        "--no-metadata",
        action="store_true",
        help="n'écrit pas les tags (titre, artiste, année) dans le MP3",
    )
    parser.add_argument(
        "--no-thumbnail",
        action="store_true",
        help="n'intègre pas la miniature comme pochette",
    )
    parser.add_argument(
        "--cookies-from-browser",
        metavar="NAVIGATEUR",
        help="utilise les cookies d'un navigateur (chrome, firefox, edge…) "
        "pour les vidéos nécessitant une connexion",
    )
    parser.add_argument(
        "--retries",
        type=int,
        default=3,
        metavar="N",
        help="tentatives réseau par fichier (défaut : 3)",
    )
    parser.add_argument("-q", "--quiet", action="store_true", help="n'affiche que les erreurs")
    parser.add_argument(
        "-v",
        "--verbose",
        action="store_true",
        help="affiche le détail de yt-dlp (diagnostic réseau, formats, ffmpeg)",
    )
    parser.add_argument("--version", action="version", version=f"ytmp3 {__version__}")
    return parser


def read_url_file(path: Path) -> List[str]:
    """Lit un fichier d'URL en ignorant lignes vides et commentaires."""
    try:
        lines = path.read_text(encoding="utf-8").splitlines()
    except OSError as exc:
        raise YtMp3Error(f"Lecture impossible de {path} : {exc}") from exc
    urls = []
    for line in lines:
        line = line.split("#", 1)[0].strip()
        if line:
            urls.append(line)
    return urls


def collect_urls(args: argparse.Namespace) -> List[str]:
    """Fusionne les URL de la ligne de commande et du fichier, sans doublon."""
    urls = list(args.urls)
    if args.from_file:
        urls.extend(read_url_file(args.from_file))
    seen = set()
    unique = []
    for url in urls:
        if url not in seen:
            seen.add(url)
            unique.append(url)
    return unique


def options_from_args(args: argparse.Namespace) -> ConversionOptions:
    return ConversionOptions(
        output_dir=args.output_dir,
        bitrate=args.bitrate,
        filename_template=args.template,
        playlist=args.playlist,
        embed_metadata=not args.no_metadata,
        embed_thumbnail=not args.no_thumbnail,
        overwrite=args.overwrite,
        cookies_from_browser=args.cookies_from_browser,
        retries=args.retries,
        quiet=args.quiet,
        verbose=args.verbose,
    )


class ProgressPrinter:
    """Affiche une ligne d'avancement réécrite en place, si le terminal suit."""

    def __init__(self, stream=None, enabled: bool = True):
        self.stream = stream or sys.stderr
        self.enabled = enabled and self.stream.isatty()
        self._active = False

    def __call__(self, event: dict) -> None:
        if not self.enabled:
            return
        status = event.get("status")
        if status == "downloading":
            self._write(f"  téléchargement {_percent(event)} {_speed(event)}")
        elif status in ("processing", "started"):
            self._write("  conversion en MP3…")
        elif status == "finished":
            self._write("  conversion en MP3…")

    def _write(self, text: str) -> None:
        self.stream.write("\r\033[K" + text)
        self.stream.flush()
        self._active = True

    def clear(self) -> None:
        if self._active:
            self.stream.write("\r\033[K")
            self.stream.flush()
            self._active = False


def _percent(event: dict) -> str:
    total = event.get("total_bytes") or event.get("total_bytes_estimate")
    downloaded = event.get("downloaded_bytes") or 0
    if not total:
        return f"{downloaded / 1_048_576:.1f} Mo"
    return f"{downloaded / total * 100:5.1f} %"


def _speed(event: dict) -> str:
    speed = event.get("speed")
    return f"({speed / 1_048_576:.1f} Mo/s)" if speed else ""


def format_duration(seconds: Optional[float]) -> str:
    if not seconds:
        return ""
    seconds = int(seconds)
    if seconds >= 3600:
        return f"{seconds // 3600}:{seconds % 3600 // 60:02d}:{seconds % 60:02d}"
    return f"{seconds // 60}:{seconds % 60:02d}"


def report(results: Sequence[ConversionResult], quiet: bool, stream=None) -> None:
    """Résume les conversions ; les erreurs partent toujours sur stderr."""
    out = stream or sys.stdout
    converted = [r for r in results if r.ok and not r.skipped]
    skipped = [r for r in results if r.skipped]
    failed = [r for r in results if not r.ok]

    if not quiet:
        for result in skipped:
            print(f"↷ ignoré (déjà présent) : {result.path}", file=out)
        summary = f"{len(converted)} converti(s)"
        if skipped:
            summary += f", {len(skipped)} ignoré(s)"
        if failed:
            summary += f", {len(failed)} en échec"
        print(summary, file=out)

    for result in failed:
        print(f"✗ {result.title or result.url} : {result.error}", file=sys.stderr)


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    try:
        urls = collect_urls(args)
    except YtMp3Error as exc:
        print(f"✗ {exc}", file=sys.stderr)
        return EXIT_USAGE

    if not urls:
        parser.print_help(sys.stderr)
        return EXIT_USAGE

    # En mode verbeux, yt-dlp écrit déjà en continu : notre ligne réécrite en
    # place se ferait écraser, on la laisse de côté.
    progress = ProgressPrinter(enabled=not (args.quiet or args.verbose))
    try:
        converter = Converter(options_from_args(args), on_progress=progress)
        converter.ensure_ready()
    except YtMp3Error as exc:
        print(f"✗ {exc}", file=sys.stderr)
        return EXIT_USAGE

    results: List[ConversionResult] = []
    try:
        for url in urls:
            if not args.quiet:
                print(f"→ {url}")
            for result in converter.convert(url):
                progress.clear()
                results.append(result)
                if result.ok and not result.skipped and not args.quiet:
                    duration = format_duration(result.duration)
                    suffix = f"  [{duration}]" if duration else ""
                    print(f"✓ {result.path}{suffix}")
    except KeyboardInterrupt:
        progress.clear()
        print("Interrompu.", file=sys.stderr)
        return EXIT_FAILED
    except YtMp3Error as exc:
        progress.clear()
        print(f"✗ {exc}", file=sys.stderr)
        return EXIT_FAILED
    finally:
        progress.clear()

    report(results, args.quiet)
    return EXIT_OK if all(r.ok for r in results) else EXIT_FAILED


if __name__ == "__main__":
    sys.exit(main())
