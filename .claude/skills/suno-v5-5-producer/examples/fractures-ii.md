# « Fractures II — Réparer » — version alternative

Deuxième version d'un morceau fourni par le client. **Même identité de
production** (piano persistant, 84 BPM, boom bap cinématique, harmonies
empilées, scratch sur le piano), texte tourné vers l'autre versant : la version I
diagnostique la fracture, la version II la recoud. L'axe est donné par l'outro
d'origine — « Réparer les fractures ».

**Conforme aux limites Suno** : style **938 / 1000** (dont **131** d'exclusions),
paroles **4554 / 5000**. Vérifiable par `python3 tools/count.py`.

---

## 🧪 ANALYSE DU MIX

**Ce qui ne bouge pas, et pourquoi.** Le piano persistant, le tempo, les
harmonies empilées, les cuts sur le piano, la phrase « Est-ce qu'on saura encore
se souvenir ? ». Une seconde version n'est pas un autre morceau : c'est le même
disque vu de l'autre côté. Si la production change, on perd le lien — et le
public ne fait pas le rapprochement.

**Ce qui bouge : la moitié droite du refrain.** Les trois premiers appels sont
identiques à la version I (`ON SE DIVISE`, `LA COLÈRE S'AIGUISE`, `ENTRE DEUX
MONDES`) — c'est la mémoire mélodique, on n'y touche pas. Les deux derniers
appels basculent : « Qui va tendre la main ? » → `NOUS, EN PREMIER`, et « Quel
avenir ? » → `CELUI QU'ON RÉPARE`. Le constat reste, la réponse change.

**Le refrain final se retourne.** `ON SE DIVISE` devient `ON SE RELÈVE`,
`LA COLÈRE S'AIGUISE` devient `LA LUMIÈRE SE LÈVE`. C'est le seul écart à la
règle d'identité du refrain, et il est délibéré : une seule modification, à la
toute fin, sur des mots qui riment avec les originaux — donc chantable
immédiatement par quelqu'un qui connaît la version I. Une fin qui répète le
constat serait un morceau sans issue ; une fin qui le renverse trop tôt serait
naïve.

**Le vide au service du piano.** À 84 BPM, la caisse claire tombe deux fois par
mesure et laisse d'immenses trous. Ces trous appartiennent au piano — c'est
pour ça que la batterie n'entre qu'à la cinquième mesure du couplet 1 et
disparaît complètement au pont. Le piano est déclaré persistant **une seule
fois**, en tête : répéter l'instruction à chaque section coûte des caractères
sans rien renforcer.

**Le texte évite le piège du morceau « positif ».** Le couplet 2 commence par
refuser la naïveté (« j'dis pas qu'il faut sourire bêtement »), valide la colère
avant de désigner le vrai adversaire, et refuse de faire du voisin le
responsable. Un morceau de réparation qui nie la colère ne convainc personne
dans le quartier dont il parle.

---

## 🎛️ V5.5 STYLE PROMPT — 938 / 1000 caractères

Le prompt d'origine faisait **309 caractères** : 691 inutilisés. Ce qui a été
ajouté, dans l'ordre des couches — détail rythmique (drums MPC, rimshot en
retard, claps, crackle), instrumentation précise (violoncelle grave, sirènes
lointaines, cuts sur le piano), direction vocale par registre, **spatialisation**
(le piano large et centré, les chœurs étalés), et le bloc d'exclusions.

```
Piano-driven French conscious rap, dark cinematic boom bap. 84 BPM, dusty MPC-style drums, rimshot snare pushed late, syncopated foley percussion, sparse claps, vinyl crackle bed. Persistent melancholic acoustic piano melody throughout. Dominant expressive piano, deep melancholic string section, low cello swell, distant siren texture, turntable scratch cuts over the piano. Male tenor: serious poetic delivery, nonchalant reflective flow on verses, crisp articulate diction, explosive emotional hook with tenor rise, lush multi-layered vocal harmonies, complex R&B vocal runs, anthemic group vocal responses, whispered ad-lib tails. Ultra-wide atmospheric stereo field, panoramic vocal layering, 3D surround mix, piano wide and centred. Polished radio master, punchy compression, preserved dynamic range. Exclude: no mumble rap, no distorted vocals, avoid messy mix, ensure no audio artifacts, no generic EDM, avoid over-saturated bass.
```

---

## 📝 SCRIPT & PAROLES — 4554 / 5000 caractères

```
[Intro: Melancholic piano solo, slow and deep, vinyl crackle, distant sirens]
(Instruction: Persistent piano melody throughout)
[Scratch Solo: Slow rhythmic cuts over the piano on "Regarde la France"]
(parlé, calme, très proche du micro)
Même piano. Même pays.
Autre côté de la fracture.

[Verse 1: Nonchalant reflective flow, steady piano chords, drums enter bar five]
J'ai vu la France à minuit dans un couloir d'hôpital,
Une infirmière tient la main d'un homme qu'elle connaît pas.
Personne l'a filmée, ça n'a fait la une d'aucun journal,
Mais c'est elle qui recoud pendant qu'on écrit nos combats.
J'ai vu la France au stade, un dimanche, sous la pluie battante,
Deux cents voix qui crient le même prénom, la même attente.
Y'a pas de camp là-dedans, pas de fiche, pas d'étiquette,
Juste des parents qui tiennent des gobelets et qui oublient leur dette.
J'ai vu la France chez la boulangère qui met de côté
Le pain de la vieille du troisième qui peut plus descendre.
Ça remplit pas un plateau, ça fait pas monter l'audience,
Mais c'est ça qui tient le pays debout, en bas, dans le silence.

[Pre-Chorus: Piano arpeggio building tension, harmonies stacking, strings enter]
(Ad-lib: Les fractures, ça se recoud aussi...)
On se parle plus, d'accord. Alors on va s'asseoir.
On coupe l'écran, on met deux chaises, on prend le soir.
Ça répare pas tout... mais quelque part, ça commence.

[Chorus: Explosive Emotional Hook, Tenor rise, call and response, piano on every beat]
(Call: Fractures) Response: [Panoramic Group Vocals: ON SE DIVISE]
(Call: Sous le ciel gris) Response: [Panoramic Group Vocals: LA COLÈRE S'AIGUISE]
(Call: Fractures) Response: [Panoramic Group Vocals: ENTRE DEUX MONDES]
(Call: Qui va tendre la main ?) Response: [Panoramic Group Vocals: NOUS, EN PREMIER]
(Call: Quel avenir ?) Response: [Panoramic Group Vocals: CELUI QU'ON RÉPARE]
Est-ce qu'on saura encore se souvenir ?

[Verse 2: More intense flow, piano dominant, strings swelling under the last four]
J'dis pas que tout va bien, j'dis pas qu'il faut sourire bêtement,
Y'a des colères qui sont justes, faut pas les confondre avec le vent.
Mais on nous vend le voisin comme responsable de nos manques,
Pendant que la vraie facture se signe ailleurs, dans une banque.
Le petit d'à côté porte pas ton chômage sur son dos,
Il a le même bus, le même froid, le même bulletin trop bas.
Si on doit se battre, battons-nous pour les mêmes choses :
Un toit qui tienne, un prof qui reste, un médecin pas trop loin.
On m'a dit « t'es naïf » — non, j'suis fatigué de la haine,
Elle a jamais nourri personne, elle coûte cher et elle traîne.
J'préfère un pays qui répare à un pays qui a raison,
Parce qu'avoir raison tout seul, ça s'appelle une maison vide.

[Pre-Chorus: Piano arpeggio higher, snare roll, Brandy-style harmonies stacking]
(Ad-lib: Les fractures, ça se recoud aussi...)
On se parle plus, d'accord. Alors on va s'asseoir.
On coupe l'écran, on met deux chaises, on prend le soir.
Ça répare pas tout... mais quelque part, ça commence.

[Chorus: Same hook, wider harmony stack, ad-libs hard panned]
(Call: Fractures) Response: [Panoramic Group Vocals: ON SE DIVISE]
(Call: Sous le ciel gris) Response: [Panoramic Group Vocals: LA COLÈRE S'AIGUISE]
(Call: Fractures) Response: [Panoramic Group Vocals: ENTRE DEUX MONDES]
(Call: Qui va tendre la main ?) Response: [Panoramic Group Vocals: NOUS, EN PREMIER]
(Call: Quel avenir ?) Response: [Panoramic Group Vocals: CELUI QU'ON RÉPARE]
Est-ce qu'on saura encore se souvenir ?

[Bridge: Piano breakdown, drums cut, Voice pitch variation, very expressive]
[Vocalist 1: deep melodic run] On est ensemble, ou pas ?
[Vocalist 2: whispered ad-libs, ultra-wide] La France a mal...
(voix nue, aucun effet, sans musique)
Alors soigne-la où t'es.
Pas sur un plateau. Chez toi. Dans ta rue. Ce soir.
[DMC Routine: sharp rhythmic cuts over the piano, record rewind]
[Silence: one bar, piano note ringing alone]

[Final Chorus: Maximum intensity, all-in harmonies, tenor soaring, piano-driven]
(Call: Fractures) Response: [Panoramic Group Vocals: ON SE RELÈVE]
(Call: Sous le ciel gris) Response: [Panoramic Group Vocals: LA LUMIÈRE SE LÈVE]
(Call: Fractures) Response: [Panoramic Group Vocals: ENTRE DEUX MONDES]
(Call: Qui va tendre la main ?) Response: [Panoramic Group Vocals: NOUS, EN PREMIER]
(Call: Quel avenir ?) Response: [Panoramic Group Vocals: CELUI QU'ON RÉPARE]
(Ad-lib: envolée finale) Se souvenir...

[Outro: Smooth fade, final piano solo, distant city, a door closing]
(parlé, calme)
Réparer les fractures.
Ghetto Star Conscience.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 84. Tonalité — La mineur.** Le registre où un piano acoustique sonne
grave et plein sans devenir boueux, et où un ténor peut monter sur le refrain
sans crier. Le pré-refrain part sur l'arpège en Fa majeur : c'est cette
éclaircie qui prépare le mot « commence ».

**Delivery — trois niveaux.**
1. *Couplets* : posé, réfléchi, **sur le temps**, articulé. Le texte est fait
   d'images concrètes — l'infirmière, les gobelets, le pain mis de côté — il
   faut les laisser se déposer. Aucune emphase, aucune colère jouée.
2. *Pré-refrain* : la voix se redresse, commence à chanter, harmonies qui
   s'empilent derrière.
3. *Refrain* : ténor plein, ouvert, réponses de groupe **après** l'appel.

**Deux moments à ne pas rater.**
- « Alors soigne-la où t'es. Pas sur un plateau. Chez toi. Dans ta rue. Ce
  soir. » — voix nue, **sans musique**, presque parlée. C'est la thèse du
  morceau, elle doit arriver dans le silence.
- Le retournement du refrain final. Le premier `ON SE RELÈVE` doit être chanté
  **plus fort que tout le reste du morceau** : c'est le seul endroit où le
  public comprend que quelque chose a changé.

**Sur les majuscules des réponses de groupe.** Elles sont conservées ici parce
qu'elles sont **intentionnelles** — ce sont des cris de foule, pas des échos.
C'est le seul usage où la majuscule sert : une intensité, pas une répétition
mécanique de l'appel.

**Leviers de re-génération.** Style à 62 caractères de marge, paroles à 446.
- Piano pas assez dominant → `piano front and centre in the mix` (+35).
- Pas assez cinématographique → `sweeping cinematic strings` (+27).
- Refrain pas assez immense → `huge gospel-style harmony stacking` (+36).
- Batterie trop présente sur les couplets → `drums low in the mix on verses` (+32).
- `no low-quality recording` est **volontairement absent** du bloc : le style
  demande `vinyl crackle bed`, garder l'exclusion mettrait Suno en contradiction.
