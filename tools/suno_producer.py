#!/usr/bin/env python3
"""Assemble un morceau Suno V5.5 en deux clips (workflow Extend).

Version durcie du prototype SunoExtendedProducer. Trois différences de fond :

1. Un ADN d'artiste inconnu lève une erreur au lieu d'être recopié tel quel
   dans le champ de style. Le fallback silencieux du prototype injectait le nom
   de l'artiste dans le prompt, ce que le protocole anti-censure interdit.
2. Les séparateurs de clips ne sont jamais dans la charge utile : chaque clip
   est un objet avec son style et ses paroles, prêts à coller.
3. Les limites Suno sont vérifiées à la construction (style 1000, paroles 5000
   par clip), pas découvertes après coup.

Usage:
    python3 tools/suno_producer.py            # construit le morceau de démo
"""

import re
import sys
import unicodedata

LIMITS = {"style": 1000, "lyrics": 5000}
MARGIN_MIN = 50

# ADN d'artiste traduit en tags techniques furtifs. Voir
# references/producer-tag-translation.md pour la méthode et la table complète.
ARTIST_DNA = {
    "timbaland": "syncopated foley percussion, organic mouth-percussion accents, heavy sidechain",
    "daft_punk": "filtered French house, sidechain pumping, rhythmic vocoder, resonant filter sweeps",
    "brandy": "lush multi-layered vocal harmonies, complex R&B vocal runs, panoramic vocal layering",
    "gyneco": "nonchalant poetic urban delivery, melodic slacker flow",
    "kore": "MPC-style swung drums, layered claps on the backbeat, darbuka fills",
    "mehdi": "filtered soul loops, round analog bassline with portamento glides",
    "cut_killer": "mixtape scratch drops, transformer cuts, backspin rewind",
    "ninho": "melodic male tenor rap-singing, catchy sung hook",
    "teddy_riley": "hard swung 16th shuffle, big gated reverb snare, orchestral hit stabs, slap bass line, stabby brass hits",
    "new_jack_swing": "hard swung 16th shuffle, big gated reverb snare, orchestral hit stabs, slap bass line, stabby brass hits",
    "djimi_finger": "dark melancholic piano-driven, hard-hitting MPC drums, cinematic minor-key strings, deep melodic jazz-fusion bass",
    "secteur_a": "dark melancholic piano-driven, hard-hitting MPC drums, cinematic minor-key strings, deep melodic jazz-fusion bass",
    "scred": "gritty authentic flow, conscious street storytelling, unpolished close-mic vocal",
    "darkchild": "stuttering syncopated drum programming, jerky off-grid percussion hits, staccato string stabs, tight muted synth arpeggio, gated vocal chops used as percussion",
    "rodney_jerkins": "stuttering syncopated drum programming, jerky off-grid percussion hits, staccato string stabs, tight muted synth arpeggio, gated vocal chops used as percussion",
    "prestige": "Golden Era hip-hop podcast vibe, radio broadcast atmosphere, radio tuner sweep, vinyl crackle, hard-hitting MPC-60 drums, cinematic minor-key strings",
    "dj_rim_k": "Golden Era hip-hop podcast vibe, radio broadcast atmosphere, radio tuner sweep, vinyl crackle, hard-hitting MPC-60 drums, cinematic minor-key strings",
    # "Rim'K", "Rim K" et "RIMK" ne se normalisent pas pareil (l'apostrophe et
    # l'espace deviennent un underscore) : les deux clés sont nécessaires.
    "rim_k": "Maghrebi-tinged French club rap, fast darbuka and derbouka rolls, mandole and synth-oud lead melody, hijaz scale strings, deep 808 sub bass with long pitch glides",
    "rimk": "Maghrebi-tinged French club rap, fast darbuka and derbouka rolls, mandole and synth-oud lead melody, hijaz scale strings, deep 808 sub bass with long pitch glides",
    "booba": "dark French trap, deep distorted 808 bass with long pitch glides, melodic autotune vocals, cold cavernous reverb",
    "le_duc": "dark French trap, deep distorted 808 bass with long pitch glides, melodic autotune vocals, cold cavernous reverb",
    "rohff": "conscious French rap, dramatic minor-key piano, soulful orchestral strings, raw unpolished delivery",
    "le_padre": "conscious French rap, dramatic minor-key piano, soulful orchestral strings, raw unpolished delivery",
}

TRANSITIONS = {
    "electro": "[Bridge: Beat switch, filter sweep opening, heavy sidechain pump]",
    "hiphop": "[Bridge: Half-time breakdown, deep sub-bass, vinyl scratch routine]",
    "rnb": "[Bridge: Vocal breakdown, piano only, lush harmonies transition]",
}


def dna_key(name):
    """Normalise un nom d'artiste : accents, casse, espaces et tirets."""
    plain = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "_", plain.lower()).strip("_")


def resolve_dna(names):
    """Traduit des noms d'artistes en tags. Lève si un nom est inconnu.

    Ne jamais retomber sur le nom brut : il finirait dans le champ de style et
    ferait échouer la génération.
    """
    tags, unknown = [], []
    for name in names or []:
        key = dna_key(name)
        if key in ARTIST_DNA:
            tags.append(ARTIST_DNA[key])
        else:
            unknown.append(name)
    if unknown:
        raise KeyError(
            f"ADN inconnu : {unknown}. Ajoute-le à ARTIST_DNA plutôt que de "
            f"laisser un nom d'artiste passer dans le champ de style. "
            f"Clés disponibles : {sorted(ARTIST_DNA)}"
        )
    return tags


def build_style(genre, bpm, rhythm=None, artists=None, persistent=None,
                instrumentation=None, vocals=None, stereo=None, solo=False,
                mastering="polished club master, punchy compression, deep round low end"):
    """Assemble le champ Style of Music.

    L'ordre porte la hiérarchie — Suno pondère la tête du prompt — donc le
    mastering passe en dernier et le genre en premier. Pas d'étiquettes de
    couches : elles coûtent ~120 caractères pour rien.
    """
    parts = [f"{genre}, {bpm} BPM"]
    for chunk in (rhythm, *resolve_dna(artists)):
        if chunk:
            parts.append(chunk)
    if persistent:
        parts.append(f"Persistent {persistent} throughout")
    if solo:
        parts.append("virtuoso analog synth solo, Moog-style lead, high resonance")
    for chunk in (instrumentation, vocals, stereo or "ultra-wide stereo field, panoramic vocal layering"):
        if chunk:
            parts.append(chunk)
    parts.append(mastering)
    return ". ".join(p.rstrip(". ") for p in parts) + "."


def call_response(pairs):
    """Rend la syntaxe Call & Response panoramique.

    `pairs` est une liste de (call, response). La réponse est fournie, jamais
    déduite : une réponse efficace est plus courte que l'appel et reprend un mot
    déjà entendu. Renvoyer l'appel en majuscules, comme le faisait le
    prototype, double le coût en caractères et donne un hook mécanique.
    """
    return "\n".join(
        f"(Call: {c.strip()}) Response: [Panoramic Group Vocals: {r.strip()}]"
        for c, r in pairs
    )


class Clip:
    def __init__(self, name, style, lyrics):
        self.name = name
        self.style = style.strip()
        self.lyrics = lyrics.strip()

    def check(self):
        """Renvoie la liste des problèmes de longueur (vide si tout va bien)."""
        problems = []
        for field, text in (("style", self.style), ("lyrics", self.lyrics)):
            left = LIMITS[field] - len(text)
            if left < 0:
                problems.append(f"{self.name}/{field}: dépasse de {-left}")
            elif left < MARGIN_MIN:
                problems.append(f"{self.name}/{field}: marge serrée ({left})")
        return problems

    def report(self):
        lines = [f"=== {self.name} ==="]
        for field, text in (("style", self.style), ("lyrics", self.lyrics)):
            n, lim = len(text), LIMITS[field]
            lines.append(f"  {field:<7} {n:>5} / {lim}  (marge {lim - n})")
        return "\n".join(lines)


def build_track(title, verses, chorus_pairs, style_base, trans_type="hiphop",
                solo_style=None, intro=None, outro=None,
                pre_chorus=None, post_chorus_pairs=None, dmc_routine=None):
    """Construit les deux clips du workflow Extend.

    Chaque clip a son propre champ de paroles, donc son propre budget de 5000
    caractères — c'est tout l'intérêt de découper un morceau long en deux.
    Le style du clip 2 dérive de celui du clip 1 : s'en écarter fait entendre
    la couture au raccord.

    `pre_chorus` et `post_chorus_pairs` sont optionnels mais fortement
    conseillés : une balise de pré-refrain sans texte ne produit qu'une montée
    instrumentale, ce qui gâche la marche la plus efficace vers le hook.
    """
    if len(verses) < 2:
        raise ValueError("Il faut au moins deux couplets pour le clip 1.")

    chorus = call_response(chorus_pairs)
    ramp = ("[Pre-Chorus: Energy ramp, filter opening, snare roll, harmonies appear]\n"
            + pre_chorus.strip()) if pre_chorus else None
    post = ("[Post-Chorus: Chanted club hook, group unison, claps, filter wide open]\n"
            + call_response(post_chorus_pairs)) if post_chorus_pairs else None

    body = [intro or "[Intro: Turntablism routine, vinyl crackle, atmospheric build]"]
    body.append(f"[Verse 1: Nonchalant flow, melodic slacker delivery, dry close-mic]\n"
                f"{verses[0].strip()}")
    if ramp:
        body.append(ramp)
    body.append(f"[Chorus: Anthemic Hook, Tenor rise, call and response, full sidechain]\n{chorus}")
    if post:
        body.append(post)
    body.append(f"[Verse 2: Same flow, warmer, bass glides, claps doubled]\n{verses[1].strip()}")
    if ramp:
        body.append(ramp)
    body.append(f"[Chorus: Same hook, wider panoramic stack, ad-libs hard panned]\n{chorus}")
    clip1 = Clip(f"{title} — CLIP 1", style_base, "\n\n".join(body))

    tail = [TRANSITIONS.get(trans_type, "[Bridge: Beat switch]"),
            "[Solo: Analog synthesizer solo, melodic and complex, filter rising]"]
    if len(verses) > 2:
        tail.append(f"[Verse 3: Intense flow, denser rhymes, drums stripped back]\n"
                    f"{verses[2].strip()}")
    if dmc_routine:
        tail.append(dmc_routine.strip())
    if ramp:
        tail.append(ramp)
    tail.append(f"[Final Chorus: Maximum intensity, 3D vocal wall, tenor up a tone]\n{chorus}")
    if post:
        tail.append(post)
    tail.append(outro or "[Outro: Smooth filter sweep, final vinyl scratch, fading atmosphere]")
    clip2 = Clip(f"{title} — CLIP 2 (Extend)", solo_style or style_base, "\n\n".join(tail))

    return clip1, clip2


DEMO_VERSES = [
    """On vient d'en bas, on vise les étoiles,
C'est pas d'la poésie, c'est un plan.
Ma mère pliait des draps d'hôtel,
Moi j'pliais mes rêves dans un cartable.
Sept heures moins l'quart, la porte qui claque,
Le café froid, la même veste, le même vent.
Elle disait « travaille », elle disait pas « brille »,
J'ai fait les deux, et j'lui dois les deux.
On m'a dit « reste à ta place » —
J'ai demandé laquelle, personne a su répondre.
Alors j'ai pris celle du fond, près d'la fenêtre,
Et j'ai gagné une rangée chaque année.
La cité clignote la nuit comme un tableau d'bord,
Chaque fenêtre allumée, c'est quelqu'un qui tient.
On n'est pas des chiffres au bas d'une étude,
On est les veilleurs, et ce soir on descend.""",
    """Le bitume est froid, nos cœurs sont en feu,
Le contraste, c'est notre climat.
On a appris à danser sur des mauvaises nouvelles :
C'est une technique, pas de l'insouciance.
Y'a ceux qui parlent de nous au journal de vingt heures,
Et y'a nous, qui parlons entre nous, moins fort, plus vrai.
J'ai pas besoin qu'on m'résume ma propre vie,
J'étais là, j'ai signé la présence.
Costume ou survêt', même colonne vertébrale,
On change la coupe, on garde la mesure.
Le respect, ça s'télécharge pas, ça s'use,
Ça s'entretient comme une vieille bagnole.
Si l'ascenseur est en panne depuis vingt ans,
On montera par la cage, par la voix, par la musique.
Et le jour où on arrive en haut, on bloque la porte :
On laisse passer ceux d'en bas, c'est la règle.""",
    """L'héritage est lourd, on porte le flambeau,
Et un flambeau, ça brûle aussi les mains.
J'ai vu des frères s'éteindre avant vingt-cinq ans,
J'écris pour qu'il reste au moins la lumière.
On m'a pas donné d'élite, j'en ai fabriqué une :
C'est ceux qui s'lèvent quand personne les regarde.
Pas de couronne, pas de photo, pas d'annonce,
Juste des gens qui tiennent parole en silence.
La vraie noblesse ici, c'est pas d'être arrivé,
C'est d'avoir tenu quand y'avait rien à tenir.
Y'a des palais qui valent moins qu'un salon de mère,
Y'a des noms connus qui pèsent moins qu'un prénom.
Alors quand la basse tape et qu'la salle décolle,
C'est pas d'la fête, c'est une revanche polie.
On brille dans le noir parce qu'on connaît le noir,
Et le noir, c'est lui qui nous a appris à viser.""",
]

DEMO_CHORUS = [
    ("Ghetto Star", "Ghetto Star"),
    ("On vient d'en bas, on vise plus haut", "Plus haut"),
    ("On brille dans le noir", "Dans le noir"),
    ("Si tu connais le prix, lève les mains", "Lève les mains"),
]

DEMO_PRE_CHORUS = """Lève la tête, la nuit nous connaît (nous connaît)
On a fait le tour du bas, on remonte (on remonte)
Y'a la basse qui compte tous les pas qu'on a faits,
Et le filtre s'ouvre... vas-y, ouvre tout."""

DEMO_POST_CHORUS = [
    ("Élite, élite", "Ceux qui tiennent"),
    ("Élite, élite", "Ceux qui restent"),
]

# Routine complète : chaque passe est une balise séparée. Une routine décrite en
# un seul bloc est jouée comme un effet unique et se termine en deux secondes ;
# découpée en passes, Suno lui accorde ses mesures. Le mot scratché est pris
# dans le refrain — c'est ce qui rattache la routine au morceau au lieu d'en
# faire une démonstration posée par-dessus.
DEMO_DMC = """[DMC Routine: 16 bars, drums to kick and rimshot, bass muted, filter half closed]
[Scratch: two baby scratches on the word "élite", then four transformer cuts]
[Scratch: crab scratch burst on "Ghetto Star", double time over the kick]
[Scratch: two orbits trading bar for bar with the rimshot]
[Scratch: fast scribble, then a full backspin rewind]
[Silence: one bar, everything drops out]"""


def demo():
    base = build_style(
        genre="French club rap over filtered French house",
        bpm=124,
        rhythm="four-on-the-floor, heavy sidechain pumping on every kick, "
               "crisp offbeat hats, layered claps",
        artists=["Daft Punk", "Gyneco", "Brandy"],
        persistent="filtered string riff",
        instrumentation="chopped disco-string sample, round analog bassline with "
                        "portamento glides, Rhodes stabs, brass hits on the drop",
        vocals="male tenor, dry close-mic verses, explosive anthemic hook, "
               "anthemic group vocal responses",
    )
    solo = build_style(
        genre="French club rap over filtered French house",
        bpm=124,
        rhythm="four-on-the-floor, heavy sidechain pumping on every kick, "
               "crisp offbeat hats, layered claps",
        artists=["Daft Punk", "Brandy", "Cut Killer"],
        persistent="filtered string riff",
        instrumentation="chopped disco-string sample, round analog bassline, Rhodes stabs",
        vocals="male tenor, explosive anthemic hook, anthemic group vocal responses",
        solo=True,
    )
    clip1, clip2 = build_track(
        title="L'Élite",
        verses=DEMO_VERSES,
        chorus_pairs=DEMO_CHORUS,
        style_base=base,
        trans_type="electro",
        solo_style=solo,
        pre_chorus=DEMO_PRE_CHORUS,
        post_chorus_pairs=DEMO_POST_CHORUS,
        dmc_routine=DEMO_DMC,
    )

    problems = []
    for clip in (clip1, clip2):
        print(clip.report())
        print(f"\n--- STYLE ---\n{clip.style}\n\n--- LYRICS ---\n{clip.lyrics}\n")
        problems += clip.check()

    if problems:
        print("PROBLÈMES :")
        for p in problems:
            print("  -", p)
        return 1
    print("Les deux clips tiennent dans les limites Suno.")
    return 0


if __name__ == "__main__":
    sys.exit(demo())
