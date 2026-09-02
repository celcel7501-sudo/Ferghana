import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute, type RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Card, Screen } from '@/components/ui';
import { useProjects } from '@/state/ProjectsContext';
import { styleById } from '@/data/styles';
import { ENERGY_LABELS, VOICES } from '@/data/options';
import { buildStructure, estimateSeconds, formatDuration } from '@/domain/lyricsBuilder';
import { palette, spacing, type } from '@/theme';
import type { RootStackParamList } from '@/navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Rt = RouteProp<RootStackParamList, 'Direction'>;

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={[type.caption, { color: palette.textMuted }]}>{label}</Text>
    <Text style={[type.body, { color: palette.text, flex: 1, textAlign: 'right' }]}>{value}</Text>
  </View>
);

export const DirectionScreen: React.FC = () => {
  const nav = useNavigation<Nav>();
  const { projectId } = useRoute<Rt>().params;
  const { byId } = useProjects();
  const project = byId(projectId);

  const structure = useMemo(
    () => (project ? buildStructure(project.brief) : []),
    [project],
  );

  if (!project) {
    return (
      <Screen>
        <Text style={[type.body, { color: palette.textMuted }]}>Projet introuvable.</Text>
      </Screen>
    );
  }

  const b = project.brief;
  const fam = styleById(b.styleId);
  const voice = VOICES.find((v) => v.id === b.voice)?.label ?? b.voice;
  const duration = formatDuration(estimateSeconds(structure, b.bpm));

  return (
    <Screen
      footer={
        <View style={styles.footerRow}>
          <Button label="Modifier" variant="ghost" onPress={() => nav.navigate('Brief', { projectId })} />
          <Button label="Générer" onPress={() => nav.navigate('Generate', { projectId })} style={{ flex: 1 }} />
        </View>
      }
    >
      <Text style={[type.title, { color: palette.text }]}>{project.title}</Text>
      <Text style={[type.body, { color: palette.textMuted }]}>{b.story}</Text>

      <Card style={styles.card}>
        <Text style={[type.label, { color: palette.violet }]}>SYNTHÈSE</Text>
        <Row label="Thème" value={b.title || '—'} />
        <Row label="Ambiance" value={b.emotion || '—'} />
        <Row label="Énergie" value={`${ENERGY_LABELS[b.energy]} (${b.energy}/5)`} />
        <Row label="Public visé" value={b.rapRatio >= 60 ? 'Playlists rap / urbaines' : 'Playlists R&B / pop urbaine'} />
        <Row label="Type de voix" value={voice} />
        <Row label="Palette sonore" value={`${fam.label} · ${b.bpm} BPM`} />
        <Row label="Instruments" value={b.instruments.join(', ') || 'au choix du moteur'} />
        <Row label="Élément persistant" value={b.instruments[0] ?? 'piano'} />
        <Row label="Durée estimée" value={duration} />
      </Card>

      <Card style={styles.card}>
        <Text style={[type.label, { color: palette.orange }]}>INTENTION DU REFRAIN</Text>
        <Text style={[type.body, { color: palette.text }]}>
          Quatre lignes de même longueur syllabique, littérales, sans image.
          {b.choirs ? ' Réponses de groupe placées sur le post-refrain, pas dans le refrain.' : ''}
        </Text>
      </Card>

      <View style={styles.block}>
        <Text style={[type.section, { color: palette.text }]}>Structure recommandée</Text>
        {structure.map((s, i) => (
          <View key={`${s.tag}-${i}`} style={styles.structRow}>
            <Text style={[type.mono, { color: palette.neon, width: 118 }]}>{s.tag}</Text>
            <Text style={[type.caption, { color: palette.textMuted, flex: 1 }]}>{s.role}</Text>
            <Text style={[type.caption, { color: palette.textFaint }]}>{s.bars} mes.</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  card: { gap: spacing.sm },
  row: { flexDirection: 'row', gap: spacing.md, alignItems: 'flex-start' },
  block: { gap: spacing.sm },
  structRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingVertical: 4 },
  footerRow: { flexDirection: 'row', gap: spacing.md },
});
