import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute, type RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Card, Chip, Field, Screen, Stepper, Toggle } from '@/components/ui';
import { StylePicker } from '@/components/domain';
import { useProjects } from '@/state/ProjectsContext';
import { emptyBrief, type Brief } from '@/types';
import { EMOTIONS, ERAS, INSTRUMENTS, LANGUAGES, VOICES, ENERGY_LABELS } from '@/data/options';
import { palette, spacing, type } from '@/theme';
import type { RootStackParamList } from '@/navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Rt = RouteProp<RootStackParamList, 'Brief'>;

const splitList = (s: string): string[] =>
  s.split(/[,\n]/).map((x) => x.trim()).filter(Boolean);

/** Transforme une description libre en brief pre-rempli, sans appeler l'IA. */
const briefFromFreeText = (text: string, base: Brief): Brief => {
  const t = text.toLowerCase();
  const bpmMatch = t.match(/(\d{2,3})\s*bpm/);
  const styleGuess =
    /amapiano|afro/.test(t) ? 'afro_urbain'
      : /drill/.test(t) ? 'drill_melo'
      : /trap/.test(t) ? 'trap_melo'
      : /boom.?bap|old.?school/.test(t) ? 'boom_bap'
      : /r&b|rnb|r'n'b/.test(t) ? 'rnb90'
      : /soul/.test(t) ? 'soul'
      : /funk|disco/.test(t) ? 'funk'
      : /pop/.test(t) ? 'pop_urbaine'
      : 'rap_fr';
  const emotion = EMOTIONS.find((e) => t.includes(e.toLowerCase())) ?? base.emotion;

  return {
    ...base,
    story: text.trim(),
    styleId: styleGuess,
    emotion,
    bpm: bpmMatch?.[1] ? Number(bpmMatch[1]) : base.bpm,
    scratches: /scratch|platine|dj/.test(t),
    choirs: /ch(oe|œ)ur|choir|harmonie/.test(t) || base.choirs,
  };
};

export const BriefScreen: React.FC = () => {
  const nav = useNavigation<Nav>();
  const route = useRoute<Rt>();
  const { create, byId, update } = useProjects();

  const existing = route.params?.projectId ? byId(route.params.projectId) : undefined;
  const [brief, setBrief] = useState<Brief>(existing?.brief ?? emptyBrief());
  const [quickMode, setQuickMode] = useState(false);
  const [freeText, setFreeText] = useState('');
  const [instrumentsText, setInstrumentsText] = useState(brief.instruments.join(', '));
  const [keywordsText, setKeywordsText] = useState(brief.keywords.join(', '));
  const [avoidText, setAvoidText] = useState(brief.avoid.join(', '));
  const [touched, setTouched] = useState(false);

  const set = <K extends keyof Brief>(k: K, v: Brief[K]) =>
    setBrief((b) => ({ ...b, [k]: v }));

  const titleError = useMemo(
    () => (touched && !brief.title.trim() ? 'Donnez un titre ou un thème.' : null),
    [touched, brief.title],
  );
  const storyError = useMemo(
    () => (touched && brief.story.trim().length < 10 ? 'Décrivez l’histoire en une phrase au moins.' : null),
    [touched, brief.story],
  );

  const valid = brief.title.trim().length > 0 && brief.story.trim().length >= 10;

  const submit = async () => {
    setTouched(true);
    if (!valid) return;
    const finalBrief: Brief = {
      ...brief,
      instruments: splitList(instrumentsText),
      keywords: splitList(keywordsText),
      avoid: splitList(avoidText),
    };
    if (existing) {
      await update({ ...existing, title: finalBrief.title, styleId: finalBrief.styleId, brief: finalBrief });
      nav.navigate('Direction', { projectId: existing.id });
    } else {
      const p = await create(finalBrief);
      nav.navigate('Direction', { projectId: p.id });
    }
  };

  return (
    <Screen
      footer={
        <Button
          label={existing ? 'Enregistrer le brief' : 'Valider le brief'}
          onPress={submit}
          disabled={touched && !valid}
          full
        />
      }
    >
      <View style={styles.modeRow}>
        <Chip label="Brief détaillé" selected={!quickMode} onPress={() => setQuickMode(false)} />
        <Chip label="Brief rapide" selected={quickMode} onPress={() => setQuickMode(true)} emoji="⚡" />
      </View>

      {quickMode ? (
        <Card style={styles.gap}>
          <Text style={[type.label, { color: palette.textMuted }]}>Décrivez votre idée librement</Text>
          <Field
            label=""
            value={freeText}
            onChangeText={setFreeText}
            multiline
            placeholder="Ex : un morceau nostalgique sur un message qu'on n'a jamais envoyé, boom bap 92 BPM, refrain chanté, scratches à l'intro"
            hint="Le style, le tempo, les chœurs et les scratches sont détectés automatiquement."
          />
          <Button
            label="Transformer en brief complet"
            variant="secondary"
            onPress={() => {
              const b = briefFromFreeText(freeText, brief);
              setBrief(b);
              setQuickMode(false);
            }}
            disabled={freeText.trim().length < 10}
            full
          />
        </Card>
      ) : null}

      <Field
        label="Titre ou thème"
        value={brief.title}
        onChangeText={(v) => set('title', v)}
        placeholder="Dernier message"
        error={titleError}
      />
      <Field
        label="L’histoire ou le message"
        value={brief.story}
        onChangeText={(v) => set('story', v)}
        multiline
        placeholder="Ce que le morceau raconte, en quelques phrases."
        error={storyError}
      />

      <View style={styles.gap}>
        <Text style={[type.label, { color: palette.textMuted }]}>Émotion principale</Text>
        <View style={styles.wrapRow}>
          {EMOTIONS.map((e) => (
            <Chip key={e} label={e} selected={brief.emotion === e} onPress={() => set('emotion', e)} />
          ))}
        </View>
      </View>

      <StylePicker
        value={brief.styleId}
        onChange={(id, bpm) => setBrief((b) => ({ ...b, styleId: id, bpm }))}
      />

      <View style={styles.gap}>
        <Text style={[type.label, { color: palette.textMuted }]}>Époque ou influence</Text>
        <View style={styles.wrapRow}>
          {ERAS.map((e) => (
            <Chip key={e} label={e} selected={brief.era === e} onPress={() => set('era', e)} />
          ))}
        </View>
      </View>

      <Stepper label="Tempo" value={brief.bpm} min={60} max={180} step={1} suffix="BPM" onChange={(v) => set('bpm', v)} />

      <View style={styles.gap}>
        <Text style={[type.label, { color: palette.textMuted }]}>Type de voix</Text>
        <View style={styles.wrapRow}>
          {VOICES.map((v) => (
            <Chip key={v.id} label={v.label} selected={brief.voice === v.id} onPress={() => set('voice', v.id)} />
          ))}
        </View>
      </View>

      <View style={styles.gap}>
        <Text style={[type.label, { color: palette.textMuted }]}>Langue</Text>
        <View style={styles.wrapRow}>
          {LANGUAGES.map((l) => (
            <Chip key={l.id} label={l.label} selected={brief.language === l.id} onPress={() => set('language', l.id)} />
          ))}
        </View>
      </View>

      <Stepper
        label={`Énergie — ${ENERGY_LABELS[brief.energy]}`}
        value={brief.energy}
        min={1}
        max={5}
        onChange={(v) => set('energy', v as Brief['energy'])}
      />
      <Stepper
        label={`Rap ${brief.rapRatio}% / Chant ${100 - brief.rapRatio}%`}
        value={brief.rapRatio}
        min={0}
        max={100}
        step={10}
        suffix="% rap"
        onChange={(v) => set('rapRatio', v)}
      />

      <Field
        label="Instruments souhaités"
        value={instrumentsText}
        onChangeText={setInstrumentsText}
        placeholder={INSTRUMENTS.slice(0, 4).join(', ')}
        hint="Séparés par des virgules. Le premier devient l’élément persistant du morceau."
      />

      <Toggle label="Chœurs" value={brief.choirs} onChange={(v) => set('choirs', v)} hint="Harmonies empilées et réponses de groupe." />
      <Toggle label="Scratches / DJ" value={brief.scratches} onChange={(v) => set('scratches', v)} hint="Platines à l’intro et à l’outro." />

      <Field
        label="Mots ou images à intégrer"
        value={keywordsText}
        onChangeText={setKeywordsText}
        placeholder="la boîte vocale, minuit"
        hint="Le premier mot-clé alimente le hook."
      />
      <Field
        label="À éviter"
        value={avoidText}
        onChangeText={setAvoidText}
        placeholder="autotune agressif"
        hint="Alimente le bloc d’exclusion, après vérification des contradictions."
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  modeRow: { flexDirection: 'row', gap: spacing.sm },
  gap: { gap: spacing.md },
  wrapRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
});
