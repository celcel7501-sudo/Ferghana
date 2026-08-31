# « Encore Une » — French Touch disco house, duo, 120 BPM

Script fourni complet par le client, déjà réalisé au niveau de la direction
d'acteurs. Ce qui manquait : le champ de style, le bloc d'exclusion — et une
réparation de syntaxe sans laquelle le morceau se serait désintégré.

| Champ | Mesure |
|---|---|
| Style seul (bloc dans *Exclude Styles*) | **788 / 1000** — marge 212 |
| Style + bloc recollé (mode repli) | **944 / 1000** — marge 56 |
| Paroles réparées | **4724 / 5000** — marge 276 |

---

## 🧪 ANALYSE DU MIX

**Le problème n'était pas l'écriture, c'était le parsing.** Suno lit une
**balise en début de ligne comme l'ouverture d'une nouvelle section**. Le script
d'origine en comptait **70** pour **12 sections voulues**.

| | Balises en début de ligne | Sections lues par Suno |
|---|---|---|
| Script d'origine | 70 | ~70 |
| Script réparé | **12** | **12** |

Concrètement, le modèle aurait produit soixante-dix micro-sections de deux
secondes : pas de couplet, pas de refrain, aucune persistance possible — la
boucle disco aurait été abandonnée au bout de trois lignes, puisque plus rien
n'aurait duré assez longtemps pour qu'un motif s'installe.

**La réparation ne touche pas un mot du texte.** Elle déplace la direction
d'acteurs du niveau *ligne* au niveau *parenthèse* :

| Avant | Après |
|---|---|
| `[Male, spoken, dry close-mic]` seul sur sa ligne | `(lui, parlé, très proche du micro, sec)` |
| `[Female, wide]: (Call: Tu veux rentrer ?)` | `(Call: Tu veux rentrer ?) Response: [Male Vocal, close and dry: Pas en-core]` |
| `[Group Vocals, ultra-wide]: Quatre heures du mat'…` | `(tous, panoramique) Quatre heures du mat'…` |

**Règle de sécurité** : une balise entre crochets est sans danger **au milieu**
d'une ligne, jamais au début. C'est exactement pourquoi la syntaxe maison du
Call & Response place le crochet après `Response:` et pas avant.

**Ce qui a été déplacé dans le champ de style plutôt que répété.** Le script
répétait à chaque intervention que lui est sec et proche, qu'elle est large et
lointaine. C'est une **propriété du morceau**, pas d'une ligne — donc ça
appartient au style, écrit une fois :

```
The male voice is always dry, centred and close-miked. The female voice is always wide, airy and reverb-drenched.
```

Ce sont 113 caractères qui économisent une trentaine de mentions dans les
paroles, et surtout qui tiennent sur toute la durée au lieu de se rappeler à
chaque ligne.

**Et c'est ce qui rend l'échange de rôles lisible.** Au deuxième refrain, c'est
elle qui répond. Ça ne s'entend comme un événement que si les deux voix ont été
installées à des **places différentes** avant. La distance fait le personnage :
on n'entend pas seulement changer de chanteur, on entend changer de position
dans la pièce. Le script le faisait déjà — le style le verrouille.

**Tempo — 120 BPM, non fourni, déduit.** Boucle disco filtrée, talkbox,
sidechain, quatre heures du matin : c'est le tempo de la house filtrée
française. À 124 la conversation parlée du pont ne tient plus ; à 116 le
sidechain cesse de pomper et devient un défaut de mix.

**La persistance était le seul candidat évident.** La boucle disco filtrée
traverse tout, **y compris le pont où la batterie disparaît** — d'où
`present in every section, even the bare bridge`. Sans cette précision, Suno
coupe tout au beat switch et le retour du refrain final sonne comme un montage.

**Le talkbox est traité en motif, pas en effet.** Il ouvre, il revient au
couplet 2 sur `quel-qu'un de bien`, il se dégrade au pont, il ferme le morceau.
Quatre apparitions, une progression : intact, ironique, cassé, fantôme. C'est
une ligne narrative portée par un timbre — le genre de chose qu'un prompt seul
ne produit jamais, et que le script fournissait déjà.

---

## 🎛️ STYLE PROMPT — 788 / 1000 caractères

```
French Touch disco house, euphoric and bittersweet, 120 BPM. Four-on-the-floor kick, crisp offbeat hats, layered claps, double-time shaker on the last chorus. Persistent filtered disco loop throughout, present in every section, even the bare bridge. Round analog Moog-style bassline with portamento glides, resonant filter sweeps, heavy sidechain pumping, warm analog saturation, vinyl crackle and tape wobble. Rhythmic talkbox vocals as a recurring motif. Male and female duo, sung in French with occasional English lines. The male voice is always dry, centred and close-miked. The female voice is always wide, airy and reverb-drenched. Call-and-response chorus, panoramic group vocals, R&B vocal runs. Ultra-wide stereo field, panoramic vocal layering. Warm analog master, deep low end.
```

---

## 🚫 BLOC D'EXCLUSION — 145 caractères

Champ **Exclude Styles**. En mode repli → 944 / 1000, marge 56.

```
no mumble rap, no trap drums, no distorted vocals, no generic EDM, no big-room EDM drop, avoid messy mix, no cluttered low end, avoid thin sounds
```

`no low-quality recording` est **absent** : le morceau demande `vinyl crackle`
et `tape wobble`. `no autotune` est absent aussi — talkbox, formants décalés et
empilements pitchés vivent dans la même famille de traitements.

---

## 📝 SCRIPT & PAROLES — 4724 / 5000 caractères

```
[Intro: Vinyl crackle, filtered disco loop, tape wobble, talkbox mono and dry]
(Instruction: Persistent filtered disco loop throughout)
(talkbox, mono, sec)
(En-core u-ne... en-core u-ne...)
(lui, parlé, très proche du micro, sec)
J'ai failli pas te reconnaître.
(elle, murmuré, large, lointain)
Menteur. Tu m'as vue entrer.
(lui) ...Ouais. J'ai vu.
(le filtre s'ouvre, le kick entre étouffé)

[Verse 1: Male lead, dry close-mic, nonchalant, behind the beat, filter opening]
T'as coupé les cheveux, ça te va mieux qu'avant
J'ai pris deux mille euros de crédit et six kilos
Le videur nous connaît, il a rien dit ce soir
Il a juste souri comme les gens qui savent
(ad-lib paresseux, sec) hmm...
Long time no see, j'ai dit ça en anglais
Parce qu'en français ça faisait trop de choses

[Pre-Chorus: Female harmonies blooming far in the background, wide, riser]
(lui, sec) On avait dit "juste un verre", c'était en deux mille quinze
(elle, lointaine, aérienne, noyée de réverbération) Now the lights are honest, and we're not who we were
(lui, murmuré) T'as une alliance. J'ai une alliance. On a bien fait, j'suppose.
(les deux) Si le jour veut se lever, qu'il attende dehors
(riser, balayage de filtre vers le haut)

[Chorus: Explosive hook, call and response, sidechain pumping, drums full]
(Call: Tu veux rentrer ?) Response: [Male Vocal, close and dry: Pas en-core]
(Call: Il est quelle heure ?) Response: [Male Vocal, close and dry: J'veux pas savoir]
(tous, panoramique) Quatre heures du mat', la ville dort, nous on danse encore
(tous, panoramique) One more song, one more song, avant que le ciel ait tort
(elle, vocal run) Les jambes en carton, le cœur en or
(lui, murmuré dessous) Laisse la porte ouverte...

[Verse 2: Female lead, closer now, airy, foley percussion, bass forward]
J'ai deux enfants qui dorment à quarante minutes d'ici
Mon mari est quelqu'un de bien, j'te jure, quelqu'un de bien
J'ai pas menti pour venir, j'ai juste rien précisé
C'est la même chose, je sais. J'te demande pas d'être d'accord.
(talkbox, mono) quel-qu'un de bien
J'écoute plus jamais cette musique en journée
And I don't miss you at all, sauf entre trois et cinq
(ad-lib fragile, large) no...

[Pre-Chorus: Male harmonies entering low and dry, strings rising, riser]
(elle) On avait dit "juste un verre", et on l'a même pas fini
(lui, chanté, bas) Now the lights are honest...
(elle) Si le jour veut se lever, qu'il attende sur le parking
(les deux, au plus près qu'ils aient jamais été) Baby, don't tell me it's over

[Chorus: Roles swapped, she answers, full stacks, sidechain pumping]
(Call: Tu veux rentrer ?) Response: [Female Vocal, wide: Pas en-core]
(Call: Il est quelle heure ?) Response: [Female Vocal, wide: J'veux pas savoir]
(tous, panoramique) Quatre heures du mat', la ville dort, nous on danse encore
(tous, panoramique) One more song, one more song, avant que le ciel ait tort
(elle, ad-libs larges) no-no-no
(lui) Les jambes en carton, le cœur en or

[Bridge: Beat switch, half-time, drums out, sub-bass and talkbox only]
(lui, parlé, absolument sec)
Franchement... on aurait rien fait de bien, toi et moi.
(elle, parlé, proche, sans expression)
Non. Mais on aurait été là.
[Silence: two bars, vinyl crackle only, sub-bass holding]
(lui, plus bas) ...C'est pas grand-chose.
(elle) C'est tout ce que j'demandais.
(talkbox, lent, dégradé) ne me ré-veille pas...
(voix masculine pitchée vers le bas) encore une, encore une
(empilement féminin pitché vers le haut, cristallin) encore une, encore une
(harmonies à formants décalés, en spirale)
(les deux, murmuré) J'ai jamais aimé les fins.
(roulement de caisse claire, riser, le filtre s'ouvre)

[Final Chorus: Double-time shaker, both voices centred, maximum width, full]
(Call: Tu veux rentrer ?) Response: [Panoramic Group Vocals: JAMAIS]
(Call: Il est quelle heure ?) Response: [Panoramic Group Vocals: J'VEUX PAS SAVOIR]
(les deux, à l'unisson) Quatre heures du mat', la ville dort, nous on danse encore
(tous, panoramique) One more song, one more song, avant que le ciel ait tort
(elle, runs R&B complexes, improvisés, au-dessus de la voix masculine)
(lui, qui chante enfin, dans le même espace qu'elle) Les jambes en carton, le cœur en or
(les deux, large) Laisse la porte ouverte...
(elle, seule, aigu) Laisse la porte ouverte...

[Outro: Filter closing, drums falling away, tape degrading, talkbox fading]
(talkbox, réverbération, qui s'efface)
(en-core u-ne... en-core u-ne...)
(boucle disco seule, crépitement de vinyle épais)
(lui, parlé, proche, à moitié en riant)
Le soleil se lève sur le parking...
Bon. Bah on rentre.
(elle, parlé, lointaine, douce)
...Chacun de son côté.
(lui, à peine audible)
Ouais.
[End: Tape stop, four seconds of crackle, hard stop]
```

---

## 🎹 NOTES DE STUDIO

**BPM — 120.** Déduit, pas fourni. Boucle disco filtrée, talkbox, sidechain :
c'est le tempo de la house filtrée française. À 124 la conversation parlée du
pont ne tient plus ; à 116 le sidechain cesse de pomper et devient un défaut.

**Tonalité — Ré mineur, avec le refrain sur le relatif Fa majeur.** Boucle disco
de quatre mesures, filtrée passe-bas presque fermée à l'intro, complètement
ouverte au premier refrain. **L'ouverture du filtre est l'arrangement du
morceau** : c'est elle qui raconte la nuit, pas les accords.

**Delivery — deux places, jamais la même.** Lui : parlé-chanté, sec, mono,
centré, aucune réverbération, comme quelqu'un qui parle à trente centimètres.
Elle : chantée, large, aérienne, réverbération longue. Ces deux traitements ne
doivent **jamais** se croiser avant le refrain final — c'est là, et là
seulement, que `(lui, qui chante enfin, dans le même espace qu'elle)` prend son
sens.

**Le pont, techniquement.** Beat switch en demi-temps, batterie coupée, sub et
talkbox seulement. Deux mesures de crépitement de vinyle seul avec le sub qui
tient — écrit comme tel, parce qu'un silence non attribué est bouché par le
modèle. Puis roulement, riser, ouverture du filtre : le retour est le seul
endroit du morceau où l'on a le droit d'utiliser une montée.

**Le talkbox.** Mono, sec, sans réverbération à l'intro et au couplet 2 ;
dégradé et ralenti au pont ; noyé de réverbération à l'outro. Trois réglages
pour un seul instrument, dans cet ordre — c'est ce qui en fait un personnage.

**Placement stéréo.** Boucle disco très ouverte. Basse, kick et claps au centre,
mono. Voix masculine centre, sèche. Voix féminine ±80 % avec la réverbération la
plus longue du morceau. Chœurs panoramiques plus larges que tout. Le shaker en
double-temps du refrain final entre **par les extrêmes**, pas par le centre.

**Leviers de re-génération.** 212 caractères de marge avec le champ dédié, 56 en
mode repli.
- Les deux voix se ressemblent → `two clearly different singers, never doubled together` (+52). **Ne rentre qu'avec le champ dédié.**
- Talkbox absent → `talkbox motif returns in every section` (+37).
- Filtre déjà ouvert à l'intro → `the filter opens slowly across the first minute` (+47).
- Boucle abandonnée au pont → `the disco loop never stops, not even in the bridge` (+49).
- Sidechain trop discret → `heavy sidechain pumping on every element` (+39).
