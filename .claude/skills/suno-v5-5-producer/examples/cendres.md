# « Cendres » — hip-hop français agressif, boom bap cinématographique

Morceau écrit **à partir d'un prompt de style fourni**. La palette est celle du
client, intégralement conservée ; le travail porte sur les couches manquantes,
la mise en forme des exclusions, et le texte.

**Conforme aux limites Suno** : style **919 / 1000** (dont **124** d'exclusions),
paroles **4923 / 5000**. Vérifiable par `python3 tools/count.py`.

---

## 🧪 ANALYSE DU MIX

**Ce que le prompt d'origine faisait déjà bien.** 294 caractères, une palette
cohérente et deux exclusions déjà présentes (`no generic trap`, `avoid thin
sounds`). Le couple **cuivres orchestraux sombres + piano staccato mélancolique**
est un choix juste : les cuivres portent l'agressivité, le piano porte le deuil.
C'est cette double nature qui empêche le morceau de n'être qu'un exercice de
colère.

**Trois couches manquaient, et elles coûtent cher à l'oreille.**
1. **La persistance.** Le piano staccato est l'élément identitaire évident — sans
   `Persistent ... throughout` déclaré dans les deux champs, Suno l'abandonne
   après l'intro et le morceau perd son fil. C'est lui qui tient le pont quand
   la batterie disparaît.
2. **Le détail rythmique.** `hard-hitting MPC drums` dit la frappe mais pas le
   placement : ajouter `cracking rimshot snare on 2 and 4` et
   `syncopated foley percussion` donne à Suno une grille à respecter au lieu
   d'une intention à interpréter.
3. **La spatialisation.** `wide cinematic mix` est une intention ; `ultra-wide
   cinematic stereo field, panoramic vocal layering, piano wide and centred` est
   une instruction. La différence s'entend sur les réponses de groupe.

**Les exclusions ont été regroupées en fin de champ.** Elles étaient dispersées
au milieu du prompt, entre deux éléments positifs. Un bloc `Exclude:` terminal
est plus lisible pour l'humain et pour le modèle. **`no low-quality recording`
a été volontairement écarté** du bloc standard : le style demande
`gritty vinyl saturation`, garder l'exclusion mettrait Suno en contradiction.
Même raison pour `ensure no audio artifacts` — un disque volontairement sale n'a
pas besoin qu'on lui interdise le grain.

**Sur « polished raw master ».** La formule paraît se contredire, elle ne se
contredit pas : elle décrit une source brute et une finition maîtrisée. Elle est
conservée telle quelle — c'est exactement l'esthétique visée, et Suno la lit
bien.

**Pourquoi 95 BPM et pas 92.** Trois BPM au-dessus de `titane.md`, et le morceau
change de nature : à 92 half-time on est dans la lourdeur, à 95 en feel droit on
est dans la **marche** — le tempo du texte qui avance, pas du muscle qui pose.
C'est le tempo classique du boom bap français, et il laisse au flow dense la
place de rester articulé.

---

## 🎛️ V5.5 STYLE PROMPT — 919 / 1000 caractères

Le prompt d'origine faisait **294 caractères** : 706 inutilisés. Tous les
éléments fournis sont conservés mot pour mot.

```
Aggressive French hip-hop, dark cinematic boom bap. 95 BPM, hard-hitting MPC drums, cracking rimshot snare on 2 and 4, syncopated foley percussion, sparse triplet hat rolls, gritty vinyl saturation. Persistent staccato melancholic piano motif throughout. Dark orchestral brass stabs, low cello swell, deep heavy sub-bass with slides, sharp rhythmic turntable cuts, transformer cuts. Male tenor: intense poetic delivery, dense internal rhymes, crisp articulate diction, close-mic and unpolished on verses, explosive anthemic hook with tenor rise, lush stacked harmonies, panoramic group vocal responses, whispered ad-lib tails. Ultra-wide cinematic stereo field, panoramic vocal layering, 3D surround mix, piano wide and centred. Polished raw master, punchy compression, preserved dynamic range. Exclude: no generic trap, avoid thin sounds, no mumble rap, no distorted vocals, avoid messy mix, avoid over-saturated bass.
```

---

## 📝 SCRIPT & PAROLES — 4923 / 5000 caractères

```
[Intro: Piano motif alone, vinyl crackle, brass stab, scratch]
(Instruction: Persistent staccato piano motif throughout)
(parlé, grave, très proche du micro)
Ça a brûlé. Et pourtant on est là.
Compte les vivants avant de compter les pertes.

[Hook Teaser: Two lines, tenor rise, drums drop in]
(Call: Cendres) Response: [Panoramic Group Vocals: Cendres]
(Call: On repart pas de zéro, on repart de nous) Response: [Panoramic Group Vocals: De nous]

[Verse 1: Intense poetic delivery, dense rhymes, brass stabs]
Y'a des matins qui sentent le plastique et le mensonge,
Le bâtiment fume encore, les caméras déjà partent.
On nous compte comme des dossiers, on nous classe comme des ombres,
Trois lignes dans un rapport pour vingt ans dans le même hall.
J'ai vu ma mère ranger des photos qui ont plus de cadre,
Et sourire quand même — c'est ça que j'appelle du courage.
Ils nous ont dit « c'est la fatalité », j'ai dit « c'est la facture »,
La fatalité, ça tombe du ciel ; la facture, elle a une signature.
On sait faire avec le manque, on a jamais su faire sans,
On a bâti des palais dans des cages d'escalier.
Et ce qu'ils appellent des ruines, nous on appelle ça l'adresse,
Y'a nos noms sur ces murs noirs, gravés au bon endroit.
Alors ramasse ce qui reste, c'est jamais rien, ce qui reste,
Une clé, deux prénoms, et l'envie de recommencer.

[Pre-Chorus: Energy ramp, strings rising, snare roll]
(Call: Qu'est-ce qu'ils nous ont laissé ?) Response: [Panoramic Group Vocals: Rien]
Et avec rien, regarde bien c'qu'on fabrique,
On a l'habitude, on est nés dans l'après.
Trois, deux, un...

[Chorus: Explosive anthemic hook, tenor rise, brass maximum]
(Call: Cendres) Response: [Panoramic Group Vocals: Cendres]
(Call: Tout c'qui brûle laisse une preuve) Response: [Panoramic Group Vocals: Une preuve]
(Call: On repart pas de zéro, on repart de nous) Response: [Panoramic Group Vocals: De nous]
(Call: Cendres) Response: [Panoramic Group Vocals: Cendres]

[Post-Chorus: Group unison, piano and claps, scratch]
(Call: Ce qui reste, c'est nous) Response: [Panoramic Group Vocals: C'est nous]
(Call: Ce qui reste, c'est nous) Response: [Panoramic Group Vocals: C'est nous]

[Verse 2: Same delivery, lower and denser, piano exposed]
J'écris pas pour la vengeance, la vengeance est mal payée,
J'écris pour qu'on retrouve nos noms quand ils auront tout classé.
Y'a des colères propres, tenues, qui font pas de dégâts,
Elles servent à rien la nuit, mais elles construisent le matin.
J'ai grandi entre deux feux : celui d'en haut qui ignore,
Celui d'en bas qui brûle et qui croit que ça répare.
J'ai choisi le troisième : celui qu'on garde dans le ventre,
Qui chauffe et qui éclaire sans jamais prendre la maison.
Ils veulent qu'on tombe en silence, moi j'tombe en majuscules,
Chaque mot posé ici est une brique qu'on remet.
On m'a dit « oublie », j'ai dit « je note » — c'est différent :
Oublier, c'est leur cadeau ; se souvenir, c'est notre arme.
Alors qu'ils gardent leurs discours, leurs minutes de silence,
Nous on a trois minutes de son, et ça, ça reste.

[Pre-Chorus: Energy ramp, brass higher, harmonies stacking]
(Call: Qu'est-ce qu'ils nous ont laissé ?) Response: [Panoramic Group Vocals: Rien]
Et avec rien, regarde bien c'qu'on fabrique,
On a l'habitude, on est nés dans l'après.
Trois, deux, un...

[Chorus: Same hook, harmonies wider, brass full]
(Call: Cendres) Response: [Panoramic Group Vocals: Cendres]
(Call: Tout c'qui brûle laisse une preuve) Response: [Panoramic Group Vocals: Une preuve]
(Call: On repart pas de zéro, on repart de nous) Response: [Panoramic Group Vocals: De nous]
(Call: Cendres) Response: [Panoramic Group Vocals: Cendres]

[Post-Chorus: Group unison, piano and claps, scratch]
(Call: Ce qui reste, c'est nous) Response: [Panoramic Group Vocals: C'est nous]
(Call: Ce qui reste, c'est nous) Response: [Panoramic Group Vocals: C'est nous]

[Bridge: Beat switch, drums cut, solo piano and cello, Voice pitch variation]
(voix nue, aucun effet, sans batterie)
La cendre, c'est pas la fin du feu.
C'est la preuve qu'il a existé.
(voix pitchée grave)
Et nous, on a existé fort.
[DMC Routine: sharp cuts, transformer cuts, backspin rewind]
[Silence: one bar, one piano note ringing]

[Final Chorus: All at once, tenor up a tone, 3D vocal wall]
(Call: Cendres) Response: [Panoramic Group Vocals: Cendres]
(Call: Tout c'qui brûle laisse une preuve) Response: [Panoramic Group Vocals: Une preuve]
(Call: On repart pas de zéro, on repart de nous) Response: [Panoramic Group Vocals: De nous]
(Call: Cendres) Response: [Panoramic Group Vocals: Cendres]

[Post-Chorus: Whole room, piano and claps, final scratch]
(Call: Ce qui reste, c'est nous) Response: [Panoramic Group Vocals: C'est nous]
(Call: Ce qui reste, c'est nous) Response: [Panoramic Group Vocals: C'est nous]

[Outro: Piano motif alone, vinyl crackle, door opening]
(parlé, calme)
Balaye. Range. Recommence.
On sait faire. On a toujours su faire.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 95, feel droit.** Kick et caisse claire sur la grille, tout le foley
légèrement décalé. Le swing vient du placement, pas du tempo — ne pas quantiser
à 100 %, c'est ce qui sépare le boom bap de la trap.

**Tonalité — Ré mineur.** Registre où le piano staccato reste tranchant et où
les cuivres graves peuvent gronder dessous sans masquer la voix. Le refrain monte
à la quinte sur « Cendres » et redescend immédiatement : la courbe le rend
chantable après une écoute, malgré la gravité du sujet.

**Delivery — intense ne veut pas dire fort.** Couplets : **sur le temps**,
articulés, proches du micro, tendus. Le texte est une démonstration ; la colère
se lit dans la précision, jamais dans le volume. Doubler uniquement les fins de
vers. Refrain : ténor plein, ouvert, réponses de groupe **après** l'appel.

**Trois lignes à traiter à part.**
1. « La fatalité, ça tombe du ciel ; la facture, elle a une signature. » — c'est
   la thèse politique du morceau. Posée nette, sans ad-lib, demi-temps de
   silence après.
2. « On m'a dit "oublie", j'ai dit "je note" — c'est différent. » — plus bas,
   presque parlée.
3. L'outro : « Balaye. Range. Recommence. » — trois impératifs, **un silence
   entre chaque**.

**Le moment à protéger.** Le pont : batterie coupée, piano et violoncelle seuls,
voix nue, puis la routine de scratch et la mesure de silence. C'est là que le
titre s'explique — la cendre comme preuve, pas comme fin.

**Leviers de re-génération.** Style à 81 caractères de marge, paroles à 77.
- Pas assez agressif → `hard aggressive brass hits` (+28).
- Piano pas assez présent → il est déjà persistant ; ajouter `piano front and
  centre` (+25) en coupant `low cello swell`.
- Trop propre malgré le grain → `dusty sampler texture` (+23).
- Scratch avalé → `turntable cuts up front` (+26).
- Basse maigre → `deep heavy sub with long decay` (+31) ; c'est aussi la réponse
  directe à `avoid thin sounds`.
