import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CounterItems = ({ count, items }) => {
  const addColor = { ...styles.result, ...styles.countBackAmount };
  const greyColor = { ...styles.result, ...styles.countBackZero };
  return (
    <View>
      <Text style={count >= 1 ? addColor : greyColor}>{count}</Text>
      <Text>{items.title}</Text>
    </View>
  );
};

export default CounterItems;

const styles = StyleSheet.create({
  result: {
    padding: 10,
    marginTop: 15,
    textAlign: "center",
    borderRadius: 10,
    fontWeight: "bold",
    overflow: "hidden",
    color: "white",
  },
  countBackAmount: {
    backgroundColor: "#77C6DC",
  },
  countBackZero: {
    backgroundColor: "#BDC2BC",
  },
});
