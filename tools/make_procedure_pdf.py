#!/usr/bin/env python3
"""Génère la procédure de production du studio au format PDF.

Usage:
    python3 tools/make_procedure_pdf.py [chemin_de_sortie]

Le contenu est la mise en forme imprimable du protocole décrit dans
.claude/skills/suno-v5-5-producer/. Les deux sources doivent rester
cohérentes : si le protocole change, régénérer le PDF.

Glyphes — les polices intégrées de ReportLab sont en WinAnsi. Vérifié par
rendu : les accents, « », —, • et → passent ; la case à cocher U+25A1 sort en
carré noir plein, donc les cases de la checklist sont dessinées et non écrites.
Aucun emoji nulle part, pour la même raison.
"""

import sys

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle,
)

ENCRE = colors.HexColor("#12161C")
ACCENT = colors.HexColor("#B03A2E")
GRIS = colors.HexColor("#5B646E")
FOND = colors.HexColor("#F2F0EC")
FILET = colors.HexColor("#C9C4BC")

TITRE = "Procédure de production Suno V5.5"
SOUS_TITRE = "Protocole Platinum — Studio Ferghana"


def styles_du_document():
    s = getSampleStyleSheet()
    s.add(ParagraphStyle("Titre1", parent=s["Normal"], fontName="Helvetica-Bold",
                         fontSize=28, leading=32, textColor=ENCRE,
                         alignment=TA_CENTER, spaceAfter=6))
    s.add(ParagraphStyle("SousTitre", parent=s["Normal"], fontName="Helvetica",
                         fontSize=13, leading=17, textColor=GRIS,
                         alignment=TA_CENTER, spaceAfter=28))
    s.add(ParagraphStyle("Chapitre", parent=s["Normal"], fontName="Helvetica-Bold",
                         fontSize=15.5, leading=19, textColor=ACCENT,
                         spaceBefore=16, spaceAfter=8))
    s.add(ParagraphStyle("Section", parent=s["Normal"], fontName="Helvetica-Bold",
                         fontSize=11.5, leading=15, textColor=ENCRE,
                         spaceBefore=12, spaceAfter=4))
    s.add(ParagraphStyle("Corps", parent=s["Normal"], fontSize=9.8, leading=14,
                         textColor=ENCRE, alignment=TA_JUSTIFY, spaceAfter=6))
    s.add(ParagraphStyle("Puce", parent=s["Corps"], leftIndent=13,
                         bulletIndent=2, spaceAfter=4))
    s.add(ParagraphStyle("Bloc", parent=s["Normal"], fontName="Courier",
                         fontSize=8.3, leading=11.5, textColor=ENCRE,
                         backColor=FOND, borderPadding=6, spaceBefore=4,
                         spaceAfter=8))
    s.add(ParagraphStyle("Note", parent=s["Corps"], fontSize=9, leading=13,
                         textColor=GRIS, leftIndent=10, spaceBefore=2))
    s.add(ParagraphStyle("Cellule", parent=s["Normal"], fontSize=8.6,
                         leading=11.5, textColor=ENCRE))
    s.add(ParagraphStyle("CelluleGras", parent=s["Cellule"],
                         fontName="Helvetica-Bold"))
    return s


S = styles_du_document()


def p(txt, style="Corps"):
    return Paragraph(txt, S[style])


def puces(items):
    return [Paragraph(t, S["Puce"], bulletText="•") for t in items]


def tableau(entetes, lignes, largeurs):
    donnees = [[Paragraph(h, S["CelluleGras"]) for h in entetes]]
    donnees += [[Paragraph(c, S["Cellule"]) for c in ligne] for ligne in lignes]
    t = Table(donnees, colWidths=largeurs, repeatRows=1, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), FOND),
        ("LINEBELOW", (0, 0), (-1, 0), 0.8, FILET),
        ("LINEBELOW", (0, 1), (-1, -2), 0.3, FILET),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def case_a_cocher(cote=3.6 * mm):
    """Case vide construite comme un mini-tableau bordé.

    Le caractère U+25A1 sort en carré noir plein avec les polices intégrées, et
    un dessin via drawOn ne survit pas au découpage du tableau entre deux pages.
    """
    c = Table([[""]], colWidths=[cote], rowHeights=[cote])
    c.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.7, GRIS),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return c


def checklist(items, largeur):
    donnees = [[case_a_cocher(), Paragraph(t, S["Cellule"])] for t in items]
    t = Table(donnees, colWidths=[9 * mm, largeur - 9 * mm], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEBELOW", (0, 0), (-1, -2), 0.3, FILET),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (0, -1), 2),
    ]))
    return t


def pied_de_page(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(GRIS)
    canvas.drawString(20 * mm, 12 * mm, SOUS_TITRE)
    canvas.drawRightString(A4[0] - 20 * mm, 12 * mm, "Page %d" % doc.page)
    canvas.setStrokeColor(FILET)
    canvas.setLineWidth(0.4)
    canvas.line(20 * mm, 15 * mm, A4[0] - 20 * mm, 15 * mm)
    canvas.restoreState()


def contenu():
    L = A4[0] - 40 * mm
    f = []

    # ---------- Couverture ----------
    f.append(Spacer(1, 52 * mm))
    f.append(p(TITRE, "Titre1"))
    f.append(p(SOUS_TITRE, "SousTitre"))
    f.append(tableau(
        ["Ce document répond à", "Réponse courte"],
        [["Comment écrire un morceau pour Suno V5.5 sans perdre la moitié du "
          "prompt en cours de route",
          "Huit étapes, deux champs, deux limites dures, un exemple déroulé"],
         ["Pourquoi une génération part en vrille",
          "Champs tronqués en silence, motifs abandonnés, noms d'artistes filtrés"],
         ["Ce qu'on vérifie avant de coller dans Suno",
          "La checklist en fin de document, et "
          "<font face='Courier'>tools/count.py</font>"]],
        [L * 0.46, L * 0.54]))
    f.append(Spacer(1, 16 * mm))
    f.append(p("Le protocole complet, ses références et cinquante entrées de "
               "référence sont dans le dépôt, sous "
               "<font face='Courier'>.claude/skills/suno-v5-5-producer/</font>. "
               "Ce PDF en est la version imprimable : en cas de divergence, le "
               "dépôt fait foi.", "Note"))
    f.append(PageBreak())

    # ---------- 1 ----------
    f.append(p("1. Vue d'ensemble", "Chapitre"))
    f.append(p("Un morceau se livre en quatre blocs, toujours dans cet ordre. "
               "Les deux seuls qui entrent dans Suno sont le prompt de style et "
               "les paroles ; les deux autres servent à l'humain qui produit."))
    f.append(tableau(
        ["Bloc", "Contenu", "Langue", "Destination"],
        [["Analyse du mix", "Pourquoi la fusion fonctionne, techniquement",
          "Français", "Note de production"],
         ["Style Prompt", "Le bloc de tags en couches", "<b>Anglais</b>",
          "Champ <i>Style of Music</i>"],
         ["Script et paroles", "Texte, balises, call &amp; response", "Français",
          "Champ <i>Lyrics</i>"],
         ["Notes de studio", "BPM, tonalité, delivery, leviers", "Français",
          "Note de production"]],
        [L * 0.20, L * 0.42, L * 0.14, L * 0.24]))
    f.append(Spacer(1, 5))
    f.append(p("Le champ de style est <b>toujours en anglais</b> : Suno lit les "
               "tags anglais bien plus fidèlement. La langue des paroles suit le "
               "brief, avec le français par défaut.", "Note"))

    f.append(p("Les écoles du studio", "Section"))
    f.append(tableau(
        ["École", "Ce qu'elle apporte"],
        [["Timbaland", "Rythmiques qui respirent : foley, beatbox, syncopes"],
         ["Doc Gynéco", "La plume : nonchalance, mélancolie, refrains qui collent"],
         ["DJ Mehdi", "Sampling, basses analogiques, French Touch urbaine"],
         ["Cut Killer / Kore", "Science du mix, scratch, énergie mixtape, sens du tube"],
         ["Djimi Finger", "Architecture Golden Era : piano sombre, cordes, basse jazz-fusion"],
         ["Brandy / Ninho", "Structures vocales : harmonies empilées, hooks mémorables"]],
        [L * 0.26, L * 0.74]))

    # ---------- 2 ----------
    f.append(p("2. Étape 1 — Lire le brief", "Chapitre"))
    f.append(p("Avant d'écrire une ligne, extraire quatre informations. Si l'une "
               "manque, elle se déduit ; si deux manquent, on demande."))
    f.extend(puces([
        "<b>Le genre et le tempo</b> — ou, à défaut, une image et une énergie.",
        "<b>La destination</b> — radio, DJ set, morceau d'album, scène. Elle "
        "décide de la longueur du refrain et de la place du hook.",
        "<b>La voix</b> — homme, femme, duo, foule. Un duo remplit l'espace que "
        "le kick libère ; une foule demande des voyelles ouvertes.",
        "<b>Les références</b> — à traduire immédiatement en tags (étape 2). "
        "Une référence non identifiée ne s'invente pas : on le dit, et on "
        "construit sur la partie certaine du brief.",
    ]))

    # ---------- 3 ----------
    f.append(p("3. Étape 2 — Traduction furtive des ADN", "Chapitre"))
    f.append(p("<b>Ne jamais nommer un artiste dans le champ de style.</b> "
               "C'est filtré, et la génération est perdue. On décrit le geste "
               "sonore, jamais la personne. Seuls les noms de machines et "
               "d'instruments sont autorisés : MPC, Moog, Rhodes, 808, Juno."))
    f.append(tableau(
        ["ADN visé", "Tags furtifs à écrire"],
        [["Timbaland", "syncopated foley percussion, organic mouth-percussion "
                       "accents, heavy sidechain"],
         ["Daft Punk / French Touch", "filtered French house, heavy sidechain "
                                      "pumping, rhythmic vocoder, resonant "
                                      "filter sweeps"],
         ["Brandy", "lush multi-layered vocal harmonies, complex R&amp;B vocal "
                    "runs, panoramic vocal layering"],
         ["Doc Gynéco", "nonchalant poetic urban delivery, melodic slacker flow"],
         ["Djimi Finger / Secteur Ä", "dark melancholic piano-driven, "
                                      "hard-hitting MPC drums, cinematic "
                                      "minor-key strings, deep melodic "
                                      "jazz-fusion bass"],
         ["Kore", "MPC-style swung drums, layered claps on the backbeat, "
                  "darbuka fills"],
         ["DJ Mehdi", "filtered soul loops, round analog bassline with "
                      "portamento glides"],
         ["Cut Killer", "mixtape scratch drops, transformer cuts, backspin rewind"],
         ["Scred Connexion", "gritty authentic flow, conscious street "
                             "storytelling, unpolished close-mic vocal"],
         ["Ninho", "melodic male tenor rap-singing, catchy sung hook"]],
        [L * 0.28, L * 0.72]))
    f.append(Spacer(1, 4))
    f.append(p("Méthode pour un ADN absent de la table : isoler trois gestes — un "
               "rythmique, un harmonique, un de texture — traduire chacun en "
               "groupe nominal anglais court, puis vérifier qu'aucun nom propre "
               "ne subsiste.", "Note"))
    f.append(PageBreak())

    # ---------- 4 ----------
    f.append(p("4. Étape 3 — Construire le champ Style", "Chapitre"))
    f.append(p("L'ordre porte la hiérarchie : Suno pondère la tête du prompt. On "
               "empile les couches dans cet ordre, séparées par des points."))
    f.append(tableau(
        ["Ordre", "Couche", "Exemple"],
        [["1", "Genre précis", "Golden-era French club rap, dark piano-driven boom bap"],
         ["2", "ADN rythmique", "100 BPM, hard-hitting MPC drums, claps on the backbeat"],
         ["3", "Persistance", "Persistent dark piano riff throughout"],
         ["4", "Instrumentation", "jazz-fusion bass with fretless slides, brass stabs"],
         ["5", "Voix", "male tenor, crisp diction, huge crowd chants"],
         ["6", "Spatialisation", "ultra-wide stereo field, panoramic vocal layering"],
         ["7", "Turntablism", "sharp rhythmic turntable cuts, transformer cuts"],
         ["8", "Mastering", "polished radio master, punchy compression"],
         ["9", "Exclusions", "Exclude: no mumble rap, avoid messy mix, …"]],
        [L * 0.08, L * 0.24, L * 0.68]))
    f.append(Spacer(1, 6))
    f.append(p("<b>Pas d'étiquettes de couches dans le champ.</b> Écrire "
               "<font face='Courier'>CORE GENRE:</font> ou "
               "<font face='Courier'>SONIC TEXTURE:</font> coûte environ 120 "
               "caractères et n'apporte rien au modèle. L'ordre suffit."))

    f.append(p("La persistance, en double", "Section"))
    f.append(p("Suno abandonne un motif identitaire dès la première section. "
               "Pour l'en empêcher, il faut <b>les deux déclarations</b> ; une "
               "seule ne tient pas."))
    f.append(Paragraph(
        "Champ de style&nbsp;&nbsp;&nbsp;:&nbsp; Persistent [instrument] throughout<br/>"
        "Tête des paroles&nbsp;:&nbsp; (Instruction: Persistent [instrument] melody)",
        S["Bloc"]))
    f.append(p("<b>Un seul élément persistant par morceau.</b> Deux persistances "
               "se neutralisent : le modèle arbitre et abandonne les deux.", "Note"))

    # ---------- 5 ----------
    f.append(p("5. Étape 4 — Écrire les paroles", "Chapitre"))
    f.append(p("Le squelette minimum d'un banger, dans l'ordre :"))
    f.append(Paragraph(
        "[Intro] &#8594; [Verse] &#8594; [Pre-Chorus: Energy ramp] &#8594; "
        "[Chorus: Explosive Hook] &#8594; [Verse] &#8594; [Pre-Chorus] &#8594; "
        "[Chorus] &#8594; [Bridge / DMC Routine] &#8594; [Chorus final] &#8594; "
        "[Outro]", S["Bloc"]))
    f.extend(puces([
        "<b>Balises enrichies, 60 à 80 caractères.</b> Trois ou quatre "
        "directives, pas six : au-delà, c'est dilué. Une balise nue comme "
        "<font face='Courier'>[Verse]</font> est du gâchis.",
        "<b>Du placement, pas des adjectifs.</b> Une balise efficace dit quel "
        "instrument entre, à quel moment, et ce que fait la voix. Les adjectifs "
        "sont traités comme une ambiance moyenne étalée sur toute la section.",
        "<b>Le refrain est identique à l'écrit</b> entre ses occurrences : c'est "
        "ce qui déclenche la mémoire mélodique. Les variations passent par les "
        "balises et les ad-libs.",
        "<b>Un pré-refrain sans texte</b> ne produit qu'une montée "
        "instrumentale : c'est gâcher la marche la plus efficace vers le hook.",
        "<b>Zéro markdown</b> dans les deux champs. Les astérisques comptent "
        "dans la limite et peuvent être lus comme du texte.",
    ]))

    f.append(p("Call &amp; response", "Section"))
    f.append(Paragraph(
        "(Call: texte lancé par le lead) Response: [Panoramic Group Vocals: "
        "texte renvoyé]", S["Bloc"]))
    f.extend(puces([
        "La réponse tombe <b>après</b> l'appel, jamais dessus : la salle doit "
        "avoir la place de répondre.",
        "La réponse est <b>plus courte</b> que l'appel et reprend un mot déjà "
        "entendu. Renvoyer l'appel en majuscules double le coût pour un hook "
        "mécanique.",
        "<b>Coût : 90 à 110 caractères par ligne</b>, soit environ 1200 sur les "
        "5000 pour trois refrains. À budgéter dès la première ligne.",
        "Variante économique : parenthèses simples, "
        "<font face='Courier'>Automatique (au-to-ma-tique)</font>. Deux fois "
        "moins cher, moins précis pour la spatialisation.",
    ]))
    f.append(Spacer(1, 4))
    f.append(p("<b>Règle de tempo.</b> Au-delà d'environ 110 BPM, la foule n'a "
               "plus le temps de répondre entre deux temps : la réponse doit se "
               "réduire à un mot de deux syllabes. La règle marche dans les deux "
               "sens — ralentir rachète des syllabes.", "Note"))
    f.append(PageBreak())

    # ---------- 6 ----------
    f.append(p("6. Étape 5 — Les exclusions", "Chapitre"))
    f.append(p("Bloc standard, ajouté en fin de champ de style :"))
    f.append(Paragraph(
        "Exclude: no mumble rap, no low-quality recording, no distorted vocals, "
        "avoid messy mix, ensure no audio artifacts, no generic EDM, avoid "
        "over-saturated bass.", S["Bloc"]))
    f.append(p("<b>Coût : 157 caractères</b> sur les 1000. La partie positive "
               "doit donc tenir en 740 environ, pas 900."))

    f.append(p("Deux règles qui évitent les dégâts", "Section"))
    f.extend(puces([
        "<b>Ne jamais exclure ce que le style demande par ailleurs.</b> "
        "<font face='Courier'>no low-quality recording</font> contredit "
        "<font face='Courier'>vinyl crackle</font> ou "
        "<font face='Courier'>cassette-tape saturation</font> : le modèle "
        "arbitre et perd les deux. La liste s'adapte au morceau.",
        "<b>Le champ de style conditionne positivement.</b> Écrire "
        "<font face='Courier'>no distorted vocals</font> met surtout le mot "
        "<i>distorted</i> sous les yeux du modèle. Suno expose un champ dédié "
        "<b>Exclude Styles</b> où ces termes sont plus fiables et ne consomment "
        "pas le budget : l'y coller quand l'interface le permet, et garder le "
        "bloc en fin de prompt comme solution de repli.",
    ]))
    f.append(Spacer(1, 4))
    f.append(p("Chaque exclusion a un jumeau positif, souvent plus efficace et "
               "moins cher :"))
    f.append(tableau(
        ["Exclusion", "Positif équivalent, plus fiable"],
        [["no distorted vocals", "clean close-mic vocal"],
         ["no low-quality recording", "polished radio master"],
         ["avoid messy mix", "spacious mix, clear separation"],
         ["avoid over-saturated bass", "tight controlled low end"],
         ["no mumble rap", "crisp diction, articulate delivery"]],
        [L * 0.42, L * 0.58]))

    f.append(p("Conflits connus, à résoudre avant la génération", "Section"))
    f.append(tableau(
        ["ADN ou registre", "Tag en conflit", "Remplacement"],
        [["Booba / trap saturée", "avoid over-saturated bass", "no cluttered low end"],
         ["Booba / autotune", "no distorted vocals", "no mumble rap, crisp diction"],
         ["Rohff / delivery brut", "no low-quality recording", "polished cinematic master"],
         ["Cut Killer / vinyle", "no low-quality recording", "polished radio master"],
         ["Brandy, New Jack", "no autotune (si ajouté)", "ne jamais l'ajouter ici"],
         ["Chanson acoustique", "avoid thin sounds, club loudness", "avoid over-compression"],
         ["Instrumental", "—", "ajouter no lead vocals, no rapping, no singing"]],
        [L * 0.28, L * 0.36, L * 0.36]))

    f.append(p("Le bloc par défaut de l'identité Prestige", "Section"))
    f.append(p("La signature maison réclame <font face='Courier'>vinyl crackle"
               "</font> et <font face='Courier'>radio broadcast atmosphere"
               "</font>. Le bloc standard contient <font face='Courier'>no "
               "low-quality recording</font> : les deux ne peuvent pas "
               "coexister. Ce n'est pas un conflit ponctuel, c'est un conflit "
               "avec l'identité — donc il se règle une fois pour toutes."))
    f.append(Paragraph(
        "Exclude: no mumble rap, no distorted vocals, avoid messy mix, no audio "
        "artifacts, no generic EDM, no cluttered low end, avoid thin sounds.",
        S["Bloc"]))
    f.append(p("135 caractères, sept exclusions comme le bloc standard, zéro "
               "contradiction. Le jumeau positif de "
               "<font face='Courier'>no low-quality recording</font> part dans "
               "la couche mastering, où il ne se bat contre rien : "
               "<font face='Courier'>polished master under the vinyl grain"
               "</font>.", "Note"))

    # ---------- 7 ----------
    f.append(p("7. Étape 6 — Vérifier les limites", "Chapitre"))
    f.append(tableau(
        ["Champ", "Limite dure", "Cible de rédaction", "Marge minimale"],
        [["Style of Music", "1000 caractères", "environ 900", "50"],
         ["Lyrics (balises comprises)", "5000 caractères", "environ 4850", "50"]],
        [L * 0.32, L * 0.20, L * 0.26, L * 0.22]))
    f.append(Spacer(1, 6))
    f.append(p("<b>Suno tronque en silence ce qui dépasse.</b> On perd le "
               "mastering sur le style, l'outro et parfois le dernier refrain sur "
               "les paroles. Il faut donc mesurer, jamais estimer :"))
    f.append(Paragraph("python3 tools/count.py --style style.txt --lyrics paroles.txt",
                       S["Bloc"]))
    f.append(p("L'outil sort en code 1 si un champ déborde, et signale une marge "
               "inférieure à 50 caractères comme trop serrée.", "Note"))

    f.append(p("Ordre de sacrifice quand ça déborde", "Section"))
    f.append(p("Toujours dans cet ordre, sans exception :"))
    f.append(tableau(
        ["Rang", "Ce qu'on coupe", "Gain typique"],
        [["1", "Balises verbeuses — 150 caractères ramenés à 70", "200 à 280"],
         ["2", "Didascalies trop longues", "20 à 60"],
         ["3", "Outro parlé", "40 à 80"],
         ["4", "Longueur du pont", "50 à 150"],
         ["5", "Refrain final ramené à quatre lignes", "environ 200"],
         ["—", "<b>Jamais les couplets</b>", "—"]],
        [L * 0.10, L * 0.62, L * 0.28]))
    f.append(PageBreak())

    # ---------- 8 ----------
    f.append(p("8. Étape 7 — Morceaux longs (workflow Extend)", "Chapitre"))
    f.append(p("Au-delà d'environ trois minutes, un morceau ne se compresse "
               "pas : il se scinde en deux clips, chacun avec son propre champ "
               "de paroles, donc son propre budget de 5000 caractères."))
    f.extend(puces([
        "<b>Le clip 2 ouvre sur le beat switch</b>, jamais sur un couplet. "
        "Couper sur une rupture déjà attendue par l'oreille cache le raccord "
        "technique ; couper au milieu d'un couplet s'entend toujours.",
        "<b>Le style du clip 2 dérive de celui du clip 1</b> : même genre, même "
        "BPM, même rythmique, même persistance. On n'ajoute que les tags de la "
        "nouvelle section. S'en écarter fait entendre la couture.",
        "<b>La persistance porte la continuité</b> : c'est le motif présent "
        "avant et après la coupure qui fait entendre un morceau, et non deux "
        "titres collés.",
    ]))
    f.append(Spacer(1, 4))
    f.append(p("Assemblage et vérification automatiques :"))
    f.append(Paragraph("python3 tools/suno_producer.py", S["Bloc"]))
    f.append(p("L'outil <b>refuse un nom d'artiste inconnu</b> au lieu de le "
               "recopier dans le champ de style, vérifie les deux limites par "
               "clip, et garde les séparateurs hors de la charge utile.", "Note"))

    f.append(p("Huit raisons de scinder, et une seule à la fois", "Section"))
    f.append(p("La longueur n'est que la première. Chaque morceau long du "
               "dossier scinde pour une raison différente, et cette raison "
               "décide de tout le reste."))
    f.append(tableau(
        ["Raison de la scission", "Ce que porte le clip 2"],
        [["Le texte ne rentre pas", "la suite du morceau"],
         ["Version radio puis version DJ", "breakdown, montée, section instrumentale"],
         ["Maxi 12 pouces", "breakdown et workout basse-batterie de 32 mesures"],
         ["Changement de tempo", "la même chanson à un autre BPM"],
         ["Changement d'instrumentation", "machines sorties, percussions à mains"],
         ["Deux voix lead", "l'autre chanteur, seul dans son prompt"],
         ["Modulation", "la même chanson un ton au-dessus"],
         ["Changement de lieu", "la version live, salle et foule"]],
        [L * 0.42, L * 0.58]))
    f.append(Spacer(1, 6))
    f.append(p("<b>Une seule variable change entre les deux clips</b> — et "
               "« une variable » veut dire un <b>changement perçu</b>, pas un "
               "tag. Une version live modifie six tags (micros de salle, "
               "réverbération commune, foule, compression, flottement, absence "
               "de vernis) mais l'oreille les lit comme une seule information : "
               "on est passé en concert."))
    f.append(p("<b>Test</b> : si tout ce qui change se résume en une phrase de "
               "six mots, c'est une variable. Si la phrase a besoin d'un "
               "« et », c'en est deux — et le raccord s'entendra.", "Note"))

    f.append(p("Le raccord se cache dans un vide", "Section"))
    f.append(p("Toujours un manque de repère, mais pas le même selon ce qui "
               "change. Une seconde suffit — vide <b>de la chose qui va "
               "changer</b>."))
    f.append(tableau(
        ["Ce qui change", "Vide nécessaire", "Outil"],
        [["Le tempo", "rythmique", "batterie coupée, bruit de pièce"],
         ["La tonalité", "harmonique", "montée de bruit blanc, sans hauteur"],
         ["La voix lead", "vocal", "instrument seul, aucune voix"],
         ["Le lieu", "acoustique", "arrêt de bande, puis l'air d'une autre pièce"]],
        [L * 0.22, L * 0.24, L * 0.54]))

    f.append(p("Ce qui est mort dans un prompt de clip 2", "Section"))
    f.append(p("Suno <b>n'entend pas le clip 1</b> quand il génère le clip 2 : "
               "la continuité de voix et de timbre vient de l'audio prolongé, "
               "pas du texte. Toute formule qui référence « avant » est du poids "
               "mort — <font face='Courier'>the same voice as before</font>, "
               "<font face='Courier'>a whole tone higher than before</font>, "
               "<font face='Courier'>as established earlier</font>. Décrire à "
               "nouveau, ou supprimer."))
    f.append(p("Corollaire utile : la tonalité ne s'écrit <b>jamais</b> dans le "
               "champ de style, sauf pour une modulation entre deux clips — et "
               "alors en absolu (<font face='Courier'>in B minor</font>), jamais "
               "en relatif.", "Note"))

    # ---------- 9 ----------
    f.append(p("9. Étape 8 — Coller dans Suno", "Chapitre"))
    f.append(tableau(
        ["Ordre", "Action"],
        [["1", "Coller le prompt de style dans <i>Style of Music</i>. Si "
               "l'interface expose <i>Exclude Styles</i>, y déplacer le bloc "
               "d'exclusions : 157 caractères libérés."],
         ["2", "Coller les paroles dans <i>Lyrics</i>, balises comprises."],
         ["3", "Générer, écouter, et vérifier les points fragiles : motif "
               "persistant toujours présent après l'intro, mesure de silence "
               "conservée, coupure du pont respectée."],
         ["4", "Si un élément manque, appliquer un levier de re-génération "
               "plutôt que de réécrire. Chaque fiche morceau en liste quatre à "
               "six, chiffrés en caractères."],
         ["5", "Morceau long : choisir la prise, puis <i>Extend</i> depuis la "
               "<b>fin</b> du clip 1, et coller le style et les paroles du "
               "clip 2."],
         ["6", "<i>Get Whole Song</i> pour recoller les deux clips et "
               "masteriser d'un bloc."]],
        [L * 0.09, L * 0.91]))

    # ---------- 10 ----------
    f.append(PageBreak())
    f.append(p("10. Objets qui ne sont pas des morceaux", "Chapitre"))

    f.append(p("Le jingle", "Section"))
    f.append(p("Suno n'a <b>pas de réglage de durée</b>. Sur un générique de "
               "moins d'une minute, le risque s'inverse : ce n'est plus la "
               "troncature qu'on craint, c'est le <b>remplissage</b>. Avec un "
               "champ de paroles à moitié vide, Suno invente un couplet pour "
               "meubler. Trois garde-fous, nécessaires ensemble :"))
    f.extend(puces([
        "L'écrire dans le style : <font face='Courier'>under one minute, no "
        "verses, no long instrumental</font>. Une durée en toutes lettres passe "
        "mieux qu'un nombre de mesures.",
        "Fermer les paroles par une balise d'arrêt : "
        "<font face='Courier'>[End: Everything stops dead, hard stop]</font>.",
        "<b>Laisser la marge vide.</b> Remplir les 5000 caractères d'un jingle "
        "revient à lui donner de quoi durer trois minutes. C'est le seul cas du "
        "dossier où viser 4850 serait une faute.",
    ]))
    f.append(Spacer(1, 4))
    f.append(p("Corollaire : sur un objet court, une routine de scratch écrite "
               "dans une seule balise dure deux secondes — soit la moitié du "
               "contenu perdue. La découper en passes n'est plus une "
               "optimisation, c'est une condition.", "Note"))

    f.append(p("L'instrumental", "Section"))
    f.append(p("Sans un mot à écrire, le champ <i>Lyrics</i> sert quand même : "
               "il devient une <b>partition</b>, où chaque balise porte un "
               "nombre de mesures. C'est le seul endroit du système où l'on peut "
               "décrire une chronologie — le champ de style décrit un état "
               "global, sans notion de temps."))
    f.append(Paragraph(
        "[Verse Bed 1: 16 bars, drums, 808 and piano only, no brass, open]",
        S["Bloc"]))
    f.extend(puces([
        "<b>Les comptes de mesures inclinent, ils ne garantissent pas.</b> "
        "Additionner avant de générer : mesures x 4 x 60 / BPM = durée en "
        "secondes. Ce qui dépasse se perd par la fin, donc outro court et "
        "dernier hook placé avant.",
        "<b>Faire taire la voix sans tuer la texture.</b> Un simple "
        "<font face='Courier'>no vocals</font> supprime aussi les chops de soul. "
        "La distinction porte sur la fonction : "
        "<font face='Courier'>wordless chopped vocal texture only, used as "
        "percussion, never as a melody line</font>.",
        "<b>Trois niveaux de densité, jamais quatre.</b> Lits de couplet "
        "pauvres, hooks riches, pont sans batterie. Un instru destiné à être "
        "rappé doit laisser la place — centre du champ stéréo dégagé au-dessus "
        "de 300 Hz.",
    ]))

    # ---------- 11 ----------
    f.append(PageBreak())
    f.append(p("11. Exemple complet, de bout en bout", "Chapitre"))
    f.append(p("Un morceau réel du dossier, déroulé étape par étape : "
               "<b>« Face B »</b>, club R&B commercial rapide sous identité "
               "Prestige. Fiche complète dans "
               "<font face='Courier'>examples/face-b.md</font>."))

    f.append(p("Étape 1 — le brief", "Section"))
    f.append(Paragraph("prestige old school banger commercial club rnb rapide",
                       S["Bloc"]))
    f.append(p("Quatre contraintes : identité Prestige (donc radio, vinyle, "
               "MPC), registre club commercial (donc ratio hook élevé), R&B "
               "(donc voix féminine et harmonies empilées), rapide (donc au "
               "moins 118 BPM).", "Note"))

    f.append(p("Étape 2 — les ADN traduits", "Section"))
    f.append(tableau(
        ["ADN visé", "Tags furtifs retenus"],
        [["Prestige / broadcast",
          "radio tuner sweep, heavy vinyl crackle, warm AM radio compression "
          "on the intro voice"],
         ["Golden Era",
          "sampled MPC-60 kick and snare"],
         ["Brandy",
          "lush stacked harmonies, complex vocal runs, panoramic group vocal "
          "responses"],
         ["Cut Killer",
          "scratched vocal sample stab, used as the hook riff"]],
        [L * 0.26, L * 0.74]))
    f.append(p("Aucun nom propre ne subsiste. La fusion tient en une seule "
               "ligne de production : <font face='Courier'>sampled MPC-60 kick "
               "and snare on a house grid</font> — les sons viennent de 1988, "
               "la grille d'un club d'aujourd'hui.", "Note"))

    f.append(p("Étape 3 — le champ Style, 889 / 1000", "Section"))
    f.append(Paragraph(
        "Commercial French club R&amp;B, fast and glossy. 122 BPM "
        "four-on-the-floor, sampled MPC-60 kick and snare on a house grid, "
        "crisp offbeat hi-hats, layered claps. Persistent scratched vocal "
        "sample stab throughout, used as the hook riff, not as a solo. Filtered "
        "soul-sample chords, round analog bassline with portamento glides, "
        "Rhodes stabs, warm string swell, dark brass stabs, heavy vinyl crackle "
        "under the whole mix. Female R&amp;B lead, silky agile topline, complex "
        "vocal runs, lush stacked harmonies, panoramic group vocal responses. "
        "Deep male radio host voice-over on the intro and outro, spoken not "
        "sung, warm AM radio compression. Ultra-wide stereo field, panoramic "
        "vocal layering. Radio club master, tight round low end, polished under "
        "the vinyl grain. Exclude: no mumble rap, no distorted vocals, avoid "
        "messy mix, no audio artifacts, no generic EDM, no cluttered low end, "
        "avoid thin sounds.",
        S["Bloc"]))
    f.append(p("Ordre des couches, sans étiquettes : genre et BPM, rythmique, "
               "persistance, instrumentation, voix, spatialisation, mastering, "
               "exclusions. Bloc Prestige et non bloc standard, parce que "
               "<font face='Courier'>heavy vinyl crackle</font> interdit "
               "<font face='Courier'>no low-quality recording</font>.", "Note"))

    f.append(p("Étape 4 — les paroles, extrait mesuré à 3920 / 5000", "Section"))
    f.append(Paragraph(
        "[Intro: Radio tuner sweep, vinyl crackle, scratched sample, host "
        "voice-over, no drums]<br/>"
        "(Instruction: Persistent scratched vocal sample stab throughout)<br/>"
        "(voix d'hôte, grave, parlée, compression AM, au centre)<br/>"
        "Prestige Old School. Deux heures du matin.<br/>"
        "On sort la face B.<br/><br/>"
        "[Chorus: Explosive hook, crowd answering wide, full drums, brass, "
        "scratch on top]<br/>"
        "(Call: Retourne-le !) Response: [Panoramic Group Vocals: Face B !]<br/>"
        "(Call: Encore une fois !) Response: [Panoramic Group Vocals: Face B !]"
        "<br/>"
        "Tu connais la face A, tout le monde la connaît,<br/>"
        "Moi je danse sur celle qu'ils passent jamais.<br/><br/>"
        "[Bridge: Turntable stops dead, drums out, stacked a cappella "
        "harmonies, Rhodes]<br/>"
        "(le scratch s'arrête, plus de batterie, harmonies empilées)<br/>"
        "Le disque tourne pas tout seul.",
        S["Bloc"]))
    f.append(p("La persistance est déclarée une deuxième fois en tête des "
               "paroles. Le hook est un <b>ordre exécutable</b> — la salle peut "
               "l'appliquer avec son corps. Et puisque le scratch est le moteur "
               "du morceau, la rupture consiste à <b>l'arrêter</b> : c'est le "
               "seul geste qui s'entende sur un disque déjà saturé de platine.",
               "Note"))

    f.append(p("Étape 5 — la mesure", "Section"))
    f.append(Paragraph(
        "$ python3 tools/count.py --style style.txt --lyrics paroles.txt<br/>"
        "STYLE      889 / 1000  OK (marge 111)<br/>"
        "PAROLES   3920 / 5000  OK (marge 1080)",
        S["Bloc"]))

    f.append(p("Étape 6 — les notes de studio", "Section"))
    f.append(tableau(
        ["Paramètre", "Valeur et raison"],
        [["BPM", "122 — au-dessus de 126 les runs R&amp;B n'ont plus la place ; "
                 "en dessous de 118 on retombe dans le mid-tempo"],
         ["Tonalité", "Do mineur — et l'échantillon gratté est pitché dedans, "
                      "sinon c'est un bruit et pas un riff"],
         ["Delivery", "hôte parlé compressé AM ; chanteuse soyeuse et proche sur "
                      "les couplets, doublée au refrain, runs en fin de ligne"],
         ["Stéréo", "harmonies ouvertes à 30 %, 60 % puis 100 % sur les trois "
                    "refrains ; crépitement large et constant, jamais modulé"],
         ["Ratio hook", "2,18 — neuf sections de hook sur quinze, régime "
                        "commercial sans sacrifier le texte"]],
        [L * 0.18, L * 0.82]))

    # ---------- 12 ----------
    f.append(PageBreak())
    f.append(p("12. Checklist avant livraison", "Chapitre"))
    f.append(p("Aucune livraison sans ces onze vérifications."))
    f.append(checklist([
        "Le champ de style est en anglais, les paroles dans la langue du brief",
        "Aucun nom d'artiste, de marque ou de label dans le champ de style",
        "Un seul élément persistant, déclaré dans les deux champs",
        "Structure complète : intro, pré-refrain écrit, refrain, rupture, "
        "refrain final",
        "Le refrain est identique à l'écrit entre ses occurrences",
        "Bloc d'exclusions présent, et cohérent avec la couche texture",
        "Aucun markdown dans les deux champs",
        "<font face='Courier'>tools/count.py</font> passe, avec au moins 50 "
        "caractères de marge sur chaque champ",
        "Les notes de studio donnent BPM, tonalité, delivery et leviers chiffrés",
        "Morceau long : une seule variable change entre les deux clips, et le "
        "raccord passe par un vide de cette variable",
        "Aucun renvoi à « avant » dans le prompt du clip 2",
    ], L))

    f.append(Spacer(1, 10))
    f.append(p("Les cinquante entrées de référence du dépôt, sous "
               "<font face='Courier'>examples/</font>, servent de calibrage : "
               "chacun porte son prompt de style et ses paroles mesurés, plus "
               "l'explication des choix de production. En cas de doute sur une "
               "densité ou une longueur, comparer avec le morceau du dossier le "
               "plus proche du brief.", "Note"))

    return f


def main(argv):
    sortie = argv[0] if argv else "docs/procedure-suno-v5-5.pdf"
    doc = SimpleDocTemplate(
        sortie, pagesize=A4,
        leftMargin=20 * mm, rightMargin=20 * mm,
        topMargin=18 * mm, bottomMargin=22 * mm,
        title=TITRE, author="Studio Ferghana", subject=SOUS_TITRE,
        # Build reproductible : sans cela ReportLab tamponne un horodatage et un
        # identifiant uniques a chaque execution, et le PDF apparait modifie
        # dans git alors que son contenu est identique au caractere pres.
        invariant=1,
    )
    doc.build(contenu(), onFirstPage=pied_de_page, onLaterPages=pied_de_page)
    print("PDF écrit :", sortie)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
