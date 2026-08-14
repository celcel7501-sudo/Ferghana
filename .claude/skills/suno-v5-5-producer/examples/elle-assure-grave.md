# « Elle Assure, Grave » — duo rap / R&B old school

Texte **fourni par le client** (Prestige Old School — DJ Rim'K × Jalane). Les
mots sont conservés **au caractère près** ; le travail porte sur la couche de
direction, l'architecture des voix et le prompt de style. Même méthode que
`l-architecte-du-groove.md` et `fractures-ii.md`.

**Conforme aux limites Suno** : style **912 / 1000**, paroles **3842 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **2,89** — régime club et radio.

---

## 🧪 ANALYSE DU MIX

**Le duo n'est pas un thème, c'est une contrainte d'arrangement.** Deux leads
veulent le même milieu de spectre. `il-est-a-moi.md` réglait le problème par le
duel — deux voix qui se coupent la parole, tout le reste vidé. Ici on règle par
la **répartition par section** : l'homme tient les couplets et le pont, la femme
tient les pré-refrains, et elles ne se retrouvent qu'au refrain. Personne ne se
marche dessus, donc l'instrumentation peut rester riche : boucle soul, Rhodes,
cordes chaudes, cuivres.

**93 BPM parce que le refrain est un cri de salle.** « Elle assure, grave ! »
n'est pas une phrase chantée, c'est une phrase scandée. En dessous de 90 elle
traîne ; au-dessus de 100 la salle n'a plus le temps de renvoyer la réponse. À
93, le « Grave ! » du groupe tombe pile sur le contretemps qui suit — et la
réponse tient en **deux syllabes**, ce que n'importe quelle pièce peut hurler
sans répéter.

**La boucle soul est le seul élément persistant.** Déclarée deux fois
(`Persistent chopped soul vocal sample loop throughout` dans le style,
`(Instruction: ...)` en tête des paroles) : c'est ce qui empêche Suno de
l'abandonner après le premier refrain. Un seul persistant par morceau — la
basse Moog et les cordes ont le droit de s'absenter, pas elle.

**Le pont change d'adresse, et la production le dit avant le texte.** Les deux
couplets sont à la troisième personne (« Elle murmure », « Ils cassent »). Le
pont bascule à la deuxième (« À mon tour de te le dire »). On coupe la batterie,
on ne garde que les claps et le Rhodes : l'auditeur entend le rapprochement une
mesure avant de le comprendre. Les quatre dernières lignes reviennent à deux
voix à l'unisson, batterie qui remonte — la promesse est signée par les deux.

**Cohérence des exclusions.** `no low-quality recording` est **retiré** du bloc
standard : le style demande `vinyl crackle`, `warm tape saturation` et `dusty
sampler grit`. Exclure ce qu'on réclame par ailleurs, c'est demander au modèle
d'arbitrer — et il arbitre mal.

---

## 🎛️ V5.5 STYLE PROMPT — 912 / 1000 caractères

```
French old-school rap and R&B duet banger, warm soul-sampled boom bap. 93 BPM swung MPC-style drums, hard backbeat snare, layered claps and snaps, dusty kick, ghost rimshots. Persistent chopped soul vocal sample loop throughout. Round analog Moog-style bassline with portamento glides, filtered soul loop, Rhodes chords, warm string counter-melody, brass stabs. Male tenor rap-singing, nonchalant poetic urban delivery, alternating with a female R&B lead, lush stacked harmonies, gang vocals chanting the hook, call-and-response backing vocals. Ultra-wide stereo field, panoramic vocal layering, warm tape saturation, dusty sampler grit. Mixtape scratch drops, transformer cuts, backspin rewind. Polished old-school master, punchy compression, tight round low end, club loudness. Exclude: no mumble rap, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM or trap, avoid over-saturated bass.
```

---

## 📝 SCRIPT & PAROLES — 3842 / 5000 caractères

```
[Intro: Turntablism, vinyl crackle, soul loop, transformer cuts, claps enter]
(Instruction: Persistent chopped soul vocal sample loop throughout)

[Chorus: Male and female leads trading lines, room answering, claps, no bass]
(Call: Elle assure, grave !) Response: [Panoramic Group Vocals: Grave !]
(Call: Il assure, grave !) Response: [Panoramic Group Vocals: Grave !]
En duo, ça tient, ça lâche pas
(Call: Elle assure, grave !) Response: [Panoramic Group Vocals: Grave !]
(Call: Il assure, grave !) Response: [Panoramic Group Vocals: Grave !]
Quand ça chauffe, on reste là

[Verse 1: Male lead, warm nonchalant rap-singing, close-mic, drums half-open]
Elle murmure un secret, il comprend à demi-mot,
Leurs mains se cherchent, un langage sans un son.
Pas de grands gestes, juste un regard qui en dit long,
Deux cœurs qui battent, le même horizon.
Elle s'appuie sur lui, il est son point d'ancrage,
Quand l'un faiblit, l'autre trouve le courage.
J'ai vu leur monde, un refuge bien à eux,
Deux âmes entrelacées, c'est bien plus que deux.

[Pre-Chorus: Female lead takes over, strings rising, snare roll, harmonies]
Quand ils arrivent, tout le décor se plie
Plus qu'une présence, ils remplissent la nuit
Ça monte, ça mord, ça fait lever la rue
Et nous on reste là, même si on perd des plumes

[Chorus: Explosive hook, both leads trading, gang vocals wide, brass stabs]
(Call: Elle assure, grave !) Response: [Panoramic Group Vocals: Grave !]
(Call: Il assure, grave !) Response: [Panoramic Group Vocals: Grave !]
En duo, ça tient, ça lâche pas
(Call: Elle assure, grave !) Response: [Panoramic Group Vocals: Grave !]
(Call: Il assure, grave !) Response: [Panoramic Group Vocals: Grave !]
Quand ça chauffe, on reste là

[Verse 2: Male lead, tighter faster flow, drums stripped to kick and claps]
Ils cassent les vieux scénarios
Refusent les rôles, les barreaux
Combattifs, lucides, sans se plier
Tracent leur chemin, sans s'excuser
Goûtent l'égalité, prennent leur place
S'assument seuls, avec audace
Mènent leurs projets, avancent, existent

[Pre-Chorus: Female lead, claps doubled, strings higher, harmonies stacking]
Quand ils parlent, faut écouter d'près
Ça casse les codes, ça pose les faits
Pas là pour plaire, pas là pour faire semblant
Ils prennent la place, calmement

[Chorus: Same hook, harmonies wider, ad-libs hard panned, full drums]
(Call: Elle assure, grave !) Response: [Panoramic Group Vocals: Grave !]
(Call: Il assure, grave !) Response: [Panoramic Group Vocals: Grave !]
En duo, ça tient, ça lâche pas
(Call: Elle assure, grave !) Response: [Panoramic Group Vocals: Grave !]
(Call: Il assure, grave !) Response: [Panoramic Group Vocals: Grave !]
Quand ça chauffe, on reste là

[Bridge: Beat switch, drums to claps only, male lead alone, Rhodes and strings]
À mon tour de te le dire
Toi et moi, ça sait tenir
Dans tes bras j'ai su grandir
Avec toi, j'apprends à vivre
Choisir le bon pour nous
Quand le reste nous pousse à bout
Simplement rester debout
À deux, c'est déjà beaucoup
[Both voices in unison, close two-part harmony, drums returning underneath]
T'es pas parfaite, moi non plus
Mais ensemble on tombe jamais dessus
C'est ça l'amour, c'est ça le vrai
Prestige Old School — je te le promets

[DMC Routine: crab scratches, transformer cuts, backspin into the last chorus]

[Final Chorus: All at once, gospel-style stacking, 3D vocal wall, brass full]
(Call: Elle assure, grave !) Response: [Panoramic Group Vocals: Grave !]
(Call: Il assure, grave !) Response: [Panoramic Group Vocals: Grave !]
En duo, ça tient, ça lâche pas
(Call: Elle assure, grave !) Response: [Panoramic Group Vocals: Grave !]
(Call: Il assure, grave !) Response: [Panoramic Group Vocals: Grave !]
Quand ça chauffe, on reste là

[Outro: Soul loop alone, filter closing, spoken DJ drop, scratch, tape stop]
DJ Rim'K... Jalane... Prestige Old School
```

---

## 🎹 NOTES DE STUDIO

**BPM — 93, swing MPC.** Ne pas descendre sous 90 : le « Grave ! » perd son
mordant et le morceau vire au mid-tempo mélancolique. Ne pas dépasser 100 : la
réponse de groupe n'a plus la place de tomber entre deux temps. Le pont garde le
même tempo — seule la batterie change (claps seuls), ce qui double l'intimité
sans casser la grille.

**Tonalité — Fa mineur.** Registre partagé confortable : le ténor masculin y
rappe-chante sans forcer, l'alto féminin y monte au pré-refrain sans passer en
voix de tête. Les cordes tiennent le contre-chant une tierce au-dessus de la
boucle soul, jamais en dessous — sinon elles entrent en conflit avec la basse
Moog.

**Répartition des voix — la règle du morceau.** Homme : couplets 1 et 2, pont.
Femme : les deux pré-refrains. Les deux : refrains et quatre dernières lignes du
pont. C'est ce découpage qui rend le duo lisible à l'oreille — chaque section
appartient à quelqu'un, et le refrain est le seul endroit partagé.

**Placement stéréo.** Voix masculine légèrement à gauche (≈ 25 %), voix féminine
à droite. Toutes deux au centre sur les refrains, avec les gang vocals ouverts à
100 % de chaque côté. Le « Grave ! » du groupe doit être **plus large que les
leads** : c'est ce qui fait entendre une salle plutôt qu'un chœur de studio.

**Delivery.** Couplet 1 : nonchalant, proche du micro, presque parlé — c'est le
récit d'un observateur. Couplet 2 : le flow se resserre, les lignes sont plus
courtes, la batterie tombe à kick + claps pour laisser la place au débit. Pont :
posé, sans effet, aucune double — la déclaration ne supporte pas l'ornement.

**Le refrain est identique à l'écrit** aux quatre passages. Toute la variation
passe par les balises : `claps, no bass` → `gang vocals wide, brass stabs` →
`ad-libs hard panned, full drums` → `3D vocal wall, brass full`. C'est la
mémoire mélodique du modèle qu'on protège.

**Ratio hook / couplets — 2,89.** Quatre refrains à réponse de groupe contre
629 caractères de couplet réel : le morceau est structurellement un club/radio,
au-dessus de `chaleur.md` (2,82). Assumé — le texte fourni est court et scandé,
on ne le rallonge pas pour faire baisser un chiffre.

**Leviers de re-génération.** Style à 88 caractères de marge, paroles à 1158.
- Boucle soul pas assez présente → `chopped soul vocal chops on the offbeat`
  (+41), en retirant `brass stabs` (−13).
- Voix féminine trop discrète → `powerful female alto R&B lead` (+30).
- Chant de salle trop mince → ajouter dans les paroles un
  `[Post-Chorus: whole room, claps and snaps only, Grave doubled]` avec deux
  lignes de réponse (≈ +210) — la marge de 1158 l'absorbe sans discussion.
- Trop lisse pour du old school → remplacer `swung MPC-style drums` par
  `hard-hitting MPC drums, swung` (+7).
- Pont pas assez nu → `drums fully muted on the bridge` (+31).
