import React, { useCallback, useMemo, useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute, type RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Card, Chip, Screen, Tabs, type TabItem } from '@/components/ui';
import { BudgetMeter, CopyBlock } from '@/components/domain';
import { useProjects } from '@/state/ProjectsContext';
import { useGeneration } from '@/state/useGeneration';
import { resultToMarkdown } from '@/services/export/toMarkdown';
import { resultToPlainText } from '@/services/export/toPlainText';
import { excludeConflicts } from '@/domain/styleBuilder';
import { analyseHook } from '@/domain/hookBuilder';
import { ratioLabel } from '@/domain/ratio';
import type { RefineAction } from '@/types';
import { palette, spacing, type } from '@/theme';
import type { RootStackParamList } from '@/navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Rt = RouteProp<RootStackParamList, 'Result'>;

const TABS: TabItem[] = [
  { id: 'prompt', label: 'Prompt Suno' },
  { id: 'lyrics', label: 'Paroles' },
  { id: 'structure', label: 'Structure' },
  { id: 'vocal', label: 'Direction vocale' },
  { id: 'production', label: 'Production' },
  { id: 'variants', label: 'Variantes' },
];

const REFINE: { id: RefineAction; label: string }[] = [
  { id: 'regenerate', label: 'Régénérer' },
  { id: 'better_chorus', label: 'Améliorer le refrain' },
  { id: 'more_commercial', label: 'Plus commercial' },
  { id: 'more_rap', label: 'Plus rap' },
  { id: 'more_melodic', label: 'Plus mélodique' },
  { id: 'add_break', label: 'Ajouter une rupture' },
];

export const ResultScreen: React.FC = () => {
  const nav = useNavigation<Nav>();
  const { projectId, resultId } = useRoute<Rt>().params;
  const { byId, attachResult, setStatus } = useProjects();
  const gen = useGeneration();
  const [tab, setTab] = useState('prompt');
  const [saved, setSaved] = useState(false);

  const project = byId(projectId);
  const result = useMemo(
    () => project?.results.find((r) => r.id === resultId) ?? project?.results[0],
    [project, resultId],
  );

  const refine = useCallback(
    async (action: RefineAction) => {
      if (!project) return;
      const next = await gen.run({ brief: project.brief, scope: 'full', refine: action, previous: result });
      if (next) {
        await attachResult(projectId, next);
        nav.setParams({ projectId, resultId: next.id });
      }
    },
    [project, gen, attachResult, projectId, nav, result],
  );

  const exportAs = useCallback(
    async (format: 'md' | 'txt') => {
      if (!result || !project) return;
      const content =
        format === 'md'
          ? resultToMarkdown(result, project.title)
          : resultToPlainText(result, project.title);
      await Clipboard.setStringAsync(content);
      Alert.alert(
        format === 'md' ? 'Markdown copié' : 'Texte copié',
        'Le contenu est dans le presse-papiers, prêt à être collé.',
      );
    },
    [result, project],
  );

  if (!project || !result) {
    return (
      <Screen>
        <Text style={[type.body, { color: palette.textMuted }]}>Résultat introuvable.</Text>
      </Screen>
    );
  }

  const hookAnalysis = analyseHook(result.hook);
  const conflicts = excludeConflicts(result.stylePrompt, project.brief);

  return (
    <Screen padded={false}>
      <View style={styles.head}>
        <Text style={[type.title, { color: palette.text }]}>{project.title}</Text>
        {result.isDemo ? (
          <Text style={[type.caption, { color: palette.warning }]}>
            Mode démonstration — généré localement à partir de votre brief.
          </Text>
        ) : null}
        <BudgetMeter label="Champ de style" used={result.budget.styleChars} limit={result.budget.styleLimit} />
        <BudgetMeter label="Champ de paroles" used={result.budget.lyricsChars} limit={result.budget.lyricsLimit} />
        <Text style={[type.caption, { color: palette.textFaint }]}>
          Ratio hook / couplets : {result.hookVerseRatio} — {ratioLabel(result.hookVerseRatio)}
        </Text>
      </View>

      <Tabs items={TABS} active={tab} onChange={setTab} />

      <View style={styles.body}>
        {tab === 'prompt' ? (
          <>
            <CopyBlock title="Style of Music (anglais)" content={result.stylePrompt} />
            <CopyBlock title="Exclude Styles" content={result.excludeBlock} />
            <Card style={styles.note}>
              <Text style={[type.caption, { color: result.budget.fallbackPossible ? palette.textMuted : palette.warning }]}>
                {result.budget.fallbackPossible
                  ? `Mode replié possible : ${result.budget.styleWithExclude} / ${result.budget.styleLimit} si vous recollez les exclusions à la fin du style.`
                  : `Champ dédié obligatoire : recollé, le style atteindrait ${result.budget.styleWithExclude} / ${result.budget.styleLimit}.`}
              </Text>
              {conflicts.map((c) => (
                <Text key={c} style={[type.caption, { color: palette.textFaint }]}>• {c}</Text>
              ))}
            </Card>
          </>
        ) : null}

        {tab === 'lyrics' ? (
          <>
            <CopyBlock title="Paroles complètes" content={result.lyrics} />
            <Card style={styles.note}>
              <Text style={[type.label, { color: palette.text }]}>Hook principal</Text>
              <Text style={[type.mono, { color: palette.text }]} selectable>{result.hook}</Text>
              <Text style={[type.caption, { color: hookAnalysis.isRegular ? palette.success : palette.warning }]}>
                {hookAnalysis.isRegular
                  ? `Squelette régulier : ${hookAnalysis.syllables.join(' / ')} syllabes.`
                  : `Squelette irrégulier : ${hookAnalysis.syllables.join(' / ')} syllabes. Un refrain entraînant a des lignes de même longueur.`}
              </Text>
            </Card>
          </>
        ) : null}

        {tab === 'structure' ? (
          <Card style={styles.note}>
            {result.structure.map((s, i) => (
              <View key={`${s.tag}-${i}`} style={styles.structRow}>
                <Text style={[type.mono, { color: palette.neon, width: 118 }]}>{s.tag}</Text>
                <Text style={[type.caption, { color: palette.textMuted, flex: 1 }]}>{s.role}</Text>
                <Text style={[type.caption, { color: palette.textFaint }]}>{s.bars}</Text>
              </View>
            ))}
          </Card>
        ) : null}

        {tab === 'vocal' ? (
          <Card style={styles.note}>
            {result.vocalDirection.map((v) => (
              <Text key={v} style={[type.body, { color: palette.text }]}>• {v}</Text>
            ))}
          </Card>
        ) : null}

        {tab === 'production' ? (
          <Card style={styles.note}>
            {Object.entries(result.production).map(([k, v]) => (
              <View key={k} style={{ gap: 2 }}>
                <Text style={[type.label, { color: palette.violet }]}>{k}</Text>
                <Text style={[type.body, { color: palette.text }]}>{v}</Text>
              </View>
            ))}
          </Card>
        ) : null}

        {tab === 'variants' ? (
          <>
            <CopyBlock title="Version radio" content={result.variants.radio} />
            <CopyBlock title="Version plus rap" content={result.variants.rap} />
            <CopyBlock title="Version R&B mélodique" content={result.variants.melodic} />
          </>
        ) : null}

        <View style={styles.refineBlock}>
          <Text style={[type.label, { color: palette.textMuted }]}>Retoucher</Text>
          <View style={styles.wrapRow}>
            {REFINE.map((r) => (
              <Chip key={r.id} label={r.label} onPress={() => refine(r.id)} />
            ))}
          </View>
          {gen.running ? (
            <Text style={[type.caption, { color: palette.violet }]}>{gen.step}</Text>
          ) : null}
          {gen.error ? (
            <Text style={[type.caption, { color: palette.danger }]}>{gen.error}</Text>
          ) : null}
        </View>

        <Card style={styles.note}>
          <Text style={[type.label, { color: palette.orange }]}>CONSEILS SUNO</Text>
          <Text style={[type.caption, { color: palette.textMuted }]}>À conserver</Text>
          {result.advice.keep.map((x) => (
            <Text key={x} style={[type.caption, { color: palette.text }]}>• {x}</Text>
          ))}
          <Text style={[type.caption, { color: palette.textMuted }]}>À régénérer</Text>
          {result.advice.regenerate.map((x) => (
            <Text key={x} style={[type.caption, { color: palette.text }]}>• {x}</Text>
          ))}
          <Text style={[type.caption, { color: palette.textMuted }]}>Si le refrain manque d’impact</Text>
          {result.advice.ifWeakChorus.map((x) => (
            <Text key={x} style={[type.caption, { color: palette.text }]}>• {x}</Text>
          ))}
        </Card>

        <View style={styles.exportRow}>
          <Button label="Export Markdown" variant="secondary" onPress={() => exportAs('md')} style={{ flex: 1 }} />
          <Button label="Export texte" variant="secondary" onPress={() => exportAs('txt')} style={{ flex: 1 }} />
        </View>
        <Button
          label={saved ? 'Projet sauvegardé ✓' : 'Sauvegarder le projet'}
          onPress={async () => {
            await setStatus(projectId, 'finalise');
            setSaved(true);
          }}
          full
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  head: { paddingHorizontal: spacing.lg, paddingTop: spacing.lg, gap: spacing.sm },
  body: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xxxl, gap: spacing.lg },
  note: { gap: spacing.sm },
  structRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingVertical: 3 },
  refineBlock: { gap: spacing.sm },
  wrapRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  exportRow: { flexDirection: 'row', gap: spacing.md },
});
