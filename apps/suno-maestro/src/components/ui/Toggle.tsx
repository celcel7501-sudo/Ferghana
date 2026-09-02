import React from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { palette, spacing, type } from '@/theme';

interface Props {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  hint?: string;
}

export const Toggle: React.FC<Props> = ({ label, value, onChange, hint }) => (
  <Pressable
    onPress={() => onChange(!value)}
    accessibilityRole="switch"
    accessibilityState={{ checked: value }}
    accessibilityLabel={label}
    style={styles.row}
  >
    <View style={styles.texts}>
      <Text style={[type.body, { color: palette.text }]}>{label}</Text>
      {hint ? <Text style={[type.caption, { color: palette.textFaint }]}>{hint}</Text> : null}
    </View>
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ false: palette.border, true: palette.violetDim }}
      thumbColor={palette.text}
    />
  </Pressable>
);

const styles = StyleSheet.create({
  row: {
    minHeight: 56, flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', gap: spacing.lg,
  },
  texts: { flex: 1, gap: 2 },
});
