# « Je Te Le Dis Une Fois » — Darkchild × Djimi Finger, 96 BPM

Deux écoles de 1998 qui ne se sont jamais croisées : la programmation saccadée
du New Jersey et l'architecture Golden Era. Premier morceau du dossier au
**format cinq sections**, avec le bloc d'exclusion séparé.

| Champ | Mesure |
|---|---|
| Style seul (bloc dans *Exclude Styles*) | **807 / 1000** — marge 193 |
| Style + bloc recollé (mode repli) | **941 / 1000** — marge 59 |
| Paroles | **3545 / 5000** — marge 1455 |

Ratio hook / couplets : **1,60** — huit sections de hook sur quatorze.

---

## 🧪 ANALYSE DU MIX

**Deux ADN ne fusionnent proprement que s'ils occupent des couches
différentes.** La règle du dossier disait jusqu'ici : « un ADN mène, les autres
décorent ». Elle est trop faible pour ce cas — Darkchild et Djimi Finger sont
tous les deux des écoles **rythmiques et harmoniques**, et les empiler telles
quelles donne exactement la bouillie que la règle voulait éviter.

La sortie est une répartition explicite :

| Couche | École qui la tient |
|---|---|
| Programmation rythmique | **Darkchild** — batterie qui bégaie, percussions hors grille, chops gatés |
| Timbre de la batterie | **Djimi Finger** — MPC-60 |
| Matériau harmonique | **Djimi Finger** — piano sombre, cordes mineures, basse fretless |
| Ornement mélodique | **Darkchild** — stabs de cordes staccato, arpège de synthé étouffé |

**Le conflit se règle en une ligne.** Les deux écoles veulent la batterie :
l'une la veut saccadée, l'autre dure et droite. `MPC-60 kick and snare
programmed in a stuttering off-grid pattern` tranche — **le son vient de 1993,
le placement de 1999**. Même construction que sur `face-b.md`
(`sampled MPC-60 kick and snare on a house grid`) : un seul geste qui contient
les deux dates, plutôt que deux tags qui se disputent la même couche.

**La persistance était forcée, et c'est le bon signe.** L'élément persistant doit
survivre à toutes les ruptures et appartenir aux deux mondes. Le **stab de
cordes staccato** est le seul candidat : pitché, donc il porte l'harmonie
(Golden Era) ; percussif et court, donc il vit dans la grille (Darkchild). Quand
un motif appartient aux deux ADN à la fois, c'est lui qui doit persister — il
fait la jointure sans qu'on ait à l'expliquer.

**Le pont est un geste Darkchild pur.** `Drums stutter out` : la batterie ne
s'arrête pas, elle **bégaie jusqu'à l'arrêt** — un ou deux fragments de moins à
chaque temps. C'est la signature de cette école, et c'est aussi la seule rupture
que le dossier n'avait pas encore utilisée : ni coupure nette, ni half-time, ni
changement d'instrumentation. Une batterie qui se désagrège.

**Sur la voix, j'ai retiré un tag que j'allais mettre.** J'avais écrit
`no autotune on the lead` dans les exclusions. La table de conflits de
`references/negative-prompting.md` interdit `no autotune` en présence de
`lush stacked harmonies` — et croire qu'un « on the lead » suffit à scoper la
négation est un pari sur la lecture du modèle. Retiré, remplacé par
`no distorted vocals`. Suivre sa propre table vaut mieux que la contourner
finement.

**Ce que le format en cinq sections change, chiffré.** Le bloc d'exclusion pèse
123 caractères. Placé dans le champ dédié *Exclude Styles*, il libère ces 123
caractères pour du positif : le style respire à 807 avec 193 de marge. Recollé
en fin de prompt, on tombe à 941 avec 59 — jouable, mais plus de place pour
renforcer quoi que ce soit. **C'est la valeur du champ dédié, mesurée sur un
morceau réel.**

---

## 🎛️ STYLE PROMPT — 807 / 1000 caractères

```
French R&B built on Golden Era foundations, 96 BPM. MPC-60 kick and snare programmed in a stuttering off-grid pattern, jerky syncopated percussion hits, tight closed hats, layered claps, gated vocal chops used as percussion. Persistent staccato string stab motif throughout. Dark melancholic piano loop, deep melodic jazz-fusion bass with fretless slides, cinematic minor-key strings, muted trumpet answer, tight muted synth arpeggio, vinyl crackle. Female lead, warm alto, conversational close-mic delivery on the verses, full and doubled on the chorus, complex vocal runs on the line ends only, lush stacked harmonies, hyper-processed backing vocals. Ultra-wide stereo field, panoramic vocal layering, 3D surround mix. Polished cinematic master, punchy compression, deep tight low end, preserved dynamics.
```

---

## 🚫 BLOC D'EXCLUSION — 123 caractères

À coller dans le champ **Exclude Styles**. En mode repli, l'ajouter en fin de
champ de style précédé de `Exclude: ` — le total monte alors à 941 / 1000.

```
no mumble rap, no trap drums, no distorted vocals, no generic EDM, avoid messy mix, no cluttered low end, avoid thin sounds
```

`no low-quality recording` est **absent volontairement** : le style demande
`vinyl crackle`. `no autotune` est absent aussi, parce que le morceau repose sur
des harmonies empilées.

---

## 📝 SCRIPT & PAROLES — 3545 / 5000 caractères

```
[Intro: Piano loop and vinyl crackle, one string stab, no drums, spoken close]
(Instruction: Persistent staccato string stab motif throughout)
(parlé, bas, ton de conversation, très proche du micro)
On a commandé un deuxième thé.
Et là j'ai décidé de le dire.

[Verse 1: Warm alto, conversational close-mic, stuttering drums, piano only]
On s'est vues mardi, t'avais mis du fond de teint sur rien,
Et t'as ri deux fois trop fort à un truc pas drôle.
J'ai rien dit sur le moment, j'ai commandé un deuxième thé,
Parce que j'ai appris qu'on écoute mieux quand on n'a pas d'avis.
Mais y'a un truc dans ta phrase, il est fatigué en ce moment,
Que t'as répétée trois fois sans que je te demande rien.
Je connais ce ton-là, je l'ai eu pendant deux ans,
Et personne me l'a dit, et j'aurais aimé qu'on me le dise.

[Pre-Chorus: Strings rising, gated chops entering, claps stacking, harmonies]
Alors je vais le faire, une fois, proprement,
Sans détour, sans conseil, sans moi à ta place.
Et après je change de sujet, promis,
Trois, deux, un —

[Chorus: Full and doubled, lush stacked harmonies, string stabs, drums full]
Je te le dis une fois, après je me tais,
T'as le droit de rester, t'as le droit de partir.
Je te le dis une fois, tu feras ce que tu veux,
Mais je voulais que quelqu'un te l'ait dit au moins une fois.

[Post-Chorus: Gated vocal chops as percussion, string stab, bass and claps]
(U-ne-fois... u-ne-fois...)
(Après je me tais, oh !)

[Verse 2: Same alto, freer phrasing, fretless bass forward, trumpet answering]
T'as changé trois trucs cette année pour que ça tienne,
Ta coiffure, ton boulot, et l'heure à laquelle tu rentres.
Lui il a rien changé, il a même pas eu à demander,
C'est ça qui me dérange, pas les mots, l'arithmétique.
Je dis pas qu'il est mauvais, je dis qu'il est confortable,
Et qu'être confortable, ça se fait toujours sur quelqu'un.
Tu vaux plus qu'un dimanche à attendre un message,
Et si tu le sais déjà, alors j'ai rien dit — et tant mieux.

[Pre-Chorus: Strings higher, chops doubled, harmonies stacking, snare stutter]
Alors je vais le faire, une fois, proprement,
Sans détour, sans conseil, sans moi à ta place.
Et après je change de sujet, promis,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, runs on the line ends, stabs doubled]
Je te le dis une fois, après je me tais,
T'as le droit de rester, t'as le droit de partir.
Je te le dis une fois, tu feras ce que tu veux,
Mais je voulais que quelqu'un te l'ait dit au moins une fois.

[Post-Chorus: Gated vocal chops as percussion, string stab, bass and claps]
(U-ne-fois... u-ne-fois...)
(Après je me tais, oh !)

[Bridge: Drums stutter out, gated chops and one string only, voice bare]
(la batterie se hache et s'arrête, plus que les chops)
Je t'aime, c'est pour ça que c'est chiant à dire.
(voix nue, sans double, sans réverbération)
Si j'avais rien dit, ça aurait été plus facile — pour moi.
[Silence: one bar, one string stab, drums return whole]

[Final Chorus: All harmonies, widest field, strings maximum, drums full]
Je te le dis une fois, après je me tais,
T'as le droit de rester, t'as le droit de partir.
Je te le dis une fois, tu feras ce que tu veux,
Mais je voulais que quelqu'un te l'ait dit au moins une fois.

[Post-Chorus: Chops from everywhere, string stabs doubled, drums thinning]
(U-ne-fois... u-ne-fois...)
(Après je me tais, oh !)
(U-ne-fois... u-ne-fois...)
(Après je me tais, oh !)

[Outro: Drums out, piano and crackle, spoken warm, no reverb, hard stop]
(parlé, doux, ton de fin de conversation)
Bon.
Tu reprends du thé ?
```

---

## 🎹 NOTES DE STUDIO

**BPM — 96.** Le point de rencontre des deux écoles : assez lent pour que le
piano sombre garde son poids, assez haut pour que le bégaiement de la batterie
s'entende comme un groove et non comme une erreur. Sous 92, le stutter devient
laborieux ; au-dessus de 100, il se lit comme du drum'n'bass ralenti.

**Tonalité — Fa dièse mineur.** Boucle de piano sur quatre mesures, main gauche
en octaves. Le stab de cordes joue **deux notes seulement**, toujours sur le
même contretemps — c'est sa régularité qui permet à la batterie d'être
irrégulière autour. Un des deux doit tenir la grille.

**Delivery — la règle du morceau : c'est une conversation, pas une chanson.**
Couplets parlés-chantés, très proches du micro, au volume d'une table de café.
Refrain pleinement chanté et doublé, mais **sans monter en agressivité** — c'est
quelqu'un qui dit une chose difficile avec douceur, pas quelqu'un qui gagne une
dispute. Les runs uniquement sur les fins de ligne ; au milieu d'une phrase ils
transformeraient la franchise en performance.

**Le pont, techniquement.** `Drums stutter out` veut dire : sur quatre temps, la
batterie perd un fragment par temps jusqu'au silence. Ne pas la couper d'un coup
— la désagrégation est le geste. Puis une mesure de silence, un seul stab de
cordes, et la batterie revient **entière**, d'un bloc. Le contraste
désagrégation / retour intact est ce qui fait le pont.

**Placement stéréo.** Voix lead au centre, sèche. Harmonies empilées ouvertes à
±60 %, chops gatés en ping-pong rapide — ce sont eux qui donnent la sensation de
mouvement latéral quand la batterie bégaie. Piano légèrement à gauche, trompette
bouchée à droite en réponse. Kick, caisse claire et basse au centre, mono.

**Le refrain est identique à l'écrit** aux trois passages. La seule variation
est l'ouverture des harmonies.

**Ratio hook / couplets — 1,60.** Registre « équilibre » : le refrain se retient,
les couplets tiennent un propos. C'est la fenêtre attendue pour un R&B narratif —
et la structure vient du sujet, pas du prompt, puisque le champ de style ne
déclare aucune réponse de groupe.

**Leviers de re-génération.** Style à 193 caractères de marge si le bloc part
dans *Exclude Styles*, 59 seulement en mode repli.
- Batterie qui redevient droite → `drums always stutter, never a straight boom
  bap pattern` (+52). **Ne rentre que si le champ dédié est utilisé** — c'est
  l'exemple concret de ce que coûte le mode repli.
- Chops gatés absents → `gated vocal chops high in the mix, ping-pong panned`
  (+50).
- Stab de cordes trop discret → `staccato string stab on every offbeat` (+38).
- Voix trop chantée sur les couplets → `spoken-sung verses, café volume` (+32).
- Trop propre pour du Golden Era → `dusty sampler grit` (+20).
