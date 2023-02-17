import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Blackbutton() {
  return (
    <TouchableOpacity style = {{
         ...styles.button, backgroundColor: "#0a0a0a" 
         }}
         >
      <Text style={{...styles.buttonText, color: "#f1f1f1"}}>Black button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    zIndex:99,
    bottom: 0,
    alignSelf: "center",
    paddingVertical: 15,
    width: "90%",
    borderRadius:10,
    position:"absolute",   
  },
  buttonText:{
    textAlign:"center",
    fontWeight:"600"
  }
});
