# La plume d'élite et le script du flow

Ce fichier couvre ce que le champ de style **ne peut pas** faire : la rime, la
métrique du vers, et la façon d'imposer un débit à Suno.

## La règle qui réconcilie les deux métriques du dossier

Le dossier porte deux consignes de longueur de vers qui semblent se contredire.
Elles ne se contredisent pas — **elles ne s'appliquent pas à la même section**.

| Section | Longueur des vers | Pourquoi |
|---|---|---|
| **Couplet** | **variable** | Le relief. Un vers court après trois longs est une ponctuation ; c'est là que la punchline se pose. |
| **Refrain** | **constante** | La prévisibilité. Quatre lignes de même squelette syllabique = une seule phrase de quatre mesures, apprise dès la première écoute (`references/structure-tags.md`). |

Écrire un couplet régulier donne une comptine. Écrire un refrain irrégulier
donne un refrain qu'on ne retient pas. **La régularité est une ressource : on la
dépense au refrain, on l'économise au couplet.**

## La rime riche : la condition pour qu'elle s'entende

Une rime riche (trois phonèmes communs et plus) ne s'entend que si les syllabes
qui riment **tombent à la même place dans la mesure**. Une rime riche posée sur
un temps différent à chaque vers se lit comme de la prose : l'oreille n'a aucun
repère pour comparer.

Deux conséquences côté prompt :

1. Le champ de style doit protéger l'articulation — sinon la richesse est
   noyée : `clear articulated diction`, `vocal forward in the mix`.
2. Les rimes riches sont **incompatibles avec un mix qui écrase la voix**. Ne
   jamais les associer à `heavily processed lead` ou à une réverbération longue
   sur le lead.

**Assonance interne** : la rime intérieure doit tomber en milieu de mesure
(temps 2 ou 3), pas au hasard. Placée n'importe où elle devient un accident ;
placée régulièrement elle crée une seconde grille de rimes sous la première.

**Allitération** : elle survit aux consonnes **occlusives** (p, t, k, b, d, g) et
meurt sur les fricatives (f, s, ch, v, z, j) dès que le tempo monte — le modèle
les lie. Au-dessus de 110 BPM, une allitération en *s* est perdue.

## Scripter le flow : le tag de débit

Suno lit le contenu du crochet de section. Le débit s'y déclare, et il se
déclare **en tête du crochet** — le modèle pondère le début de la balise :

```
[Verse 1: Staccato technical flow, hard consonant attack, drums full]
[Verse 2: Melodic laid-back delivery, behind the beat, bass forward]
```

Catalogue utile :

| Effet voulu | Tag |
|---|---|
| Débit technique, dense | `Staccato technical flow` |
| Nonchalant, traînant | `Melodic laid-back delivery`, `behind the beat` |
| Récit, posé | `Unhurried storytelling delivery`, `conversational phrasing` |
| Punchline | `Deliberate, one line at a time, space between lines` |
| Montée d'intensité | `Rising intensity, faster and louder across the verse` |
| Double-temps | `Double-time flow` |

**Un tag de débit par section, jamais deux.** Deux débits dans un même crochet
donnent une moyenne des deux, c'est-à-dire ni l'un ni l'autre. Changer de flow
en cours de couplet se fait en **coupant le couplet en deux sections**.

**Le débit est aussi une contrainte d'écriture.** `Staccato technical flow`
demande des vers denses en syllabes ; l'écrire au-dessus d'un texte aéré ne
produit rien. Le tag ne fabrique pas le flow — il dit au modèle comment lire ce
qui est déjà écrit.

## Métaphore et ratio

Une image qui demande une seconde écoute a besoin de **place**. C'est pourquoi
les morceaux à plume dense s'installent en bas de l'échelle du ratio
hook / couplets — 0,79 sur `examples/sang-froid.md`, 0,92 en registre conscient.
Vouloir un texte à images fortes **et** un ratio de club (2,2+) est une commande
contradictoire : le second ne laisse pas assez de texte au premier.

Arbitrage : si le brief demande les deux, la plume va dans les **couplets** et le
refrain reste littéral. Un refrain métaphorique sur un banger club ne se
comprend jamais — il est chanté quatre fois par une salle qui ne l'écoute pas.
