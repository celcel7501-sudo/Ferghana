#!/usr/bin/env python3
"""Extrait le texte de docs/procedure-suno-v5-5.pdf et verifie sa presence.

    python3 tools/verify_pdf.py                 # compte pages et caracteres
    python3 tools/verify_pdf.py "une phrase"    # verifie une chaine

Pourquoi cet outil existe : pypdf est inutilisable dans cet environnement, et
une premiere version basee sur la regex `stream\\r?\\n(.*?)\\r?\\nendstream`
retournait zero flux en silence — donc « absent » pour du contenu bel et bien
present. Un verificateur qui echoue silencieusement est pire que pas de
verificateur. Ici on decoupe sur les bornes, sans supposer de saut de ligne.
"""
import base64
import re
import sys
import zlib

CHEMIN = "docs/procedure-suno-v5-5.pdf"


def flux_bruts(donnees: bytes) -> list[bytes]:
    out, pos = [], 0
    while True:
        a = donnees.find(b"stream", pos)
        if a < 0:
            return out
        if donnees[a - 3:a] == b"end":       # 'endstream', pas une ouverture
            pos = a + 6
            continue
        b = donnees.find(b"endstream", a)
        if b < 0:
            return out
        out.append(donnees[a + 6:b].strip(b"\r\n"))
        pos = b + 9


def texte(donnees: bytes) -> str:
    morceaux = []
    for raw in flux_bruts(donnees):
        r = raw[:-2] if raw.endswith(b"~>") else raw
        try:
            morceaux.append(zlib.decompress(base64.a85decode(r, adobe=False)).decode("latin-1"))
        except Exception:
            try:
                morceaux.append(zlib.decompress(raw).decode("latin-1"))
            except Exception:
                continue
    litteraux = (m[1:-1] for t in morceaux for m in re.findall(r"\((?:[^()\\]|\\.)*\)", t))
    return " ".join(litteraux)


def main(argv: list[str]) -> int:
    donnees = open(CHEMIN, "rb").read()
    pages = len(re.findall(rb"/Type\s*/Page[^s]", donnees))
    plat = texte(donnees)

    if not plat:
        print("ECHEC : aucun texte extrait — l'extracteur est casse, pas le PDF.")
        return 2

    print(f"{CHEMIN} — {pages} pages, {len(donnees):,} octets, "
          f"{len(plat):,} caracteres de texte".replace(",", " "))

    if len(argv) > 1:
        manquants = [a for a in argv[1:] if a not in plat]
        for a in argv[1:]:
            print(f"  {'ABSENT' if a in manquants else 'OK    '} {a!r}")
        return 1 if manquants else 0
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
