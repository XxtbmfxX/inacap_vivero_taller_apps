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
import { validateSemillaData } from './validaciones';

const add_semillas = () => {
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

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setSemillas((prevState) => ({
      ...prevState,
      [field]: value,
    }));

    const validationErrors = validateSemillaData({ ...semillas, [field]: value }).errors;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: validationErrors[field],
    }));
  };

  const handleSubmit = async () => {
    const { isValid, errors } = validateSemillaData(semillas);

    if (!isValid) {
      setErrors(errors);
      return;
    }

    const nuevaSemilla = { ...semillas };

    try {
      const semillasGuardadas = await AsyncStorage.getItem("semillas");
      const semillas = semillasGuardadas ? JSON.parse(semillasGuardadas) : [];
      semillas.push(nuevaSemilla);
      await AsyncStorage.setItem("semillas", JSON.stringify(semillas));
      router.back();
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Semillas</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.codigoBolsa && styles.inputError]}
            placeholder="Código de Bolsa"
            placeholderTextColor="#000"
            value={semillas.codigoBolsa}
            onChangeText={(text) => handleChange("codigoBolsa", text)}
          />
          {errors.codigoBolsa && <Text style={styles.errorText}>{errors.codigoBolsa}</Text>}
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.cantidad && styles.inputError]}
            placeholder="Cantidad"
            placeholderTextColor="#000"
            value={semillas.cantidad}
            onChangeText={(text) => handleChange("cantidad", text)}
          />
          {errors.cantidad && <Text style={styles.errorText}>{errors.cantidad}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.fechaRecepcion && styles.inputError]}
            placeholder="Fecha Recepción"
            placeholderTextColor="#000"
            value={semillas.fechaRecepcion}
            onChangeText={(text) => handleChange("fechaRecepcion", text)}
          />
          {errors.fechaRecepcion && <Text style={styles.errorText}>{errors.fechaRecepcion}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.fechaColecta && styles.inputError]}
            placeholder="Fecha Colecta"
            placeholderTextColor="#000"
            value={semillas.fechaColecta}
            onChangeText={(text) => handleChange("fechaColecta", text)}
          />
          {errors.fechaColecta && <Text style={styles.errorText}>{errors.fechaColecta}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.porcentajeGerminacion && styles.inputError]}
            placeholder="Porcentaje Germinación"
            placeholderTextColor="#000"
            value={semillas.porcentajeGerminacion}
            onChangeText={(text) => handleChange("porcentajeGerminacion", text)}
          />
          {errors.porcentajeGerminacion && <Text style={styles.errorText}>{errors.porcentajeGerminacion}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.pesoEnviado && styles.inputError]}
            placeholder="Peso Enviado"
            placeholderTextColor="#000"
            value={semillas.pesoEnviado}
            onChangeText={(text) => handleChange("pesoEnviado", text)}
          />
          {errors.pesoEnviado && <Text style={styles.errorText}>{errors.pesoEnviado}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.pesoRecibido && styles.inputError]}
            placeholder="Peso Recibido"
            placeholderTextColor="#000"
            value={semillas.pesoRecibido}
            onChangeText={(text) => handleChange("pesoRecibido", text)}
          />
          {errors.pesoRecibido && <Text style={styles.errorText}>{errors.pesoRecibido}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.condicionSemilla && styles.inputError]}
            placeholder="Condición Semilla"
            placeholderTextColor="#000"
            value={semillas.condicionSemilla}
            onChangeText={(text) => handleChange("condicionSemilla", text)}
          />
          {errors.condicionSemilla && <Text style={styles.errorText}>{errors.condicionSemilla}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.Especie && styles.inputError]}
            placeholder="Especie"
            placeholderTextColor="#000"
            value={semillas.Especie}
            onChangeText={(text) => handleChange("Especie", text)}
          />
          {errors.Especie && <Text style={styles.errorText}>{errors.Especie}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.Procedencia && styles.inputError]}
            placeholder="Procedencia"
            placeholderTextColor="#000"
            value={semillas.Procedencia}
            onChangeText={(text) => handleChange("Procedencia", text)}
          />
          {errors.Procedencia && <Text style={styles.errorText}>{errors.Procedencia}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.Bodega && styles.inputError]}
            placeholder="Bodega"
            placeholderTextColor="#000"
            value={semillas.Bodega}
            onChangeText={(text) => handleChange("Bodega", text)}
          />
          {errors.Bodega && <Text style={styles.errorText}>{errors.Bodega}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.Colector && styles.inputError]}
            placeholder="Nombre Colector"
            placeholderTextColor="#000"
            value={semillas.Colector}
            onChangeText={(text) => handleChange("Colector", text)}
          />
          {errors.Colector && <Text style={styles.errorText}>{errors.Colector}</Text>}
        </View>

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
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#D5DBDB",
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
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

export default add_semillas;
