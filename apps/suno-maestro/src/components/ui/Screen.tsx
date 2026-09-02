import React from 'react';
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette, spacing } from '@/theme';

interface Props {
  children: React.ReactNode;
  scroll?: boolean;
  padded?: boolean;
  footer?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
}

export const Screen: React.FC<Props> = ({ children, scroll = true, padded = true, footer, contentStyle }) => (
  <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
    {scroll ? (
      <ScrollView
        style={styles.flex}
        contentContainerStyle={[padded && styles.padded, styles.bottomGap, contentStyle]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    ) : (
      <View style={[styles.flex, padded && styles.padded, contentStyle]}>{children}</View>
    )}
    {footer ? <View style={styles.footer}>{footer}</View> : null}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: palette.bg },
  flex: { flex: 1 },
  padded: { paddingHorizontal: spacing.lg, paddingTop: spacing.lg, gap: spacing.lg },
  bottomGap: { paddingBottom: spacing.xxxl },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: palette.border,
    backgroundColor: palette.surface,
  },
});
