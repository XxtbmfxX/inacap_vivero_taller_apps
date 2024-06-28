import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';



const IngresarMaterialesForm = () => {
  const [material, setMaterial] = useState({
    nombreMaterial: "",
    unidadDeMedida: "",
    cantidad: ""
  });
  const router = useRouter();

  const handleChange = (name, value) => {
    setMaterial({
      ...material,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    //agregar validación de texto


    //spread operator
    const nuevoMaterial = { ...material };

    try {
      const materialesGuardados = await AsyncStorage.getItem("materiales");
      const materiales = materialesGuardados ? JSON.parse(materialesGuardados) : [];
      materiales.push(nuevoMaterial);
      await AsyncStorage.setItem("materiales", JSON.stringify(materiales));

      router.push("/materiales");
    } catch (error) {
      console.error("Error al guardar el químico:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar Materiales</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={material.nombreMaterial}
        onChangeText={text => handleChange('nombreMaterial', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Unidad de Medida"
        value={material.unidadDeMedida}
        onChangeText={text => handleChange('unidadDeMedida', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        keyboardType="numeric"
        value={material.cantidad}
        onChangeText={text => handleChange('cantidad', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default IngresarMaterialesForm;
