# Limites de champs Suno — et comment écrire pour tenir dedans

**Contraintes dures :**

| Champ | Limite | Ce qui compte |
|---|---|---|
| Style of Music | **1000 caractères** | tout, espaces et ponctuation compris |
| Lyrics | **5000 caractères** | tout, **balises `[...]` comprises**, sauts de ligne compris |

Un champ qui déborde est **tronqué en silence** : Suno coupe la fin sans
prévenir. Sur le style, on perd le mastering (la couche la plus en aval). Sur
les paroles, on perd l'outro et parfois le dernier refrain. Il faut donc
mesurer, pas estimer.

**Vérification obligatoire avant livraison** : `python3 tools/count.py <fichier>`
à la racine du dépôt. Viser une marge de 50 à 150 caractères pour laisser à
l'humain la place de retoucher.

---

## Compresser le STYLE (cible ≈ 900 c.)

L'erreur coûteuse, ce sont les **étiquettes de couches**. `CORE GENRE:`,
`RHYTHMIC DNA:`, `SONIC TEXTURE:`… coûtent à elles seules ~120 caractères et
n'apportent rien au modèle : Suno lit le texte, pas la structure.

1. **Supprimer les étiquettes, garder l'ordre.** L'ordre reste la hiérarchie —
   Suno pondère la tête du prompt. Genre → rythmique → instrumentation →
   texture → voix → turntablism → mastering. On sépare par des points.
2. **Un adjectif par idée.** `tight punchy compressed kick` → `punchy kick`.
3. **Couper les mots de liaison.** `used as`, `with a`, `that has` : dehors.
   `turntable cuts used as percussion` reste lisible en `turntable cuts as
   percussion` si la place manque.
4. **Fusionner les redondances.** `wide stereo field` + `wide chorus` +
   `panned wide` : un seul suffit dans le style, les deux autres vont dans les
   balises de paroles.
5. **Ce qui est déjà dans les paroles ne va pas dans le style.** Le placement
   d'un scratch se dit dans la balise ; le style déclare juste qu'il y en a.

## Compresser les PAROLES (cible ≈ 4850 c.)

Les balises sont le gisement, pas le texte. Une balise verbeuse coûte 150
caractères et ne rend pas mieux qu'une de 70.

1. **Balise = 60 à 80 caractères.** Section + 3 ou 4 directives, pas six.
   `[Chorus: Anthemic hook, tenor, stacked R&B harmonies, call and response]`
   suffit. Ce qui dépasse quatre directives est ignoré ou dilué.
2. **Pas de markdown dans le champ.** Ni `**`, ni `*`, ni `#`. Ils sont
   parfois lus comme du texte et comptent dans la limite.
3. **Réponses de Call & Response en parenthèses simples**, sans italique.
4. **Une ligne vide entre les sections, jamais deux.**
5. **Les didascalies restent courtes** : `(voix pitchée grave)` en tête de
   section, et non répétée à chaque ligne.
6. **Ne jamais raboter les couplets en premier.** C'est là qu'est le morceau.
   L'ordre de sacrifice : balises verbeuses → didascalies → outro parlé →
   longueur du pont → et seulement en dernier recours, le nombre de mesures.

## Budget type d'un banger (≈ 4850 c.)

| Bloc | Coût approximatif |
|---|---|
| 10 balises à 70 c. | 700 |
| 2 couplets de 16 mesures | 2050 |
| 2 pré-refrains | 490 |
| 3 refrains identiques (8 lignes) | 1180 |
| Intro + pont + outro | 430 |

Si le total déborde, le premier réflexe est de raccourcir les balises. Le
second est de passer le refrain final à 4 lignes — musicalement défendable, ça
fait une sortie plus rapide. Le dernier, jamais le premier, est de couper des
mesures de couplet.

---

## Clip 2 : ce qui est mort dans un prompt d'extension

Suno **n'entend pas le clip 1** quand il génère le clip 2 : la continuité de
voix, de timbre et de mix vient de l'audio prolongé, pas du texte du prompt.
Toute formule qui référence « avant » est donc du poids mort :

| À supprimer d'un style de clip 2 | Pourquoi |
|---|---|
| `the same voice as before` | aucun référent, la voix vient de l'audio |
| `the same motif as the previous section` | le motif se redécrit à l'identique, pas par renvoi |
| `continuing from the first part` | ne veut rien dire pour le modèle |
| `as established earlier` | idem |

Sur `examples/deuxieme-salle.md`, la coupe de ces deux formules a rendu
**67 caractères** sans rien changer au rendu. Le réflexe : après avoir écrit un
clip 2, relire en cherchant les mots *same*, *before*, *previous*, *again*, et
remplacer chaque renvoi par la description complète — ou le supprimer.

---

## Cas particulier : le jingle

Suno n'a **pas de réglage de durée**. Sur un objet court — générique, jingle,
transition d'épisode — le seul levier est la quantité de contenu, et le risque
s'inverse : ce n'est plus la troncature qu'on craint, c'est le **remplissage**.
Avec un champ de paroles à moitié vide et une structure qui s'arrête vite, Suno
invente un couplet pour meubler.

Trois garde-fous, tous nécessaires ensemble (voir
`examples/generique-prestige.md`) :

1. **L'écrire dans le style** : `under one minute, no verses, no long
   instrumental`. Une durée en toutes lettres est mieux comprise qu'un nombre de
   mesures.
2. **Fermer les paroles explicitement** : la dernière balise dit l'arrêt —
   `[End: Everything stops dead, one last vinyl crackle, spoken, hard stop]`.
3. **Laisser la marge vide.** Remplir les 5000 caractères d'un jingle revient à
   lui donner de quoi durer trois minutes. Ici, **la marge inutilisée est
   l'instruction principale** — c'est le seul cas du dossier où viser 4850
   caractères serait une faute.

Corollaire : sur un objet court, une routine de scratch décrite dans une seule
balise coûte proportionnellement beaucoup plus cher qu'ailleurs. Elle dure deux
secondes ; sur cinquante-cinq secondes, c'est la moitié du contenu qui
disparaît. La découper en passes séparées n'est plus une optimisation, c'est une
condition.
