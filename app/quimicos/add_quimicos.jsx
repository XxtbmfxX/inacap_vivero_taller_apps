import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const AgregarQuimicosForm = () => {
  const [errores, setErrores] = useState({});

  const [quimico, setQuimico] = useState({
    nombre: "",
    fechaIngreso: "",
    contenido: "",
    categoria: "",
    presentacion: "",
    etiqueta: "",
    bodega: ""
  });

  const router = useRouter();

  const handleChange = (field, value) => {
    setQuimico(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    //agregar validación de texto


    //spread operator
    const nuevoQuimico = { ...quimico };

    try {
      const quimicosGuardados = await AsyncStorage.getItem("quimicos");
      const quimicos = quimicosGuardados ? JSON.parse(quimicosGuardados) : [];
      quimicos.push(nuevoQuimico);
      await AsyncStorage.setItem("quimicos", JSON.stringify(quimicos));

      router.push("/quimicos");
    } catch (error) {
      console.error("Error al guardar el químico:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Químicos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={quimico.nombre}
        onChangeText={text => handleChange('nombre', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Ingreso"
        value={quimico.fechaIngreso}
        onChangeText={text => handleChange('fechaIngreso', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contenido"
        value={quimico.contenido}
        onChangeText={text => handleChange('contenido', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={quimico.categoria}
        onChangeText={text => handleChange('categoria', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Presentación"
        value={quimico.presentacion}
        onChangeText={text => handleChange('presentacion', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Etiqueta"
        value={quimico.etiqueta}
        onChangeText={text => handleChange('etiqueta', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bodega"
        value={quimico.bodega}
        onChangeText={text => handleChange('bodega', text)}
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
