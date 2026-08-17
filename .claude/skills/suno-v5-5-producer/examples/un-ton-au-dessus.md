# « Un Ton Au-Dessus » — club pop rapide sans raï, deux clips, modulation

Septième morceau long du dossier, septième raison de scinder : **le clip 2 est
le même morceau un ton plus haut**. La modulation ne se demande pas au milieu
d'une génération — elle se déclare, et pour la déclarer il faut un second prompt.

| Clip | Style | Paroles | Tonalité |
|---|---|---|---|
| Clip 1 | 916 / 1000 | 2936 / 5000 | La mineur |
| Clip 2 | 873 / 1000 | 1822 / 5000 | **Si mineur** |

Total paroles : **4758 / 10000**. Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **1,86** — douze sections de hook sur dix-neuf.

---

## 🧪 ANALYSE DU MIX

**Première fois du dossier que la tonalité entre dans le champ de style.**
Quarante-huit morceaux, quarante-huit fois la tonalité reléguée aux notes de
studio — parce qu'elle coûte des caractères et que Suno choisit très bien tout
seul. L'exception, c'est **la modulation** : si on veut que le clip 2 soit une
tierce, une seconde ou un demi-ton au-dessus, il faut le dire, et le seul
endroit où le dire est le prompt. `Persistent synth-brass riff throughout, in A
minor` puis `in B minor`.

Règle qui en découle : **on ne déclare jamais la tonalité, sauf quand deux clips
doivent être dans des tonalités différentes.**

**J'ai appliqué ma propre règle sur les renvois.** J'avais d'abord écrit
`in B minor, a whole tone higher than before`. Or `field-limits.md` note que
tout ce qui référence « avant » est mort dans un prompt d'extension : la
tonalité absolue fait tout le travail, le comparatif n'est qu'une note pour
l'humain. Coupé — 33 caractères récupérés, aucun effet perdu.

**Le point de coupe est un vide harmonique, pas seulement rythmique.** Sur
`deuxieme-salle.md`, le raccord passait par un endroit sans pulsation. Ici il
faut plus : sans **repère de hauteur**. D'où la fin du clip 1 — batterie
coupée, longue montée de bruit blanc, le riff qui tient **une seule note**. Le
bruit blanc n'a pas de tonalité ; l'oreille lâche son repère harmonique juste
avant le saut. Sans ce vide, la modulation s'entendrait comme une faute
d'accord.

**Le titre est le procédé, encore.** « Un ton au-dessus » : la mesure musicale
exacte de ce que fait le clip 2, et la façon dont on parle de quelqu'un qui a
pris de l'avance. Le refrain cesse d'être une métaphore au moment où le morceau
l'exécute. C'est la même mécanique que « Deuxième Salle » — la structure raconte
ce que le texte dit.

**« Sans raï » demande des exclusions nommées.** Après cinq morceaux maghrébins
dans le dossier, un prompt à ADN Kore traîne l'oriental avec lui par
association : oud, darbuka, gamme hijaz arrivent tout seuls. `Exclude: no rai,
no oud, no darbuka` en **tête** du bloc, plus `no oriental instruments` dans la
première phrase. Deux mentions, l'une en positif l'autre en négatif, parce
qu'une seule ne suffit pas quand le reste du prompt tire dans l'autre sens.

Ce qui reste de cet ADN une fois le raï retiré : la **rythmique** (batterie dure,
claps et claquements de doigts empilés sur le contretemps, pas de
four-on-the-floor) et le **placement du refrain**. C'est-à-dire l'essentiel.

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 1 (916 / 1000)

```
Fast French club pop banger, hard-hitting and radio-ready, no oriental instruments. 124 BPM hard club drums, driving syncopated kick, big layered claps and finger snaps on the backbeat, tight closed hats, no four-on-the-floor. Persistent synth-brass riff throughout, in A minor. Deep club sub bass, plucked synth stabs, warm piano chords, string swell, white-noise risers. Male tenor lead, catchy sung-rap delivery, crisp diction, explosive anthemic chorus, panoramic group vocal responses, stacked harmonies, whooping ad-libs. Ends on a long riser with the drums out and the riff holding one note. Ultra-wide stereo field, panoramic vocal layering, glossy modern sheen. Polished radio club master, punchy compression, tight round low end, club loudness. Exclude: no rai, no oud, no darbuka, no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no generic EDM or trap, no cluttered low end.
```

## 📝 PAROLES — CLIP 1 (2936 / 5000)

```
[Intro: Synth-brass riff alone, claps entering, spoken over, no kick yet]
(Instruction: Persistent synth-brass riff throughout, in A minor)
(parlé, calme, voix proche)
Local numéro quatre. Pas de chauffage.
C'est là que ça a commencé.

[Hook Teaser: Two lines, lead and crowd, kick drops in, claps stacked]
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]

[Verse 1: Male tenor, catchy sung-rap, riff and claps only, no strings]
On a commencé dans un local sans chauffage,
Trois chaises, un ordi, et une porte qui fermait mal.
Y'a des gens qui sont passés nous dire que ça marcherait pas,
Ils avaient des arguments, on avait pas de plan B.
Le premier morceau, on l'a fait écouter dans une voiture,
Parce que c'est là qu'on sait si un son tient debout.
Quatre personnes, un parking, un hiver, un refrain,
Et l'impression bizarre que quelque chose venait de commencer.

[Pre-Chorus: Strings rising, claps doubled, riser entering, harmonies stacking]
Compte les portes qu'on a poussées sans clé,
Compte les fois où on a dit encore une.
Ce soir on pousse la dernière et on la laisse ouverte,
Trois, deux, un —

[Chorus: Explosive anthemic hook, crowd answering wide, full drums, brass riff]
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
Un ton au-dessus, et on redescend pas,
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
Ce qu'on a mis dix ans à faire, on le lâche pas ce soir.

[Post-Chorus: Group unison, brass riff and claps only, one sub drop]
(Un ton ! Un ton !)
(On redescend pas, oh !)

[Verse 2: Same tenor, faster and freer, sub bass forward, piano answering]
Aujourd'hui la salle est pleine et je reconnais des visages,
Ceux du parking sont devant, ils ont pas bougé d'un mètre.
On m'a proposé de changer, de lisser, d'arrondir,
J'ai dit d'accord et j'ai rien changé, ça s'est bien passé.
Y'a une manière de monter en laissant la porte ouverte,
Et une autre qui consiste à la fermer derrière soi.
On a choisi la première, ça prend beaucoup plus de temps,
Mais on arrive à plusieurs, et c'est ça qui compte.

[Pre-Chorus: Strings higher, claps doubled again, riser longer, harmonies wide]
Compte les portes qu'on a poussées sans clé,
Compte les fois où on a dit encore une.
Ce soir on pousse la dernière et on la laisse ouverte,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, ad-libs hard panned, brass riff doubled]
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
Un ton au-dessus, et on redescend pas,
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
Ce qu'on a mis dix ans à faire, on le lâche pas ce soir.

[Post-Chorus: Group unison, brass riff and claps only, one sub drop]
(Un ton ! Un ton !)
(On redescend pas, oh !)

[Transition: Drums out, long white-noise riser, brass riff holding one note]
(plus de batterie, la nappe monte, le riff tient une seule note)
Un ton.
```

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 2 (873 / 1000)

Dérivé du clip 1 : même genre, même BPM, même rythmique, même persistance, même
instrumentation, même bloc d'exclusions. **Seule la tonalité change.**

```
Fast French club pop banger, hard-hitting and radio-ready, no oriental instruments. 124 BPM hard club drums, driving syncopated kick, big layered claps and finger snaps on the backbeat, tight closed hats, no four-on-the-floor. Persistent synth-brass riff throughout, in B minor. Opens straight on the full chorus in the new key, drums in at once, no build. Deep club sub bass, plucked synth stabs, warm piano chords, string swell. Male tenor lead, catchy sung-rap delivery, higher and more urgent, explosive anthemic chorus, panoramic group vocal responses, stacked harmonies. Ultra-wide stereo field, panoramic vocal layering. Polished radio club master, punchy compression, tight round low end, club loudness. Exclude: no rai, no oud, no darbuka, no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, no generic EDM or trap, no cluttered low end.
```

## 📝 PAROLES — CLIP 2 (1822 / 5000)

```
[Modulation: Brass riff enters a whole tone higher, drums in at once, no build]
(Instruction: Persistent synth-brass riff throughout, in B minor)

[Chorus: Full hook in the new key, everything at once, crowd answering wide]
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
Un ton au-dessus, et on redescend pas,
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
Ce qu'on a mis dix ans à faire, on le lâche pas ce soir.

[Post-Chorus: Group unison, brass riff and claps only, one sub drop]
(Un ton ! Un ton !)
(On redescend pas, oh !)

[Verse 3: Male tenor higher and more urgent, drums stripped to kick and claps]
Et si demain ça s'arrête, on aura eu ça,
Une salle qui chante un truc écrit dans un parking.
On remonte d'un ton, on verra bien où ça mène,
Y'a jamais eu de plafond, y'avait juste personne pour le dire.
Alors compte avec moi une dernière fois ce soir,
Et garde ta voix pour la fin — t'en auras besoin.

[Pre-Chorus: Strings at maximum, claps doubled, riser, harmonies stacking]
Compte les portes qu'on a poussées sans clé,
Compte les fois où on a dit encore une.
Ce soir on pousse la dernière et on la laisse ouverte,
Trois, deux, un —

[Final Chorus: All voices, widest field, gospel-style stacking, brass maximum]
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
Un ton au-dessus, et on redescend pas,
(Call: On monte ?) Response: [Panoramic Group Vocals: Un ton !]
Ce qu'on a mis dix ans à faire, on le lâche pas ce soir.

[Post-Chorus: Whole room, double-time claps, brass riff on top, sub drops]
(Un ton ! Un ton !)
(On redescend pas, oh !)
(Un ton ! Un ton !)
(On redescend pas, oh !)

[Outro: Drums out, brass riff alone, claps fading, spoken, hard stop]
(parlé, essoufflé, en riant)
Local numéro quatre. On y retourne demain.
Y'a toujours pas de chauffage.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 124, identique des deux côtés.** Une seule variable change entre les
clips, et c'est la tonalité. Toucher au tempo en plus ferait deux ruptures
simultanées, ce que la règle interdit (voir
`references/spatialization-and-persistence.md`).

**Tonalité — La mineur puis Si mineur.** Un ton, pas un demi-ton : le demi-ton
sonne comme un accident de bande, le ton s'entend comme une décision. Le riff de
cuivres garde **exactement le même rythme et le même dessin mélodique**, seule
sa hauteur bouge — c'est ce qui fait reconnaître le morceau instantanément
malgré le changement.

**Le chanteur ne force pas.** Le ténor monte d'un ton avec la musique ; si sa
tessiture est calée sur le clip 1, le clip 2 le met au bord. C'est voulu et
c'est écrit : `higher and more urgent`. Un chanteur légèrement en difficulté sur
un dernier tiers de morceau, c'est de l'énergie ; sur un morceau entier, c'est
un défaut.

**Le raccord, en pratique.** Fin du clip 1 : batterie coupée, montée de bruit
blanc, riff sur une note tenue, un mot parlé. Début du clip 2 : le riff repart
un ton plus haut, batterie pleine immédiatement, refrain d'entrée. **Aucun
temps mort côté clip 2** — la modulation doit arriver sur une explosion, pas sur
une reprise molle.

**Placement stéréo.** Riff de cuivres large (±60 %), claps encore plus larges,
voix au centre, sub et kick mono. Sur le clip 2, tout est identique : **ne pas
élargir davantage pour « marquer » la modulation** — le changement de hauteur
suffit, et deux effets simultanés s'annulent.

**Le refrain est identique à l'écrit** aux quatre passages, sur les deux clips.
La seule variation réelle est la tonalité — ce qui en fait le morceau du dossier
où le refrain change le plus sans qu'un mot bouge.

**Ratio hook / couplets — 1,86**, douze sections sur dix-neuf, 1414 caractères
de couplet réel.

**Leviers de re-génération.** Style : 84 de marge (clip 1), 127 (clip 2).
- L'oriental revient malgré tout → ajouter `no Middle Eastern scales` (+25) et
  vérifier que `no rai, no oud, no darbuka` est bien **en tête** du bloc.
- La modulation ne s'entend pas → allonger le vide : `four bars of white noise
  riser with no pitch reference` (+52) en fin de clip 1.
- Clip 2 mou au démarrage → `full drums and brass from the first beat` (+41).
- Riff pas assez reconnaissable → `same brass riff shape, only the pitch
  changes` (+46) — c'est le seul renvoi utile, parce qu'il porte sur une forme
  et pas sur un souvenir.
- Trop pop, pas assez club → `harder club drums, bigger claps` (+32).
