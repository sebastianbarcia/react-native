import { StyleSheet, View , Button, Platform } from 'react-native'
import React from 'react'

const AllDeleteButtons = ({items , setModalAllDelete}) => {
  return (
    <View
    style={{
      position: "absolute",
      bottom: "0%",
      zIndex: 99,
      backgroundColor: "#AC16D9",
      width: "100%",
      height: "10%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: "4%",
    }}
  >
    <Button
      color={Platform.OS === 'android' ? "#AC16D9" : "white"}
      title="Borrar todo"
      onPress={() => items.length && setModalAllDelete(true)}
    ></Button>
  </View>
  )
}

export default AllDeleteButtons

const styles = StyleSheet.create({})