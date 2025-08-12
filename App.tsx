import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameProvider } from './src/context/GameContext';
import SplashScreen from './src/screens/SplashScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import GuinnessScreen from './src/screens/GuinnessScreen';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useCheckUpdates } from './src/hooks/checkUpdates';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

export type RootStackParamList = {
  Splash: undefined;
  Category: undefined;
  Quiz: undefined;
  Results: undefined;
  Guinness: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  useCheckUpdates();

  const [fontsLoaded, fontError] = useFonts({
    "PlayfairDisplay-Regular": PlayfairDisplay_400Regular,
    "PlayfairDisplay-Bold": PlayfairDisplay_700Bold,
    "Inter-Regular": Inter_400Regular,
    "Inter-SemiBold": Inter_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Fonts are loaded or there was an error
    }
  }, [fontsLoaded, fontError]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GameProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#1a1a1a' },
              }}
            >
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Category" component={CategoryScreen} />
              <Stack.Screen name="Quiz" component={QuizScreen} />
              <Stack.Screen name="Results" component={ResultsScreen} />
              <Stack.Screen name="Guinness" component={GuinnessScreen} />
            </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </GameProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
