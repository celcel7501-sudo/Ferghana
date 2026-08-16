# « Générique Prestige » — jingle d'ouverture du podcast, 92 BPM

Script **fourni par le client**. Les mots sont conservés au caractère près ; le
travail porte sur la couche de direction, le découpage des routines de scratch
et le prompt de style. Premier objet du dossier qui n'est **pas un morceau** :
un générique de ~55 secondes.

**Conforme aux limites Suno** : style **906 / 1000**, paroles **1309 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Pas de ratio hook/couplets : il n'y a pas de couplet, et c'est le sujet.

---

## 🧪 ANALYSE DU MIX

**Un jingle n'est pas un morceau court, c'est un objet de longueur fixe — et
Suno n'a pas de réglage de durée.** Le seul levier est la **quantité de contenu**
donnée au modèle, et le vrai risque n'est pas la troncature habituelle : c'est
le **remplissage**. Avec 3691 caractères libres et une structure qui s'arrête au
bout de six sections, Suno a tendance à inventer un couplet pour meubler.

Trois garde-fous, tous nécessaires :

1. Dans le style, l'instruction est écrite en toutes lettres :
   `under one minute, no verses, no long instrumental`.
2. Dans les paroles, la dernière balise ferme explicitement :
   `[End: Everything stops dead, one last vinyl crackle, spoken, hard stop]`.
3. **On laisse la marge vide.** Remplir les 5000 caractères d'un jingle, c'est
   lui donner de quoi durer trois minutes. Même logique que sur `marbre.md`,
   poussée à l'extrême : ici la marge inutilisée est l'instruction principale.

**La routine de scratch est découpée en deux passes, et c'est vital ici.** Règle
établie sur `l-elite.md` : une routine décrite dans une seule balise est jouée
comme un effet unique et se termine en deux secondes. Sur un morceau de trois
minutes, c'est dommage. Sur un générique de cinquante-cinq secondes où **le
scratch est le contenu**, c'est la moitié de l'objet qui disparaît. D'où deux
balises séparées — baby scratches d'abord, puis transformer, crab et backspin —
plus une troisième routine à l'outro.

**Le mot scratché est dans le texte.** « Prestige » est gratté à l'intro et crié
au refrain. C'est ce qui rattache la routine au générique au lieu d'en faire une
démonstration posée par-dessus — même principe que sur `l-elite.md`, où le mot
gratté venait du refrain.

**La voix-off est parlée, et il faut le dire deux fois.** `spoken not sung` dans
le style, `spoken not sung` dans la balise. Sans cette redondance, Suno chante
la voix d'accroche : le générique devient une chanson et l'identité de podcast
tombe. Les deux phrases fournies respectent exactement la limite documentée dans
`references/structure-tags.md` — une pour situer, une pour lancer.

**Bloc d'exclusions Prestige, pas le bloc standard.** Le générique est bâti sur
`heavy vinyl crackle` et `radio broadcast atmosphere` : `no low-quality
recording` détruirait précisément ce qu'on demande. C'est le premier objet du
dossier à utiliser le bloc maison par défaut, et le contraste est ici maximal.

**Sur les majuscules du script.** « OLD SCHOOL ! » et « POUR LES VRAIS ! » sont
conservés tels quels. Suno ne lit pas la casse comme une indication d'intensité
— elle ne coûte rien et ne produit rien côté modèle. Elle reste utile pour
l'humain qui lit le script : elle marque à l'œil qui répond. L'intensité, elle,
vient de la balise (`unison shouted gang vocal responses doubled an octave
down`).

---

## 🎛️ V5.5 STYLE PROMPT — 906 / 1000 caractères

```
Golden Era hip-hop podcast intro jingle, under one minute, no verses, no long instrumental. 92 BPM hard-hitting MPC-60 drums, massive boom-bap kick, cracking rimshot snare. Persistent dark melancholic piano loop throughout. Cinematic minor-key strings, dark brass stabs, deep upright bass, heavy vinyl crackle, radio tuner sweep, radio broadcast atmosphere. Deep authoritative male radio host voice-over, spoken not sung, warm AM radio compression on the intro voice. Unison shouted gang vocal responses doubled an octave down, tenor rise. Rhythmic turntable cuts, transformer cuts, crab scratches, backspin rewind, scratched vocal sample. Ultra-wide stereo field, panoramic vocal layering. Cinematic master, deep tight low end, polished master under the vinyl grain. Exclude: no mumble rap, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM, no cluttered low end, avoid thin sounds.
```

---

## 📝 SCRIPT & PAROLES — 1309 / 5000 caractères

```
[Intro: Radio tuner sweep, heavy vinyl crackle, slow rhythmic scratch, no drums]
(Instruction: Persistent dark melancholic piano loop throughout)

[Scratch Routine 1: Two baby scratches on the word Prestige, crackle underneath]

[Scratch Routine 2: Fast transformer cuts, then one crab, then a backspin]

[Beat Drop: Massive boom-bap kick, MPC-60 drums and piano enter, maximum width]

[Voice-Over: Deep authoritative radio host, centred, spoken not sung, AM compression]
Bienvenue dans le Prestige Old School Podcast...
Là où l'histoire du bitume rencontre l'ingénierie sonore de pointe.

[Chorus: Explosive hook, tenor rise, anthemic call and response, dark brass stabs]
(Call: Prestige !) Response: [Panoramic Group Vocals: OLD SCHOOL !]
(Call: Le vrai son !) Response: [Panoramic Group Vocals: POUR LES VRAIS !]

[Turnaround: 4 bars, piano and drums only, strings swelling, one brass stab]

[Chorus: Same words, gang vocals wider, strings maximum, brass stabs doubled]
(Call: Prestige !) Response: [Panoramic Group Vocals: OLD SCHOOL !]
(Call: Le vrai son !) Response: [Panoramic Group Vocals: POUR LES VRAIS !]

[Outro: Fast scratch routine, radio frequency detuning, drums filtering out]

[End: Everything stops dead, one last vinyl crackle, spoken, hard stop]
Prestige Old School Podcast... Let's roll.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 92.** Assez lent pour que le kick boom bap ait du poids, assez haut pour
que les deux refrains et la respiration de quatre mesures tiennent en moins
d'une minute. Ne pas descendre à 88 : le générique dépasserait la minute et
perdrait sa fonction.

**Tonalité — Si mineur.** La boucle de piano tient sur deux mesures, main gauche
en octaves, main droite sur trois notes. Les cordes n'entrent qu'au premier
refrain et montent d'une octave au second — sur un objet aussi court, la seule
dynamique disponible est **l'entrée successive des couches**, pas leur volume.

**Delivery — deux voix, deux traitements, une seule personne.** L'hôte : grave,
posé, articulé, **parlé**, compression AM marquée, au centre, sans réverbération
— on veut une voix de studio de radio, pas de cabine de chant. L'appel du
refrain : la même personne, mais projetée, ténor qui monte. C'est ce contraste
qui installe l'identité de podcast en dix secondes.

**Structure temporelle visée** (55 s environ) :

| Section | Durée | Ce qui joue |
|---|---|---|
| Intro + routines de scratch | ~12 s | tuner, crépitement, platine, pas de batterie |
| Beat drop | ~2 s | kick, MPC-60, piano |
| Voix-off | ~10 s | batterie sous la voix, cordes basses |
| Refrain 1 | ~8 s | tout, cuivres |
| Turnaround | ~10 s | piano et batterie, cordes qui montent |
| Refrain 2 | ~8 s | tout, cordes au maximum |
| Outro + End | ~5 s | scratch, fréquence radio, arrêt net |

**Placement stéréo.** Voix-off strictement au centre, sèche. Réponses de groupe
ouvertes à 100 % des deux côtés. Scratches en ping-pong gauche-droite — c'est ce
qui fait entendre une platine et pas un échantillon. Piano légèrement à gauche,
cordes larges, kick et basse au centre mono.

**Réutilisation.** Le générique se régénère à l'identique pour chaque épisode ;
seule la voix-off change si l'accroche change. Garder le style **au caractère
près** d'un épisode à l'autre — c'est ce qui rend le générique reconnaissable
dès la première seconde, exactement comme un refrain identique à l'écrit.

**Leviers de re-génération.** Style à 94 caractères de marge, paroles à 3691
qu'il ne faut **pas** remplir.
- Suno rajoute un couplet → durcir : `strictly no rapped verse, jingle only`
  (+39).
- Scratch trop court → ajouter une troisième balise de routine dans les paroles
  (≈ +75), pas des tags dans le style.
- Voix-off chantée → `dry spoken radio announcer, no melody at all` (+43).
- Trop propre pour du Golden Era → `dusty sampler grit` (+20).
- Générique trop long → retirer le `[Turnaround]` (−72) avant de toucher aux
  refrains.
