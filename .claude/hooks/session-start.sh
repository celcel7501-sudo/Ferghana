#!/bin/bash
# Hook SessionStart — installe les dependances pour que le typecheck et les
# tests soient utilisables des le debut d'une session Claude Code on the web.
#
# Synchrone : la session ne demarre qu'une fois l'installation terminee. Cela
# evite qu'un agent lance « npm test » avant que node_modules existe.
set -euo pipefail

# Sur une machine locale, l'environnement est deja celui du developpeur.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

racine="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)}"
cd "$racine"

echo "→ Installation des dependances (racine : $racine)"

# --- Paquets npm -----------------------------------------------------------
# « npm install » plutot que « npm ci » : l'etat du conteneur est mis en cache
# apres le hook, et install reutilise ce qui est deja la au lieu de repartir
# d'un arbre vide a chaque fois.
for paquet in apps/suno-maestro apps/suno-maestro-server; do
  if [ -f "$paquet/package.json" ]; then
    echo "→ npm install dans $paquet"
    (cd "$paquet" && npm install --no-audit --no-fund)
  else
    echo "  $paquet ignore : pas de package.json"
  fi
done

# --- Dependances Python ----------------------------------------------------
# reportlab sert a regenerer docs/procedure-suno-v5-5.pdf.
if [ -f tools/requirements.txt ]; then
  echo "→ pip install -r tools/requirements.txt"
  python3 -m pip install --quiet --disable-pip-version-check \
    -r tools/requirements.txt
fi

# --- Verification -----------------------------------------------------------
# On echoue bruyamment ici plutot que de laisser la session decouvrir le
# probleme au premier « npm test ».
manquants=0
for paquet in apps/suno-maestro apps/suno-maestro-server; do
  if [ -f "$paquet/package.json" ] && [ ! -d "$paquet/node_modules" ]; then
    echo "‼ node_modules absent dans $paquet" >&2
    manquants=1
  fi
done
python3 -c "import reportlab" 2>/dev/null || {
  echo "‼ reportlab non importable" >&2
  manquants=1
}
[ "$manquants" -eq 0 ] || exit 1

echo "✓ Dependances pretes."
echo "  Typecheck : (cd apps/suno-maestro && npm run typecheck)"
echo "              (cd apps/suno-maestro-server && npm run typecheck)"
echo "  Tests     : (cd apps/suno-maestro && npm test)"
