import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { validarFormularioTarea } from "./validaciones";
import supabase from '../../lib/supabase'; // Asegúrate de que la ruta sea correcta

const UpdateTarea = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  console.log('params:', params); // Verifica que params.id esté correcto

  const [tarea, setTarea] = useState({
    nombre_tarea: '',
    descripcion_tarea: '',
  });
  const [errores, setErrores] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar datos de params
    if (params.nombreTarea && params.descripcionTarea) {
      setTarea({
        nombre_tarea: params.nombreTarea,
        descripcion_tarea: params.descripcionTarea,
      });
      setIsLoading(false);
    }
  }, []); // Usamos un array vacío para que este efecto se ejecute solo una vez al montar el componente

  const handleInputChange = (name, value) => {
    setTarea(prevTarea => ({
      ...prevTarea,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    // Validar el formulario (agregar tu lógica de validación aquí)
    const erroresValidacion = validarFormularioTarea(tarea.nombre_tarea, tarea.descripcion_tarea);
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setModalVisible(true);
  };

  const confirmarActualizacion = useCallback(async () => {
    try {
      const { error } = await supabase
        .from('tarea')
        .update({ 
          nombre_tarea: tarea.nombre_tarea, 
          descripcion_tarea: tarea.descripcion_tarea 
        })
        .eq('id_tarea', params.id);

      if (error) throw error;

      Alert.alert('Tarea actualizada', `La tarea "${tarea.nombre_tarea}" ha sido actualizada.`);
      router.back();
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      Alert.alert('Error', 'No se pudo actualizar la tarea');
    } finally {
      setModalVisible(false);
    }
  }, [tarea, params.id, router]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Actualizar Tarea</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de Tarea"
            value={tarea.nombre_tarea}
            onChangeText={(text) => handleInputChange('nombre_tarea', text)}
          />
          {errores.nombre_tarea && <Text style={styles.errorText}>{errores.nombre_tarea}</Text>}
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Descripción de Tarea"
            multiline
            value={tarea.descripcion_tarea}
            onChangeText={(text) => handleInputChange('descripcion_tarea', text)}
          />
          {errores.descripcion_tarea && <Text style={styles.errorText}>{errores.descripcion_tarea}</Text>}
          <Button title="Guardar" onPress={handleUpdate} />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Desea actualizar esta tarea?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonConfirm]}
                onPress={confirmarActualizacion}
              >
                <Text style={styles.textStyle}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#D5DBDB',
  },
  errorText: {
    color: 'red',
  },
  button: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius:10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCancel: {
    backgroundColor: '#ff0000',
    marginRight: 10,
  },
  buttonConfirm: {
    backgroundColor: '#00ff00',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default UpdateTarea;
