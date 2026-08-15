# « À Contretemps » — club R&B rapide, 2-step garage 134 BPM

Banger R&B dansant à rythme rapide, résolu par le seul procédé qui marche : on
ne chante pas vite, **on chante lentement par-dessus vite**. Le morceau le plus
rapide du dossier avec `la-machine.md`, et le seul R&B au-dessus de 116 BPM.

**Conforme aux limites Suno** : style **888 / 1000**, paroles **3681 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,40** — mais huit sections de hook sur quinze.

---

## 🧪 ANALYSE DU MIX

**Le problème du R&B rapide, et sa solution.** « R&B » et « rythme rapide » se
contredisent en apparence : la voix R&B a besoin de tenues, de runs, de souffle,
et rien de tout ça ne rentre à 134 BPM. `ca-swingue.md` réglait le problème à
116 en faisant courir la voix avec la batterie. Au-delà, cette méthode casse.

La solution est le principe du garage : **la topline s'écrit en half-time.** Le
chant est phrasé comme une ballade R&B à 67 BPM pendant que la batterie tourne
à 134. Le public danse sur les hi-hats, l'auditeur chante sur la voix, et les
deux vitesses coexistent dans le même morceau. C'est écrit noir sur blanc dans
le style — `female lead singing in half-time over the fast drums` — parce que
Suno, laissé seul, alignera le débit vocal sur la batterie.

**Le 2-step, c'est l'absence de four-on-the-floor.** Tous les morceaux club du
dossier tenaient sur un kick à tous les temps. Ici, `kick on one and the and of
three, displaced rim snare, no four-on-the-floor` : le kick manque à l'appel
deux fois par mesure, et c'est ce trou qui fait danser. La mention explicite
`no four-on-the-floor` est indispensable — sans elle, tout prompt contenant
« club » et « 134 BPM » ramène une grosse caisse à chaque temps.

**La persistance est le stab d'orgue.** Dans le garage, la « basse » n'est pas
une ligne tenue mais une **stab d'orgue syncopée** qui rebondit. C'est aussi
l'élément le plus stable du morceau : le sub disparaît au refrain, les hats
s'arrêtent au pont, l'orgue reste. Déclaré deux fois, comme toujours.

**Le titre est le procédé.** « À contretemps » dit le rythme (le contretemps,
qui est littéralement ce que joue le 2-step) et l'histoire (deux personnes qui
se ratent de peu toute la nuit). Toutes les images du texte tiennent sur ce
double sens : « ça tombe juste », « il nous manque juste un temps », « pile à
l'heure, pour une fois ». Quand le procédé musical et le sujet portent le même
mot, le morceau n'a plus besoin d'expliquer sa métaphore.

**Le pont enlève la batterie, le break la rend au double.** Deux gestes
successifs : d'abord `drums cut to sub bass only` avec des harmonies a cappella
et **aucune réverbération** — le seul moment nu du disque ; puis un
`[Garage Break]` séparé où la batterie revient en double-time avec les harmonies
hachées et la foule qui répond en une syllabe (« Un temps ! »). Découper la
rupture en deux sections plutôt qu'une seule est ce qui donne à chaque geste ses
mesures — même principe que la routine de scratch en passes sur `l-elite.md`.

**Pas de `no autotune` dans les exclusions**, malgré une production propre : la
table de conflits de `references/negative-prompting.md` note que ce tag sabote
les `stacked R&B harmonies`. Le morceau en est fait. Le reste du bloc standard
passe tel quel.

---

## 🎛️ V5.5 STYLE PROMPT — 888 / 1000 caractères

```
Fast French club R&B over UK garage, 134 BPM shuffled 2-step. Swung skippy hi-hats, kick on one and the and of three, displaced rim snare, no four-on-the-floor, syncopated foley percussion, layered claps. Persistent syncopated organ bass stab throughout. Deep short-decay sub bass, filtered Rhodes chords, pitched vocal chop stabs, reverse-reverb swells, string pad on the chorus. Female lead singing in half-time over the fast drums, silky close-mic topline, lush stacked R&B harmonies, complex vocal runs, gated chopped harmony edits, breathy ad-libs, call-and-response backing vocals. Ultra-wide stereo field, panoramic vocal layering, glossy modern sheen. Polished club master, punchy compression, tight round low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM, avoid over-saturated bass.
```

---

## 📝 SCRIPT & PAROLES — 3681 / 5000 caractères

```
[Intro: Organ bass stab alone, reverse-reverb swell, vocal chop teaser, spoken]
(Instruction: Persistent syncopated organ bass stab throughout)
(parlé, bas, proche du micro, sourire)
Une heure du matin.
On s'est encore ratés de trois secondes.

[Verse 1: Female lead, half-time phrasing over fast drums, close-mic, no pad]
T'es passé devant moi, t'as pas tourné la tête,
J'avais changé de coiffure, t'avais changé d'avis.
Le vestiaire a mon manteau, la nuit a mon numéro,
Et toi t'as le sourire de quelqu'un qui va partir.
On s'est croisés trois fois entre le bar et la sortie,
Trois fois trop tôt, trois fois trop tard, jamais ensemble.
Y'a une chanson qui passe et qui nous connaît par cœur,
Elle sait très bien qu'on va encore se rater.

[Pre-Chorus: String pad entering, harmonies stacking, hats thinning, riser]
Deux pas en avant, un pas de côté,
Toi tu comptes autrement, moi je compte pour deux.
Reste où t'es, laisse-moi arriver,
Trois, deux, un —

[Chorus: Silky stacked harmonies, half-time topline, full 2-step drums, pad]
On est à contretemps, toi et moi,
J'arrive quand tu pars, tu reviens quand je danse.
On est à contretemps, toi et moi,
Et pourtant ça tombe juste — et pourtant ça tombe juste.

[Post-Chorus: Gated chopped harmony edits, organ stabs, hats doubled, no lead]
(À-con-tre-temps... à-con-tre-temps...)
(Ça tombe juste... ça tombe juste...)

[Verse 2: Same lead, freer phrasing, sub bass forward, foley percussion added]
Deux heures, j'ai plus mes talons, j'ai gardé la démarche,
Tu m'écris de la salle d'à côté comme si c'était loin.
J'ai pas envie qu'on parle, j'ai envie qu'on soit là,
Les mots, ça arrive toujours en retard sur nous.
J'ai vu ton reflet dans le miroir derrière le DJ,
T'as levé les yeux au moment où j'ai baissé les miens.
On a le même goût, la même heure, la même piste,
Il nous manque juste un temps — un seul, et c'est réglé.

[Pre-Chorus: Pad higher, harmonies wider, claps doubled, reverse-reverb swell]
Deux pas en avant, un pas de côté,
Toi tu comptes autrement, moi je compte pour deux.
Reste où t'es, laisse-moi arriver,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, runs on the tails, ad-libs hard panned]
On est à contretemps, toi et moi,
J'arrive quand tu pars, tu reviens quand je danse.
On est à contretemps, toi et moi,
Et pourtant ça tombe juste — et pourtant ça tombe juste.

[Post-Chorus: Gated chopped harmony edits, organ stabs, hats doubled, no lead]
(À-con-tre-temps... à-con-tre-temps...)
(Ça tombe juste... ça tombe juste...)

[Bridge: Drums cut to sub bass only, stacked a cappella harmonies, no reverb]
(harmonies empilées, basse seule, plus de batterie)
Un temps.
Juste un temps de retard depuis le début.
(voix lead nue, très proche, sans double)
Alors ce soir je le prends, ce temps.
Je bouge pas. Je t'attends là.

[Garage Break: Drums return double-time, gated harmonies chopping, riser]
(Call: Un temps !) Response: [Panoramic Group Vocals: Un temps !]
(Call: Un temps !) Response: [Panoramic Group Vocals: Un temps !]

[Final Chorus: All voices, widest field, runs everywhere, pad at maximum]
On est à contretemps, toi et moi,
J'arrive quand tu pars, tu reviens quand je danse.
On est à contretemps, toi et moi,
Et pourtant ça tombe juste — et pourtant ça tombe juste.

[Post-Chorus: Whole room, chopped harmonies doubled, organ stabs, hats flat out]
(À-con-tre-temps... à-con-tre-temps...)
(Ça tombe juste... ça tombe juste...)
(À-con-tre-temps... à-con-tre-temps...)
(Ça tombe juste... ça tombe juste...)

[Outro: Organ stab alone, drums out, one long harmony chord, spoken, tape stop]
(parlé, bas, exactement comme à l'intro)
Trois heures du matin.
T'es là. Pile à l'heure, pour une fois.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 134, shuffle 2-step.** Ne pas descendre sous 130 : on retombe sur un
mid-tempo R&B et le shuffle perd son intérêt. Ne pas dépasser 138 : les runs
vocaux n'ont plus la place de se poser, même en half-time. Le swing des hi-hats
doit être marqué (autour de 60 %) — un 2-step droit sonne comme une erreur de
programmation.

**Tonalité — Si bémol mineur.** Registre classique du R&B féminin : la voix
lead vit dans le médium, les harmonies se posent en dessous et au-dessus, et le
sub bass reste très bas sans jamais croiser l'orgue. Les stabs d'orgue jouent le
renversement, pas la fondamentale — c'est ce qui les fait rebondir.

**Delivery — la règle du morceau : compter en deux.** Chanter sur une pulsation
à 67, pas à 134. Chaque ligne du refrain occupe deux mesures entières. Les
couplets sont plus proches du parlé-chanté, à peine derrière le temps ; le
refrain est pleinement chanté, doublé, avec les runs **sur les fins de ligne
uniquement** — jamais au milieu, sinon la ligne perd son assise.

**La longueur des réponses, encore.** Refrain : pas de call & response, ce sont
des harmonies empilées. Garage break : les appels tombent tous les temps, donc
la réponse fait **une syllabe** (« Un temps ! »). Application directe du
correctif documenté dans `references/structure-tags.md`.

**Placement stéréo.** Voix lead au centre, proche, peu de réverbération. Les
harmonies s'ouvrent progressivement : ±30 % au premier refrain, ±60 % au
deuxième, ±100 % au dernier. Les stabs d'orgue légèrement à gauche, les chops
gated en ping-pong gauche-droite sur le post-refrain. Sub et kick au centre,
mono.

**Le refrain est identique à l'écrit** aux trois passages. Variation par les
balises : `silky stacked harmonies` → `harmonies wider, runs on the tails` →
`all voices, widest field, runs everywhere`.

**Ratio hook / couplets — 1,40, sous-évalué comme sur les deux morceaux
précédents.** Les post-refrains sont des harmonies hachées : quatre lignes pour
150 caractères et huit mesures. En sections, **huit sur quinze** sont du hook,
du post-refrain ou du break. C'est un disque de club ; le ratio mesure du texte.

**Leviers de re-génération.** Style à 112 caractères de marge, paroles à 1319.
- Batterie trop droite → `heavily swung shuffled 2-step, off-grid hats` (+45).
- Voix trop rapide → renforcer `topline phrased in half-time, long held notes`
  (+45) en retirant `breathy ad-libs` (−17).
- Orgue pas assez présent → `bouncy organ bass stabs high in the mix` (+40).
- Pont pas assez nu → `fully dry a cappella bridge, no reverb at all` (+45).
- Manque de club → `crowd noise and room ambience on the break` (+43).
