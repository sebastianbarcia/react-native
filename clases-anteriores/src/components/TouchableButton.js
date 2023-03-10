import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const TouchableButton = ({ itemData, selectItems, textData, colorBtn }) => {
  return (
    <TouchableOpacity
      style={[styles.contentList, colorBtn]}
      onPress={() => selectItems(itemData)}
    >
      <Text style={styles.textButton}>{textData}</Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  contentList: {
   
    alignItems: "center",
    width: "100%",
  },
  textButton: {
    color: "white",
  },
});
