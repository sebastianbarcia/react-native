import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const Performances = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>performance</Text>
      <Button  color={Platform.OS == 'ios' ? 'white' : 'black'} title='Ir a home' onPress={() => navigation.navigate('Home')}></Button>
    </View>
  )
}

export default Performances

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      text:{
        color:"grey",
        fontFamily:"RockSalt_400Regular"
      }
})