# « L'Élite » — morceau en deux clips (workflow Extend)

Produit par `tools/suno_producer.py`, pas écrit à la main : c'est le morceau de
validation du pipeline. Deux clips, deux champs de paroles, donc **deux budgets
de 5000 caractères** au lieu d'un.

| Clip | Style | Paroles |
|---|---|---|
| Clip 1 — fondation | 732 / 1000 | 1252 / 5000 |
| Clip 2 — extension | 668 / 1000 | 967 / 5000 |

Reproduire : `python3 tools/suno_producer.py`

---

## 🧪 ANALYSE DU MIX

**Pourquoi découper en deux clips.** Suno plafonne les paroles à 5000
caractères par génération. Un morceau long ne se compresse pas, il se
**scinde** : le clip 1 pose intro, deux couplets et le refrain ; le clip 2
part du beat switch, enchaîne le solo, le troisième couplet et le refrain
final. Chaque clip a son propre champ, donc son propre budget — 10000
caractères utilisables au total. Ce morceau n'en consomme que 2219 :
il reste largement de quoi étoffer les couplets sans toucher à la structure.

**La règle du raccord.** Le style du clip 2 **dérive** de celui du clip 1 : même
genre, même BPM, même rythmique, même persistance. On n'ajoute que les tags de
solo. S'en écarter — changer le genre ou le tempo pour « faire évoluer » le
morceau — fait entendre la couture au point de raccord, et c'est le défaut le
plus courant des morceaux étendus.

**La persistance porte la continuité.** `Persistent filtered string riff
throughout` est déclaré dans les deux styles. C'est ce motif, présent avant et
après la coupure, qui fait entendre les deux clips comme un seul morceau plutôt
que comme deux titres collés.

**Le pont électro comme point de coupe.** Couper un morceau au milieu d'un
couplet s'entend toujours. Couper sur un beat switch, jamais : la rupture est
déjà attendue par l'oreille, donc le raccord technique se cache derrière une
rupture musicale. C'est pour ça que le clip 2 **ouvre** sur le pont et non sur
le couplet 3.

**124 BPM, four-on-the-floor.** Tempo de house droite, sur lequel une plume
nonchalante garde encore de la place entre les syllabes. Le sidechain creuse à
chaque kick, et les claps empilés remplissent les trous — même principe
d'arrangement que sur `automatique.md`, appliqué à un morceau rappé.

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 1 (732 / 1000)

```
French club rap over filtered French house, 124 BPM. four-on-the-floor, heavy sidechain pumping on every kick, crisp offbeat hats, layered claps. filtered French house, sidechain pumping, rhythmic vocoder, resonant filter sweeps. nonchalant poetic urban delivery, melodic slacker flow. lush multi-layered vocal harmonies, complex R&B vocal runs, panoramic vocal layering. Persistent filtered string riff throughout. chopped disco-string sample, round analog bassline with portamento glides, Rhodes stabs, brass hits on the drop. male tenor, dry close-mic verses, explosive anthemic hook, anthemic group vocal responses. ultra-wide stereo field, panoramic vocal layering. polished club master, punchy compression, deep round low end.
```

## 📝 PAROLES — CLIP 1 (1252 / 5000)

```
[Intro: Turntablism routine, vinyl crackle, atmospheric build]

[Verse 1: Nonchalant flow, melodic slacker delivery]
On vient d'en bas, on vise les étoiles,
C'est pas d'la poésie, c'est un plan.
Ma mère pliait des draps d'hôtel,
Moi j'pliais mes rêves dans un cartable.
On m'a dit « reste à ta place »,
J'ai demandé laquelle, personne a su répondre.
Alors j'ai pris celle du fond,
Et j'ai avancé d'une rangée chaque année.

[Pre-Chorus: Energy ramp, filter opening, snare roll]

[Verse 2: Nonchalant flow, melodic slacker delivery]
Le bitume est froid, nos cœurs sont en feu,
Le contraste, c'est notre climat.
On a appris à danser sur des mauvaises nouvelles,
C'est une technique, pas de l'insouciance.
Costume ou survêt', même colonne vertébrale,
On change la coupe, on garde la mesure.
Si l'ascenseur est en panne depuis vingt ans,
On montera par la musique.

[Chorus: Anthemic Hook, Tenor rise, call and response]
(Call: Ghetto Star) Response: [Panoramic Group Vocals: Ghetto Star]
(Call: On vient d'en bas, on vise plus haut) Response: [Panoramic Group Vocals: Plus haut]
(Call: On brille dans le noir) Response: [Panoramic Group Vocals: Dans le noir]
(Call: Si tu connais le prix, lève les mains) Response: [Panoramic Group Vocals: Lève les mains]
```

---

## 🎛️ V5.5 STYLE PROMPT — CLIP 2 (668 / 1000)

Identique au clip 1, plus les tags de solo. Rien d'autre ne change.

```
French club rap over filtered French house, 124 BPM. four-on-the-floor, heavy sidechain pumping on every kick, crisp offbeat hats, layered claps. filtered French house, sidechain pumping, rhythmic vocoder, resonant filter sweeps. lush multi-layered vocal harmonies, complex R&B vocal runs, panoramic vocal layering. Persistent filtered string riff throughout. virtuoso analog synth solo, Moog-style lead, high resonance. chopped disco-string sample, round analog bassline, Rhodes stabs. male tenor, explosive anthemic hook, anthemic group vocal responses. ultra-wide stereo field, panoramic vocal layering. polished club master, punchy compression, deep round low end.
```

## 📝 PAROLES — CLIP 2 (967 / 5000)

```
[Bridge: Beat switch, filter sweep opening, heavy sidechain pump]

[Solo: Analog synthesizer solo, melodic and complex]

[Verse 3: Intense flow, denser rhymes]
L'héritage est lourd, on porte le flambeau,
Et un flambeau, ça brûle aussi les mains.
On m'a pas donné d'élite, j'en ai fabriqué une :
C'est ceux qui se lèvent quand personne regarde.
Pas de couronne, pas de photo,
Juste des gens qui tiennent parole en silence.
On brille dans le noir parce qu'on connaît le noir,
Et le noir, il nous a appris à viser.

[Final Chorus: Maximum intensity, 3D vocal wall]
(Call: Ghetto Star) Response: [Panoramic Group Vocals: Ghetto Star]
(Call: On vient d'en bas, on vise plus haut) Response: [Panoramic Group Vocals: Plus haut]
(Call: On brille dans le noir) Response: [Panoramic Group Vocals: Dans le noir]
(Call: Si tu connais le prix, lève les mains) Response: [Panoramic Group Vocals: Lève les mains]

[Outro: Smooth filter sweep, final vinyl scratch, fading atmosphere]
```

---

## 🎹 NOTES DE STUDIO

**BPM — 124, four-on-the-floor.** Identique sur les deux clips, sans
négociation : un écart d'un seul BPM au raccord s'entend comme un défaut de
lecture.

**Tonalité — La mineur.** Assez grave pour que le riff de cordes filtré reste
lisible sous le sidechain, assez ouverte pour que le refrain monte sans forcer.
Le solo du clip 2 se joue sur la même grille que le refrain : un solo qui
change de grille casse la continuité que la persistance vient d'installer.

**Delivery.** Couplets : nonchalants, secs, proches du micro, légèrement
derrière le kick. Refrain : ténor plein, réponses de groupe **après** l'appel.
Couplet 3 (clip 2) : même timbre mais plus dense, plus appuyé — c'est le seul
endroit où le débit se resserre, et il tombe juste après le solo, quand
l'auditeur attend un retour de la voix.

**Mode opératoire dans Suno.**
1. Générer le clip 1 avec son style et ses paroles.
2. Choisir la prise, puis « Extend » à partir de la **fin** du clip 1.
3. Coller le style du clip 2 et ses paroles.
4. Faire un « Get Whole Song » pour recoller les deux et masteriser d'un bloc.

**Marge disponible.** Clip 1 : 268 caractères de style, 3748 de paroles.
Clip 2 : 332 et 4033. Les couplets peuvent être doublés en longueur
sans rien sacrifier ailleurs — c'est le premier endroit où investir.
