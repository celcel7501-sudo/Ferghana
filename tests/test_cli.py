import io
from pathlib import Path

import pytest

from ytmp3 import cli
from ytmp3.converter import ConversionResult


class FakeConverter:
    """Remplace le vrai Converter : renvoie des résultats scriptés par URL."""

    instances = []

    def __init__(self, options, on_progress=None):
        self.options = options
        self.on_progress = on_progress
        self.urls = []
        FakeConverter.instances.append(self)

    resultats = {}

    def ensure_ready(self):
        pass

    def convert(self, url):
        self.urls.append(url)
        return FakeConverter.resultats.get(url, [ConversionResult(url=url, path=Path("a.mp3"))])


@pytest.fixture
def fake_converter(monkeypatch):
    FakeConverter.instances = []
    FakeConverter.resultats = {}
    monkeypatch.setattr(cli, "Converter", FakeConverter)
    return FakeConverter


# ----------------------------------------------------------------- arguments


def test_defauts(fake_converter):
    assert cli.main(["https://y/watch?v=1"]) == cli.EXIT_OK

    options = fake_converter.instances[0].options
    assert options.bitrate == "192"
    assert options.output_dir == Path("mp3")
    assert options.playlist is False
    assert options.embed_metadata is True
    assert options.embed_thumbnail is True


def test_options_transmises(fake_converter, tmp_path):
    code = cli.main(
        [
            "-b",
            "320",
            "-o",
            str(tmp_path),
            "--playlist",
            "--overwrite",
            "--no-metadata",
            "--no-thumbnail",
            "--retries",
            "5",
            "https://y/watch?v=1",
        ]
    )

    assert code == cli.EXIT_OK
    options = fake_converter.instances[0].options
    assert options.bitrate == "320"
    assert options.output_dir == tmp_path
    assert options.playlist is True
    assert options.overwrite is True
    assert options.embed_metadata is False
    assert options.embed_thumbnail is False
    assert options.retries == 5


def test_verbose_transmis_et_progression_desactivee(fake_converter):
    cli.main(["-v", "https://y/watch?v=1"])

    instance = fake_converter.instances[0]
    assert instance.options.verbose is True
    assert instance.on_progress.enabled is False


def test_debit_inconnu_rejete_par_argparse():
    with pytest.raises(SystemExit):
        cli.main(["-b", "42", "https://y/watch?v=1"])


def test_sans_url_affiche_l_aide(capsys):
    assert cli.main([]) == cli.EXIT_USAGE
    assert "usage" in capsys.readouterr().err.lower()


def test_urls_multiples_toutes_traitees(fake_converter):
    cli.main(["https://y/watch?v=1", "https://y/watch?v=2"])

    assert fake_converter.instances[0].urls == ["https://y/watch?v=1", "https://y/watch?v=2"]


def test_doublons_supprimes(fake_converter):
    cli.main(["https://y/watch?v=1", "https://y/watch?v=1"])

    assert fake_converter.instances[0].urls == ["https://y/watch?v=1"]


# ------------------------------------------------------------ fichier d'URL


def test_lecture_fichier_url(tmp_path):
    fichier = tmp_path / "urls.txt"
    fichier.write_text(
        "# ma liste\n"
        "https://y/watch?v=1\n"
        "\n"
        "   https://y/watch?v=2   # commentaire en fin de ligne\n",
        encoding="utf-8",
    )

    assert cli.read_url_file(fichier) == ["https://y/watch?v=1", "https://y/watch?v=2"]


def test_fichier_url_absent_code_usage(capsys, tmp_path):
    assert cli.main(["--from-file", str(tmp_path / "absent.txt")]) == cli.EXIT_USAGE
    assert "✗" in capsys.readouterr().err


def test_fichier_et_ligne_de_commande_fusionnes(fake_converter, tmp_path):
    fichier = tmp_path / "urls.txt"
    fichier.write_text("https://y/watch?v=2\n", encoding="utf-8")

    cli.main(["https://y/watch?v=1", "--from-file", str(fichier)])

    assert fake_converter.instances[0].urls == ["https://y/watch?v=1", "https://y/watch?v=2"]


# --------------------------------------------------------- codes de retour


def test_echec_partiel_code_1(fake_converter, capsys):
    fake_converter.resultats = {
        "https://y/watch?v=2": [ConversionResult(url="https://y/watch?v=2", error="indisponible")]
    }

    code = cli.main(["https://y/watch?v=1", "https://y/watch?v=2"])

    assert code == cli.EXIT_FAILED
    assert "indisponible" in capsys.readouterr().err


def test_ffmpeg_absent_code_usage(monkeypatch, capsys):
    from ytmp3.errors import FFmpegNotFoundError

    class SansFFmpeg(FakeConverter):
        def ensure_ready(self):
            raise FFmpegNotFoundError()

    monkeypatch.setattr(cli, "Converter", SansFFmpeg)

    assert cli.main(["https://y/watch?v=1"]) == cli.EXIT_USAGE
    assert "ffmpeg" in capsys.readouterr().err.lower()


def test_interruption_clavier_code_1(monkeypatch, capsys):
    class Interrompu(FakeConverter):
        def convert(self, url):
            raise KeyboardInterrupt

    monkeypatch.setattr(cli, "Converter", Interrompu)

    assert cli.main(["https://y/watch?v=1"]) == cli.EXIT_FAILED
    assert "Interrompu" in capsys.readouterr().err


# --------------------------------------------------------------- affichage


def test_resume_liste_les_ignores(capsys):
    resultats = [
        ConversionResult(url="u1", path=Path("a.mp3")),
        ConversionResult(url="u2", path=Path("b.mp3"), skipped=True),
        ConversionResult(url="u3", error="boum"),
    ]

    cli.report(resultats, quiet=False)

    sortie = capsys.readouterr()
    assert "b.mp3" in sortie.out
    assert "1 converti(s), 1 ignoré(s), 1 en échec" in sortie.out
    assert "boum" in sortie.err


def test_mode_silencieux_garde_les_erreurs(capsys):
    cli.report([ConversionResult(url="u", error="boum")], quiet=True)

    sortie = capsys.readouterr()
    assert sortie.out == ""
    assert "boum" in sortie.err


@pytest.mark.parametrize(
    "secondes,attendu", [(None, ""), (0, ""), (61, "1:01"), (3661, "1:01:01"), (185, "3:05")]
)
def test_format_duree(secondes, attendu):
    assert cli.format_duration(secondes) == attendu


def test_progression_inactive_hors_terminal():
    flux = io.StringIO()
    printer = cli.ProgressPrinter(stream=flux, enabled=True)

    printer({"status": "downloading", "downloaded_bytes": 5, "total_bytes": 10})

    assert flux.getvalue() == ""


def test_progression_affiche_pourcentage_et_efface():
    class FluxTty(io.StringIO):
        def isatty(self):
            return True

    flux = FluxTty()
    printer = cli.ProgressPrinter(stream=flux, enabled=True)

    printer({"status": "downloading", "downloaded_bytes": 5, "total_bytes": 10, "speed": 1_048_576})
    assert "50.0 %" in flux.getvalue()
    assert "1.0 Mo/s" in flux.getvalue()

    printer({"status": "finished"})
    assert "conversion" in flux.getvalue()

    printer.clear()
    assert flux.getvalue().endswith("\r\033[K")


def test_progression_sans_taille_totale_affiche_les_megaoctets():
    assert "1.0 Mo" in cli._percent({"downloaded_bytes": 1_048_576})
