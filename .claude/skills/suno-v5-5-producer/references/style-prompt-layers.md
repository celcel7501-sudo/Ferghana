# Ingénierie du champ "Style of Music" (V5.5)

Le champ de style n'est pas une liste de mots-clés : c'est un **brief d'ingénieur
du son**. On empile des couches, du plus général au plus fin, et on termine
toujours par le mastering — Suno traite la fin du prompt comme la finition.

## Les 5 couches obligatoires

### 1. CORE GENRE
Le genre **précis**, pas la famille. `Cloud Rap`, `New Jack Swing`,
`French summer rap`, `Baile funk`, `Neo-soul ballad`, `Boom-bap lovers rap`.
Deux genres croisés maximum — au-delà, Suno moyenne et perd le caractère.

### 2. RHYTHMIC DNA (la couche Timbaland)
C'est là que le morceau gagne ou perd sa personnalité. On y met :
- le BPM et le feel : `92 BPM, laid-back swung 16ths`, `half-time feel`
- la percussion foley : `syncopated foley percussion (lighter flick, glass
  bottle tap, matchbox shake, chair creak)`
- la bouche : `mouth-percussion layers`, `organic beatbox undercurrent`,
  `breath hits on the offbeat`
- le détail hi-hat : `stuttering triplet hi-hat rolls`, `open hat spilling into
  the downbeat`
- le placement : `rimshot backbeat pushed slightly late`, `kick dragging behind
  the grid`

### 3. SONIC TEXTURE
L'ambiance spatiale et la matière : `wide stereo field`, `analog tape warmth`,
`VHS lo-fi hiss`, `dusty vinyl crackle bed`, `humid night-air reverb`,
`close-mic intimacy`, `tape saturation on the drum bus`.

### 4. INSTRUMENTATION
Les timbres, pas les familles. Pas « guitare » mais `muted nylon guitar loop`.
Pas « synthé » mais `detuned sawtooth lead`. Pas « basse » mais
`plucked upright bass` ou `round sub-bass with no attack`.
Ajouter la couche vocale ici : `male tenor speak-sing, breathy nonchalant
delivery, doubled hook, gospel-tinted female backing responses`.

### 5. MASTERING
La finition : `commercial radio master`, `punchy 808 compression`,
`preserved dynamic range`, `warm analog glue`, `slightly crushed loudness for
club playback`.

## Couche optionnelle : TURNTABLISM
Quand le morceau contient une routine de platines, on la déclare aussi dans le
style (et pas seulement dans le script) pour que Suno réserve la place :
`DMC-level scratch routine, crab scratches, transformer cuts, backspin rewind`.

## Format de sortie

Un bloc de code, une couche par ligne, étiquetée en majuscules. Suno accepte le
texte brut ; les étiquettes servent aussi de garde-fou pour l'humain qui édite.

```
CORE GENRE: ...
RHYTHMIC DNA: ...
SONIC TEXTURE: ...
INSTRUMENTATION: ...
VOCALS: ...
TURNTABLISM: ...
MASTERING: ...
```

## Pièges

- **Ne jamais nommer un artiste vivant ou une marque** dans le champ de style :
  c'est filtré et ça brûle la génération. On décrit le *son*, pas la personne.
  « Nonchalant French male speak-sing » plutôt que le nom d'un rappeur.
- **Trop de tags tue le tag** : au-delà d'environ 200 mots, Suno lisse tout.
  Viser 90–150 mots, chaque mot portant une information.
- **Les contradictions se paient** : `lo-fi hiss` + `pristine hi-fi clarity`
  donne une bouillie tiède. Choisir un camp.

## Le tempo lent qui doit danser : le club se fabrique dans les charleys

Un brief demande parfois « club » et « dansant » sur un tempo qui n'en est pas
un — 95, 97, 100 BPM. Le réflexe est de monter le BPM ; c'est l'erreur, parce
que le tempo est aussi ce qui décide de la longueur des vers chantables.

Le geste correct est celui du R&B club moderne : **dissocier le haut et le bas
de la rythmique.**

```
Punchy kick and sharp snare in half-time, double-time hats and rapid claps on top
```

Le kick et la caisse claire restent au tempo écrit — donc la voix peut chanter
des phrases entières. Les charleys et les claps battent au double — donc la
salle danse. **C'est le haut du morceau qui fait danser, pas le kick.**

Exemple mesuré : `examples/ne-raccroche-pas-club.md`, 97 BPM, textes longs.

Bornes utiles : sous ~92 BPM les charleys en double-temps s'entendent comme du
boom bap ; au-dessus de ~102 la moitié de l'intérêt disparaît, puisque la grille
simple suffit déjà à faire danser.

## Faire jouer plutôt que programmer

Suno quantifie par défaut. `live band` seul ne produit pas un groupe : il produit
une boîte à rythmes avec des sons d'instruments. Ce qui produit réellement le
geste tient en quatre clauses :

```
Live drum kit played by hand … room mics open, no quantization on bass and guitars.
One take feel, timing imperfections kept, no click-track stiffness.
```

Plus, dans le bloc d'exclusion, le tag décisif : `no programmed drums`. Il ne
contredit pas `tight kick and snare on the grid` — **jouer serré et programmer
sont deux choses différentes**.

**La tension à arbitrer.** Un chanté-rappé mélodique a besoin d'une grille à
laquelle s'accrocher ; un groupe live dérive. Les deux ne peuvent pas gagner. La
sortie est une répartition par couches :

| Couche | Décision |
|---|---|
| Kick et caisse claire | **Serrés, sur la grille** — la voix a besoin de son repère |
| Basse et guitares | **Libres** — c'est là que le groupe respire |
| Voix | Sur la grille de la batterie, jamais sur celle de la basse |

Si tout dérive, le hook cesse d'être prévisible — et la prévisibilité est
justement ce qui le rend entraînant.

**Contre-intuitif mais nécessaire** : `timing imperfections kept` doit rester
dans le prompt. Sans lui, le modèle lisse tout et le morceau redevient une
maquette propre.

Bornes de tempo : au-dessus de ~96 BPM, une batterie jouée à la main recommence
à sonner comme une machine, et tout le travail d'imperfection est perdu.

## Deux familles de percussion sur les mêmes temps

Empiler des claps `on the backbeat` et des fills de percussion à main ne donne
pas deux fois plus de rythme : une darbouka laissée libre remplit autour du
contretemps, donc atterrit exactement là où sont les claps.

**La sortie se joue sur deux axes, et l'un sans l'autre ne suffit pas.**

| Axe | Tag |
|---|---|
| **Le temps** | `darbuka fills answering the claps and never landing on the backbeat` |
| **L'espace** | `darbuka panned wide against the centred claps` |

Séparer dans le temps seulement laisse encore les deux au centre ; séparer dans
l'espace seulement laisse encore la collision rythmique. Il faut les deux.

**Et il faut quelqu'un sur le premier temps.** Une peau grave — `bendir frame
drum on the downbeat` — occupe le 1 pendant que la darbouka reste dans les
trous. Sans elle, la percussion à main perd son ancrage à force d'être repoussée
hors des temps forts.

Répartition qui fonctionne, vérifiée sur `examples/toute-la-famille.md` :

| Temps | Qui joue |
|---|---|
| 1 | Kick, bendir |
| 2 et 4 | Caisse claire, claps empilés |
| Entre les temps | **Darbouka seule** |

La règle générale : **quand deux familles de percussion se disputent une place,
l'une prend les temps, l'autre prend les trous.** Jamais les deux partout.
