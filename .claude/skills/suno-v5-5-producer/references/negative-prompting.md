# Exclusions (negative prompting)

Bloc standard, à ajouter systématiquement en fin de champ de style :

```
Exclude: no mumble rap, no low-quality recording, no distorted vocals, avoid messy mix, ensure no audio artifacts, no generic EDM, avoid over-saturated bass.
```

**Coût : 157 caractères** sur les 1000. C'est 16 % du budget, donc la partie
positive doit tenir en ~740 au lieu de ~900. À budgéter dès la première ligne,
pas à découvrir à la fin.

---

## Où les mettre — le point technique

Le champ *Style of Music* est un champ de **conditionnement positif** : tout ce
qui y est écrit tire la génération vers ce qui est écrit. Une négation n'est pas
comprise comme une opération logique — le modèle voit surtout les mots
`distorted`, `messy`, `saturated`. Écrire `no distorted vocals` peut donc
produire l'inverse de l'effet recherché, exactement comme un prompt d'image qui
insiste sur ce qu'il ne veut pas.

Suno expose un champ dédié, **Exclude Styles**, séparé du prompt de style. C'est
là que les exclusions fonctionnent de façon fiable, et **elles n'y consomment
pas le budget des 1000 caractères**.

**Recommandation** : coller la liste d'exclusions dans *Exclude Styles* quand
l'interface le permet, et garder le champ de style pour du positif pur. Le bloc
`Exclude:` en fin de prompt reste la solution de repli quand le champ dédié
n'est pas disponible (API, certaines vues mobiles, presets partagés).

---

## Écrire une exclusion utile

1. **Exclure un genre, pas un défaut.** `no generic EDM` fonctionne bien : c'est
   un style, le modèle sait s'en éloigner. `avoid messy mix` fonctionne mal :
   « messy » n'est pas une catégorie sonore apprise.
2. **Préférer le positif équivalent.** Chaque exclusion a un jumeau positif plus
   efficace, et souvent moins cher :

| Exclusion | Positif équivalent, plus fiable |
|---|---|
| `no distorted vocals` | `clean close-mic vocal` |
| `no low-quality recording` | `polished radio master` |
| `avoid messy mix` | `spacious mix, clear separation` |
| `avoid over-saturated bass` | `tight controlled low end` |
| `no mumble rap` | `crisp diction, articulate delivery` |

3. **Ne jamais exclure ce que le style demande par ailleurs.** `no distorted
   vocals` dans un morceau qui déclare `cassette-tape saturation` met le modèle
   en contradiction : il arbitre, et on perd les deux. Vérifier la cohérence du
   bloc d'exclusion avec les couches texture et mastering avant de livrer.
4. **Adapter la liste au morceau.** Le bloc standard est un point de départ. Sur
   un morceau boom bap volontairement poussiéreux, retirer
   `no low-quality recording` — sinon on demande au modèle d'être sale et propre
   en même temps.

---

## Conflits connus par ADN

Le bloc standard a été écrit pour du club propre. Certains ADN le contredisent
frontalement : la contradiction doit être résolue **avant** la génération, pas
constatée après.

| ADN | Tag du bloc en conflit | Ce qu'il contredit | Remplacement |
|---|---|---|---|
| **Booba / Le Duc** | `avoid over-saturated bass` | `deep distorted 808 bass` | `no cluttered low end` |
| **Booba / Le Duc** | `no distorted vocals` | `melodic autotune vocals` | `no mumble rap, crisp diction` |
| **Rohff / Le Padre** | `no low-quality recording` | `raw unpolished delivery` | `polished cinematic master` |
| **Cut Killer** | `no low-quality recording` | `cassette-tape saturation`, `vinyl crackle` | `polished radio master` |
| **Djimi Finger** | *(aucun)* | — | ajouter `no autotune`, possible seulement sans hook chanté |
| **Brandy / New Jack** | `no autotune` (si ajouté) | `stacked R&B harmonies` | ne jamais l'ajouter ici |

**Cas Booba, en détail.** Deux des sept tags du bloc standard sont inutilisables
sur cet ADN. La 808 saturée **est** le morceau : lui opposer
`avoid over-saturated bass` revient à demander au modèle de produire et
d'annuler le même son. Bloc corrigé pour un morceau trap sombre :

```
Exclude: no mumble rap, no cluttered low end, avoid messy mix, no audio artifacts, no generic EDM, avoid thin sounds, no boom bap.
```

128 caractères au lieu de 157, et zéro contradiction. Le nombre d'exclusions
reste le même — on ne réduit pas la liste, on la rend cohérente.

---

## Le bloc par défaut de l'identité Prestige

L'identité **DJ Rim-K / Prestige Old School Podcast** réclame par signature
`vinyl crackle`, `radio broadcast atmosphere` et `radio tuner sweep`. Le bloc
d'exclusions standard contient `no low-quality recording`. **Les deux ne peuvent
pas coexister** : on demande au modèle un grain de vinyle et une propreté de
studio dans le même prompt, il arbitre, et on perd le grain — c'est-à-dire
exactement la signature.

Ce n'est plus un conflit ponctuel, c'est un conflit **structurel** avec
l'identité. Bloc par défaut à utiliser sur tout morceau Prestige :

```
Exclude: no mumble rap, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM, no cluttered low end, avoid thin sounds.
```

135 caractères, sept exclusions comme le bloc standard, zéro contradiction. Le
positif équivalent de `no low-quality recording` est déplacé dans la couche
mastering, où il ne se bat avec rien : `polished master under the vinyl grain`.

## Nom d'artiste : la règle ne vise que le champ de style

`[Intro: Radio tuner sound, vinyl crackle, DJ Rim-K voice-over]` est une balise
**de paroles**, et elle est parfaitement valide. La règle anti-censure porte sur
le champ *Style of Music*, qui est filtré ; le champ *Lyrics* accepte les noms
propres — c'est là que vivent les DJ drops, les crédits et les signatures de fin
(`DJ Rim'K... Jalane... Prestige Old School`).

En clair : **on ne nomme jamais dans le style, on nomme librement dans les
paroles.**

## Puissance maximale : le budget rempli sans une seule contradiction

« Le prompt le plus puissant possible » n'est pas le plus dense. C'est celui
dont **chaque clause a été vérifiée contre toutes les autres**. Les prompts
surchargés échouent presque toujours sur une contradiction interne, pas sur un
manque de tags :

- `no autotune` sous des harmonies empilées
- `no low-quality recording` sous `vinyl crackle`
- `no trap drums` sous une 808 lourde
- deux écoles de batterie sur la même couche, sans arbitrage

**Conséquence budgétaire, mesurée sur `examples/la-grande-salle.md`** : le champ
de style tient 967 caractères, le bloc d'exclusion 145. Total en mode repli :
**1122**. Il n'existe aucune version de ce prompt qui tienne recollée.

**À ce niveau de remplissage, le champ dédié *Exclude Styles* n'est plus une
commodité : il est la condition d'existence du morceau.** C'est la mesure la
plus nette de ce que vaut le format en cinq sections.

**Et le prix se paie sur les leviers.** Un morceau à 33 caractères de marge n'a
plus de levier de re-génération. Quand il faut en récupérer, retirer dans l'ordre
habituel — texture, puis ornement, puis mastering — et **jamais** la ligne de
persistance ni la phrase de batterie.

## Viser la bande réellement menacée

`no cluttered low end` est une bonne habitude, mais c'est aussi le réflexe qu'on
écrit sans regarder l'instrumentation. Une exclusion doit viser la bande que le
**style demandé** met en danger.

Cas réel, `examples/toute-la-famille.md` : claps empilés sur le contretemps et
fills de darbouka. Le grave n'est pas menacé — kick et basse y sont seuls. Le
télescopage se produit dans le **médium** : le *doum* de la darbouka est un
bas-médium, le *tek* un haut-médium, et un clap empilé occupe exactement cette
fenêtre. L'exclusion utile était donc `no cluttered midrange`, pas
`no cluttered low end`.

**Méthode** : avant d'écrire le bloc, lister les instruments demandés par bande.

| Bande | Occupants typiques | Exclusion utile si encombrée |
|---|---|---|
| Grave | Kick, basse, 808, sub | `no cluttered low end` |
| Médium | Claps, percussions à main, caisse claire, cuivres, voix | `no cluttered midrange` |
| Aigu | Charleys, shakers, cordes hautes, chuintantes | `avoid harsh high end` |

Si une bande n'a qu'un ou deux occupants, l'exclure ne coûte que des caractères.

**Corollaire déjà connu, rappelé ici** : ne jamais exclure ce que le style
demande par ailleurs. Une exclusion mal ciblée est du gaspillage ; une exclusion
contradictoire est un défaut.

## Exclure un registre, pas seulement un timbre

Le bloc d'exclusion vise d'ordinaire des sons — `no distorted vocals`,
`no trap drums`. Il peut aussi protéger un **registre émotionnel**, et c'est
alors la seconde moitié d'une consigne portée par le champ positif.

Cas réel, `examples/cet-ete-la.md` : le champ positif dit que la mélancolie doit
vivre dans le texte et pas dans les accords ; le bloc ajoute `no minor key,
no dark atmosphere`. Le positif dit **où** l'émotion doit être, le négatif dit
**où elle ne doit pas aller**.

À n'employer que quand le brief contient une contradiction de registre — sinon
ce sont deux clauses qui ne protègent rien et coûtent une trentaine de
caractères.
