import React, { useEffect } from "react";

import { View, StyleSheet, Button, TextInput, Dimensions, Platform } from "react-native";
import { widthPixel } from "../utils/Normalize";

const HeaderAddItems = ({ name, handleChange, handleSupport }) => {
  useEffect(() => {
    console.log("screen width" , Platform.OS , Dimensions.get('window').width)
    console.log("screen heigth" ,Platform.OS , Dimensions.get('window').height)
  })
  return (
    <View style={styles.viewStyle}>
      <TextInput
        placeholder="Item de lista"
        style={styles.input}
        type="text"
        value={name}
        onChangeText={handleChange}
        maxLength={12}
      ></TextInput>
      <Button
        title="Agregar"
        onPress={handleSupport}
        color={"black"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "60%",
    //tambien se puede hacer asi 
    //width: Dimensions.get('window').width / 1 ,
    maxWidth: widthPixel(200),
    height: 35,
  },
});

export default HeaderAddItems;
