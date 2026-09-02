import React from 'react';
import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { palette, radius, spacing, type } from '@/theme';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

interface Props {
  label: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  full?: boolean;
  style?: StyleProp<ViewStyle>;
}

const bg: Record<Variant, string> = {
  primary: palette.violet,
  secondary: palette.surfaceRaised,
  ghost: 'transparent',
  danger: palette.surfaceRaised,
};

const fg: Record<Variant, string> = {
  primary: '#FFFFFF',
  secondary: palette.text,
  ghost: palette.textMuted,
  danger: palette.danger,
};

export const Button: React.FC<Props> = ({
  label, onPress, variant = 'primary', disabled, loading, icon, full, style,
}) => {
  const inactive = disabled || loading;
  return (
    <Pressable
      onPress={onPress}
      disabled={inactive}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: !!inactive, busy: !!loading }}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: bg[variant] },
        variant === 'ghost' && styles.ghost,
        full && styles.full,
        inactive && styles.inactive,
        pressed && !inactive && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={fg[variant]} />
      ) : (
        <View style={styles.row}>
          {icon ? <Text style={[styles.icon, { color: fg[variant] }]}>{icon}</Text> : null}
          <Text style={[type.bodyStrong, { color: fg[variant] }]} numberOfLines={1}>
            {label}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghost: { borderWidth: 1, borderColor: palette.border },
  full: { alignSelf: 'stretch' },
  inactive: { opacity: 0.45 },
  pressed: { opacity: 0.8, transform: [{ scale: 0.985 }] },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  icon: { fontSize: 16 },
});
