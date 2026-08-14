# « Marbre » — Le Duc pur, trap froide et vide

Complément de `sang-froid.md` : ce morceau-là montrait la **bascule** entre deux
ADN, celui-ci montre ce qu'il y a **de l'autre côté**. Aucun piano, aucune corde,
aucun chœur, aucune foule. Le premier morceau du dossier construit sur le vide.

**Conforme aux limites Suno** : style **875 / 1000**, paroles **3363 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,10**.

---

## 🧪 ANALYSE DU MIX

**74 BPM, pas 140 en half-time.** `le-prix.md` occupe déjà le 140 half-time.
Écrire directement 74 change le placement de la caisse claire : au lieu de tomber
sur le 3 d'une mesure rapide, elle tombe sur le 3 d'une mesure **lente**, ce qui
laisse presque deux secondes de vide entre deux frappes. Les hi-hats en triolets
se lisent quand même autour de 148 — même densité perçue, mais chaque 808 a la
place de descendre son glissando en entier avant la suivante. C'est ce vide qui
fait le froid, pas la réverbération.

**Le vide est l'instrument, donc il se déclare.** Sous-spécifier un prompt de
trap est le meilleur moyen d'obtenir les réglages par défaut de Suno : hats
saturés, nappes empilées, deuxième lead. J'ai donc dépensé des caractères à
écrire ce qui **ne doit pas** être là, en positif :
`sparse arrangement with a lot of empty space`, `minimal instrumentation`,
`space between every hit`, `no strings, no piano`, `no gang vocals, no crowd`.
Le style reste à 875 caractères avec 125 de marge — et cette marge n'est pas un
oubli, voir plus bas.

**Aucune foule, pour la première fois depuis cinq morceaux.**
`elle-assure-grave.md`, `ca-repart.md`, `cage-d-escalier.md` et `sang-froid.md`
tenaient tous sur un collectif : réponse de salle, chœur d'unisson, chœur
gospel. Cet ADN est solitaire par définition. Ce qui remplace la foule, ce sont
les **ad-libs descendus en hauteur et envoyés loin sur les côtés** — une seule
voix qui se répond à elle-même depuis les bords du champ. `no gang vocals, no
crowd` est écrit explicitement : sinon Suno ajoute des chœurs sur un hook aussi
répétitif, par réflexe.

**Le hook n'est jamais crié.** `melodic autotune vocals, low register, never
shouted`. C'est contre-intuitif sur un morceau qu'on veut marquant, mais c'est
là toute la signature : la menace vient du fait que la voix **ne monte pas**.
« Moi j'efface, j'efface, j'efface » fonctionne parce que c'est dit sur le même
ton que le reste. Un cri à cet endroit rendrait le personnage inquiet — donc
faible.

**Le pont coupe la 808 et descend la voix d'une octave.** C'est la seule
variation de hauteur du morceau, et elle va vers le bas. Puis la 808 revient
seule sur un glissando descendant avant que les hats ne repartent en
double-time : trois secondes où l'on entend le sub bouger tout seul dans un
champ vide. La rupture protocolaire (`Bridge: Beat switch, Voice pitch
variation`) est ici respectée à la lettre — et pour une fois elle enlève au lieu
d'ajouter.

**Bloc d'exclusions recomposé.** Comme sur `sang-froid.md` :
`avoid over-saturated bass` et `no distorted vocals` sont incompatibles avec
`deep distorted 808` et `melodic autotune vocals`. Ajout de `no boom bap` — sans
lui, l'expression « French rap » tire Suno vers le sample de soul et la batterie
live, exactement ce qu'on ne veut pas ici.

---

## 🎛️ V5.5 STYLE PROMPT — 875 / 1000 caractères

```
Dark French trap, cold and sparse. 74 BPM, snare on the three, triplet hi-hat rolls, sparse arrangement with a lot of empty space, no percussion clutter. Persistent sparse three-note minor synth lead throughout. Deep distorted 808 bass with long pitch glides, sub-drops, muted bell accents, no strings, no piano. Male low-register delivery, melodic autotune vocals, slow punchline phrasing, unhurried, never shouted, pitched-down ad-libs hard panned, no gang vocals, no crowd. Minimal instrumentation, space between every hit, slow 808 decay tails. Ultra-wide icy stereo field, cold cavernous reverb, long reverb tails, 3D surround mix, dry centred lead vocal. Cinematic trap master, deep tight low end, restrained loudness, preserved dynamics. Exclude: no mumble rap, no cluttered low end, avoid messy mix, no audio artifacts, no generic EDM, no boom bap, avoid thin sounds.
```

---

## 📝 SCRIPT & PAROLES — 3363 / 5000 caractères

```
[Intro: Synth lead alone, long reverb tail, no drums, no 808, spoken low]
(Instruction: Persistent sparse three-note minor synth lead throughout)
(parlé, très bas, presque murmuré, sans effet)
Marbre.
Ça se nettoie, ça se casse pas.

[Verse 1: Low register, slow punchline phrasing, 808 enters, hats sparse]
Sixième étage, la ville en bas fait moins de bruit,
J'ai payé la hauteur, pas la vue.
Ils m'écrivent quand ils ont besoin, jamais quand j'en ai,
J'ai appris à lire l'heure des messages.
Costume noir, pas de logo, on me reconnaît quand même,
Le vrai luxe c'est de pouvoir passer inaperçu.
J'ai plus d'ennemis, j'ai des gens qui attendent,
C'est pire, mais c'est plus calme.
Ma mère appelle, je décroche à la première,
Le reste du monde tombe sur répondeur.
Y'a rien à négocier avec moi ce soir,
J'ai déjà signé avec le silence.

[Pre-Hook: 808 mutes, hats stop, voice alone one bar, reverb tail only]
Baisse le son... écoute bien.

[Hook: Melodic autotune, low register, never shouted, 808 glide underneath]
Tout est en marbre, rien ne rentre, rien ne sort,
J'ai mis du froid partout où j'avais mal.
Pose pas ta main dessus, ça garde les traces,
Moi j'efface, j'efface, j'efface.

[Post-Hook: Pitched-down ad-libs hard panned, 808 glide down, no lead vocal]
(Marbre...) (Marbre...)
(J'efface...) (J'efface...)

[Verse 2: Same register, phrasing tighter, hats doubled, sub-drop on line four]
J'ai vu des types se vendre pour une photo,
Moi j'ai vendu personne, même quand c'était rentable.
Ils comptent mes chiffres, ils comptent pas mes nuits,
Le prix affiché c'est jamais le prix payé.
Ils veulent que je parle, je réponds par la date,
Regarde le calendrier, il dit tout.
Le marbre transpire pas, le marbre s'excuse pas,
Le marbre attend juste que tu partes.
Y'a plus de porte à claquer, y'a plus de porte,
J'ai fait construire sans entrée.
Et si un jour ça tombe, ça tombera d'un bloc,
Pas en morceaux — d'un bloc.

[Pre-Hook: 808 mutes, hats stop, voice alone one bar, reverb tail only]
Baisse le son... écoute bien.

[Hook: Same melody, autotune wider, ad-libs answering in the far field]
Tout est en marbre, rien ne rentre, rien ne sort,
J'ai mis du froid partout où j'avais mal.
Pose pas ta main dessus, ça garde les traces,
Moi j'efface, j'efface, j'efface.

[Post-Hook: Pitched-down ad-libs hard panned, 808 glide down, no lead vocal]
(Marbre...) (Marbre...)
(J'efface...) (J'efface...)

[Bridge: Beat switch, 808 muted, hats stop, voice pitched down an octave]
(voix descendue d'une octave, presque parlée, une seule note de synthé)
On m'a dit : t'as changé.
J'ai dit : non. J'ai durci.
C'est pas pareil.
(la voix remonte, autotune seul, sans batterie)
Le froid, ça conserve.
Demande à ceux qui sont partis chauds.
[808 returns alone, one long pitch glide down, hi-hats re-enter double-time]

[Final Hook: Same melody, autotune stacked, widest field, 808 at maximum]
Tout est en marbre, rien ne rentre, rien ne sort,
J'ai mis du froid partout où j'avais mal.
Pose pas ta main dessus, ça garde les traces,
Moi j'efface, j'efface, j'efface.

[Post-Hook: Ad-libs from everywhere, 808 sustaining, hats thinning out]
(Marbre...) (Marbre...)
(J'efface...) (J'efface...)

[Outro: 808 cuts dead, synth lead alone, long reverb tail, spoken low, silence]
(parlé, très bas, exactement comme à l'intro)
Marbre.
Tu peux poser la main. J'ai plus rien à effacer.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 74, écrit tel quel.** Ne pas convertir en 148 : le nombre change le
placement de la caisse claire dans la grille de Suno, donc l'espace entre les
frappes. Les hi-hats en triolets font le reste du travail rythmique.

**Tonalité — Fa mineur.** Le lead ne joue que **trois notes**, en boucle, avec
une longue queue de réverbération. C'est délibérément insuffisant : c'est la
808, qui glisse d'une note à l'autre, qui porte l'harmonie. Le lead n'est là que
pour marquer le temps et donner un repère mélodique au hook.

**Delivery — la règle du morceau : ne jamais monter.** Registre grave, débit
lent, phrasé à une punchline par ligne, aucune montée en intensité du début à la
fin. Le seul déplacement vocal est vers le bas (pont, une octave en dessous). Un
cri briserait le personnage : la menace tient au fait que la voix reste
exactement au même endroit quoi qu'il dise.

**Placement stéréo.** Voix lead **sèche et au centre**, sans réverbération — ce
qui la rend proche et froide. Toute la réverbération est sur le lead de synthé
et les ad-libs, envoyés très loin sur les côtés et descendus en hauteur. Le
contraste centre-sec / bords-noyés est ce qui donne la sensation de pièce vide.
La 808 reste mono, au centre.

**Le hook est identique à l'écrit** aux trois passages. Variation par les
balises seules : `low register, never shouted` → `autotune wider, ad-libs
answering in the far field` → `autotune stacked, widest field, 808 at maximum`.

**La marge inutilisée est volontaire.** 125 caractères libres sur le style, 1637
sur les paroles — c'est la première fois du dossier que je ne remplis pas. Sur
ce morceau, ajouter une couche d'instrumentation ou un troisième couplet ferait
exactement le contraire de ce qu'on cherche. Le budget n'est pas un objectif :
un morceau construit sur le vide se juge à ce qu'on n'y a pas mis.

**Ratio hook / couplets — 1,10.** Deux couplets denses (1207 caractères) contre
un hook court répété trois fois avec post-hook. Le morceau paraît beaucoup plus
« hook » que ce chiffre, parce que le post-hook et les silences occupent du
**temps** sans occuper de **caractères** — rappel utile que le ratio mesure le
texte, pas la durée.

**Leviers de re-génération.** Style à 125 caractères de marge, paroles à 1637.
- Pas assez vide → `only 808, hats and one synth note at a time` (+43).
- 808 pas assez sale → `heavily distorted saturated 808` (+32).
- Autotune trop discret → `heavy melodic autotune on the hook` (+35).
- Trop froid, besoin d'un peu de corps → `muted bell melody answering the vocal`
  (+38) en retirant `muted bell accents` (−20).
- Suno rajoute des chœurs malgré tout → déplacer `no gang vocals, no crowd` dans
  le champ **Exclude Styles** dédié, où l'exclusion est plus fiable et gratuite.
