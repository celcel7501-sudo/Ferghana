import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { palette, radius, spacing, type } from '@/theme';

interface Props {
  label: string;
  selected?: boolean;
  onPress: () => void;
  emoji?: string;
  accent?: string;
}

export const Chip: React.FC<Props> = ({ label, selected, onPress, emoji, accent }) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityState={{ selected: !!selected }}
    accessibilityLabel={label}
    style={({ pressed }) => [
      styles.chip,
      selected && { backgroundColor: (accent ?? palette.violet) + '22', borderColor: accent ?? palette.violet },
      pressed && { opacity: 0.8 },
    ]}
  >
    <Text style={[type.label, { color: selected ? palette.text : palette.textMuted }]}>
      {emoji ? `${emoji}  ` : ''}{label}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  chip: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.surface,
  },
});
