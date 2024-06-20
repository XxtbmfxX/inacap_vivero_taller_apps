import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const AgregarTareasForm = () => {
  const [nombreTarea, setNombreTarea] = useState('');
  const [descripcionTarea, setDescripcionTarea] = useState('');

  const handleSubmit = () => {
    console.log('Nombre de Tarea:', nombreTarea);
    console.log('Descripción de Tarea:', descripcionTarea);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Tareas</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Tarea"
        value={nombreTarea}
        onChangeText={text => setNombreTarea(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descripción de Tarea"
        multiline
        value={descripcionTarea}
        onChangeText={text => setDescripcionTarea(text)}
      />
      <Button title="Guardar" onPress={handleSubmit} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
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

export default AgregarTareasForm;
