# « Plus Fort » — French house, le versant dur

Troisième morceau French house du dossier, et le seul qui prenne la face
**agressive** du genre : riff saturé, drums compressées, énergie électro-rock.
Il ne double ni `automatique.md` (talkbox nu-disco, 121 BPM, nonchalant) ni
`one-last-song.md` (hymne filtré euphorique, 123 BPM, anglais).

**Conforme aux limites Suno** : style **854 / 1000** (dont **130** d'exclusions),
paroles **4277 / 5000**. Vérifiable par `python3 tools/count.py`.

---

## 🧪 ANALYSE DU MIX

**Trois morceaux, trois faces du même genre.** Le tableau vaut mieux qu'un
paragraphe :

| Morceau | BPM | Face du genre | Texture dominante |
|---|---|---|---|
| `automatique.md` | 121 | Nu-disco nonchalant | Talkbox chaud, basse ronde |
| `one-last-song.md` | 123 | Hymne euphorique | Cuivres disco, breakdown filtré |
| **`plus-fort.md`** | **128** | **Électro-rock dur** | **Saw saturé, drums compressées** |

Le tempo grimpe, la texture durcit, et surtout : le texte **disparaît**.

**Le riff saturé est l'unique élément identitaire.** Pas de sample, pas de
cuivres, pas de mélodie chantée : une phrase de scie saturée qui tourne du début
à la fin, déclarée persistante. Tout le morceau est construit sur son passage à
travers un filtre — fermé à l'intro, ouvert au drop, refermé au breakdown. Un
seul son, trois états. C'est le minimalisme qui fait la puissance : ajouter une
nappe ou des cuivres ici diluerait immédiatement l'impact.

**Le couplet cesse d'être un couplet.** Deux blocs de quatre lignes scandées au
vocoder — « Lundi m'a plié. Mardi m'a menti. » — soit **134 caractères de
couplet au total** contre 2118 de refrain. Ce n'est pas une écriture paresseuse,
c'est le format : à 128 BPM avec un riff saturé en permanence, aucun texte dense
ne survit au mix. Les mots doivent tenir dans les trous du sidechain.

Cette structure a d'ailleurs révélé une faiblesse du **ratio hook/couplets**
introduit avec `chaleur.md` : il sort ici à 15,8, ce qui ne veut rien dire —
diviser par un nombre proche de zéro produit un grand nombre, pas une
information. La limite de la mesure est désormais documentée dans
`references/structure-tags.md` : au-delà de 4, la grandeur utile devient le
**volume absolu de couplet**, et sous 300 caractères on écrit des slogans entre
deux drops, ce qu'il faut assumer plutôt que prendre pour de l'efficacité.

**La ligne qui empêche le morceau d'être creux.** « Je sais que demain ça
recommence. C'est pour ça que ce soir compte double. » Elle arrive au
breakdown, voix nue, sans musique — le seul moment humain d'un morceau de
machines. Sans elle, « plus fort » n'est qu'un ordre sonore ; avec elle, le
titre prend son second sens : plus fort au sens du volume, et plus fort au sens
de tenir.

**Une exclusion retirée, pour cohérence.** `avoid over-saturated bass` est
absent du bloc : le style réclame explicitement un `gritty saturated bass riff`.
Garder l'exclusion demanderait au modèle de saturer et de ne pas saturer en même
temps. `no distorted vocals` reste, en revanche — ce sont les synthés qui sont
distordus, pas la voix.

---

## 🎛️ V5.5 STYLE PROMPT — 854 / 1000 caractères

```
French electro house banger, hard and euphoric, robot-rock energy. 128 BPM four-on-the-floor, hard compressed drums, punchy kick, crisp offbeat hats, layered claps, syncopated foley percussion, heavy sidechain pumping on every kick. Persistent distorted sawtooth riff throughout. Overdriven saw lead, gritty saturated bass riff, resonant filter sweeps, siren stab, crystalline vocoder lead, rhythmic talkbox accents. Male vocoder chant and crowd shouts, very few words endlessly repeated, explosive anthemic hook, panoramic group vocal responses, formant-shifted harmonies. Ultra-wide stereo field, panoramic vocal layering, 3D surround mix, warm analog saturation. Loud club master, punchy compression, deep round low end. Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, ensure no audio artifacts, no generic EDM.
```

---

## 📝 SCRIPT & PAROLES — 4277 / 5000 caractères

```
[Intro: Distorted riff heavily filtered, siren stab, no drums]
(Instruction: Persistent distorted sawtooth riff throughout)
[Vocoder: Plus... fort...]

[Build: Sixteen bars, filter opening slowly, snare roll doubling, crowd rising]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]
(Call: Plus fort) Response: [Panoramic Group Vocals: PLUS FORT]
[Silence: one bar, everything drops out]

[Chorus: Full drop, distorted riff maximum, sidechain deep, crowd shouting]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]
(Call: Monte le son jusqu'à c'que ça tienne debout) Response: [Panoramic Group Vocals: Plus fort]
(Call: Ce soir on est plus fort que la semaine) Response: [Panoramic Group Vocals: Plus fort]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]

[Post-Chorus: Riff alone with crowd chant, claps, no lead vocal]
(Call: Encore) Response: [Panoramic Group Vocals: Plus fort]
(Call: Encore) Response: [Panoramic Group Vocals: Plus fort]

[Verse 1: Vocoder chant, short blocks, drums stripped to kick and claps]
[Vocoder]
Lundi m'a plié.
Mardi m'a menti.
Mercredi j'ai tenu.
Jeudi j'ai rien dit.
(voix naturelle, parlée, sèche)
Vendredi minuit — la machine me rend tout.

[Build: Filter rising, siren, snare roll, crowd noise swelling]
(Call: Combien de temps t'as tenu ?) Response: [Panoramic Group Vocals: Toute la semaine]
(Call: Et ce soir ?) Response: [Panoramic Group Vocals: PLUS FORT]
[Silence: one bar, everything drops out]

[Chorus: Full drop, riff wider, ad-libs hard panned, crowd huge]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]
(Call: Monte le son jusqu'à c'que ça tienne debout) Response: [Panoramic Group Vocals: Plus fort]
(Call: Ce soir on est plus fort que la semaine) Response: [Panoramic Group Vocals: Plus fort]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]

[Post-Chorus: Riff alone with crowd chant, claps, no lead vocal]
(Call: Encore) Response: [Panoramic Group Vocals: Plus fort]
(Call: Encore) Response: [Panoramic Group Vocals: Plus fort]

[Verse 2: Vocoder chant, same short blocks, bass riff exposed]
[Vocoder]
Pas de discours.
Pas de mode d'emploi.
Deux mille watts.
Et personne au-dessus de moi.
(voix naturelle, parlée, sèche)
J'ai pas besoin d'avoir raison. J'ai besoin que ça tape.

[Build: Filter rising, siren, snare roll, crowd noise swelling]
(Call: Combien de temps t'as tenu ?) Response: [Panoramic Group Vocals: Toute la semaine]
(Call: Et ce soir ?) Response: [Panoramic Group Vocals: PLUS FORT]
[Silence: one bar, everything drops out]

[Chorus: Full drop, riff maximum, crowd shouting, brass-like saw stabs]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]
(Call: Monte le son jusqu'à c'que ça tienne debout) Response: [Panoramic Group Vocals: Plus fort]
(Call: Ce soir on est plus fort que la semaine) Response: [Panoramic Group Vocals: Plus fort]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]

[Breakdown: Everything low-passed, half-time, no sidechain, stretched vocoder]
[Vocoder: stretched, distant, drowned in reverb]
Plus... fort...
(voix nue, sèche, sans musique, très proche)
Je sais que demain ça recommence.
C'est pour ça que ce soir compte double.
[Panoramic Group Vocals: whispered, ultra-wide: Plus fort... plus fort...]

[Build: Twenty-four bars, filter opening, riff returning distorted, crowd max]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]
(Call: Plus fort) Response: [Panoramic Group Vocals: PLUS FORT]
[Silence: one bar, everything drops out]

[Final Chorus: Everything at once, riff up an octave, 3D vocal wall]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]
(Call: Monte le son jusqu'à c'que ça tienne debout) Response: [Panoramic Group Vocals: Plus fort]
(Call: Ce soir on est plus fort que la semaine) Response: [Panoramic Group Vocals: Plus fort]
(Call: Plus fort) Response: [Panoramic Group Vocals: Plus fort]

[Post-Chorus: Whole room, riff and claps, double-time hats]
(Call: Encore) Response: [Panoramic Group Vocals: Plus fort]
(Call: Encore) Response: [Panoramic Group Vocals: Plus fort]

[Outro: Riff filtering down, sidechain fading, room tone, house lights]
[Vocoder: Plus... fort...]
(parlé, essoufflé)
Voilà. Là on est prêts pour lundi.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 128, four-on-the-floor.** Kick sur chaque temps, hats sur les
contretemps, **aucune variation de pattern** hors des builds. Toute la
progression passe par le filtre du riff et par l'ajout de claps.

**Tonalité — Fa dièse mineur.** Le riff se joue sur la tonique et la septième
mineure uniquement : deux notes suffisent, une troisième le rendrait mélodique
et lui ferait perdre sa fonction rythmique. Le riff monte d'une octave au drop
final — seule montée du morceau.

**Delivery.** Vocoder pour les couplets, **articulé et scandé**, une phrase
courte par mesure. Les répliques parlées sont **sèches, sans réverbe, très
proches** : elles doivent trancher avec le traitement machine de tout le reste.
Le refrain n'est pas chanté, il est **crié en groupe**.

**La mécanique du morceau tient en trois gestes.** Filtre fermé, mesure de
silence, drop. Répétés trois fois, avec un build de plus en plus long : 16
mesures, 16, puis 24 avant le drop final. **La mesure de silence avant chaque
drop est non négociable** — si Suno la remplit, le morceau perd toute sa
dynamique et devient plat malgré le volume.

**Le breakdown coupe le sidechain.** Après deux minutes de pompage continu,
l'arrêt du mouvement fait plus d'effet que n'importe quel ajout. C'est aussi le
seul endroit où la voix est humaine.

**Leviers de re-génération.** Style à 146 caractères de marge, paroles à 723.
- Pas assez dur → `overdriven distorted saw riff` (+31).
- Drop qui n'explose pas → `full-spectrum drop, everything at once` (+38).
- Pompage insuffisant → `extreme sidechain ducking` (+26).
- Trop propre → `hard compressed drums, analog drive` (+36).
- Marge de 723 caractères sur les paroles : **ne pas la remplir**. Ajouter du
  texte ici casserait le format.
