import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, Modal, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validarFormularioTarea } from "./validaciones";

const UpdateTarea = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [nombre, setNombre] = useState('');
  const [desc, setDesc] = useState('');
  const [indice, setIndice] = useState(-1);
  const [errores, setErrores] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const cargarDatosTarea = useCallback(async () => {
    if (params.indice) {
      const indiceT = parseInt(params.indice);
      setIndice(indiceT);
      try {
        const tareasGuardadas = await AsyncStorage.getItem("tareas");
        if (tareasGuardadas) {
          const tareas = JSON.parse(tareasGuardadas);
          if (indiceT >= 0 && indiceT < tareas.length) {
            const tarea = tareas[indiceT];
            setNombre(tarea.nombreTarea);
            setDesc(tarea.descripcionTarea);
          }
        }
      } catch (error) {
        console.error("Error al cargar la tarea:", error);
      }
    }
  }, [params.indice]);

  useEffect(() => {
    cargarDatosTarea();
  }, [cargarDatosTarea]);

  const handleNombreChange = useCallback((text) => {
    console.log("Nombre cambiado a:", text);
    setNombre(text);
  }, []);

  const handleDescChange = useCallback((text) => {
    console.log("Descripción cambiada a:", text);
    setDesc(text);
  }, []);

  const handleUpdate = useCallback(() => {
    console.log("Actualizando tarea. Nombre:", nombre, "Descripción:", desc);
    const erroresValidacion = validarFormularioTarea(nombre, desc);
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }
    setModalVisible(true);
  }, [nombre, desc]);

  const confirmarActualizacion = useCallback(async () => {
    try {
      const tareasGuardadas = await AsyncStorage.getItem("tareas");
      let tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
      if (indice >= 0 && indice < tareas.length) {
        tareas[indice] = { nombreTarea: nombre, descripcionTarea: desc };
        await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
        console.log("Tarea actualizada:", tareas[indice]);
        Alert.alert('Tarea actualizada', `La tarea "${nombre}" ha sido actualizada.`);
        router.push('/tareas');
      }
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  }, [indice, nombre, desc, router]);

  const memoizedContent = useMemo(() => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Actualizar Tarea</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de Tarea"
          value={nombre}
          onChangeText={handleNombreChange}
        />
        {errores.nombre && <Text style={styles.errorText}>{errores.nombre}</Text>}
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Descripción de Tarea"
          multiline
          value={desc}
          onChangeText={handleDescChange}
        />
        {errores.descripcion && <Text style={styles.errorText}>{errores.descripcion}</Text>}
        <Button title="Guardar" onPress={handleUpdate} />
      </View>
    </ScrollView>
  ), [nombre, desc, errores, handleNombreChange, handleDescChange, handleUpdate]);

  return (
    <>
      {memoizedContent}
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
  button: {
    backgroundColor: '#325',
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


export default UpdateTarea;
