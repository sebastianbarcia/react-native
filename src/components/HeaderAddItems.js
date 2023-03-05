import React from "react";

import { View, StyleSheet, Button, TextInput } from "react-native";

const HeaderAddItems = ({ name, handleChange, handleSupport }) => {
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
    width: 200,
    height: 35,
  },
});

export default HeaderAddItems;
