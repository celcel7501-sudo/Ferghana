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
