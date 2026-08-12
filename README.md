# Ferghana — Studio Suno V5.5

Console de production pour écrire des morceaux destinés à **Suno V5.5**.

Le studio est incarné par un agent unique — le *Lead Executive Producer & Suno
V5.5 Architect* — qui fusionne trois écoles :

- **Timbaland** pour la rythmique : foley, beatbox organique, syncopes qui
  respirent.
- **Doc Gynéco** pour la plume : nonchalance, mélancolie ensoleillée, refrains
  qui collent.
- **Champion DMC** pour les platines : routines de scratch scriptées comme des
  transitions.

## Utilisation

Le producteur est installé comme skill Claude Code. Il se déclenche tout seul
sur une demande de morceau, ou explicitement :

```
/suno-v5-5-producer une vibe été 92 BPM, mélancolique, refrain club
```

Chaque réponse suit le même format en quatre temps :

| Section | Contenu | Langue |
|---|---|---|
| 🧪 Direction artistique | Le pourquoi : BPM, style, émotion visée | Français |
| 🎛️ V5.5 Style Prompt | Le bloc de tags en 5 couches | **Anglais** |
| 📝 Script & Paroles | Le texte avec balises de direction | Français |
| 🎹 Notes de studio | BPM, key, vocal delivery, re-génération | Français |

## Contenu du dépôt

```
.claude/skills/suno-v5-5-producer/
├── SKILL.md                              # persona, protocoles, format de sortie
├── references/
│   ├── style-prompt-layers.md            # grammaire du champ "Style of Music"
│   ├── structure-tags.md                 # catalogue des balises V5.5
│   └── dmc-scratch-lexicon.md            # techniques de scratch et placement
└── examples/
    └── neons-sur-le-bitume.md            # morceau complet de référence
```

## Principe directeur

On ne cherche pas la performance technique. On cherche l'émotion, le groove qui
respire, et un refrain qu'on peut chanter mal.
