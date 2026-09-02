import React from 'react';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { palette, radius, spacing } from '@/theme';

interface Props {
  children: React.ReactNode;
  onPress?: () => void;
  accent?: string;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}

/**
 * Un seul element rendu, jamais deux imbriques.
 *
 * Une version anterieure rendait `Pressable > View` et posait les styles sur le
 * View interieur : l'enfant flex du parent etait alors le Pressable, sans
 * largeur, qui se reduisait au contenu — et tout `width: '47%'` passe en prop se
 * calculait contre cette largeur ecrasee. Les styles de mise en page doivent
 * atteindre l'element qui participe au layout du parent.
 */
export const Card: React.FC<Props> = ({ children, onPress, accent, style, accessibilityLabel }) => {
  const base: StyleProp<ViewStyle> = [
    styles.card,
    accent ? { borderLeftWidth: 3, borderLeftColor: accent } : null,
    style,
  ];

  if (!onPress) return <View style={base}>{children}</View>;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [base, pressed && styles.pressed]}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: palette.border,
    padding: spacing.lg,
  },
  pressed: { opacity: 0.85 },
});
