# Balises de direction V5.5 — catalogue

Une balise nue (`[Verse]`) laisse Suno improviser. Une balise **enrichie** force
un comportement. Règle : `[Section: intention musicale, détail de flow, détail
d'arrangement]`.

## Le squelette standard

| Balise | Rôle | Exemple enrichi |
|---|---|---|
| `[Intro: Atmosphere & Turntablism]` | Planter le décor sonore + premiers cuts | `[Intro: Atmosphere & Turntablism — street ambience, distant scooter, vinyl crackle, two baby scratches on a horn stab]` |
| `[Verse: Flow State]` | Fixer le débit | `[Verse: Lazy Gynéco flow, internal rhymes, slightly behind the beat, drums drop to hats only on line 5]` |
| `[Pre-Chorus: Energy Ramp]` | Forcer la montée | `[Pre-Chorus: Energy Ramp — filter opening, snare roll building, vocal doubling appears]` |
| `[Chorus: The Hook]` | Tessiture + accroche | `[Chorus: The Hook — tenor soaring, gospel-style backing vocals answering each line, catchy melody, full drums]` |
| `[Bridge: The Switch-up]` | Casser le morceau | `[Bridge: Beat switch, half-time, experimental textures, bass drops out]` |
| `[DMC Routine]` | Solo de platines | `[Scratch Solo: Fast crab scratches, transformer cuts, record rewind, drums reduced to kick and rimshot]` |
| `[Outro: Smooth Exit]` | Fin fondue ou nette | `[Outro: Smooth Exit — hook hummed, instruments peeling off one by one, tape stop on the last bar]` |

## Balises de renfort

- `[Break: drums only]` — respiration rythmique, très efficace avant un refrain.
- `[Hook Ad-libs: whispered doubles, panned wide]` — épaissit sans réécrire.
- `[Call & Response: lead line, crowd answers]` — le moteur du refrain club.
- `[Drop: sub-bass enters, everything else mutes for one bar]`
- `[Tape Stop]`, `[Backspin]`, `[Silence: half a bar]` — ponctuation.
- `[Instrumental Turnaround: 4 bars]` — laisse la place à l'instru de respirer.

## Directives de voix à glisser dans les balises

- Placement : `slightly behind the beat`, `on top of the beat`, `dragging`.
- Registre : `low tenor`, `head voice on the last line`, `spoken aside`.
- Souffle : `breathy`, `close-mic intimacy`, `almost whispered`.
- Doublage : `doubled hook`, `octave-down double on the last word of each line`.

## Discipline de structure

- **Une balise par section**, jamais deux empilées : Suno prend la première et
  ignore la seconde.
- **Les crochets ne se chantent pas** — mais les mots à l'intérieur peuvent fuir
  dans la prise si la section est trop courte. Une balise = au moins 4 mesures.
- **Longueur cible** : 2 couplets + 2 refrains + 1 pont ≈ 2 min 40 – 3 min 20.
  Au-delà, Suno V5.5 commence à répéter des motifs.
- **Le refrain doit être identique à l'écrit** entre les occurrences : c'est ce
  qui déclenche la mémoire mélodique du modèle. Les variations passent par les
  ad-libs, pas par le texte.


---

## L'indice commercial : le ratio hook / couplets

Ce qui rend un morceau « commercial » n'est pas son sujet, c'est la **part de
caractères occupée par le refrain** face aux couplets. Mesuré sur le catalogue :

| Morceau | Registre | Hook | Couplets | Ratio |
|---|---|---|---|---|
| `chacun-son-tour.md` | posse cut, trois MC | 1516 | 2342 | **0,65** |
| `le-prix.md` | rap conscient | 1844 | 2009 | **0,92** |
| `trois-portes.md` | récit | 2253 | 1714 | **1,31** |
| `doucement.md` | groove chaud | 2515 | 1541 | **1,63** |
| `chaleur.md` | club commercial | 2676 | 950 | **2,82** |

**Comment s'en servir.** Le ratio se décide au moment du brief, pas à la
relecture :

- **Sous 0,8** — format collectif ou récit long : trois couplets pour un seul
  refrain. Le hook n'est plus l'argument du morceau, c'est sa respiration.
- **Autour de 1** — le texte porte le morceau. Couplets de seize mesures,
  refrain de quatre lignes, deux occurrences plus une finale. Registre
  conscient, récit, morceau d'album.
- **Autour de 1,5** — équilibre. Le refrain se retient, les couplets tiennent
  encore un propos. La plupart des morceaux du dossier.
- **Au-delà de 2,5** — club et radio. Couplets de huit à dix lignes, refrain de
  quatre lignes répété trois fois, post-refrain répété quatre fois ou plus. Le
  texte n'a pas besoin d'être pauvre : il doit être **court**.

Corollaire utile : un morceau club qui déborde des 5000 caractères est presque
toujours un morceau dont les couplets sont trop longs pour son registre. Avant
de couper dans les balises, vérifier le ratio — s'il est sous 2, le problème
n'est pas la mise en forme, c'est la structure.

### Limite de la mesure

**Au-delà d'environ 4, le ratio sature et ne dit plus rien.** Sur
`plus-fort.md`, il sort à 15,8 — non parce que le refrain est énorme, mais
parce que les couplets ont presque disparu : **134 caractères au total**, deux
blocs de quatre lignes scandées au vocoder. Une division par un nombre proche
de zéro produit un grand nombre, pas une information.

Passé ce seuil, la grandeur utile est le **volume absolu de couplet** :

| Volume de couplet | Ce que c'est |
|---|---|
| 1500 à 2000 caractères | Le texte porte le morceau |
| 900 à 1500 | Registre club, couplets courts mais écrits |
| Moins de 300 | Le couplet n'est plus un couplet : c'est un interlude scandé |

Sous 300 caractères, on n'écrit plus des couplets, on écrit des **slogans entre
deux drops** — c'est un choix légitime pour l'électro dure, et il faut l'assumer
comme tel plutôt que de croire qu'on a écrit un morceau très efficace.

### L'autre biais : le ratio mesure du texte, pas du temps

Le hook à **vocal chop** casse la mesure dans l'autre sens. Sur
`jusqu-au-jour.md`, le ratio sort à **1,92** — apparemment loin du régime club,
alors que le morceau est un club pur. La raison : le drop occupe seize mesures
de disque et coûte **84 caractères** de champ de paroles
(`(Jus-qu'au-jour... jus-qu'au-jour...)` deux fois). Un refrain chanté aurait
occupé la même durée pour quatre à cinq fois plus de caractères.

Règle pratique : **compter les sections, pas seulement les caractères.** Un
morceau dont la moitié des sections sont des drops, post-refrains ou breakdowns
est un morceau club, quel que soit le ratio. La mesure reste utile pour arbitrer
la longueur des couplets ; elle ne décide pas du registre à elle seule.

---

## Le sebene : un climax qui n'est pas un drop

`[Sebene: Guitars doubled and faster, drums double-time, animateur over the top]`

Sur un morceau afro-club (ndombolo, coupé-décalé), le sommet n'est pas un drop
de basse mais une **accélération** : les guitares doublent leur motif, la
batterie passe en double-time, un animateur lance la salle en appels courts.
Voir `examples/la-machine.md`.

Deux conséquences pratiques :

- **Déclarer les deux guitares.** `second guitar answering` est obligatoire,
  sinon Suno en joue une seule et le motif perd l'entrelacement qui fait tout le
  groove.
- **Les appels d'animateur ne sont pas du chant.** `shouted animateur calls` —
  criés, courts, secs, sans mélodie. Sans cette précision, Suno les chante et la
  section devient un deuxième refrain.

### Correctif à la règle du tempo

La règle « au-dessus de 110 BPM, la réponse tombe à deux syllabes » est trop
grossière. La contrainte réelle est le **nombre de temps alloués à la réponse**,
pas le BPM :

| Section | Cadence des appels | Réponse tenable |
|---|---|---|
| Refrain à 130 BPM, appel sur une demi-mesure | tous les 2 temps | 3 syllabes (« La machine ! ») |
| Sebene à 130 BPM, appel sur chaque temps | tous les temps | 1 syllabe (« Hé ! ») |

Le BPM dit seulement combien de temps tiennent dans une seconde. C'est
l'arrangement qui décide de la place laissée à la foule.

---

## Le pull up : un climax fait d'arrêt

`[Pull Up: Everything stops dead, siren alone, tape rewind, crowd shouting]`

Geste de sound system : au sommet du morceau, tout se coupe, il ne reste qu'une
sirène, le selecta rembobine et relance le riddim plus dur. Voir
`examples/plus-bas.md`.

C'est le seul climax du catalogue qui **retire** au lieu d'ajouter :

| Genre | Climax | Mécanique |
|---|---|---|
| House / club occidental | `[Drop]` | la basse rentre, tout revient d'un coup |
| Ndombolo / coupé-décalé | `[Sebene]` | les guitares doublent, la batterie accélère |
| Shatta / dancehall | `[Pull Up]` | tout s'arrête, sirène, rewind, relance |

Trois conditions pour que ça marche :

1. **Le placer après un refrain déjà entendu deux fois.** Un pull up sur un
   refrain neuf ne relance rien — le public doit déjà attendre la suite.
2. **Le faire suivre du refrain à l'identique.** C'est la troisième occurrence
   du même texte ; c'est l'attente créée par l'arrêt qui la transforme, pas une
   réécriture.
3. **Écrire le vide.** `everything stops dead`, `siren alone`, et une didascalie
   parlée sans musique. Sans mention explicite du silence, Suno enchaîne.

---

## Quand le refrain a le droit de bouger

Règle générale du protocole : **le refrain est identique à l'écrit entre les
occurrences**, parce que c'est la répétition littérale qui déclenche la mémoire
mélodique du modèle. Elle vaut pour tout disque à hook, et elle n'a jamais été
enfreinte sur les trente-sept premiers morceaux du dossier.

Elle admet une exception, et une seule, démontrée sur
`examples/ne-raccroche-pas.md` :

> **Trois passages identiques achètent la mémoire ; le quatrième peut déplacer
> exactement une ligne — et ce doit être la première.**

Trois conditions, toutes nécessaires :

1. **La première ligne, pas une autre.** C'est celle que l'auditeur chante déjà
   d'avance. Déplacer une ligne du milieu ne produit rien : personne ne
   l'attendait assez pour sentir le décalage.
2. **Tout le reste identique, à la virgule près.** Un deuxième changement et le
   modèle traite la section comme un couplet — on perd la mélodie du refrain.
3. **Le sens doit se retourner, pas se prolonger.** « Ne raccroche pas. » →
   « Tu peux raccrocher. » Si le remplacement dit la même chose autrement, on a
   payé le prix sans acheter la chute.

Réservé aux registres où la fin est le sujet : chanson, récit, morceau
conscient. Sur un disque de club, garder les quatre passages identiques.

---

## L'intro podcast (identité Prestige)

`[Intro: Radio tuner sound, vinyl crackle, DJ Rim-K voice-over]`

Ouverture signature du **Prestige Old School Podcast**. Trois éléments dans cet
ordre, et l'ordre compte : le balayage de tuner installe le média (on écoute une
radio), le crépitement installe l'époque, la voix-off installe l'hôte.

- **Pas de batterie sous l'intro.** La voix-off doit passer sur le crépitement
  et la boucle seule ; le kick n'entre qu'à la première mesure du couplet ou du
  teaser de refrain. Une intro parlée sur une batterie complète perd sa nature
  de générique.
- **Deux phrases maximum.** Une pour situer, une pour lancer. Au-delà, Suno se
  met à chanter la voix-off au lieu de la parler.
- **Compression AM sur la voix d'intro seulement** :
  `warm AM radio compression on the intro voice` dans le style. C'est ce qui
  sépare l'hôte du rappeur — même personne, deux traitements.
- **La reprendre à l'outro** referme le générique et transforme le morceau en
  épisode. Voir `examples/cage-d-escalier.md` et `examples/impeccable.md` pour
  le principe intro/outro symétriques.

---

## L'instrumental : le champ de paroles devient une partition

Sur un instru, il n'y a pas un mot à écrire — et le champ *Lyrics* sert quand
même, autrement. Il devient un **plan de montage** où chaque balise porte un
nombre de mesures. Voir `examples/prise-directe.md`.

```
[Verse Bed 1: 16 bars, drums, 808 and piano only, no brass, no strings, open]
```

C'est le seul endroit du système où l'on peut décrire une **chronologie** : le
champ de style décrit un état global, sans notion de temps.

### Comptes de mesures

Ce sont des **inclinaisons, pas des garanties**. Suno respecte assez bien les
proportions (un bloc de 16 sonne deux fois plus long qu'un bloc de 8), beaucoup
moins bien la durée absolue. D'où la vérification à faire avant de générer :

> mesures × 4 × 60 ÷ BPM = durée en secondes

Ce qui dépasse le plafond de génération **se perd par la fin**. Placer en queue
ce qu'on accepte de perdre : un outro court, et jamais le dernier hook.

### Faire taire la voix sans tuer la texture

Un simple `no vocals` supprime aussi les chops de soul, qui font une bonne part
du grain d'un beat. La distinction porte sur la **fonction**, pas sur la
présence :

```
no lead vocal, no rapped verse, no sung hook.
Wordless chopped vocal texture only, used as percussion, never as a melody line.
```

### Densité : trois niveaux, jamais quatre

Un instru destiné à être rappé doit **laisser la place**. Lits de couplet
pauvres (batterie, basse, clavier), hooks riches (cuivres, cordes, scratch),
pont sans batterie. Au-delà de trois états, le beat devient illisible pour celui
qui écrit dessus. Le centre du champ stéréo au-dessus de 300 Hz reste dégagé :
c'est la place de la voix à venir.

---

## L'ouverture à froid sur le refrain

Squelette par défaut du dossier : intro → teaser → couplet → pré-refrain →
refrain. C'est la structure des quarante-six premières entrées. Il en existe une
autre, purement radio : **le refrain complet ouvre le morceau**, quatre mesures
d'intro et rien d'autre. Voir `examples/yalla.md`.

À écrire dans le style, sinon Suno place une intro instrumentale de vingt
secondes par réflexe :

```
Opens straight on the full chorus, no build, hook inside the first ten seconds
```

Deux conséquences sur l'écriture, non négociables :

1. **Le refrain doit se comprendre sans contexte.** Rien ne le précède, donc il
   ne peut rien supposer. Un hook qui a besoin de son couplet pour faire sens ne
   peut pas ouvrir un disque.
2. **Il faut le mériter plus souvent.** Commencer par le sommet oblige à y
   revenir : quatre refrains et quatre post-refrains pour deux couplets, contre
   trois et deux dans la structure classique. Le ratio monte mécaniquement
   au-dessus de 2.

Registre : club, radio, anthem. À éviter sur un morceau conscient ou narratif —
là, l'attente créée par le couplet est ce qui donne sa force au premier refrain.

### Le ratio se décide en partie dans le champ de style

`examples/face-b.md` et `examples/sur-la-frequence.md` partagent le **même
prompt de style au caractère près** et ont deux textes écrits indépendamment.
Leurs ratios : **2,18** et **2,22**. Quatre centièmes d'écart.

Ce n'est pas le prompt qui fixe le ratio — c'est le **squelette qu'il suggère**.
Un champ de style qui déclare `panoramic group vocal responses` et
`used as the hook riff` rend une seule structure naturelle : teaser, deux
couplets, trois refrains, trois post-refrains. Et ce squelette produit
mécaniquement un ratio autour de 2,2.

**Conséquence pratique** : viser un ratio bas sur un prompt à réponses de groupe
ne se joue pas à l'écriture, ça se joue en retirant les réponses de groupe du
prompt. Le ratio se décide au brief, en même temps que la couche vocale — pas à
la relecture.

### « Refrain entraînant » : ça se compte

Un brief demande souvent un refrain « entraînant ». Ce n'est pas un adjectif
vague : c'est une propriété **métrique**, et elle se vérifie en comptant les
syllabes chantées.

Un refrain entraînant est un refrain dont **l'auditeur prédit la forme après la
première ligne**. La condition la plus simple pour obtenir ça : les quatre
lignes partagent le **même nombre de syllabes**, donc le même rythme mélodique,
donc une seule phrase de quatre mesures répétée. Exemple mesuré,
`examples/dis-moi.md` — quatre lignes, 8 syllabes chacune, forme A A′ B B′ (les
deux premières lignes ouvrent à l'identique, les deux dernières répondent).

**L'instruction correspondante doit être dans le champ de style**, parce que
Suno ne compte pas les syllabes du texte tout seul :

```
The chorus melody is one four-bar phrase repeated with the same rhythm on every line.
```

Sans elle, le modèle écrit volontiers quatre mélodies différentes sur un texte
pourtant parfaitement régulier — et le refrain cesse d'être prévisible.

**Corollaire : pas de Call & Response dans un hook chanté mélodique.** La
réponse de groupe coupe la phrase de quatre mesures en deux et détruit ce qu'on
vient de construire. On la reporte sur le **post-refrain**, où elle ne gêne
rien. Le Call & Response appartient aux hooks scandés, pas aux hooks chantés.

**Le test du pont.** Couper la voix lead au pont et faire porter la mélodie du
refrain par un autre élément — chops gatés, synthé, cordes — vérifie que la
mélodie tient seule. Un refrain que l'auditeur ne peut pas compléter sans la
voix n'est pas entraînant, il est seulement joli.

**Le tempo borne le squelette.** Un squelette de 8 syllabes tient dans quatre
mesures jusqu'à ~112 BPM. Au-delà il faut le raccourcir, sinon la ligne se
précipite — même arithmétique que pour la longueur des réponses de groupe.

### Écrire un silence : on n'écrit pas le vide, on écrit qui joue tout seul

Suno **ne laisse jamais un trou**. Une ligne vide, une ligne de tirets, un
`(silence)` isolé au milieu d'un couplet sont bouchés par le modèle avec ce
qu'il a sous la main — le plus souvent une reprise de batterie ou une syllabe
inventée. Le silence ne se demande pas en creux.

Il se demande en **assignant la mesure à un instrument** :

```
(la contrebasse seule, deux temps)
```

Le vide devient une consigne d'orchestration, donc quelque chose que le modèle
sait exécuter. Exemple réel : `examples/la-cle-sous-le-pot.md`, trois fois dans
le même couplet, entre les portraits.

**La moitié de la manœuvre est dans le champ de style.** Sans un instrument
désigné pour occuper le trou, l'instruction n'a personne à qui s'adresser :

```
Persistent upright bass motif throughout, walking and unhurried, carrying every gap between the lines.
```

C'est la persistance appliquée au négatif : l'élément persistant n'est plus là
pour tenir le morceau, il est là pour **tenir les silences**. Il doit donc être
choisi parmi ceux qui survivent à toutes les ruptures — mêmes contraintes que
dans `references/spatialization-and-persistence.md`.

**Variante : faire répondre un autre instrument à la place de la voix.** Au pont
de ce morceau, la trompette bouchée joue quatre temps après une phrase laissée
sans réponse — `(la trompette bouchée répond à sa place, quatre temps)`. La
phrase qui manque est jouée, pas dite. Plus fort qu'un silence, et le modèle
l'exécute parce qu'on lui a nommé l'exécutant.

### Chiffrer le biais du ratio : texte contre temps

Le dossier documentait que le ratio hook / couplets **mesure du texte, pas du
temps**. `examples/doucement.md` le chiffre pour la première fois, parce que ses
deux plateaux instrumentaux de 16 mesures ne coûtent que ~290 caractères chacun.

| | Texte | Temps entendu |
|---|---|---|
| Hook (refrains, drops, pré-refrains) | 1648 car. | ≈ 157 s |
| Couplets | 790 car. | ≈ 35 s |
| **Ratio** | **2,09** | **≈ 4,5** |

**Le ratio texte sous-lit d'un facteur deux** sur un genre à plateaux. La
conversion est celle de la partition instrumentale : à 110 BPM une mesure vaut
`4 × 60 ÷ 110 = 2,18 s`, donc 16 mesures valent 35 secondes pour trois lignes
écrites.

**Conséquence pratique.** Sur un genre à plateaux — amapiano, afro-house, dub,
tout ce qui vit de boucles instrumentales longues — ne jamais conclure à partir
du ratio texte seul. Convertir les sections instrumentales en mesures d'abord.
Un ratio texte de 2 peut cacher un morceau où la voix occupe un cinquième de la
durée.

**Corollaire sur la structure du genre.** Le squelette maison
(`Pre-Chorus: Energy ramp` → `Chorus: Explosive Hook`) est **nuisible** sur ces
genres : ils construisent en retirant, pas en empilant. Le pré-refrain devient
`[Pre-Chorus: No riser, everything drops out except the shaker, four bars]`, et
le champ de style porte `no build-up risers` — négation qui reste dans le champ
**positif**, collée à la phrase de structure qu'elle qualifie.

### Le budget en mesures : les bords se paient sur la chanson

Une version club a deux bords qui n'existent pas sur une version chanson : un
**intro DJ** sur un seul motif et un **outro** qui ne descend pas. Ils servent à
mixer dedans et dehors, et ils coûtent cher.

Sur `examples/pas-d-photos.md` : 16 mesures d'intro et 12 d'outro, soit **28
mesures — une minute pleine à 112 BPM**. Elles ne s'ajoutent pas au morceau,
elles s'en **retranchent**, sinon le dernier refrain sort du cadre. Concrètement,
le deuxième plateau est tombé de 16 à 8 mesures et le breakdown de 8 à 4.

| Section | Mesures |
|---|---|
| DJ Intro | 16 |
| Couplet 1 / Pré / Refrain | 8 / 4 / 8 |
| Plateau 1 | 16 |
| Couplet 2 / Pré / Refrain | 8 / 4 / 8 |
| Plateau 2 | 8 |
| Breakdown | 4 |
| Refrain final | 8 |
| DJ Outro | 12 |
| **Total** | **104 → 3 min 43** |

Conversion : `mesures × 4 × 60 ÷ BPM` — la même que pour la partition
instrumentale. **On budgète avant d'écrire une ligne.**

**Et le ratio texte ment de plus en plus fort à mesure que les bords
s'allongent.** Sur ce morceau : 1,24 au texte contre 3,5 en mesures, facteur
2,8, là où `doucement.md` était à 2. Les bords instrumentaux n'ont rien que le
compteur de caractères puisse voir.

### Le refrain à trois lectures : mettre de l'émotion dans un disque de club

Contradiction posée par `references/plume-et-flow.md` : un texte à forte charge
demande de la place, donc un ratio bas, alors qu'un banger club vit entre 2,2 et
2,9. « Émotionnel **et** club » est donc une commande contradictoire — sauf si
l'émotion sort du texte.

**Elle n'a pas le choix : il n'y a pas assez de texte.** Un refrain de quatre
lignes chanté quatre fois ne peut pas porter un récit. L'émotion doit être dans
ce qui change **sous** des mots qui, eux, ne changent pas.

Dispositif, mesuré sur `examples/la-derniere.md` :

| Passage | Arrangement | Sens produit |
|---|---|---|
| Refrains 1 et 2 | Tout, majeur relatif, salle pleine | La fête |
| **Refrain dépouillé** | Une voix, ni batterie ni basse, nappe et salle au loin | L'adieu |
| Refrain final | Tout revient d'un bloc, la salle chante | Les deux à la fois |

**Trois conditions, toutes obligatoires :**

1. **Le texte doit être constructible dans les deux sens.** `la dernière` est le
   dernier morceau de la nuit **et** la dernière fois. Aucune ligne ne tranche.
   Si le texte disait laquelle des deux lectures est la bonne, le dépouillement
   ne révélerait rien.
2. **L'élément persistant doit traverser le dépouillement** —
   `present in every section, even the stripped chorus`. C'est lui qui fait
   reconnaître *le même refrain* ; sans lui, la section nue s'entend comme un
   autre morceau et il n'y a plus de révélation.
3. **Le retour se fait d'un bloc**, sur le premier temps, jamais en fondu ni en
   montée.

**Bénéfice chiffré sur le ratio.** Le refrain dépouillé est du contenu
émotionnel qui **compte comme hook** — 250 caractères dans la colonne refrain
pour un travail de pont. Sans lui il fallait allonger les couplets, et le ratio
tombait vers 1,2. Avec lui : 1,94. Toujours sous la fenêtre club, très au-dessus
du narratif.

**Variante la plus forte, et pourquoi elle demande deux clips.** Passer le
refrain final en **mineur parallèle** — mêmes mots, même mélodie, mode retourné.
C'est un changement de mode : il se déclare en tonalité absolue dans un clip 2,
jamais au milieu d'un clip.

### La note opératique : une dépense unique, sur une voyelle

Deux règles, apprises sur `examples/ne-raccroche-pas-club.md`.

**Une seule fois dans le morceau.** Un ténor qui monte à chaque refrain
n'impressionne plus au deuxième — la note haute est une dépense, pas une
texture. On la place à l'endroit où le personnage n'a plus de mots : fin de
pont, après la dernière phrase parlée.

**Sur une voyelle, sans texte.** Le registre opératique écrase les consonnes ;
un texte chanté là-haut devient inintelligible et le modèle le rend en bouillie.

```
[Operatic Note: One sustained high tenor note on a vowel, no words, four bars]
```

Et dans le champ de style, la contrepartie :
`one sustained operatic high note on a vowel, no words`.

**Deux compléments qui font la différence.** Un seul instrument sous la note —
sur ce morceau, le glissando de 808, rien d'autre. Et la note se pose sur la
**quinte** plutôt que sur la tonique : plus haute, non résolue, elle laisse la
phrase ouverte au lieu de la fermer.

**Garde-fou d'exclusion** : `no shouted vocals`. Sans lui, Suno confond parfois
la note tenue avec un cri.

### Trois morceaux au même BPM : la variation à tempo constant

Quand un brief demande plusieurs morceaux dans le même idiome et au même tempo,
le problème n'est pas d'écrire — c'est d'éviter trois fois le même disque.
**Ce qui différencie deux disques au même BPM, ce n'est jamais le BPM.**

Quatre leviers ; en bouger au moins **trois** pour que l'oreille entende trois
morceaux. Série vérifiée : `le-premier-cheque.md`, `compte-les-miens.md`,
`la-meme-heure.md`, tous à 97 BPM.

| | Subdivision | Densité du couplet | Forme du hook | Rupture |
|---|---|---|---|---|
| 1 | Croches droites | Moyenne, narrative | Ténor chanté, mélodique | Demi-temps |
| 2 | Doubles-croches swinguées | Dense, technique | Unisson scandé + réponses | Double-temps |
| 3 | Half-time, caisse claire sur le 3 | Aérée, silences écrits | Ténor tenu + chœur | Harmonie coupée |

**La subdivision est le levier le plus fort et le moins cher** : un groupe de
quelques mots dans la phrase de batterie — `on straight eighths`, `on heavily
swung sixteenths`, `snare on beat three, half-time feel` — change tout ce que le
corps entend, sans qu'un seul chiffre bouge.

### Rompre sans perdre le drive

« Rythme entraînant du début à la fin » **interdit le breakdown**. La rupture
par défaut du dossier est une soustraction ; il faut d'autres formes.

| Rupture | Comment | Ce qu'on y gagne |
|---|---|---|
| **Demi-temps** | La batterie ralentit de moitié, elle ne s'arrête pas | Le poids double, le fil reste |
| **Double-temps** | La batterie double, le riff garde son tempo | L'urgence, sans changer de morceau |
| **Harmonie coupée** | Instruments harmoniques dehors ; batterie, claps et voix restent | Le vide se fait par le haut |

Dans les trois cas, même consigne de retour : `return on the downbeat, no fill,
no fade`. **Un fill de retour est un aveu de couture.** Et le champ de style
porte la contrainte en clair : `The groove never stops, no breakdown, drums
present from the first bar to the last.`

### Confirmation : c'est le squelette qui fixe le ratio, pas le prompt

Le dossier avait noté que deux morceaux à prompt **identique** landaient à 0,04
l'un de l'autre (`face-b.md` / `sur-la-frequence.md`). La série à 97 BPM va plus
loin : trois textes indépendants, trois **prompts différents** — subdivision,
hook, instrumentation — et des ratios de **1,56 / 1,55 / 1,49**, soit 0,07
d'écart.

Le facteur commun n'est pas le prompt, c'est le **squelette de sections** : deux
couplets, trois refrains, trois post-refrains, une rupture. Cette structure
produit un ratio autour de 1,5 quel que soit le texte qu'on met dedans. Pour
déplacer un ratio, on change le squelette — pas les mots.
