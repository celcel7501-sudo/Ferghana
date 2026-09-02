import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { palette, radius, spacing, type } from '@/theme';

interface Props {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
  hint?: string;
  error?: string | null;
  keyboardType?: 'default' | 'numeric';
}

export const Field: React.FC<Props> = ({
  label, value, onChangeText, placeholder, multiline, hint, error, keyboardType,
}) => (
  <View style={styles.wrap}>
    <Text style={[type.label, styles.label]}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={palette.textFaint}
      multiline={multiline}
      keyboardType={keyboardType ?? 'default'}
      accessibilityLabel={label}
      style={[
        type.body,
        styles.input,
        multiline && styles.multiline,
        error ? { borderColor: palette.danger } : null,
      ]}
    />
    {error ? (
      <Text style={[type.caption, { color: palette.danger }]}>{error}</Text>
    ) : hint ? (
      <Text style={[type.caption, { color: palette.textFaint }]}>{hint}</Text>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  wrap: { gap: spacing.sm },
  label: { color: palette.textMuted },
  input: {
    minHeight: 52,
    color: palette.text,
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  multiline: { minHeight: 110, textAlignVertical: 'top' },
});
