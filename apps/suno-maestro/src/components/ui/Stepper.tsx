import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing, type } from '@/theme';

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (v: number) => void;
}

/** Curseur tactile simple : deux gros boutons plutot qu'un slider fin au pouce. */
export const Stepper: React.FC<Props> = ({ label, value, min, max, step = 1, suffix, onChange }) => {
  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  return (
    <View style={styles.wrap}>
      <Text style={[type.label, { color: palette.textMuted }]}>{label}</Text>
      <View style={styles.row}>
        <Pressable
          onPress={() => onChange(clamp(value - step))}
          accessibilityRole="button"
          accessibilityLabel={`Diminuer ${label}`}
          style={({ pressed }) => [styles.btn, pressed && { opacity: 0.7 }]}
        >
          <Text style={styles.btnText}>−</Text>
        </Pressable>
        <View style={styles.valueBox}>
          <Text style={[type.title, { color: palette.text }]}>
            {value}{suffix ? ` ${suffix}` : ''}
          </Text>
        </View>
        <Pressable
          onPress={() => onChange(clamp(value + step))}
          accessibilityRole="button"
          accessibilityLabel={`Augmenter ${label}`}
          style={({ pressed }) => [styles.btn, pressed && { opacity: 0.7 }]}
        >
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { gap: spacing.sm },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  btn: {
    width: 56, height: 56, borderRadius: radius.md,
    backgroundColor: palette.surfaceRaised,
    borderWidth: 1, borderColor: palette.border,
    alignItems: 'center', justifyContent: 'center',
  },
  btnText: { color: palette.text, fontSize: 26, lineHeight: 30, fontWeight: '600' },
  valueBox: {
    flex: 1, minHeight: 56, borderRadius: radius.md,
    backgroundColor: palette.surface, borderWidth: 1, borderColor: palette.border,
    alignItems: 'center', justifyContent: 'center',
  },
});
