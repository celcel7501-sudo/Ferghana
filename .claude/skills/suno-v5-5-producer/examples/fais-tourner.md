# « Fais Tourner » — club dansant, deux clips, 124 BPM

Scission par **changement d'instrumentation** : le clip 2 est le même morceau,
machines coupées, rythme repris à la main. C'est une des huit raisons documentées
que le dossier n'avait encore jamais exercée — et elle produit une règle sur la
persistance.

| Champ | Clip 1 | Clip 2 |
|---|---|---|
| Style | **719 / 1000** — marge 281 | **770 / 1000** — marge 230 |
| Style recollé (repli) | 878 / 1000 — marge 122 | 929 / 1000 — marge 71 |
| Paroles | **2432 / 5000** | **2216 / 5000** |
| Ratio hook / couplets | **1,67** | **3,62** |
| Balises en début de ligne | 11 pour 11 sections | 9 pour 9 sections |

---

## 🧪 ANALYSE DU MIX

**L'élément persistant se choisit en regardant le clip le plus pauvre.** C'est la
règle que ce morceau dégage, et c'est la deuxième fois que la contrainte tranche
à ma place.

| Morceau | Ce que le clip 2 retire | Ce que la persistance devait donc être |
|---|---|---|
| `examples/ca-se-voit.md` | Tous les instruments | Une **nappe vocale** — seul candidat possible |
| **ce morceau** | Toutes les machines | Un motif **jouable à la main comme par une machine** |

D'où le choix du **motif de clave**, trois puis deux : un sample de rimshot le
joue au clip 1, deux baguettes le jouent au clip 2. Un pluck de synthé, une 808,
un filtre : tous disqualifiés — ils n'existent pas dans le monde du clip 2.

> **Règle** : sur un morceau scindé, la persistance n'est pas choisie pour le
> clip le plus riche mais pour **le plus restrictif**. C'est lui qui décide.

**La variable unique tient en six mots** : « toutes les machines sortent, les
mains prennent le relais ». Pas de « et ». Même tempo, même tonalité, même
texte de refrain, même motif persistant. Une seule chose change, et elle change
partout.

**La jointure ne demande aucun vide.** La tonalité ne bouge pas, donc — d'après
la correction apportée sur `ca-se-voit.md` — la coupe veut une **continuité**,
pas un riser. Le clip 1 se termine sur la clave et les mains, seuls éléments
déjà humains ; le clip 2 s'ouvre sur la même clave, désormais frappée pour de
vrai. **L'auditeur n'entend pas une coupe, il entend un relais.**

**Le clip 2 ouvre sur la rupture, jamais sur un couplet** — règle du dossier.
Ici la rupture est le passage à la main, et elle est doublée d'un second geste :
**c'est la salle qui chante le refrain en premier**, le chanteur se tait. Il ne
répond qu'ensuite. Le morceau parle de faire tourner ; le clip 2 fait tourner
jusqu'au micro.

**Ratios : 1,67 puis 3,62.** Conforme à la règle des deux ratios — le clip 1
raconte, le clip 2 est un aboutissement. Les mesurer ensemble donnerait 2,3, un
chiffre qui ne décrit ni l'un ni l'autre.

**Le refrain suit le squelette syllabique**, quatre lignes de **8 syllabes**,
forme A B C A :

```
Fais tourner, y'a que nous ce soir,     8
Fais tourner, on compte plus rien,      8
Donne-le à celui d'après,               8
Fais tourner, y'a que nous ce soir.     8
```

La troisième ligne dit littéralement ce que le clip 2 met en scène.

---

## 🎛️ STYLE PROMPT — CLIP 1 — 719 / 1000 caractères

```
French club banger, danceable and warm, 124 BPM, in A minor. Four-on-the-floor kick, crisp offbeat hats, layered claps, tight snare rolls into the chorus. Persistent rim click clave pattern throughout, three then two, present in every section. Round analog bassline with portamento, filtered Rhodes chords, bright synth pluck, brass stab on the chorus. Male lead, warm tenor, short punchy phrases on the verses, full and open on the chorus, huge panoramic group responses, whole crowd chanting the hook. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. Ultra-wide stereo field, lead centred and dry, clave panned wide. Polished club master, deep round low end, preserved transients.
```

## 🎛️ STYLE PROMPT — CLIP 2 — 770 / 1000 caractères

Dérivé du clip 1 : même tempo, **même tonalité**, même motif persistant. Le
retrait des machines est écrit en clair, parce qu'un modèle qui lit
`French club banger` remet une boîte à rythmes.

```
Live percussion version of a French club banger, 124 BPM, in A minor. All machines are gone: no programmed drums, no synth bass, no electronic kick. The rhythm is played by hand — congas, timbales, cowbell, shakers, tambourine, hand claps by the crowd, upright bass. Persistent clave pattern throughout, three then two, now struck on real claves, present in every section. Warm Rhodes and brass stabs remain, played live. Male tenor lead, but the crowd leads the hook and the singer answers them. Huge panoramic group responses, ululations, whistles, room noise. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. Short bright room reverb, audible space. Ultra-wide stereo field, lead centred and dry. Warm analog master, deep low end.
```

---

## 🚫 BLOC D'EXCLUSION — 148 caractères, commun aux deux clips

Champ **Exclude Styles**. En mode repli → 878 et 929 / 1000.

```
no big-room EDM drop, no generic EDM, no mumble rap, no distorted vocals, avoid messy mix, no cluttered low end, avoid thin sounds, no supersaw lead
```

`no autotune` est absent : voix de foule empilées. `no trap drums` est absent
aussi — rien dans les deux prompts ne s'en approche, l'exclure coûterait
15 caractères pour rien.

---

## 📝 SCRIPT & PAROLES — CLIP 1 — 2432 / 5000 caractères

```
[Intro: Rim click clave alone, then kick enters, no bass yet, spoken close]
(Instruction: Persistent rim click clave pattern throughout, three then two)
(parlé, court, on entend du monde derrière)
Vingt-trois heures. Douze personnes.
Personne a prévu de partir.

[Verse 1: Short punchy phrases, warm tenor, kick and claps, Rhodes filtered]
Y'a douze personnes, huit chaises,
Personne s'assoit, tant mieux.
Le voisin a tapé au mur,
On a baissé de rien du tout.
(la clave seule, deux temps)
J'ai plus de batterie sur mon téléphone,
Donc plus personne peut me joindre —
C'est la meilleure nouvelle
De toute ma semaine.

[Pre-Chorus: Snare roll, claps stacking, filter opening, bass entering]
Passe-le à droite,
Compte pas les tours.
Tout le monde a soif ce soir —
Écoute bien —

[Chorus: Full and open, whole crowd chanting, brass stab, drums full]
Fais tourner, y'a que nous ce soir,
Fais tourner, on compte plus rien,
Donne-le à celui d'après,
Fais tourner, y'a que nous ce soir.

[Post-Chorus: Huge group responses, clave wide, claps doubled, drums full]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]

[Verse 2: Same tenor, higher and freer, bass forward, synth pluck answering]
La bouteille fait le tour,
Elle revient jamais pleine.
Chacun raconte le même été
Avec un détail différent.
(la clave seule, deux temps)
On sait tous qui exagère,
On laisse dire, c'est plus drôle.
Demain on sera fatigués —
Demain, c'est pas ce soir.

[Pre-Chorus: Snare roll doubled, claps stacking, filter wide open]
Passe-le à droite,
Compte pas les tours.
Tout le monde a soif ce soir —
Écoute bien —

[Chorus: Same hook, crowd wider, brass doubled, drums full]
Fais tourner, y'a que nous ce soir,
Fais tourner, on compte plus rien,
Donne-le à celui d'après,
Fais tourner, y'a que nous ce soir.

[Post-Chorus: Huge group responses, clave wide, claps doubled, drums full]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]

[Bridge: Machines thin out one by one, synth bass last, clave never stops]
(le kick sort, puis les charleys, puis la basse — la clave continue)
Quelqu'un a sorti des congas de nulle part.
Personne sait à qui elles sont.

[End of Clip One: Only the clave and hand claps remain, no fade, no riser]
(la clave tient toute seule — elle traverse)
```

## 📝 SCRIPT & PAROLES — CLIP 2 — 2216 / 5000 caractères

```
[Intro: The clave continues, now struck on real claves, congas entering by hand]
(Instruction: Persistent clave pattern throughout, three then two, played by hand)
(aucune machine — congas, timbales, cloche, mains)
(parlé, essoufflé, en riant)
Bon. Plus d'électricité.
On va faire sans.

[Crowd Chorus: The crowd leads the hook alone, singer silent, hand claps only]
(la salle chante seule, le chanteur ne chante pas encore)
Fais tourner, y'a que nous ce soir,
Fais tourner, on compte plus rien,
Donne-le à celui d'après,
Fais tourner, y'a que nous ce soir.

[Percussion Break: Congas, timbales, cowbell and claps, no voice, eight bars]
(les mains prennent le relais des machines)
(cloche sur le deuxième et le quatrième, congas dans les trous)

[Verse: Warm tenor answering the crowd, upright bass, Rhodes played live]
Ils connaissent le refrain mieux que moi,
Ça fait deux heures qu'ils l'apprennent.
J'ai rien enseigné à personne,
Ils l'ont pris tout seuls.
(la clave seule, deux temps)
C'est ça que je voulais faire depuis le début :
Un truc qui continue quand je me tais.

[Chorus: Singer and crowd together, congas full, brass stabs live, tambourine]
Fais tourner, y'a que nous ce soir,
Fais tourner, on compte plus rien,
Donne-le à celui d'après,
Fais tourner, y'a que nous ce soir.

[Post-Chorus: Huge group responses, whistles, ululations, claves wide]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]

[Final Chorus: Everyone, widest field, all percussion, upright bass forward]
Fais tourner, y'a que nous ce soir,
Fais tourner, on compte plus rien,
Donne-le à celui d'après,
Fais tourner, y'a que nous ce soir.

[Post-Chorus: Whole room, responses tripled, cowbell doubled, claps everywhere]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]
(Call: Fais tourner) Response: [Panoramic Group Vocals: Jusqu'au bout]

[Outro: Percussion stops one by one, claves last, room noise, spoken, hard stop]
(les congas s'arrêtent, puis la cloche — la clave finit seule)
(parlé, doux, très proche)
Voilà.
Quelqu'un range les congas ?
```

---

## 🎹 NOTES DE STUDIO

**BPM — 124, sur les deux clips.** Aucun ajustement au passage : c'est ce qui
rend le relais crédible. Des percussionnistes qui reprennent un tempo de machine
le tiennent, à condition que la clave ne s'arrête jamais — elle est le
métronome commun.

**Tonalité — La mineur, inchangée.** Condition de la jointure sans vide.

**Le motif de clave, temps par temps.** Trois frappes puis deux, sur la mesure.
Au clip 1 c'est un rimshot échantillonné, panoramisé large ; au clip 2 ce sont
deux baguettes, au même endroit du champ stéréo. **Le placement ne bouge pas non
plus** — c'est ce qui fait que l'oreille reconnaît le même objet sous un autre
timbre.

**Le clip 2, techniquement.** Aucune machine : congas, timbales, cloche,
shakers, tambourin, mains, contrebasse. Le Rhodes et les cuivres restent mais
sont joués. La réverbération est courte et claire — une pièce, pas une salle de
concert. Bruits de bouche, sifflets et youyous doivent rester audibles : c'est ce
qui distingue un enregistrement de groupe d'un preset de percussions.

**Delivery — ténor chaud, jamais poussé.** Couplets en phrases courtes, sur le
temps. Au clip 2 le chanteur **répond** à la salle au lieu de la mener : il entre
après elle, plus bas, presque en retrait. C'est un choix de mise en scène, et il
doit s'entendre dans le niveau.

**Placement stéréo.** Kick, basse et caisse claire au centre, mono. **Clave aux
extrêmes sur les deux clips.** Congas ouvertes, cloche à droite, timbales à
gauche. Chœurs de foule tout ouvert. Voix lead au centre, sèche.

**Leviers de re-génération.** 281 et 230 caractères de marge avec le champ dédié.
- Des machines qui reviennent au clip 2 → `absolutely no programmed drums, everything played by hand` (+57)
- Clave abandonnée → `the clave pattern never stops, in every section` (+46)
- La salle ne mène pas le refrain → `the crowd sings the hook first, the singer answers` (+50)
- Relais qui s'entend comme une coupe → `same tempo and same key as before, no transition` (+48)
- Percussions trop propres → `live room, audible hands and breath` (+35)
