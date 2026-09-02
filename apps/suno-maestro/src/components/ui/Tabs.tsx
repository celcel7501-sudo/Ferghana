import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { palette, radius, spacing, type } from '@/theme';

export interface TabItem { id: string; label: string }

interface Props {
  items: TabItem[];
  active: string;
  onChange: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({ items, active, onChange }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.row}
  >
    {items.map((it) => {
      const on = it.id === active;
      return (
        <Pressable
          key={it.id}
          onPress={() => onChange(it.id)}
          accessibilityRole="tab"
          accessibilityState={{ selected: on }}
          accessibilityLabel={it.label}
          style={({ pressed }) => [styles.tab, on && styles.tabOn, pressed && { opacity: 0.8 }]}
        >
          <Text style={[type.label, { color: on ? palette.text : palette.textMuted }]}>
            {it.label}
          </Text>
        </Pressable>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  row: { gap: spacing.sm, paddingHorizontal: spacing.lg, paddingVertical: spacing.sm },
  tab: {
    minHeight: 44, justifyContent: 'center', paddingHorizontal: spacing.lg,
    borderRadius: radius.pill, borderWidth: 1, borderColor: palette.border,
    backgroundColor: palette.surface,
  },
  tabOn: { backgroundColor: palette.violet + '22', borderColor: palette.violet },
});
