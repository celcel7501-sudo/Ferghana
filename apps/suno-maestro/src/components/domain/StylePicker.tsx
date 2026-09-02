import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { STYLE_FAMILIES } from '@/data/styles';
import { accentFor, palette, spacing, type } from '@/theme';
import { Chip } from '../ui/Chip';

interface Props {
  value: string;
  onChange: (id: string, suggestedBpm: number) => void;
}

export const StylePicker: React.FC<Props> = ({ value, onChange }) => (
  <View style={styles.wrap}>
    <Text style={[type.label, { color: palette.textMuted }]}>Style musical</Text>
    <View style={styles.grid}>
      {STYLE_FAMILIES.map((s, i) => (
        <Chip
          key={s.id}
          label={s.label}
          emoji={s.emoji}
          accent={accentFor(i)}
          selected={s.id === value}
          onPress={() => onChange(s.id, Math.round((s.bpm[0] + s.bpm[1]) / 2))}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrap: { gap: spacing.md },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
});
