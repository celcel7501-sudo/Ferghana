import React, { useMemo, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Card, Chip, EmptyState, Screen } from '@/components/ui';
import { ProjectCard } from '@/components/domain';
import { useProjects } from '@/state/ProjectsContext';
import { styleById } from '@/data/styles';
import type { ProjectStatus } from '@/types';
import { accentFor, palette, radius, spacing, type } from '@/theme';
import type { RootStackParamList } from '@/navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const FILTERS: { id: ProjectStatus | 'tous'; label: string }[] = [
  { id: 'tous', label: 'Tous' },
  { id: 'brouillon', label: 'Brouillons' },
  { id: 'genere', label: 'Générés' },
  { id: 'finalise', label: 'Finalisés' },
];

export const LibraryScreen: React.FC = () => {
  const nav = useNavigation<Nav>();
  const { projects, remove, duplicate, loading } = useProjects();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<ProjectStatus | 'tous'>('tous');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (filter !== 'tous' && p.status !== filter) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        styleById(p.styleId).label.toLowerCase().includes(q) ||
        p.brief.story.toLowerCase().includes(q)
      );
    });
  }, [projects, query, filter]);

  const confirmDelete = (id: string, title: string) => {
    Alert.alert('Supprimer ce projet ?', `« ${title} » sera définitivement supprimé.`, [
      { text: 'Annuler', style: 'cancel' },
      { text: 'Supprimer', style: 'destructive', onPress: () => void remove(id) },
    ]);
  };

  return (
    <Screen>
      <Text style={[type.title, { color: palette.text }]}>Bibliothèque</Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Rechercher un titre, un style, un thème…"
        placeholderTextColor={palette.textFaint}
        accessibilityLabel="Rechercher un projet"
        style={[type.body, styles.search]}
      />

      <View style={styles.filters}>
        {FILTERS.map((f) => (
          <Chip key={f.id} label={f.label} selected={filter === f.id} onPress={() => setFilter(f.id)} />
        ))}
      </View>

      {loading ? (
        <Text style={[type.caption, { color: palette.textFaint }]}>Chargement…</Text>
      ) : filtered.length === 0 ? (
        <EmptyState
          emoji="🎚️"
          title={projects.length === 0 ? 'Aucun projet' : 'Aucun résultat'}
          body={
            projects.length === 0
              ? 'Créez votre premier morceau pour le retrouver ici.'
              : 'Aucun projet ne correspond à cette recherche.'
          }
          actionLabel={projects.length === 0 ? 'Créer un morceau' : undefined}
          onAction={projects.length === 0 ? () => nav.navigate('Brief', {}) : undefined}
        />
      ) : (
        filtered.map((p, i) => (
          <View key={p.id} style={styles.item}>
            <ProjectCard
              project={p}
              accent={accentFor(i)}
              onPress={() => setOpenId(openId === p.id ? null : p.id)}
            />
            {openId === p.id ? (
              <Card style={styles.actions}>
                <Button
                  label={p.results.length ? 'Ouvrir le résultat' : 'Générer'}
                  variant="secondary"
                  onPress={() =>
                    p.results[0]
                      ? nav.navigate('Result', { projectId: p.id, resultId: p.results[0].id })
                      : nav.navigate('Generate', { projectId: p.id })
                  }
                  full
                />
                <Button label="Modifier le brief" variant="ghost" onPress={() => nav.navigate('Brief', { projectId: p.id })} full />
                <Button label="Dupliquer" variant="ghost" onPress={() => void duplicate(p.id)} full />
                <Button label="Supprimer" variant="danger" onPress={() => confirmDelete(p.id, p.title)} full />
              </Card>
            ) : null}
          </View>
        ))
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  search: {
    minHeight: 52, color: palette.text, backgroundColor: palette.surface,
    borderWidth: 1, borderColor: palette.border, borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
  },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  item: { gap: spacing.sm },
  actions: { gap: spacing.sm, backgroundColor: palette.surfaceRaised },
});
