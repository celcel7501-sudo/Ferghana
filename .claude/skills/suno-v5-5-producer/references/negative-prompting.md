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
