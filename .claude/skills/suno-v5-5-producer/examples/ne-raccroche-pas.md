# « Ne Raccroche Pas » — chanson française, production urbaine minimale, 72 BPM

Rupture de registre. Après neuf morceaux club d'affilée, le contraire exact :
une voix, une guitare, un violoncelle, et **du silence écrit dans la partition**.
Aucun refrain scandé, aucune foule, aucune harmonie empilée — les trois outils
sur lesquels tout le dossier reposait jusqu'ici.

**Conforme aux limites Suno** : style **885 / 1000**, paroles **2762 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **0,54** — le plus bas du dossier, sous
`chacun-son-tour.md` (0,65).

---

## 🧪 ANALYSE DU MIX

**Le protocole a un angle mort, et ce morceau le montre.** Tout ce qui a été
construit ici optimise la **densité** : couches empilées, persistance, gang
vocals, spatialisation maximale, et un bloc d'exclusions qui interdit
explicitement `thin sounds` en réclamant `club loudness` et
`punchy compression`. Appliqué tel quel à une chanson, ce bloc détruit le
morceau : il chasse la finesse d'un arrangement guitare-voix, écrase la dynamique
qui **est** le sujet, et supprime le souffle et le bruit de pièce qu'on veut
absolument garder. Bloc entièrement recomposé — quatrième variante du dossier, et
la première où presque aucun terme standard ne survit :

```
Exclude: no autotune, no trap drums, no generic EDM, no gang vocals, avoid over-compression, avoid cluttered arrangement.
```

**Le silence est écrit comme du contenu.** `[Silence: two bars, room tone only]`
au milieu du pont. Sur tous les autres morceaux, le silence était une
ponctuation avant un retour — une mesure pour rendre le refrain plus gros. Ici
c'est le sujet : « Là, tu vois... » suivi de deux mesures de rien, puis « C'est
exactement ça que je voulais dire. » La phrase manquante est la seule chose que
le morceau raconte.

**Une seule voix, et l'autre personne n'est jamais entendue.** Le morceau est un
coup de téléphone dont on n'a qu'un côté. Chaque réplique d'elle est un blanc.
C'est ce qui justifie techniquement `one voice only, single-take feel, no vocal
doubling, no ad-libs, no backing crowd` : sur un prompt français, Suno ajoute des
chœurs par réflexe, et le moindre doublage vocal casserait le dispositif.

**Correction de ma propre règle du refrain.** Le protocole dit : *le refrain est
identique à l'écrit entre les occurrences*. C'est une règle de mémoire mélodique,
écrite pour des disques à hook. En chanson, la chute est précisément le
déplacement du dernier passage. Le correctif exact :

> **Trois passages identiques achètent la mémoire ; le quatrième peut déplacer
> exactement une ligne — et ce doit être la première**, celle que l'auditeur
> chante déjà d'avance dans sa tête.

Ici : « Ne raccroche pas. » → « Tu peux raccrocher. » Deux mots, trois lignes
inchangées derrière, et tout le morceau bascule. Déplacer une ligne du milieu
n'aurait rien produit — personne ne l'attend.

**Le rubato est déclaré.** `slightly loose rubato timing, not quantised` : sans
cette mention, Suno cale le chant sur la grille et une chanson calée sur la
grille sonne comme une maquette. C'est le seul morceau du dossier où le
flottement rythmique est un objectif et non un défaut.

**La batterie entre tard et repart avant la fin.** Guitare et contrebasse au
couplet 1, balais au couplet 2, plus rien au couplet 3. L'arrangement monte puis
**redescend** — l'inverse de tous les autres morceaux du dossier, qui empilent
jusqu'au dernier refrain.

---

## 🎛️ V5.5 STYLE PROMPT — 885 / 1000 caractères

```
Intimate French chanson with a modern urban production, 72 BPM, slightly loose rubato timing, not quantised. Sparse brushed drums entering late, soft kick, no hi-hats, light room percussion. Persistent fingerpicked acoustic guitar arpeggio throughout. Upright double bass, warm Rhodes chord bed, single cello line, subtle string swell, breath and room tone left in. Male baritone, close-mic spoken-sung delivery, nonchalant poetic urban phrasing, conversational, almost whispered on the low lines, one voice only, single-take feel, no vocal doubling, no ad-libs, no backing crowd. Wide natural stereo, dry centred vocal, deep 3D room, no reverb on the voice. Warm analog master, gentle compression, preserved dynamics, quiet mix with real silence between phrases. Exclude: no autotune, no trap drums, no generic EDM, no gang vocals, avoid over-compression, avoid cluttered arrangement.
```

---

## 📝 SCRIPT & PAROLES — 2762 / 5000 caractères

```
[Intro: Fingerpicked guitar alone, room tone, spoken very close, no drums]
(Instruction: Persistent fingerpicked acoustic guitar arpeggio throughout)
(le téléphone décroche, voix basse, presque murmurée)
Allô.
Non. Je dormais pas.

[Verse 1: Baritone, spoken-sung, close-mic, guitar and upright bass only]
Non, je dormais pas, j'ai le plafond qui me parle,
Y'a la lumière du couloir qui passe sous la porte.
Toi t'as la voix de quelqu'un qui a préparé sa phrase,
Alors vas-y doucement, j'ai toute la nuit.
J'entends ta cuisine derrière, le frigo, la pendule,
T'as pas changé d'appartement, t'as changé d'heure.
Y'a huit ans j'aurais raccroché en trois secondes,
Aujourd'hui je tiens le téléphone comme on tient une main.

[Refrain: Sung softly, cello entering underneath, no drums, no harmony]
Ne raccroche pas.
On n'est pas obligés de se dire quelque chose.
Laisse juste la ligne ouverte entre nous deux,
Y'a des silences qui font plus de bien que des phrases.

[Verse 2: Same voice, brushed drums entering, Rhodes bed, cello holding]
Tu me demandes si ça va, je réponds ça va,
On sait tous les deux que c'est un mot de passe.
Moi j'ai le travail, la fatigue et deux ou trois victoires
Que je raconte à personne parce que ça se raconte pas.
Toi t'as la même chose avec des noms différents,
Et on fait semblant de trouver ça normal.
On a passé dix ans à parler de la pluie,
Et jamais deux minutes de ce qu'on avait dans le ventre.

[Refrain: Same words, cello wider, brushed drums under, still no harmony]
Ne raccroche pas.
On n'est pas obligés de se dire quelque chose.
Laisse juste la ligne ouverte entre nous deux,
Y'a des silences qui font plus de bien que des phrases.

[Bridge: Everything stops but the cello, voice bare, long real silences]
(plus de guitare, plus de batterie, violoncelle seul)
Là, tu vois...
[Silence: two bars, room tone only]
(voix nue, très proche, presque parlée)
C'est exactement ça que je voulais dire.
[Silence: one bar, guitar returns alone]

[Verse 3: Voice lower and slower, guitar and cello, drums stay out]
Y'a un moment tout à l'heure où t'as failli le dire,
J'ai entendu l'inspiration, j'ai pas entendu la suite.
C'est pas grave. Le dis pas ce soir si t'es pas prêt,
Je suis là demain, et le jour d'après aussi.
Mais promets-moi juste un truc avant qu'on se quitte :
La prochaine fois, appelle avant qu'il soit trop tard.

[Final Refrain: First line changed, everything else identical, strings swell]
Tu peux raccrocher.
On n'est pas obligés de se dire quelque chose.
Laisse juste la ligne ouverte entre nous deux,
Y'a des silences qui font plus de bien que des phrases.

[Outro: Guitar alone, cello fading, room tone, spoken, no tape stop]
(elle raccroche pas, on entend le frigo et la pendule)
Bon.
Bonne nuit quand même.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 72, rubato assumé.** Le chiffre est une indication, pas une grille. Le
chant doit pouvoir traîner d'une demi-croche sur les fins de phrase et rattraper
au vers suivant. `not quantised` est écrit exprès : c'est le seul morceau du
dossier où le flottement est demandé.

**Tonalité — La mineur.** Arpège en fingerpicking sur quatre accords, sans
barré : le morceau doit sonner comme quelqu'un qui joue assis sur un lit. Le
violoncelle entre au premier refrain, une seule ligne, jamais d'accord — deux
notes tenues suffisent à faire monter la gorge.

**Delivery — parlé-chanté, jamais chanté franchement.** Registre bas, très près
du micro, souffle audible, consonnes non nettoyées. Les lignes basses
(« C'est pas grave », « Bon. ») sont presque murmurées. **Aucun doublage, aucune
harmonie, aucun ad-lib** — une prise, avec ses défauts.

**Aucune réverbération sur la voix.** Toute la profondeur vient de la pièce
(`deep 3D room`) captée autour des instruments. Une voix réverbérée sur ce
morceau la sortirait du combiné téléphonique : on veut l'inverse, quelqu'un
d'aussi proche qu'une oreille.

**L'arrangement monte puis redescend.** Guitare + contrebasse (couplet 1) →
balais + Rhodes (couplet 2) → pont réduit au violoncelle → couplet 3 sans
batterie → dernier refrain avec la seule montée de cordes du morceau. C'est
l'inverse de la logique d'empilement de tous les autres titres.

**Le refrain bouge une seule fois, sur une seule ligne, et c'est la première.**
« Ne raccroche pas. » → « Tu peux raccrocher. » Les trois autres lignes ne
changent pas d'une virgule. Règle générale tirée de ce morceau :
`references/structure-tags.md`.

**Ratio hook / couplets — 0,54.** Le plus bas du dossier. C'est cohérent : un
refrain de quatre lignes courtes contre 1342 caractères de couplet. Sur ce
registre, un ratio au-dessus de 1 signifierait qu'on a écrit une chanson de
variété, pas une chanson.

**2238 caractères de marge laissés vides — la plus grande du dossier.** Comme sur
`marbre.md`, mais en plus radical. Remplir ce champ reviendrait à écrire un
quatrième couplet, et le morceau se termine exactement quand il doit.

**Leviers de re-génération.** Style à 115 caractères de marge, paroles à 2238.
- Trop produit → `just voice, guitar and cello, nothing else` (+41).
- Voix trop chantée → `spoken close-mic delivery, barely sung` (+38).
- Silences avalés → `long real pauses between phrases, no fill` (+42).
- Batterie trop présente → `brushes only on the second verse` (+33).
- Manque de corps → `warm upright bass forward in the mix` (+37), avant de
  toucher au violoncelle.
