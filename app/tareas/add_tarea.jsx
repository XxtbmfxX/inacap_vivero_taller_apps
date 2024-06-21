import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import { validarFormularioTarea } from './validaciones'; 

const AgregarTareasForm = () => {
  const [nombreTarea, setNombreTarea] = useState('');
  const [descripcionTarea, setDescripcionTarea] = useState('');
  const [errores, setErrores] = useState({});
  const router = useRouter();

  const handleSubmit = () => {
    const erroresValidacion = validarFormularioTarea(nombreTarea, descripcionTarea);
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    console.log('Nombre de Tarea:', nombreTarea);
    console.log('Descripción de Tarea:', descripcionTarea);

    router.push('/tareas');
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
        {errores.nombre && <Text style={styles.errorText}>{errores.nombre}</Text>}
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Descripción de Tarea"
          multiline
          value={descripcionTarea}
          onChangeText={text => setDescripcionTarea(text)}
        />
        {errores.descripcion && <Text style={styles.errorText}>{errores.descripcion}</Text>}
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AgregarTareasForm;
