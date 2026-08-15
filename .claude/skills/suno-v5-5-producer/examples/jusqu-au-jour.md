# « Jusqu'au Jour » — banger club commercial en deux clips (Extend)

Deuxième morceau long du dossier après `l-elite.md`, et le premier à utiliser
le workflow Extend pour la raison qui lui va le mieux : **le clip 1 est le
morceau, le clip 2 est la section DJ.**

| Clip | Style | Paroles |
|---|---|---|
| Clip 1 — le corps chanté | 893 / 1000 | 2825 / 5000 |
| Clip 2 — la section club | 912 / 1000 | 2057 / 5000 |

Total paroles : **4882 / 10000**. Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,92** — et ce chiffre ment, voir plus bas.

---

## 🧪 ANALYSE DU MIX

**Pourquoi deux clips, cette fois.** `l-elite.md` scindait un morceau long parce
qu'il ne tenait pas en 5000 caractères. Ici le texte tiendrait largement dans un
seul champ (4882 au total). La scission sert autre chose : **reproduire la
structure réelle d'un disque de club**. Le clip 1 est la version qui passe en
radio — couplet, pré-refrain, refrain, drop, deux fois. Le clip 2 est ce que le
DJ joue à quatre heures du matin : breakdown, montée de seize mesures, drop,
trente-deux mesures instrumentales, dernier couplet, refrain final. Deux
fonctions différentes, deux générations différentes.

**Le point de coupe est le breakdown.** La règle du raccord tient : on ne coupe
jamais au milieu d'un couplet. Sur un morceau club, la rupture la plus attendue
de l'oreille n'est pas un beat switch — c'est le moment où **tout s'arrête** et
où il ne reste que la voix dans la réverbération. Le clip 1 se termine sur
`filter starts closing, drums thinning out` ; le clip 2 ouvre sur
`drums out, filter closed, vocal alone`. Le raccord technique tombe exactement
là où le public attend un vide.

**Le hook est un vocal chop, pas une phrase chantée.** C'est la signature club
contemporaine, et c'est aussi le hook **le moins cher du dossier** :
`(Jus-qu'au-jour... jus-qu'au-jour...)` deux fois, 84 caractères, seize mesures
de disque. Un refrain chanté aurait occupé la même durée pour quatre à cinq fois
plus de caractères. C'est pour ça que le ratio sort à 1,92 alors que le morceau
est un club pur : **la mesure compte du texte, pas du temps**. Note ajoutée à
`references/structure-tags.md`.

**La persistance est le chop lui-même.** `Persistent chopped vocal hook riff
throughout`, déclaré dans les deux styles et en tête des deux champs de paroles.
C'est ce motif — présent sous les couplets, en teaser à l'intro, seul dans le
breakdown — qui fait entendre les deux clips comme un seul disque. Sur un
morceau club, l'élément persistant ne doit **jamais** être la basse : elle
disparaît à chaque breakdown, donc elle ne peut pas porter la continuité.

**126 BPM, house filtrée.** Entre `one-last-song.md` (123) et `plus-fort.md`
(128), sur une esthétique différente des deux : ni anthem euphorique ni house
dure, mais **disco filtrée commerciale** — cordes samplées, basse Moog ronde,
sidechain marqué. Le tempo laisse la place à une topline chantée sans que la
chanteuse ait à courir.

**Bloc d'exclusions standard, tel quel, pour la première fois depuis six
morceaux.** Les derniers titres réclamaient tous du `vinyl crackle`, de la
saturation de bande ou une 808 distordue, ce qui obligeait à recomposer la
liste. Ici la production est propre et moderne : `no low-quality recording`,
`no distorted vocals` et `avoid over-saturated bass` sont tous cohérents avec
ce que le style demande. C'est le seul cas où le bloc s'utilise sans réfléchir.

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 1 (893 / 1000)

```
Commercial French club banger, funky filtered disco house. 126 BPM four-on-the-floor, heavy sidechain pumping on every kick, crisp offbeat hi-hats, layered claps and finger snaps, tambourine, tight percussion loop. Persistent chopped vocal hook riff throughout. Filtered disco-string sample, round analog Moog-style bassline with portamento glides, plucked synth stabs, Rhodes chords, resonant low-pass filter sweeps, white-noise risers. Female lead, bright catchy topline, close-mic verses, explosive anthemic hook, stacked harmonies, panoramic group vocal responses, whooping ad-libs. Ultra-wide stereo field, panoramic vocal layering, glossy modern sheen. Polished radio club master, punchy compression, tight round low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM, avoid over-saturated bass.
```

## 📝 PAROLES — CLIP 1 (2825 / 5000)

```
[Intro: Filtered loop, low-pass closed, chopped vocal teaser, spoken over]
(Instruction: Persistent chopped vocal hook riff throughout)
(parlé, rapide, sourire dans la voix)
Vingt-trois heures cinquante.
On a toute la nuit devant nous. On va la prendre.

[Hook Teaser: Two lines, lead and crowd, filter opening, kick drops in]
(Call: Jusqu'au jour !) Response: [Panoramic Group Vocals: Jusqu'au jour !]
(Call: Jusqu'au jour !) Response: [Panoramic Group Vocals: Jusqu'au jour !]

[Verse 1: Female lead, close-mic, bright topline, filtered loop and claps]
Neuf heures, j'ai posé le badge sur la table,
J'ai éteint le téléphone, j'ai éteint la semaine.
La robe qui traîne depuis mars sort du placard,
Ce soir elle a une date, ce soir elle a un rôle.
On se retrouve au même endroit que d'habitude,
Cinq filles, un ascenseur, personne parle sérieusement.
Y'a un taxi qui klaxonne et qui attendra,
Il sait très bien qu'on est en avance sur rien.

[Pre-Chorus: Filter opening, white-noise riser, snare roll, harmonies stacking]
La basse traverse la porte avant qu'on entre,
J'ai les jambes qui savent déjà quoi faire.
Compte avec moi, y'a plus rien après,
Trois, deux, un —

[Chorus: Explosive anthemic hook, crowd answering wide, full drums, sidechain]
(Call: Jusqu'au jour !) Response: [Panoramic Group Vocals: Jusqu'au jour !]
On rentre pas, on rentre pas,
(Call: Jusqu'au jour !) Response: [Panoramic Group Vocals: Jusqu'au jour !]
Le soleil attendra, il a l'habitude.

[Drop: Chopped vocal hook riff, filter fully open, all drums in, hard sidechain]
(Jus-qu'au-jour... jus-qu'au-jour...)
(Jus-qu'au-jour... jus-qu'au-jour...)

[Verse 2: Same lead, freer phrasing, bass forward, percussion loop doubled]
On m'a dit tu bosses trop pour sortir comme ça,
J'ai dit c'est exactement pour ça que je sors.
Chaque nuit blanche de la semaine a un nom,
Et ce soir je les rembourse toutes d'un coup.
Y'a le mec du bar qui compte les verres et les regards,
Il se trompe sur les deux, c'est pas grave.
J'ai pas besoin qu'on me trouve, j'ai besoin qu'on me suive,
Et la piste sait très bien où elle va.

[Pre-Chorus: Riser higher, claps doubled, filter opening slower, harmonies wide]
La basse traverse la porte avant qu'on entre,
J'ai les jambes qui savent déjà quoi faire.
Compte avec moi, y'a plus rien après,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, ad-libs hard panned, drums maximum]
(Call: Jusqu'au jour !) Response: [Panoramic Group Vocals: Jusqu'au jour !]
On rentre pas, on rentre pas,
(Call: Jusqu'au jour !) Response: [Panoramic Group Vocals: Jusqu'au jour !]
Le soleil attendra, il a l'habitude.

[Drop: Chopped vocal hook riff doubled, percussion loop on top, sidechain hard]
(Jus-qu'au-jour... jus-qu'au-jour...)
(Jus-qu'au-jour... jus-qu'au-jour...)
[Filter starts closing, drums thinning out, end of clip one]
```

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 2 (912 / 1000)

Dérivé du clip 1 : même genre, même BPM, même rythmique, même persistance, même
basse. Seule la phrase d'architecture change.

```
Commercial French club banger, funky filtered disco house, extended club mix section. 126 BPM four-on-the-floor, heavy sidechain pumping on every kick, crisp offbeat hi-hats, layered claps and snaps, tight percussion loop. Persistent chopped vocal hook riff throughout. Opens on a long filtered breakdown, drums out, vocal alone in reverb, then a 16-bar riser into the full drop, then a 32-bar instrumental percussion workout. Filtered disco-string sample, round analog Moog-style bassline with portamento glides, plucked synth stabs, Rhodes chords, resonant low-pass filter sweeps. Female lead, explosive anthemic hook, stacked harmonies, panoramic group vocal responses. Ultra-wide stereo field. Polished radio club master, tight round low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM, avoid over-saturated bass.
```

## 📝 PAROLES — CLIP 2 (2057 / 5000)

```
[Breakdown: Drums out, filter closed, vocal alone in long reverb, room noise]
(Instruction: Persistent chopped vocal hook riff throughout)
(voix seule, réverbération longue, plus de batterie)
Il est quatre heures et personne a bougé.
On est encore là. On sera encore là.

[Build: 16 bars, white-noise riser, snare roll accelerating, filter opening]
(Call: Vous êtes encore là ?) Response: [Panoramic Group Vocals: Encore là !]
(Call: Vous êtes encore là ?) Response: [Panoramic Group Vocals: Encore là !]
Trois, deux, un —

[Drop: Chopped vocal hook riff, everything in at once, hard sidechain, claps]
(Jus-qu'au-jour... jus-qu'au-jour...)
(Jus-qu'au-jour... jus-qu'au-jour...)

[DJ Tool: 32 bars instrumental, filtered loop, percussion workout, no vocals]

[Verse 3: Female lead returns, close-mic, drums stripped to kick and claps]
Le ciel commence à trahir derrière les rideaux,
Personne veut être celui qui le dit à voix haute.
On a les chaussures à la main et les jambes en carton,
Et on redemande encore un titre, un seul.
Le DJ fait semblant d'hésiter, il a déjà la main dessus,
Et la salle sait avant lui ce qu'il va mettre.

[Pre-Chorus: Riser at maximum, claps doubled, filter opening, harmonies wide]
La basse traverse la porte avant qu'on entre,
J'ai les jambes qui savent déjà quoi faire.
Compte avec moi, y'a plus rien après,
Trois, deux, un —

[Final Chorus: All voices, widest field, gospel-style stacking, drums maximum]
(Call: Jusqu'au jour !) Response: [Panoramic Group Vocals: Jusqu'au jour !]
On rentre pas, on rentre pas,
(Call: Jusqu'au jour !) Response: [Panoramic Group Vocals: Jusqu'au jour !]
Le soleil attendra, il a l'habitude.

[Final Drop: Chopped vocal hook riff doubled, whole room, percussion on top]
(Jus-qu'au-jour... jus-qu'au-jour...)
(Jus-qu'au-jour... jus-qu'au-jour...)
(Jus-qu'au-jour... jus-qu'au-jour...)
(Jus-qu'au-jour... jus-qu'au-jour...)

[Outro: Filter closing slowly, kick alone, laughter, spoken, tape stop]
(parlé, essoufflé, en riant)
Il fait jour. On avait dit jusqu'au jour.
Bon... on remet ça samedi.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 126, four-on-the-floor.** Identique sur les deux clips, sans exception :
c'est la première chose que l'oreille vérifie au raccord. Ne pas monter à 128
sur le clip 2 pour « donner de l'énergie » — l'énergie vient de la montée de
seize mesures, pas du tempo.

**Tonalité — La mineur.** La boucle de cordes filtrées tient sur quatre accords,
la basse Moog les relie par glissandos. Le breakdown du clip 2 se joue sur le
**même accord de départ** que l'intro du clip 1 : c'est ce qui donne l'impression
d'un tour complet plutôt que d'une suite.

**Le chop, en pratique.** Le hook vocal haché doit être fabriqué à partir d'une
syllabe du refrain — ici « jour ». Les tirets dans
`(Jus-qu'au-jour... jus-qu'au-jour...)` ne sont pas décoratifs : ils indiquent
au modèle un découpage syllabique, pas une phrase chantée. Sans eux, Suno
chante la ligne au lieu de la hacher.

**Delivery.** Couplets : voix féminine proche du micro, presque parlée-chantée,
peu d'effet — c'est le contraste avec le refrain saturé de réverbération qui
fait la dynamique. Refrain : voix pleine, doublée, réponses de foule ouvertes à
100 % des deux côtés. Breakdown du clip 2 : **une seule voix, sans double**,
longue réverbération, aucune harmonie. C'est le seul moment nu du disque.

**Le refrain est identique à l'écrit** aux trois passages, sur les deux clips.
Variation par les balises seules : `crowd answering wide` → `ad-libs hard
panned` → `widest field, gospel-style stacking`.

**Ratio hook / couplets — 1,92, et il sous-évalue le morceau.** Les quatre
drops occupent seize mesures chacun pour 84 caractères. Compter les **sections**
plutôt que les caractères donne la vraie lecture : sur vingt sections, onze sont
du hook, du drop ou du breakdown. C'est un disque de club. J'ai documenté ce
biais dans `references/structure-tags.md` — il est symétrique de la saturation
constatée sur `plus-fort.md`.

**Marge volontairement large sur les paroles.** 2175 et 2943 caractères libres.
Un morceau club n'a pas besoin de remplir son champ : ce sont les mesures
instrumentales qui font la durée. Ajouter un quatrième couplet ferait baisser
l'efficacité, pas monter la valeur.

**Leviers de re-génération.** Style : 107 de marge (clip 1), 88 (clip 2).
- Chop pas assez découpé → `stuttering chopped vocal riff, gated` (+37).
- Drop pas assez violent → `hard sidechain duck on every kick` (+34).
- Breakdown pas assez nu → `fully dry breakdown, single vocal, no harmony` (+45).
- Couplets trop chantés → `spoken-sung close-mic verses` (+29).
- Raccord audible entre les clips → vérifier d'abord que BPM, persistance et
  ligne de basse sont **identiques mot pour mot** dans les deux styles. C'est la
  cause dans neuf cas sur dix.
