import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette, spacing, type } from '@/theme';
import { Button } from './Button';

interface Props {
  emoji: string;
  title: string;
  body: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<Props> = ({ emoji, title, body, actionLabel, onAction }) => (
  <View style={styles.wrap}>
    <Text style={styles.emoji}>{emoji}</Text>
    <Text style={[type.section, { color: palette.text, textAlign: 'center' }]}>{title}</Text>
    <Text style={[type.body, { color: palette.textMuted, textAlign: 'center' }]}>{body}</Text>
    {actionLabel && onAction ? <Button label={actionLabel} onPress={onAction} /> : null}
  </View>
);

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', gap: spacing.md, paddingVertical: spacing.xxxl },
  emoji: { fontSize: 40 },
});
