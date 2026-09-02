# Spatialisation, synthèse vocale et persistance

Trois familles de directives qui ne se comportent pas comme les autres : elles
agissent sur **tout le morceau** et pas sur une section. À traiter avec méthode,
parce qu'elles coûtent cher en caractères et que Suno les abandonne facilement.

---

## 1. La persistance

Le défaut de Suno V5.5 : il pose un motif à l'intro, puis l'oublie dès le
premier couplet. Deux déclarations pour l'en empêcher, **les deux ensemble** —
une seule des deux ne tient pas :

- Dans le **style** : `Persistent talkbox hook melody throughout`
- En tête des **paroles** : `(Instruction: Persistent talkbox melody)`

Fonctionne pour tout élément identitaire : talkbox, motif de basse, boucle de
cordes, cloche, sifflement. **Un seul élément persistant par morceau.** Deux
persistances se neutralisent : le modèle arbitre et abandonne les deux.

Coût : environ 40 caractères dans le style, 50 dans les paroles. C'est le
meilleur rapport qualité-prix du protocole — un morceau reconnaissable dès la
deuxième seconde.

---

## 2. La spatialisation

| Tag | Effet réel |
|---|---|
| `ultra-wide stereo field` | Élargit tout le mix, y compris ce qu'on ne veut pas élargir |
| `panoramic vocal layering` | Étale **les chœurs** autour du lead, qui reste au centre |
| `3D surround mix` | Profondeur avant/arrière (réverbes différenciées), pas seulement gauche/droite |

**Règle d'or : le lead reste au centre.** Élargir la voix principale la rend
lointaine et lui fait perdre son autorité. On élargit les **réponses**, les
harmonies, les ad-libs — le contraste centre/périphérie *est* l'effet.

Dans les balises, la spatialisation se précise par section :
`ad-libs hard panned`, `whispered, ultra-wide`, `3D vocal spread`,
`both voices centre on the bridge`.

Un déplacement stéréo peut porter une information narrative : deux voix qui
s'opposent aux extrêmes puis se rejoignent au centre racontent la réconciliation
sans un mot de texte.

---

## 3. Sidechain et filtres (grammaire French Touch)

- `heavy sidechain pumping on every kick` — le pompage caractéristique. Créé un
  trou rythmique à chaque kick : **c'est dans ces trous qu'on place la
  percussion foley**, sinon elle est écrasée.
- `resonant low-pass filter sweeps` — la montée sans ajout d'instrument. Le
  pré-refrain n'a pas besoin de nouvelles couches, seulement d'ouvrir le filtre.
- **Couper le sidechain au pont** (`no sidechain`) : le morceau semble
  s'immobiliser d'un coup. C'est l'effet de rupture le moins cher qui existe,
  et il ne fonctionne que si le pompage était constant avant.

---

## 4. Vocoder et talkbox

Ce ne sont pas des synonymes, et Suno les distingue :

- **Talkbox** : timbre organique, chantant, avec du souffle. `rhythmic talkbox
  vocals` pour un motif rythmique, `crystalline vocoder lead` pour une ligne
  mélodique nette.
- **Vocoder** : robotique, harmonisé, plus froid.
- `formant-shifted harmonies` : décale le timbre sans toucher la hauteur —
  effet « autre personne » sans changer de note. Excellent au pont.

Le talkbox **articule mal les consonnes** : lui donner des mots à voyelles
ouvertes et des syllabes détachées (`Au-to-ma-tique`). Un mot en consonnes
serrées sortira en bouillie.

---

## 5. Syntaxe Call & Response

```
(Call: texte lancé par le lead) Response: [Panoramic Group Vocals: texte renvoyé]
```

- Le Call porte le sens, la Response porte **l'accroche** : elle doit être plus
  courte, chantable, et reprendre un mot déjà entendu.
- Coût : **90 à 110 caractères par ligne**. Un refrain de 4 lignes coûte donc
  ~400 caractères, et il est répété trois fois : ~1200 sur les 5000. À budgéter
  dès le départ, pas à découvrir à la fin.
- Variante économique quand la place manque : parenthèses simples
  `Automatique (au-to-ma-tique)`. Moins précis pour la spatialisation, deux
  fois moins cher.
- La Response tombe **après** la ligne, jamais dessus : c'est la règle qui fait
  fonctionner un refrain en club — la foule doit avoir la place de répondre.

---

## Deux voix lead : pourquoi ça se règle en deux clips

Le champ de style ne décrit bien **qu'une seule voix dominante**. Écrire
`male tenor lead` et `powerful female alto lead` dans le même prompt donne l'un
de ces deux résultats : Suno moyenne les timbres, ou il alterne au hasard d'une
section à l'autre. Les duos en un seul clip du dossier
(`examples/il-est-a-moi.md`, `examples/elle-assure-grave.md`,
`examples/layali.md`, `examples/ca-repart.md`) vivent avec ce défaut et le
compensent par une répartition stricte des sections.

La solution propre est le workflow Extend : **un clip par voix**, chacun avec un
prompt où sa chanteuse est la seule.

```
Clip 1 : Male tenor lead only, one single lead voice
Clip 2 : Powerful female alto lead, one single lead voice
```

Voir `examples/ta-version.md`.

**Faire chanter les deux ensemble** reste possible, mais seulement dans le
clip 2 et seulement tard :

```
Male and female voices sing together only on the bridge and the final chorus
```

Ça marche parce qu'à ce stade l'extension a installé le timbre masculin dans
l'audio : le modèle le prolonge au lieu de l'inventer. Demander la même chose au
clip 1 ne produit rien — il n'y a encore rien à prolonger.

### Une variable à la fois

Trois morceaux longs du dossier changent une seule chose entre les clips :

| Morceau | Ce qui change | Ce qui reste |
|---|---|---|
| `deuxieme-salle.md` | le tempo (108 → 128) | tout le reste |
| `youyous.md` | l'instrumentation (machine → mains) | tout le reste |
| `ta-version.md` | la voix lead (homme → femme) | tout le reste |

**Jamais deux à la fois.** Le raccord se cache derrière une rupture attendue ;
deux ruptures simultanées ne se cachent plus, elles s'additionnent et on entend
deux morceaux.

### Précision : « une variable » veut dire un changement perçu

La règle « une seule variable change entre deux clips » se lit mal si on compte
les tags. Sur `examples/la-deuxieme-fois.md`, le clip 2 modifie six tags —
microphones de salle, réverbération commune, foule, compression, précision
rythmique, absence de vernis. Ce n'est pas six variables : c'est **une**.

> Une variable, c'est un **fait perçu**, pas un tag. Ces six tags servent la même
> information — on est passé de la cabine à la salle — et l'oreille les lit comme
> une seule.

**Test pratique** : si tout ce qui change se résume en une phrase de six mots
(« on est passé en concert », « on a monté d'un ton », « c'est elle qui chante »),
c'est une variable. Si la phrase a besoin d'un « et », c'en est deux — et le
raccord s'entendra.

### Trois vides pour trois ruptures

Le raccord se cache toujours dans un manque de repère, mais pas le même selon ce
qui change :

| Ce qui change | Vide nécessaire | Outil |
|---|---|---|
| Le tempo | rythmique | batterie coupée, bruit de pièce |
| La tonalité | harmonique | montée de bruit blanc, sans hauteur |
| La voix lead | vocal | instrument seul, aucune voix |
| Le lieu | acoustique | arrêt de bande, puis air d'une autre pièce |

Dans les quatre cas, une seconde suffit — mais elle doit être vide **de la chose
qui va changer**.

## Persistance à deux étages : les genres soustractifs

La règle générale — l'élément persistant doit survivre à **toutes** les ruptures
— tombe en panne sur les genres dont le sommet dramatique est une **soustraction**
(amapiano, certaines formes de house africaine, le dub). Là, l'élément le plus
identifiable du morceau est justement celui qu'on enlève.

Cas réel : `examples/doucement.md`. Le **log drum** est simultanément la basse,
la percussion principale et le motif mélodique — donc le candidat évident à la
persistance. Sauf que le seul événement du morceau consiste à le faire
disparaître.

La sortie est d'empiler **deux niveaux** :

| Étage | Ce que c'est | Comportement |
|---|---|---|
| **La charge** | L'élément identifiable du genre | Porte le morceau et **doit** pouvoir disparaître — sa disparition est l'événement |
| **Le fil** | Un élément mince et continu | Ne s'arrête jamais, y compris pendant la soustraction |

Le fil se déclare avec une proposition explicite sur son maintien :

```
Persistent shaker thread throughout, never stopping, still there when the log drum is out.
```

**La dernière proposition est la moitié utile du tag.** Sans elle, Suno coupe
tout pendant le breakdown, et le retour s'entend comme un raccord de montage
plutôt que comme un événement musical.

**Règle** : dès qu'un genre fait de la soustraction son sommet, prévoir deux
persistances — celle qu'on retire, et celle qui reste pour tenir la couture.

## Neuvième raison de scinder : l'a cappella

Aux huit raisons documentées s'en ajoute une, qui découle des briefs purement
vocaux : **le clip 2 est le même morceau sans un seul instrument**, puis tout
revient d'un bloc.

Test de la variable unique : « tout sauf les voix disparaît » — six mots, pas de
« et ». C'est bien **une** variable perçue.

**C'est la preuve de l'arrangement vocal.** Un empilement qui ne tient pas debout
seul n'est pas un arrangement, c'est un doublage. Si les harmonies sonnent
maigres une fois nues, l'écriture vocale du clip 1 était décorative.

Trois conditions, toutes vérifiées sur `examples/ca-se-voit.md` :

1. **Le clip 2 mène par la voix dans le champ de style.** Suno pondère la tête du
   prompt : un clip 2 commençant par `French R&B club banger` ferait entrer la
   batterie malgré la consigne. Écrire
   `Female vocal group a cappella opening, then …`.
2. **Le silence instrumental se compte en mesures**, jamais en intention :
   `no instruments at all for the first sixteen bars`.
3. **Les respirations restent audibles** — `breath and lip noise audible`. C'est
   ce qui distingue un a cappella d'une nappe de synthé.

**Corollaire sur la persistance.** L'élément persistant doit survivre à toutes
les ruptures ; ici la rupture est le départ de **tous** les instruments. Piano,
stab, riff : tous disqualifiés. Le seul candidat possible est une **nappe
d'harmonies vocales sans paroles**. Quand la contrainte ne laisse qu'un
candidat, c'est en général le bon.

## Correction : le vide harmonique n'est requis que si la tonalité change

La règle des quatre vides disait qu'une jointure entre deux clips demande un vide
harmonique — un riser de bruit blanc, sans hauteur, qui ne peut pas contredire la
suite. **Elle était écrite pour le cas d'une modulation.**

Quand la tonalité **ne change pas**, le vide est un contresens : la jointure
demande l'inverse, un élément qui **traverse**. Sur `examples/ca-se-voit.md`, la
nappe d'harmonies tient à la fin du clip 1 et reprend au début du clip 2, dans la
même tonalité — et c'est elle qui rend la coupe inaudible.

| Situation à la jointure | Ce qu'il faut |
|---|---|
| La tonalité **change** | Un **vide** — riser sans hauteur, aucun accord |
| La tonalité **reste** | Une **continuité** — un élément qui tient des deux côtés |
