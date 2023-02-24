import { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import { CounterItems, HeaderAddItems, ListItems , ModalAction } from "../index";

const Home = () =>  {
  const [count, setCount] = useState(0);

  const [items, setItems] = useState([]);

  const [name, setName] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);

  const handleChange = (text) => {
    setName({ name: text,  id: Date.now()});
  };
 
  const handleSupport = () => {
    if ((name !== "") && (name !== undefined)) {
      if (name.name.length >= 3) {
        setCount(count + 1);
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
    setCount(count - 1);
    setModalVisible(false);
  };

  const selectItems = (item) => {
    setSelectedItems(item);
    setModalVisible(true);
  };

  return (
    
    <View style={styles.screen}>
    {/*header views*/ }  
      <HeaderAddItems name={name}  handleChange= {handleChange} handleSupport ={handleSupport}/>
      {/*results*/}
      <CounterItems items={items} count={count}/>
      {/*lista*/}
      <ListItems items={items} selectItems={selectItems} />
      {/*modal*/}
      <ModalAction modalVisible={modalVisible} selectedItems={selectedItems} setModalVisible={setModalVisible} handleDelete={handleDelete}/>
    </View>

  );
}

/*ESTILO: se puede definir estilos en linea o definir con una stylesheet*/

const styles = StyleSheet.create({
  screen: { padding: 30 },
});

export default Home