import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IngresarMaterialesForm = () => {
  const [nombre, setNombre] = useState('');
  const [unidadDeMedida, setUnidadDeMedida] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', nombre);
    console.log('Unidad de Medida:', unidadDeMedida);
    console.log('Cantidad:', cantidad);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar Materiales</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Unidad de Medida"
        value={unidadDeMedida}
        onChangeText={text => setUnidadDeMedida(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        keyboardType="numeric"
        value={cantidad}
        onChangeText={text => setCantidad(text)}
      />
      <Button title="Guardar" onPress={handleSubmit} />
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
      borderRadius:10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      
    },
  });

export default IngresarMaterialesForm;