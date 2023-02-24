import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

const ListItems = ({ items, selectItems }) => {
  return (
    <FlatList
      data={items}
      renderItem={(itemData) => (
        <View style={styles.element}>
          <Pressable
            style={styles.contentList}
            onPress={() => selectItems(itemData.item)}
          >
            <Text style={styles.element}>{itemData.item.name}</Text>
          </Pressable>
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
    color: "white",
  },
  contentList: {
    marginVertical: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    backgroundColor: "violet",
  },
});
