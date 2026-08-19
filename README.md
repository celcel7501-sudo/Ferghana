# Ferghana — Studio Suno V5.5

Console de production pour écrire des morceaux destinés à **Suno V5.5**.

Conçu et codé par **Karim Saidi**.

Le studio est incarné par un agent unique — *Lead Executive Producer & Suno V5.5
Platinum Architect*, identité **DJ Rim-K, host du Prestige Old School Podcast** —
qui fusionne plusieurs écoles de production et plusieurs plumes :

- **Kore / Cut Killer** — sens du tube, drums percutants, scratch technique,
  énergie mixtape.
- **DJ Mehdi** — sampling, boucles de soul filtrées, basses analogiques, French
  Touch urbaine.
- **Djimi Finger / Secteur Ä** — architecture Golden Era : piano sombre, cordes
  cinématographiques, basse jazz-fusion.
- **Timbaland / Darkchild** — programmation rythmique : foley, syncopes, batterie
  qui bégaie, chops vocaux gatés.
- **Booba / Rohff** — trap sombre d'un côté, rap conscient et cordes de l'autre.
- **Brandy / Ninho** — structures vocales : harmonies empilées, hooks mémorables.
- **Oxmo Puccino / Lino / Doc Gynéco / Scred Connexion** — la plume : images
  concrètes, rimes riches, densité syllabique, nonchalance.

## Utilisation

Le producteur est installé comme skill Claude Code. Il se déclenche tout seul
sur une demande de morceau, ou explicitement :

```
/suno-v5-5-producer une vibe été 92 BPM, mélancolique, refrain club
```

Chaque réponse suit le même format en **cinq temps** :

| Section | Contenu | Langue |
|---|---|---|
| 🧪 Analyse du mix | Pourquoi la fusion fonctionne, techniquement | Français |
| 🎛️ Style prompt | Le bloc de tags positifs en couches | **Anglais** |
| 🚫 Bloc d'exclusion | La liste de tags négatifs, séparée | **Anglais** |
| 📝 Script & paroles | Le texte, balises de direction, Call & Response | Français |
| 🎹 Notes de studio | BPM, tonalité, delivery, leviers de re-génération | Français |

Le bloc d'exclusion est **séparé** parce que Suno expose un champ dédié
*Exclude Styles*, plus fiable et gratuit en budget de caractères. Mesuré sur
plusieurs morceaux, il libère **120 à 145 caractères** de prompt positif.

## Contenu du dépôt

```
.claude/skills/suno-v5-5-producer/
├── SKILL.md                              # persona, protocoles, format de sortie
├── references/
│   ├── producer-tag-translation.md       # ADN producteur → tags furtifs
│   ├── style-prompt-layers.md            # grammaire du champ "Style of Music"
│   ├── structure-tags.md                 # balises, ratios, structures
│   ├── field-limits.md                   # limites 1000 / 5000 et compression
│   ├── negative-prompting.md             # exclusions, conflits, bloc maison
│   ├── spatialization-and-persistence.md # stéréo, persistance, ruptures
│   ├── plume-et-flow.md                  # rime riche, métrique, tags de débit
│   └── dmc-scratch-lexicon.md            # techniques de scratch et placement
└── examples/                             # morceaux de référence, tous mesurés
```

Chaque fiche d'exemple porte ses mesures réelles (style, bloc d'exclusion,
paroles) et le ratio hook / couplets calculé section par section.

## Procédure imprimable et version web

```
python3 tools/make_procedure_pdf.py     # → docs/procedure-suno-v5-5.pdf
```

`docs/protocole-platinum.html` est la version web du même protocole. En cas de
divergence, le contenu de `.claude/skills/suno-v5-5-producer/` fait foi.
Régénérer après toute modification du protocole.

## Limites Suno (contraintes dures)

| Champ | Limite | Cible |
|---|---|---|
| Style of Music | 1000 caractères | ≈ 900 |
| Lyrics (balises comprises) | 5000 caractères | ≈ 4850 |

Suno tronque en silence ce qui dépasse. On mesure avant de livrer, jamais à
l'estime :

```
python3 tools/count.py --style style.txt --lyrics paroles.txt
```

Le script sort en code 1 si un champ déborde. Méthode de compression et ordre de
sacrifice : `references/field-limits.md`.

## Structure « banger » par défaut

`[Intro: Turntablism]` → `[Verse]` → `[Pre-Chorus: Energy ramp]` →
`[Chorus: Anthemic hook]` → `[Verse]` → `[Pre-Chorus]` → `[Chorus]` →
`[Bridge: Beat switch / DMC Routine]` → `[Chorus final]` → `[Outro]`

Ce squelette est un **défaut**, pas une loi : il est nuisible sur les genres
dont le sommet dramatique est une soustraction (amapiano, afro-house, dub), où
le pré-refrain ne monte pas mais tombe. Voir `references/structure-tags.md`.

## Principe directeur

On ne cherche pas la performance technique. On cherche l'émotion, le groove qui
respire, et un refrain qu'on peut chanter mal.
