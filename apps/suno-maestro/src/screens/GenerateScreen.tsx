import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute, type RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Card, Chip, Screen } from '@/components/ui';
import { useProjects } from '@/state/ProjectsContext';
import { useGeneration } from '@/state/useGeneration';
import { isDemoMode } from '@/services/ai/client';
import type { GenerationScope } from '@/types';
import { palette, spacing, type } from '@/theme';
import type { RootStackParamList } from '@/navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Rt = RouteProp<RootStackParamList, 'Generate'>;

const SCOPES: { id: GenerationScope; label: string; hint: string }[] = [
  { id: 'full', label: 'Pack complet', hint: 'Tout : direction, prompt, structure, paroles, production' },
  { id: 'prompt', label: 'Prompt Suno seulement', hint: 'Champ de style + bloc d’exclusion' },
  { id: 'lyrics', label: 'Paroles complètes', hint: 'Texte balisé, prêt à coller' },
  { id: 'hook', label: 'Refrain et hook', hint: 'Hook principal + trois variantes' },
  { id: 'structure', label: 'Structure', hint: 'Sections et nombre de mesures' },
  { id: 'vocal', label: 'Direction vocale', hint: 'Placement, débit, ad-libs' },
  { id: 'production', label: 'Arrangement', hint: 'Batterie, basse, effets, scratches' },
];

export const GenerateScreen: React.FC = () => {
  const nav = useNavigation<Nav>();
  const { projectId, scope: initial } = useRoute<Rt>().params;
  const { byId, attachResult } = useProjects();
  const project = byId(projectId);
  const [scope, setScope] = useState<GenerationScope>(initial ?? 'full');
  const gen = useGeneration();

  if (!project) {
    return (
      <Screen>
        <Text style={[type.body, { color: palette.textMuted }]}>Projet introuvable.</Text>
      </Screen>
    );
  }

  const launch = async () => {
    const result = await gen.run({ brief: project.brief, scope });
    if (result) {
      await attachResult(projectId, result);
      nav.navigate('Result', { projectId, resultId: result.id });
    }
  };

  return (
    <Screen
      footer={
        <Button
          label={gen.running ? 'Génération en cours…' : 'Générer mon morceau'}
          icon="✦"
          onPress={launch}
          loading={gen.running}
          full
        />
      }
    >
      <Text style={[type.title, { color: palette.text }]}>Que veux-tu générer ?</Text>

      <View style={styles.list}>
        {SCOPES.map((s) => (
          <Card
            key={s.id}
            onPress={() => setScope(s.id)}
            accent={scope === s.id ? palette.violet : undefined}
            accessibilityLabel={s.label}
            style={scope === s.id ? styles.selected : undefined}
          >
            <View style={styles.scopeRow}>
              <View style={styles.scopeText}>
                <Text style={[type.bodyStrong, { color: palette.text }]}>{s.label}</Text>
                <Text style={[type.caption, { color: palette.textMuted }]}>{s.hint}</Text>
              </View>
              <Text style={{ fontSize: 18, color: scope === s.id ? palette.violet : palette.textFaint }}>
                {scope === s.id ? '●' : '○'}
              </Text>
            </View>
          </Card>
        ))}
      </View>

      {gen.running ? (
        <Card style={styles.progress}>
          <ActivityIndicator color={palette.violet} />
          <Text style={[type.body, { color: palette.text }]}>{gen.step}</Text>
          <Text style={[type.caption, { color: palette.textFaint }]}>
            {isDemoMode() ? 'Générateur local (mode démonstration).' : 'Appel de votre serveur.'}
          </Text>
        </Card>
      ) : null}

      {gen.error ? (
        <Card style={[styles.progress, { borderColor: palette.danger + '66' }]}>
          <Text style={[type.bodyStrong, { color: palette.danger }]}>Échec de la génération</Text>
          <Text style={[type.caption, { color: palette.textMuted }]}>{gen.error}</Text>
          {gen.retryable ? (
            <Chip label="Réessayer" onPress={launch} selected />
          ) : (
            <Text style={[type.caption, { color: palette.textFaint }]}>
              Vérifiez la configuration du serveur avant de relancer.
            </Text>
          )}
        </Card>
      ) : null}
    </Screen>
  );
};

const styles = StyleSheet.create({
  list: { gap: spacing.md },
  selected: { backgroundColor: palette.surfaceRaised },
  scopeRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  scopeText: { flex: 1, gap: 2 },
  progress: { gap: spacing.sm, alignItems: 'flex-start' },
});
