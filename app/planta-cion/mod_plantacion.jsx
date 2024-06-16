import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ModificarPlantacionForm = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaTermino, setFechaTermino] = useState('');
  const [numeroCosecha, setNumeroCosecha] = useState('');
  const [especies, setEspecies] = useState('');

  const handleSubmit = () => {
    console.log('Fecha Inicio:', fechaInicio);
    console.log('Fecha Término:', fechaTermino);
    console.log('Número Cosecha:', numeroCosecha);
    console.log('Especies:', especies);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar Plantación</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha Inicio"
        value={fechaInicio}
        onChangeText={text => setFechaInicio(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha Término"
        value={fechaTermino}
        onChangeText={text => setFechaTermino(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número Cosecha"
        value={numeroCosecha}
        onChangeText={text => setNumeroCosecha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Especies"
        value={especies}
        onChangeText={text => setEspecies(text)}
      />
      <Button title="Guardar" onPress={handleSubmit} />
    </View>
  );
};

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ModificarPlantacionForm = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaTermino, setFechaTermino] = useState('');
  const [numeroCosecha, setNumeroCosecha] = useState('');
  const [especies, setEspecies] = useState('');

  const handleSubmit = () => {
    console.log('Fecha Inicio:', fechaInicio);
    console.log('Fecha Término:', fechaTermino);
    console.log('Número Cosecha:', numeroCosecha);
    console.log('Especies:', especies);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar Plantación</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha Inicio"
        value={fechaInicio}
        onChangeText={text => setFechaInicio(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha Término"
        value={fechaTermino}
        onChangeText={text => setFechaTermino(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número Cosecha"
        value={numeroCosecha}
        onChangeText={text => setNumeroCosecha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Especies"
        value={especies}
        onChangeText={text => setEspecies(text)}
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

export default ModificarPlantacionForm;

