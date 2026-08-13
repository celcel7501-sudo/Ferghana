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
