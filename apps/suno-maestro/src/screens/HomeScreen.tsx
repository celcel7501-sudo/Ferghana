import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Card, Screen } from '@/components/ui';
import { ProjectCard } from '@/components/domain';
import { useProjects } from '@/state/ProjectsContext';
import { STYLE_FAMILIES } from '@/data/styles';
import { accentFor, palette, radius, spacing, type } from '@/theme';
import { isDemoMode } from '@/services/ai/client';
import type { RootStackParamList } from '@/navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export const HomeScreen: React.FC = () => {
  const nav = useNavigation<Nav>();
  const { projects, loading } = useProjects();
  const recent = projects.slice(0, 3);

  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={[type.caption, { color: palette.violet, letterSpacing: 1.5 }]}>
          SUNO MAESTRO
        </Text>
        <Text style={[type.display, { color: palette.text }]}>
          Transforme une idée{'\n'}en morceau mémorable.
        </Text>
        <Text style={[type.body, { color: palette.textMuted }]}>
          Brief, prompt Suno mesuré au caractère près, paroles originales,
          structure et direction vocale — en une passe.
        </Text>
      </View>

      {isDemoMode() ? (
        <Card style={styles.demoBanner}>
          <Text style={[type.label, { color: palette.warning }]}>Mode démonstration</Text>
          <Text style={[type.caption, { color: palette.textMuted }]}>
            Aucune IA distante n’est appelée. Les résultats sont produits par le générateur
            local, à partir de votre brief. Renseignez EXPO_PUBLIC_AI_BASE_URL pour brancher
            votre serveur.
          </Text>
        </Card>
      ) : null}

      <Button
        label="Créer un morceau"
        icon="✦"
        onPress={() => nav.navigate('Brief', {})}
        full
      />

      <View style={styles.block}>
        <Text style={[type.section, { color: palette.text }]}>Mes projets récents</Text>
        {loading ? (
          <Text style={[type.caption, { color: palette.textFaint }]}>Chargement…</Text>
        ) : recent.length === 0 ? (
          <Text style={[type.caption, { color: palette.textFaint }]}>
            Aucun projet pour l’instant.
          </Text>
        ) : (
          recent.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              accent={accentFor(i)}
              onPress={() => nav.navigate('Direction', { projectId: p.id })}
            />
          ))
        )}
      </View>

      <View style={styles.block}>
        <Text style={[type.section, { color: palette.text }]}>Démarrage rapide</Text>
        <View style={styles.quickGrid}>
          {STYLE_FAMILIES.slice(0, 6).map((s, i) => (
            <Card
              key={s.id}
              accent={accentFor(i)}
              style={styles.quickCard}
              onPress={() => nav.navigate('Brief', {})}
              accessibilityLabel={`Créer un morceau ${s.label}`}
            >
              <Text style={styles.quickEmoji}>{s.emoji}</Text>
              <Text style={[type.label, { color: palette.text }]} numberOfLines={1}>
                {s.label}
              </Text>
              <Text style={[type.caption, { color: palette.textFaint }]}>
                {s.bpm[0]}–{s.bpm[1]} BPM
              </Text>
            </Card>
          ))}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  hero: { gap: spacing.sm, paddingTop: spacing.md },
  demoBanner: { gap: spacing.xs, borderColor: palette.warning + '55' },
  block: { gap: spacing.md },
  quickGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  quickCard: { width: '47%', gap: spacing.xs, borderRadius: radius.md },
  quickEmoji: { fontSize: 22 },
});
