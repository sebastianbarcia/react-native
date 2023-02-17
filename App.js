import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [use, setUse] = useState(0);

  const [items, setItems] = useState([]);

  const [name, setName] = useState("Introduce tu nombre!");

  const handleChange = (text) => {
    setName({ name: text, id: use + 1 });
    // otra forma de poner id= setName({ name: text, id: Date.now()});
  };

  const handleSupport = () => {
    if (name !== "" && name !== "Introduce tu nombre!") {
      if (name.name.length >= 3) {
        setUse(use + 1);
        let util = [...items, name];
        setItems(util);
        setName("");
      } else {
        alert("Lo que escribas debe tener mas de 3 caracteres");
      }
    } else {
      alert("Escribe algo en el input por favor");
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setUse(use - 1);
  };


  const selectItems = (item) => {
    setSelectedItems(item);
    setModalVisible(true);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);

  return (
  
   
    <View style={styles.screen}>
      <View style={styles.viewStyle}>
        <TextInput
          placeholder="Item de lista"
          style={styles.input}
          type="text"
          value={name}
          onChangeText={handleChange}
        ></TextInput>

        <Button
          style={styles.button}
          title="Agregar"
          onPress={handleSupport}
          color={"black"}
        />
      </View>
      <View>
        <Text style={styles.result}>{use}</Text>
        <Text>{items.title}</Text>
      </View>

      {/* {items.map((item) => {
        return (
          <View key={item.id}>
              <View style={styles.element}>
                <Text>{item.name}</Text>
                <Button
                  title="Eliminar"
                  onPress={() => handleDelete(item.id)}
                  color={"red"}
                />
              </View>
          </View>
        );
      })} */}

      <FlatList
        data={items}
        renderItem={(itemData) => (
          <View style={styles.element} >
            <Pressable
             style={styles.contentList}
              onPress={() => selectItems(itemData.item.id)}
            >
              <Text style={styles.element}>{itemData.item.name}</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
        
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalText}>Eliminar item?</Text>
          </View>
          <View>
            <Button
              title="Cancelar"
              onPress={() => setModalVisible(false)}
            ></Button>
          </View>
        </View>
      </Modal>
    </View>  
  );
}

/*ESTILO: se puede definir estilos en linea o definir con una stylesheet*/

const styles = StyleSheet.create({
  screen: { padding: 30 },
  button: {
    color: "red",
    backgroundColor: "red",
  },
  element: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
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
  result: {
    padding: 10,
    marginTop: 15,
    textAlign: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    fontWeight: "bold",
    overflow: "hidden",
    color: "white",
  },
  contentList: {
    padding: 10,
    borderRadius: 5,
    width:"100%",
    backgroundColor: "#ccc",
  },
  modalContainer: {
    height: 200,
    width: 350,
    marginTop: 50,
    alignSelf: "center",

    backgroundColor: "whitesmoke",
    borderRadius: 15,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
  },
  modalContent: {
    padding: 10,
    width: "50%",
  },
  modalAction: {
    padding: 22,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});
