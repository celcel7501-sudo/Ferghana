# « L'Élite » — morceau long en deux clips (workflow Extend)

Assemblé par `tools/suno_producer.py` : les couplets, le pré-refrain et le
refrain sont les données, l'outil fait la structure et vérifie les limites.
Deux clips, deux champs de paroles, donc **deux budgets de 5000 caractères**.

| Clip | Style | Paroles |
|---|---|---|
| Clip 1 — fondation | 732 / 1000 | 3205 / 5000 |
| Clip 2 — extension | 726 / 1000 | 2322 / 5000 |

Total paroles : **5527 / 10000**. Reproduire : `python3 tools/suno_producer.py`

---

## 🧪 ANALYSE DU MIX

**Pourquoi découper en deux clips.** Suno plafonne les paroles à 5000
caractères par génération. Un morceau long ne se compresse pas, il se
**scinde** : le clip 1 pose intro, couplets 1-2, pré-refrains et refrains ; le
clip 2 part du beat switch, enchaîne le solo, le couplet 3 et le refrain final.
Chaque clip a son propre champ, donc son propre budget.

**La règle du raccord.** Le style du clip 2 **dérive** de celui du clip 1 : même
genre, même BPM, même rythmique, même persistance. On n'ajoute que les tags de
solo. S'en écarter — changer le genre ou le tempo pour « faire évoluer » le
morceau — fait entendre la couture au point de raccord, et c'est le défaut le
plus courant des morceaux étendus.

**La persistance porte la continuité.** `Persistent filtered string riff
throughout` est déclaré dans les deux styles. C'est ce motif, présent avant et
après la coupure, qui fait entendre les deux clips comme un seul morceau plutôt
que comme deux titres collés.

**Le pont électro comme point de coupe.** Couper un morceau au milieu d'un
couplet s'entend toujours. Couper sur un beat switch, jamais : la rupture est
déjà attendue par l'oreille, donc le raccord technique se cache derrière une
rupture musicale. C'est pour ça que le clip 2 **ouvre** sur le pont et non sur
le couplet 3.

**124 BPM, four-on-the-floor.** Tempo de house droite sur lequel une plume
nonchalante garde encore de la place entre les syllabes. Le sidechain creuse à
chaque kick, les claps empilés remplissent les trous — même principe
d'arrangement que sur `automatique.md`, appliqué à un morceau rappé.

**La routine de scratch est découpée en passes.** Une routine décrite dans une
seule balise est jouée comme un effet unique et se termine en deux secondes.
Découpée en cinq passes — deux baby scratches, transformer, crab, orbits,
scribble puis backspin — Suno lui accorde ses mesures. Le mot scratché est pris
**dans le refrain** (« élite », « Ghetto Star ») : c'est ce qui rattache la
routine au morceau au lieu d'en faire une démonstration posée par-dessus. La
mesure de silence qui suit le backspin est ce qui rend le retour du pré-refrain
énorme, sans ajouter un seul dB.

**Le pré-refrain porte du texte, pas seulement une montée.** Une balise de
pré-refrain vide ne produit qu'une ouverture de filtre ; c'est gâcher la marche
la plus efficace vers le hook. Ici il annonce le refrain (« on remonte ») et
prépare la foule à répondre.

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 1 (732 / 1000)

```
French club rap over filtered French house, 124 BPM. four-on-the-floor, heavy sidechain pumping on every kick, crisp offbeat hats, layered claps. filtered French house, sidechain pumping, rhythmic vocoder, resonant filter sweeps. nonchalant poetic urban delivery, melodic slacker flow. lush multi-layered vocal harmonies, complex R&B vocal runs, panoramic vocal layering. Persistent filtered string riff throughout. chopped disco-string sample, round analog bassline with portamento glides, Rhodes stabs, brass hits on the drop. male tenor, dry close-mic verses, explosive anthemic hook, anthemic group vocal responses. ultra-wide stereo field, panoramic vocal layering. polished club master, punchy compression, deep round low end.
```

## 📝 PAROLES — CLIP 1 (3205 / 5000)

```
[Intro: Turntablism routine, vinyl crackle, atmospheric build]

[Verse 1: Nonchalant flow, melodic slacker delivery, dry close-mic]
On vient d'en bas, on vise les étoiles,
C'est pas d'la poésie, c'est un plan.
Ma mère pliait des draps d'hôtel,
Moi j'pliais mes rêves dans un cartable.
Sept heures moins l'quart, la porte qui claque,
Le café froid, la même veste, le même vent.
Elle disait « travaille », elle disait pas « brille »,
J'ai fait les deux, et j'lui dois les deux.
On m'a dit « reste à ta place » —
J'ai demandé laquelle, personne a su répondre.
Alors j'ai pris celle du fond, près d'la fenêtre,
Et j'ai gagné une rangée chaque année.
La cité clignote la nuit comme un tableau d'bord,
Chaque fenêtre allumée, c'est quelqu'un qui tient.
On n'est pas des chiffres au bas d'une étude,
On est les veilleurs, et ce soir on descend.

[Pre-Chorus: Energy ramp, filter opening, snare roll, harmonies appear]
Lève la tête, la nuit nous connaît (nous connaît)
On a fait le tour du bas, on remonte (on remonte)
Y'a la basse qui compte tous les pas qu'on a faits,
Et le filtre s'ouvre... vas-y, ouvre tout.

[Chorus: Anthemic Hook, Tenor rise, call and response, full sidechain]
(Call: Ghetto Star) Response: [Panoramic Group Vocals: Ghetto Star]
(Call: On vient d'en bas, on vise plus haut) Response: [Panoramic Group Vocals: Plus haut]
(Call: On brille dans le noir) Response: [Panoramic Group Vocals: Dans le noir]
(Call: Si tu connais le prix, lève les mains) Response: [Panoramic Group Vocals: Lève les mains]

[Post-Chorus: Chanted club hook, group unison, claps, filter wide open]
(Call: Élite, élite) Response: [Panoramic Group Vocals: Ceux qui tiennent]
(Call: Élite, élite) Response: [Panoramic Group Vocals: Ceux qui restent]

[Verse 2: Same flow, warmer, bass glides, claps doubled]
Le bitume est froid, nos cœurs sont en feu,
Le contraste, c'est notre climat.
On a appris à danser sur des mauvaises nouvelles :
C'est une technique, pas de l'insouciance.
Y'a ceux qui parlent de nous au journal de vingt heures,
Et y'a nous, qui parlons entre nous, moins fort, plus vrai.
J'ai pas besoin qu'on m'résume ma propre vie,
J'étais là, j'ai signé la présence.
Costume ou survêt', même colonne vertébrale,
On change la coupe, on garde la mesure.
Le respect, ça s'télécharge pas, ça s'use,
Ça s'entretient comme une vieille bagnole.
Si l'ascenseur est en panne depuis vingt ans,
On montera par la cage, par la voix, par la musique.
Et le jour où on arrive en haut, on bloque la porte :
On laisse passer ceux d'en bas, c'est la règle.

[Pre-Chorus: Energy ramp, filter opening, snare roll, harmonies appear]
Lève la tête, la nuit nous connaît (nous connaît)
On a fait le tour du bas, on remonte (on remonte)
Y'a la basse qui compte tous les pas qu'on a faits,
Et le filtre s'ouvre... vas-y, ouvre tout.

[Chorus: Same hook, wider panoramic stack, ad-libs hard panned]
(Call: Ghetto Star) Response: [Panoramic Group Vocals: Ghetto Star]
(Call: On vient d'en bas, on vise plus haut) Response: [Panoramic Group Vocals: Plus haut]
(Call: On brille dans le noir) Response: [Panoramic Group Vocals: Dans le noir]
(Call: Si tu connais le prix, lève les mains) Response: [Panoramic Group Vocals: Lève les mains]
```

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 2 (726 / 1000)

Identique au clip 1, plus les tags de solo et de turntablism. Les tags de
scratch viennent de la table d'ADN (`Cut Killer`), pas d'un texte en dur :
c'est la même source que la routine écrite dans les paroles.

```
French club rap over filtered French house, 124 BPM. four-on-the-floor, heavy sidechain pumping on every kick, crisp offbeat hats, layered claps. filtered French house, sidechain pumping, rhythmic vocoder, resonant filter sweeps. lush multi-layered vocal harmonies, complex R&B vocal runs, panoramic vocal layering. mixtape scratch drops, transformer cuts, backspin rewind. Persistent filtered string riff throughout. virtuoso analog synth solo, Moog-style lead, high resonance. chopped disco-string sample, round analog bassline, Rhodes stabs. male tenor, explosive anthemic hook, anthemic group vocal responses. ultra-wide stereo field, panoramic vocal layering. polished club master, punchy compression, deep round low end.
```

## 📝 PAROLES — CLIP 2 (2322 / 5000)

```
[Bridge: Beat switch, filter sweep opening, heavy sidechain pump]

[Solo: Analog synthesizer solo, melodic and complex, filter rising]

[Verse 3: Intense flow, denser rhymes, drums stripped back]
L'héritage est lourd, on porte le flambeau,
Et un flambeau, ça brûle aussi les mains.
J'ai vu des frères s'éteindre avant vingt-cinq ans,
J'écris pour qu'il reste au moins la lumière.
On m'a pas donné d'élite, j'en ai fabriqué une :
C'est ceux qui s'lèvent quand personne les regarde.
Pas de couronne, pas de photo, pas d'annonce,
Juste des gens qui tiennent parole en silence.
La vraie noblesse ici, c'est pas d'être arrivé,
C'est d'avoir tenu quand y'avait rien à tenir.
Y'a des palais qui valent moins qu'un salon de mère,
Y'a des noms connus qui pèsent moins qu'un prénom.
Alors quand la basse tape et qu'la salle décolle,
C'est pas d'la fête, c'est une revanche polie.
On brille dans le noir parce qu'on connaît le noir,
Et le noir, c'est lui qui nous a appris à viser.

[DMC Routine: 16 bars, drums to kick and rimshot, bass muted, filter half closed]
[Scratch: two baby scratches on the word "élite", then four transformer cuts]
[Scratch: crab scratch burst on "Ghetto Star", double time over the kick]
[Scratch: two orbits trading bar for bar with the rimshot]
[Scratch: fast scribble, then a full backspin rewind]
[Silence: one bar, everything drops out]

[Pre-Chorus: Energy ramp, filter opening, snare roll, harmonies appear]
Lève la tête, la nuit nous connaît (nous connaît)
On a fait le tour du bas, on remonte (on remonte)
Y'a la basse qui compte tous les pas qu'on a faits,
Et le filtre s'ouvre... vas-y, ouvre tout.

[Final Chorus: Maximum intensity, 3D vocal wall, tenor up a tone]
(Call: Ghetto Star) Response: [Panoramic Group Vocals: Ghetto Star]
(Call: On vient d'en bas, on vise plus haut) Response: [Panoramic Group Vocals: Plus haut]
(Call: On brille dans le noir) Response: [Panoramic Group Vocals: Dans le noir]
(Call: Si tu connais le prix, lève les mains) Response: [Panoramic Group Vocals: Lève les mains]

[Post-Chorus: Chanted club hook, group unison, claps, filter wide open]
(Call: Élite, élite) Response: [Panoramic Group Vocals: Ceux qui tiennent]
(Call: Élite, élite) Response: [Panoramic Group Vocals: Ceux qui restent]

[Outro: Smooth filter sweep, final vinyl scratch, fading atmosphere]
```

---

## 🎹 NOTES DE STUDIO

**BPM — 124, four-on-the-floor.** Identique sur les deux clips, sans
négociation : un écart d'un seul BPM au raccord s'entend comme un défaut de
lecture.

**Tonalité — La mineur.** Assez grave pour que le riff de cordes filtré reste
lisible sous le sidechain, assez ouverte pour que le refrain monte sans forcer.
Le solo du clip 2 se joue sur la même grille que le refrain : un solo qui
change de grille casse la continuité que la persistance vient d'installer.

**Delivery.** Couplets : nonchalants, secs, proches du micro, légèrement
derrière le kick — la densité du texte fait le travail, pas la vitesse.
Pré-refrain : la voix se redresse et commence à chanter. Refrain : ténor plein,
réponses de groupe **après** l'appel. Couplet 3 (clip 2) : même timbre mais plus
dense et plus appuyé, batterie allégée pour laisser passer les mots — c'est le
seul endroit où le débit se resserre, et il tombe juste après le solo, quand
l'auditeur attend le retour de la voix.

**Le vers à ne pas rater.** « La vraie noblesse ici, c'est pas d'être arrivé, /
c'est d'avoir tenu quand y'avait rien à tenir. » C'est la thèse du morceau :
poser la voix, laisser un demi-temps de silence après, ne pas doubler.

**La routine.** Batterie réduite au kick et au rimshot, basse coupée, filtre à
moitié fermé : la routine a besoin de place dans le spectre, sinon les cuts
disparaissent sous la house. Elle tombe après le couplet 3 et relance le
pré-refrain — un scratch qui ne relance pas une section ne sert à rien.

**Mode opératoire dans Suno.**
1. Générer le clip 1 avec son style et ses paroles.
2. Choisir la prise, puis « Extend » à partir de la **fin** du clip 1.
3. Coller le style du clip 2 et ses paroles.
4. « Get Whole Song » pour recoller les deux et masteriser d'un bloc.

**Marge disponible.** Clip 1 : 268 caractères de style, 1795 de paroles.
Clip 2 : 274 et 2678. La routine consomme 391 caractères sur le clip 2 ;
il reste de quoi ajouter un quatrième couplet.

