# Balises de direction V5.5 — catalogue

Une balise nue (`[Verse]`) laisse Suno improviser. Une balise **enrichie** force
un comportement. Règle : `[Section: intention musicale, détail de flow, détail
d'arrangement]`.

## Le squelette standard

| Balise | Rôle | Exemple enrichi |
|---|---|---|
| `[Intro: Atmosphere & Turntablism]` | Planter le décor sonore + premiers cuts | `[Intro: Atmosphere & Turntablism — street ambience, distant scooter, vinyl crackle, two baby scratches on a horn stab]` |
| `[Verse: Flow State]` | Fixer le débit | `[Verse: Lazy Gynéco flow, internal rhymes, slightly behind the beat, drums drop to hats only on line 5]` |
| `[Pre-Chorus: Energy Ramp]` | Forcer la montée | `[Pre-Chorus: Energy Ramp — filter opening, snare roll building, vocal doubling appears]` |
| `[Chorus: The Hook]` | Tessiture + accroche | `[Chorus: The Hook — tenor soaring, gospel-style backing vocals answering each line, catchy melody, full drums]` |
| `[Bridge: The Switch-up]` | Casser le morceau | `[Bridge: Beat switch, half-time, experimental textures, bass drops out]` |
| `[DMC Routine]` | Solo de platines | `[Scratch Solo: Fast crab scratches, transformer cuts, record rewind, drums reduced to kick and rimshot]` |
| `[Outro: Smooth Exit]` | Fin fondue ou nette | `[Outro: Smooth Exit — hook hummed, instruments peeling off one by one, tape stop on the last bar]` |

## Balises de renfort

- `[Break: drums only]` — respiration rythmique, très efficace avant un refrain.
- `[Hook Ad-libs: whispered doubles, panned wide]` — épaissit sans réécrire.
- `[Call & Response: lead line, crowd answers]` — le moteur du refrain club.
- `[Drop: sub-bass enters, everything else mutes for one bar]`
- `[Tape Stop]`, `[Backspin]`, `[Silence: half a bar]` — ponctuation.
- `[Instrumental Turnaround: 4 bars]` — laisse la place à l'instru de respirer.

## Directives de voix à glisser dans les balises

- Placement : `slightly behind the beat`, `on top of the beat`, `dragging`.
- Registre : `low tenor`, `head voice on the last line`, `spoken aside`.
- Souffle : `breathy`, `close-mic intimacy`, `almost whispered`.
- Doublage : `doubled hook`, `octave-down double on the last word of each line`.

## Discipline de structure

- **Une balise par section**, jamais deux empilées : Suno prend la première et
  ignore la seconde.
- **Les crochets ne se chantent pas** — mais les mots à l'intérieur peuvent fuir
  dans la prise si la section est trop courte. Une balise = au moins 4 mesures.
- **Longueur cible** : 2 couplets + 2 refrains + 1 pont ≈ 2 min 40 – 3 min 20.
  Au-delà, Suno V5.5 commence à répéter des motifs.
- **Le refrain doit être identique à l'écrit** entre les occurrences : c'est ce
  qui déclenche la mémoire mélodique du modèle. Les variations passent par les
  ad-libs, pas par le texte.


---

## L'indice commercial : le ratio hook / couplets

Ce qui rend un morceau « commercial » n'est pas son sujet, c'est la **part de
caractères occupée par le refrain** face aux couplets. Mesuré sur le catalogue :

| Morceau | Registre | Hook | Couplets | Ratio |
|---|---|---|---|---|
| `chacun-son-tour.md` | posse cut, trois MC | 1516 | 2342 | **0,65** |
| `le-prix.md` | rap conscient | 1844 | 2009 | **0,92** |
| `trois-portes.md` | récit | 2253 | 1714 | **1,31** |
| `doucement.md` | groove chaud | 2515 | 1541 | **1,63** |
| `chaleur.md` | club commercial | 2676 | 950 | **2,82** |

**Comment s'en servir.** Le ratio se décide au moment du brief, pas à la
relecture :

- **Sous 0,8** — format collectif ou récit long : trois couplets pour un seul
  refrain. Le hook n'est plus l'argument du morceau, c'est sa respiration.
- **Autour de 1** — le texte porte le morceau. Couplets de seize mesures,
  refrain de quatre lignes, deux occurrences plus une finale. Registre
  conscient, récit, morceau d'album.
- **Autour de 1,5** — équilibre. Le refrain se retient, les couplets tiennent
  encore un propos. La plupart des morceaux du dossier.
- **Au-delà de 2,5** — club et radio. Couplets de huit à dix lignes, refrain de
  quatre lignes répété trois fois, post-refrain répété quatre fois ou plus. Le
  texte n'a pas besoin d'être pauvre : il doit être **court**.

Corollaire utile : un morceau club qui déborde des 5000 caractères est presque
toujours un morceau dont les couplets sont trop longs pour son registre. Avant
de couper dans les balises, vérifier le ratio — s'il est sous 2, le problème
n'est pas la mise en forme, c'est la structure.

### Limite de la mesure

**Au-delà d'environ 4, le ratio sature et ne dit plus rien.** Sur
`plus-fort.md`, il sort à 15,8 — non parce que le refrain est énorme, mais
parce que les couplets ont presque disparu : **134 caractères au total**, deux
blocs de quatre lignes scandées au vocoder. Une division par un nombre proche
de zéro produit un grand nombre, pas une information.

Passé ce seuil, la grandeur utile est le **volume absolu de couplet** :

| Volume de couplet | Ce que c'est |
|---|---|
| 1500 à 2000 caractères | Le texte porte le morceau |
| 900 à 1500 | Registre club, couplets courts mais écrits |
| Moins de 300 | Le couplet n'est plus un couplet : c'est un interlude scandé |

Sous 300 caractères, on n'écrit plus des couplets, on écrit des **slogans entre
deux drops** — c'est un choix légitime pour l'électro dure, et il faut l'assumer
comme tel plutôt que de croire qu'on a écrit un morceau très efficace.
