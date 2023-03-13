import { StyleSheet, Text, View , Image , Button} from 'react-native'
import { heightPixel, widthPixel } from '../utils/Normalize'

import React from 'react'

const ShoesDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require("../../assets/zapatillas.webp")}></Image>
      <Text style={styles.text}>ShoesDetailScreen</Text>
      <Button color={Platform.OS == 'ios' ? 'white' : 'black'} title='Ir a performance' onPress={() => navigation.navigate('Performance')}></Button>
    </View>
  )
}

export default ShoesDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      img:{
        marginBottom: 20,
        width: widthPixel(100),
        height: heightPixel(100) 
      },
      text:{
        color:"grey",
        fontFamily:"RockSalt_400Regular"
      }
})