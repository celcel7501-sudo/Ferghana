# « Coupe Nette » — boom bap new-yorkais, refrain scratché, 100 BPM

Premier morceau du dossier dont le **refrain n'a pas de voix** : ni chanté, ni
rappé, ni scandé. Le hook est une routine de platine — des phrases coupées,
prises dans les couplets du morceau lui-même.

**Conforme aux limites Suno** : style **910 / 1000**, paroles **2660 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **0,40** — le plus bas du dossier, et c'est une
définition, pas un accident.

---

## 🧪 ANALYSE DU MIX

**Le refrain est une routine, pas une mélodie.** Sur les quarante-cinq entrées
précédentes, le hook était toujours porté par une voix : chantée, rappée,
scandée à l'unisson, hachée en chops. Ici il est **joué à la platine**. Quatre
fragments coupés, répétés à l'identique aux trois passages. C'est l'objet le
plus éloigné du réflexe par défaut du modèle : sans instruction contraire, Suno
invente un refrain chanté, parce qu'un refrain « doit » être chanté.

**Trois dispositifs pour l'en empêcher, et il faut les trois.**

1. **La notation en bégaiement** : `Cou-cou-coupe nette`. Les tirets et la
   syllabe répétée disent au modèle qu'il s'agit d'un geste de main sur un
   disque, pas d'une ligne mélodique. Même principe que les chops syllabiques de
   `jusqu-au-jour.md`, appliqué cette fois à un refrain entier.
2. **Une didascalie par ligne** : `(scratché)` en tête de chaque fragment. La
   balise de section ne suffit pas — sur un bloc de quatre lignes, Suno
   n'applique la directive qu'à la première.
3. **`no melodic hook` dans les exclusions.** C'est l'exclusion la plus utile du
   morceau : elle bloque le réflexe au niveau du style, pas seulement au niveau
   de la section.

**Les phrases scratchées viennent des couplets.** Sur un disque de cette école,
elles sont prélevées sur d'autres disques. Ici elles sont prises dans le texte du
morceau : « coupe nette », « pas de bavure », « on garde le meilleur »
apparaissent dans les couplets 1 et 2 **avant** d'être coupées au refrain.
L'auditeur les a déjà entendues, donc la coupe s'entend comme une citation et pas
comme un bruit. C'est la généralisation d'une règle posée sur `l-elite.md` : le
mot gratté doit venir du morceau.

**Trois ou quatre éléments, et c'est écrit en toutes lettres.**
`no chord progression, no pads, no strings, no brass section, three or four
elements only`. Tout ce que le dossier a passé quarante-cinq morceaux à empiler
— cordes, cuivres, harmonies, chœurs — est ici explicitement interdit. Une
boucle de deux notes, une caisse claire, un kick, une basse à une note. La
discipline **est** le style : sur cette esthétique, chaque élément ajouté enlève
de la place au rappeur et de la force au beat.

**La caisse claire sans réverbération.** `very forward cracking snare with no
reverb` : tous les autres boom bap du dossier utilisaient une plaque ou une
pièce. Celui-ci refuse les deux. Une caisse claire sèche, forte, devant le mix —
c'est ce qui fait la violence du beat, pas le volume général.

**Le pont enlève la batterie et ne met rien à la place.** Quatre mesures de
boucle de deux notes et de crépitement. Sur un morceau déjà réduit à quatre
éléments, la seule rupture disponible est d'en retirer un — et c'est le plus
important.

---

## 🎛️ V5.5 STYLE PROMPT — 910 / 1000 caractères

```
Hard New York style boom bap, French, 100 BPM. Dry SP-1200 style drums, very forward cracking snare with no reverb, heavy dusty kick, sparse hats, straight no swing. Persistent two-note filtered jazz stab loop throughout. Chopped dusty sample, simple one-note upright bass, no chord progression, no pads, no strings, no brass section, three or four elements only. The hook is a turntablist scratch routine: cut vocal phrases only, no sung hook, no rapped chorus, phrases chopped and stuttered on the beat. Male baritone, dense internal rhyme delivery, hard technical French flow, crisp diction, dry close-mic vocal, no ad-libs. Ultra-wide stereo field on the scratches, dry centred vocal and drums, heavy vinyl crackle. Raw dusty master, punchy compression, tight low end, no gloss. Exclude: no singing, no melodic hook, no trap drums, no generic EDM, avoid messy mix, no audio artifacts, no cluttered low end.
```

---

## 📝 SCRIPT & PAROLES — 2660 / 5000 caractères

```
[Intro: Two-note stab loop and vinyl crackle, four bars, then drums enter dry]
(Instruction: Persistent two-note filtered jazz stab loop throughout)
(Instruction: The hook is a scratch routine, never sung, never rapped)

[Verse 1: Baritone, dense internal rhymes, dry close-mic, drums and stab only]
J'écris comme on monte un mur : une ligne, un niveau, on vérifie,
Pas de plâtre sur les fissures, pas de trucage dans le fond.
Y'a des gars qui remplissent seize mesures avec du vide,
Moi j'enlève tout ce qui sert à rien, et ce qui reste tient.
Coupe nette, pas de bavure, j'ai appris ça d'un menuisier,
Il disait qu'une belle pièce, c'est celle où on voit pas la colle.
J'ai passé l'âge de compter les points, je compte les heures,
Et j'ai que ça à poser sur la table — les heures, pas les mots.

[Hook: Scratch routine only, cut phrases, no sung line, no rapped line]
(scratché) Cou-cou-coupe nette
(scratché) Pas de ba-ba-bavure
(scratché) On garde... on garde le meilleur
(scratché) Cou-coupe nette

[Verse 2: Same baritone, flow tightening, bass forward, snare hitting harder]
On me dit que ça se vend plus, ce que je fais, j'ai entendu,
Le vendeur du magasin de disques me l'a dit en quatre-vingt-dix-neuf.
Il a fermé, moi je suis là, on va pas en faire un débat,
Y'a des choses qui durent pas parce qu'elles étaient pas faites pour.
Je garde le meilleur du vieux et je jette le reste sans regret,
La nostalgie c'est un piège, l'exigence c'est un métier.
Deux platines, un sampler, un carnet, une pièce sans fenêtre,
Et de quoi tenir jusqu'à ce que la boucle sonne juste.

[Hook: Same routine, cuts doubled, phrases hard panned, crackle louder]
(scratché) Cou-cou-coupe nette
(scratché) Pas de ba-ba-bavure
(scratché) On garde... on garde le meilleur
(scratché) Cou-coupe nette

[Bridge: Drums fully out, two-note stab alone, crackle, four bars of nothing else]

[DMC Routine: 8 bars, baby scratch, transformer, crab, backspin, drums return]

[Verse 3: Voice lower and slower, drums stripped to kick and snare only]
Le beat, c'est une pièce vide où on rentre des meubles,
Trop de meubles et personne peut s'asseoir dedans.
Deux notes, une caisse claire, une basse et un carnet,
Si ça tient avec ça, ça tiendra avec le reste.
Et si un jour ça tient plus, je démonte et je recommence,
Parce que c'est le montage le métier, pas le meuble.

[Hook: Full routine, cuts at maximum, widest field, snare at its loudest]
(scratché) Cou-cou-coupe nette
(scratché) Pas de ba-ba-bavure
(scratché) On garde... on garde le meilleur
(scratché) Cou-coupe nette

[Outro: Drums stop dead, two-note stab and crackle, one last cut, hard stop]
(scratché, seul) Cou-coupe nette
```

---

## 🎹 NOTES DE STUDIO

**BPM — 100, droit, sans swing.** `straight no swing` est explicite : sur cette
école, le groove vient du **placement de la caisse claire** dans la boucle, pas
d'un décalage de grille. Ne pas descendre sous 94 — le beat perdrait son
tranchant ; ne pas monter au-dessus de 104, le rappeur n'aurait plus la place de
poser ses rimes internes.

**Tonalité — Fa mineur, et deux notes.** La boucle ne joue **que deux notes**,
filtrées, prises dans un échantillon poussiéreux. Pas d'accord, pas de
progression, pas de résolution. C'est volontairement insuffisant sur le papier :
c'est la caisse claire qui fait la musique, la boucle ne fait que dater et
colorer.

**Delivery.** Baryton, sec, très proche du micro, aucune double, aucun ad-lib.
Rimes internes denses, articulation nette, **jamais crié** — la puissance vient
de la caisse claire, pas de la voix. Le couplet 3 est plus court et plus bas :
c'est la conclusion, pas un troisième round.

**Placement stéréo — le contraste du morceau.** Voix, kick, caisse claire et
basse **strictement au centre, secs, sans réverbération**. Les scratches, eux,
sont très larges et en ping-pong. Il n'y a que deux positions dans ce mix : le
centre et les bords. Cette absence de milieu est ce qui donne au beat sa
dureté — un mix spatialement pauvre, exactement comme il est instrumentalement
pauvre.

**Le refrain est identique à l'écrit** aux trois passages, au caractère près.
Variation par les balises seules : `cut phrases` → `cuts doubled, phrases hard
panned` → `cuts at maximum, widest field`.

**Ratio hook / couplets — 0,40.** Le plus bas du dossier, sous
`ne-raccroche-pas.md` (0,54). Quatre fragments scratchés de 150 caractères
contre 1543 caractères de couplet : c'est la définition même du registre. Sur
cette esthétique, un ratio au-dessus de 0,8 signifierait qu'on a écrit un
refrain — donc qu'on a raté le morceau.

**Leviers de re-génération.** Style à 90 caractères de marge, paroles à 2340.
- Suno chante le refrain → renforcer : `hook is turntable cuts only, zero
  singing` (+43), et vérifier que `(scratché)` est bien sur **chaque** ligne.
- Caisse claire trop douce → `loud dry snare, no reverb, right in front` (+43).
- Beat trop chargé → retirer `chopped dusty sample` (−22) : quatre éléments,
  jamais cinq.
- Pas assez poussiéreux → `SP-1200 crunch, 12-bit sampler grit` (+37).
- Scratches trop discrets → `turntable cuts loud and wide` (+30).
