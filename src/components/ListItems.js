import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import TouchableButton from "./TouchableButton";

const ListItems = ({ items, selectItems }) => {
  return (
    <FlatList
      data={items}
      renderItem={(itemData) => (
        <View style={styles.element}>
          <TouchableButton
            colorBtn={styles.colorBtn}
            textData={itemData.item.name}
            itemData={itemData.item}
            selectItems={selectItems}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListItems;

const styles = StyleSheet.create({
  element: {
    flexDirection: "row",
  },
  colorBtn: {
    marginVertical: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "violet",
  },
});