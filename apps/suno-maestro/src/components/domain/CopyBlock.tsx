import React, { useCallback, useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import { StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing, type } from '@/theme';
import { Button } from '../ui/Button';

interface Props {
  title?: string;
  content: string;
  mono?: boolean;
  footer?: React.ReactNode;
}

export const CopyBlock: React.FC<Props> = ({ title, content, mono = true, footer }) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    await Clipboard.setStringAsync(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }, [content]);

  return (
    <View style={styles.wrap}>
      {title ? (
        <View style={styles.head}>
          <Text style={[type.label, { color: palette.textMuted }]}>{title}</Text>
          <Text style={[type.caption, { color: palette.textFaint }]}>
            {content.length} caractères
          </Text>
        </View>
      ) : null}
      <View style={styles.box}>
        <Text style={[mono ? type.mono : type.body, { color: palette.text }]} selectable>
          {content}
        </Text>
      </View>
      {footer}
      <Button
        label={copied ? 'Copié ✓' : 'Copier'}
        icon={copied ? undefined : '⧉'}
        variant={copied ? 'secondary' : 'primary'}
        onPress={copy}
        full
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { gap: spacing.sm },
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  box: {
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: radius.md,
    padding: spacing.lg,
  },
});
