# « Prise Directe » — instru club rap français, 100 BPM

Premier **instrumental** du dossier. Aucun mot chanté ni rappé : le champ de
paroles change entièrement de fonction — il devient une **partition
d'arrangement**, mesure par mesure.

**Conforme aux limites Suno** : style **890 / 1000**, paroles **1018 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Pas de ratio hook/couplets : pas un mot dans le morceau. La grandeur utile est
le **plan de mesures** — 104 mesures, soit 4 min 09 s à 100 BPM.

---

## 🧪 ANALYSE DU MIX

**Le champ de paroles devient une partition.** C'est le retournement du morceau.
Sur les quarante-quatre entrées précédentes, les balises encadraient du texte ;
ici il n'y a que des balises, et chacune porte **un nombre de mesures**. On passe
d'un script à un **plan de montage** : `[Verse Bed 1: 16 bars, drums, 808 and
piano only, no brass, no strings, open]`. Le champ n'a jamais été prévu pour ça,
mais c'est l'endroit du système où l'on peut décrire une chronologie — le champ
de style, lui, décrit un état global sans notion de temps.

**Les comptes de mesures sont une inclinaison, pas une garantie.** Suno les lit
comme des indications de proportion : il respecte assez bien qu'un bloc de 16
soit deux fois plus long qu'un bloc de 8, beaucoup moins bien la durée absolue.
Utile en pratique : additionner le plan avant de générer.

> 104 mesures × 4 temps ÷ 100 BPM × 60 = **249 s, soit 4 min 09 s**.

C'est proche du plafond de génération. **Ce qui dépasse se perd par la fin** —
d'où un outro de quatre mesures qui ne contient rien d'essentiel, et le dernier
hook placé **avant** lui. Même logique que la troncature silencieuse des champs :
on met en queue ce qu'on accepte de perdre.

**Un instru pour rappeur n'est pas un instru à écouter.** C'est la contrainte
fonctionnelle du morceau, et elle est écrite dans le style :
`arrangement leaves space on the verse sections: drums, bass and piano only,
brass and strings reserved for the hook sections`. Les lits de couplet sont
**volontairement pauvres** — batterie, 808, piano, rien d'autre — parce que la
place qui reste est celle du rappeur. Les cuivres et les cordes n'existent que
sur les hooks, où personne ne parle. Sans cette instruction, Suno remplit
uniformément et livre un morceau qu'on ne peut pas utiliser.

Le lit 3 est le plus dégarni des trois (`most open`) : sur un beat, le troisième
seize est celui où le rappeur en dit le plus.

**Faire taire la voix sans tuer la texture.** `no lead vocal, no rapped verse,
no sung hook` d'un côté ; `wordless chopped vocal texture only, used as
percussion, never as a melody line` de l'autre. Un simple `no vocals` supprimerait
aussi les chops de soul qui font la moitié du grain d'un beat français. La
distinction porte sur la **fonction** : une voix qui joue le rôle d'une
percussion reste, une voix qui porte une ligne part.

**Sixième variante du bloc d'exclusions.** `no lead vocals, no rapping, no
singing` en tête — l'exclusion la plus importante du morceau passe en premier,
là où Suno pondère le plus. `no mumble rap` a été retiré : redondant avec
`no rapping`, et 15 caractères récupérés.

---

## 🎛️ V5.5 STYLE PROMPT — 890 / 1000 caractères

```
French club rap instrumental, fully instrumental, no lead vocal, no rapped verse, no sung hook. 100 BPM hard-hitting MPC-60 drums, heavy dusty kick, cracking rimshot snare on the backbeat, crisp offbeat hats, layered claps, deep 808 sub bass with long pitch glides. Persistent dark minor-key piano loop throughout. Dark brass riff as the topline hook, cinematic minor-key strings, deep upright bass, scratched sample stabs on the offbeat, heavy vinyl crackle. Wordless chopped vocal texture only, used as percussion, never as a melody line. Arrangement leaves space on the verse sections: drums, bass and piano only, brass and strings reserved for the hook sections. Ultra-wide stereo field. Cinematic club master, deep tight low end, polished under the vinyl grain. Exclude: no lead vocals, no rapping, no singing, avoid messy mix, no audio artifacts, no generic EDM, no cluttered low end.
```

---

## 📝 PARTITION — 1018 / 5000 caractères

À coller dans le champ *Lyrics*. Aucun mot : uniquement des balises et des
comptes de mesures.

```
[Intro: 8 bars, radio tuner sweep, vinyl crackle, piano loop alone, no drums]
(Instruction: Persistent dark minor-key piano loop throughout)
(Instruction: Fully instrumental, no lead vocal anywhere in this track)

[Drop: 4 bars, MPC-60 drums and 808 enter hard, brass riff states the hook]

[Verse Bed 1: 16 bars, drums, 808 and piano only, no brass, no strings, open]

[Hook 1: 8 bars, brass riff returns, scratched stab on the offbeat, strings low]

[Verse Bed 2: 16 bars, same bed, hats doubled, one long 808 slide on bar eight]

[Hook 2: 8 bars, brass riff doubled, strings an octave higher, claps stacked]

[Bridge: 8 bars, drums fully out, strings and piano only, one long 808 glide]

[DMC Routine: 8 bars, crab scratches, transformer cuts, backspin on the last bar]

[Verse Bed 3: 16 bars, drums return heavy, piano forward, brass out, most open]

[Hook 3: 8 bars, everything at once, brass doubled, strings maximum, widest field]

[Outro: 4 bars, filter closing, piano alone, radio frequency fading, hard stop]
```

---

## 🎹 NOTES DE STUDIO

**BPM — 100.** Le tempo le plus polyvalent pour un instru destiné à être rappé :
un flow posé y tient en huit syllabes par mesure, un flow rapide en seize, et le
half-time reste lisible. En dessous de 92, le beat impose son registre ; au-delà
de 110, il refuse les flows lents.

**Tonalité — Ré mineur.** Boucle de piano sur quatre mesures, main gauche en
octaves. Le riff de cuivres — le vrai hook du morceau — tient en **quatre notes**
et ne joue que sur les sections de hook. Un riff plus long deviendrait une
mélodie et entrerait en concurrence avec le rappeur ; quatre notes, c'est une
signature qu'on peut recouvrir sans la perdre.

**Plan de mesures et durée.**

| Section | Mesures | Cumul |
|---|---|---|
| Intro | 8 | 8 |
| Drop | 4 | 12 |
| Verse Bed 1 | 16 | 28 |
| Hook 1 | 8 | 36 |
| Verse Bed 2 | 16 | 52 |
| Hook 2 | 8 | 60 |
| Bridge | 8 | 68 |
| DMC Routine | 8 | 76 |
| Verse Bed 3 | 16 | 92 |
| Hook 3 | 8 | 100 |
| Outro | 4 | **104** |

À 100 BPM : **4 min 09 s**. Pour raccourcir, retirer le `[Drop]` (−4) et passer
le lit 3 à huit mesures (−8) → 92 mesures, 3 min 41 s.

**Densité par section — la règle du morceau.** Lits de couplet : batterie, 808,
piano. Hooks : plus cuivres, cordes, scratch. Pont : plus de batterie du tout.
Trois niveaux de densité, jamais quatre — un beat qui a trop d'états devient
illisible pour celui qui écrit dessus.

**Placement stéréo.** Batterie et 808 au centre, mono. Piano légèrement à
gauche, cuivres en bloc à droite. Cordes très larges, uniquement sur les hooks.
Scratch en ping-pong. Crépitement de vinyle large et constant. **Le centre reste
volontairement dégagé au-dessus de 300 Hz** : c'est la place de la voix qui
viendra.

**Utilisation.** Le morceau est fait pour recevoir un texte. Deux façons : poser
la voix par-dessus l'export, ou reprendre ce plan de mesures et remplacer chaque
`[Verse Bed]` par un vrai couplet — la partition devient alors un script normal,
avec le budget de 5000 caractères quasi intact (3982 libres).

**Leviers de re-génération.** Style à 110 caractères de marge, paroles à 3982.
- Suno chante quand même → renforcer en tête : `strictly instrumental backing
  track, zero vocals` (+48).
- Lits de couplet trop chargés → `verse sections stripped to drums and bass
  only` (+45).
- Riff de cuivres absent → `four-note brass riff as the main hook` (+38).
- Beat trop propre → `dusty sampler grit, MPC swing` (+30).
- Manque de club → `heavier 808 with long glides on the hook` (+41).
