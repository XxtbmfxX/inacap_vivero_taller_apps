import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const DeleteModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>Quieres eliminar este elemento?</Text>
          <View style={{
              display: "flex",
              flexDirection: "row",
              gap: 20
          }}  >

          <Button title="Eliminar" onPress={onConfirm} />
          <Button title="Cancelar" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
  
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 20

  },
});

export default DeleteModal;
