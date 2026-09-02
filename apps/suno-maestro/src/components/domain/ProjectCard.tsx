import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Project } from '@/types';
import { styleById } from '@/data/styles';
import { palette, spacing, type } from '@/theme';
import { Card } from '../ui/Card';

const STATUS_COLOR: Record<Project['status'], string> = {
  brouillon: palette.textFaint,
  genere: palette.neon,
  finalise: palette.success,
};

const formatDate = (iso: string): string => {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
};

interface Props {
  project: Project;
  onPress: () => void;
  accent?: string;
}

export const ProjectCard: React.FC<Props> = ({ project, onPress, accent }) => {
  const fam = styleById(project.styleId);
  return (
    <Card onPress={onPress} accent={accent} accessibilityLabel={`Projet ${project.title}`}>
      <View style={styles.row}>
        <Text style={styles.emoji}>{fam.emoji}</Text>
        <View style={styles.body}>
          <Text style={[type.bodyStrong, { color: palette.text }]} numberOfLines={1}>
            {project.title}
          </Text>
          <Text style={[type.caption, { color: palette.textMuted }]}>
            {fam.label} · {project.brief.bpm} BPM · {formatDate(project.createdAt)}
          </Text>
        </View>
        <View style={styles.status}>
          <View style={[styles.dot, { backgroundColor: STATUS_COLOR[project.status] }]} />
          <Text style={[type.caption, { color: STATUS_COLOR[project.status] }]}>
            {project.status}
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  emoji: { fontSize: 26 },
  body: { flex: 1, gap: 2 },
  status: { alignItems: 'flex-end', gap: 4 },
  dot: { width: 8, height: 8, borderRadius: 4 },
});
