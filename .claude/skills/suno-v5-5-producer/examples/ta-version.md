# « Ta Version » — R&B ADN Kore 110 BPM, deux clips, deux voix

Sixième morceau long du dossier, et sixième raison de scinder : **les deux clips
sont les deux versions d'une même histoire**. Clip 1, il raconte. Clip 2, elle
répond. Le refrain est identique à l'écrit des deux côtés — et il ne veut pas
dire la même chose.

| Clip | Style | Paroles |
|---|---|---|
| Clip 1 — sa version à lui | 912 / 1000 | 3124 / 5000 |
| Clip 2 — sa version à elle | 919 / 1000 | 2482 / 5000 |

Total paroles : **5606 / 10000**. Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,78** — douze sections de hook sur vingt et une.

---

## 🧪 ANALYSE DU MIX

**La vraie raison de scinder est une limite du format, pas un effet de récit.**
Le champ de style ne décrit bien **qu'une seule voix dominante**. Écrire
`male tenor lead` et `powerful female alto lead` dans le même prompt donne l'un
de ces deux résultats : Suno moyenne les deux timbres, ou il alterne au hasard
d'une section à l'autre. Les duos précédents du dossier
(`il-est-a-moi.md`, `elle-assure-grave.md`, `layali.md`, `ca-repart.md`) vivent
avec ce défaut parce qu'ils alternent dans un seul clip.

Ici chaque clip a un prompt où sa chanteuse est **la seule** :
`Male tenor lead only, one single lead voice` d'un côté,
`Powerful female alto lead, one single lead voice` de l'autre. Deux prompts, deux
timbres nets. C'est la première fois du dossier qu'un duo est réglé au lieu
d'être subi.

**L'exception est écrite, et elle arrive tard.** `Male and female voices sing
together only on the bridge and the final chorus` — dans le style du clip 2
uniquement. Ça marche parce qu'à ce stade l'extension a déjà installé le timbre
masculin dans l'audio : le modèle n'a pas à l'inventer, il le prolonge. Les deux
voix ne se rencontrent qu'au dernier tiers, ce qui fait de la rencontre un
événement.

**Le même refrain, trois sens.** Dans sa bouche à lui, « c'est ta version ou la
mienne » est une défense. Dans sa bouche à elle, c'est une accusation. Chanté à
l'unisson à la fin, c'est un accord. Zéro réécriture — la règle du refrain
identique à l'écrit tient d'un bout à l'autre, et c'est l'attribution qui fait
tout le travail. Même dispositif que sur `ne-raccroche-pas-secteur-a.md`,
appliqué cette fois **à travers la coupe**.

**La persistance devait être neutre aux deux voix.** Le qanun — cithare pincée,
brillante, sans genre vocal — traverse les deux clips, les deux points de vue et
la coupe. C'est lui qui fait entendre un seul disque là où il y a deux
générations et deux chanteurs. Un instrument à connotation masculine ou
féminine aurait pris parti.

**110 BPM swingué : R&B d'abord, maghrébin ensuite.** Le brief dit R&B, donc la
matière harmonique est du R&B — Rhodes, harmonies empilées, runs — et l'ADN Kore
passe par la **rythmique** : swing MPC dur, claps et claquements de doigts sur
le contretemps, fills de darbuka, pas de four-on-the-floor. Inverser les deux
donnerait du raï avec des harmonies collées dessus.

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 1 (912 / 1000)

```
French R&B with a Maghrebi club edge, 110 BPM hard swung MPC drums, layered claps and finger snaps on the backbeat, darbuka fills, tambourine, no four-on-the-floor. Persistent plucked qanun motif throughout. Warm Rhodes chords, round analog bassline with portamento glides, hijaz scale strings, muted guitar riff, brass stabs. Male tenor lead only, one single lead voice, melodic sung-rap delivery, close-mic on the verses, full and doubled on the chorus, lush stacked harmonies, panoramic group vocal responses. Ends on a long transition, drums thinning out, lead vocal filtering away, qanun motif left alone. Ultra-wide stereo field, panoramic vocal layering, warm hall energy. Polished radio master, punchy compression, tight round low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM or trap, no cluttered low end.
```

## 📝 PAROLES — CLIP 1 (3124 / 5000)

```
[Intro: Qanun motif alone, tambourine entering, spoken low, no drums yet]
(Instruction: Persistent plucked qanun motif throughout)
(parlé, bas, voix d'homme, très proche du micro)
On m'a demandé de raconter.
Alors je raconte. Ma version.

[Hook Teaser: Two lines, male lead and group, drums drop in, claps enter]
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]

[Verse 1: Male tenor, close-mic melodic sung-rap, qanun and claps, no strings]
Tu dis que j'étais jamais là, c'est vrai, j'étais dehors,
Mais j'étais dehors pour nous, pas pour fuir quelque chose.
J'ai pris les heures que personne voulait, les nuits, les dimanches,
Et j'ai pas su te dire pourquoi, j'ai juste dit je bosse.
Tu voyais un homme qui partait, moi je comptais des mois,
Chaque mois c'était un mur de moins entre nous et la suite.
J'ai jamais su parler de ce qui fait mal quand ça marche,
Alors j'ai rien dit, et le silence a fait le reste.

[Pre-Chorus: Strings rising, darbuka doubling, claps stacking, harmonies enter]
On a les mêmes dates et pas les mêmes souvenirs,
Le même appartement et pas la même adresse.
Pose ta version à côté de la mienne,
Trois, deux, un —

[Chorus: Male lead full and doubled, group answering wide, brass, strings]
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
On a vécu la même histoire et on raconte pas pareil,
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
Y'en a une des deux qui ment — et c'est peut-être les deux.

[Post-Chorus: Group unison, qanun and claps only, darbuka roll, one brass stab]
(Ta version... la mienne...)
(On raconte pas pareil, oh !)

[Verse 2: Same tenor, flow tightening, bass forward, guitar riff answering]
On s'est disputés sur des assiettes, jamais sur le vrai sujet,
C'est comme ça qu'on tient dix ans sans jamais rien régler.
Je t'ai vue apprendre à pas m'attendre, ça m'a soulagé,
Et ça, c'est la phrase que j'ai jamais osé dire à voix haute.
Tu m'as demandé si je regrettais, j'ai répondu trop vite,
La vérité mettait quatre secondes de plus à sortir.
Alors la voilà, avec quatre ans de retard :
J'aurais dû rester un soir de plus, une fois, une seule.

[Pre-Chorus: Strings higher, claps doubled, harmonies stacking, guitar rising]
On a les mêmes dates et pas les mêmes souvenirs,
Le même appartement et pas la même adresse.
Pose ta version à côté de la mienne,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, ad-libs hard panned, brass doubled]
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
On a vécu la même histoire et on raconte pas pareil,
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
Y'en a une des deux qui ment — et c'est peut-être les deux.

[Post-Chorus: Group unison, qanun and claps only, darbuka roll, one brass stab]
(Ta version... la mienne...)
(On raconte pas pareil, oh !)

[Transition: Drums thinning, male lead filtering away, qanun motif left alone]
(la voix d'homme s'éloigne, il ne reste que le qanun)
Voilà. C'était ma version.
```

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 2 (919 / 1000)

Dérivé du clip 1 : même genre, même BPM, même rythmique, même persistance, même
instrumentation, même bloc d'exclusions. **Seule la ligne de voix change** — et
c'est tout l'objet de la scission.

```
French R&B with a Maghrebi club edge, 110 BPM hard swung MPC drums, layered claps and finger snaps on the backbeat, darbuka fills, no four-on-the-floor. Persistent plucked qanun motif throughout. Warm Rhodes chords, round analog bassline with portamento glides, hijaz scale strings, muted guitar riff, brass stabs. Opens on the qanun motif alone with a female voice entering dry. Powerful female alto lead, one single lead voice, silky on the verses, full and doubled on the chorus, complex vocal runs, lush stacked harmonies, panoramic group vocal responses. Male and female voices sing together only on the bridge and the final chorus. Ultra-wide stereo field, panoramic vocal layering, warm hall energy. Polished radio master, tight round low end, club loudness. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM or trap, no cluttered low end.
```

## 📝 PAROLES — CLIP 2 (2482 / 5000)

```
[Answer: Qanun motif alone, female voice entering dry, no drums, close-mic]
(Instruction: Persistent plucked qanun motif throughout)
(voix de femme, nue, sans réverbération, très proche)
Maintenant écoute la mienne.

[Verse 3: Female alto lead, silky close-mic, drums enter, qanun and claps]
Moi j'ai pas compté les mois, j'ai compté les assiettes,
Celles que j'ai mises sur la table pour quelqu'un qui rentrait pas.
Tu dis que t'étais dehors pour nous, je veux bien te croire,
Mais le mot nous, tu l'as jamais conjugué au présent.
J'ai appris à pas t'attendre, tu appelles ça un soulagement,
Moi j'appelle ça le jour où j'ai arrêté d'espérer.
Et si tu veux savoir ce que j'aurais voulu entendre,
C'est pas une excuse — c'est juste que tu me le demandes.

[Pre-Chorus: Female lead, strings rising, claps stacking, harmonies entering]
On a les mêmes dates et pas les mêmes souvenirs,
Le même appartement et pas la même adresse.
Pose ta version à côté de la mienne,
Trois, deux, un —

[Chorus: Female lead full and doubled, group answering wide, brass, strings]
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
On a vécu la même histoire et on raconte pas pareil,
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
Y'en a une des deux qui ment — et c'est peut-être les deux.

[Post-Chorus: Group unison, qanun and claps only, darbuka roll, one brass stab]
(Ta version... la mienne...)
(On raconte pas pareil, oh !)

[Bridge: Both voices together for the first time, drums out, one guitar, bare]
(les deux voix ensemble, pour la première fois, sans batterie)
On raconte pas pareil.
On raconte pas pareil.
(voix nues, harmonies empilées, une seule guitare)
Mais on raconte la même chose.
[Silence: one bar, one brass stab, full drums return]

[Final Chorus: Both leads in unison, widest field, strings maximum, brass full]
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
On a vécu la même histoire et on raconte pas pareil,
(Call: C'est ta version) Response: [Panoramic Group Vocals: ou la mienne ?]
Y'en a une des deux qui ment — et c'est peut-être les deux.

[Post-Chorus: Whole room, both voices, double-time claps, qanun on top]
(Ta version... la mienne...)
(On raconte pas pareil, oh !)
(Ta version... la mienne...)
(On raconte pas pareil, oh !)

[Outro: Drums out, qanun motif alone, two voices speaking, hard stop]
(voix d'homme, calme) Bon.
(voix de femme, calme) Bon.
(les deux) On garde les deux.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 110, identique sur les deux clips, swing marqué.** La règle de raccord
est respectée en tout point sauf la voix : même tempo, même grille, même
persistance, même instrumentation. C'est le contraire de `deuxieme-salle.md`
(tout identique sauf le tempo) et de `youyous.md` (tout identique sauf
l'instrumentation). Trois morceaux, trois variables — jamais deux à la fois.

**Tonalité — Ré mineur.** Le motif de qanun tient sur deux mesures, pincé, sans
vibrato. Les cordes hijaz n'entrent qu'aux pré-refrains, des deux côtés de la
coupe : c'est un repère de structure autant qu'une couleur, et il aide l'oreille
à reconnaître le même morceau après le changement de chanteur.

**Delivery — deux personnes qui ne racontent pas au même endroit du temps.**
Lui : chanté-rappé, proche du micro, légèrement **derrière** le temps — quelqu'un
qui se justifie a toujours un temps de retard. Elle : chant franc, **sur** le
temps, sans hésitation — elle a préparé sa réponse depuis longtemps. Ce décalage
rythmique dit le rapport de force mieux que n'importe quelle ligne de texte.

**Le point de coupe.** Fin du clip 1 : batterie qui s'amincit, voix masculine
filtrée qui s'éloigne, qanun seul, une phrase parlée. Début du clip 2 : le même
qanun, une voix féminine sèche, quatre mots. Le raccord passe par le seul
élément commun aux deux — et par un vide vocal, pas rythmique.

**Placement stéréo.** Voix masculine légèrement à gauche (≈ 20 %), voix féminine
à droite. Sur le pont et le refrain final, **les deux au centre, superposées** :
c'est la seule fois du morceau où elles occupent la même place, et c'est ce que
la fin raconte. Qanun légèrement à gauche, guitare à droite, réponses de groupe
à 100 % des deux côtés.

**Le refrain est identique à l'écrit** aux cinq passages, sur les deux clips.
Toute la variation vient de qui le chante et des balises.

**Ratio hook / couplets — 1,78**, douze sections sur vingt et une, 1618
caractères de couplet réel. Équilibre : le refrain se retient, les couplets
tiennent un propos. C'est le régime attendu d'un R&B narratif à deux voix.

**Leviers de re-génération.** Style : 88 de marge (clip 1), 81 (clip 2).
- Suno mélange les timbres → durcir sur les deux clips : `one lead singer only
  in this section` (+38).
- Les deux voix arrivent trop tôt au clip 2 → `no male voice until the bridge`
  (+30).
- Raccord audible → vérifier que BPM, persistance et ligne de basse sont
  **identiques mot pour mot** dans les deux styles.
- Trop raï, pas assez R&B → `R&B harmony first, Maghrebi rhythm second` (+41).
- Voix féminine trop douce → `powerful raspy female alto` (+27).
