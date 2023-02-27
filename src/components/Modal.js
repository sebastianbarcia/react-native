import { StyleSheet, Text, View ,  Modal, Button , Platform } from 'react-native'
import React from 'react'

const ModalAction = ({modalVisible , selectedItems , setModalVisible , handleDelete}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalText}>Eliminar item</Text>
          </View>
          <View style={styles.modalContent}>
            <Text style={styles.textDelete}>
              ¿Esta seguro que quiere eliminar {selectedItems?.name} del item?
            </Text>
          </View>
          <View style={styles.modalAction}>
            <View style={{...styles.btnGroupModal, ...styles.btnCancel}}>
            <Button
              title="Cancelar"
              color={"black"}
              onPress={() => setModalVisible(false)}
            ></Button>
            </View>
            <View style={{...styles.btnGroupModal,  ...styles.btnConfirm}}>
            <Button
              onPress={() => handleDelete(selectedItems.id)}
              title="Eliminar"
              color={"black"}
            ></Button>
          </View>
          </View>
        </View>
      </Modal>
  )
}

export default ModalAction

const styles = StyleSheet.create({
    modalContainer: {
        height: 190,
        width: 350,
        marginTop: 50,
        alignSelf: "center",
        backgroundColor: "whitesmoke",
        borderRadius: 15,
      },
      btnGroupModal:{
        borderColor:"#D1D1D6",
        width:Platform.OS === 'ios'? "50%" : "30%",
        paddingVertical:Platform.OS === 'ios'? 8 : 0,
      },
      btnCancel:{
        borderRightWidth: Platform.OS === 'ios' ?  0.5 : 0,
      },
      btnConfirm:{
        borderLeftWidth: Platform.OS === 'ios' ? 0.5 : 0,
      },
      modalTitle: {
        padding: 10,
        borderRadius: 5,
      },
      modalContent: {
        padding: 10,
        alignItems: "center",
        width: "100%",
      },
      modalAction: {
        flexDirection: "row",
        justifyContent: "space-around", 
        width:"100%", 
       borderTopWidth: Platform.OS === 'ios' ?  0.5 : 0,
       borderColor:"#D1D1D6",
      },
      modalText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
        paddingTop: 8,
      },
      textDelete: {
        textAlign: "center",
        paddingTop:12,
        paddingBottom:20,
        paddingHorizontal:25
      },
})