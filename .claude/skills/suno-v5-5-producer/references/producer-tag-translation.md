# Traduction furtive : de l'ADN producteur au tag technique

Nommer un producteur ou un artiste dans le champ *Style of Music* fait échouer
ou aseptiser la génération. On ne cite jamais. On **décrit le geste sonore**.

## Table de conversion

| ADN visé | Tags furtifs à écrire |
|---|---|
| **Kore** — sens du tube, drums percutants, Raï'n'B / club | `MPC-style swung drums`, `layered claps and finger snaps on the backbeat`, `darbuka and karkabou percussion fills`, `Maghrebi-tinged club anthem`, `mandole / oud motif`, `radio-ready anthemic chorus placement` |
| **DJ Mehdi** — sampling, basses analogiques, French Touch urbaine | `filtered soul loops`, `round analog Moog-style bassline with portamento glides`, `warm analog saturation`, `French house filter sweeps`, `dusty sampler grit`, `chopped vocal sample hook` |
| **Cut Killer** — mixage, scratch, énergie mixtape | `rhythmic turntable cuts`, `mixtape-style scratch drops`, `transformer cuts`, `crab scratches`, `backspin rewind`, `cassette-tape saturation`, `DJ drop ad-libs` |
| **Plume Scred Connexion** | `gritty authentic flow`, `conscious street storytelling`, `dense internal rhyme delivery`, `unpolished close-mic vocal` |
| **Mélodie Ninho** | `melodic male tenor rap-singing`, `catchy sung hook`, `melodic ad-lib tails` |
| **Timbaland** | `syncopated foley percussion`, `organic mouth-percussion accents`, `heavy sidechain`, `stuttering hi-hat rolls`, `off-grid swing` |
| **Daft Punk / French Touch** | `filtered French house`, `heavy sidechain pumping`, `rhythmic talkbox vocals`, `crystalline vocoder lead`, `resonant low-pass filter sweeps` |
| **Doc Gynéco** | `nonchalant poetic urban delivery`, `melodic slacker flow`, `spoken-sung close-mic vocal` |
| **Djimi Finger / Secteur Ä** — architecture Golden Era | `dark melancholic piano-driven`, `hard-hitting MPC drums`, `cinematic minor-key strings`, `deep melodic jazz-fusion bass with fretless slides`, `dark brass stabs` |
| **Teddy Riley / New Jack Swing** | `hard swung 16th shuffle`, `big gated reverb snare`, `orchestral hit stabs`, `slap bass line`, `stabby brass hits`, `stacked gospel-tinged R&B harmonies` |
| **DJ Rim-K / Prestige** — identité podcast, broadcast | `Golden Era hip-hop podcast vibe`, `radio broadcast atmosphere`, `radio tuner sweep`, `vinyl crackle`, `hard-hitting MPC-60 drums`, `cinematic minor-key strings`, `warm AM radio compression on the intro voice` |
| **Rim'K** — club oriental, ambiance de salle | `Maghrebi-tinged French club rap`, `fast darbuka and derbouka rolls`, `bendir frame drum`, `mandole and synth-oud lead melody`, `gasba flute accents`, `hijaz scale strings`, `deep 808 sub bass with long pitch glides`, `chanted crowd hook with ululation ad-libs` |
| **Booba (Le Duc)** — trap sombre, 808 saturée | `dark French trap`, `deep distorted 808 bass with long pitch glides`, `melodic autotune vocals`, `cold cavernous reverb`, `sparse menacing synth lead`, `low-register punchline delivery`, `wide icy stereo field` |
| **Rohff (Le Padre)** — rap conscient, cordes | `conscious French rap`, `dramatic minor-key piano`, `soulful orchestral strings`, `raw unpolished delivery`, `hard-hitting live-sounding drums`, `gospel-tinged backing choir`, `dynamic vocal intensity` |
| **Darkchild** — R&B fin 90s, programmation saccadée | `stuttering syncopated drum programming`, `jerky off-grid percussion hits`, `staccato string stabs`, `tight muted synth arpeggio`, `gated vocal chops used as percussion`, `hyper-processed stacked backing vocals`, `orchestral hit accents` |
| **Oxmo Puccino** — conteur, punchline posée | `deep warm baritone`, `unhurried spoken-sung storytelling`, `conversational phrasing with long pauses`, `close-mic intimate delivery`, `jazz-tinged upright bass`, `brushed drums`, `muted trumpet answer` |
| **Lino** — technicien, dense, dur | `dense aggressive technical flow`, `hard consonant attack`, `high-density multisyllabic delivery`, `raw unpolished close-mic vocal`, `dark heavy boom bap`, `menacing minor-key horn stabs`, `no reverb on the lead` |
| **Structure RnB Brandy** | `lush stacked R&B harmonies`, `layered vocal arrangement`, `call-and-response backing vocals`, `whispered harmony bed`, `complex R&B vocal runs`, `panoramic vocal layering` |

## Méthode

1. Écouter mentalement ce que le producteur **fait**, pas ce qu'il **est**.
2. Isoler trois gestes : un geste rythmique, un geste harmonique, un geste de
   texture.
3. Traduire chaque geste en groupe nominal anglais concret et court.
4. Vérifier qu'aucun nom propre d'artiste, de marque ou de label ne subsiste.

## Noms propres autorisés

Seulement les termes **techniques ou génériques** entrés dans le lexique de
l'ingénierie du son : `MPC-style`, `Moog-style`, `Rhodes`, `808`, `Juno pad`,
`TR-909 clap`, `Fender bass`. Ce sont des instruments et des machines, pas des
personnes.

## Piège fréquent

Empiler les trois ADN sans hiérarchie donne une bouillie. Dans un morceau :
**un ADN mène** (généralement le rythmique), les deux autres décorent. Écrire
les tags dans cet ordre de priorité — Suno pondère la tête du prompt.

## Fusionner deux ADN : la règle des couches

« Un ADN mène, les deux autres décorent » suffit quand les ADN portent des
choses différentes. Elle ne suffit plus quand **deux écoles se disputent la même
couche** — deux programmeurs de batterie, deux architectes harmoniques.

La sortie est une **répartition explicite, couche par couche**. Exemple réel,
`examples/je-te-le-dis-une-fois.md` (Darkchild × Djimi Finger) :

| Couche | École qui la tient |
|---|---|
| Programmation rythmique | Darkchild — batterie qui bégaie, percussions hors grille |
| Timbre de la batterie | Djimi Finger — MPC-60 |
| Matériau harmonique | Djimi Finger — piano sombre, cordes mineures, basse fretless |
| Ornement mélodique | Darkchild — stabs de cordes staccato, arpège étouffé |

**Le conflit se règle en un seul groupe nominal**, jamais en deux tags qui se
font face :

```
MPC-60 kick and snare programmed in a stuttering off-grid pattern
```

Le son vient d'une école, le placement de l'autre. Même construction que
`sampled MPC-60 kick and snare on a house grid` sur `examples/face-b.md`.

**Corollaire sur la persistance.** Quand un motif appartient aux deux ADN à la
fois, c'est lui qui doit persister : il fait la jointure sans qu'on l'explique.
Sur ce morceau, le stab de cordes staccato est pitché (donc harmonique, côté
Golden Era) et court (donc percussif, côté Darkchild) — aucun autre élément ne
pouvait tenir ce rôle.
