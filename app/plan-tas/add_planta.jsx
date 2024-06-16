import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const AgregarPlantasForm = () => {
  const [especie, setEspecie] = useState('');
  const [anioDespacho, setAnioDespacho] = useState('');
  const [numeroSector, setNumeroSector] = useState('');
  const [numeroPlatabanda, setNumeroPlatabanda] = useState('');

  const handleSubmit = () => {
    console.log('Especie:', especie);
    console.log('Año de Despacho:', anioDespacho);
    console.log('Número de Sector:', numeroSector);
    console.log('Número de Platabanda:', numeroPlatabanda);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Plantas</Text>
      <TextInput
        style={styles.input}
        placeholder="Especie"
        value={especie}
        onChangeText={text => setEspecie(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Año de Despacho"
        value={anioDespacho}
        onChangeText={text => setAnioDespacho(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Sector"
        value={numeroSector}
        onChangeText={text => setNumeroSector(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Platabanda"
        value={numeroPlatabanda}
        onChangeText={text => setNumeroPlatabanda(text)}
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
export default AgregarPlantasForm;
