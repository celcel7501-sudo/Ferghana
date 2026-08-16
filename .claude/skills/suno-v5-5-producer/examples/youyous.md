# « Youyous » — club oriental ADN Rim'K, deux clips, 100 BPM

Cinquième morceau long du dossier. Clip 1 : le morceau de club, 808 et darbuka.
Clip 2 : **la machine s'arrête et la salle prend le relais** — cercle de
derbouka, mains, youyous, solo de mandole, puis le beat revient pour le dernier
refrain.

| Clip | Style | Paroles |
|---|---|---|
| Clip 1 — le morceau de club | 851 / 1000 | 3063 / 5000 |
| Clip 2 — le cercle de percussions | 909 / 1000 | 1696 / 5000 |

Total paroles : **4759 / 10000**. Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,90** — onze sections de hook sur dix-huit.

---

## 🧪 ANALYSE DU MIX

**La cinquième raison de scinder un morceau, et c'est une raison
d'instrumentation.** Les quatre précédentes : le texte ne rentre pas
(`l-elite.md`), la version radio et la section DJ (`jusqu-au-jour.md`), le
breakdown et le workout de basse d'un 12" (`impeccable.md`), le changement de
tempo (`deuxieme-salle.md`). Ici c'est autre chose : au milieu du morceau, **la
boîte à rythmes et la 808 sortent complètement** et la musique passe à des
percussions jouées à la main. Ce n'est plus une variation d'arrangement, c'est
un autre orchestre — donc un autre prompt de style. Le clip 2 existe parce que
la moitié des instruments du clip 1 n'y jouent plus.

**Même BPM des deux côtés, contrairement au morceau précédent.** 100 BPM partout,
la règle de raccord est respectée à la lettre : même genre, même persistance,
même tonalité, même voix. Ce qui change, c'est **qui joue**. C'est le contrepoint
exact de `deuxieme-salle.md`, où tout restait sauf le tempo. Les deux morceaux
délimitent ensemble ce qu'on peut se permettre de casser à un raccord : le
tempo **ou** l'instrumentation, jamais les deux.

**La persistance est le mandole, et elle n'avait pas le choix.** Règle
maintenant établie : l'élément persistant doit survivre à toutes les ruptures du
morceau. Ici la rupture supprime la boîte à rythmes, la 808 et les cordes — il
ne reste que les peaux, les mains et **une corde pincée**. Le mandole est donc le
seul candidat possible ; il tient le riff sous le club, puis il prend un solo de
seize mesures au milieu du cercle.

**Le hook nomme sa propre fin.** « On a commencé comment ? — Tranquille ! / Et ça
finit comment ? — Youyous ! » : le refrain annonce la structure du morceau avant
qu'elle arrive, et la section youyous du clip 2 est la réponse littérale. La
ligne chantée qui suit — « On est venus en boîte, on repart en mariage » — est
le titre du morceau en une phrase. Quand le hook décrit le plan de production,
l'auditeur comprend le clip 2 sans qu'on ait rien à expliquer.

**L'ADN Rim'K, traduit.** Ajouté à `references/producer-tag-translation.md` et à
`ARTIST_DNA` : `Maghrebi-tinged French club rap`, `fast darbuka and derbouka
rolls`, `bendir frame drum`, `mandole and synth-oud lead melody`, `gasba flute
accents`, `hijaz scale strings`, `deep 808 sub bass with long pitch glides`,
`chanted crowd hook with ululation ad-libs`. Aucun nom propre dans le champ de
style, comme toujours.

Détail d'outillage : `"Rim'K"`, `"Rim K"` et `"rim-k"` se normalisent tous en
`rim_k`, mais `"RIMK"` donne `rimk`. Les deux clés sont enregistrées — sinon
l'outil lève sur une orthographe pourtant valide.

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 1 (851 / 1000)

```
Maghrebi French club rap banger, 100 BPM. Deep 808 sub bass with long pitch glides, hard kick and clap pattern, fast darbuka and derbouka rolls, bendir frame drum, tambourine, layered claps. Persistent mandole riff throughout. Synth-oud lead melody, gasba flute accents, hijaz scale strings, dark brass stabs. Male tenor lead, confident chanted rap delivery, crisp diction, rai-inflected sung refrain, panoramic group vocal responses, stacked harmonies, ululation ad-libs. Ultra-wide stereo field, panoramic vocal layering, big hall energy. Ends on a long transition, drum machine filtering out, a live darbuka roll taking over. Polished club master, punchy compression, deep tight low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM, no cluttered low end.
```

## 📝 PAROLES — CLIP 1 (3063 / 5000)

```
[Intro: Mandole riff alone, bendir entering, spoken over, no kick, no 808]
(Instruction: Persistent mandole riff throughout)
(parlé, calme, voix proche)
Salle des fêtes, sortie d'autoroute.
On a réservé jusqu'à six heures. On finira plus tard.

[Hook Teaser: Two lines, lead and crowd, 808 drops in, darbuka roll]
(Call: On a commencé comment ?) Response: [Panoramic Group Vocals: Tranquille !]
(Call: Et ça finit comment ?) Response: [Panoramic Group Vocals: Youyous !]

[Verse 1: Male tenor, confident chanted rap, mandole and claps, no strings]
Salle louée à l'année, parking plein dès neuf heures,
Y'a les grands en costume et les petits en survêt.
On a mis le même son que dans la voiture de mon frère,
Celui qui a usé les enceintes et jamais nos oreilles.
Ma mère a fait à manger pour trois fois trop de monde,
Elle savait très bien qui allait passer sans prévenir.
Ici on invite pas, on prévient, et les gens viennent,
Et ceux qui viennent pas, on leur garde une assiette.

[Pre-Chorus: Hijaz strings rising, darbuka doubling, claps stacking, harmonies]
Regarde l'heure, regarde la salle, compare,
Y'a plus personne assis, même les vestes sont debout.
Le DJ a la main sur le morceau d'après,
Trois, deux, un —

[Chorus: Explosive hook, crowd answering wide, 808 full, brass, mandole on top]
(Call: On a commencé comment ?) Response: [Panoramic Group Vocals: Tranquille !]
(Call: Et ça finit comment ?) Response: [Panoramic Group Vocals: Youyous !]
Deux heures du matin, la salle change de camp,
On est venus en boîte, on repart en mariage.

[Post-Chorus: Group unison, mandole and claps only, darbuka roll, one brass stab]
(You-you-you ! You-you-you !)
(On repart en mariage, oh !)

[Verse 2: Same tenor, freer and faster, 808 forward, gasba flute answering]
Minuit, le DJ tient la salle depuis deux heures,
Il connaît le moment exact où il faut changer de monde.
Il lâche une derbouka, la salle a compris tout de suite,
Les téléphones se lèvent, les tantines se lèvent avant.
Y'a mon oncle qui danse comme en soixante-dix-huit,
Et personne ose lui dire que c'est plus la même époque.
On a deux pays dans les jambes et un seul dans les papiers,
Ce soir on danse avec les deux, et personne compte.

[Pre-Chorus: Strings higher, claps doubled, flute rising, harmonies stacking]
Regarde l'heure, regarde la salle, compare,
Y'a plus personne assis, même les vestes sont debout.
Le DJ a la main sur le morceau d'après,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, ad-libs hard panned, brass maximum]
(Call: On a commencé comment ?) Response: [Panoramic Group Vocals: Tranquille !]
(Call: Et ça finit comment ?) Response: [Panoramic Group Vocals: Youyous !]
Deux heures du matin, la salle change de camp,
On est venus en boîte, on repart en mariage.

[Post-Chorus: Group unison, mandole and claps only, darbuka roll, one brass stab]
(You-you-you ! You-you-you !)
(On repart en mariage, oh !)

[Transition: 808 and kick filter out, live darbuka roll taking over, crowd]
(la machine s'en va, les mains prennent le relais)
Coupe le son. Laisse les mains.
```

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 2 (909 / 1000)

Dérivé du clip 1 : même genre, même BPM, même persistance, même voix, même bloc
d'exclusions. Seule la phrase d'architecture change — et elle décrit une
**sortie d'instruments**, pas une entrée.

```
Maghrebi French club rap banger, live percussion section, 100 BPM. Opens with no drum machine and no 808: a live darbuka and derbouka circle, bendir frame drums, hand claps, tambourine, ululations and crowd noise, then a 16-bar mandole solo, then the kick and the 808 return for the final hook. Persistent mandole riff throughout. Synth-oud lead melody, gasba flute accents, hijaz scale strings, dark brass stabs, deep 808 sub bass with long pitch glides. Male tenor lead, confident chanted rap delivery, crisp diction, rai-inflected sung refrain, panoramic group vocal responses, stacked harmonies, ululation ad-libs. Ultra-wide stereo field, panoramic vocal layering, big hall energy. Polished club master, punchy compression, deep tight low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM, no cluttered low end.
```

## 📝 PAROLES — CLIP 2 (1696 / 5000)

```
[Derbouka Circle: No drum machine, no 808, live percussion, claps, ululations]
(Instruction: Persistent mandole riff throughout)
(percussions à mains nues, la salle en cercle, youyous)
(You-you-you ! You-you-you !)
(parlé, au milieu du cercle, essoufflé)
Voilà. Là on y est.

[Mandole Solo: 16 bars, live percussion under it, claps on the offbeat, no vocals]

[Verse 3: Male tenor, close-mic, live percussion only, no kick, no 808]
Trois heures, plus de basse, que des mains et des peaux,
La derbouka a pris le pouvoir, le DJ a lâché l'affaire.
Ma cousine lance le premier youyou, le reste suit,
Et le plafond de la salle a jamais entendu ça.
On rallume le son juste pour la sortie,
Mais tout le monde sait que le vrai morceau, c'était celui-là.

[Pre-Chorus: Strings entering, kick creeping back, claps doubled, harmonies wide]
Regarde l'heure, regarde la salle, compare,
Y'a plus personne assis, même les vestes sont debout.
Le DJ a la main sur le morceau d'après,
Trois, deux, un —

[Final Chorus: 808 and kick return at full, all voices, widest field, brass max]
(Call: On a commencé comment ?) Response: [Panoramic Group Vocals: Tranquille !]
(Call: Et ça finit comment ?) Response: [Panoramic Group Vocals: Youyous !]
Deux heures du matin, la salle change de camp,
On est venus en boîte, on repart en mariage.

[Final Post-Chorus: Whole room, darbuka and 808 together, brass, mandole doubled]
(You-you-you ! You-you-you !)
(On repart en mariage, oh !)
(You-you-you ! You-you-you !)
(On repart en mariage, oh !)

[Outro: 808 cuts, mandole and one darbuka left, spoken, laughter, hard stop]
(parlé, calme, en riant)
Six heures. Le gérant veut ses clés.
Il attend la fin du morceau, lui aussi.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 100, identique sur les deux clips.** C'est le tempo qui permet à la
darbuka de rouler en doubles-croches sans devenir illisible, et au rap de rester
posé. Le cercle de percussions du clip 2 est **au même tempo** que le club : c'est
ce qui permet au kick de revenir sans qu'on ait à compter.

**Tonalité — Ré hijaz** (seconde mineure, tierce majeure). C'est l'échelle, pas
juste une couleur : le mandole, les cordes et la flûte gasba jouent tous dedans,
et la 808 tient la fondamentale. Le solo de mandole du clip 2 reste dans la même
échelle — un solo qui sortirait du hijaz sonnerait comme une pièce rapportée.

**Delivery.** Couplets : ténor assuré, scandé, articulé, posé sur le temps —
c'est du rap, pas du chant. Refrain : chanté, inflexion raï sur les fins de
ligne. Youyous : vrais ululements, plusieurs voix féminines, **pas de doublage
studio** — c'est une foule qu'on veut entendre.

**La rupture, en pratique.** Fin du clip 1 : la 808 et le kick sortent au filtre,
un roulement de darbuka prend le relais, une seule phrase parlée. Début du
clip 2 : plus aucune machine. La règle est la même que sur `deuxieme-salle.md` —
le raccord passe par un moment où l'oreille n'a plus de repère machine. La
différence, c'est qu'ici la pulsation ne s'arrête pas : ce sont les mains qui la
tiennent.

**Placement stéréo.** Clip 1 : 808 et kick au centre mono, darbuka large,
mandole à gauche, flûte à droite, voix au centre. Clip 2 : percussions réparties
**en cercle** — chaque tambour à une position différente, de −80 % à +80 %,
et les youyous encore plus larges. C'est ce qui fait entendre une salle plutôt
qu'une piste de percussions.

**Le refrain est identique à l'écrit** aux trois passages, sur les deux clips.
Variation par les balises seules.

**Ratio hook / couplets — 1,90**, onze sections sur dix-huit. Le solo de mandole
et le cercle de derbouka pèsent presque une minute pour à peu près rien en
caractères : même biais que sur tous les morceaux longs du dossier.

**Leviers de re-génération.** Style : 149 de marge (clip 1), 91 (clip 2).
- Percussions du clip 2 trop propres → `raw live hand percussion, room mics,
  crowd close by` (+48).
- Mandole pas assez présent → `mandole riff high in the mix` (+30).
- 808 qui revient trop tôt → `no 808 until the final chorus` (+31) dans le
  style du clip 2.
- Refrain pas assez chanté → `strong rai-inflected sung refrain` (+35).
- Youyous absents → les déplacer dans le champ **Exclude Styles** est inutile ;
  les renforcer plutôt avec `female ululations high in the mix` (+35).
