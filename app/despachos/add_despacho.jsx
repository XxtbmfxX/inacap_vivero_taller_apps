import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AgregarDespachoForm = () => {
  const [numeroGuia, setNumeroGuia] = useState('');
  const [nombrePredio, setNombrePredio] = useState('');
  const [fechaSolicitud, setFechaSolicitud] = useState('');
  const [fechaRetiro, setFechaRetiro] = useState('');
  const [cantidadPlantas, setCantidadPlantas] = useState('');
  const [especies, setEspecies] = useState('');
  const [numeroSemanas, setNumeroSemanas] = useState('');
  const [observacion, setObservacion] = useState('');

  const handleSubmit = () => {
    console.log('Nombre Predio:', nombrePredio);
    console.log('Fecha Solicitud:', fechaSolicitud);
    console.log('Fecha Retiro:', fechaRetiro);
    console.log('Cantidad Plantas:', cantidadPlantas);
    console.log('Especies:', especies);
    console.log('Número Semanas:', numeroSemanas);
    console.log('Observación:', observacion);
    router.back()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Despacho</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Predio"
        placeholderTextColor="#000"
        value={nombrePredio}
        onChangeText={text => setNombrePredio(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha Solicitud"
        placeholderTextColor="#000"
        value={fechaSolicitud}
        onChangeText={text => setFechaSolicitud(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha Retiro"
        placeholderTextColor="#000"
        value={fechaRetiro}
        onChangeText={text => setFechaRetiro(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad de Plantas"
        placeholderTextColor="#000"
        value={cantidadPlantas}
        onChangeText={text => setCantidadPlantas(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Especies"
        placeholderTextColor="#000"
        value={especies}
        onChangeText={text => setEspecies(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Semanas"
        placeholderTextColor="#000"
        value={numeroSemanas}
        onChangeText={text => setNumeroSemanas(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Observación"
        placeholderTextColor="#000"
        multiline
        value={observacion}
        onChangeText={text => setObservacion(text)}
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
    borderRadius:10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    
  },
});

export default AgregarDespachoForm;
