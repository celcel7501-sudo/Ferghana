# « La Clé Sous Le Pot » — plume conteuse, 90 BPM

Premier morceau écrit sous le protocole de plume d'élite
(`references/plume-et-flow.md`). Il en applique les quatre règles et en produit
une cinquième : **comment écrire un silence dans un champ que le modèle remplit
toujours**.

| Champ | Mesure |
|---|---|
| Style seul (bloc dans *Exclude Styles*) | **792 / 1000** — marge 208 |
| Style + bloc recollé (mode repli) | **939 / 1000** — marge 61 |
| Paroles | **4020 / 5000** — marge 980 |

Ratio hook / couplets : **1,16** — fenêtre narrative, entre le conscient (0,92)
et le récit pur (1,31).

---

## 🧪 ANALYSE DU MIX

**La trouvaille du morceau : on n'écrit pas un silence, on écrit qui joue tout
seul.** L'ADN conteur repose sur l'espace entre les phrases — c'est là que la
punchline retombe. Mais Suno **ne laisse jamais un trou** : une ligne vide, une
ligne de tirets, un `(silence)` isolé sont bouchés par le modèle avec ce qu'il a
sous la main, généralement une reprise de batterie.

La sortie est d'en faire une **instruction positive** : assigner la mesure à un
instrument.

```
(la contrebasse seule, deux temps)
```

Trois fois dans le couplet 2, entre les portraits. Le vide devient une consigne
d'orchestration, donc quelque chose que le modèle sait exécuter. Et la moitié de
la manœuvre est **dans le champ de style**, sans quoi il n'y a personne pour
occuper le trou :

```
Persistent upright bass motif throughout, walking and unhurried, carrying every gap between the lines.
```

C'est la même logique que la persistance classique, appliquée au négatif :
l'élément persistant n'est pas là pour tenir le morceau, il est là pour **tenir
les silences**.

**Les rimes riches sont placées, pas comptées.** La règle du dossier dit qu'une
rime riche ne s'entend que si les syllabes qui riment tombent à la même place
dans la mesure. Trois paires portent le morceau, toutes en fin de couplet, sur
le quatrième temps :

| Paire | Ce qu'elle fait |
|---|---|
| `trouvaient pas leur place` / `laissaient jamais leur trace` | Rime riche sur `leur -ace` — quatre phonèmes communs |
| `personne y touchait` / `tout le monde y couchait` | **Une seule consonne d'écart.** L'oreille entend l'identité d'abord, la différence ensuite : c'est le mécanisme de la punchline |
| `boitait` / `raconter` / `compter` | Tercet en `-té` qui ferme le couplet 1 |

Le reste du texte fonctionne à l'assonance interne, en milieu de mesure. Densité
maximale de rimes riches n'est pas l'objectif — **placement** l'est.

**Longueur de vers : variable au couplet, constante au refrain.** Les couplets
alternent vers longs (14 syllabes) et vers courts qui ponctuent —
`Personne l'a jamais prise.`, `Onze ans.`, `Il est vide.` Le refrain, lui, tient
quatre lignes de **8 syllabes exactes**, littérales, sans une image :

```
La clé est sous le pot de fleurs,      8
La porte a jamais eu d'verrou,         8
Personne ici t'a demandé               8
Ni où t'étais, ni avec qui.            8
```

C'est l'arbitrage métaphore / ratio en pratique : **la plume est dans les
couplets, le refrain reste littéral.** Un refrain à images sur un morceau chanté
par une salle n'est jamais compris.

**Trois débits, trois sections, jamais deux tags dans un crochet.**

| Section | Tag de tête | Pourquoi |
|---|---|---|
| Couplet 1 | `Unhurried storytelling delivery` | On installe un lieu ; rien ne presse |
| Couplet 2 | `Deliberate delivery, one line at a time` | Galerie de portraits — chaque nom a besoin de sa mesure |
| Couplet 3 | `Rising intensity, faster across the verse` | Le narrateur se met enfin dans l'histoire |

**Le couplet 3 est le plus court, et c'est structurel.** Six vers contre huit et
dix. Celui qui raconte est celui qui a le moins à dire — il a passé le morceau à
regarder les autres s'asseoir. La brièveté est l'argument.

**Bloc d'exclusion Prestige, pas le standard.** `vinyl crackle` interdit
`no low-quality recording`. `no autotune` est ici **autorisé et nécessaire** :
aucune harmonie empilée sur le lead, seulement des réponses de groupe scandées —
la contradiction documentée dans `references/negative-prompting.md` ne s'applique
pas.

---

## 🎛️ STYLE PROMPT — 792 / 1000 caractères

```
French conscious rap storytelling, warm and jazz-tinged, 90 BPM. Hard-hitting MPC-60 kick and snare, brushed drums under the verses, tight rimshot, no hi-hat rolls, vinyl crackle. Persistent upright bass motif throughout, walking and unhurried, carrying every gap between the lines. Dark melancholic piano loop, muted trumpet answering the vocal, warm Rhodes pad, cinematic minor-key strings on the chorus only. Male lead, deep warm baritone, unhurried spoken-sung storytelling, conversational phrasing with long pauses, close-mic intimate delivery, clear articulated diction, vocal forward and dry in the mix. Chanted group responses on the post-chorus. Ultra-wide stereo field on the instruments, lead centred and dry. Warm analog master, deep round low end, preserved dynamics, never loud.
```

---

## 🚫 BLOC D'EXCLUSION — 136 caractères

À coller dans le champ **Exclude Styles**. En mode repli, l'ajouter en fin de
champ de style précédé de `Exclude: ` — le total monte à 939 / 1000, marge 61.

```
no autotune, no mumble rap, no trap drums, no distorted vocals, no generic EDM, avoid messy mix, no cluttered low end, avoid thin sounds
```

`no low-quality recording` est **absent** : le style demande `vinyl crackle`.
`no autotune` est présent, ce qui n'est possible que parce qu'il n'y a aucune
harmonie empilée sur le lead.

---

## 📝 SCRIPT & PAROLES D'ÉLITE — 4020 / 5000 caractères

```
[Intro: Upright bass alone and vinyl crackle, no drums, spoken low, close-mic]
(Instruction: Persistent upright bass motif throughout)
(parlé, bas, ton de conversation, sans effet)
Rez-de-chaussée, porte à gauche.
La clé, elle a jamais bougé.

[Verse 1: Unhurried storytelling delivery, brushed drums, piano loop, bass]
Rez-de-chaussée, la fenêtre donnait sur les poubelles,
On reconnaissait les gens au bruit de leurs semelles.
Ma mère servait le thé à des types qui trouvaient pas leur place,
Des gars de passage qui laissaient jamais leur trace.
Elle leur gardait la chaise du fond, celle qui boitait,
Le temps qu'ils décident tout seuls s'ils avaient un truc à raconter.
La clé dormait sous le pot depuis que je sais compter.
Personne l'a jamais prise.

[Pre-Chorus: Strings entering, bass climbing, drums opening, energy ramp]
On dit qu'une maison, ça se ferme,
Que dehors c'est dehors, dedans c'est chez toi.
Chez nous y'avait pas de dehors.
Y'avait juste des gens pas encore assis.

[Chorus: Chanted hook, same rhythm on every line, strings, drums full]
La clé est sous le pot de fleurs,
La porte a jamais eu d'verrou,
Personne ici t'a demandé
Ni où t'étais, ni avec qui.

[Post-Chorus: Chanted group responses, rimshot, upright bass, crackle]
(Call: La clé) Response: [Panoramic Group Vocals: Sous le pot]
(Call: La porte) Response: [Panoramic Group Vocals: Jamais fermée]

[Verse 2: Deliberate delivery, one line at a time, drums thin, bass in the gaps]
Y'a eu le grand Momo, celui qui parlait pas,
Il posait sa veste, il buvait son thé, il repartait pas plus tard.
(la contrebasse seule, deux temps)
Y'a eu la voisine du troisième, deux valises et un petit,
Elle est restée onze jours, on a jamais recompté le temps.
(la contrebasse seule, deux temps)
Y'a eu mon oncle, qui passait les soirs où il avait perdu,
Jamais les soirs où il gagnait — vingt ans pour que je comprenne.
(la contrebasse seule, deux temps)
Chez nous, personne y touchait.
Chez nous, tout le monde y couchait.

[Pre-Chorus: Strings higher, bass climbing, snare opening, energy ramp]
On dit qu'une maison, ça se ferme,
Que dehors c'est dehors, dedans c'est chez toi.
Chez nous y'avait pas de dehors.
Y'avait juste des gens pas encore assis.

[Chorus: Same hook, group voices doubling, strings wider, drums full]
La clé est sous le pot de fleurs,
La porte a jamais eu d'verrou,
Personne ici t'a demandé
Ni où t'étais, ni avec qui.

[Post-Chorus: Chanted group responses, rimshot, upright bass, crackle]
(Call: La clé) Response: [Panoramic Group Vocals: Sous le pot]
(Call: La porte) Response: [Panoramic Group Vocals: Jamais fermée]

[Bridge: Drums out, upright bass and muted trumpet only, voice bare, no reverb]
(voix nue, sans double, sans réverbération)
Y'en a un qui est pas revenu.
(la trompette bouchée répond à sa place, quatre temps)
Ma mère a laissé la clé sous le pot quand même.
Onze ans.
[Silence: one bar, upright bass alone, drums return whole]

[Verse 3: Rising intensity, faster across the verse, drums full, strings under]
Aujourd'hui j'ai ma porte à moi, digicode, interphone,
Trois serrures sur un salon où plus jamais personne sonne.
J'ai mis quinze ans à comprendre ce que ma mère faisait là :
Elle nourrissait pas des gens — elle les empêchait de disparaître.
Alors j'ai racheté un pot.
Il est vide. Mais il est devant ma porte.

[Final Chorus: All voices, widest field, strings maximum, drums full]
La clé est sous le pot de fleurs,
La porte a jamais eu d'verrou,
Personne ici t'a demandé
Ni où t'étais, ni avec qui.

[Post-Chorus: Whole room chanting, rimshot doubled, bass forward, crackle]
(Call: La clé) Response: [Panoramic Group Vocals: Sous le pot]
(Call: La porte) Response: [Panoramic Group Vocals: Jamais fermée]
(Call: La clé) Response: [Panoramic Group Vocals: Sous le pot]
(Call: La porte) Response: [Panoramic Group Vocals: Jamais fermée]

[Outro: Drums out, upright bass and crackle, spoken warm, no reverb, hard stop]
(parlé, doux, ton de fin de soirée)
Elle est sous le pot.
Elle y sera demain aussi.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 90.** Le tempo de la parole posée. Assez lent pour qu'un vers de
quatorze syllabes tienne dans une mesure sans se presser, assez soutenu pour que
la caisse claire garde son autorité. Sous 85 le morceau devient une lecture ;
au-dessus de 96 les pauses écrites disparaissent, avalées par la grille.

**Tonalité — Ré mineur.** Boucle de piano sur quatre mesures, contrebasse en
walking sous les couplets. Les cordes **n'entrent qu'au pré-refrain** et ne
jouent que sur le refrain : c'est leur absence pendant les couplets qui fait
qu'on les entend arriver. Trompette bouchée en réponse, jamais en même temps que
la voix — elle parle quand il se tait.

**Delivery — baryton chaud, très près du micro, sec.** Aucune réverbération sur
le lead : la rime riche ne survit pas à une queue de réverbération, les phonèmes
se recouvrent et la richesse devient de la boue. `clear articulated diction` et
`vocal forward and dry in the mix` sont là pour ça, pas pour le confort.

**Les pauses, techniquement.** `(la contrebasse seule, deux temps)` veut dire :
la voix s'arrête, la batterie s'allège, la contrebasse joue deux temps à
découvert, la voix reprend. Ne pas couper la contrebasse — elle est le seul
élément qui traverse tout le morceau, y compris le pont.

**Le pont.** Batterie coupée, contrebasse et trompette bouchée. La trompette
**répond à la place de la voix** pendant quatre temps après « Y'en a un qui est
pas revenu » : la phrase qui manque est jouée, pas dite. Puis une mesure de
silence, contrebasse seule, et la batterie revient entière.

**Placement stéréo.** Voix au centre, sèche, en avant. Piano à gauche, trompette
bouchée à droite. Contrebasse et batterie au centre, mono. Cordes très ouvertes
au refrain seulement — l'élargissement soudain du champ est l'événement du
refrain, autant que les cordes elles-mêmes. Réponses de groupe tout ouvert.

**Le refrain est identique à l'écrit** aux trois passages. Seul le nombre de
voix change : une, puis doublée, puis toute la pièce.

**Ratio hook / couplets — 1,16.** Fenêtre narrative. Trois couplets contre trois
refrains : le texte a la place de raconter, et le refrain revient assez souvent
pour qu'on le retienne. Viser plus bas rendrait le morceau illisible en club ;
viser plus haut couperait les portraits du couplet 2.

**Leviers de re-génération.** 208 caractères de marge avec le champ dédié, 61 en
mode repli.
- Pauses comblées par la batterie → `leave space between the vocal lines, upright bass alone in the gaps` (+66). **Ne rentre qu'avec le champ dédié.**
- Voix trop chantée → `spoken-sung, never fully sung, storytelling tone` (+46).
- Contrebasse trop discrète → `upright bass forward, warm and woody` (+36).
- Cordes présentes dès le couplet → `strings only on the chorus` (+26).
- Batterie trop lourde sous les couplets → `brushed drums, soft under the verses` (+35).
- Manque de grain → `dusty sampler grit` (+18).
