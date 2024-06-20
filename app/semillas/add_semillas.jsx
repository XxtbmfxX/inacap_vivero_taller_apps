import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const AgregarSemillasForm = () => {
  const [codigoBolsa, setCodigoBolsa] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [fechaRecepcion, setFechaRecepcion] = useState('');
  const [fechaColecta, setFechaColecta] = useState('');
  const [porcentajeGerminacion, setPorcentajeGerminacion] = useState('');
  const [pesoEnviado, setPesoEnviado] = useState('');
  const [pesoRecibido, setPesoRecibido] = useState('');
  const [condicionSemilla, setCondicionSemilla] = useState('');
  const [Especie, setEspecie] = useState('');
  const [Procedencia, setProcedencia] = useState('');
  const [Bodega, setBodega] = useState('');
  const [Colector, setColector] = useState('');

  const handleSubmit = () => {
    console.log('Código Bolsa:', codigoBolsa);
    console.log('Cantidad:', cantidad);
    console.log('Fecha Recepción:', fechaRecepcion);
    console.log('Fecha Colecta:', fechaColecta);
    console.log('Porcentaje Germinación:', porcentajeGerminacion);
    console.log('Peso Enviado:', pesoEnviado);
    console.log('Peso Recibido:', pesoRecibido);
    console.log('Condición Semilla:', condicionSemilla);
    console.log('Especie:', Especie);
    console.log('Procedencia:', Procedencia);
    console.log('Bodega:', Bodega);
    console.log('Colector:', Colector);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Semillas</Text>
      <TextInput
        style={styles.input}
        placeholder="Código de Bolsa"
        placeholderTextColor="#000"
        value={codigoBolsa}
        onChangeText={text => setCodigoBolsa(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        placeholderTextColor="#000"
        value={cantidad}
        onChangeText={text => setCantidad(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha Recepción"
        placeholderTextColor="#000"
        value={fechaRecepcion}
        onChangeText={text => setFechaRecepcion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha Colecta"
        placeholderTextColor="#000"
        value={fechaColecta}
        onChangeText={text => setFechaColecta(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Porcentaje Germinación"
        placeholderTextColor="#000"
        value={porcentajeGerminacion}
        onChangeText={text => setPorcentajeGerminacion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso Enviado"
        placeholderTextColor="#000"
        value={pesoEnviado}
        onChangeText={text => setPesoEnviado(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso Recibido"
        placeholderTextColor="#000"
        value={pesoRecibido}
        onChangeText={text => setPesoRecibido(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Condición Semilla"
        placeholderTextColor="#000"
        value={condicionSemilla}
        onChangeText={text => setCondicionSemilla(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Especie"
        placeholderTextColor="#000"
        value={Especie}
        onChangeText={text => setEspecie(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Procedencia"
        placeholderTextColor="#000"
        value={Procedencia}
        onChangeText={text => setProcedencia(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bodega"
        placeholderTextColor="#000"
        value={Bodega}
        onChangeText={text => setBodega(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre Colector"
        placeholderTextColor="#000"
        value={Colector}
        onChangeText={text => setColector(text)}
      />
      <Button title="Guardar" onPress={handleSubmit} color="#000" />
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
export default AgregarSemillasForm;
