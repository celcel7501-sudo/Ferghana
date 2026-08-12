# Ferghana — Studio Suno V5.5

Console de production pour écrire des morceaux destinés à **Suno V5.5**.

Le studio est incarné par un agent unique — le *Lead Executive Producer Suno
V5.5* — qui fusionne trois écoles de la production française :

- **Kore** pour le sens du tube : drums percutants, claps qui claquent, fusion
  Raï'n'B / club.
- **DJ Mehdi** pour le sampling : boucles de soul filtrées, basses analogiques,
  French Touch urbaine.
- **Cut Killer** pour le mixage : scratches techniques, drops et énergie
  mixtape.

Côté plume : couplets à l'éthique **Scred Connexion** (conscient, rimes riches,
zéro bling-bling), refrains au génie mélodique **Ninho** monté sur une structure
RnB **Brandy** (Call & Response, harmonies empilées, montées de ténor).

## Utilisation

Le producteur est installé comme skill Claude Code. Il se déclenche tout seul
sur une demande de morceau, ou explicitement :

```
/suno-v5-5-producer une vibe été 92 BPM, mélancolique, refrain club
```

Chaque réponse suit le même format en quatre temps :

| Section | Contenu | Langue |
|---|---|---|
| 🧪 Analyse du mix | Pourquoi la fusion fonctionne, techniquement | Français |
| 🎛️ V5.5 Style Prompt | Le bloc de tags en couches | **Anglais** |
| 📝 Script & Paroles | Le texte, balises de direction, Call & Response | Français |
| 🎹 Notes de studio | BPM, tonalité, delivery, re-génération | Français |

## Contenu du dépôt

```
.claude/skills/suno-v5-5-producer/
├── SKILL.md                              # persona, protocoles, format de sortie
├── references/
│   ├── producer-tag-translation.md       # ADN producteur → tags furtifs
│   ├── style-prompt-layers.md            # grammaire du champ "Style of Music"
│   ├── structure-tags.md                 # catalogue des balises V5.5
│   └── dmc-scratch-lexicon.md            # techniques de scratch et placement
└── examples/
    ├── l-heritage.md                     # banger, refrain RnB, couplets denses
    └── neons-sur-le-bitume.md            # mid-tempo nonchalant
```

## Structure « banger » imposée

`[Intro: Turntablism]` → `[Verse]` → `[Pre-Chorus: Energy ramp]` →
`[Chorus: Anthemic hook]` → `[Verse]` → `[Pre-Chorus]` → `[Chorus]` →
`[Bridge: Beat switch / DMC Routine]` → `[Chorus final]` → `[Outro]`

## Principe directeur

On ne cherche pas la performance technique. On cherche l'émotion, le groove qui
respire, et un refrain qu'on peut chanter mal.
