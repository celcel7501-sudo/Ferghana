# « Deuxième Salle » — club dansant en deux clips, 108 → 128 BPM

Quatrième morceau long du dossier, et le premier où **les deux clips ne sont pas
au même tempo**. Clip 1 : la salle du bas, afro-club à 108. Clip 2 : la salle du
haut, French house à 128. Le morceau raconte quelqu'un qui monte l'escalier
pendant la chanson — le changement de tempo *est* le récit.

| Clip | Style | Paroles |
|---|---|---|
| Clip 1 — salle du bas, 108 BPM | 848 / 1000 | 3013 / 5000 |
| Clip 2 — salle du haut, 128 BPM | 898 / 1000 | 2253 / 5000 |

Total paroles : **5266 / 10000**. Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,98** — onze sections de hook sur vingt.

---

## 🧪 ANALYSE DU MIX

**Ce morceau enfreint volontairement la règle de raccord — et voici à quelle
condition.** La règle du dossier est claire : le style du clip 2 dérive de celui
du clip 1, **même BPM**, s'en écarter fait entendre la couture
(`l-elite.md`, `jusqu-au-jour.md`, `impeccable.md`). Ici on passe de 108 à 128.

L'exception tient à une seule condition : **on ne peut changer de tempo à travers
une coupe que si la coupe passe par un endroit sans pulsation du tout.** D'où la
section `[Stairwell]` : à la fin du clip 1 la batterie sort au filtre, il ne
reste que la cloche et un bruit de couloir ; le clip 2 ouvre sur cette même
cloche seule, sans batterie, puis le kick à 128 entre. L'oreille n'a aucun
repère rythmique pendant deux ou trois secondes — elle se recale sur ce qui
arrive au lieu de comparer avec ce qui précédait. Sans ce vide, le saut
s'entendrait comme une erreur de montage.

**La persistance devait donc être rythmiquement neutre.** Sur les trois autres
morceaux longs, l'élément persistant était un groove : riff de slap, boucle de
clavinet, chop vocal calé. Aucun de ceux-là ne survit à un changement de tempo.
Il fallait un motif **pitché et rythmiquement simple** : trois notes de cloche.
Elles tiennent à 108 comme à 128, et c'est exactement ce que la règle
« l'élément persistant doit survivre à toutes les ruptures » impose quand la
rupture est un changement de grille.

**Le motif de cloche est aussi le sujet.** Au couplet 2, en bas, il « rentre pas
dans notre rythme » — c'est le son de la salle du haut qui traverse le plafond.
Au clip 2 il devient le lead. La continuité technique et l'image narrative sont
la même chose ; c'est ce qui rend le dispositif lisible sans qu'on ait besoin de
l'expliquer.

**Le refrain doit tenir aux deux tempos, donc pas de note tenue.** Écrit à 108,
rechanté à 128 : toute syllabe longue deviendrait bancale au tempo rapide. Le
hook est donc bâti en syllabes courtes et en questions-réponses de deux mots
(« T'es où ? » → « Deuxième salle ! »), et les deux lignes chantées sont
scandées, pas mélodiques. C'est une contrainte d'écriture imposée par
l'architecture, pas un choix esthétique.

**Deux tags du clip 2 ont été coupés parce qu'ils ne parlaient à personne.**
J'avais écrit `the same motif as the previous section` et `the same voice as
before`. Suno n'entend pas le clip 1 : en Extend, la continuité de voix vient de
l'audio prolongé, pas du prompt. Ces mentions sont des notes pour l'humain, pas
des instructions pour le modèle — 67 caractères récupérés sans rien perdre.
À vérifier systématiquement sur un clip 2 : **tout ce qui référence « avant »
est mort.**

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 1 (848 / 1000)

```
French afro-club banger, warm and mid-tempo. 108 BPM, syncopated afrobeats kick pattern, fast shaker, congas and rim clicks, layered claps, tight percussion loop, no four-on-the-floor. Persistent three-note bell motif throughout. Clean plucked guitar riff, round analog bassline, marimba accents, warm Rhodes chords, brass stabs. Male tenor lead, relaxed melodic sung-rap delivery, crisp diction, catchy hook, panoramic group vocal responses, stacked harmonies, whooping ad-libs. Ultra-wide stereo field, panoramic vocal layering, warm room energy. Ends on a long filtered outro, drums out, bell motif and room noise only. Polished club master, punchy compression, round low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM or trap, no cluttered low end.
```

## 📝 PAROLES — CLIP 1 (3013 / 5000)

```
[Intro: Bell motif and shaker, congas entering, spoken over, no kick yet]
(Instruction: Persistent three-note bell motif throughout)
(parlé, détendu, sourire dans la voix)
Vingt-trois heures. Rez-de-chaussée.
En haut y'a une autre salle. On y va tout à l'heure.

[Hook Teaser: Two lines, lead and crowd, kick drops in, claps enter]
(Call: T'es où ?) Response: [Panoramic Group Vocals: Deuxième salle !]
(Call: On monte ?) Response: [Panoramic Group Vocals: Deuxième salle !]

[Verse 1: Male tenor, relaxed melodic flow, guitar and shaker only, no brass]
En bas c'est chaud, c'est lent, on a le temps,
Les gens se parlent encore, personne crie.
Le barman connaît les prénoms et les commandes,
Il sert avant qu'on demande, c'est un vieux réflexe.
Y'a le gars qui danse tout seul depuis vingt minutes,
Personne le regarde, tout le monde le respecte.
Ma sœur dit qu'en haut c'est mieux, j'ai dit peut-être,
Mais j'ai encore un morceau à finir ici.

[Pre-Chorus: Brass rising, congas doubling, claps stacking, harmonies appear]
Y'a deux basses dans ce bâtiment ce soir,
Une qui roule en bas, une qui frappe en haut.
Choisis ton camp, moi j'ai pas envie de choisir,
Trois, deux, un —

[Chorus: Explosive hook, crowd answering wide, full drums, brass, bell on top]
(Call: T'es où ?) Response: [Panoramic Group Vocals: Deuxième salle !]
(Call: On monte ?) Response: [Panoramic Group Vocals: Deuxième salle !]
En haut ça tape plus fort, en bas ça tape plus long,
Moi je veux les deux — alors je fais l'escalier.

[Post-Chorus: Group unison, bell motif and claps only, congas, brass stab]
(Deuxième salle ! Deuxième salle !)
(Je fais l'escalier, oh !)

[Verse 2: Same tenor, freer phrasing, bass forward, marimba answering]
Y'a un truc qui passe par le plafond depuis tout à l'heure,
Un motif de cloche qui rentre pas dans notre rythme.
En bas on tourne rond, en haut ça monte droit,
Deux manières de tenir la même nuit debout.
Le videur de l'escalier m'a fait un signe du menton,
Il a compris avant moi que j'allais monter.
J'ai fini mon verre, j'ai serré quatre mains,
Et j'ai posé le pied sur la première marche.

[Pre-Chorus: Brass higher, claps doubled, harmonies stacking, riser entering]
Y'a deux basses dans ce bâtiment ce soir,
Une qui roule en bas, une qui frappe en haut.
Choisis ton camp, moi j'ai pas envie de choisir,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, ad-libs hard panned, brass maximum]
(Call: T'es où ?) Response: [Panoramic Group Vocals: Deuxième salle !]
(Call: On monte ?) Response: [Panoramic Group Vocals: Deuxième salle !]
En haut ça tape plus fort, en bas ça tape plus long,
Moi je veux les deux — alors je fais l'escalier.

[Post-Chorus: Group unison, bell motif and claps only, congas, brass stab]
(Deuxième salle ! Deuxième salle !)
(Je fais l'escalier, oh !)

[Stairwell: Drums filter out, bell motif from upstairs bleeding through, steps]
(plus de batterie, bruit de couloir, des pas dans l'escalier)
Première marche.
(la cloche d'en haut passe à travers le plafond, seule)
```

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 2 (898 / 1000)

Seul cas du dossier où le clip 2 **ne dérive pas** du clip 1 sur le tempo. Tout
le reste est conservé : la persistance mot pour mot, la voix, la largeur stéréo,
le bloc d'exclusions.

```
French club banger, filtered French house, 128 BPM. Opens on the bell motif alone with room noise, no drums, then a four-on-the-floor kick enters, heavy sidechain pumping on every kick, crisp offbeat hi-hats, layered claps, 16-bar white-noise riser. Persistent three-note bell motif throughout, now carrying the lead. Filtered disco-string sample, round analog Moog-style bassline with portamento glides, plucked synth stabs, resonant low-pass filter sweeps. Male tenor lead, higher and freer, explosive anthemic hook, stacked harmonies, panoramic group vocal responses, whooping ad-libs. Ultra-wide stereo field, panoramic vocal layering, glossy modern sheen. Polished radio club master, punchy compression, tight round low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM or trap, no cluttered low end.
```

## 📝 PAROLES — CLIP 2 (2253 / 5000)

```
[Stairwell: Bell motif alone, no drums, room noise, footsteps, door handle]
(Instruction: Persistent three-note bell motif throughout)
(parlé, essoufflé, la porte s'ouvre)
Dernière marche.
Et là, la porte s'est ouverte.

[Build: 16 bars, four-on-the-floor kick enters, white-noise riser, snare roll]
(Call: T'es où ?) Response: [Panoramic Group Vocals: Deuxième salle !]
(Call: T'es où ?) Response: [Panoramic Group Vocals: Deuxième salle !]
Trois, deux, un —

[Drop: Everything in at once, hard sidechain, bell motif as the lead, claps]
(Deuxième salle ! Deuxième salle !)
(Deuxième salle ! Deuxième salle !)

[Chorus: Explosive anthemic hook at the new tempo, crowd answering wide]
(Call: T'es où ?) Response: [Panoramic Group Vocals: Deuxième salle !]
(Call: On monte ?) Response: [Panoramic Group Vocals: Deuxième salle !]
En haut ça tape plus fort, en bas ça tape plus long,
Moi je veux les deux — alors je fais l'escalier.

[Verse 3: Same voice higher and freer, drums stripped to kick and claps]
En haut y'a plus de conversation, que des décisions,
Les mains en l'air, les yeux fermés, le sol qui bouge.
J'ai reconnu trois personnes d'en bas, montées avant moi,
On s'est rien dit, on savait déjà.
Et le motif de cloche que j'entendais à travers le plafond,
Maintenant il est sur moi, et il est énorme.

[Build: Riser at maximum, claps doubled, filter opening slowly, harmonies wide]
Y'a deux basses dans ce bâtiment ce soir,
Une qui roule en bas, une qui frappe en haut.
Choisis ton camp, moi j'ai pas envie de choisir,
Trois, deux, un —

[Final Chorus: All voices, widest field, gospel-style stacking, drums maximum]
(Call: T'es où ?) Response: [Panoramic Group Vocals: Deuxième salle !]
(Call: On monte ?) Response: [Panoramic Group Vocals: Deuxième salle !]
En haut ça tape plus fort, en bas ça tape plus long,
Moi je veux les deux — alors je fais l'escalier.

[Final Drop: Bell motif doubled, whole room, percussion on top, sidechain hard]
(Deuxième salle ! Deuxième salle !)
(Deuxième salle ! Deuxième salle !)
(Je fais l'escalier, oh !)
(Je fais l'escalier, oh !)

[Outro: Filter closing, kick alone, bell motif fading, spoken, room noise]
(parlé, essoufflé, en riant)
Cinq heures. Ils ferment en haut.
En bas ça joue encore. Je redescends.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 108 puis 128, et rien entre les deux.** Ne pas tenter d'accélérer
progressivement : un ralenti/accéléré de bande sur trois secondes s'entend
toujours comme un défaut. Le saut est net, et il est couvert par l'absence
totale de pulsation dans l'escalier. C'est un montage, pas une transition.

**Tonalité — La mineur des deux côtés.** Obligatoire ici : le tempo change
déjà, si la tonalité bougeait aussi, la cloche ne serait plus reconnaissable et
tout le dispositif tomberait. Le motif est exactement le même — trois notes,
même hauteur, même intervalle. Seule sa place rythmique change.

**Le motif de cloche, en pratique.** En bas il joue **une note par mesure**, en
retrait, comme un son qui traverse un plafond. En haut il joue **les trois notes
par mesure**, en avant, et il porte le drop. Même matériau, densité multipliée
par trois : c'est ça, monter d'un étage.

**Delivery.** Clip 1 : ténor détendu, chanté-rappé, posé sur le temps, débit de
conversation. Clip 2 : même voix, plus haute d'une tierce, plus courte, plus
lancée — moins de mots par mesure, plus d'air. Le couplet 3 fait six lignes là
où les deux premiers en font huit : à 128 BPM, la même densité de texte
étoufferait le morceau.

**Placement stéréo.** Clip 1 : percussions larges, guitare à gauche, cuivres à
droite, voix au centre, cloche **au fond et étroite** (c'est un son lointain).
Clip 2 : cloche large et devant, cordes filtrées très ouvertes, kick et basse
au centre. Le passage d'un son étroit et lointain à un son large et proche fait
autant pour la sensation de montée que le changement de tempo.

**Le refrain est identique à l'écrit** sur les deux clips — c'est ce qui prouve
que c'est le même morceau malgré le changement de grille. Variation par les
balises seulement.

**Ratio hook / couplets — 1,98**, onze sections de hook sur vingt. Sous-évalué
comme sur tous les morceaux club du dossier : le drop et la montée de seize
mesures ne coûtent presque rien en caractères.

**Leviers de re-génération.** Style : 152 de marge (clip 1), 102 (clip 2).
- Le saut de tempo s'entend → allonger le vide : `four bars of room noise with
  no beat before the kick` (+48) en tête du clip 2.
- Cloche pas reconnaissable d'un clip à l'autre → écrire la même formule
  exacte dans les deux styles, et n'ajouter `now carrying the lead` qu'au
  clip 2 (c'est déjà le cas).
- Clip 1 trop mou → `harder afrobeats kick, tighter percussion loop` (+45).
- Clip 2 pas assez euphorique → `euphoric filtered strings on the drop` (+38).
- Voix trop chargée en haut → retirer `whooping ad-libs` (−18) du clip 2.
