# « Impeccable » — boogie / electro-funk 12", 108 BPM, deux clips

Morceau **original** écrit dans l'esthétique boogie du tout début des années 80,
au format douze pouces (deux clips, ≈ 6 minutes). Commande partie d'un morceau
de référence de cette époque : on en reprend le **vocabulaire de production**,
jamais le texte ni la mélodie.

| Clip | Style | Paroles |
|---|---|---|
| Clip 1 — le corps chanté | 859 / 1000 | 2714 / 5000 |
| Clip 2 — la section piste | 900 / 1000 | 1694 / 5000 |

Total paroles : **4408 / 10000**. Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,81** — onze sections de hook sur dix-huit.

---

## 🧪 ANALYSE DU MIX

**Sur un disque boogie, la basse est le disque.** Pas un accompagnement : un
riff de slap de deux mesures qui ne s'arrête jamais, du premier au dernier
sillon. C'est le seul genre du dossier où la persistance tombe **naturellement**
sur la basse — ailleurs je l'ai systématiquement écartée parce qu'elle disparaît
aux breakdowns. Ici c'est l'inverse : au breakdown, tout part **sauf** elle.
`Persistent slap bass riff throughout`, déclaré dans les deux clips.

**Le 12" existe à cause du DJ, et sa structure le dit.** Les trois minutes
supplémentaires d'un maxi ne sont jamais des couplets en plus : c'est un
**breakdown** puis un **workout basse-batterie** de trente-deux mesures, fait
pour mixer par-dessus. D'où le découpage : clip 1 = le morceau chanté, clip 2 =
la section piste. Même raisonnement que sur `jusqu-au-jour.md`, transposé de
1982 à aujourd'hui — et c'est ce qui donne les six minutes.

**Les claquements de mains sur 2 et 4, pas une caisse claire.** C'est la
signature qui date un disque de 1981-83 mieux que n'importe quel synthé :
`LinnDrum-style handclaps on two and four`. Avec les descentes de toms
électroniques (`syn-drum tom fills`), ce sont les deux marqueurs d'époque du
prompt. Si on les retire, on obtient de la funk générique.

**Talkbox, pas vocoder — et ce n'est pas interchangeable.** Le talkbox envoie le
son de l'instrument dans un tube jusqu'à la bouche du musicien : c'est **sa
bouche** qui articule le timbre du synthé. Le vocoder fait l'inverse, il impose
les formants de la voix à un synthé. Le premier a une diction pâteuse et
chantante, le second une diction robotique et nette. Pour cette époque, talkbox
— et il **double la voix lead** sur le refrain plutôt que de la remplacer.
`automatique.md` utilisait le talkbox comme lead à 121 BPM ; ici il est un
doublage, ce qui est l'usage d'origine.

**Le hook est un adjectif.** « Impeccable » : quatre syllabes, un seul mot, et
la salle peut le crier sans rien apprendre. Le compliment-adjectif est la
mécanique de hook de tout ce répertoire — un mot qui se suffit, répété, sans
verbe à conjuguer. Coût dérisoire au post-refrain :
`(Im-pec-cable !)` deux fois par ligne.

**Le master n'est pas moderne.** `punchy compression, round fat low end, dance
floor loudness` — mais **pas** `club loudness` au sens 2020, et surtout pas de
limiteur écrasé. Un boogie doit respirer entre les coups de caisse. Le fichier
de référence que tu m'as envoyé est masterisé à −14 LUFS : c'est exactement la
bonne cible pour ce genre, et ça correspond aussi au niveau de référence des
plateformes de streaming. Rien à corriger de ce côté.

**Bloc d'exclusions recomposé** (cinquième variante) : `no low-quality
recording` retiré à cause de `warm analog tape saturation`, `no trap drums` et
`no modern autotune` ajoutés parce qu'un prompt de funk française attire les
deux, et `avoid over-saturated bass` remplacé par `no cluttered low end` — la
basse slap doit pouvoir être grasse.

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 1 (859 / 1000)

```
Early-80s French boogie and electro-funk twelve-inch mix, 108 BPM. Straight four-on-the-floor kick, LinnDrum-style handclaps on two and four, syn-drum tom fills, tight closed hats, cowbell, shaker. Persistent slap bass riff throughout. Clavinet stabs, Rhodes chords, analog Moog-style synth lead, brass section hits, string machine pad, handclap breaks. Male tenor lead, playful joyful delivery, crisp diction, talkbox hook doubling the vocal, stacked gang vocal responses, whooping ad-libs, layered party backing vocals. Ultra-wide stereo field, panoramic vocal layering, warm analog tape saturation, big plate reverb on the snare. Warm analog twelve-inch master, punchy compression, round fat low end, dance floor loudness. Exclude: no mumble rap, no trap drums, no generic EDM, avoid messy mix, no audio artifacts, no modern autotune, no cluttered low end.
```

## 📝 PAROLES — CLIP 1 (2714 / 5000)

```
[Intro: Slap bass alone, handclaps entering, talkbox teaser, spoken over]
(Instruction: Persistent slap bass riff throughout)
(parlé, souriant, voix proche)
Vendredi. Vingt-deux heures.
Et là, elle est entrée.

[Hook Teaser: Talkbox line, gang answering, syn-drum fill, kick drops in]
(Call: Impeccable !) Response: [Panoramic Group Vocals: Im-pec-cable !]
(Call: Impeccable !) Response: [Panoramic Group Vocals: Im-pec-cable !]

[Verse 1: Male tenor, playful, slap bass and claps only, clavinet accents]
J'étais posé au fond, j'avais rien demandé,
Le verre à moitié plein, la soirée à moitié faite.
La porte s'est ouverte, quelqu'un a baissé le son,
Ou alors c'est mes oreilles qui ont décidé toutes seules.
T'as traversé la salle comme on traverse un pont,
Sans regarder en bas, sans demander l'avis.
J'ai vu trois mecs répéter leur phrase dans leur tête,
T'es passée devant eux, t'as même pas ralenti.

[Pre-Chorus: Brass rising, syn-drum roll, string machine entering, harmonies]
Et moi j'ai rien préparé, j'ai rien à vendre,
J'ai juste deux pieds qui savent où ils vont.
Alors je te le dis franchement, sans détour,
Trois, deux, un —

[Chorus: Explosive hook, talkbox doubling the lead, gang responses, brass full]
Impeccable, de la tête aux pieds,
Y'a rien à reprendre, j'ai vérifié.
Impeccable, et tu le sais très bien,
Tu passes, la salle s'arrête — et moi aussi.

[Post-Chorus: Talkbox and gang vocals only, slap bass forward, claps, cowbell]
(Im-pec-cable !) (Im-pec-cable !)
(La salle s'arrête, oh !) (La salle s'arrête !)

[Verse 2: Same tenor, freer phrasing, clavinet forward, brass answering]
On a dansé quatre morceaux sans se dire un mot,
Y'a des conversations qui se font avec les épaules.
T'as ri quand j'ai raté le pas que tout le monde connaît,
Et t'as recommencé plus lentement rien que pour moi.
Le DJ nous a vus, il a rallongé le morceau,
Il a compris avant nous ce qui était en train d'arriver.
J'ai plus l'âge de faire semblant d'être détaché,
Alors je te le dis : c'est toi, ce soir, et c'est tout.

[Pre-Chorus: Brass higher, claps doubled, strings wider, harmonies stacking]
Et moi j'ai rien préparé, j'ai rien à vendre,
J'ai juste deux pieds qui savent où ils vont.
Alors je te le dis franchement, sans détour,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, talkbox hard panned, brass maximum]
Impeccable, de la tête aux pieds,
Y'a rien à reprendre, j'ai vérifié.
Impeccable, et tu le sais très bien,
Tu passes, la salle s'arrête — et moi aussi.

[Post-Chorus: Talkbox and gang vocals only, slap bass forward, claps, cowbell]
(Im-pec-cable !) (Im-pec-cable !)
(La salle s'arrête, oh !) (La salle s'arrête !)
[Brass filtering out, bass riff carrying on alone, end of clip one]
```

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 2 (900 / 1000)

Dérivé du clip 1 : même genre, même BPM, même rythmique, même persistance, même
instrumentation. Seule la phrase d'architecture change.

```
Early-80s French boogie and electro-funk twelve-inch mix, extended dance floor section. 108 BPM straight four-on-the-floor kick, LinnDrum-style handclaps on two and four, syn-drum tom fills, tight closed hats, cowbell, shaker. Persistent slap bass riff throughout. Opens on a stripped breakdown, bass claps and talkbox only, then a 32-bar instrumental slap bass and syn-drum workout, then the vocal returns. Clavinet stabs, Rhodes chords, analog Moog-style synth lead, brass section hits, string machine pad. Male tenor lead, talkbox hook doubling the vocal, stacked gang vocal responses. Ultra-wide stereo field, warm analog tape saturation, big plate reverb on the snare. Warm analog twelve-inch master, punchy compression, round fat low end, dance floor loudness. Exclude: no mumble rap, no trap drums, no generic EDM, avoid messy mix, no audio artifacts, no modern autotune, no cluttered low end.
```

## 📝 PAROLES — CLIP 2 (1694 / 5000)

```
[Breakdown: Everything out but slap bass, handclaps and talkbox, room noise]
(Instruction: Persistent slap bass riff throughout)
(talkbox seul, la salle répond)
(Im-pec-cable...) (Im-pec-cable...)
(parlé, bas, proche du micro)
Laissez la basse tourner. On a le temps.

[Bass Workout: 32 bars instrumental, slap bass and syn-drums, no vocals]

[Verse 3: Male tenor returns, close-mic, bass and claps only, clavinet late]
Quatre heures, la salle se vide, on est encore debout,
T'as tes chaussures à la main et moi j'ai plus de voix.
On sait très bien qu'il faut rentrer, personne bouge,
La basse continue, on lui fait confiance.
Demain je te raconterai comment je t'ai vue entrer,
Tu diras que j'exagère — j'exagère pas.

[Pre-Chorus: Brass rising, syn-drum roll, strings entering, harmonies stacking]
Et moi j'ai rien préparé, j'ai rien à vendre,
J'ai juste deux pieds qui savent où ils vont.
Alors je te le dis franchement, sans détour,
Trois, deux, un —

[Final Chorus: All voices, widest field, talkbox stacked, brass at maximum]
Impeccable, de la tête aux pieds,
Y'a rien à reprendre, j'ai vérifié.
Impeccable, et tu le sais très bien,
Tu passes, la salle s'arrête — et moi aussi.

[Post-Chorus: Whole room, double-time claps, talkbox on top, cowbell]
(Im-pec-cable !) (Im-pec-cable !)
(La salle s'arrête, oh !) (La salle s'arrête !)
(Im-pec-cable !) (Im-pec-cable !)
(La salle s'arrête, oh !) (La salle s'arrête !)

[Vamp Outro: Bass riff and claps, gang ad-libs trading, brass stabs, long fade]
(Im-pec-cable...) (Oh oh oh !)
(De la tête aux pieds...) (Oh oh oh !)
(parlé, essoufflé, en riant, la basse continue)
Cinq heures. Le videur nous regarde.
Il attend la fin du morceau, lui aussi.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 108, identique sur les deux clips.** Le tempo du boogie : au-dessus de
112 on bascule dans le disco tardif, en dessous de 104 le slap perd son ressort.
Le kick est droit, sans swing ; c'est le jeu de basse qui apporte le
balancement, pas la grille.

**Tonalité — Mi bémol majeur.** Tonalité de cuivres et de basse slap. Le riff
tient sur deux mesures et **ne module jamais** — pas même au pont, parce qu'il
n'y a pas de pont : un 12" boogie n'a pas de rupture harmonique, il a un
breakdown. Le clavinet joue les contretemps, la basse les temps forts, et
l'espace entre les deux est tout le groove.

**Delivery.** Couplets : ténor souriant, articulé, posé sur le temps, presque
raconté — c'est une anecdote, pas une déclaration. Refrain : voix pleine,
doublée par le talkbox à l'unisson (pas à l'octave). Ad-libs et réponses : voix
de fête, plusieurs personnes, pas un chœur de studio.

**Le talkbox double, il ne remplace pas.** Régler le mélange autour de 70 % voix
/ 30 % talkbox sur le refrain. En solo au breakdown seulement, où il porte le
mot du hook tout seul.

**Placement stéréo.** Basse et kick au centre, mono. Claquements de mains larges
(±70 %). Cuivres en bloc légèrement à droite, clavinet à gauche — c'est la
disposition d'un enregistrement de section, pas d'un empilement de pistes.
Talkbox en ping-pong sur les post-refrains. Voix lead au centre avec une plaque
courte, jamais de réverbération longue.

**Le refrain est identique à l'écrit** aux trois passages, sur les deux clips.
Variation par les balises : `talkbox doubling the lead` → `harmonies wider,
talkbox hard panned` → `all voices, talkbox stacked, brass at maximum`.

**Ratio hook / couplets — 1,81**, onze sections de hook sur dix-huit. Le workout
de trente-deux mesures ne coûte **aucun caractère** et occupe presque une minute :
c'est le cas extrême du biais documenté dans `references/structure-tags.md`.

**Marge volontairement large.** 2286 et 3306 caractères libres. Sur un maxi, la
durée vient des mesures instrumentales, pas du texte — écrire un quatrième
couplet le transformerait en morceau d'album.

**Leviers de re-génération.** Style : 141 de marge (clip 1), 100 (clip 2).
- Basse pas assez en avant → `fat slap bass riff high in the mix` (+35).
- Trop moderne → `1982 analog production, no digital reverb` (+42).
- Claps qui sonnent comme une caisse claire → `dry layered handclaps replacing
  the snare` (+45).
- Talkbox absent → `talkbox lead on the hook, tube-driven vowel tone` (+48).
- Raccord audible entre les clips → vérifier que BPM, riff de basse et
  persistance sont **identiques mot pour mot** dans les deux styles.
