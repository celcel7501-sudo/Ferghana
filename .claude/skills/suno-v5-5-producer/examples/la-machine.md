# « La Machine » — Afro-club français rapide, 130 BPM

Banger dansant à rythme rapide construit sur l'énergie ndombolo / coupé-décalé :
guitares sebene entrelacées, percussions roulantes, animateur qui lance la
salle. Premier morceau du dossier dont le point culminant n'est **pas un drop**.

**Conforme aux limites Suno** : style **905 / 1000**, paroles **4716 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **2,16** — neuf sections de hook sur quinze.

---

## 🧪 ANALYSE DU MIX

**Le sebene remplace le drop.** Dans un disque club occidental, le sommet est un
drop : la basse rentre, tout le reste se tait une fraction de seconde. Ici le
sommet est le **sebene** — les deux guitares doublent leur motif, la batterie
passe en double-time, l'animateur lance la salle. C'est un climax fait
d'**accélération et de voix**, pas de grave. C'est ce qui permet à ce morceau
d'être le plus rapide et le plus dansant du dossier sans un seul synthé.

**Deux guitares, et il faut le dire.** `bright clean electric guitar picking in
thirds, second guitar answering` : sans la mention explicite de la seconde
guitare, Suno en joue une et le motif perd son entrelacement — or c'est
exactement l'entrelacement qui fait le groove. Une seule guitare à 130 BPM sonne
comme un exercice ; deux qui se répondent sonnent comme une piste de danse.

**La persistance ne pouvait être que la guitare.** Pas de sample, pas de synthé,
pas de nappe : sur cet arrangement, seuls la guitare et la basse tiennent du
début à la fin, et la basse se coupe au pont. `Persistent interlocking sebene
guitar riff throughout`, déclaré deux fois. C'est le principe déjà vu sur
`jusqu-au-jour.md` — l'élément persistant doit être celui qui survit à toutes
les ruptures du morceau, ce qui exclut presque toujours la basse.

**Correction de ma propre règle de tempo.** Je notais qu'au-dessus de 110 BPM la
réponse de foule doit tomber à un mot de deux syllabes. C'est trop grossier : la
contrainte n'est pas le BPM, c'est le **nombre de temps qu'on accorde à la
réponse**. Ici, à 130 BPM, « La machine ! » (trois syllabes) passe très bien
parce qu'on lui donne une demi-mesure entière. Dans le sebene, où les appels
tombent tous les temps, la réponse redescend à une syllabe (« Hé ! »). Règle
corrigée : **la longueur de la réponse est fixée par les temps alloués ; le BPM
dit seulement combien de temps tiennent dans une seconde.**

**Le pont coupe le kick et la basse, pas la batterie.** Sur
`cage-d-escalier.md` la rupture coupait tout ; sur `ca-repart.md` elle passait
en half-time. À 130 BPM, la rupture la plus efficace est de **retirer le bas du
spectre en gardant le mouvement** : congas et claquements de mains seuls, la
salle compte, les voix restent nues. On perd le poids sans perdre la vitesse —
et le retour du kick en double-time après une mesure de silence fait le reste.

**Tonalité majeure, pour la première fois depuis six morceaux.** Le sebene ne
fonctionne pas en mineur : le motif en tierces veut de la lumière. Après cinq
titres en mineur (`cage-d-escalier`, `sang-froid`, `marbre`, `les-racines`,
partiellement `jusqu-au-jour`), c'est aussi ce qui donne au morceau son identité
immédiate dès la première mesure.

**Bloc d'exclusions standard, cohérent tel quel.** Production propre, moderne,
aucune saturation demandée. Seul ajout : `or trap` accolé à `no generic EDM`,
parce qu'un prompt de rap français attire les hi-hats trap par défaut.

---

## 🎛️ V5.5 STYLE PROMPT — 905 / 1000 caractères

```
Fast French Afro-club banger, ndombolo and coupe-decale energy. 130 BPM, driving four-on-the-floor kick, fast shaker and cowbell, rolling conga and tom patterns, rim-shot snare, double-time hand claps, syncopated foley percussion. Persistent interlocking sebene guitar riff throughout. Bright clean electric guitar picking in thirds, second guitar answering, round analog bassline, brass stabs, marimba accents, whistle. Male tenor lead, fast melodic sung-rap delivery, joyful, crisp diction, shouted animateur calls, panoramic group vocal responses, whooping ad-libs, stacked harmonies on the hook. Ultra-wide stereo field, panoramic vocal layering, live room energy. Polished club master, punchy compression, tight round low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM or trap, avoid over-saturated bass.
```

---

## 📝 SCRIPT & PAROLES — 4716 / 5000 caractères

```
[Intro: Guitar riff alone, shaker entering, spoken animateur, no kick yet]
(Instruction: Persistent interlocking sebene guitar riff throughout)
(parlé, rapide, voix d'animateur)
Salle des fêtes. Dix-neuf heures.
On chauffe doucement... et après on lance la machine.

[Hook Teaser: Two lines, lead and crowd, kick drops in, claps double-time]
(Call: Qu'est-ce qu'on lance ce soir ?) Response: [Panoramic Group Vocals: La machine !]
(Call: Et ça s'arrête quand ?) Response: [Panoramic Group Vocals: Jamais !]

[Verse 1: Male tenor, fast melodic flow, guitar and shaker only, no brass]
La salle des fêtes de Villejean, dix-neuf heures,
Le traiteur a fini, le DJ vient d'arriver.
Tonton a mis le costume qu'il sort deux fois par an,
Il a déjà la cravate autour du front, c'est mauvais signe.
Les tantines sont devant, elles ont pris la meilleure table,
Elles jugeront tout le monde et elles danseront quand même.
Les petits sous les nappes organisent leur république,
Personne les cherche, ils reviendront pour le gâteau.
Le marié transpire déjà et la soirée commence,
Sa mère lui remet le col comme s'il avait six ans.

[Pre-Chorus: Brass rising, congas doubling, claps stacking, harmonies appear]
La première note tombe, plus personne s'assoit,
Les chaises reculent toutes seules contre le mur.
Regarde la piste, elle a déjà avalé trois familles,
Compte avec moi — trois, deux, un !

[Chorus: Explosive hook, crowd answering wide, brass full, guitars doubled]
(Call: Qu'est-ce qu'on lance ce soir ?) Response: [Panoramic Group Vocals: La machine !]
(Call: Et ça s'arrête quand ?) Response: [Panoramic Group Vocals: Jamais !]
Un pied, deux pieds, la machine est lancée,
Personne descend, personne s'assoit.

[Sebene: Guitars doubled and faster, drums double-time, animateur over the top]
(Call: Plus vite !) Response: [Panoramic Group Vocals: Plus vite !]
(Call: Encore !) Response: [Panoramic Group Vocals: Encore !]
(Call: La machine !) Response: [Panoramic Group Vocals: Hé !]

[Verse 2: Same tenor, freer and faster, brass answering, congas forward]
Vingt-trois heures, la playlist a changé de camp,
On est passés du slow au truc qui fait trembler les chaises.
La cousine qui dit jamais rien connaît tous les pas,
Elle a fait deux tours de piste, elle a plié la salle.
Le vigile tape du pied derrière la porte de service,
Il avait dit vingt-trois heures maximum — il compte plus.
Tonton reprend le micro, personne lui a donné,
Il remercie des gens qui sont même pas venus.
Et la grand-mère se lève, tout le monde s'écarte,
Deux secondes de silence — et la salle a explosé.

[Pre-Chorus: Brass higher, claps doubled again, harmonies stacking, riser]
La première note tombe, plus personne s'assoit,
Les chaises reculent toutes seules contre le mur.
Regarde la piste, elle a déjà avalé trois familles,
Compte avec moi — trois, deux, un !

[Chorus: Same hook, harmonies wider, ad-libs hard panned, whistle on top]
(Call: Qu'est-ce qu'on lance ce soir ?) Response: [Panoramic Group Vocals: La machine !]
(Call: Et ça s'arrête quand ?) Response: [Panoramic Group Vocals: Jamais !]
Un pied, deux pieds, la machine est lancée,
Personne descend, personne s'assoit.

[Sebene: Guitars at maximum, toms rolling, whistle, animateur calling the room]
(Call: Plus vite !) Response: [Panoramic Group Vocals: Plus vite !]
(Call: Encore !) Response: [Panoramic Group Vocals: Encore !]
(Call: La machine !) Response: [Panoramic Group Vocals: Hé !]

[Bridge: Beat switch, kick and bass cut, congas and claps only, voices bare]
(percussions et mains seules, la salle compte)
Un, deux, trois, quatre...
(voix nue, harmonies empilées, une seule guitare)
On n'a pas beaucoup de salles à nous,
alors quand on en tient une, on la garde jusqu'au matin.
(la guitare repart, les cuivres montent)
Et la machine repart ! Encore !
[Silence: one bar, one brass stab, drums return double-time]

[Final Chorus: All at once, tenor up a tone, 3D vocal wall, brass maximum]
(Call: Qu'est-ce qu'on lance ce soir ?) Response: [Panoramic Group Vocals: La machine !]
(Call: Et ça s'arrête quand ?) Response: [Panoramic Group Vocals: Jamais !]
Un pied, deux pieds, la machine est lancée,
Personne descend, personne s'assoit.

[Final Sebene: Whole room, guitars and toms flat out, whistle, brass on top]
(Call: Plus vite !) Response: [Panoramic Group Vocals: Plus vite !]
(Call: Encore !) Response: [Panoramic Group Vocals: Encore !]
(Call: La machine !) Response: [Panoramic Group Vocals: Hé !]
(Call: La machine !) Response: [Panoramic Group Vocals: Hé !]

[Outro: Guitar riff alone, shaker fading, laughter, spoken animateur, hard stop]
(parlé, essoufflé, en riant)
Quatre heures du matin. Le vigile danse.
Tonton a toujours le micro. Personne lui reprend.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 130.** Le morceau le plus rapide du dossier. Ne pas descendre sous 126 :
le motif de guitare en tierces perd sa nervosité et le sebene ne se distingue
plus du refrain. Ne pas monter au-dessus de 134 : le couplet a dix lignes, le
chanteur doit encore pouvoir articuler.

**Tonalité — Sol majeur.** Majeur, franchement. Les deux guitares jouent le même
motif à la tierce, la seconde décalée d'une croche — c'est ce décalage, pas la
vitesse, qui donne la sensation de roulement. La basse reste sur les fondamentales
et ne bouge qu'aux changements d'accord : à ce tempo, une basse bavarde bouche
tout.

**Delivery.** Couplets : ténor, débit rapide, articulé, joyeux, légèrement
**devant** le temps — c'est ce qui donne l'impression que le morceau pousse.
Refrain : voix pleine, doublée. Sebene : ce n'est plus du chant, ce sont des
**appels d'animateur** — criés, courts, secs, sans mélodie. Bien séparer les
trois registres à l'enregistrement, sinon tout s'aplatit.

**La longueur des réponses est calibrée par section.** Refrain : trois syllabes
(« La machine ! ») sur une demi-mesure. Sebene : une syllabe (« Hé ! ») quand
les appels tombent tous les temps. Ne pas inverser — une réponse de trois
syllabes dans le sebene mord sur l'appel suivant et la salle décroche.

**Placement stéréo.** Guitare 1 à gauche (≈ 60 %), guitare 2 à droite (≈ 60 %) :
l'entrelacement doit se lire dans l'espace, pas seulement dans le temps. Voix
lead au centre. Réponses de foule ouvertes à 100 % des deux côtés et plus larges
que le lead. Percussions réparties large, kick et basse au centre.

**Le refrain est identique à l'écrit** aux quatre passages (teaser compris), et
le sebene aussi. Variation par les balises seules : `crowd answering wide` →
`ad-libs hard panned, whistle on top` → `3D vocal wall, brass maximum`.

**Ratio hook / couplets — 2,16.** Le chiffre sous-estime encore le morceau, pour
la raison notée sur `jusqu-au-jour.md` : les trois sebene occupent seize mesures
chacun pour environ 200 caractères. En sections : **neuf sur quinze** sont du
hook, du teaser ou du sebene. Régime club assumé, avec 1204 caractères de
couplet réel — le texte n'est pas sacrifié.

**Leviers de re-génération.** Style à 95 caractères de marge, paroles à 284.
- Une seule guitare au lieu de deux → `two interlocking guitars answering each
  other` (+45) en retirant `marimba accents` (−17).
- Sebene pas assez rapide → `double-time sebene section with rolling toms` (+45).
- Animateur trop chanté → `shouted spoken animateur calls, not sung` (+41).
- Manque de salle → `live crowd noise and room ambience` (+35).
- Trop chargé en haut → retirer `whistle` (−9) avant de toucher aux percussions.
