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
import { validarFormularioTarea } from "./validaciones";
import { supabase } from "../../lib/supabase";

const AddTarea = () => {
  const [nombreTarea, setNombreTarea] = useState('');
  const [descripcionTarea, setDescripcion] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errores, setErrores] = useState({});
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const erroresValidacion = validarFormularioTarea(nombreTarea, descripcionTarea);
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }
  
    setErrores({});
  
    const { data, error } = await supabase
      .from('tarea')
      .insert([
        { 
          nombre_tarea: nombreTarea,
          descripcion_tarea: descripcionTarea
        }
      ])
      .select(); 
  
    if (error) {
      console.error('Error al añadir tarea:', error);
      setErrores({ general: 'Error al añadir la tarea. Por favor, inténtalo de nuevo.' });
    } else {
      console.log('Tarea añadida:', data);
      setModalVisible(true);
      setNombreTarea('');
      setDescripcion('');
    }
  };
  const confirmarGuardar = async () => {
    setModalVisible(false);
    router.push("/tareas");
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Tareas</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la tarea"
          value={nombreTarea}
          onChangeText={setNombreTarea}
        />
        {errores.nombre && (
          <Text style={styles.errorText}>{errores.nombre}</Text>
        )}
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Descripción de Tarea"
          value={descripcionTarea}
          onChangeText={setDescripcion}
          multiline={true}
        />
        {errores.general && (
          <Text style={styles.errorText}>{errores.general}</Text>
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default AddTarea;
