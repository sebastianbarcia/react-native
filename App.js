import { StatusBar } from "expo-status-bar";
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
  Modal
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
    }else{
      alert("Escribe algo en el input por favor");
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setUse(use - 1);
  };

  
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
      
      <Text style={styles.result}>{use}</Text>
      <Text>{items.title}</Text>
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
      renderItem={(itemData) => {
        return(
          <View style={styles.element} key={itemData.item.id}>
       
        <Pressable key={itemData.item.id} onPress={()=>{console.log(itemData.item.id)}}> 
        <Text style={styles.element}>{itemData.item.name}</Text>
        </Pressable>
         <Button
                  title="Eliminar"
                  onPress={() => handleDelete(itemData.item.id)}
                  color={"red"}
                /> 
               
        </View>
        )
      }
      }
      >

      </FlatList> 
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
    overflow:"hidden",
    color:"white"
  },
  modalContainer:{
    height:400,
    width:300,
    marginTop:100,
    alignSelf:'center',
    backgroundColor:"lime"
  },
  modalTitle:{
    padding:10,
    borderRadius:5,
  },
  modalContent:{
    padding:10,
    width:"50%"
  },
  modalAction:{
    padding:22
  }
});
