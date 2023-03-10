import { StyleSheet} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CategoryShoes from '../screens/CategoryShoes'
import ShoesDetailScreen from '../screens/ShoesDetailScreen'
import Performance from '../screens/Performances'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'  /*screenOptions={{headerShown:false}}*/>
            
            <Stack.Screen options={{
                headerShown:false
            }} name='Home'component={CategoryShoes}/>
            <Stack.Screen name='Shoes' component={ShoesDetailScreen}/>
            <Stack.Screen options={{title:"Performance de zapatillas", headerStyle:{
                backgroundColor:"#000" 
            },
            headerTintColor: 'white'
            }} name='Performance' component={Performance}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})