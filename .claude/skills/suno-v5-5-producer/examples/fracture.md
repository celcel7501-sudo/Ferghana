# « Fracture » — trap conscient, dispositif journal télévisé

Deuxième traitement de la même famille de production que `le-prix.md` : même
genre, même tempo, même feel. Ce qui change est le **dispositif** — le morceau
est monté comme un journal de vingt heures, avec une voix de présentateur qui
annonce et une voix de terrain qui répond.

**Conforme aux limites Suno** : style **904 / 1000** (dont **131** d'exclusions),
paroles **4783 / 5000**. Vérifiable par `python3 tools/count.py`.

---

## 🧪 ANALYSE DU MIX

**Deux voix, deux espaces — c'est tout le morceau.** La voix de présentateur est
**filtrée téléphone, étroite, plaquée au centre** ; la voix du rappeur est large,
proche, sans filtre. Ce n'est pas un effet décoratif : l'écart entre les deux
espaces sonores *est* le sujet du titre. Le mot « fracture » n'a pas besoin
d'être expliqué dans le texte, il s'entend dans le mixage. C'est la règle de
`spatialization-and-persistence.md` appliquée à un propos : un déplacement
stéréo peut porter une information narrative.

**Le bip de fil d'actualité comme élément persistant.** Froid, régulier,
mécanique — il tourne sous tout le morceau et rappelle en permanence qu'un
compteur tourne pendant qu'on parle de gens. C'est aussi lui qui reste seul à
l'outro, après la coupure du jingle : le journal s'arrête, le compteur continue.

**Pourquoi la même production que « Le Prix ».** Même famille assumée : 140 BPM
half-time, 808 glissée, caisse claire sur le 3. Ce qui distingue les deux, c'est
la **palette harmonique** — piano mélancolique et chaud là-bas, cordes staccato
froides et cuivre grave ici. Même squelette rythmique, température opposée. Deux
morceaux d'un même disque, pas deux versions du même morceau.

**Le pont : le dispositif se casse.** La voix du présentateur se dégrade en
pleine phrase (« la météo dans un instant... »), une mesure de silence avec
seulement du souffle de bande, puis la voix nue sans musique. C'est le seul
endroit où le morceau abandonne le dispositif — et il l'abandonne au moment
exact où le texte dit qu'on n'est pas une rubrique mais une adresse.

**Exclusions adaptées — application directe de la règle.** `no low-quality
recording` a été **retiré du bloc standard** ici : le morceau réclame
explicitement une voix filtrée téléphone, du souffle de bande et du bruit de
recherche de station. Garder cette exclusion aurait mis Suno en contradiction —
propre et sale en même temps — et il aurait arbitré en perdant les deux. Le reste
du bloc est conservé : la diction reste critique sur un texte de cette densité.

---

## 🎛️ V5.5 STYLE PROMPT — 904 / 1000 caractères

```
Dark French trap, cold cinematic conscious rap, broadcast-news atmosphere. 140 BPM half-time feel, deep sliding 808 bass, tight snare on 3, rapid triplet hi-hat rolls, syncopated foley percussion. Persistent news-ticker beep motif throughout. Cold staccato string section, detuned bell lead, low brass stab, telephone-filtered news anchor voice sample, broadcast static, channel-tuning noise. Male tenor: melodic rap-singing, light autotune, crisp articulate diction, dense internal rhymes, conscious street storytelling, explosive sung hook, lush stacked harmonies, panoramic group vocal responses. Ultra-wide stereo field, panoramic vocal layering, clean spacious mix, anchor voice narrow and centred. Polished radio master, punchy compression, tight controlled low end. Exclude: no mumble rap, no distorted vocals, avoid messy mix, ensure no audio artifacts, no generic EDM, avoid over-saturated bass.
```

---

## 📝 SCRIPT & PAROLES — 4783 / 5000 caractères

```
[Intro: Channel-tuning static, news jingle, ticker beeps, 808 slides in]
(Instruction: Persistent news-ticker beep motif throughout)
(voix de présentateur, filtrée téléphone, étroite et centrée)
Vingt heures. Bonsoir à toutes et à tous.
En ouverture de ce journal : les tensions, encore.
(voix naturelle, large, très proche du micro)
« Encore »... ouais. Nous aussi on est encore là.

[Verse 1: Melodic rap-singing, crisp diction, dense rhymes, strings staccato]
Ils ont filmé la vitrine, ils ont pas filmé la queue
À huit heures devant le centre médical, sous la pluie, à deux.
Ils ont compté les poubelles, ils ont pas compté les gens
Qui sont partis bosser à cinq heures sans faire de bruit.
Ma cité passe au journal comme un fait divers du soir,
Trois minutes de décor et personne demande l'histoire.
Le mot « fracture », ils l'ont mis dans un graphique,
Nous on l'a dans le dos, dans les reins, dans la fiche de paie.
Y'a pas deux France, y'a une France et une salle d'attente,
Et le numéro qu'on appelle jamais, c'est toujours le même.
J'connais des gars diplômés qui livrent des pizzas la nuit,
Ils ont pas raté leur vie, ils ont raté le code postal.
Alors quand j'entends « ils veulent rien faire », j'souris à peine,
Viens voir à six heures du mat' qui remplit le RER.
Le pays tient debout sur des épaules qu'il regarde pas,
Et il s'étonne, chaque hiver, que le dos finisse par craquer.

[Pre-Chorus: Energy ramp, strings rising, ticker accelerating, harmonies appear]
(Call: Vous avez vu le reportage ?) Response: [Panoramic Group Vocals: On l'a vécu]
Vous filmez la fumée, jamais le feu,
Vous filmez les jeunes, jamais les vieux qui tiennent.
Alors coupe le son deux secondes... et écoute.

[Chorus: Explosive Hook, Tenor rise, anthemic call and response, 808 full]
(Call: Fracture) Response: [Panoramic Group Vocals: Fracture]
(Call: Vingt heures, on existe trois minutes) Response: [Panoramic Group Vocals: Trois minutes]
(Call: Le reste du temps, on est le décor) Response: [Panoramic Group Vocals: Le décor]
(Call: Éteins la télé, viens voir en vrai) Response: [Panoramic Group Vocals: Viens voir en vrai]

[Verse 2: Same flow, lower and colder, strings exposed, 808 sliding under]
Ils invitent un expert qui a jamais pris l'ascenseur,
Il explique notre vie en douze minutes, montre en main.
Le débat s'échauffe, les courbes montent, on fait de l'audience,
Et nous on baisse le son parce que les petits écoutent.
Y'a ma voisine, quatre-vingts ans, qui compte ses médicaments,
Elle vote depuis soixante ans et personne l'a jamais appelée.
Y'a le prof qui reste après l'heure, y'a l'infirmière du dimanche,
Y'a l'imam, y'a le curé, y'a l'éduc' qui connaît tous les prénoms.
Ça, c'est jamais dans le sujet, ça fait pas monter la tension,
Une main tendue, ça se filme mal, ça dure trop longtemps.
Nous on répare en silence c'que d'autres cassent en direct,
On recolle la France par en bas, sans budget, sans crédit.
Alors marquez-le quelque part, entre deux cases et deux chiffres :
Ici on est fatigués, mais on n'a jamais lâché.
La fracture, c'est pas nous, c'est l'écart entre l'écran et la rue,
Et ce soir, dans ce son, y'a personne qui monte le décor.

[Pre-Chorus: Energy ramp, strings higher, snare roll, harmonies stacking]
(Call: Vous avez vu le reportage ?) Response: [Panoramic Group Vocals: On l'a vécu]
Vous filmez la fumée, jamais le feu,
Vous filmez les jeunes, jamais les vieux qui tiennent.
Alors coupe le son deux secondes... et écoute.

[Chorus: Same hook, wider panoramic stack, ad-libs hard panned]
(Call: Fracture) Response: [Panoramic Group Vocals: Fracture]
(Call: Vingt heures, on existe trois minutes) Response: [Panoramic Group Vocals: Trois minutes]
(Call: Le reste du temps, on est le décor) Response: [Panoramic Group Vocals: Le décor]
(Call: Éteins la télé, viens voir en vrai) Response: [Panoramic Group Vocals: Viens voir en vrai]

[Bridge: Beat switch, drums cut, static rising, Voice pitch variation, no autotune]
(voix de présentateur, filtrée, qui se dégrade et se coupe)
Nous y reviendrons... la météo dans un instant...
[Silence: one bar, static only, everything drops out]
(voix nue, aucun effet, sans musique)
Nous, on y revient tous les jours.
On l'a pas en rubrique. On l'a en adresse.

[Chorus: Final, everything returns at once, tenor up a tone, 3D vocal wall]
(Call: Fracture) Response: [Panoramic Group Vocals: Fracture]
(Call: Vingt heures, on existe trois minutes) Response: [Panoramic Group Vocals: Trois minutes]
(Call: Le reste du temps, on est le décor) Response: [Panoramic Group Vocals: Le décor]
(Call: Éteins la télé, viens voir en vrai) Response: [Panoramic Group Vocals: Viens voir en vrai]

[Outro: Ticker motif alone, static fading, no jingle, no tape stop]
(parlé, calme)
Le journal est fini.
Nous, on commence.
```

---

## 🎹 NOTES DE STUDIO

**BPM — 140, feel half-time. Tonalité — Do dièse mineur.** Plus bas et plus
froid que le Fa dièse de `le-prix.md`, volontairement : les cordes staccato
sonnent coupantes dans ce registre, là où le piano sonnait chaud. Le refrain
monte à la quarte sur « Fracture » et redescend aussitôt.

**Delivery — trois registres à tenir séparés.**
1. *Présentateur* : neutre, propre, aucune émotion, débit régulier de lecture.
   Il ne joue pas, il lit — c'est ce qui le rend glaçant.
2. *Couplets* : sur le temps, articulés, tendus mais **sans colère criée**. Le
   texte est une démonstration, pas une engueulade ; l'énervement se lit dans la
   précision, pas dans le volume.
3. *Pont* : voix nue, sans autotune, sans musique. Presque parlée.

**Placement stéréo — à ne pas négliger.** Présentateur mono au centre, bande
passante réduite. Rappeur large et proche. Chœurs de réponse étalés aux
extrêmes. Si tout se retrouve à la même largeur, le morceau perd sa thèse.

**Le moment à protéger.** La coupure du présentateur en pleine phrase, suivie de
la mesure de silence. Si Suno enchaîne sans le vide, la bascule ne se produit
pas. La balise `[Silence: one bar, static only]` est là pour ça.

**Une ligne à poser à part.** « La fracture, c'est pas nous, c'est l'écart entre
l'écran et la rue » — c'est la thèse. La dire calmement, un demi-temps de
silence après, **sans doublage ni ad-lib**.

**Leviers de re-génération.** Style à 96 caractères de marge, paroles à 217.
- Voix de présentateur trop chantée → `spoken news anchor, deadpan delivery` (+38).
- Pas assez froid → `icy staccato strings, cinematic tension` (+40) en coupant
  `detuned bell lead`.
- Bips trop discrets → la persistance est déjà déclarée deux fois ; ajouter
  `ticker beeps up front` (+23).
- Trop de statique → `light broadcast static only` (+28).
- Exclusions déplacées dans le champ **Exclude Styles** : 131 caractères libérés.
