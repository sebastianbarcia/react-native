import { useState , useCallback } from "react";
import { StyleSheet, View , Text } from "react-native";
import {
  CounterItems,
  HeaderAddItems,
  ListItems,
  ModalAction,
  AllDeleteButtons,
} from "../index";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

const Home = ({ setCount, setItems, setEqual, items,  count }) => {
  
  const [name, setName] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);

  const [modalAllDelete, setModalAllDelete] = useState(false);

  const [fontsLoaded] = useFonts({
    'luckiestguy': require('../../assets/fonts/LuckiestGuy-Regular.ttf'),
 });

  const onLayoutRootView = useCallback
  (async () => {
     if (fontsLoaded) {
       await SplashScreen.hideAsync();
     }
   }, [fontsLoaded]);

  const handleChange = (text) => {
    setName({ name: text, id: Date.now() });
  };

  const handleSupport = () => {
    name && name.name.length >= 3
      ? (setCount(count + 1), setItems([...items, name]), setName(""))
      : alert(
          name
            ? "Lo que escribas debe tener más de 3 caracteres"
            : "Escribe algo en el input por favor"
        );

    setEqual(items.find((item) => item.name === name.name));
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setCount(count - 1);
    setModalVisible(false);
  };

  const handleDeleteAll = () => {
    setCount(0);
    setItems([]);
    setModalAllDelete(false);
  };

  const selectItems = (item) => {
    setSelectedItems(item);
    setModalVisible(true);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/*header views*/}
      <>
        <View style={styles.screen} onLayout={onLayoutRootView}>
          <Text style={styles.title}>Introduce tu nombre, si se repiten veras que pasa </Text>
          <HeaderAddItems
            name={name}
            handleChange={handleChange}
            handleSupport={handleSupport}
          />
          {/*lista*/}
          <CounterItems items={items} count={count} />
          {/*results*/}
          <ListItems items={items} selectItems={selectItems} />
        </View>
        <AllDeleteButtons items={items} setModalAllDelete={setModalAllDelete} />
      </>
      {/*modals*/}
      <ModalAction
        modalVisible={modalVisible}
        selectedItems={selectedItems}
        setModalVisible={setModalVisible}
        handleDelete={handleDelete}
      />
      <ModalAction
        modalVisible={modalAllDelete}
        selectedItems={
          "¿Esta seguro que quiere eliminar todos los items del listado?"
        }
        setModalVisible={setModalAllDelete}
        handleDelete={handleDeleteAll}
      />
    </>
  );
};

/*ESTILO: se puede definir estilos en linea o definir con una stylesheet*/

const styles = StyleSheet.create({
  screen: { padding: 30, marginTop:50 },
  title:{fontFamily:"luckiestguy" , fontSize:20,  textAlign: "center" }
});

export default Home;