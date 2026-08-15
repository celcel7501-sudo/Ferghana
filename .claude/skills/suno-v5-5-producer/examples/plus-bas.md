# « Plus Bas » — shatta antillais, 105 BPM

Premier morceau caribéen du dossier. Riddim shatta dur, sirènes, tanbou et ka,
et une structure empruntée au sound system : le **pull up** — le selecta arrête
tout et relance le morceau.

**Conforme aux limites Suno** : style **908 / 1000**, paroles **4143 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **2,23** — dix sections de hook sur seize.

---

## 🧪 ANALYSE DU MIX

**Un manque du dossier : rien d'antillais.** Douze morceaux club et pas une
seule production caribéenne, alors que c'est une part centrale de la musique de
club francophone. Le shatta n'est pas du dembow ralenti : `chaleur.md` tourne à
96 BPM sur le motif reggaeton boum-tchi-boum-tchik ; ici on est à 105, avec un
**kick sur le un et le trois**, des roulements de caisse claire rapides et une
basse synthétique désaccordée. Deux mondes différents, deux publics différents.

**Le pull up est le vrai climax, et il est fait de silence.** C'est le geste de
sound system : au moment où la salle est au maximum, le selecta **coupe tout**,
laisse une sirène, rembobine, et relance le riddim plus dur. Aucun autre morceau
du dossier n'a de climax fait d'**arrêt**. Les drops ajoutent, le sebene
accélère, le pull up **retire** — et le refrain qui repart derrière est le même
texte, joué une troisième fois, mais tout le monde l'attend maintenant. Balise
ajoutée au catalogue : `references/structure-tags.md`.

**Le riddim doit être sur-déclaré.** `shatta` seul ne suffit pas : Suno ramène
du dancehall générique ou du reggaeton. Il faut décrire le motif —
`kick on one and three`, `rapid snare rolls and fills`, `heavy shatta bounce`,
`syncopated kick pattern`, `bubbling percussion loop`. C'est 180 caractères
dépensés sur une seule couche, et c'est le meilleur investissement du prompt :
sur un genre que le modèle connaît mal, la précision rythmique vaut plus que
n'importe quel tag de texture.

**« Plus bas » est une instruction, pas une phrase.** Le hook le plus efficace
en club n'est pas une image, c'est un **ordre exécutable** — la salle peut
l'appliquer immédiatement avec son corps. Deux syllabes, tombant tous les deux
temps à 105 BPM : la place est large, la réponse est nette. Comparer avec
`la-machine.md`, où la réponse de trois syllabes exigeait une demi-mesure
entière.

**Le pont retire la basse synthétique et garde les mains.** Tanbou et ka seuls,
voix nues, la salle qui compte. Sur un morceau dont toute la puissance vient
d'une basse électronique, la couper et laisser des **peaux frappées à la main**
est à la fois la rupture la plus forte et le rappel d'où vient la musique. Puis
sirène, une mesure de silence, et le riddim revient plein.

**Exclusion corrigée.** `avoid over-saturated bass` remplacé par
`no cluttered low end` : le morceau demande une basse désaccordée agressive et
des chutes de sub. Même logique que sur `marbre.md` et `sang-froid.md` —
la règle est désormais systématique, pas ponctuelle.

---

## 🎛️ V5.5 STYLE PROMPT — 908 / 1000 caractères

```
Hard French Caribbean shatta club banger, 105 BPM. Aggressive shatta riddim, kick on one and three, rapid snare rolls and fills, tight rim clicks, fast shaker, tanbou and ka hand-drum accents, layered claps. Heavy shatta bounce, syncopated kick pattern, bubbling percussion loop. Persistent detuned synth bass riff throughout. Sub bass drops, siren stabs, air-horn, marimba melody, bright synth lead, reverse crashes. Male lead, chanted melodic delivery, crisp diction, shouted selecta calls, pitched-down drops, panoramic group vocal responses, stacked harmonies on the hook, whooping ad-libs. Ultra-wide stereo field, panoramic vocal layering, sound-system energy, huge room. Polished club master, punchy compression, deep tight low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM or trap, no cluttered low end.
```

---

## 📝 SCRIPT & PAROLES — 4143 / 5000 caractères

```
[Intro: Siren stab, bass riff alone, tanbou entering, spoken selecta, no drums]
(Instruction: Persistent detuned synth bass riff throughout)
(parlé, rapide, voix de selecta)
Vingt-deux heures. La salle est déjà pleine.
Prépare les genoux. On descend.

[Hook Teaser: Two lines, lead and crowd, riddim drops in, air-horn]
(Call: Descends !) Response: [Panoramic Group Vocals: Plus bas !]
(Call: Encore !) Response: [Panoramic Group Vocals: Plus bas !]

[Verse 1: Male lead, chanted melodic delivery, bass and shaker only, no lead synth]
Vingt-deux heures, la sono est déjà trop forte pour le quartier,
Le voisin a fermé ses volets, il connaît le programme.
Y'a le punch dans la bouteille qui a plus d'étiquette,
Celle qu'on te sert en te disant vas-y doucement.
La piste a commencé à bouger avant la première note,
On avait déjà le rythme dans les jambes en arrivant.
Y'a ma tante qui juge les tenues depuis l'entrée,
Dans vingt minutes elle sera la première à descendre.

[Pre-Chorus: Snare roll accelerating, siren rising, claps stacking, harmonies]
La basse a trouvé le mur, le mur a rien dit,
Les genoux savent quoi faire avant la tête.
Plus personne debout dans deux secondes,
Trois, deux, un !

[Chorus: Explosive hook, crowd answering wide, full riddim, air-horn, sub drop]
(Call: Descends !) Response: [Panoramic Group Vocals: Plus bas !]
(Call: Encore !) Response: [Panoramic Group Vocals: Plus bas !]
Le sol est à nous, personne se relève,
Tant que la basse tape, on descend plus bas.

[Post-Chorus: Group unison, bass riff and claps only, siren, snare roll]
(Plus bas ! Plus bas !)
(Plus bas ! Plus bas !)

[Verse 2: Same lead, faster and freer, tanbou forward, marimba answering]
Une heure, la buée sur les murs, on voit plus le plafond,
Le DJ a lâché le riddim que tout le monde attendait.
Y'a plus de conversation, y'a que des instructions,
Et tout le monde obéit, c'est la seule fois de l'année.
Le petit cousin qui filme va rien comprendre demain,
Sa vidéo montrera jamais ce que ça fait dans le dos.
Le vigile a arrêté de compter les entrées à minuit,
Il a compris que ce soir c'est la salle qui décide.

[Pre-Chorus: Siren higher, claps doubled, snare roll longer, harmonies stacking]
La basse a trouvé le mur, le mur a rien dit,
Les genoux savent quoi faire avant la tête.
Plus personne debout dans deux secondes,
Trois, deux, un !

[Chorus: Same hook, harmonies wider, ad-libs hard panned, riddim maximum]
(Call: Descends !) Response: [Panoramic Group Vocals: Plus bas !]
(Call: Encore !) Response: [Panoramic Group Vocals: Plus bas !]
Le sol est à nous, personne se relève,
Tant que la basse tape, on descend plus bas.

[Pull Up: Everything stops dead, siren alone, tape rewind, crowd shouting]
(la salle hurle, plus un instrument)
Non non non ! Remets-la !
(rewind, puis le riddim repart plus dur)

[Chorus: Restarted harder, whole room, sub drop, air-horn, riddim doubled]
(Call: Descends !) Response: [Panoramic Group Vocals: Plus bas !]
(Call: Encore !) Response: [Panoramic Group Vocals: Plus bas !]
Le sol est à nous, personne se relève,
Tant que la basse tape, on descend plus bas.

[Bridge: Beat switch, synth bass cut, tanbou and ka hand drums only, voices bare]
(percussions à mains nues, la salle compte)
Un, deux, trois, quatre...
(voix nue, harmonies empilées, un seul tambour)
On nous a jamais donné de piste,
alors on danse là où on tient debout.
(la basse revient, la sirène monte)
Et on redescend ! Encore !
[Silence: one bar, one siren stab, riddim returns at full]

[Final Chorus: All at once, tenor up a tone, 3D vocal wall, sub at maximum]
(Call: Descends !) Response: [Panoramic Group Vocals: Plus bas !]
(Call: Encore !) Response: [Panoramic Group Vocals: Plus bas !]
Le sol est à nous, personne se relève,
Tant que la basse tape, on descend plus bas.

[Post-Chorus: Whole room, double-time claps, air-horn, bass riff on top]
(Plus bas ! Plus bas !)
(Plus bas ! Plus bas !)
(Plus bas ! Plus bas !)
(Plus bas ! Plus bas !)

[Outro: Bass riff alone, siren fading, laughter, spoken selecta, hard stop]
(parlé, essoufflé, en riant)
Cinq heures. Le voisin a rouvert ses volets.
Il regarde. Il tape du pied.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 105.** Le tempo qui sépare le shatta du dembow. Ne pas descendre à 100 :
on retombe dans le reggaeton et le bounce disparaît. Ne pas monter à 110 : les
roulements de caisse claire deviennent illisibles et la salle ne peut plus
descendre en rythme.

**Tonalité — Fa dièse mineur.** La basse désaccordée joue trois notes, pas plus,
et le désaccord (quelques centièmes de ton) est ce qui donne l'épaisseur — pas la
distorsion. La marimba double la basse à deux octaves au-dessus sur les couplets,
et disparaît au refrain pour laisser la place aux voix.

**Delivery — trois registres.** Couplets : chanté-scandé, articulé, joyeux,
posé sur le temps. Refrain : voix pleine et doublée. Appels : **criés, secs, en
voix de selecta**, pas chantés — `shouted selecta calls` est explicite pour ça.
Le pull up est parlé, presque hurlé, sans musique dessous.

**Le hook est un ordre.** « Plus bas » se danse au moment où on l'entend : c'est
ce qui en fait un hook de club et pas une phrase de chanson. Deux syllabes,
appels tous les deux temps à 105 BPM — la place est large, le rendu est net.

**Placement stéréo.** Voix lead au centre. Réponses de foule à 100 % des deux
côtés, plus larges que le lead. Sirènes et air-horns en ping-pong. Tanbou et ka
répartis large sur le pont. Basse et kick au centre, mono, sans exception : sur
ce genre, un grave désaxé détruit le morceau sur une grosse sono.

**Le refrain est identique à l'écrit** aux quatre passages, teaser compris. La
variation passe par les balises : `full riddim, air-horn, sub drop` →
`harmonies wider, ad-libs hard panned` → `restarted harder, whole room` →
`3D vocal wall, sub at maximum`.

**Ratio hook / couplets — 2,23**, avec 1022 caractères de couplet réel : régime
club franc, et pour une fois le chiffre ne sous-estime pas trop le morceau — le
pull up et les post-refrains sont courts en durée comme en caractères.

**Leviers de re-génération.** Style à 92 caractères de marge, paroles à 857.
- Riddim trop générique → `hard shatta drum pattern, rolling snare fills` (+45)
  en retirant `reverse crashes` (−18).
- Basse pas assez épaisse → `wide detuned supersaw bass riff` (+32).
- Pull up pas net → `full stop, one bar of silence before the rewind` (+47).
- Manque de sono → `outdoor sound-system ambience, crowd shouting` (+45).
- Trop propre → `raw live crowd recording under the mix` (+38), et retirer alors
  `no low-quality recording` du bloc d'exclusions (−26) pour rester cohérent.
