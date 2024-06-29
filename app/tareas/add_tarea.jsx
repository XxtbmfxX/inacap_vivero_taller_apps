import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validarFormularioTarea } from "./validaciones";

const AddTarea = () => {
  const [errores, setErrores] = useState({});
  const [tarea, setTarea] = useState({
    nombreTarea: "",
    descripcionTarea: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    const erroresValidacion = validarFormularioTarea(
      tarea.nombreTarea,
      tarea.descripcionTarea
    );
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }
    setModalVisible(true);
  };

  const confirmarGuardar = async () => {
    const nuevaTarea = { ...tarea };
    try {
      const tareasGuardadas = await AsyncStorage.getItem("tareas");
      const tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
      tareas.push(nuevaTarea);
      await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
      setModalVisible(false);
      router.push("/tareas");
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Tareas</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de Tarea"
          value={tarea.nombreTarea}
          onChangeText={(text) =>
            setTarea((prevState) => ({
              ...prevState,
              nombreTarea: text,
            }))
          }
        />
        {errores.nombre && (
          <Text style={styles.errorText}>{errores.nombre}</Text>
        )}
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Descripción de Tarea"
          multiline
          value={tarea.descripcionTarea}
          onChangeText={(text) =>
            setTarea((prevState) => ({
              ...prevState,
              descripcionTarea: text,
            }))
          }
        />
        {errores.descripcion && (
          <Text style={styles.errorText}>{errores.descripcion}</Text>
        )}
        <Button title="Guardar" onPress={handleSubmit} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>¿Desea guardar esta tarea?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonConfirm]}
                  onPress={confirmarGuardar}
                >
                  <Text style={styles.textStyle}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
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
  button: {
    backgroundColor: '#358',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius:10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    
  },
});

export default AddTarea;
