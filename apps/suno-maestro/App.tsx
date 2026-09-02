import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProjectsProvider } from '@/state/ProjectsContext';
import { RootNavigator } from '@/navigation/RootNavigator';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ProjectsProvider>
        <StatusBar style="light" />
        <RootNavigator />
      </ProjectsProvider>
    </SafeAreaProvider>
  );
}
