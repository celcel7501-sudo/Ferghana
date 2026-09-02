# « Ça Se Voit » — R&B français rapide, deux clips, 120 BPM

Brief : trois tags d'**architecture vocale** — `lush multi-layered vocal
harmonies`, `complex R&B vocal runs`, `panoramic vocal layering` — plus « banger
rapide, deux clips ». Les tags ne décrivent pas une production, ils décrivent un
empilement de voix. C'est ce qui a décidé de la scission, et même de l'élément
persistant.

| Champ | Clip 1 | Clip 2 |
|---|---|---|
| Style | **784 / 1000** — marge 216 | **781 / 1000** — marge 219 |
| Style recollé (repli) | 940 / 1000 — marge 60 | 937 / 1000 — marge 63 |
| Paroles | **2953 / 5000** | **2048 / 5000** |
| Ratio hook / couplets | **1,22** | hook pur — aucun couplet |
| Balises en début de ligne | 11 pour 11 sections | 9 pour 9 sections |

---

## 🧪 ANALYSE DU MIX

**Neuvième raison de scinder : l'a cappella.** Le dossier en listait huit. Celle-ci
manquait, et c'est la seule qui découle d'un brief purement vocal. Le clip 2
s'ouvre sur **seize mesures sans un seul instrument**, puis tout revient d'un
bloc.

Test de la variable unique : « tout sauf les voix disparaît ». Six mots, pas de
« et ». C'est **une** variable perçue.

**Et c'est la preuve de l'arrangement.** Un empilement de voix qui ne tient pas
debout seul n'est pas un arrangement, c'est un doublage. Le clip 2 est
littéralement le test — si les harmonies sonnent maigres une fois nues, l'écriture
vocale du clip 1 était de la décoration.

**L'élément persistant a été choisi par contrainte, pas par goût.** La règle du
dossier dit qu'il doit survivre à toutes les ruptures. Or la rupture ici est le
départ de **tous les instruments**. Un piano, un stab, un riff de guitare : tous
disqualifiés. Le seul candidat possible était **une nappe d'harmonies vocales
sans paroles**.

```
Persistent wordless stacked harmony pad throughout, sung, present in every section.
```

Quand la contrainte ne laisse qu'un candidat, c'est en général le bon.

**Correction d'une règle du dossier : le vide harmonique n'est pas toujours
requis.** La règle disait qu'une jointure entre deux clips demande un vide —
typiquement un riser de bruit blanc, qui n'a aucune hauteur et ne peut donc pas
contredire la suite. Elle était écrite pour le cas d'une **modulation**.

Ici la tonalité ne change pas, et le clip 2 ouvre **sur des voix**, c'est-à-dire
sur de la hauteur. Le vide serait un contresens : la jointure demande l'inverse,
une **continuité**. La nappe d'harmonies tient à la fin du clip 1 et reprend au
début du clip 2, dans la même tonalité.

> **Règle corrigée** : le vide harmonique est requis **quand la tonalité
> change**. À tonalité constante, la jointure veut un élément qui traverse.

**Le clip 2 mène par la voix, et ce n'est pas cosmétique.** Suno pondère la tête
du prompt. Un clip 2 qui commencerait par `French R&B club banger` ferait entrer
la batterie malgré la consigne. D'où l'ouverture littérale du champ de style :

```
Female vocal group a cappella opening, then French R&B club banger…
```

Et la durée du silence instrumental est **comptée en mesures**, pas suggérée :
`no instruments at all for the first sixteen bars`.

**Le sujet et la forme disent la même chose.** Le morceau parle de quelqu'un qui
a arrêté de cacher ce qui se voit ; le clip 2 enlève tout ce qui pouvait cacher
les voix. La forme est l'argument — même construction que sur
`examples/la-meme-heure.md`, où un texte sur la répétition quotidienne a un hook
qui se répète trois fois.

**Refrain à squelette constant**, quatre lignes de **8 syllabes**, forme A B C A :

```
Ça se voit dans ma façon d'être,     8
Ça s'entend quand je dis ton nom,    8
J'ai arrêté de faire semblant,       8
Ça se voit dans ma façon d'être.     8
```

Les runs R&B sont placés **en fin de ligne uniquement**. Au milieu d'une phrase
ils transformeraient la franchise du texte en performance — et le morceau parle
justement de ne plus performer.

---

## 🎛️ STYLE PROMPT — CLIP 1 — 784 / 1000 caractères

```
French R&B club banger, fast and glossy, 120 BPM, in B minor. Crisp programmed drums, syncopated kick pattern, layered claps on the backbeat, tight offbeat hats, rim clicks. Persistent wordless stacked harmony pad throughout, sung, present in every section. Warm Rhodes chords, round analog bassline with portamento, muted plucked guitar, string stabs into the chorus. Female lead, warm alto, close and conversational on the verses, full and soaring on the chorus, lush multi-layered vocal harmonies, complex R&B vocal runs on the line ends, panoramic vocal layering, huge group responses. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. Ultra-wide stereo field, lead centred and dry. Polished club master, deep round low end, preserved dynamics.
```

## 🎛️ STYLE PROMPT — CLIP 2 — 781 / 1000 caractères

Dérivé du clip 1 : même genre, même tempo, **même tonalité**, même persistance.
Deux changements seulement, et ils disent la même chose — la voix passe en tête,
et le silence instrumental est compté en mesures.

```
Female vocal group a cappella opening, then French R&B club banger, 120 BPM, in B minor. The track opens with voices only, no instruments at all for the first sixteen bars. Lush multi-layered vocal harmonies, complex R&B vocal runs, panoramic vocal layering, warm alto lead over a wordless stacked harmony pad, breath and lip noise audible, huge group responses. Then the full band returns at once on the downbeat: crisp programmed drums, syncopated kick, layered claps, offbeat hats, warm Rhodes, round analog bassline, string stabs. Persistent wordless stacked harmony pad throughout, present in every section. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. Ultra-wide stereo field, lead centred and dry. Polished club master, deep low end.
```

---

## 🚫 BLOC D'EXCLUSION — 145 caractères, commun aux deux clips

Champ **Exclude Styles**. En mode repli → 940 et 937 / 1000.

```
no mumble rap, no trap drums, no distorted vocals, no generic EDM, no big-room EDM drop, avoid messy mix, no cluttered low end, avoid thin sounds
```

`no autotune` est **absent volontairement** : le morceau est un empilement
d'harmonies, et l'exclure se retournerait contre la couche principale.

---

## 📝 SCRIPT & PAROLES — CLIP 1 — 2953 / 5000 caractères

```
[Intro: Wordless stacked harmonies alone, no drums, one Rhodes chord, close]
(Instruction: Persistent wordless stacked harmony pad throughout)
(les voix entrent avant tout le reste, très proches)
(Ooh... ooh...)
(parlé, bas, en souriant)
Bon. Autant le dire tout de suite.

[Verse 1: Warm alto, close and conversational, drums entering, claps light]
J'ai mis trois heures à choisir un truc que je mettrai pas,
J'ai changé deux fois de parfum, j'ai gardé le premier.
Ma copine m'a regardée, elle a rien dit, elle a souri,
Et j'ai compris que j'avais déjà perdu la partie.
(les voix seules, deux temps)
Je contrôle ma voix au téléphone, mais pas mes mains,
Je contrôle mes phrases, jamais ma joie.
Y'a des gens qui cachent bien — moi j'ai jamais su faire,
Et cette année j'ai arrêté d'essayer.

[Pre-Chorus: String stabs entering, harmonies stacking, claps doubling]
J'ai plus l'énergie de faire l'indifférente,
J'ai plus l'âge de compter jusqu'à trois avant de répondre.
Regarde-moi une seconde —
Écoute bien —

[Chorus: Full and soaring, lush multi-layered harmonies, runs on line ends]
Ça se voit dans ma façon d'être,
Ça s'entend quand je dis ton nom,
J'ai arrêté de faire semblant,
Ça se voit dans ma façon d'être.

[Post-Chorus: Huge group responses, panoramic layering, claps, drums full]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]

[Verse 2: Same alto, freer and higher, bass forward, guitar answering]
Tu m'as demandé si ça allait, j'ai dit ça va très bien,
Le « très » était de trop et on le sait tous les deux.
J'ai jamais su mentir avec le bon nombre de mots,
J'en mets toujours un de plus, et c'est lui qui me trahit.
(les voix seules, deux temps)
Alors autant le dire avec le visage que j'ai,
Autant le dire avec la voix que j'ai pas travaillée.
Si tu cherches quelqu'un qui cache, va voir ailleurs,
Moi je viens avec tout ce qui se voit.

[Pre-Chorus: Strings higher, harmonies tripled, snare rolls, claps stacking]
J'ai plus l'énergie de faire l'indifférente,
J'ai plus l'âge de compter jusqu'à trois avant de répondre.
Regarde-moi une seconde —
Écoute bien —

[Chorus: Same hook, harmonies wider, runs improvised, drums full]
Ça se voit dans ma façon d'être,
Ça s'entend quand je dis ton nom,
J'ai arrêté de faire semblant,
Ça se voit dans ma façon d'être.

[Post-Chorus: Huge group responses, panoramic layering, claps, drums full]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]

[Bridge: Drums and bass drop out one by one, harmonies hold, no reverb added]
(la batterie sort, puis la basse, puis le Rhodes — les voix restent)
J'ai rien préparé pour ce moment-là.
C'est peut-être ça, le truc.

[End of Clip One: Instruments all gone, stacked harmonies still holding, no fade]
(le tapis de voix ne s'arrête pas — il tient jusqu'au bout du clip)
(Ooh... ooh...)
```

## 📝 SCRIPT & PAROLES — CLIP 2 — 2048 / 5000 caractères

```
[Intro: Sixteen bars a cappella, voices only, no instruments, breath audible]
(Instruction: Persistent wordless stacked harmony pad throughout)
(aucun instrument — que des voix, on entend les respirations)
(Ooh... ooh...)

[A Cappella Chorus: Lead alto and full harmony stack, no drums, no bass at all]
Ça se voit dans ma façon d'être,
Ça s'entend quand je dis ton nom,
J'ai arrêté de faire semblant,
Ça se voit dans ma façon d'être.

[A Cappella Break: Group responses only, hand claps by the singers, no beat]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]
(les chanteuses frappent dans les mains, rien d'autre)
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]
(voix lead seule, une phrase improvisée, longue, qui monte)

[Full Band Returns: Everything enters at once on the downbeat, no fill, no riser]
(tout revient d'un bloc — batterie, basse, Rhodes, cordes)
Et voilà. C'était sous vos yeux depuis le début.

[Final Chorus: All harmonies, widest field, string stabs, drums full]
Ça se voit dans ma façon d'être,
Ça s'entend quand je dis ton nom,
J'ai arrêté de faire semblant,
Ça se voit dans ma façon d'être.

[Post-Chorus: Huge group responses, panoramic layering, claps double-time]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]

[Final Chorus: Same hook, lead improvising runs above the stack, strings maximum]
Ça se voit dans ma façon d'être,
Ça s'entend quand je dis ton nom,
J'ai arrêté de faire semblant,
Ça se voit dans ma façon d'être.

[Post-Chorus: Whole room, responses tripled, claps double-time, band full]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]
(Call: Ça se voit) Response: [Panoramic Group Vocals: Ça s'entend]

[Outro: Band stops dead, harmonies alone again, spoken close, hard stop]
(les voix restent seules, comme au debut du clip)
(Ooh... ooh...)
(parlé, doux, très proche)
Voilà. Maintenant tu sais.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 120.** Assez rapide pour que les claps portent en club, assez lent pour
qu'un run R&B tienne dans une fin de ligne sans se précipiter. Au-dessus de 126
les runs deviennent des ornements avalés ; en dessous de 112 le morceau cesse
d'être un banger.

**Tonalité — Si mineur, sur les deux clips.** C'est la condition de la jointure :
le tapis d'harmonies traverse la coupe. Rhodes en accords larges, basse ronde
avec portamento, stabs de cordes **au pré-refrain seulement**.

**Delivery — deux régimes nets.** Couplets proches du micro, ton de conversation,
presque parlés par moments. Refrain plein, projeté, doublé et harmonisé. **Les
runs uniquement en fin de ligne.**

**L'empilement, techniquement.** Voix lead au centre, sèche. Harmonies en trois
étages : tierces à ±40 %, quintes à ±65 %, doublure à l'octave à ±85 %. La nappe
sans paroles est la plus large et la plus réverbérée — c'est elle qui donne la
pièce, et c'est elle qui survit au clip 2.

**L'a cappella du clip 2.** Aucun instrument pendant seize mesures. Les
respirations et les bruits de bouche doivent rester audibles : c'est ce qui
distingue un a cappella d'un pad de synthé. Les claps du break sont **frappés
par les chanteuses**, pas séquencés. Puis tout revient **d'un bloc sur le premier
temps, sans fill ni riser** — un fill trahirait le raccord entre les deux clips.

**Ratio — 1,22 au clip 1, hook pur au clip 2.** Conforme à la règle : sur un
morceau scindé, le ratio se mesure clip par clip. Le clip 2 n'a aucun couplet,
donc aucun ratio — c'est un aboutissement, pas une répétition.

**Leviers de re-génération.** 216 et 219 caractères de marge avec le champ dédié.
- L'a cappella n'est pas vraiment nu → `absolutely no instruments in the intro, voices only` (+51)
- Harmonies trop fines → `three-tier harmony stack, thirds fifths and octave` (+49)
- Runs au milieu des phrases → `runs only at the end of lines, never mid-phrase` (+46)
- La batterie revient progressivement → `everything returns at once on the downbeat` (+42)
- Nappe vocale abandonnée → `the wordless pad never stops` (+28)
