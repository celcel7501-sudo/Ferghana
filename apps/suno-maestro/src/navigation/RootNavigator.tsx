import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import type { RootStackParamList, TabParamList } from './types';
import { palette, type } from '@/theme';
import { HomeScreen } from '@/screens/HomeScreen';
import { LibraryScreen } from '@/screens/LibraryScreen';
import { BriefScreen } from '@/screens/BriefScreen';
import { DirectionScreen } from '@/screens/DirectionScreen';
import { GenerateScreen } from '@/screens/GenerateScreen';
import { ResultScreen } from '@/screens/ResultScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const navTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.violet,
    background: palette.bg,
    card: palette.surface,
    text: palette.text,
    border: palette.border,
    notification: palette.orange,
  },
};

const TabsNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: palette.surface, borderTopColor: palette.border, height: 64, paddingBottom: 8 },
      tabBarActiveTintColor: palette.violet,
      tabBarInactiveTintColor: palette.textFaint,
      tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Studio', tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🎛️</Text> }}
    />
    <Tab.Screen
      name="Library"
      component={LibraryScreen}
      options={{ title: 'Bibliothèque', tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>📚</Text> }}
    />
  </Tab.Navigator>
);

export const RootNavigator: React.FC = () => (
  <NavigationContainer theme={navTheme}>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: palette.bg },
        headerTitleStyle: { ...type.section, color: palette.text },
        headerTintColor: palette.violet,
        contentStyle: { backgroundColor: palette.bg },
      }}
    >
      <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Brief" component={BriefScreen} options={{ title: 'Nouveau morceau' }} />
      <Stack.Screen name="Direction" component={DirectionScreen} options={{ title: 'Direction artistique' }} />
      <Stack.Screen name="Generate" component={GenerateScreen} options={{ title: 'Génération' }} />
      <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Résultat' }} />
    </Stack.Navigator>
  </NavigationContainer>
);
