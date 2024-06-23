import { Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const add_plantacion = () => {
  const [plantacion, setPlantacion] = useState({
    especies: [],
    fechaInicio: "",
    fechaTermino: "",
    numeroCosecha: "",
    plantacion: "",
  });

  const handleChange = (field, value) => {
    setPlantacion((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async () => {
    //Agregar Validaciones

    //spread operator
    const nuevaPlantacion = { ...plantacion };

    try {
      const plantacionesGuardadas = await AsyncStorage.getItem("plantaciones");
      const plantaciones = plantacionesGuardadas
        ? JSON.parse(plantacionesGuardadas)
        : [];
      plantaciones.push(nuevaPlantacion);
      await AsyncStorage.setItem("plantaciones", JSON.stringify(plantaciones));

      router.push("/planta-cion");
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
    }
  };

  return (
    <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Plantacion"
          value={plantacion.plantacion}
          onChangeText={(text) => handleChange("plantacion", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Especies"
          value={plantacion.especies}
          onChangeText={(text) => handleChange("especies", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha Inicio"
          value={plantacion.fechaInicio}
          onChangeText={(text) => handleChange("fechaInicio", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha Termino"
          value={plantacion.fechaTermino}
          onChangeText={(text) => handleChange("fechaTermino", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Numero cosecha"
          value={plantacion.numeroCosecha}
          onChangeText={(text) => handleChange("numeroCosecha", text)}
        />
        <Button title="Guardar" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default add_plantacion;
