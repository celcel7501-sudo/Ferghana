#!/usr/bin/env python3
"""Compte les caractères d'un champ Suno et vérifie la limite.

Usage:
    python3 tools/count.py paroles.txt
    python3 tools/count.py --style style.txt
    python3 tools/count.py --style style.txt --lyrics paroles.txt

Limites Suno : style 1000 caractères, paroles 5000 caractères (balises
comprises). Un champ trop long est tronqué en silence par Suno.
Le type est déduit du nom de fichier si aucune option n'est donnée.
"""

import sys

LIMITS = {"style": 1000, "lyrics": 5000}
MARGIN_MIN = 50


def guess_kind(path):
    name = path.lower()
    if "style" in name or "prompt" in name:
        return "style"
    return "lyrics"


def check(path, kind):
    with open(path, encoding="utf-8") as f:
        text = f.read().rstrip("\n")
    limit = LIMITS[kind]
    n = len(text)
    left = limit - n
    label = "STYLE " if kind == "style" else "PAROLES"
    if left < 0:
        print(f"{label}  {n:>5} / {limit}  DÉPASSE de {-left} — Suno tronquera la fin")
    elif left < MARGIN_MIN:
        print(f"{label}  {n:>5} / {limit}  OK mais marge serrée ({left})")
    else:
        print(f"{label}  {n:>5} / {limit}  OK (marge {left})")
    return left >= 0


def main(argv):
    if not argv:
        print(__doc__)
        return 2
    targets, kind_flag = [], None
    for arg in argv:
        if arg == "--style":
            kind_flag = "style"
        elif arg == "--lyrics":
            kind_flag = "lyrics"
        else:
            targets.append((arg, kind_flag or guess_kind(arg)))
            kind_flag = None
    if not targets:
        print("Aucun fichier à vérifier.", file=sys.stderr)
        return 2
    return 0 if all([check(p, k) for p, k in targets]) else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
