import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const AgregarQuimicosForm = () => {
  const [nombre, setNombre] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [contenido, setContenido] = useState('');
  const [categoria, setCategoria] = useState('');
  const [presentacion, setPresentacion] = useState('');
  const [etiqueta, setEtiqueta] = useState('');
  const [bodega, setBodega] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', nombre);
    console.log('Fecha de Ingreso:', fechaIngreso);
    console.log('Contenido:', contenido);
    console.log('Categoría:', categoria);
    console.log('Presentación:', presentacion);
    console.log('Etiqueta:', etiqueta);
    console.log('Bodega:', bodega);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Químicos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Ingreso"
        value={fechaIngreso}
        onChangeText={text => setFechaIngreso(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contenido"
        value={contenido}
        onChangeText={text => setContenido(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={categoria}
        onChangeText={text => setCategoria(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Presentación"
        value={presentacion}
        onChangeText={text => setPresentacion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Etiqueta"
        value={etiqueta}
        onChangeText={text => setEtiqueta(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bodega"
        value={bodega}
        onChangeText={text => setBodega(text)}
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

export default AgregarQuimicosForm;
