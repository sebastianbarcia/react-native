import { Button, StyleSheet, Text, View } from 'react-native'
import React ,{useEffect} from 'react'
import { useFonts, RockSalt_400Regular } from '@expo-google-fonts/rock-salt';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const CategoryShoes = ({navigation , route}) => {

  const { bread } = route.params 

  useEffect(() => {
     navigation.setOptions({
       title: bread.name
     })
  },[])
  
  return (
    <View style={styles.container}>
     <Text style={styles.textMargin}>BreadDetailScreen</Text>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>Price: ${bread.price}</Text>
      <Text>{bread.weight}</Text>
      <Text>{bread.description}</Text> 
    </View>
  )
}

export default CategoryShoes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:'#ffds',
        alignItems:"center",
        justifyContent:"center"
      },
      title:{
        fontSize:20,
       marginBottom:10
      },
      textMargin:{
       marginBottom:40
      }
})