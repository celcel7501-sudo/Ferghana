# « Pas D'Photos » — amapiano × plume Ninho, version club, 112 BPM

Premier morceau du dossier écrit comme un **outil de DJ** et non comme une
chanson. Il produit trois règles neuves : ce que vaut le mot *remix* dans un
prompt, une troisième forme de fusion d'ADN, et le budget en mesures.

| Champ | Mesure |
|---|---|
| Style seul (bloc dans *Exclude Styles*) | **789 / 1000** — marge 211 |
| Style + bloc recollé (mode repli) | **945 / 1000** — marge 55 |
| Paroles | **2821 / 5000** — marge 2179 |

Ratio hook / couplets : **1,24 au texte**, **3,5 en mesures**. Durée calculée :
**104 mesures = 3 min 43**.

---

## 🧪 ANALYSE DU MIX

**`remix` est un mot mort dans le champ de style.** Suno n'a pas entendu
d'original — exactement comme il n'entend pas le clip 1 quand on l'étend
(`references/field-limits.md`). Écrire `club remix version` coûte des caractères
et ne produit rien.

Ce que le mot veut dire concrètement, c'est un **jeu de bords** : le disque doit
pouvoir être mixé dedans et dehors. Ça s'écrit en clair :

```
Long DJ intro on one loop, long instrumental plateaus, one subtraction, long percussive outro, no build-up risers.
```

Et côté paroles, les bords sont des sections à part entière, avec leur compte de
mesures : `[DJ Intro: 16 bars, shaker, rim clicks and log drum on one loop, no
vocals]` et `[DJ Outro: 12 bars…]`, fermé par
`[End: The loop keeps going, no fade, hard stop on the downbeat]` — un fondu
rendrait le disque inmixable, c'est précisément ce qu'on ne veut pas.

**Troisième forme de fusion d'ADN : par section.** Le dossier en connaissait
deux :

| Forme | Quand | Exemple |
|---|---|---|
| Un ADN mène | Les ADN portent des choses différentes | La plupart des morceaux |
| Répartition par couches | Deux écoles se disputent une couche | `je-te-le-dis-une-fois.md` |
| **Répartition par sections** | **Deux écoles veulent la même couche à des densités incompatibles** | **ce morceau** |

Ici les deux ADN veulent la **voix**. La plume Ninho est dense, mélodique,
écrite ; le chant amapiano fait trois mots. Aucune répartition par couches n'est
possible — c'est la même couche. La sortie est de **découper par section** :

- **Couplets = Ninho.** Huit vers denses, chanté-rappé, images, rimes riches.
- **Refrain = amapiano.** Quatre lignes, trois syllabes chacune, zéro image.

Et le contraste devient l'argument du morceau : après huit vers qui expliquent,
le refrain n'explique plus rien. C'est le même arbitrage plume / refrain que
dans `references/plume-et-flow.md`, poussé à son extrême.

**Le refrain répond au dernier vers du couplet.** Le couplet 2 finit sur
« Le respect, ça se voit pas sur une photo » — et le refrain enchaîne sur
`Pas d'photos`. Le chant n'est pas posé à côté du texte, il en est la
conclusion. C'est ce qui empêche un hook de trois mots de sonner comme un
bouche-trou.

**Le budget en mesures : les bords se paient sur la chanson.** Un intro DJ de
16 mesures et un outro de 12 coûtent **28 mesures**, soit une minute pleine à
112 BPM. Elles ne s'ajoutent pas au morceau — elles se **retranchent**. D'où le
deuxième plateau raccourci à 8 mesures et le breakdown à 4.

| Section | Mesures | Durée |
|---|---|---|
| DJ Intro | 16 | 34 s |
| Couplet 1 | 8 | 17 s |
| Pré-refrain | 4 | 9 s |
| Refrain | 8 | 17 s |
| Plateau 1 | 16 | 34 s |
| Couplet 2 | 8 | 17 s |
| Pré-refrain | 4 | 9 s |
| Refrain | 8 | 17 s |
| Plateau 2 | **8** | 17 s |
| Breakdown | **4** | 9 s |
| Refrain final | 8 | 17 s |
| DJ Outro | 12 | 26 s |
| **Total** | **104** | **3 min 43** |

À 112 BPM une mesure vaut `4 × 60 ÷ 112 = 2,14 s`. **On budgète avant d'écrire
une ligne**, sinon les bords poussent le dernier refrain hors du morceau.

**Le ratio se trompe encore plus fort qu'au morceau précédent.** 1,24 au texte,
3,5 en mesures : un facteur **2,8**. Sur `doucement.md` le facteur était de 2.
Plus les bords instrumentaux sont longs, plus le ratio texte ment — il n'a
simplement rien à compter.

---

## 🎛️ STYLE PROMPT — 789 / 1000 caractères

```
Amapiano and French melodic rap fusion, 112 BPM, hypnotic club energy. Deep pitched log drum bass sliding on the three-three-two pattern, wide swung shuffle, crisp shakers, rim clicks, shekere fills, open hats. Persistent shaker thread throughout, never stopping, still there when the log drum is out. Warm jazzy piano chords, dark synth pad, muted plucked guitar line, low chanted vocal sample used as percussion. Male tenor lead, melodic rap-singing on the verses, dense and slightly behind the beat, melodic ad-lib tails, short chanted hook, layered group responses. Long DJ intro on one loop, long instrumental plateaus, one subtraction, long percussive outro, no build-up risers. Ultra-wide stereo field, panoramic vocal layering. Warm club master, deep round sub, preserved dynamics.
```

---

## 🚫 BLOC D'EXCLUSION — 145 caractères

Champ **Exclude Styles**. En mode repli → 945 / 1000, marge 55.

```
no four-on-the-floor, no trap drums, no mumble rap, no distorted vocals, no generic EDM, avoid messy mix, no cluttered low end, avoid thin sounds
```

Identique à celui de `doucement.md` : même famille rythmique, mêmes voisins
dangereux. `no autotune` reste absent — voix de groupe empilées.

---

## 📝 SCRIPT & PAROLES D'ÉLITE — 2821 / 5000 caractères

```
[DJ Intro: 16 bars, shaker, rim clicks and log drum on one loop, no vocals]
(Instruction: Persistent shaker thread throughout, never stopping)
(le même motif pendant seize mesures, rien ne change, aucune voix)
(Dou... dou... dou...)

[Verse 1: 8 bars, melodic rap-singing, dense, slightly behind the beat]
Ils filment le plafond, la bouteille, la fumée,
Ils postent la table avant même de s'asseoir,
Ils repartent à quatre heures avant même de savoir
Qui a ouvert la porte, qui a réglé l'addition.
Moi j'ai grandi là où on comptait pas ce qu'on avait,
On comptait qui restait le soir où on savait.
J'ai pas changé de numéro, j'ai changé de volume :
Ce qui compte se dit bas, ou ça se dit pas.

[Pre-Chorus: 4 bars, no riser, everything drops out except the shaker]
(tout tombe, il reste le shaker)
Baisse la lumière.
Range ça.

[Chorus: 8 bars, chanted hook, syllables locked on the log drum, group voices]
Pas d'photos,
Pas de noms,
Tout' la nuit,
Pas d'photos.

[Log Drum Drop: 16 bars, log drum and shaker, chant sample, no lead vocal]
(le log drum joue le refrain à la place de la voix)
(Pas-d'pho-tos... pas-d'pho-tos...)
(Call: Pas d'photos) Response: [Panoramic Group Vocals: Pas de noms]
(Call: Pas d'photos) Response: [Panoramic Group Vocals: Tout' la nuit]

[Verse 2: 8 bars, same tenor, higher and freer, ad-lib tails, piano forward]
Y'a des gens revenus dans ma vie comme si de rien n'était,
Le même sourire, la même adresse, la même promesse.
J'ai dit oui à tout le monde et j'ai rappelé personne,
C'est pas de la rancune, c'est de la gestion de sommeil.
Ma mère disait : regarde bien qui tu fais monter,
Moi je regarde surtout qui je fais rentrer.
Le respect, ça se voit pas sur une photo,
Ça se voit à l'heure où les gens s'en vont.

[Pre-Chorus: 4 bars, no riser, everything drops out except the shaker]
(tout tombe, il reste le shaker)
Baisse la lumière.
Range ça.

[Chorus: 8 bars, same chant, group voices doubled, log drum louder]
Pas d'photos,
Pas de noms,
Tout' la nuit,
Pas d'photos.

[Log Drum Drop: 8 bars, log drum and shaker, crowd chanting, no lead vocal]
(Call: Pas d'photos) Response: [Panoramic Group Vocals: Pas de noms]
(Call: Pas d'photos) Response: [Panoramic Group Vocals: Tout' la nuit]

[Breakdown: 4 bars, log drum out completely, shaker keeps going, voice bare]
(le log drum disparaît, le shaker ne s'arrête pas)
(voix nue, sans double, sans réverbération)
Personne a filmé cette partie-là.
C'est pour ça qu'elle est vraie.

[Final Chorus: 8 bars, everyone, widest field, log drum returns whole]
Pas d'photos,
Pas de noms,
Tout' la nuit,
Pas d'photos.

[DJ Outro: 12 bars, log drum shaker and rim clicks on one loop, no vocals]
(le même motif jusqu'au bout, la voix ne revient pas)
(Pas-d'pho-tos... pas-d'pho-tos...)
[End: The loop keeps going, no fade, hard stop on the downbeat]
```

---

## 🎹 NOTES DE STUDIO

**BPM — 112.** Deux crans au-dessus de `doucement.md`, et c'est un choix de DJ :
112 se mixe proprement avec le gros du club afro contemporain, et laisse une
marge de pitch de ±3 % dans les deux sens sans que le log drum perde son poids.

**Tonalité — Sol mineur.** Piano jazzy en septièmes, quatre mesures, joué
derrière le temps. Le log drum glisse d'une quarte vers le bas sur les appuis 1
et 4 du 3-3-2. Pad sombre tenu, **jamais de nappe qui monte** : rien dans ce
morceau ne doit ressembler à une montée.

**Delivery — deux régimes, et il faut les entendre comme deux personnes.**
Couplets : chanté-rappé dense, en retard sur le temps, queues d'ad-libs après
les fins de vers. Refrain : voix **percussive**, articulée, courte, posée sur
les trois appuis, sans tenue et sans mélodie. Si le refrain se met à chanter, la
fusion s'effondre — c'est là que le morceau se gagne ou se perd.

**Les bords, techniquement.** L'intro DJ est **un seul motif pendant 16
mesures** : rien n'entre, rien ne sort, aucune voix. C'est ce qui permet à un DJ
de caler et de mixer par-dessus. L'outro suit la même règle et **ne descend
pas** — `no fade, hard stop on the downbeat`. Un fondu rendrait le disque
inutilisable en mix.

**Le breakdown ne dure que 4 mesures**, et c'est délibéré : sur une version
club, la soustraction doit être un accident, pas une pause. Le log drum revient
**d'un bloc** sur le premier temps.

**Placement stéréo.** Log drum au centre, mono, énorme. Shaker à droite, rim
clicks à gauche — la paire qui tient la largeur pendant que la basse tient le
centre. Voix lead au centre, sèche. Chants de groupe tout ouvert. Guitare
étouffée à droite, piano ouvert.

**Ratio — 1,24 au texte, 3,5 en mesures.** Lire le premier chiffre seul ferait
croire à un morceau narratif ; c'est un disque de club où la voix occupe seize
mesures sur cent quatre.

**Leviers de re-génération.** 211 caractères de marge avec le champ dédié, 55 en
mode repli.
- Intro DJ trop courte → `the intro is one single loop, no changes, no vocals` (+50). **Ne rentre qu'avec le champ dédié.**
- Refrain qui se met à chanter → `the hook is chanted and percussive, never sung` (+45).
- Couplets pas assez denses → `dense melodic rap-singing, many syllables` (+41).
- Outro qui s'éteint → `the outro loop never fades` (+26).
- Ça sonne afro-house → `swung shuffle, never a straight house groove` (+43).
