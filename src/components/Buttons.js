import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Blackbutton() {
  return (
    <View style={{...styles.viewListas}}>
    <TouchableOpacity style = {{
         ...styles.button, backgroundColor: "#0a0a0a" 
         }}
         >
      <Text style={{...styles.buttonText, color: "#f1f1f1"}}>Black button</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewListas:{
    zIndex:99,
    bottom:2,
    height:100,
    position:"absolute",   
    right:50,
  },
  button: {
    
    
    paddingVertical: 15,
   
    width:300,
    borderRadius:10,
  
  },
  buttonText:{
    textAlign:"center",
    fontWeight:"600"
  }
});
