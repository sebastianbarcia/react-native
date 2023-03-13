import { Button, StyleSheet, Text, View } from 'react-native'
import React ,{useEffect} from 'react'
import { useFonts, RockSalt_400Regular } from '@expo-google-fonts/rock-salt';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const CategoryShoes = ({navigation}) => {
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
    <View style={styles.container}>
      <Text style={styles.text}>CategoryShoes</Text>
      <Button  color={Platform.OS == 'ios' ? 'white' : 'black'} title='Ir a detalles' onPress={() => navigation.navigate('Shoes')}></Button>
    </View>
  )
}

export default CategoryShoes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent:"space-around",
      },
      text:{
        color:"white",
        fontFamily:"RockSalt_400Regular"
      }
})