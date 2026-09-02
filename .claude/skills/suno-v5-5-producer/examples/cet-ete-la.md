# « Cet Été-Là » — vibe été mélancolique, refrain club, 92 BPM

Le brief contient deux contradictions. La première a une réponse déjà
documentée ; la seconde en produit une neuve.

| Champ | Mesure |
|---|---|
| Style seul (bloc dans *Exclude Styles*) | **783 / 1000** — marge 217 |
| Style + bloc recollé (mode repli) | **932 / 1000** — marge 68 |
| Paroles | **3386 / 5000** — marge 1614 |

Ratio hook / couplets : **1,65**. Balises en début de ligne : **14**, pour 14
sections.

---

## 🧪 ANALYSE DU MIX

**Contradiction 1 : 92 BPM n'est pas un tempo de club.** Réponse connue —
dissocier le haut et le bas de la rythmique. Kick et caisse claire en half-time,
shakers et claps en double-temps **sur le refrain seulement**. Le bas reste à 92
pour que le texte tienne, le haut double pour que la salle bouge. Déjà appliqué
sur `examples/ne-raccroche-pas-club.md` ; ici la nuance est que le double-temps
n'arrive **qu'au refrain**, ce qui en fait l'événement.

**Contradiction 2 : « mélancolique » et « refrain club » ne veulent pas la même
harmonie — et c'est là que ça devient intéressant.**

Écrire `melancholic` dans un champ de style produit presque mécaniquement du
mineur et du lent. Le refrain cesse alors d'être club : il devient une ballade
avec des claps. Or le disque d'été mélancolique existe, et son mécanisme est
précisément l'inverse : **l'harmonie reste majeure, la tristesse est dans le
texte.** Le contraste entre les deux *est* le genre.

Ça se déclare, sinon le modèle tranche tout seul :

```
in D major. The harmony stays bright and major throughout, the melancholy is in the lyric only, never in the chords.
```

> **Règle** : quand un registre émotionnel et un registre rythmique se
> contredisent, préciser **où** vit l'émotion. Sans quoi le modèle l'installe
> dans l'harmonie, qui est le paramètre le plus facile à bouger — et le plus
> coûteux pour un refrain de salle.

**Le bloc d'exclusion protège un registre, pas un son.** `no minor key`,
`no dark atmosphere` : ce sont des exclusions inhabituelles pour le dossier, qui
vise d'ordinaire des timbres. Elles sont ici la deuxième moitié de la même
consigne — le positif dit où la mélancolie doit être, le négatif dit où elle ne
doit pas aller.

**Le refrain est un souvenir, pas une célébration.** C'est ce qui autorise un
hook de salle sur un morceau triste : le refrain est ce que la bande criait
*avant*, chanté aujourd'hui au présent. Cousin du refrain à trois lectures de
`examples/la-derniere.md`, mais obtenu par le **temps du récit** plutôt que par
l'arrangement.

Et la mélancolie tient dans **une ligne sur quatre** :

```
Cet été-là, on était tous,        8
Cet été-là, on bougeait pas,      8
On savait pas que c'était court,  8   ← la seule ligne triste
Cet été-là, on était tous.        8
```

Trois lignes de fête, une ligne qui date tout le reste. Si la tristesse occupait
deux lignes sur quatre, le refrain ne se chanterait plus en salle.

**La réverbération dit l'été.** `Short bright room reverb, no long hall` : un
disque d'été sonne **dehors**, pas dans une église. C'est une décision de mix,
pas un instrument, et elle coûte six mots.

---

## 🎛️ STYLE PROMPT — 783 / 1000 caractères

```
French summer club record, warm and open-air, 92 BPM, in D major. The harmony stays bright and major throughout, the melancholy is in the lyric only, never in the chords. Punchy kick and snare in half-time, double-time shakers and claps on the chorus, rim clicks, tambourine. Persistent nylon string guitar riff throughout, four bars, present in every section. Warm round bass, Rhodes, marimba, string pad on the chorus only. Male lead, warm tenor, close and conversational on the verses, full and open on the chorus, huge panoramic group responses, whole crowd singing along. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. Short bright room reverb, no long hall. Ultra-wide stereo field, lead centred and dry. Warm analog master, deep low end.
```

---

## 🚫 BLOC D'EXCLUSION — 138 caractères

Champ **Exclude Styles**. En mode repli → 932 / 1000, marge 68.

```
no minor key, no dark atmosphere, no trap drums, no mumble rap, no distorted vocals, no generic EDM, avoid messy mix, no cluttered low end
```

`no minor key` et `no dark atmosphere` protègent un **registre**, pas un timbre —
c'est inhabituel dans ce dossier et c'est délibéré : ils sont la seconde moitié
de la consigne portée par le champ positif. `no autotune` est absent : le refrain
empile des voix de foule.

---

## 📝 SCRIPT & PAROLES — 3386 / 5000 caractères

```
[Intro: Nylon guitar riff alone, tambourine, no drums, spoken close, warm]
(Instruction: Persistent nylon string guitar riff throughout)
(parlé, bas, en souriant, on entend des cigales)
Même parking. Même heure.
Y'a que le nombre de voitures qui a changé.

[Verse 1: Warm tenor, close and conversational, half-time drums, guitar and bass]
On dormait à six dans un studio prévu pour deux,
On mangeait des pâtes en parlant de ce qu'on ferait après.
Personne avait de plan, tout le monde avait le temps,
Et le temps, à cet âge-là, on croit que c'est un stock.
(la guitare seule, deux temps)
Y'avait la fille du deuxième qui chantait faux exprès,
Y'avait mon pote qui répétait qu'il partirait jamais.
Il est parti en septembre. Il avait raison sur tout,
Sauf sur ça.

[Pre-Chorus: Shakers doubling, claps entering, string pad rising, guitar up]
On savait pas qu'on vivait le meilleur,
On était trop occupés à le vivre.
Lève ton verre une seconde —
Écoute bien —

[Chorus: Full and open, whole crowd singing, double-time claps, drums full]
Cet été-là, on était tous,
Cet été-là, on bougeait pas,
On savait pas que c'était court,
Cet été-là, on était tous.

[Post-Chorus: Huge group responses, tambourine, marimba, drums full]
(Call: Cet été-là) Response: [Panoramic Group Vocals: On était tous]
(Call: Cet été-là) Response: [Panoramic Group Vocals: On était tous]

[Verse 2: Same tenor, higher and freer, bass forward, marimba answering]
Maintenant on s'écrit pour les anniversaires,
Trois lignes, deux emojis, et personne rappelle.
C'est pas de la rancune, c'est juste des kilomètres,
Et des semaines qui se remplissent toutes seules.
(la guitare seule, deux temps)
J'ai gardé la photo où on ferme tous les yeux,
La seule ratée, la seule que je regarde encore.
On était moches, on était bien, on était là,
Et c'est le seul été dont je connais la date.

[Pre-Chorus: Shakers tripled, claps stacking, strings higher, guitar doubled]
On savait pas qu'on vivait le meilleur,
On était trop occupés à le vivre.
Lève ton verre une seconde —
Écoute bien —

[Chorus: Same hook, crowd wider, marimba doubling, drums full]
Cet été-là, on était tous,
Cet été-là, on bougeait pas,
On savait pas que c'était court,
Cet été-là, on était tous.

[Post-Chorus: Huge group responses, tambourine, marimba, drums full]
(Call: Cet été-là) Response: [Panoramic Group Vocals: On était tous]
(Call: Cet été-là) Response: [Panoramic Group Vocals: On était tous]

[Bridge: Drums out, nylon guitar and one voice, no reverb, cicadas underneath]
(voix nue, sans double, on entend les cigales)
J'y retourne chaque année, le même week-end.
Ils viennent plus. Moi si.
(la guitare répond à sa place, quatre temps)
C'est pas triste. C'est juste à moi maintenant.
[Silence: one bar, one guitar chord, the whole band returns at once]

[Final Chorus: Everyone, widest field, strings maximum, claps double-time]
Cet été-là, on était tous,
Cet été-là, on bougeait pas,
On savait pas que c'était court,
Cet été-là, on était tous.

[Post-Chorus: Whole crowd, responses tripled, tambourine and marimba, full]
(Call: Cet été-là) Response: [Panoramic Group Vocals: On était tous]
(Call: Cet été-là) Response: [Panoramic Group Vocals: On était tous]
(Call: Cet été-là) Response: [Panoramic Group Vocals: On était tous]

[Outro: Band stops, nylon guitar and cicadas, spoken warm, hard stop]
(parlé, doux)
Bon.
À l'année prochaine, alors.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 92.** Tempo de conversation. Le club se fabrique dans les shakers et les
claps en double-temps, **au refrain seulement** : c'est leur arrivée qui fait
l'événement, pas un changement de tempo.

**Tonalité — Ré majeur, et ça ne bouge jamais.** Pas de passage en mineur au
pont, pas d'accord emprunté sur la ligne triste. Toute la tension vient du
décalage entre ce que disent les accords et ce que dit le texte — l'annuler une
seule fois, c'est expliquer la blague.

**Delivery — ténor chaud, jamais plaintif.** Couplets proches du micro, ton de
conversation, presque souriants. Le texte est mélancolique ; **la voix ne doit
pas l'être**. Une voix triste sur un texte triste sur une harmonie majeure fait
deux tiers du morceau qui tirent dans le même sens, et le contraste s'effondre.

**Le pont est le seul moment où la voix a le droit d'être nue.** Guitare nylon,
cigales, aucune réverbération ajoutée. La guitare répond à la place de la voix
après « Ils viennent plus. Moi si. » — la phrase qui manque est jouée. Puis un
accord, et tout revient **d'un bloc**.

**Placement stéréo.** Voix lead au centre, sèche. Guitare nylon légèrement à
gauche, marimba à droite. Kick, caisse claire et basse au centre, mono. Chœurs de
foule **tout ouvert**, avec la réverbération de pièce la plus courte du morceau —
une foule proche, pas une cathédrale. Cigales très en fond, filtrées.

**Ratio — 1,65.** Fenêtre équilibre. Deux couplets qui racontent, trois refrains
qui se reprennent : c'est la structure d'un morceau d'été, pas d'un outil de
peak-time.

**Leviers de re-génération.** 217 caractères de marge avec le champ dédié, 68 en
mode repli.
- Le morceau vire au mineur → `bright major harmony only, never minor, never dark` (+49). **Ne rentre qu'avec le champ dédié.**
- Voix trop plaintive → `warm smiling delivery, never mournful` (+37).
- Refrain pas assez large → `whole crowd singing the chorus together` (+38).
- Double-temps present partout → `double-time claps on the chorus only` (+36).
- Réverbération trop longue → `short room reverb, outdoor feel` (+31).
