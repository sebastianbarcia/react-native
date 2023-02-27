import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const TouchableButton = ({ itemData, selectItems }) => {
  return (
    <TouchableOpacity
      style={styles.contentList}
      onPress={() => selectItems(itemData.item)}
    >
      <Text style={styles.textButton}>{itemData.item.name}</Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  contentList: {
    marginVertical: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    backgroundColor: "violet",
  },
  textButton: {
    color: "white",
  },
});
