# « One Last Song » — club anthem French house, paroles en anglais

Premier morceau du dossier écrit **en anglais** : la langue suit le brief, pas
le réglage par défaut du studio. Architecture d'hymne club filtré — vocoder
persistant, grand breakdown filtré au milieu, drop d'un bloc.

**Conforme aux limites Suno** : style **856 / 1000**, paroles **4425 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

---

## 🧪 ANALYSE DU MIX

**L'architecture, pas le son.** Ce qui rend ce type d'hymne reconnaissable
n'est pas le choix des sons, c'est la **forme** : montée euphorique, puis un
long tunnel filtré au milieu qui retire tout, puis un retour d'un seul bloc.
On peut avoir les meilleurs sons du monde, sans ce creux au centre le morceau
n'a pas de sommet — parce qu'un sommet n'existe que par contraste avec le trou
qui le précède.

**Le breakdown est un vide, pas une variation.** Batterie coupée, sidechain
coupé, tout passé en passe-bas, vocoder étiré et noyé de réverbe. Le morceau
qui pompait depuis deux minutes s'arrête net de respirer. C'est la raison pour
laquelle la balise dit `no sidechain` : garder le pompage pendant le breakdown
annule tout l'effet et le morceau devient linéaire.

**Les seize mesures de build sont écrites comme du texte, pas comme un tag.**
Trois appels identiques dont seule la réponse change — `One last song`, puis
`Louder`, puis `LOUDER`. La majuscule sert ici, contrairement à un refrain :
c'est une indication d'intensité croissante sur un mot unique, pas un écho
mécanique de la ligne entière. Et la mesure de silence juste avant le drop fait
plus pour l'impact que n'importe quel réglage de compression.

**Le vocoder porte le morceau de bout en bout.** Déclaré deux fois — `Persistent
vocoder lead melody throughout` dans le style, `(Instruction: Persistent vocoder
melody)` en tête des paroles. C'est lui qui rend les trois minutes cohérentes
malgré le trou du milieu : le motif est le fil qui traverse le vide.

**Pourquoi 123 BPM.** Le tempo exact de la house euphorique : assez rapide pour
que le kick pousse, assez lent pour qu'une foule puisse chanter la réponse
entre deux temps. À 128, le refrain devient impossible à reprendre en criant.

**Un texte simple qui n'est pas vide.** Les paroles d'un hymne club doivent
tenir dans une bouche fatiguée à quatre heures du matin — donc des mots courts
et des voyelles ouvertes, pour le chant collectif et pour le vocoder qui mange
les consonnes. La mélancolie passe par les détails concrets (les chaussures à
la main, le videur qui a renoncé à trois heures), pas par le vocabulaire.

---

## 🎛️ V5.5 STYLE PROMPT — 856 / 1000 caractères

```
Euphoric filtered French house club anthem, disco-sample driven. 123 BPM four-on-the-floor, heavy sidechain pumping on every kick, crisp offbeat hats, layered handclaps, syncopated foley percussion in the sidechain gaps. Persistent vocoder lead melody throughout. Crystalline vocoder vocals, talkbox accents, chopped disco horn loop, filtered string stabs, round analog bassline with portamento glides, Rhodes chords. Long filtered breakdown at the midpoint: everything low-passed, half-time, stretched vocoder, sixteen-bar filter rise into the drop. Male tenor under vocoder, joyful anthemic hook, lush multi-layered harmonies, panoramic group vocal responses, sing-along crowd chants. Ultra-wide stereo field, panoramic vocal layering, warm analog saturation, 3D surround mix. Loud club master, punchy compression, deep round low end, preserved dynamics.
```

---

## 📝 SCRIPT & PAROLES — 4425 / 5000 caractères

```
[Intro: Filtered disco horn loop, sidechain pumping, vocoder motif enters]
(Instruction: Persistent vocoder melody throughout)
[Vocoder: One... last... song...]

[Verse 1: Male tenor under light vocoder, dry and close, drums half-open]
Four in the morning and the lights are low,
Nobody here is ready to go.
No car, no money, no place to be,
Just this room and this melody.
Shoes in my hand and the floor is warm,
We came in strangers, we're leaving as one.
I don't know your name and it's fine by me,
Tonight the only name is the beat.

[Pre-Chorus: Energy ramp, long filter sweep, claps building, harmonies appear]
(Call: DJ, look at us, we're still alive) Response: [Panoramic Group Vocals: Still alive]
(Call: Don't turn it down, don't turn on the lights) Response: [Panoramic Group Vocals: Not tonight]
We worked all week for these four walls,
So give us one more before it falls...

[Chorus: Explosive Hook, Tenor rise, anthemic call and response, full sidechain]
(Call: One last song) Response: [Panoramic Group Vocals: One last song]
(Call: Don't let the morning take it from us) Response: [Panoramic Group Vocals: Don't let it stop]
(Call: One last song) Response: [Panoramic Group Vocals: One last song]
(Call: Hands up high if you feel it coming) Response: [Panoramic Group Vocals: Hands up high]

[Post-Chorus: Vocoder chant, crowd unison, claps, filter wide open]
(Call: All night, all night) Response: [Panoramic Group Vocals: We don't go home]
(Call: All night, all night) Response: [Panoramic Group Vocals: We don't go home]

[Verse 2: Same voice, warmer, bassline gliding, foley percussion up front]
Somebody's crying, somebody's fine,
Somebody found somebody tonight.
Tomorrow's a stranger we'll meet on the way,
Right now there's nothing but the sound we play.
The bouncer is smiling, he gave up at three,
Even the ceiling is moving with me.
We're not escaping, we're not running late,
We're just refusing to close the gate.

[Pre-Chorus: Energy ramp, claps doubled, horn stabs, vocoder stacking under]
(Call: DJ, look at us, we're still alive) Response: [Panoramic Group Vocals: Still alive]
(Call: Don't turn it down, don't turn on the lights) Response: [Panoramic Group Vocals: Not tonight]
We worked all week for these four walls,
So give us one more before it falls...

[Chorus: Same hook, wider panoramic stack, ad-libs hard panned]
(Call: One last song) Response: [Panoramic Group Vocals: One last song]
(Call: Don't let the morning take it from us) Response: [Panoramic Group Vocals: Don't let it stop]
(Call: One last song) Response: [Panoramic Group Vocals: One last song]
(Call: Hands up high if you feel it coming) Response: [Panoramic Group Vocals: Hands up high]

[Post-Chorus: Vocoder chant, crowd unison, claps, filter wide open]
(Call: All night, all night) Response: [Panoramic Group Vocals: We don't go home]
(Call: All night, all night) Response: [Panoramic Group Vocals: We don't go home]

[Breakdown: Beat switch, drums cut, everything low-passed, no sidechain, half-time]
(vocoder, stretched, distant, drenched in reverb)
One... last... song...
(spoken, close and completely dry)
Keep it going. Please. Just keep it going.
[Panoramic Group Vocals: whispered, ultra-wide: Don't stop... don't stop...]

[Build: Sixteen bars, filter opening slowly, snare roll doubling, crowd noise rising]
(Call: One last song) Response: [Panoramic Group Vocals: One last song]
(Call: One last song) Response: [Panoramic Group Vocals: Louder]
(Call: One last song) Response: [Panoramic Group Vocals: LOUDER]
[Silence: one bar, everything drops out]

[Drop: Full band returns at once, horns at maximum, 3D vocal wall, tenor up a tone]
(Call: One last song) Response: [Panoramic Group Vocals: One last song]
(Call: Don't let the morning take it from us) Response: [Panoramic Group Vocals: Don't let it stop]
(Call: One last song) Response: [Panoramic Group Vocals: One last song]
(Call: Hands up high if you feel it coming) Response: [Panoramic Group Vocals: Hands up high]

[Post-Chorus: Vocoder chant, whole room singing, double-time claps, huge horns]
(Call: All night, all night) Response: [Panoramic Group Vocals: We don't go home]
(Call: All night, all night) Response: [Panoramic Group Vocals: We don't go home]

[Outro: Filter closing slowly, vocoder alone, room noise, house lights, tape stop]
[Vocoder: One... last... song...]
(spoken, out of breath, smiling)
Okay. Okay. That was the last one.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 123, four-on-the-floor.** Kick sur chaque temps, hats sur les
contretemps, claps empilés sur 2 et 4. Le foley se place **dans les trous du
sidechain** : c'est la seule fenêtre où de petits sons restent audibles sous les
cuivres.

**Tonalité — Ré mineur, relatif Fa majeur.** Boucle Dm7 – Bbmaj7 – F – C. Les
accords à septième empêchent la house de sonner froide, et le passage par le
Fa majeur au refrain est ce qui produit l'euphorie — la même progression en
mineur strict donnerait un morceau sombre avec le même arrangement.

**Delivery.** Couplets : voix naturelle sous un vocoder léger, proche du micro,
presque parlée, sans forcer. Refrain : ténor plein sous vocoder plus marqué,
montée d'un ton au drop final. **Aucun vibrato** — une foule ne peut pas
reprendre un vibrato.

**Articulation pour le vocoder.** Voyelles ouvertes, syllabes détachées :
`One... last... song...`. Le vocoder mange les consonnes, un mot serré sortirait
en bouillie. C'est aussi pour ça que la réponse de la foule est toujours un mot
déjà entendu dans l'appel.

**Le moment à protéger.** La mesure de silence entre le build et le drop. Si
Suno la remplit, tout le morceau perd son sommet. Elle est déclarée en balise
propre (`[Silence: one bar, everything drops out]`) précisément pour qu'elle
survive à la génération.

**Leviers de re-génération.** Style à 144 caractères de marge, paroles à 575.
- Breakdown trop court → `extended two-minute filtered breakdown` (+38).
- Pas assez euphorique → `uplifting major-key horn stabs` (+32).
- Vocoder trop discret → `vocoder on every vocal line` (+28).
- Drop qui n'explose pas → `full-spectrum drop, everything at once` (+38) et
  couper `talkbox accents`.
- Foule inaudible → `festival crowd singing along` (+30).
