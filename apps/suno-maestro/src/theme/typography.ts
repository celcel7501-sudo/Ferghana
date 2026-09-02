import { Platform, TextStyle } from 'react-native';

const family = Platform.select({ ios: 'System', android: 'sans-serif', default: 'System' });
const familyMono = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' });

export const type = {
  display: { fontFamily: family, fontSize: 32, lineHeight: 38, fontWeight: '800' } as TextStyle,
  title: { fontFamily: family, fontSize: 24, lineHeight: 30, fontWeight: '700' } as TextStyle,
  section: { fontFamily: family, fontSize: 18, lineHeight: 24, fontWeight: '700' } as TextStyle,
  body: { fontFamily: family, fontSize: 15, lineHeight: 22, fontWeight: '400' } as TextStyle,
  bodyStrong: { fontFamily: family, fontSize: 15, lineHeight: 22, fontWeight: '600' } as TextStyle,
  label: { fontFamily: family, fontSize: 13, lineHeight: 18, fontWeight: '600' } as TextStyle,
  caption: { fontFamily: family, fontSize: 12, lineHeight: 16, fontWeight: '400' } as TextStyle,
  mono: { fontFamily: familyMono, fontSize: 13, lineHeight: 20, fontWeight: '400' } as TextStyle,
} as const;
