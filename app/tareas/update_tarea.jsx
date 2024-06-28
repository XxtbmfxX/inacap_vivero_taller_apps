import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter, useSegments } from 'expo-router';

const UpdateTareasForm = () => {
  const router = useRouter();
  const segments = useSegments();
  const [nombre, setNombre] = useState('');
  const [desc, setDesc] = useState('');


//esta parte la tube que comentar porque sino da error

  // Este código asume que los parámetros están en la última parte de la URL
//   useEffect(() => {
//     if (segments && segments.length > 0) {
//       const params = segments[segments.length - 1].split('&');
//       const nombreTarea = decodeURIComponent(params[0].split('=')[1]);
//       const descripcion = decodeURIComponent(params[1].split('=')[1]);

//       setNombre(nombreTarea);
//       setDesc(descripcion);
//     }
//   }, [segments]);

  const handleUpdate = () => {
    // Aquí debes actualizar tu "db" con los nuevos valores.
    Alert.alert('Tarea actualizada', `La tarea "${nombre}" ha sido actualizada.`);
    router.push('/tareas');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Actualizar Tarea</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de Tarea"
          value={nombre}
          onChangeText={text => setNombre(text)}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Descripción de Tarea"
          multiline
          value={desc}
          onChangeText={text => setDesc(text)}
        />
        <Button title="Guardar" onPress={handleUpdate} />
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
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UpdateTareasForm;
