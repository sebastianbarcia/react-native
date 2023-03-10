import { StyleSheet, Text, View, Button , Image, Dimensions, Platform } from "react-native";
import TouchableButton from "../components/TouchableButton";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from "react";
import { fontPixel , pixelSizeHorizontal , pixelSizeVertical} from "../utils/Normalize";

const EqualName = ({ backPage }) => {

  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () =>{
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  }

  const statePortrait = () =>setIsPortrait(onPortrait())

  useEffect(() => {
    Dimensions.addEventListener('change' , statePortrait)
    return() => {Dimensions.removeEventListener('change' , statePortrait)}
  })

  return (
    
    <View style={isPortrait ? styles.screen : styles.screenId }>
    <Image style={isPortrait ? styles.image : styles.imageID} source={require('../../assets/error-img.jpg')}></Image>
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
  screenId:{
    display:"flex",
    flexDirection:"row",
  },
  image : {width:180 , height:150 , marginBottom:40, borderRadius:20},
  imageID: {width:"50%" , height:300},
  title:{
    fontSize:fontPixel(24),
    marginBottom:10,
    fontFamily:"luckiestguy" 
  },
  gradient:{
    borderRadius:15,
    marginTop:10
  },
  colorBtn:{
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(20),
  },
});
