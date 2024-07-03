import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const add_planta = () => {



  const [planta, setPlanta] = useState({
    especie: "",
    sector: "",
    añoDespacho: "",

  });

  const handleChange = (field, value) => {
    setPlanta((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async () => {
    //Agregar Validaciones

    //spread operator
    const nuevaPlanta = { ...planta };

    try {
      const plantasGuardadas = await AsyncStorage.getItem("plantas");
      const plantas = plantasGuardadas
        ? JSON.parse(plantasGuardadas)
        : [];
      plantas.push(nuevaPlanta);
      await AsyncStorage.setItem("plantas", JSON.stringify(plantas));

      router.back();
    } catch (error) {
      console.error("Error al guardar la Planta:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Plantas</Text>
      <TextInput
        style={styles.input}
        placeholder="Especie"
        value={planta.especie}
        onChangeText={text => handleChange("especie", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Año de Despacho"
        value={planta.añoDespacho}
        onChangeText={text => handleChange("añoDespacho", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Sector"
        value={planta.sector}
        onChangeText={text => handleChange("sector", text)}
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
export default add_planta;
