# « Dis-Moi » — Darkchild × plume Ninho, 105 BPM

Le brief demandait « super mélodie » et « hook entraînant ». Ce sont deux
demandes différentes : la première est harmonique, la seconde est **métrique**.
Ce morceau documente la seconde, et elle se mesure.

| Champ | Mesure |
|---|---|
| Style seul (bloc dans *Exclude Styles*) | **801 / 1000** — marge 199 |
| Style + bloc recollé (mode repli) | **935 / 1000** — marge 65 |
| Paroles | **3539 / 5000** — marge 1461 |

Ratio hook / couplets : **1,94** — 1814 caractères de hook contre 936 de
couplets, huit sections contre deux.

---

## 🧪 ANALYSE DU MIX

**Les deux ADN ne se disputent rien.** Darkchild tient la production, la plume
Ninho tient la voix — pas un seul recouvrement, donc pas de répartition par
couches à arbitrer comme sur `je-te-le-dis-une-fois.md`. C'est le cas facile, et
il vaut la peine d'être noté : quand une école est instrumentale et l'autre
vocale, on empile sans précaution.

| Couche | École |
|---|---|
| Programmation rythmique | **Darkchild** — batterie qui bégaie, percussions hors grille |
| Ornement | **Darkchild** — stabs de cordes staccato, arpège étouffé, chops gatés |
| Ligne lead | **Ninho** — ténor mélodique, chanté-rappé, queues d'ad-libs |
| Harmonies | **Darkchild** — empilement hyper-traité derrière le lead nu |

**Un refrain entraînant est un refrain dont on prédit la forme après la
première ligne.** C'est la thèse technique du morceau, et elle se vérifie en
comptant. Les quatre lignes du refrain font **8 syllabes chantées chacune** :

```
Dis-moi si t'as le temps ce soir,     8
Dis-moi si t'as le cœur qui suit,     8
Moi j'ai plus rien à te prouver,      8
J'ai juste envie d'être avec toi.     8
```

Même squelette syllabique, donc même rythme mélodique sur les quatre lignes,
donc une seule phrase de quatre mesures que l'auditeur a apprise avant la fin du
premier refrain. La forme est A A′ B B′ : les deux premières lignes ouvrent à
l'identique (`Dis-moi si t'as le…`), les deux dernières répondent. C'est de la
métrique, pas de l'inspiration — et c'est ce qui distingue un refrain
« entraînant » d'un refrain simplement joli.

**L'instruction correspondante est dans le champ de style**, parce que Suno ne
compte pas les syllabes tout seul :

```
The chorus melody is one four-bar phrase repeated with the same rhythm on every line.
```

Sans cette ligne, le modèle écrit volontiers quatre mélodies différentes sur un
texte pourtant régulier, et le refrain cesse d'être prévisible.

**Pas de Call & Response dans le refrain.** Un hook chanté mélodique n'en a pas
besoin — la réponse de groupe couperait la phrase de quatre mesures en deux et
détruirait exactement ce qu'on vient de construire. Le Call & Response est
reporté sur le **post-refrain**, où il ne gêne rien :
`(Call: Dis-moi) Response: [Panoramic Group Vocals: Dis-moi]`. Deux syllabes de
réponse, ce qui est la bonne longueur à 105 BPM quand l'appel tombe sur la
moitié de mesure.

**Une négation est restée dans le champ positif, volontairement.**
`no four-on-the-floor` est écrit **dans la phrase de batterie**, pas dans le
bloc d'exclusion. Raison : à 105 BPM avec `danceable` et `club`, Suno va
chercher un kick house, et ce kick effacerait le bégaiement — c'est-à-dire tout
l'ADN Darkchild. La négation doit être **collée à la couche qu'elle qualifie**.
Mise dans le bloc, elle s'appliquerait globalement et menacerait aussi la grille
de claps, qui, elle, tombe bien sur les quatre temps.

**Le pont est un geste que le dossier n'avait pas encore.** Sur
`je-te-le-dis-une-fois.md`, la batterie se désagrégeait. Ici elle disparaît net
et **les chops gatés chantent le refrain à la place du chanteur** :
`gated chops carry the chorus melody alone, no lead vocal`. C'est la preuve que
la mélodie tient seule — on l'a assez répétée pour que l'auditeur la complète
sans voix. Un refrain qui ne survit pas à ce test n'est pas entraînant.

---

## 🎛️ STYLE PROMPT — 801 / 1000 caractères

```
French melodic R&B banger, danceable and glossy, 105 BPM. Stuttering syncopated drum programming, jerky off-grid percussion hits, crisp offbeat hats, layered claps, gated vocal chops used as percussion, no four-on-the-floor. Persistent staccato string stab motif throughout. Warm Rhodes chords, round analog bassline with portamento glides, tight muted synth arpeggio, orchestral hit accents. Male tenor lead, melodic rap-singing, catchy sung hook, sweet and direct delivery, melodic ad-lib tails, lush stacked harmonies, hyper-processed backing vocals, panoramic group vocal responses on the post-chorus. The chorus melody is one four-bar phrase repeated with the same rhythm on every line. Ultra-wide stereo field, panoramic vocal layering. Polished radio master, tight round low end, club loudness.
```

---

## 🚫 BLOC D'EXCLUSION — 123 caractères

À coller dans le champ **Exclude Styles**. En mode repli, l'ajouter en fin de
champ de style précédé de `Exclude: ` — le total monte alors à 935 / 1000, soit
65 de marge : encore jouable, mais plus de quoi renforcer un seul levier.

```
no mumble rap, no trap drums, no distorted vocals, no generic EDM, avoid messy mix, no cluttered low end, avoid thin sounds
```

`no autotune` est **absent volontairement** : le morceau repose sur des
harmonies empilées et des ad-libs traités. `no trap drums` est présent malgré la
référence Ninho — les charleys trap détruiraient la programmation saccadée, et
c'est la production qui décide de la batterie, pas la plume.

---

## 📝 SCRIPT & PAROLES — 3539 / 5000 caractères

```
[Intro: String stab motif and gated chops, no drums, spoken low, close-mic]
(Instruction: Persistent staccato string stab motif throughout)
(parlé, bas, presque murmuré, sourire dans la voix)
Vingt-deux heures.
J'ai une question, une seule.

[Verse 1: Male tenor, melodic rap-singing, stuttering drums, Rhodes and chops]
J'ai regardé ton nom s'afficher trois fois,
J'ai laissé sonner, j'ai rappelé après.
On fait les grands, on gère, on dit que ça va,
Mais j'ai vu l'heure à laquelle t'as répondu.
Toi t'as ta vie, tes horaires, tes silences,
Moi j'ai la mienne et pas grand-chose à raconter.
J'ai fait le tour de ce que je voulais prouver,
Et y'a que toi qui m'appelles par mon prénom.

[Pre-Chorus: Strings rising, chops doubled, claps stacking, harmonies entering]
J'ai pas de plan, j'ai pas de phrase,
J'ai pas répété devant la glace.
Je pose la question et je me tais,
Trois, deux, un —

[Chorus: Sung hook, same rhythm on every line, lush stacked harmonies, full]
Dis-moi si t'as le temps ce soir,
Dis-moi si t'as le cœur qui suit,
Moi j'ai plus rien à te prouver,
J'ai juste envie d'être avec toi.

[Post-Chorus: Group responses, gated chops as percussion, string stab, claps]
(Call: Dis-moi) Response: [Panoramic Group Vocals: Dis-moi]
(Call: Dis-moi si t'as le temps) Response: [Panoramic Group Vocals: Dis-moi]

[Verse 2: Same tenor, freer and higher, bass forward, arpeggio answering]
On s'est connus quand j'avais rien dans les poches,
T'as rien demandé, t'as juste dit vas-y, monte.
Aujourd'hui j'ai de quoi payer les deux additions,
Et je préfère encore celles qu'on partageait à deux.
J'ai des gens autour qui savent ce qu'ils veulent de moi,
Toi t'as jamais rien voulu, c'est pour ça que t'es là.
Alors quand je demande si t'as le temps ce soir,
C'est pas une question — c'est la seule que je pose.

[Pre-Chorus: Strings higher, chops tripled, snare stutter, harmonies stacking]
J'ai pas de plan, j'ai pas de phrase,
J'ai pas répété devant la glace.
Je pose la question et je me tais,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, ad-lib tails, string stabs doubled]
Dis-moi si t'as le temps ce soir,
Dis-moi si t'as le cœur qui suit,
Moi j'ai plus rien à te prouver,
J'ai juste envie d'être avec toi.

[Post-Chorus: Group responses, gated chops as percussion, string stab, claps]
(Call: Dis-moi) Response: [Panoramic Group Vocals: Dis-moi]
(Call: Dis-moi si t'as le temps) Response: [Panoramic Group Vocals: Dis-moi]

[Bridge: Drums out, gated chops carry the chorus melody alone, no lead vocal]
(les chops chantent le refrain à la place de la voix, batterie coupée)
(Dis-moi... dis-moi... dis-moi si t'as le temps...)
(voix lead seule, nue, sans double, sans réverbération)
Réponds pas tout de suite. Prends la nuit.
[Silence: one bar, one string stab, drums return whole]

[Final Chorus: All harmonies, widest field, tenor up a tone, strings maximum]
Dis-moi si t'as le temps ce soir,
Dis-moi si t'as le cœur qui suit,
Moi j'ai plus rien à te prouver,
J'ai juste envie d'être avec toi.

[Post-Chorus: Whole room, chops everywhere, double-time claps, stabs doubled]
(Call: Dis-moi) Response: [Panoramic Group Vocals: Dis-moi]
(Call: Dis-moi si t'as le temps) Response: [Panoramic Group Vocals: Dis-moi]
(Call: Dis-moi) Response: [Panoramic Group Vocals: Dis-moi]
(Call: Dis-moi si t'as le temps) Response: [Panoramic Group Vocals: Dis-moi]

[Outro: Drums out, string stab and Rhodes, spoken warm, no reverb, hard stop]
(parlé, doux, en souriant)
Elle a répondu à six heures du matin.
Elle a dit oui. Évidemment.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 105.** Le point où un R&B devient dansant sans devenir un club track.
Assez haut pour que les claps portent, assez bas pour que le ténor puisse
chanter des phrases entières sans hacher. Sous 100 le morceau redevient une
ballade ; au-dessus de 112 le squelette de 8 syllabes ne rentre plus dans quatre
mesures sans être précipité.

**Tonalité — La bémol majeur.** Majeur assumé : c'est une demande, pas une
plainte. Rhodes en accords larges, basse ronde avec glissandos. Le stab de
cordes joue **trois notes**, toujours sur le même contretemps — sa régularité
est ce qui autorise la batterie à être irrégulière autour.

**Delivery — chanté-rappé, jamais crié.** Couplets proches du micro, débit
mélodique mais articulé, les fins de ligne qui remontent. Refrain **pleinement
chanté** et doublé : c'est le seul endroit du morceau où la voix quitte le
registre parlé. Les queues d'ad-libs après chaque ligne de refrain, jamais
pendant — elles remplissent la mesure, elles ne recouvrent pas la mélodie.

**Le refrain est identique à l'écrit** aux trois passages. La seule variation
est l'ouverture des harmonies et, au dernier, le ténor **un ton au-dessus**.

**Placement stéréo.** Lead au centre, sec. Harmonies ouvertes à ±60 pour cent.
Chops gatés en ping-pong rapide — ce sont eux qui donnent le mouvement latéral
pendant que la batterie bégaie. Rhodes légèrement à gauche, arpège étouffé à
droite. Kick, caisse claire et basse au centre, mono. Réponses de groupe du
post-refrain **tout ouvert**, plus large que les harmonies du refrain, pour que
le post-refrain se lise comme une pièce plus grande.

**Ratio hook / couplets — 1,94.** Entre le R&B narratif (1,60 sur
`je-te-le-dis-une-fois`) et le club pur (2,2–2,9). C'est la fenêtre du banger
mélodique : le hook domine largement, mais deux couplets de huit lignes tiennent
encore un propos. Les huit sections de hook viennent d'un bloc pré-refrain +
refrain + post-refrain répété trois fois, pas d'un refrain rallongé.

**Leviers de re-génération.** 199 caractères de marge si le bloc part dans
*Exclude Styles*, 65 seulement en mode repli.
- Refrain pas assez régulier → `every chorus line has the same syllable count and the same melodic rhythm` (+74). **Ne rentre qu'avec le champ dédié.**
- Batterie qui se redresse → `drums always stutter, never a straight pattern` (+45).
- Chops gatés absents → `gated vocal chops high in the mix, ping-pong panned` (+50).
- Post-refrain trop timide → `huge panoramic group vocal responses` (+36).
- Voix trop rappée → `sung hook, fully melodic, not rapped` (+35).
- Manque de brillance club → `bright glossy top end` (+21).
