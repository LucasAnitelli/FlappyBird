import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import Home from './src/screens/Home';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'PressStart2P-Regular': require('./src/assets/fonts/PressStart2P-Regular.ttf'),
  });

  const splashScreenHide = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }

  }, []);

  useEffect(() => {
    setTimeout(() => {
      splashScreenHide();
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <>
        <StatusBar style="auto" hidden />
        <Home />
      </>
  );
}