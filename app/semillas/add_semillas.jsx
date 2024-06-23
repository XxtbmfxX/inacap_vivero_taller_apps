import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const AgregarSemillasForm = () => {
  const [semillas, setSemillas] = useState({
    codigoBolsa: "",
    cantidad: "",
    fechaRecepcion: "",
    fechaColecta: "",
    porcentajeGerminacion: "",
    pesoEnviado: "",
    pesoRecibido: "",
    condicionSemilla: "",
    Especie: "",
    Procedencia: "",
    Bodega: "",
    Colector: "",
  });

  const handleChange = (field, value) => {
    setSemillas((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    const {
      codigoBolsa,
      cantidad,
      fechaRecepcion,
      fechaColecta,
      porcentajeGerminacion,
      pesoEnviado,
      pesoRecibido,
      condicionSemilla,
      Especie,
      Procedencia,
      Bodega,
      Colector,
    } = semillas;

    const nuevaSemilla = { ...semillas };

    try {
  
      const semillasGuardadas = await AsyncStorage.getItem("semillas");
      const semillas = semillasGuardadas ? JSON.parse(semillasGuardadas) : [];
      semillas.push(nuevaSemilla);
      await AsyncStorage.setItem("semillas", JSON.stringify(semillas));

      router.push("/semillas");
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
    }

  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Semillas</Text>
        <TextInput
          style={styles.input}
          placeholder="Código de Bolsa"
          placeholderTextColor="#000"
          value={semillas.codigoBolsa}
          onChangeText={(text) => handleChange("codigoBolsa", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          placeholderTextColor="#000"
          value={semillas.cantidad}
          onChangeText={(text) => handleChange("cantidad", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha Recepción"
          placeholderTextColor="#000"
          value={semillas.fechaRecepcion}
          onChangeText={(text) => handleChange("fechaRecepcion", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha Colecta"
          placeholderTextColor="#000"
          value={semillas.fechaColecta}
          onChangeText={(text) => handleChange("fechaColecta", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Porcentaje Germinación"
          placeholderTextColor="#000"
          value={semillas.porcentajeGerminacion}
          onChangeText={(text) => handleChange("porcentajeGerminacion", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso Enviado"
          placeholderTextColor="#000"
          value={semillas.pesoEnviado}
          onChangeText={(text) => handleChange("pesoEnviado", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso Recibido"
          placeholderTextColor="#000"
          value={semillas.pesoRecibido}
          onChangeText={(text) => handleChange("pesoRecibido", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Condición Semilla"
          placeholderTextColor="#000"
          value={semillas.condicionSemilla}
          onChangeText={(text) => handleChange("condicionSemilla", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Especie"
          placeholderTextColor="#000"
          value={semillas.Especie}
          onChangeText={(text) => handleChange("Especie", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Procedencia"
          placeholderTextColor="#000"
          value={semillas.Procedencia}
          onChangeText={(text) => handleChange("Procedencia", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Bodega"
          placeholderTextColor="#000"
          value={semillas.Bodega}
          onChangeText={(text) => handleChange("Bodega", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre Colector"
          placeholderTextColor="#000"
          value={semillas.Colector}
          onChangeText={(text) => handleChange("Colector", text)}
        />
        <Button title="Guardar" onPress={handleSubmit} color="#000" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#D5DBDB",
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default AgregarSemillasForm;
