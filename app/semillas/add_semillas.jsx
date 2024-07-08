import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { validarFormularioSemilla } from "./validaciones";
import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";
import { router } from "expo-router";

const add_semillas = () => {
  const { getSemillas } = useItems();

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

  const [errores, setErrores] = useState({});

  const handleChange = (field, value) => {
    setSemillas((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    const validationErrores = validarFormularioSemilla(semillas);

    if (Object.keys(validationErrores).length > 0) {
      setErrores(validationErrores);
      return;
    }

    const { data, error } = await supabase
      .from("semilla")
      .insert([
        {
          codigo_bolsa: semillas.codigoBolsa,
          cantidad: parseInt(semillas.cantidad), // Asegúrate de convertir a entero si es necesario
          fecha_recepcion: new Date(semillas.fechaRecepcion),
          fecha_colecta: new Date(semillas.fechaColecta),
          porcentaje_germinacion: semillas.porcentajeGerminacion,
          peso_enviado: semillas.pesoEnviado,
          peso_recibido: semillas.pesoRecibido,
          condicion_semilla: semillas.condicionSemilla,
          id_especie: semillas.Especie,
          id_procedencia: semillas.Procedencia,
          id_bodega: semillas.Bodega,
          rut_colector: semillas.Colector,
        },
      ])
      .select();

    if (error) {
      console.error("Error al añadir semilla:", error);
      setErrores({
        general: "Error al añadir la semilla. Por favor, inténtalo de nuevo.",
      });
    } else {
      getSemillas();
      router.back();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Semillas</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.codigoBolsa && styles.inputError]}
            placeholder="Código de Bolsa. Ejem:B0N"
            placeholderTextColor="#000"
            value={semillas.codigoBolsa}
            onChangeText={(text) => handleChange("codigoBolsa", text)}
          />
          {errores.codigoBolsa && (
            <Text style={styles.errorText}>{errores.codigoBolsa}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.cantidad && styles.inputError]}
            placeholder="Cantidad (hasta 999)"
            placeholderTextColor="#000"
            value={semillas.cantidad}
            onChangeText={(text) => handleChange("cantidad", text)}
          />
          {errores.cantidad && (
            <Text style={styles.errorText}>{errores.cantidad}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.fechaRecepcion && styles.inputError]}
            placeholder="Fecha Recepción (mm-dd-yyyy) "
            placeholderTextColor="#000"
            value={semillas.fechaRecepcion}
            onChangeText={(text) => handleChange("fechaRecepcion", text)}
          />
          {errores.fechaRecepcion && (
            <Text style={styles.errorText}>{errores.fechaRecepcion}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.fechaColecta && styles.inputError]}
            placeholder="Fecha Colecta (mm-dd-yyyy) "
            placeholderTextColor="#000"
            value={semillas.fechaColecta}
            onChangeText={(text) => handleChange("fechaColecta", text)}
          />
          {errores.fechaColecta && (
            <Text style={styles.errorText}>{errores.fechaColecta}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              errores.porcentajeGerminacion && styles.inputError,
            ]}
            placeholder="Porcentaje Germinación Ejem: 99% "
            placeholderTextColor="#000"
            value={semillas.porcentajeGerminacion}
            onChangeText={(text) => handleChange("porcentajeGerminacion", text)}
          />
          {errores.porcentajeGerminacion && (
            <Text style={styles.errorText}>
              {errores.porcentajeGerminacion}
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.pesoEnviado && styles.inputError]}
            placeholder="Peso Enviado Ejem:100kg"
            placeholderTextColor="#000"
            value={semillas.pesoEnviado}
            onChangeText={(text) => handleChange("pesoEnviado", text)}
          />
          {errores.pesoEnviado && (
            <Text style={styles.errorText}>{errores.pesoEnviado}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.pesoRecibido && styles.inputError]}
            placeholder="Peso Recibido Ejem:100kg"
            placeholderTextColor="#000"
            value={semillas.pesoRecibido}
            onChangeText={(text) => handleChange("pesoRecibido", text)}
          />
          {errores.pesoRecibido && (
            <Text style={styles.errorText}>{errores.pesoRecibido}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              errores.condicionSemilla && styles.inputError,
            ]}
            placeholder="Condición Semilla"
            placeholderTextColor="#000"
            value={semillas.condicionSemilla}
            onChangeText={(text) => handleChange("condicionSemilla", text)}
          />
          {errores.condicionSemilla && (
            <Text style={styles.errorText}>{errores.condicionSemilla}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.Especie && styles.inputError]}
            placeholder="Especie (1) "
            placeholderTextColor="#000"
            value={semillas.Especie}
            onChangeText={(text) => handleChange("Especie", text)}
          />
          {errores.Especie && (
            <Text style={styles.errorText}>{errores.Especie}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.Procedencia && styles.inputError]}
            placeholder="Procedencia (222) "
            placeholderTextColor="#000"
            value={semillas.Procedencia}
            onChangeText={(text) => handleChange("Procedencia", text)}
          />
          {errores.Procedencia && (
            <Text style={styles.errorText}>{errores.Procedencia}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.Bodega && styles.inputError]}
            placeholder="Bodega"
            placeholderTextColor="#000"
            value={semillas.Bodega}
            onChangeText={(text) => handleChange("Bodega", text)}
          />
          {errores.Bodega && (
            <Text style={styles.errorText}>{errores.Bodega}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errores.Colector && styles.inputError]}
            placeholder="Nombre Colector Ejem: 11.123.456-k"
            placeholderTextColor="#000"
            value={semillas.Colector}
            onChangeText={(text) => handleChange("Colector", text)}
          />
          {errores.Colector && (
            <Text style={styles.errorText}>{errores.Colector}</Text>
          )}
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
    width: "100%",
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
    borderColor: "red",
  },
  errorText: {
    color: "red",
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
