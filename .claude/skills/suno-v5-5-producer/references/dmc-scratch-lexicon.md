# Lexique turntabliste — scripter une routine DMC

Le scratch se décompose en deux gestes simultanés : la **main disque** (le
mouvement du vinyle) et la **main crossfader** (l'ouverture/fermeture du son).
Nommer la technique dans la balise donne à Suno une texture rythmique précise ;
décrire aussi le *résultat sonore* garantit le rendu même si le nom est ignoré.

## Techniques de base

| Technique | Geste | Description sonore à donner à Suno |
|---|---|---|
| **Baby scratch** | Disque avant-arrière, fader ouvert | `simple back-and-forth vinyl rub` |
| **Chirp** | Fader coupé sur l'aller et le retour | `short bird-like chirping cut` |
| **Transformer** | Disque continu, fader haché | `stuttered on/off chopping of a held sample` |
| **Flare** | Fader fermé 1, 2 ou 3 fois pendant le mouvement | `rhythmic click-clacking gaps inside a long scratch` |
| **Crab** | Fader tapoté avec quatre doigts | `machine-gun rapid-fire scratch bursts` |
| **Orbit** | Flare joué aller **et** retour | `symmetrical looping scratch pattern` |
| **Tear** | Disque en trois temps, sans fader | `slurred three-stage drag` |
| **Scribble** | Avant-bras tendu, vibration rapide | `frantic buzzing vinyl tremor` |
| **Backspin** | Rembobinage brutal | `record rewind whoosh` |
| **Beat juggling** | Deux copies, phrases alternées | `looped drum phrase stuttering between decks` |

## Où les placer

- **Intro** : 2 baby scratches + 1 transformer sur un stab de cuivre. On pose
  l'identité en 4 mesures, pas plus.
- **Fin de couplet** : un backspin pour relancer vers le refrain.
- **Après le 2e refrain** : la routine complète (8 à 16 mesures), batterie
  réduite au kick et au rimshot pour laisser de la place.
- **Outro** : un tear lent, puis tape stop.

## Modèle de balise

```
[Scratch Solo: 8 bars — crab scratches on a vocal stab, two orbits,
transformer cuts over the kick, ending on a backspin rewind;
drums reduced to kick and rimshot, bass muted]
```

## Règle d'or

La routine sert la **transition**, pas l'ego. Si elle ne relance pas une
section, elle ne sert à rien : on la coupe. Un scratch bien placé sur quatre
mesures vaut mieux que seize mesures de démonstration.

---

## Le scratch comme motif persistant

Dans tout le dossier, le turntablism est un **événement** : une routine DMC au
pont, un drop de mixtape, une passe de transformer avant le dernier refrain. Il
peut aussi être le **moteur** du morceau — l'échantillon gratté joue le riff, à
chaque mesure, du début à la fin. Voir `examples/face-b.md`.

```
Persistent scratched vocal sample stab throughout, used as the hook riff, not as a solo
```

Trois conditions :

1. **Écrire `not as a solo`.** Sans cette mention, Suno place un scratch
   spectaculaire à un endroit et l'oublie partout ailleurs — le comportement par
   défaut, puisque c'est ce qu'un scratch est dans 99 % des disques.
2. **Pitcher l'échantillon dans la tonalité.** Un scratch hors tonalité
   s'entend comme un bruit, pas comme un riff. C'est toute la différence entre
   un motif et un effet.
3. **Prévoir la rupture à l'envers.** Quand le scratch est le moteur, le pont ne
   consiste plus à en ajouter un mais à **l'arrêter** :
   `[Bridge: Turntable stops dead, drums out]`. C'est le seul geste qui
   s'entende sur un disque déjà saturé de platine.

Densité de placement : sur le contretemps de chaque mesure, en retrait sous les
couplets, au-dessus de la voix au refrain, seul avec les claps au post-refrain.
Même courbe qu'un stab de synthé — avec le grain d'une platine.

---

## Écrire un refrain entièrement scratché

Un cran au-delà du scratch persistant : le refrain **n'a pas de voix**. Ni
chanté, ni rappé, ni scandé — quatre fragments coupés à la platine. Voir
`examples/coupe-nette.md`.

C'est l'objet le plus éloigné du réflexe par défaut du modèle : sans instruction
contraire, Suno invente un refrain chanté, parce qu'un refrain « doit » être
chanté. Trois dispositifs, et il faut **les trois** :

1. **Notation en bégaiement** : `Cou-cou-coupe nette`. Les tirets et la syllabe
   répétée disent un geste de main sur un disque, pas une ligne mélodique.
2. **Une didascalie par ligne** : `(scratché)` en tête de chaque fragment. La
   balise de section ne suffit pas — sur un bloc de quatre lignes, Suno
   n'applique la directive qu'à la première.
3. **`no melodic hook` dans les exclusions**, en plus de `no singing`. Elle
   bloque le réflexe au niveau du style et pas seulement de la section.

### D'où viennent les phrases

Sur les disques de cette école, elles sont prélevées sur d'autres disques. Dans
le dossier, **elles viennent des couplets du morceau lui-même** : « coupe
nette », « pas de bavure », « on garde le meilleur » apparaissent dans les
couplets avant d'être coupées au refrain. L'auditeur les a déjà entendues, donc
la coupe s'entend comme une citation et non comme un bruit.

Généralisation de la règle posée sur `examples/l-elite.md` : **le mot gratté
doit venir du morceau.** Ici, tout le refrain.
