# « Ne Raccroche Pas » — version Secteur Ä × Doc Gynéco, 90 BPM

Deuxième production du **même texte** que `ne-raccroche-pas.md`. Là-bas :
guitare, violoncelle, rubato, une seule voix. Ici : piano sombre, MPC-60, flow
nonchalant — et **elle chante le refrain**. Les mots ne changent pas d'une
virgule ; le morceau ne raconte plus la même histoire.

**Conforme aux limites Suno** : style **920 / 1000**, paroles **2812 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **0,55** — quasi identique à la version chanson (0,54),
puisque c'est le même texte.

---

## 🧪 ANALYSE DU MIX

**Le vrai changement n'est pas la production, c'est qui parle.** Dans la version
chanson, l'autre personne n'est **jamais entendue** : chaque réplique d'elle est
un blanc, et c'est tout le dispositif. Ici, le refrain est confié à une voix
féminine — la formule Secteur Ä classique, couplet rappé, refrain chanté. Du
coup « Ne raccroche pas » n'est plus ce qu'il dit, c'est **ce qu'elle répond**.
Le même quatrain passe de supplication à réponse. Et la dernière occurrence,
« Tu peux raccrocher », devient une permission qu'**elle** s'accorde.

C'est la démonstration la plus nette du dossier : à texte rigoureusement
identique, changer l'attribution d'une section change le sens du morceau entier.

**Le problème du rubato, et ce qui le résout.** La version chanson était
explicitement `not quantised` : le chant traînait en fin de phrase. Un morceau
boom bap ne peut pas faire ça — la MPC impose une grille. Les vers ont des
longueurs irrégulières (c'est de la prosodie de chanson, pas de rap), et
normalement il faudrait les réécrire.

La solution est l'ADN Doc Gynéco : `nonchalant poetic urban delivery, melodic
slacker flow, sitting far behind the beat, never rushed`. Un flow qui traîne
volontairement derrière le temps est **du rubato à l'intérieur d'une grille** —
c'est le seul débit qui absorbe une prosodie de chanson sans réécriture. Les
mots sont conservés au caractère près.

**Le silence, adapté et non supprimé.** Le pont de la version chanson tenait sur
deux mesures de bruit de pièce. Sur une production à batterie dure, deux mesures
de rien s'entendent comme un bug. Traduction : `drums fully muted, piano chord
ringing out, vinyl crackle only`. Le vide est le même, il est simplement
**meublé par la résonance** — puis la batterie revient sèche sur le temps fort,
ce que la guitare acoustique ne pouvait pas faire.

**`no autotune` est ici autorisé, alors qu'il ne l'était pas ailleurs.** La
table de conflits de `references/negative-prompting.md` interdit ce tag avec des
`stacked R&B harmonies`. Précision utile : le conflit porte sur l'**empilement**,
pas sur le chant. Ici le refrain est `a warm female alto, close and intimate,
single voice, no gang vocals` — une seule voix, aucune harmonie. Le tag passe
sans dommage.

**Même tonalité que la version chanson, exprès.** La mineur des deux côtés. Ce
n'est pas une reprise, c'est la même pièce jouée par un autre orchestre : garder
la tonalité permet de passer les deux versions à la suite sans que l'oreille
entende un changement de morceau.

---

## 🎛️ V5.5 STYLE PROMPT — 920 / 1000 caractères

```
Dark French Golden Era rap with a sung female hook, 90 BPM. Hard-hitting MPC drums, heavy dusty kick, cracking rimshot snare on the backbeat, sparse hi-hats, straight no swing, vinyl crackle. Persistent dark melancholic piano loop throughout. Deep melodic jazz-fusion bass with fretless slides, cinematic minor-key strings, muted trumpet answer, warm Rhodes pad. Male lead: nonchalant poetic urban delivery, melodic slacker flow, spoken-sung close-mic vocal, sitting far behind the beat, conversational, never rushed. Chorus sung by a warm female alto, close and intimate, single voice, no gang vocals, no crowd. Ultra-wide stereo field, deep 3D reverb tail on the strings, dry centred vocals, warm tape saturation. Cinematic master, punchy compression, deep tight low end, preserved dynamics. Exclude: no mumble rap, no autotune, no trap drums, no generic EDM, avoid messy mix, no audio artifacts, no cluttered low end.
```

---

## 📝 SCRIPT & PAROLES — 2812 / 5000 caractères

```
[Intro: Piano loop and vinyl crackle, no drums, spoken very close, phone tone]
(Instruction: Persistent dark melancholic piano loop throughout)
(le téléphone décroche, voix basse, nonchalante)
Allô.
Non. Je dormais pas.

[Verse 1: Nonchalant spoken-sung rap, far behind the beat, MPC drums enter]
Non, je dormais pas, j'ai le plafond qui me parle,
Y'a la lumière du couloir qui passe sous la porte.
Toi t'as la voix de quelqu'un qui a préparé sa phrase,
Alors vas-y doucement, j'ai toute la nuit.
J'entends ta cuisine derrière, le frigo, la pendule,
T'as pas changé d'appartement, t'as changé d'heure.
Y'a huit ans j'aurais raccroché en trois secondes,
Aujourd'hui je tiens le téléphone comme on tient une main.

[Chorus: Female alto, sung, close and intimate, strings entering, no gang]
Ne raccroche pas.
On n'est pas obligés de se dire quelque chose.
Laisse juste la ligne ouverte entre nous deux,
Y'a des silences qui font plus de bien que des phrases.

[Verse 2: Same nonchalant flow, bass forward, strings low, drums heavier]
Tu me demandes si ça va, je réponds ça va,
On sait tous les deux que c'est un mot de passe.
Moi j'ai le travail, la fatigue et deux ou trois victoires
Que je raconte à personne parce que ça se raconte pas.
Toi t'as la même chose avec des noms différents,
Et on fait semblant de trouver ça normal.
On a passé dix ans à parler de la pluie,
Et jamais deux minutes de ce qu'on avait dans le ventre.

[Chorus: Same words, female alto wider, strings higher, muted trumpet answer]
Ne raccroche pas.
On n'est pas obligés de se dire quelque chose.
Laisse juste la ligne ouverte entre nous deux,
Y'a des silences qui font plus de bien que des phrases.

[Bridge: Drums fully muted, piano and strings only, male voice bare, no reverb]
(plus de batterie, piano seul, voix nue)
Là, tu vois...
[Silence: two bars, piano chord ringing out, vinyl crackle only]
(voix nue, très proche, presque parlée)
C'est exactement ça que je voulais dire.
[Silence: one bar, drums return heavy on the downbeat]

[Verse 3: Voice lower and slower, drums stripped to kick and rimshot]
Y'a un moment tout à l'heure où t'as failli le dire,
J'ai entendu l'inspiration, j'ai pas entendu la suite.
C'est pas grave. Le dis pas ce soir si t'es pas prêt,
Je suis là demain, et le jour d'après aussi.
Mais promets-moi juste un truc avant qu'on se quitte :
La prochaine fois, appelle avant qu'il soit trop tard.

[Final Chorus: Female alto, first line changed, strings at maximum, drums full]
Tu peux raccrocher.
On n'est pas obligés de se dire quelque chose.
Laisse juste la ligne ouverte entre nous deux,
Y'a des silences qui font plus de bien que des phrases.

[Outro: Piano loop alone, strings fading, vinyl crackle, spoken, no tape stop]
(elle raccroche pas, on entend le frigo et la pendule)
Bon.
Bonne nuit quand même.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 90, droit, sans swing.** Le tempo qui laisse un flow nonchalant traîner
sans décrocher. Ne pas descendre à 84 : le texte est long, les vers
s'affaisseraient. Ne pas monter à 96 : le débit devrait se resserrer, et on
perdrait précisément la nonchalance qui permet de garder les mots tels quels.

**Tonalité — La mineur**, la même que la version chanson. La boucle de piano
tient sur quatre mesures, main gauche en octaves ; les cordes n'entrent qu'au
refrain, sous la voix féminine, jamais sous le rap.

**Delivery — deux personnes, deux traitements.** Lui : parlé-chanté, très
derrière le temps, proche du micro, aucune double, aucun ad-lib. Elle : chanté
franchement mais **retenu**, une seule voix, pas d'harmonie, pas de run. Le
contraste ne vient pas du volume mais de la **place rythmique** — il traîne, elle
tombe juste. C'est ce décalage qui fait entendre deux personnes au téléphone
plutôt qu'un rappeur et une choriste.

**Placement stéréo.** Les deux voix au centre, sèches. Les cordes portent toute
la queue de réverbération (`deep 3D reverb tail`) ; les voix, jamais — comme sur
la version chanson, on veut quelqu'un d'aussi proche qu'une oreille. Le piano
légèrement à gauche, la trompette bouchée à droite en réponse.

**Le refrain bouge une seule fois, sur la première ligne.** « Ne raccroche pas. »
→ « Tu peux raccrocher. » Règle et conditions dans
`references/structure-tags.md`. Ici l'effet est doublé par l'attribution : c'est
elle qui change d'avis, pas lui.

**Ratio hook / couplets — 0,55.** Identique à la version chanson (0,54) au
caractère près de différence, ce qui est attendu : c'est le même texte. Utile à
noter comme contrôle — **le ratio mesure l'écriture, pas la production.** Deux
morceaux qui ne se ressemblent en rien sortent au même chiffre.

**Leviers de re-génération.** Style à 80 caractères de marge, paroles à 2188.
- Flow trop rappé, pas assez parlé → `half-spoken slacker delivery, lazy timing`
  (+43) en retirant `muted trumpet answer` (−22).
- Refrain trop chanté → `restrained female alto, almost spoken on the last line`
  (+52) en retirant `warm Rhodes pad` (−17).
- Piano perdu sous la batterie → `piano loop high in the mix` (+28).
- Pont pas assez suspendu → `long piano tail, no drums for two bars` (+39).
- Trop propre → `dusty sampler grit` (+20).
