import { StyleSheet, Text, View, Button } from "react-native";
import TouchableButton from "../components/TouchableButton";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";

const EqualName = ({ backPage }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Has seleccionado uno igual</Text>
      <LinearGradient
       colors={['#D685C7', '#BB94DB']}
       style={styles.gradient}
      >
      <TouchableButton colorBtn={styles.colorBtn} textData="Selecciona uno nuevo" selectItems={backPage} />
      </LinearGradient>
    </View>
  );
};

export default EqualName;

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding:20,
  },
  title:{
    fontSize:24,
    marginBottom:10,
    fontFamily:"luckiestguy" 
  },
  gradient:{
    borderRadius:15,
    marginTop:10
  },
  colorBtn:{
    paddingVertical: 15,
    paddingHorizontal: 20,
  }
});
