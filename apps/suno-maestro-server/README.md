# Suno Maestro — serveur proxy IA

Petit serveur Node qui détient la clé du fournisseur et expose une seule route
à l'application mobile. **L'application ne contient aucune clé secrète et ne
parle jamais au fournisseur directement.**

Aucun framework : `node:http` seul. Deux dépendances d'exécution, le SDK
Anthropic et zod.

## Démarrage

```bash
cd apps/suno-maestro-server
npm install
cp .env.example .env        # puis renseignez ANTHROPIC_API_KEY
npm run typecheck
npm start                   # http://localhost:8787
```

Puis, côté application :

```bash
# apps/suno-maestro/.env
EXPO_PUBLIC_AI_BASE_URL=http://192.168.1.42:8787
```

L'adresse doit être joignable **depuis le téléphone**, donc l'IP de la machine
sur le réseau local — `localhost` désigne le téléphone lui-même.

## Configuration

| Variable | Rôle |
|---|---|
| `ANTHROPIC_API_KEY` | **Obligatoire.** Le serveur refuse de démarrer sans elle |
| `PORT` | Port d'écoute, 8787 par défaut |
| `ALLOWED_ORIGINS` | Origines CORS autorisées, séparées par des virgules. Vide = tout ouvert, **développement seulement** |
| `CLIENT_TOKEN` | Jeton partagé optionnel. S'il est défini, l'app doit envoyer `Authorization: Bearer <jeton>`. Ce n'est pas la clé du fournisseur |
| `RATE_LIMIT_RPM` | Requêtes par minute et par IP, 20 par défaut |

Le serveur affiche un avertissement au démarrage si `ALLOWED_ORIGINS` ou
`CLIENT_TOKEN` est vide. Ces deux valeurs doivent être renseignées avant toute
exposition publique.

## Routes

### `GET /health`
`200 {"ok": true, "model": "claude-opus-5"}`

### `POST /generate`

```jsonc
// requête
{ "brief": "…", "scope": "…", "refine": null, "raw": { /* Brief */ } }
```

Réponse : un `GenerationResult` **sans** `budget` ni `hookVerseRatio` —
l'application les recalcule sur le texte reçu. Une contrainte dure ne se délègue
pas à un compteur distant.

| Code | Cas | Rejouable |
|---|---|---|
| 200 | Succès | — |
| 400 | Corps invalide (détail zod) ou requête refusée par le fournisseur | non |
| 401 | `CLIENT_TOKEN` défini et jeton absent ou faux | non |
| 422 | Le modèle a décliné la demande | non |
| 429 | Limite de débit locale | oui |
| 500 | Clé du fournisseur invalide, ou erreur interne | non / oui |
| 502 | Réponse du fournisseur inexploitable | oui |
| 503 | Trois tentatives épuisées | oui |

Le champ `retryable` accompagne chaque erreur : c'est lui que l'application lit
pour décider d'afficher « Réessayer ».

## Choix techniques

**Sorties structurées plutôt que parsing de texte.** `client.messages.parse()`
avec un schéma zod : le modèle renvoie directement l'objet attendu, validé. Pas
d'extraction de JSON dans une réponse en prose.

**Le prompt système est côté serveur.** Les règles de contenu — paroles
originales, aucune reproduction d'œuvre existante, aucun nom d'artiste dans le
champ de style, limites 1000 / 5000 — ne dépendent pas de ce que le client
envoie. Une application modifiée ne peut pas les désactiver.

**Il est aussi mis en cache.** `cache_control: {type: 'ephemeral'}` sur le bloc
système figé : il est identique à chaque requête, donc c'est exactement le cas
que le cache de préfixe sert.

**Reprises ciblées.** Trois tentatives avec recul exponentiel, mais **uniquement**
sur les erreurs rejouables — limite de débit, coupure réseau, 5xx. Une clé
invalide ou une requête malformée échoue immédiatement : réessayer ne changerait
rien.

**Aucun détail interne renvoyé au client.** Les erreurs inattendues sont
journalisées côté serveur et renvoyées comme « Erreur interne » — un message
d'exception peut contenir des éléments de configuration.

**`erasableSyntaxOnly` est activé.** Le serveur tourne via le mode strip-only de
Node, qui refuse toute syntaxe TypeScript exigeant une génération de code. Le
compilateur applique donc la même règle : la contrainte est attrapée au
typecheck, pas au démarrage en production.

## Vérifications effectuées

Démarrage réel et appel des routes :

| Vérification | Résultat |
|---|---|
| `GET /health` | 200, modèle annoncé |
| En-têtes CORS | présents |
| Route inconnue | 404 |
| Préflight `OPTIONS` | 204 |
| Corps sans `brief` | 400 avec le détail zod |
| Limite de débit (quota 3) | 3 passent, les suivantes en 429 |
| Clé invalide | 500 « Clé du fournisseur invalide », **sans fuite de la clé**, et sans reprise |

Le chemin nominal — une génération réelle — n'a **pas** été exécuté : il demande
une vraie clé API et un appel facturé.
