import { Platform, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BreadDetailScreen from "../screens/BreadDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import { COLORS } from "../constants/colors";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? COLORS.primary : COLORS.accent,
          },
          headerTintColor: Platform.OS === "android" ?  "black" : "white",
          headerTitleStyle: "RockSalt_400Regular",
        }}
      >
        <Stack.Screen name="Home"  component={CategoriesScreen} />
        <Stack.Screen name="Detail" component={BreadDetailScreen} 
        //options={({route}) => ({title: route.params.productName})} 
        />
        <Stack.Screen
            name="Products"
            component={CategoryBreadScreen}
            options={({route}) => ({title:route.params.categoryName})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
