import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing, type } from '@/theme';

interface Props {
  label: string;
  used: number;
  limit: number;
}

/**
 * La jauge affiche une mesure reelle, jamais une estimation : Suno tronque en
 * silence, donc un chiffre approximatif serait pire que pas de chiffre.
 */
export const BudgetMeter: React.FC<Props> = ({ label, used, limit }) => {
  const pct = Math.min(1, used / limit);
  const color = used > limit ? palette.danger : pct > 0.95 ? palette.warning : palette.success;
  return (
    <View style={styles.wrap} accessibilityLabel={`${label} : ${used} sur ${limit} caractères`}>
      <View style={styles.row}>
        <Text style={[type.caption, { color: palette.textMuted }]}>{label}</Text>
        <Text style={[type.caption, { color }]}>
          {used} / {limit}
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct * 100}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { gap: spacing.xs },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  track: { height: 6, borderRadius: radius.pill, backgroundColor: palette.border, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: radius.pill },
});
