# « Sans Filet » — plume Ninho sur groupe live, 90 BPM

Brief reçu : deux tags, `melodic male tenor rap-singing, catchy sung hook`.
Ils ne décrivent **qu'une seule couche** — la voix. Tout le reste était à
décider, et c'est le sujet de cette fiche.

| Champ | Mesure |
|---|---|
| Style seul (bloc dans *Exclude Styles*) | **787 / 1000** — marge 213 |
| Style + bloc recollé (mode repli) | **942 / 1000** — marge 58 |
| Paroles | **3664 / 5000** — marge 1336 |

Ratio hook / couplets : **1,45**. Balises en début de ligne : **13**, pour 13
sections voulues.

---

## 🧪 ANALYSE DU MIX

**Un ADN purement vocal ne décide de rien, et c'est le piège.** Les deux tags
donnés portent le timbre, le registre et la forme du hook. Ils ne disent rien du
tempo, du genre, de la batterie, de l'harmonie — c'est-à-dire de tout ce qui
fait le disque. Laisser ça au modèle, c'est obtenir le lit rythmique le plus
probable statistiquement : trap mélodique autour de 140. Ce n'est pas un choix,
c'est un défaut.

**Le lit choisi ici est un groupe qui joue**, parce que c'est le contre-emploi le
plus productif : cette voix est presque toujours posée sur des machines. Sur des
musiciens, la même écriture change de sens — le chanté-rappé cesse d'être un
effet de production et redevient quelqu'un qui chante dans une pièce.

**Faire jouer plutôt que programmer, c'est quatre tags, pas un adjectif.** Suno
quantifie par défaut ; `live band` seul ne suffit pas. Ce qui produit
réellement le geste :

```
Live drum kit played by hand … room mics open, no quantization on bass and guitars.
One take feel, timing imperfections kept, no click-track stiffness.
```

**Et il y a une tension à arbitrer.** Un chanté-rappé mélodique a besoin d'une
grille à laquelle s'accrocher ; un groupe live dérive. Les deux ne peuvent pas
gagner. Répartition par couches, comme sur `je-te-le-dis-une-fois.md` :

| Couche | Décision |
|---|---|
| Kick et caisse claire | **Serrés, sur la grille** — la voix a besoin de son repère |
| Basse et guitares | **Libres** — `no quantization`, c'est là que le groupe respire |
| Voix | Sur la grille de la batterie, jamais sur celle de la basse |

Si tout dérive, le hook cesse d'être prévisible et le morceau perd la seule
chose que les deux tags d'origine réclamaient.

**Le décompte audible remplace le riser.** Un disque de groupe n'a pas de montée
de bruit blanc : il a un batteur qui compte. Le décompte ouvre le morceau, et il
**revient au pont** pour ramener tout le monde d'un bloc — même fonction qu'un
riser, mais dans la logique du genre. C'est aussi un silence attribué : on
n'écrit pas le vide, on écrit qui l'occupe, et ici c'est la voix du batteur.

**Le refrain suit le squelette syllabique**, quatre lignes de **8 syllabes**,
forme A B C A :

```
J'ai pas de filet sous les pieds,     8
J'ai pas de deuxième version,         8
Ce que tu entends, c'est la prise,    8
J'ai pas de filet sous les pieds.     8
```

Littéral, sans une image — et il décrit **la méthode du disque lui-même**. Le
refrain d'un morceau enregistré en une prise peut parler de la prise ; c'est le
seul cas où l'auto-référence n'est pas un tic.

**La rime riche du couplet 1 est le pivot du texte** :

> Parce que les meilleures choses que j'ai dites, je les ai pas **préparées**,
> Et les pires, j'ai jamais réussi à les **réparer**.

Une consonne d'écart. L'oreille entend l'identité avant la différence — même
mécanisme que `personne y touchait / tout le monde y couchait` sur
`la-cle-sous-le-pot.md`.

---

## 🎛️ STYLE PROMPT — 787 / 1000 caractères

```
French melodic rap on a live band, warm and unhurried, 90 BPM. Live drum kit played by hand, tight kick and snare on the grid, brushed ride, room mics open, no quantization on bass and guitars. Persistent clean electric guitar riff throughout, four bars, present in every section. Warm electric bass with finger noise, Rhodes, muted trumpet answer, string pad on the chorus only. Male lead, melodic tenor rap-singing, catchy sung hook, sweet and direct, melodic ad-lib tails, lush stacked tenor harmonies, panoramic group responses. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. One take feel, timing imperfections kept, no click-track stiffness. Ultra-wide stereo field, lead centred and dry. Warm analog master, deep low end, preserved dynamics.
```

---

## 🚫 BLOC D'EXCLUSION — 144 caractères

Champ **Exclude Styles**. En mode repli → 942 / 1000, marge 58.

```
no programmed drums, no trap drums, no mumble rap, no distorted vocals, no generic EDM, avoid messy mix, no cluttered low end, avoid thin sounds
```

`no programmed drums` est le tag décisif de ce morceau : c'est lui qui empêche
Suno de revenir à sa boîte à rythmes par défaut. Il ne contredit pas
`tight kick and snare on the grid` — jouer serré et programmer sont deux choses
différentes. `no autotune` est absent : harmonies de ténors empilées.

---

## 📝 SCRIPT & PAROLES — 3664 / 5000 caractères

```
[Intro: Guitar riff alone, room mics open, drummer counting in, no vocals yet]
(Instruction: Persistent clean electric guitar riff throughout)
(on entend la salle, une chaise qui bouge, le batteur compte)
(un, deux, trois, quatre)

[Verse 1: Melodic tenor rap-singing, laid-back, guitar and bass, brushed ride]
Y'a une lampe, un micro, et personne derrière la vitre,
Le mec au son est parti chercher du café, il en a pour dix minutes.
J'ai pas prévenu, j'ai pas répété, j'ai juste appuyé,
Parce que les meilleures choses que j'ai dites, je les ai pas préparées,
Et les pires, j'ai jamais réussi à les réparer.
(la basse seule, deux temps)
On m'a proposé de refaire, j'ai dit non, laisse comme ça,
La fausse note de la mesure douze, elle raconte plus que le reste.
J'ai passé dix ans à polir des trucs que personne a gardés,
Et c'est le brouillon qu'on m'a réclamé.

[Pre-Chorus: String pad entering, harmonies stacking, ride opening up]
Pas de deuxième chance, pas de deuxième prise,
Pas de version propre qui traîne quelque part.
Ce qui sort, il sort une fois.
Écoute bien —

[Chorus: Fully sung tenor hook, same rhythm on every line, harmonies, band full]
J'ai pas de filet sous les pieds,
J'ai pas de deuxième version,
Ce que tu entends, c'est la prise,
J'ai pas de filet sous les pieds.

[Post-Chorus: Panoramic group responses, trumpet answering, band full]
(Call: Sans filet) Response: [Panoramic Group Vocals: Première prise]
(Call: Sans filet) Response: [Panoramic Group Vocals: Première prise]

[Verse 2: Same tenor, warmer and higher, bass forward, Rhodes under]
Ma fille m'a demandé pourquoi je chante toujours pareil,
J'ai dit c'est pas pareil — c'est juste que c'est vraiment moi.
Elle a haussé les épaules, et elle avait raison sur un point :
Personne entend la différence entre sincère et bien fait.
(la basse seule, deux temps)
Alors je garde les deux, le travail et le tremblement,
Le premier se voit jamais, le second s'entend tout le temps.
J'ai plus l'âge de faire semblant d'avoir dix-neuf ans,
Mais j'ai encore l'âge de me tromper devant tout le monde.

[Pre-Chorus: Strings higher, harmonies doubled, snare opening, band full]
Pas de deuxième chance, pas de deuxième prise,
Pas de version propre qui traîne quelque part.
Ce qui sort, il sort une fois.
Écoute bien —

[Chorus: Same hook, harmonies wider, trumpet doubling, band full]
J'ai pas de filet sous les pieds,
J'ai pas de deuxième version,
Ce que tu entends, c'est la prise,
J'ai pas de filet sous les pieds.

[Post-Chorus: Panoramic group responses, trumpet answering, band full]
(Call: Sans filet) Response: [Panoramic Group Vocals: Première prise]
(Call: Sans filet) Response: [Panoramic Group Vocals: Première prise]

[Bridge: Everyone out but the drummer, voice bare, no reverb, room mics only]
(plus que la batterie et la voix nue, on entend la pièce)
Y'a un moment, tout à l'heure, où j'ai failli m'arrêter.
Vous l'avez pas entendu. Moi si.
(le batteur compte à voix haute, la salle entière revient d'un bloc)
(un, deux, trois, quatre)

[Final Chorus: All harmonies, widest field, strings maximum, band full]
J'ai pas de filet sous les pieds,
J'ai pas de deuxième version,
Ce que tu entends, c'est la prise,
J'ai pas de filet sous les pieds.

[Post-Chorus: Whole room, responses tripled, trumpet and strings, band full]
(Call: Sans filet) Response: [Panoramic Group Vocals: Première prise]
(Call: Sans filet) Response: [Panoramic Group Vocals: Première prise]
(Call: Sans filet) Response: [Panoramic Group Vocals: Première prise]

[Outro: Band stops together, guitar riff alone, room noise, spoken, hard stop]
(parlé, proche, on entend qu'il sourit)
Bon.
On la garde, celle-là.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 90.** Le tempo où un groupe respire encore et où un chanté-rappé garde
son articulation. Sous 85 le morceau s'affaisse ; au-dessus de 96 la batterie
jouée à la main commence à sonner comme une boîte à rythmes, et tout le travail
d'imperfection est perdu.

**Tonalité — Mi mineur.** Tonalité de guitare : les cordes à vide sonnent, et le
riff persistant de quatre mesures peut rester ouvert sans être joué fort. Basse
avec bruit de doigts assumé, Rhodes en tapis, nappe de cordes **au refrain
seulement** — son absence pendant les couplets fait qu'on l'entend arriver.

**Delivery — chanté-rappé, jamais poussé.** Couplets proches du micro, débit
mélodique mais articulé, un peu en arrière du temps. Refrain **pleinement
chanté**, ténor, doublé et harmonisé. Les queues d'ad-libs après les fins de
vers, jamais pendant.

**Le pont, techniquement.** Tout le monde sort sauf le batteur. Voix nue, sans
réverbération ajoutée — seulement les micros d'ambiance, donc on entend la
pièce. Puis le décompte à voix haute et **le groupe revient entier sur le
premier temps**, sans fill. Le fill trahirait le montage ; ici il n'y a pas de
montage, c'est tout l'argument.

**Les imperfections sont une consigne, pas un accident.** `timing imperfections
kept` doit rester dans le prompt même s'il paraît contre-intuitif : sans lui,
Suno lisse tout et le morceau redevient une maquette propre. La fausse note dont
parle le couplet 1 doit être audible dans le résultat.

**Placement stéréo.** Voix lead au centre, sèche, en avant. Harmonies de ténors à
±60 %. Guitare légèrement à gauche, Rhodes à droite, trompette bouchée à droite
en réponse. Batterie et basse au centre, mono. **Les micros d'ambiance sont le
seul élément large et réverbéré** — c'est eux qui donnent la pièce.

**Ratio — 1,45.** Fenêtre équilibre : deux couplets de neuf vers qui tiennent un
propos, trois refrains chantés. C'est la valeur attendue pour ce squelette —
deux couplets, trois refrains, trois post-refrains, un pont.

**Leviers de re-génération.** 213 caractères de marge avec le champ dédié, 58 en
mode repli.
- Batterie qui sonne programmée → `drums played by hand, small timing drift, room mics` (+50). **Ne rentre qu'avec le champ dédié.**
- Trop propre, trop lisse → `keep the imperfections, no editing, one take` (+43).
- Couplets qui se mettent à chanter → `rapped-sung verses, fully sung chorus` (+37).
- Guitare abandonnée après l'intro → `the guitar riff plays in every section` (+38).
- Pas assez de pièce → `room mics wide open, audible space` (+34).
- Décompte absent → `audible count-in from the drummer` (+33).
