# « Sur La Fréquence » — même production que « Face B », autre texte

Prompt de style **fourni par le client**, conservé au caractère près : c'est
exactement celui de `face-b.md`, 889 caractères, sans une virgule de
différence. Seules les paroles changent.

Le dossier avait déjà **un texte, deux productions**
(`ne-raccroche-pas.md` et `ne-raccroche-pas-secteur-a.md`). Voici la symétrie
manquante : **une production, deux textes.**

**Conforme aux limites Suno** : style **889 / 1000**, paroles **4009 / 5000**
(balises comprises). Vérifiable par `python3 tools/count.py`.

Ratio hook / couplets : **2,22** — neuf sections de hook sur quatorze.

---

## 🧪 ANALYSE DU MIX

**Ce que le prompt fixe, et ce qu'il laisse libre.** C'est tout l'intérêt de
l'exercice : écrire deux fois sur le même champ de style rend la frontière
visible.

| Le prompt décide | Le prompt ne dit rien de |
|---|---|
| le son, le tempo, la grille | le sujet |
| le timbre et le genre de la voix lead | le registre émotionnel |
| la présence d'un hôte radio | ce que l'hôte dit, et **quand** |
| l'architecture du hook (appel, réponse de groupe, riff gratté) | ce que le hook **veut dire** |
| le mix, la largeur, le mastering | où tombe la rupture et ce qu'elle fait |

**Le hook change de nature sans changer de forme.** Sur `face-b.md`, c'était un
**ordre exécutable** — « Retourne-le ! » — que la salle applique avec son corps.
Ici c'est un **constat de complicité** : « Sur la fréquence / toute la nuit ».
Même syntaxe d'appel et réponse, même densité, même placement. Le premier
s'adresse à une piste de danse, le second à une seule personne dans la salle.
La production ne fait pas la différence entre les deux : l'écriture, si.

**Le pont utilise les mêmes tags pour l'effet inverse.** Le prompt déclare
`heavy vinyl crackle` et `deep male radio host voice-over on the intro and
outro`. Sur `face-b.md`, l'hôte encadre le disque et le pont arrête la platine.
Ici, **l'hôte entre au milieu du morceau** — batterie coupée, il ne reste que le
grésillement — et il parle aux deux personnages : « Le prochain disque est pour
vous deux. » Les mêmes éléments déclarés, une dramaturgie opposée. C'est la
démonstration la plus nette que le champ de style décrit un **matériau**, pas une
mise en scène.

**Une découverte que je n'avais pas prévue : le ratio est presque identique.**
2,22 ici contre 2,18 sur `face-b.md`, alors que les deux textes ont été écrits
indépendamment. Ce n'est pas le prompt qui fixe le ratio — c'est le **squelette
qu'il suggère**. Un prompt qui déclare `panoramic group vocal responses` et
`used as the hook riff` rend une seule structure naturelle : teaser, deux
couplets, trois refrains, trois post-refrains. Et ce squelette-là produit
mécaniquement un ratio autour de 2,2.

Conséquence utile pour le protocole : **le ratio se décide en partie dans le
champ de style**, pas seulement à l'écriture. Vouloir un ratio bas sur ce prompt
demanderait de retirer les réponses de groupe — c'est-à-dire de changer le
prompt.

**Ce qui reste ouvert malgré tout, c'est la température.** Le même beat de club
à 122 BPM porte ici une histoire d'insomnie et d'attente. Rien dans le prompt ne
l'interdit : `silky agile topline` et `warm string swell` sont aussi bien de la
tendresse que de la fête. Le beat ne dit pas ce que le morceau raconte.

---

## 🎛️ V5.5 STYLE PROMPT — 889 / 1000 caractères

Identique à celui de `face-b.md`, au caractère près.

```
Commercial French club R&B, fast and glossy. 122 BPM four-on-the-floor, sampled MPC-60 kick and snare on a house grid, crisp offbeat hi-hats, layered claps. Persistent scratched vocal sample stab throughout, used as the hook riff, not as a solo. Filtered soul-sample chords, round analog bassline with portamento glides, Rhodes stabs, warm string swell, dark brass stabs, heavy vinyl crackle under the whole mix. Female R&B lead, silky agile topline, complex vocal runs, lush stacked harmonies, panoramic group vocal responses. Deep male radio host voice-over on the intro and outro, spoken not sung, warm AM radio compression. Ultra-wide stereo field, panoramic vocal layering. Radio club master, tight round low end, polished under the vinyl grain. Exclude: no mumble rap, no distorted vocals, avoid messy mix, no audio artifacts, no generic EDM, no cluttered low end, avoid thin sounds.
```

---

## 📝 SCRIPT & PAROLES — 4009 / 5000 caractères

```
[Intro: Radio tuner sweep, vinyl crackle, scratched sample, host voice-over, no drums]
(Instruction: Persistent scratched vocal sample stab throughout)
(voix d'hôte, grave, parlée, compression AM, au centre)
Trois heures moins le quart. Vous êtes encore là.
Alors on continue.

[Hook Teaser: Two lines, lead and group, kick drops in, claps enter]
(Call: Sur la fréquence) Response: [Panoramic Group Vocals: Toute la nuit]
(Call: Sur la fréquence) Response: [Panoramic Group Vocals: Toute la nuit]

[Verse 1: Female R&B lead, silky close-mic, scratch stab and claps, no strings]
Trois heures moins le quart, j'ai la ville pour moi toute seule,
Le périphérique est vide, la radio grésille un peu.
Y'a une émission que personne écoute à cette heure-là,
Un type qui parle bas et qui passe des vieux disques.
Il a dit une phrase que j'ai notée sur un ticket,
Je l'ai gardée dans la poche du manteau tout l'hiver.
Et quand je t'ai rencontré au mois de mars,
T'as dit la même phrase avant que je te la dise.

[Pre-Chorus: Strings rising, claps doubled, harmonies stacking, filter opening]
Y'a des gens qui se trouvent dans des salles pleines,
Y'a des gens qui se trouvent à trois heures du matin.
Devine dans quelle catégorie on est tombés,
Trois, deux, un —

[Chorus: Explosive hook, crowd answering wide, full drums, brass, scratch on top]
(Call: Sur la fréquence) Response: [Panoramic Group Vocals: Toute la nuit]
Y'a que nous deux qui captons ce truc-là,
(Call: Sur la fréquence) Response: [Panoramic Group Vocals: Toute la nuit]
Le reste du monde écoute autre chose.

[Post-Chorus: Scratched sample doubled, claps and bass only, one brass stab]
(Sur-la-fré-quence... sur-la-fré-quence...)
(Le reste écoute autre chose, oh !)

[Verse 2: Same lead, freer phrasing, bass forward, Rhodes stabs answering]
Depuis on cale nos insomnies sur le même horaire,
Toi chez toi, moi chez moi, la même fréquence entre nous.
On s'écrit rien pendant l'émission, c'est la règle,
On envoie juste un message quand le morceau est bon.
J'ai jamais su si c'était toi que j'attendais
Ou juste la certitude que quelqu'un veillait aussi.
Les deux, sûrement. On a mis un an à le dire,
Et on l'a dit un mardi, sans musique, dans une cuisine.

[Pre-Chorus: Strings higher, harmonies wider, snare roll, filter opening slower]
Y'a des gens qui se trouvent dans des salles pleines,
Y'a des gens qui se trouvent à trois heures du matin.
Devine dans quelle catégorie on est tombés,
Trois, deux, un —

[Chorus: Same hook, harmonies wider, runs on the tails, ad-libs hard panned]
(Call: Sur la fréquence) Response: [Panoramic Group Vocals: Toute la nuit]
Y'a que nous deux qui captons ce truc-là,
(Call: Sur la fréquence) Response: [Panoramic Group Vocals: Toute la nuit]
Le reste du monde écoute autre chose.

[Post-Chorus: Scratched sample doubled, claps and bass only, one brass stab]
(Sur-la-fré-quence... sur-la-fré-quence...)
(Le reste écoute autre chose, oh !)

[Bridge: Drums out, crackle and Rhodes only, host voice-over returns, dry]
(le morceau s'efface, il reste le grésillement)
(voix d'hôte, grave, parlée, compression AM)
Il est quatre heures. Le prochain disque est pour vous deux.
Vous savez qui vous êtes.
(voix lead seule, nue, sans double)
Il savait pas. Il savait très bien.

[Final Chorus: All voices, widest field, gospel-style stacking, brass maximum]
(Call: Sur la fréquence) Response: [Panoramic Group Vocals: Toute la nuit]
Y'a que nous deux qui captons ce truc-là,
(Call: Sur la fréquence) Response: [Panoramic Group Vocals: Toute la nuit]
Le reste du monde écoute autre chose.

[Post-Chorus: Whole room, double-time claps, scratched sample on top, brass]
(Sur-la-fré-quence... sur-la-fré-quence...)
(Le reste écoute autre chose, oh !)
(Sur-la-fré-quence... sur-la-fré-quence...)
(Le reste écoute autre chose, oh !)

[Outro: Drums out, vinyl crackle, host voice-over, radio frequency fading]
(voix d'hôte, grave, parlée, exactement comme à l'intro)
Quatre heures dix. Éteignez quand vous voulez.
Nous, on laisse allumé.
```

---

## 🎹 NOTES DE STUDIO

**BPM et tonalité — identiques à `face-b.md`** : 122, Do mineur. Le prompt les
impose, et c'est le principe de l'exercice. L'échantillon gratté reste pitché
dans la tonalité.

**Delivery — même voix, autre intention.** `face-b.md` demandait de l'assurance
sur les couplets et de la projection au refrain. Ici les couplets sont
**racontés**, presque confidentiels, avec les runs uniquement sur les fins de
ligne comme là-bas. Le refrain, lui, s'ouvre pleinement : le contraste
confidence / ouverture est plus large que sur le premier morceau, et c'est ce
qui différencie les deux à l'oreille malgré la production commune.

**La ligne la plus difficile à placer.** « Il savait pas. Il savait très bien. »
Voix nue, sans double, juste après la voix de l'hôte. Elle ne fonctionne que si
la batterie est effectivement absente — d'où
`Drums out, crackle and Rhodes only` dans la balise. Sur un morceau à 122 BPM
avec un scratch permanent, quatre secondes sans batterie sont un événement.

**L'hôte entre au milieu, et c'est le seul écart au prompt.** Le champ de style
dit `on the intro and outro`. La balise de pont demande sa voix une troisième
fois. Ce n'est pas une contradiction : le prompt décrit **où l'hôte est
attendu**, la balise ajoute une occurrence exceptionnelle — et une exception
n'existe que parce que la règle est déclarée. Si l'hôte parlait dans chaque
section, il n'y aurait plus d'événement.

**Le refrain est identique à l'écrit** aux quatre passages, teaser compris.

**Ratio hook / couplets — 2,22**, contre 2,18 sur `face-b.md`. Deux textes
écrits indépendamment, quatre centièmes d'écart. Le squelette suggéré par le
prompt fait plus pour le ratio que l'intention d'écriture — noté dans
`references/structure-tags.md`.

**Leviers de re-génération.** Style à 111 caractères de marge, paroles à 991.
- Les deux morceaux sonnent trop pareil → changer **un seul** tag de voix :
  `warmer, breathier female lead` (+29) suffit à séparer les deux prises sans
  toucher au reste de la production.
- Le pont ne se vide pas → `four bars with no drums at all` (+31).
- La voix d'hôte manque au pont → la déclarer explicitement dans le style :
  `radio host voice-over on the intro, bridge and outro` (+13 par rapport à la
  formule actuelle).
- Refrain trop club pour ce texte → `intimate anthemic chorus, not shouted`
  (+38).
