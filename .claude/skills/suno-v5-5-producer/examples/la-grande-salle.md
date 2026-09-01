# « La Grande Salle » — démonstration de puissance maximale, 100 BPM, 2 clips

Morceau-étalon du dossier. Objectif : utiliser **tout** ce que l'outil sait
faire, sur un seul disque, sans qu'un seul tag en contredise un autre.

| Champ | Clip 1 | Clip 2 |
|---|---|---|
| Style | **967 / 1000** — marge 33 | **907 / 1000** — marge 93 |
| Bloc d'exclusion | 145 caractères, **champ dédié obligatoire** | idem |
| Paroles | **4592 / 5000** | **1832 / 5000** |
| Ratio hook / couplets | **0,98** | **2,91** |

---

## 🧪 ANALYSE DU MIX

**La puissance maximale n'est pas la densité maximale.** C'est le budget rempli
**sans une seule contradiction**. La plupart des prompts « surpuissants »
échouent parce qu'ils empilent des gestes qui se battent : un `no autotune` sous
des harmonies empilées, un `no low-quality recording` sous du crépitement de
vinyle, deux écoles de batterie sur la même couche. Ici chaque clause a été
vérifiée contre toutes les autres.

**Ce morceau ne peut pas fonctionner en mode repli, et c'est la démonstration.**
967 + 145 + 10 = 1122. **Il n'existe aucune version de ce prompt qui tienne avec
le bloc d'exclusion recollé.** Le champ dédié *Exclude Styles* n'est plus une
commodité ici : il est la condition d'existence du morceau. C'est la mesure la
plus nette de ce que vaut le format en cinq sections.

**Dix-sept dispositifs du dossier, tous actifs, tous compatibles.**

| Dispositif | Où | Référence |
|---|---|---|
| Ouverture Prestige (tuner, crépitement, voix-off) | Intro | `structure-tags.md` |
| Persistance = scratch employé comme riff, pas comme solo | Partout | `dmc-scratch-lexicon.md` |
| Persistance qui survit à **toutes** les ruptures | Y compris le pont nu | `spatialization-and-persistence.md` |
| Squelette syllabique constant, 4 × 8 | Refrain | `structure-tags.md` |
| Longueur de vers variable | Couplets | `plume-et-flow.md` |
| Un tag de débit par section, trois débits différents | V1 / V2 / V3 | `plume-et-flow.md` |
| Rimes riches placées sur le même temps | Couplets | `plume-et-flow.md` |
| Silence écrit = qui joue tout seul | `(la basse fretless seule, deux temps)` | `structure-tags.md` |
| Instrument qui répond à la place de la voix | Trompette, pont | `structure-tags.md` |
| Refrain entièrement scratché | DMC Routine | `dmc-scratch-lexicon.md` |
| Réponse de groupe calibrée au tempo | 4 syllabes à 100 BPM | `structure-tags.md` |
| Bloc d'exclusion sans contradiction | Section 3 | `negative-prompting.md` |
| Scission en deux clips au-delà de 3 min | Clip 1 / clip 2 | `field-limits.md` |
| Une seule variable change entre les clips | La tonalité | `spatialization-and-persistence.md` |
| Vide harmonique à la jointure | Riser sans hauteur | `spatialization-and-persistence.md` |
| Tonalité déclarée en absolu, jamais « un ton plus haut » | `in G sharp minor` | `field-limits.md` |
| Le clip 2 ouvre sur la rupture, pas sur un couplet | Le riser qui atterrit | `SKILL.md` |

**La modulation, faite dans les règles.** Fa dièse mineur → Sol dièse mineur, un
ton. Trois conditions, toutes remplies :

1. **Elle est la seule variable.** Même genre, même tempo, même rythmique, même
   persistance, même texte de refrain. Rien d'autre ne bouge — sinon l'oreille
   entend un autre morceau, pas une montée.
2. **La tonalité est déclarée en absolu** — `in G sharp minor`. Suno n'a pas
   entendu le clip 1 : « un ton au-dessus » est un mot mort.
3. **La jointure est un vide harmonique.** Un riser de bruit blanc n'a **aucune
   hauteur** : il ne peut donc pas contredire la nouvelle tonique. Un riser
   accordé, lui, annoncerait l'ancienne.

**Deux clips, deux ratios — et c'est voulu.** 0,98 sur le clip 1, 2,91 sur le
clip 2. Le premier porte l'histoire (trois couplets longs, registre narratif) ;
le second est du hook pur (fenêtre club). **Mesurer les deux ensemble donnerait
1,30, un chiffre qui ne décrit ni l'un ni l'autre.** Sur un morceau en deux
clips, le ratio se mesure clip par clip : ce sont deux disques dans une même
enveloppe, et ils n'ont pas le même métier.

**Le pont est le seul endroit sans batterie du morceau**, et c'est là que le
scratch persistant prouve son utilité : `present in every section, even the bare
bridge`. C'est lui qui empêche le pont de sonner comme un autre morceau. La
trompette bouchée y répond à la place de la voix — la phrase qui manque est
jouée, pas dite.

**Le couplet 3 monte, et le style le dit.** `Rising intensity, faster and louder
across the verse` : un seul tag de débit, en tête du crochet. Il fallait un
troisième régime après le récit et la technique, sinon le morceau arrivait plat
au dernier refrain.

---

## 🎛️ STYLE PROMPT — CLIP 1 — 967 / 1000 caractères

```
Golden Era French rap anthem, triumphant, 100 BPM, in F sharp minor. Hard-hitting MPC-60 kick and snare, dusty sampler grit, tight closed hats with double-time rolls into the chorus, layered claps on the backbeat, deep vinyl crackle throughout. Persistent scratched vocal stab motif throughout, used as the hook riff, not as a solo, present in every section, even the bare bridge. Dark melancholic piano loop, deep melodic jazz-fusion bass with fretless slides, minor-key strings, dark brass stabs, muted trumpet answer, gospel choir on the last chorus. Male lead, high tenor, articulate rap delivery with clear diction, fully sung and soaring on the chorus, lush stacked tenor harmonies, huge panoramic group vocal responses. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. Transformer cuts, crab scratches, backspin rewind. Ultra-wide stereo field, lead centred and dry. Warm cinematic master, deep low end, preserved dynamics.
```

## 🎛️ STYLE PROMPT — CLIP 2 — 907 / 1000 caractères

Dérivé du clip 1 : même genre, même tempo, même rythmique, même persistance.
Trois changements seulement, et ils disent tous la même chose — **c'est le
même morceau, un ton plus haut, à la fin du concert** : `in G sharp minor`,
`at the very top of his range`, `live crowd singing along`.

```
Golden Era French rap anthem, triumphant, 100 BPM, in G sharp minor. Hard-hitting MPC-60 kick and snare, dusty sampler grit, tight closed hats with double-time rolls, layered claps on the backbeat, deep vinyl crackle throughout. Persistent scratched vocal stab motif throughout, used as the hook riff, not as a solo, present in every section. Dark melancholic piano loop, deep melodic jazz-fusion bass with fretless slides, minor-key strings, dark brass stabs, full gospel choir on every chorus. Male lead, high tenor, fully sung and soaring, at the very top of his range, lush stacked tenor harmonies, huge panoramic group vocal responses, live crowd singing along. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. Transformer cuts, crab scratches, backspin rewind. Ultra-wide stereo field, lead centred and dry. Warm cinematic master, deep low end, preserved dynamics.
```

---

## 🚫 BLOC D'EXCLUSION — 145 caractères — CHAMP DÉDIÉ OBLIGATOIRE

967 + 145 + 10 = **1122**. Il n'existe aucune version de ce prompt qui tienne en
mode repli. Ce bloc **doit** aller dans *Exclude Styles*.

```
no mumble rap, no trap drums, no distorted vocals, no generic EDM, no big-room EDM drop, avoid messy mix, no cluttered low end, avoid thin sounds
```

Vérifié clause par clause contre le champ positif : `no low-quality recording`
est absent (le style demande `deep vinyl crackle`), `no autotune` est absent
(harmonies de ténors empilées), `no trap drums` est présent sans risque (aucune
808, aucun charley trap demandé).

---

## 📝 SCRIPT & PAROLES — CLIP 1 — 4592 / 5000 caractères

```
[Intro: Radio tuner sweep, deep vinyl crackle, piano loop, no drums, voice-over]
(Instruction: Persistent scratched vocal stab motif throughout, used as the hook riff)
(voix-off, chaude, compressée comme une radio AM)
Prestige Old School Podcast.
Ce soir, on raconte celle-là.
(scratch) (De-de-de-bout !)

[Verse 1: Unhurried storytelling delivery, MPC drums entering, piano and bass]
Deux mille six, une salle de trente, on était huit sur scène,
Le patron nous payait en sandwichs et en promesses.
J'ai porté mon ampli dans le RER pendant six ans,
Personne m'a vu — et c'est très bien, personne devait me voir.
(la basse fretless seule, deux temps)
On répétait dans un local qui sentait la peinture,
Le voisin tapait au mur, on baissait d'un cran, on continuait.
Y'a pas de conte de fées là-dedans, y'a des mardis soirs,
Et c'est le mardi soir que tout se décide vraiment.

[Pre-Chorus: Strings entering, hats rolling double-time, claps stacking]
Vingt ans que je prépare ce soir,
Sans jamais le dire à personne.
Ouvre le rideau. Doucement.
Regarde —

[Chorus: Fully sung high tenor, soaring, lush stacked harmonies, drums full]
Regarde bien la grande salle,
Y'a plus un seul siège de libre,
Ils sont venus, ils sont debout,
Regarde bien la grande salle.

[Post-Chorus: Scratched stab as the riff, group responses, brass stabs, full]
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]
(scratch) (De-de-de-bout !)
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]

[Verse 2: Staccato technical flow, hard consonant attack, bass forward, strings]
Ils ont dit trop vieux, trop tôt, trop tard, trop niche, trop lent,
J'ai gardé chaque phrase, je les récite pas, je les entends.
Le talent, c'est une porte ; le travail, c'est le couloir,
Et personne parle du couloir parce qu'il est long et qu'il est noir.
J'ai raté trois trains, deux contrats, une femme et un dimanche,
J'ai jamais raté un studio, pas un seul, pas une fois.
(la basse fretless seule, deux temps)
Aujourd'hui les mêmes bouches disent qu'ils l'avaient toujours senti —
Tant mieux. Qu'ils le sentent. Moi j'ai la salle, et j'ai la nuit.

[Pre-Chorus: Strings higher, brass entering, snare rolls, harmonies stacking]
Vingt ans que je prépare ce soir,
Sans jamais le dire à personne.
Ouvre le rideau. Doucement.
Regarde —

[Chorus: Same hook, harmonies wider, brass doubling, drums full]
Regarde bien la grande salle,
Y'a plus un seul siège de libre,
Ils sont venus, ils sont debout,
Regarde bien la grande salle.

[Post-Chorus: Scratched stab as the riff, group responses, brass stabs, full]
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]
(scratch) (De-de-de-bout !)
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]

[DMC Routine: Drums and scratch only, no melody, transformer cuts, crab scratches]
(tout est coupé sauf la batterie et les platines)
Re-re-re-garde (scratché)
La gran-gran-grande salle (scratché)
De-de-de-bout (scratché)
(backspin rewind, la salle crie)

[Bridge: Piano alone, tenor bare, no reverb, drums out, muted trumpet answering]
(voix nue, sans double, sans réverbération)
Ma mère est au deuxième rang.
Elle a jamais compris ce que je faisais.
(la trompette bouchée répond à sa place, quatre temps)
Ce soir elle comprend. C'est tout ce que je voulais.
[Silence: one bar, one scratched stab alone, drums return whole]

[Verse 3: Rising intensity, faster and louder across the verse, everything full]
Alors on remet le disque, on remet la platine, on remet le son,
On remet vingt ans dans quatre minutes et personne bouge du fond.
J'ai plus rien à prouver mais j'ai tout à donner,
Et c'est pas la même chose — la première fatigue, la deuxième porte.
Regardez bien les visages, pas les miens : les leurs.
C'est eux qui font la salle, moi j'ai juste ouvert la porte.
Alors quand je dis la grande salle, je parle pas du bâtiment,
Je parle de tout le monde debout dedans, en même temps.

[Chorus: All harmonies, gospel choir entering, strings maximum, drums full]
Regarde bien la grande salle,
Y'a plus un seul siège de libre,
Ils sont venus, ils sont debout,
Regarde bien la grande salle.

[Post-Chorus: Whole room, scratched stab everywhere, brass and choir, full]
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]
(scratch) (De-de-de-bout !)
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]
(scratch) (De-de-de-bout !)

[End of Clip One: Everything drops to a white noise riser, no pitch, no chord]
(vide harmonique : le riser n'a aucune note, rien n'annonce la suite)
```

## 📝 SCRIPT & PAROLES — CLIP 2 — 1832 / 5000 caractères

```
[Intro: The white noise riser lands, everything enters at once in G sharp minor]
(Instruction: Persistent scratched vocal stab motif throughout, used as the hook riff)
(tout entre d'un bloc sur le premier temps, un ton au-dessus)
(scratch) (De-de-de-bout !)

[Chorus: Fully sung high tenor at the top of his range, full gospel choir, full]
Regarde bien la grande salle,
Y'a plus un seul siège de libre,
Ils sont venus, ils sont debout,
Regarde bien la grande salle.

[Post-Chorus: Scratched stab as the riff, huge group responses, brass, crowd]
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]
(scratch) (De-de-de-bout !)
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]

[Verse: Half-sung, half-spoken, drums thinning, choir humming underneath]
J'avais préparé une phrase pour ce moment-là,
Je l'ai oubliée en montant les trois marches.
Tant pis. Y'a rien à dire de plus que ce qu'ils chantent.
(la trompette bouchée répond à sa place, quatre temps)
Alors chantez-le encore une fois — plus haut que tout à l'heure.

[Chorus: Whole room singing, tenor above the crowd, choir maximum, drums full]
Regarde bien la grande salle,
Y'a plus un seul siège de libre,
Ils sont venus, ils sont debout,
Regarde bien la grande salle.

[Post-Chorus: Everyone, scratched stab everywhere, brass doubled, crowd loud]
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]
(scratch) (De-de-de-bout !)
(Call: Regarde bien) Response: [Panoramic Group Vocals: La grande salle]
(scratch) (De-de-de-bout !)
(la salle chante seule, sans la voix lead, quatre mesures)

[Outro: Drums out, piano loop and vinyl crackle, voice-over, hard stop]
(voix-off, chaude, compressée comme une radio AM)
Prestige Old School Podcast.
Celle-là, on la racontera longtemps.
(dernier scratch, sec)
(De-bout.)
```

---

## 🎹 NOTES DE STUDIO

**BPM — 100.** Le tempo qui permet tout : assez lent pour que le scratch se lise
note à note, assez soutenu pour qu'un refrain chanté porte une salle. C'est aussi
le seul endroit du dossier où les platines et un chœur gospel peuvent cohabiter
sans que l'un mange l'autre.

**Tonalité — Fa dièse mineur, puis Sol dièse mineur.** Boucle de piano sur quatre
mesures, main gauche en octaves. Les cordes n'entrent qu'au pré-refrain, les
cuivres qu'au deuxième, le chœur qu'au troisième : **une couche neuve par cycle**.
C'est ce qui donne au morceau l'impression de grandir sans qu'un seul élément
change de volume.

**Delivery — trois régimes, un par couplet.** Récit posé, puis technique et dur,
puis en montée. Refrain **entièrement chanté**, ténor haut, doublé et harmonisé.
Sur le clip 2, le ténor est au sommet de sa tessiture : la montée d'un ton doit
s'entendre comme un effort, pas comme un transposeur.

**Le scratch, techniquement.** `(De-de-de-bout !)` est un stab de deux syllabes
coupé en trois par le crossfader — c'est un **riff**, pas une routine. Il revient
à chaque post-refrain, il traverse le pont nu, il ferme le clip 2. La seule
routine complète du morceau est la `[DMC Routine]`, où tout est coupé sauf la
batterie et les platines, avec `(scratché)` sur **chaque** ligne — sans quoi le
modèle chante le texte au lieu de le couper.

**Le pont.** Batterie coupée, piano seul, voix nue et sèche. La trompette bouchée
répond quatre temps après « Elle a jamais compris ce que je faisais ». Une mesure
de silence tenue par un seul stab scratché, puis la batterie revient **entière**,
pas progressivement.

**La jointure entre les clips.** Le clip 1 se termine sur un riser de bruit blanc
sans hauteur ; le clip 2 s'ouvre sur son atterrissage, tout entrant d'un bloc sur
le premier temps. Aucun accord, aucune note ne relie les deux — c'est ce vide qui
rend la modulation indolore.

**Placement stéréo.** Ténor lead au centre, sec, en avant. Harmonies à ±60 %.
Scratch en ping-pong rapide, jamais au centre — c'est lui qui donne le mouvement
latéral. Piano à gauche, trompette bouchée à droite. Cuivres larges, chœur gospel
le plus large et le plus réverbéré de tout le morceau. Kick, caisse claire et
basse au centre, mono.

**Leviers de re-génération.** 33 caractères de marge sur le clip 1 : c'est
délibérément peu. **Un morceau à puissance maximale n'a plus de levier** — c'est
le prix. Pour en récupérer, retirer dans cet ordre : `gospel choir on the last
chorus` (-31), `backspin rewind` (-17), `dusty sampler grit` (-20). Ne jamais
toucher à la ligne de persistance ni à la phrase de batterie.
