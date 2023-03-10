import { useFonts, RockSalt_400Regular } from '@expo-google-fonts/rock-salt';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
import ShopNavigator from './src/navigatiors/ShopNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    RockSalt_400Regular,
  });

  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  })
  if (!fontsLoaded) {
    return null;
  }

  return (
      <ShopNavigator/>
  );
}

