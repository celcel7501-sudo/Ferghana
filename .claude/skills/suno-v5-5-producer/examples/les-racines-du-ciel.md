# « Les Racines du Ciel » — couplets Secteur Ä, refrain Brandy

Brief client : rap conscient, 92 BPM, couplets à l'ADN Djimi Finger (piano
mélancolique sombre, MPC-60 percutante, flow technique), refrain à l'ADN Brandy
(harmonies soyeuses, Call & Response massif, stéréo panoramique). Thème :
résilience, héritage du quartier, espoir malgré les épreuves.

**Conforme aux limites Suno** : style **895 / 1000**, paroles **4134 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,23**.

---

## 🧪 ANALYSE DU MIX

**Deux ADN qui alternent toutes les trente secondes, pas l'un après l'autre.**
`sang-froid.md` faisait se succéder deux mondes ; ici ils se relaient couplet
après refrain, six fois dans le morceau. Ça ne tient que s'il existe un **pont
harmonique** entre les deux — sinon on entend un rappeur et une chanteuse
travailler sur deux instrus différentes.

**Le pont harmonique, c'est la relative majeure.** Le piano garde exactement
ses notes ; le refrain, lui, se pose sur le **relatif majeur** de la tonalité
des couplets (ré mineur → fa majeur). Même basse, même boucle, sensation
inverse : les couplets sonnent fermés, le refrain s'ouvre. C'est le thème du
morceau devenu structure — la même terre, la lumière en plus. Le style le
déclare mot pour mot : `chorus lifts to the relative major`.

**92 BPM autorise une vraie réponse.** Sur `ca-repart.md` (104 BPM) la foule
n'avait la place que de trois syllabes. Douze BPM plus bas, la réponse peut
tenir une phrase entière : « On regarde le ciel », « Elles tiennent le ciel ».
La règle du tempo joue dans les deux sens — ralentir rachète des syllabes.
C'est ce qui rend le Call & Response « massif » demandé au brief possible sans
qu'il morde sur le temps suivant.

**La signature Brandy tient en une ligne du prompt :**
`third harmony only on the last line`. Empiler trois voix du début à la fin
aplatit tout. Deux voix pendant le refrain, une troisième **uniquement** sur la
dernière ligne — l'effet de manche se garde pour la chute, il ne fonctionne
qu'une fois par passage. Même discipline que sur `il-est-a-moi.md`.

**Le pont est un breakdown vocal, pas un beat switch.** Les quatre derniers
morceaux du dossier rompaient par le rythme (half-time, trap, batterie coupée).
Ici la rupture est celle du protocole R&B : batterie coupée, piano seul,
harmonies empilées a cappella, puis la voix lead **nue, sans réverbération**,
qui dit la seule phrase du morceau adressée directement à l'extérieur. La
routine de scratch qui suit recolle le côté rap avant le dernier refrain.

**MPC-60 est écrit tel quel — c'est autorisé.** La règle anti-censure interdit
les noms d'artistes, de marques et de labels, pas les noms de **machines** :
MPC-60, Moog, Rhodes, 808, Juno sont entrés dans le lexique de l'ingénierie du
son. Le brief nommait la machine, on la garde ; c'est plus précis que
« MPC-style » et ça ne coûte rien.

**Exclusions.** `no low-quality recording` retiré (le style demande
`vinyl crackle` et `warm tape saturation`), et **`no autotune` volontairement
non ajouté** malgré l'absence d'autotune dans le morceau : la table de conflits
de `references/negative-prompting.md` note qu'il sabote les
`stacked R&B harmonies`. Le refrain est exactement ça.

---

## 🎛️ V5.5 STYLE PROMPT — 895 / 1000 caractères

```
Conscious French rap banger with a silky R&B chorus. 92 BPM hard-hitting MPC-60 drums, heavy dusty kick, cracking rimshot snare on the backbeat, straight no swing. Persistent dark melancholic piano loop throughout. Cinematic minor-key strings, deep melodic jazz-fusion bass with fretless slides, dark brass stabs, warm Rhodes pad on the chorus, vinyl crackle. Verses: male baritone, dense internal rhyme delivery, conscious street storytelling, unpolished close-mic vocal. Chorus lifts to the relative major: lush stacked silky R&B harmonies, complex vocal runs, call-and-response backing vocals, third harmony only on the last line. Ultra-wide stereo field, panoramic vocal layering, warm tape saturation. Rhythmic turntable cuts. Cinematic master, deep tight low end. Exclude: no mumble rap, avoid messy mix, no audio artifacts, no generic trap or EDM, avoid thin sounds, no cluttered low end.
```

---

## 📝 SCRIPT & PAROLES — 4134 / 5000 caractères

```
[Intro: Piano loop alone, vinyl crackle, transformer cuts, spoken, no drums]
(Instruction: Persistent dark melancholic piano loop throughout)
(parlé, calme, proche du micro)
Les racines du ciel.
Ce qui monte, ça vient toujours d'en bas.

[Verse 1: Baritone, dense internal rhymes, MPC drums enter hard, strings low]
Y'a un arbre dans la cour qu'ils ont voulu couper deux fois,
Il a les racines sous le parking, il gêne le béton.
Nous c'est pareil : on nous a dit allez pousser ailleurs,
On a poussé quand même, on a fendu la dalle.
Mon grand-père a posé sa valise ici en soixante-douze,
Il parlait mal la langue, il a jamais mal parlé des gens.
Ma mère a fait trois métiers pour qu'on en choisisse un,
Et elle appelle ça normal, c'est ça qui me tue.
J'ai appris à compter sur les doigts de ceux qui restent,
J'ai appris à me taire quand la fierté coûte trop cher.
Ils voient une cité, moi je vois un chantier de gens,
Chacun tient un mur, et le mur tient tout le reste.

[Pre-Chorus: Strings rising, drums thinning, harmonies appearing underneath]
Regarde en bas avant de regarder en haut,
C'est là qu'on tient, c'est là que ça a commencé.
Le béton s'est fissuré, quelque chose est passé,
Et ça monte, et ça monte, et ça monte.

[Chorus: Silky stacked R&B harmonies, relative major, panoramic call and response]
(Call: On a poussé dans le béton) Response: [Panoramic Group Vocals: On regarde le ciel]
(Call: Nos racines sont en bas) Response: [Panoramic Group Vocals: Elles tiennent le ciel]
Rien n'a poussé tout seul, tout s'est payé,
Ce qui monte aujourd'hui, personne l'a donné.

[Verse 2: Same baritone, flow tightening, bass forward, strings wider]
On a enterré des rêves à l'âge où on les invente,
Et on est revenus le lendemain, sac au dos, quand même.
Y'a des matins où le plafond est plus bas que la veille,
Où l'espoir ressemble à un mot qu'on dit pour les autres.
Mais j'ai vu la petite du quatre monter sur scène en juin,
Et tout le hall s'est levé comme si c'était son fils.
C'est ça qu'ils comprennent pas quand ils filment nos façades :
Ils cadrent les fissures, ils coupent avant les fleurs.
J'écris pas pour qu'on me plaigne, j'écris pour qu'on note
Que ce qui pousse ici pousse sans arrosage.
Et si un jour je monte, je monterai avec la terre,
Parce qu'un arbre sans racines, c'est du bois, c'est plus un arbre.

[Pre-Chorus: Strings higher, harmonies stacking, snare roll, brass entering]
Regarde en bas avant de regarder en haut,
C'est là qu'on tient, c'est là que ça a commencé.
Le béton s'est fissuré, quelque chose est passé,
Et ça monte, et ça monte, et ça monte.

[Chorus: Same hook, harmonies wider, runs on the tails, third harmony at the end]
(Call: On a poussé dans le béton) Response: [Panoramic Group Vocals: On regarde le ciel]
(Call: Nos racines sont en bas) Response: [Panoramic Group Vocals: Elles tiennent le ciel]
Rien n'a poussé tout seul, tout s'est payé,
Ce qui monte aujourd'hui, personne l'a donné.

[Bridge: Drums cut, piano only, lush stacked harmonies, vocal breakdown]
(harmonies empilées, a cappella sur deux mesures)
Racines... racines...
(voix lead par-dessus, nue, sans réverbération)
On m'a demandé d'où je viens comme si c'était une excuse.
C'est une adresse. C'est pas une excuse.
(le piano remonte, les cordes reviennent)
Et tout ce qui pousse ici, ça pousse vers le haut.
[Silence: one bar, one piano chord]

[DMC Routine: crab scratches, transformer cuts, backspin into the last chorus]

[Final Chorus: All voices, widest field, gospel-style stacking, brass full]
(Call: On a poussé dans le béton) Response: [Panoramic Group Vocals: On regarde le ciel]
(Call: Nos racines sont en bas) Response: [Panoramic Group Vocals: Elles tiennent le ciel]
Rien n'a poussé tout seul, tout s'est payé,
Ce qui monte aujourd'hui, personne l'a donné.

[Chorus Tag: Harmonies only, no drums, runs and ad-libs, piano underneath]
(Elles tiennent le ciel... elles tiennent le ciel...)
(Personne l'a donné... personne l'a donné...)

[Outro: Piano loop alone, strings fading, vinyl crackle, spoken, tape stop]
(parlé, calme, exactement comme à l'intro)
Les racines du ciel.
Et l'arbre est toujours là.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 92, droit, sans swing.** Le tempo du brief, et il tombe juste : assez
lent pour douze lignes de rimes internes par couplet, assez haut pour que le
refrain R&B ne traîne pas. `straight no swing` est explicite — le swing MPC
adoucirait les couplets, et c'est le refrain qui doit apporter la douceur, pas
la batterie.

**Tonalité — ré mineur aux couplets, fa majeur au refrain.** C'est le même
matériau : la boucle de piano ne change pas une note, seuls la basse et les
harmonies vocales réinterprètent l'accord de départ. Ne pas transposer le
piano au refrain — l'effet vient précisément de ce qu'il reste identique
pendant que tout s'éclaire autour.

**Delivery — deux mondes, deux voix.** Couplets : baryton, proche du micro,
non poli, rimes internes denses, jamais crié. Refrain : voix chantée soyeuse,
souffle, deux harmonies serrées, une troisième **seulement sur la dernière
ligne**. Le passage de l'un à l'autre se fait au pré-refrain, où les harmonies
entrent **sous** la voix parlée avant de prendre le dessus — c'est ce
recouvrement qui évite la couture.

**Le refrain est identique à l'écrit** aux trois passages. Variation par les
balises seules : `relative major, panoramic call and response` → `harmonies
wider, runs on the tails, third harmony at the end` → `all voices, widest field,
gospel-style stacking`. Le tag final (harmonies seules, sans batterie) est la
seule extension, et il n'ajoute aucun mot neuf.

**Placement stéréo.** Rap au centre, sec, proche. Réponses de groupe ouvertes à
100 % des deux côtés. Les harmonies du refrain **entourent** la voix lead sans
la couvrir : lead au centre, harmonies à ±40 %, troisième harmonie à ±80 % pour
la dernière ligne uniquement. C'est la largeur qui grandit ligne après ligne,
pas le volume.

**Ratio hook / couplets — 1,23.** Régime « le texte porte le morceau » : 1479
caractères de couplet réel contre un refrain court répété trois fois plus un
tag. Un rap conscient qui monterait au-delà de 2 aurait des couplets trop
courts pour son propos ; en dessous de 0,8, le refrain Brandy n'aurait pas la
place d'exister. 1,23 est la fenêtre exacte du brief.

**Leviers de re-génération.** Style à 105 caractères de marge, paroles à 866.
- Refrain pas assez soyeux → `airy breathy R&B lead with falsetto tails` (+42).
- Couplets trop propres → `raw close-mic rap, room tone` (+29).
- Bascule majeure inaudible → `bright major-key Rhodes and strings on the
  chorus` (+49) en retirant `warm Rhodes pad on the chorus` (−30).
- Piano perdu au refrain → `piano loop audible under the harmonies` (+39).
- Réponses de groupe trop timides → `big crowd-sized response vocals` (+32).
