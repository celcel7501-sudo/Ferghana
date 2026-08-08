from pathlib import Path

import pytest

from ytmp3.converter import (
    ConversionOptions,
    ConversionResult,
    Converter,
    _clean_message,
    _entries,
    _final_path,
    _quality_argument,
    hint_for,
)
from ytmp3.errors import FFmpegNotFoundError, InvalidOptionError


class FakeYDL:
    """Double de yt_dlp.YoutubeDL : enregistre les appels, ne fait aucun réseau."""

    def __init__(self, info=None, download_info=None, raises=None):
        self.info = info or {}
        self.download_info = download_info
        self.raises = raises
        self.calls = []

    def __enter__(self):
        return self

    def __exit__(self, *exc):
        return False

    def extract_info(self, url, download=False):
        self.calls.append((url, download))
        if self.raises:
            raise self.raises
        return self.download_info if download and self.download_info else self.info

    def prepare_filename(self, info):
        """Reproduit le modèle par défaut « %(title)s.%(ext)s »."""
        return str(Path("mp3") / f"{info.get('title', 'video')}.{info.get('ext', 'webm')}")


def make_converter(monkeypatch, ydl, tmp_path, **option_kwargs):
    options = ConversionOptions(output_dir=tmp_path, **option_kwargs)
    converter = Converter(options)
    monkeypatch.setattr(converter, "_youtube_dl", lambda: ydl)
    monkeypatch.setattr("ytmp3.converter.ffmpeg_available", lambda: True)
    return converter


# --------------------------------------------------------------------- options


def test_bitrate_invalide_refuse():
    with pytest.raises(InvalidOptionError):
        ConversionOptions(bitrate="42")


def test_retries_negatif_refuse():
    with pytest.raises(InvalidOptionError):
        ConversionOptions(retries=-1)


def test_template_vide_refuse():
    with pytest.raises(InvalidOptionError):
        ConversionOptions(filename_template="   ")


@pytest.mark.parametrize("bitrate,attendu", [("192", "192"), ("320", "320"), ("best", "0")])
def test_traduction_du_debit(bitrate, attendu):
    assert _quality_argument(bitrate) == attendu


def test_options_ydl_par_defaut(tmp_path):
    opts = Converter(ConversionOptions(output_dir=tmp_path)).ydl_options()

    assert opts["format"] == "bestaudio/best"
    assert opts["outtmpl"] == str(tmp_path / "%(title)s.%(ext)s")
    assert opts["noplaylist"] is True
    assert opts["overwrites"] is False
    extract = opts["postprocessors"][0]
    assert extract["key"] == "FFmpegExtractAudio"
    assert extract["preferredcodec"] == "mp3"
    assert extract["preferredquality"] == "192"


def test_postprocesseurs_optionnels_desactivables(tmp_path):
    opts = Converter(
        ConversionOptions(output_dir=tmp_path, embed_metadata=False, embed_thumbnail=False)
    ).ydl_options()

    cles = [pp["key"] for pp in opts["postprocessors"]]
    assert cles == ["FFmpegExtractAudio"]
    assert opts["writethumbnail"] is False


def test_pochette_convertie_avant_integration(tmp_path):
    opts = Converter(ConversionOptions(output_dir=tmp_path)).ydl_options()

    cles = [pp["key"] for pp in opts["postprocessors"]]
    assert cles.index("FFmpegThumbnailsConvertor") < cles.index("EmbedThumbnail")
    assert opts["writethumbnail"] is True


def test_playlist_et_cookies_reportes(tmp_path):
    opts = Converter(
        ConversionOptions(output_dir=tmp_path, playlist=True, cookies_from_browser="firefox")
    ).ydl_options()

    assert opts["noplaylist"] is False
    assert opts["cookiesfrombrowser"] == ("firefox",)


def test_sortie_ytdlp_museclee_par_defaut(tmp_path):
    opts = Converter(ConversionOptions(output_dir=tmp_path)).ydl_options()

    assert opts["quiet"] is True
    assert opts["no_warnings"] is True
    assert "logger" in opts  # sinon chaque erreur s'afficherait deux fois


def test_verbose_rend_la_parole_a_ytdlp(tmp_path):
    opts = Converter(ConversionOptions(output_dir=tmp_path, verbose=True)).ydl_options()

    assert opts["quiet"] is False
    assert opts["verbose"] is True
    assert "logger" not in opts


def test_hooks_absents_sans_callback(tmp_path):
    assert "progress_hooks" not in Converter(ConversionOptions(output_dir=tmp_path)).ydl_options()


def test_hooks_branches_sur_les_deux_phases(tmp_path):
    hook = lambda event: None  # noqa: E731
    opts = Converter(ConversionOptions(output_dir=tmp_path), on_progress=hook).ydl_options()

    assert opts["progress_hooks"] == [hook]
    assert opts["postprocessor_hooks"] == [hook]


# ---------------------------------------------------------------- préparation


def test_ensure_ready_exige_ffmpeg(monkeypatch, tmp_path):
    monkeypatch.setattr("ytmp3.converter.ffmpeg_available", lambda: False)
    with pytest.raises(FFmpegNotFoundError):
        Converter(ConversionOptions(output_dir=tmp_path)).ensure_ready()


def test_ensure_ready_cree_le_dossier(monkeypatch, tmp_path):
    monkeypatch.setattr("ytmp3.converter.ffmpeg_available", lambda: True)
    cible = tmp_path / "a" / "b"

    Converter(ConversionOptions(output_dir=cible)).ensure_ready()

    assert cible.is_dir()


def test_target_path_impose_l_extension_mp3(tmp_path):
    converter = Converter(ConversionOptions(output_dir=tmp_path))

    assert converter.target_path({"title": "Chanson"}, ydl=FakeYDL()).name == "Chanson.mp3"


def test_target_path_preserve_un_titre_pointe(tmp_path):
    """Un « with_suffix » naïf transformerait « Format 16.9 » en « Format 16 »."""
    converter = Converter(ConversionOptions(output_dir=tmp_path))

    cible = converter.target_path({"title": "Format 16.9"}, ydl=FakeYDL())

    assert cible.name == "Format 16.9.mp3"


def test_target_path_complete_un_modele_sans_extension(tmp_path):
    class SansExtension(FakeYDL):
        def prepare_filename(self, info):
            return str(Path("mp3") / info["title"])  # modèle « %(title)s »

    converter = Converter(ConversionOptions(output_dir=tmp_path, filename_template="%(title)s"))

    assert converter.target_path({"title": "Format 16.9"}, ydl=SansExtension()).name == (
        "Format 16.9.mp3"
    )


# ---------------------------------------------------------------- conversion


def test_conversion_reussie(monkeypatch, tmp_path):
    mp3 = tmp_path / "Chanson.mp3"
    info = {"title": "Chanson", "duration": 185, "webpage_url": "https://y/watch?v=1"}
    ydl = FakeYDL(info=info, download_info={**info, "requested_downloads": [{"filepath": str(mp3)}]})
    converter = make_converter(monkeypatch, ydl, tmp_path)
    monkeypatch.setattr(converter, "target_path", lambda info, ydl=None: mp3)
    mp3.write_bytes(b"")
    mp3.unlink()

    def creer(url, download=False):
        ydl.calls.append((url, download))
        if download:
            mp3.write_bytes(b"ID3")
            return {**info, "requested_downloads": [{"filepath": str(mp3)}]}
        return info

    ydl.extract_info = creer
    (resultat,) = converter.convert("https://y/watch?v=1")

    assert resultat.ok and not resultat.skipped
    assert resultat.path == mp3
    assert resultat.title == "Chanson"
    assert resultat.duration == 185


def test_fichier_existant_ignore_sans_telechargement(monkeypatch, tmp_path):
    (tmp_path / "Chanson.mp3").write_bytes(b"ID3")
    ydl = FakeYDL(info={"title": "Chanson", "webpage_url": "https://y/watch?v=1"})
    converter = make_converter(monkeypatch, ydl, tmp_path)
    monkeypatch.setattr(converter, "target_path", lambda info, ydl=None: tmp_path / "Chanson.mp3")

    (resultat,) = converter.convert("https://y/watch?v=1")

    assert resultat.skipped and resultat.ok
    assert [c for c in ydl.calls if c[1] is True] == []


def test_overwrite_force_le_telechargement(monkeypatch, tmp_path):
    mp3 = tmp_path / "Chanson.mp3"
    mp3.write_bytes(b"ID3")
    info = {"title": "Chanson", "webpage_url": "https://y/watch?v=1"}
    ydl = FakeYDL(info=info, download_info={**info, "requested_downloads": [{"filepath": str(mp3)}]})
    converter = make_converter(monkeypatch, ydl, tmp_path, overwrite=True)
    monkeypatch.setattr(converter, "target_path", lambda info, ydl=None: mp3)

    (resultat,) = converter.convert("https://y/watch?v=1")

    assert not resultat.skipped
    assert (info["webpage_url"], True) in ydl.calls


def test_erreur_reseau_devient_un_resultat_en_echec(monkeypatch, tmp_path):
    ydl = FakeYDL(raises=RuntimeError("ERROR: Video unavailable"))
    converter = make_converter(monkeypatch, ydl, tmp_path)

    (resultat,) = converter.convert("https://y/watch?v=1")

    assert not resultat.ok
    assert resultat.error == "Video unavailable"


def test_mp3_manquant_apres_conversion_signale(monkeypatch, tmp_path):
    info = {"title": "Chanson", "webpage_url": "https://y/watch?v=1"}
    ydl = FakeYDL(info=info, download_info={**info, "requested_downloads": []})
    converter = make_converter(monkeypatch, ydl, tmp_path)

    (resultat,) = converter.convert("https://y/watch?v=1")

    assert not resultat.ok
    assert "sans produire" in resultat.error


def test_playlist_donne_un_resultat_par_video(monkeypatch, tmp_path):
    entrees = [
        {"title": "A", "webpage_url": "https://y/watch?v=a"},
        None,  # vidéo privée : yt-dlp insère None
        {"title": "B", "webpage_url": "https://y/watch?v=b"},
    ]
    ydl = FakeYDL(info={"entries": entrees})
    converter = make_converter(monkeypatch, ydl, tmp_path, playlist=True)
    for nom in ("A", "B"):
        (tmp_path / f"{nom}.mp3").write_bytes(b"ID3")
    monkeypatch.setattr(
        converter, "target_path", lambda info, ydl=None: tmp_path / f"{info['title']}.mp3"
    )

    resultats = converter.convert("https://y/playlist?list=x")

    assert [r.title for r in resultats] == ["A", "B"]
    assert all(r.skipped for r in resultats)


def test_playlist_vide_signalee(monkeypatch, tmp_path):
    converter = make_converter(monkeypatch, FakeYDL(info={"entries": []}), tmp_path, playlist=True)

    (resultat,) = converter.convert("https://y/playlist?list=x")

    assert not resultat.ok


def test_convert_many_concatene(monkeypatch, tmp_path):
    ydl = FakeYDL(info={"title": "A", "webpage_url": "https://y/watch?v=a"})
    converter = make_converter(monkeypatch, ydl, tmp_path)
    (tmp_path / "A.mp3").write_bytes(b"ID3")
    monkeypatch.setattr(converter, "target_path", lambda info, ydl=None: tmp_path / "A.mp3")

    resultats = converter.convert_many(["https://y/watch?v=a", "https://y/watch?v=b"])

    assert len(resultats) == 2


# ------------------------------------------------------------------- helpers


def test_entries_aplatit_les_playlists_imbriquees():
    info = {"entries": [{"entries": [{"title": "A"}, None]}, {"title": "B"}]}

    assert [e["title"] for e in _entries(info)] == ["A", "B"]


def test_final_path_force_extension_mp3():
    info = {"requested_downloads": [{"filepath": "/tmp/x/Chanson.webm"}]}

    assert _final_path(info) == Path("/tmp/x/Chanson.mp3")


def test_final_path_sans_download():
    assert _final_path({"title": "A"}) is None
    assert _final_path(None) is None


@pytest.mark.parametrize(
    "message,extrait_du_conseil",
    [
        ("ERROR: Sign in to confirm you're not a bot", "--cookies-from-browser"),
        ("ERROR: Private video. Sign in if you've been granted access", "Vidéo privée"),
        ("ERROR: Join this channel to get access to members-only content", "membres"),
        ("ERROR: Sign in to confirm your age", "limite d'âge"),
        ("ERROR: Video unavailable", "supprimée"),
        ("ERROR: The uploader has not made this video available in your country", "pays"),
        ("ERROR: Unable to extract player response", "pip install -U yt-dlp"),
        ("ERROR: nsig extraction failed", "pip install -U yt-dlp"),
        ("ERROR: HTTP Error 429: Too Many Requests", "patientez"),
        ("ERROR: Requested format is not available", "Aucune piste audio"),
        ("ERROR: This live event will begin in 3 hours", "diffusion n'a pas commencé"),
        ("Unable to connect to proxy", "réseau"),
        ("ERROR: Postprocessing: ffmpeg exited with code 1", "ffmpeg"),
    ],
)
def test_conseil_pour_les_erreurs_connues(message, extrait_du_conseil):
    conseil = hint_for(message)

    assert conseil is not None, f"aucun conseil pour {message!r}"
    assert extrait_du_conseil in conseil


def test_aucun_conseil_pour_une_erreur_inconnue():
    assert hint_for("ERROR: quelque chose d'inédit") is None


def test_fail_attache_le_conseil():
    resultat = ConversionResult(url="u").fail("ERROR: Video unavailable")

    assert not resultat.ok
    assert resultat.error == "ERROR: Video unavailable"
    assert "supprimée" in resultat.hint


def test_fail_sans_conseil_laisse_hint_vide():
    assert ConversionResult(url="u").fail("panne inconnue").hint is None


def test_conseil_remonte_jusqu_au_resultat(monkeypatch, tmp_path):
    ydl = FakeYDL(raises=RuntimeError("ERROR: Sign in to confirm you're not a bot"))
    converter = make_converter(monkeypatch, ydl, tmp_path)

    (resultat,) = converter.convert("https://y/watch?v=1")

    assert "--cookies-from-browser" in resultat.hint


def test_clean_message_retire_le_prefixe_ytdlp():
    assert _clean_message(RuntimeError("ERROR: boum")) == "boum"
    assert _clean_message(RuntimeError("")) == "RuntimeError"


def test_clean_message_coupe_l_appel_a_ticket_ytdlp():
    brut = (
        "ERROR: [youtube] abc: Unable to download API page: Tunnel connection failed"
        "; please report this issue on  https://github.com/yt-dlp/yt-dlp/issues?q= , "
        "filling out the appropriate issue template. Confirm you are on the latest "
        "version using  yt-dlp -U"
    )

    assert _clean_message(RuntimeError(brut)) == (
        "[youtube] abc: Unable to download API page: Tunnel connection failed"
    )


def test_clean_message_ne_vide_jamais_le_message():
    assert _clean_message(RuntimeError("ERROR: please report this issue")) == "RuntimeError"


def test_resultat_en_echec_nest_pas_ok():
    assert not ConversionResult(url="u", error="boum").ok
    assert ConversionResult(url="u", path=Path("a.mp3")).ok
