import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import TouchableButton from "./TouchableButton";

const ListItems = ({ items, selectItems }) => {
  return (
    <FlatList
      data={items}
      renderItem={(itemData) => (
        <View style={styles.element}>
          <TouchableButton itemData={itemData} selectItems={selectItems} />
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
});
