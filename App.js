import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider, useApp } from './src/store/AppContext';
import { SensorProvider } from './src/store/SensorContext';
import AppNavigator from './src/navigation/AppNavigator';
import { Loading } from './src/components/ui';
import { colors } from './src/theme';

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.bg, card: '#fff', text: colors.text, border: colors.border, primary: colors.black },
};

function Root() {
  const { state } = useApp();
  if (!state.hydrated) return <Loading />; // wait until saved data is loaded
  return (
    <SensorProvider>
      <NavigationContainer theme={navTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SensorProvider>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar style="dark" />
        <Root />
      </AppProvider>
    </SafeAreaProvider>
  );
}
