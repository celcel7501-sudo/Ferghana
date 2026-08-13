# « L'Architecte du Groove » — G-Funk smooth, texte fourni

Morceau dont **les paroles viennent du client**, pas du studio. Le travail porte
sur la couche de direction, la structure et le prompt de style : le texte est
conservé mot pour mot.

**Conforme aux limites Suno** : style **820 / 1000**, paroles **4058 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

---

## 🧪 ANALYSE DU MIX

**Le texte impose la production, pas l'inverse.** C'est un texte de maîtrise
tranquille : pas de démonstration, pas de revanche, un homme qui sait faire et
qui le dit calmement. Toute production agressive le contredirait. D'où le
G-Funk : c'est le seul sous-genre funk dont l'énergie est **basse et sûre
d'elle** — ça avance sans jamais pousser. « Je mets du velours dans chaque
vibration » est une instruction de mixage autant qu'un vers.

**Pourquoi 94 BPM.** Le tempo du G-Funk classique. En dessous de 90, le morceau
devient lourd et le texte, qui compte beaucoup de syllabes par ligne, se met à
traîner. Au-dessus de 98, la nonchalance disparaît — et la nonchalance est ici
le sujet même du morceau.

**La sirène de synthé est l'élément identitaire.** Ce petit lead aigu à
portamento est ce qui fait entendre « G-Funk » en une seconde. Il est déclaré
deux fois — `Persistent high portamento synth whine throughout` dans le style,
`(Instruction: ...)` en tête des paroles — parce que Suno l'abandonne sinon
après l'intro. Un seul élément persistant par morceau : c'est celui-là, pas la
basse.

**Le vide est un choix.** Couplets sur claquements de doigts et basse
uniquement, Rhodes qui n'entre qu'au couplet 2, cordes réservées au refrain.
Un texte aussi dense en informations (métier, ville, âge, chiffres) a besoin
d'air : chaque instrument ajouté est un mot qu'on n'entend plus.

**Ce que faisaient les balises d'origine.** `[Rich, soulful harmonies, funky
bassline peak]` décrit très bien l'intention, mais ce sont des **adjectifs**, et
Suno les traite comme une ambiance moyenne appliquée à toute la section. Une
balise efficace donne un **placement** : quel instrument entre, à quel moment,
et ce que fait la voix. Même intention, converti en instructions.

---

## 🎛️ V5.5 STYLE PROMPT — 820 / 1000 caractères

```
Smooth 90s G-Funk, sun-drenched West Coast funk with French rap vocals. 94 BPM laid-back swing, crisp finger snaps, tight rimshot snare, dusty MPC-style drums, syncopated foley percussion, light mouth-percussion accents. Persistent high portamento synth whine throughout. Deep rubbery Moog-style bassline with slides, Rhodes chords, muted funk guitar, talkbox accents, warm string pad. Male voice: nonchalant poetic urban delivery, melodic slacker flow, relaxed confident phrasing, spoken asides, lush multi-layered soulful harmonies on the chorus, call-and-response backing vocals. Mixtape scratch drops, transformer cuts. Ultra-wide stereo field, panoramic vocal layering, warm analog saturation, vinyl crackle bed, golden-hour reverb. Polished radio master, punchy compression, deep round low end, preserved dynamics.
```

---

## 📝 SCRIPT & PAROLES — 4058 / 5000 caractères

Trois ajouts par rapport au texte d'origine, faciles à retirer :
le **pré-refrain** (deux lignes construites avec le vocabulaire du morceau —
« la parole », « laisse glisser »), la **routine de scratch** avant la fin, et
le **refrain final** après le pont. Tout le reste est le texte tel quel.

```
[Intro: Smooth bassline, finger snaps, sun-drenched pad, synth whine enters]
(Instruction: Persistent high portamento synth whine throughout)
(parlé, détendu, proche du micro)
Ouais... on change de fréquence.
Laisse le groove respirer.
Vingt-cinq ans de code, mais l'oreille est toujours funk.
Prestige Old School.
Rim-K.

[Verse 1: Nonchalant flow, laid-back behind the beat, dry close-mic, snaps only]
J'ouvre la session, le groove est déjà là
Pas besoin de forcer, je maîtrise le b.a.-ba
Modern Workplace, mais le soir c'est le dancefloor
Je hacke les rythmes, je trouve les pépites d'or
Depuis mes seize ans, les MK2 font la loi
Mais aujourd'hui l'IA chante avec ma voix
C'est fluide, c'est propre, c'est l'architecture du son
Je mets du velours dans chaque vibration
Quarante-neuf ans et le style est impeccable
À VLB, mon groove est indéniable.

[Pre-Chorus: Energy ramp, filter opening, snaps doubled, harmonies appear]
Monte le son, la basse a la parole (la parole)
Vingt-cinq ans qu'on affine, laisse glisser... (laisse glisser)

[Chorus: Rich soulful harmonies, funky bassline peak, call and response]
(Call: C'est l'architecte du groove, le maître de la vibe) Response: [Panoramic Group Vocals: L'architecte]
(Call: On avance en douceur, on mène la tribe) Response: [Panoramic Group Vocals: En douceur]
(Call: De Villiers-le-Bel aux couchers de soleil) Response: [Panoramic Group Vocals: VLB]
Mon son te réveille, il n'a pas de pareil
L'héritage est funky, le code est soyeux
(Call: On garde le sourire, on vise les cieux) Response: [Panoramic Group Vocals: On vise les cieux]

[Verse 2: Same flow, warmer, bass slides up, Rhodes enters, guitar muted]
La maison est payée, l'esprit est libéré
Je peux laisser la basse onduler et vibrer
Fils unique, je veille, mais je sais aussi danser
Sur un beat Aftermath, je me laisse porter
Six millions d'écoutes, c'est le monde qui valide
Que ma science du groove n'est jamais vide
Hacker du rythme, je décode le plaisir
Je scripte des bangers pour nous faire rougir
Pas de stress dans le mix, juste de la précision
La réussite est douce, c'est ma seule vision.

[Pre-Chorus: Energy ramp, talkbox answering the line, snare roll, harmonies stack]
Monte le son, la basse a la parole (la parole)
Vingt-cinq ans qu'on affine, laisse glisser... (laisse glisser)

[Chorus: Same hook, wider harmony stack, ad-libs hard panned]
(Call: C'est l'architecte du groove, le maître de la vibe) Response: [Panoramic Group Vocals: L'architecte]
(Call: On avance en douceur, on mène la tribe) Response: [Panoramic Group Vocals: En douceur]
(Call: De Villiers-le-Bel aux couchers de soleil) Response: [Panoramic Group Vocals: VLB]
Mon son te réveille, il n'a pas de pareil
L'héritage est funky, le code est soyeux
(Call: On garde le sourire, on vise les cieux) Response: [Panoramic Group Vocals: On vise les cieux]

[Bridge: Beat switch, half-time, drums cut to rimshot, funky bass and Rhodes only]
(ad-libs, souples et rythmiques, très proches du micro)
Laisse glisser... (Laisse glisser)
C'est le son du 95... (Prestige)
L'IA est dans la poche.
Le groove est dans le sang.
Tout est sous contrôle.

[DMC Routine: drums to rimshot, bass muted, two baby scratches on "Prestige"]
[Scratch: transformer cuts on "le groove", then a backspin rewind]
[Silence: one bar, everything drops out]

[Final Chorus: Full band returns at once, gospel-style stacking, voice up a tone]
(Call: C'est l'architecte du groove, le maître de la vibe) Response: [Panoramic Group Vocals: L'architecte]
(Call: On avance en douceur, on mène la tribe) Response: [Panoramic Group Vocals: En douceur]
(Call: De Villiers-le-Bel aux couchers de soleil) Response: [Panoramic Group Vocals: VLB]
Mon son te réveille, il n'a pas de pareil
L'héritage est funky, le code est soyeux
(Call: On garde le sourire, on vise les cieux) Response: [Panoramic Group Vocals: On vise les cieux]

[Outro: Funky bass solo, G-Funk synth whine fading, filter closing, tape stop]
(parlé, calme, souriant)
L'Architecte du Groove.
Rim-K.
Prestige Old School.
VLB Style.
Reste smooth.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 94, feel laid-back.** Le kick sur la grille, tout le reste légèrement en
retard : claquements de doigts, rimshot, et surtout la voix. Ne pas quantiser à
100 %.

**Tonalité — Do mineur.** Le registre où la basse rebondit sans devenir boueuse
et où la sirène de synthé peut chanter deux octaves plus haut sans agresser. Le
refrain gagne à passer par le relatif majeur (Mi bémol) sur « on vise les
cieux » — c'est la seule éclaircie du morceau, elle tombe exactement sur le mot
qui la demande.

**Delivery.** Couplets : posé, souriant, **jamais forcé**, légèrement derrière le
beat. C'est un homme assis, pas debout. Doubler uniquement les fins de vers.
Refrain : chanté, harmonies soul empilées, réponses **après** la ligne. Les
lignes « Mon son te réveille » et « L'héritage est funky » restent sans réponse
volontairement — un Call & Response sur six lignes d'affilée devient mécanique ;
laisser deux lignes respirer relance l'effet sur la dernière.

**La structure d'origine s'arrêtait avant son sommet.** Le pont menait
directement à l'outro : le morceau se terminait sur sa section la plus calme.
Le refrain final après le pont est ce qui donne au morceau un point haut, et la
mesure de silence après le backspin est ce qui le rend énorme sans ajouter un
dB.

**Détail conservé.** La balise `[End]` d'origine a été remplacée par le tape
stop dans l'outro. Si tu veux une coupure franche plutôt qu'un fondu, la
remettre coûte 6 caractères.

**Leviers de re-génération.** Style à 180 caractères de marge, paroles à 942.
- Pas assez G-Funk → `whiny lead synth on every chorus` (+33).
- Basse pas assez ronde → `deep rubbery sub bass with portamento` (+38).
- Voix trop en avant → `relaxed conversational delivery, low in the mix` (+47).
- Manque de soleil → `sunny West Coast summer atmosphere` (+35).
- Trop propre → `dusty vinyl crackle, tape saturation` (+37).
