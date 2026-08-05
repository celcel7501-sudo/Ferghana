# Amiga 500 Demo - Bouncing Ball

Une démo bas niveau pour Amiga 500 (chipset OCS), écrite entièrement en
assembleur 68000. Aucune bibliothèque graphics.library/Intuition n'est
utilisée pour l'affichage : le programme prend la main sur la machine et
programme directement les registres des puces custom ($DFF000).

## Ce que fait la démo

- Un dégradé de fond ciel -> sol, entièrement généré par la **copper list**
  (changement de `COLOR00` ligne par ligne, sans bitplane).
- Une balle à damier (blanc/rouge, contour noir) affichée via le
  **sprite matériel 0**, qui rebondit avec une physique simple
  (gravité + amortissement) en virgule fixe 16.16.
- Le mouvement est synchronisé à l'image (~50 Hz PAL) par une attente
  active sur le faisceau (`VPOSR`).

## Structure du projet

```
src/demo.s          Programme principal (boucle physique + rendu)
include/hw.i        Adresses des registres matériels custom chips
include/exec_lvo.i  Offset LVO exec.library utilisé (Forbid)
Makefile            Build via vasm
```

## Compilation

Il faut [vasm](http://sun.hasenbraten.de/vasm/) (syntaxe Motorola, cible
`m68k-amigaos`), généralement fourni avec la chaîne de cross-compilation
Amiga (par ex. le toolchain `amiga-gcc`/Bebbo, ou vasm en standalone).

```sh
make
# équivalent à :
vasmm68k_mot -Fhunkexe -Iinclude -o demo src/demo.s
```

Cela produit un exécutable AmigaDOS (`demo`, format hunk) directement
lançable.

## Exécution

Sur émulateur (FS-UAE, WinUAE) ou machine réelle configurée en Amiga 500 :

1. Copier `demo` sur une disquette/ADF ou dans un répertoire accessible
   depuis l'AmigaDOS (Workbench ou CLI).
2. Le lancer depuis le CLI (`demo`) ou en double-cliquant depuis
   Workbench.
3. La démo prend immédiatement le contrôle total de la machine
   (multitâche coupé, interruptions coupées, copper list personnalisée).

**Sortie** : comme la plupart des démos "one-file" des années 80/90, ce
programme ne rend jamais la main à l'OS proprement — il faut réinitialiser
la machine (Ctrl-Amiga-Amiga sur un vrai Amiga, ou Reset dans l'émulateur)
pour revenir au Workbench.

## Important - non testé sur assembleur/émulateur réel

Cet environnement d'exécution n'a pas accès à `vasm` ni à un émulateur
Amiga (réseau restreint à un jeu de domaines autorisés), donc ce code n'a
**pas pu être assemblé ni exécuté** ici. Il a été écrit avec le plus grand
soin en s'appuyant sur les constantes matérielles standard et bien connues
du chipset OCS (adresses `$DFF0xx`, format de la copper list, format des
sprites), mais certains détails fins (position horizontale exacte du
sprite, cadence de la boucle de synchronisation) sont les points les plus
susceptibles de nécessiter un ajustement après un premier test réel.

Si l'assemblage échoue ou que le rendu est décalé/incorrect à l'écran,
partagez le message d'erreur ou une capture d'écran/description du
problème : le code pourra être corrigé rapidement.
