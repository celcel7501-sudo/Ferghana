# « Sang Froid » — le choc de deux ADN dans un seul morceau

Premier morceau du dossier construit sur **deux ADN opposés joués l'un après
l'autre** : rap conscient à cordes (Le Padre) sur la première moitié, trap
sombre à 808 saturée (Le Duc) sur la seconde. Le beat switch n'est pas un effet
de production — c'est le sujet.

**Conforme aux limites Suno** : style **917 / 1000**, paroles **3944 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **0,79** — trois couplets, 1789 caractères de texte réel.

---

## 🧪 ANALYSE DU MIX

**Le refrain est le même texte joué à deux températures.** C'est tout le
dispositif. Passages 1 et 2 : chœur gospel, cordes, cuivres, voix brute qui
monte. Passage 3, après la bascule : autotune froid, 808 dessous, **ni chœur ni
cordes**. Les mots ne changent pas d'une virgule — la règle de mémoire mélodique
est respectée à la lettre — mais « j'ai juste changé d'armure » ne veut plus dire
la même chose quand la production a effectivement changé d'armure. Le hook n'a
pas besoin d'être réécrit pour se retourner ; il a besoin d'être **rejoué
ailleurs**.

**Un seul clip, pas un Extend — et c'est un choix technique, pas de confort.**
Le workflow Extend de `l-elite.md` coupe précisément sur le beat switch, parce
qu'une rupture attendue cache la couture. Ici c'est impossible : le motif de
piano doit **survivre à la bascule** et réapparaître sous la 808, puis rester
seul à l'outro. Or la persistance ne s'applique qu'à l'intérieur d'un clip —
deux générations produiraient deux pianos différents. Le morceau entier tient
donc dans un seul champ de 5000 caractères. Contrainte assumée : c'est ce qui
fixe la longueur à trois couplets.

**Le piano est le seul témoin.** Un unique élément persistant, déclaré deux
fois. Il traverse les cordes, il traverse le silence du pont, il traverse la 808
et il finit seul. Tout le reste du morceau se remplace ; lui, non. C'est ce qui
empêche le titre de sonner comme deux morceaux collés bout à bout : l'oreille
suit une continuité mélodique pendant que tout le décor change.

**Le pont est une coupure sèche, pas une transition.** `strings cut dead, one
bar of silence, voice bare` : après deux minutes de cordes et de chœur, une
mesure de vide. Puis l'autotune entre **sur une voix parlée**, pas chantée — on
entend le traitement avant d'entendre la mélodie, ce qui rend le procédé
audible en tant que procédé. La 808 arrive en glissando descendant : le seul
moment du morceau où un instrument fait un geste plutôt qu'une note.

**88 BPM pour les deux mondes.** Un seul tempo, jamais deux. Côté Padre, 88 en
batterie live droite, c'est du rap conscient classique. Côté Duc, le même 88
avec des hi-hats en double-time se lit comme du 176 : la trap moderne se joue
au ressenti du hi-hat, pas au métronome. Changer le BPM au pont aurait été le
réflexe amateur — et aurait cassé le piano persistant.

**Bloc d'exclusions recomposé.** Le bloc standard était inutilisable ici :
`avoid over-saturated bass` annule `deep distorted 808 bass`, et
`no low-quality recording` contredit `raw unpolished delivery`. Remplacés par
`no cluttered low end` et `avoid thin sounds` — même nombre d'exclusions, zéro
contradiction. Détail dans `references/negative-prompting.md`.

---

## 🎛️ V5.5 STYLE PROMPT — 917 / 1000 caractères

```
Cinematic conscious French rap turning into dark French trap. 88 BPM hard-hitting live-sounding drums, heavy dusty kick, cracking snare, straight no swing. Persistent dramatic minor-key piano motif throughout. Soulful orchestral strings, gospel-tinged backing choir, deep upright bass, dark brass stabs, vinyl crackle. Mid-song switch to dark French trap: strings cut dead, deep distorted 808 bass with long pitch glides, double-time hi-hat rolls, sparse menacing synth lead, cold cavernous reverb. Male baritone, raw unpolished delivery, dense internal rhymes, rising vocal intensity, turning to melodic autotune vocals and low-register punchline delivery after the switch. Ultra-wide stereo field, warm tape saturation before the switch, icy wide field after. Cinematic master, deep tight low end. Exclude: no mumble rap, no cluttered low end, avoid messy mix, no audio artifacts, no generic EDM, avoid thin sounds.
```

---

## 📝 SCRIPT & PAROLES — 3944 / 5000 caractères

```
[Intro: Piano motif alone, strings entering low, vinyl crackle, spoken, no drums]
(Instruction: Persistent dramatic minor-key piano motif throughout)
(parlé, calme, très proche du micro)
Même sang.
On va parler de température.

[Verse 1: Baritone, raw unpolished delivery, drums enter hard, strings low]
On était trois dans la chambre et un seul lit qui grince,
Ma mère comptait les pièces sur la table de la cuisine.
J'ai vu un homme rentrer cassé et sourire quand même,
C'est là que j'ai appris ce que le mot digne veut dire.
Y'a des dettes qu'on rembourse en billets, d'autres en années,
Moi j'ai les deux au compteur et j'ai pas demandé d'échéance.
On m'a appris à dire bonjour avant de dire mon nom,
À rendre le double de ce qu'on m'a prêté, sans le dire.
J'ai perdu des gens que je pleure encore le dimanche,
Et j'ai gardé leurs phrases comme on garde un manteau.
Si tu veux savoir d'où je viens, regarde pas mes chaînes,
Regarde qui décroche quand j'appelle à trois heures du matin.

[Pre-Chorus: Strings rising, choir entering, drums thinning, voice climbing]
On m'a dit reste chaud, le froid ça sauve personne,
On m'a dit reste froid, la chaleur ça pardonne trop.
J'ai écouté les deux, j'ai fait mes comptes,
Et j'ai gardé les deux dans la même poitrine.

[Chorus: Anthemic, choir and strings, tenor rise, warm, dark brass stabs]
J'ai gardé le même sang, j'ai changé de température,
Ce que j'ai promis en bas, je le tiens en hauteur.
Demande à ceux qui m'ont vu quand j'avais rien à perdre,
J'ai pas changé de camp — j'ai juste changé d'armure.

[Verse 2: Same baritone, intensity rising, strings wider, drums heavier]
J'ai grandi trop vite, on m'a rien demandé,
On m'a mis les clés dans la main et la porte était lourde.
J'ai porté des gens qui portaient personne,
Et j'ai jamais présenté la facture, jamais.
Mais chaque fois qu'on te prend pour un dos, tu durcis un peu,
Chaque main tendue qu'on te renvoie, ça épaissit la peau.
Le cœur bat pareil, c'est la surface qui gèle,
Et personne voit le moment exact où ça bascule.

[Pre-Chorus: Choir louder, strings at maximum, snare roll, voice at the edge]
On m'a dit reste chaud, le froid ça sauve personne,
On m'a dit reste froid, la chaleur ça pardonne trop.
J'ai écouté les deux, j'ai fait mes comptes,
Et j'ai gardé les deux dans la même poitrine.

[Chorus: Same hook, choir wider, strings maximum, brass stabs doubled]
J'ai gardé le même sang, j'ai changé de température,
Ce que j'ai promis en bas, je le tiens en hauteur.
Demande à ceux qui m'ont vu quand j'avais rien à perdre,
J'ai pas changé de camp — j'ai juste changé d'armure.

[Bridge: Beat switch, strings cut dead, one bar of silence, voice bare]
(cordes coupées net, plus rien sous la voix)
Le jour où j'ai compris que la chaleur se paie,
j'ai baissé le chauffage.
(l'autotune entre, la voix descend d'une octave)
Pas de rancune. Juste une température.
[808 pitch glide down, double-time hi-hat rolls enter, piano motif stays]

[Verse 3: Melodic autotune, low-register punchlines, 808 and hats, cold reverb]
Vitres teintées, la ville défile en muet,
J'ai plus besoin de crier, j'ai des gens pour ça.
Ils m'ont vu monter comme on regarde la météo,
Ils commentent le ciel, ils sortent jamais dehors.
Sourire de face, calculatrice dans le dos,
J'ai retenu les visages, j'ai jamais fait de liste.
Le silence coûte plus cher que tout ce que j'ai dit,
Et j'ai les moyens du silence, maintenant.
Touche pas à ma famille, le reste je négocie,
La température est stable — moins deux.

[Final Chorus: Same hook, cold autotune, 808 under it, no choir, no strings]
J'ai gardé le même sang, j'ai changé de température,
Ce que j'ai promis en bas, je le tiens en hauteur.
Demande à ceux qui m'ont vu quand j'avais rien à perdre,
J'ai pas changé de camp — j'ai juste changé d'armure.

[Outro: 808 cuts, piano motif alone returns, vinyl crackle, spoken, tape stop]
(parlé, calme, exactement comme à l'intro)
Même sang.
Autre température.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 88, un seul tempo pour les deux moitiés.** Ne pas le changer au pont :
c'est le réflexe évident et c'est le piège. Le passage à la trap se joue au
**hi-hat** (double-time, rolls) et à la 808, pas au métronome. Un changement de
BPM tuerait le piano persistant, qui est la seule chose censée traverser le
morceau.

**Tonalité — Do dièse mineur.** Le motif de piano tient sur quatre mesures,
main gauche en octaves, main droite sur trois notes seulement — il doit rester
reconnaissable quand la 808 lui passe dessus. Les cordes doublent le motif à
l'octave supérieure sur les refrains chauds, et **disparaissent totalement**
après la bascule : c'est leur absence qui fait le froid, pas un filtre.

**Delivery — trois états, dans l'ordre.** Couplet 1 : brut, proche, presque sans
effet, intensité qui monte ligne après ligne. Couplet 2 : plus fort, plus
serré, la voix arrive au bord de la rupture — c'est ce qui rend la bascule
crédible. Couplet 3 : autotune mélodique, registre grave, débit ralenti,
**aucune montée en intensité**. Le contraste ne vient pas du volume mais de
l'engagement : la première moitié force, la seconde ne force plus.

**Le refrain est identique à l'écrit** aux trois passages. Variation
exclusivement par les balises : `choir and strings, warm` → `choir wider,
strings maximum` → `cold autotune, 808 under it, no choir, no strings`. Le
retournement de sens est porté par la production, jamais par une réécriture.

**Placement stéréo.** Première moitié : voix au centre, sèche, cordes et chœur
largement ouverts, saturation de bande chaude. Après la bascule : voix toujours
au centre mais avec une **longue réverbération froide**, 808 mono au centre,
synthé et hi-hats très écartés. Le champ ne se rétrécit pas, il **se refroidit**
— même largeur, autre température.

**L'intro et l'outro sont le même texte.** « Même sang / On va parler de
température » → « Même sang / Autre température ». Deux lignes, la boucle du
morceau, et le piano seul aux deux extrémités. C'est ce qui transforme le beat
switch en récit plutôt qu'en effet.

**Ratio hook / couplets — 0,79.** Volontairement bas, régime récit : trois
couplets pour 1789 caractères de texte réel, le plus gros volume de couplet du
dossier après `chacun-son-tour.md`. Ajouter un post-refrain scandé remonterait
le chiffre, mais diluerait le dispositif — le hook de ce morceau n'est pas un
cri de salle, c'est une phrase qui change de sens.

**Leviers de re-génération.** Style à 83 caractères de marge, paroles à 1056.
- Bascule pas assez nette → `hard cut to trap at the bridge, full instrument
  swap` (+51) en retirant `dark brass stabs` (−18).
- Piano perdu sous la 808 → `piano motif always audible over the 808` (+40).
- Première moitié trop propre → `raw live drum room sound` (+25).
- Autotune trop léger → `heavy melodic autotune, pitched-down ad-libs` (+44).
- 808 pas assez présente → `deep distorted 808 forward in the mix` (+38).
