import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { validarFormularioPlantacion } from "./validaciones";
import { supabase } from "../../lib/supabase";


/**
 * Componente add_plantacion que muestra una lista de plantaciones con la capacidad de agregar y eliminar.
 *
 * @component
 * @returns {JSX.Element} El componente renderizado.
 *
 * @function handleDelete
 * Maneja la eliminación de una plantación seleccionado.
 *
 * @function openModal
 * Abre el modal de confirmación de eliminación.
 *
 * @function useEffect
 * Obtiene los plantaciones al montar el componente.
 */

const add_plantacion = () => {
  const [plantacion, setPlantacion] = useState({
    especies: "",
    fechaInicio: "",
    fechaCosecha: "",
    numeroCosecha: "",
    nombreColector: "",
  });
  const [errores, setErrores] = useState({});
  const router = useRouter();

  const handleChange = (field, value) => {
    setPlantacion((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  console.log(plantacion, errores);

  const handleSubmit = async () => {
    const erroresValidacion = validarFormularioPlantacion(plantacion);
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setErrores({});

    const { error } = await supabase.from("plantacion").insert([
      {
        otras_especies: plantacion.especies
          .split(",")
          .map((especie) => especie.trim()),
        fecha_inicio: plantacion.fechaInicio,
        fecha_cosecha: plantacion.fechaCosecha,
        numero_cosecha: plantacion.numeroCosecha,
        nombre_colector: plantacion.nombreColector,
      },
    ]).select();

    if (error) {
      console.error("Error al añadir plantación:", error);
      setErrores({
        general:
          "Error al añadir la plantación. Por favor, inténtalo de nuevo.",
      });
    } else {
      router.back();
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Plantación</Text>

        <TextInput
          style={styles.input}
          placeholder="Número Cosecha"
          value={plantacion.numeroCosecha}
          onChangeText={(text) => handleChange("numeroCosecha", text)}
        />
        {errores.numeroCosecha && (
          <Text style={styles.errorText}>{errores.numeroCosecha}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Nombre Colector"
          value={plantacion.nombreColector}
          onChangeText={(text) => handleChange("nombreColector", text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Especies (separadas por coma)"
          value={plantacion.especies}
          onChangeText={(text) => handleChange("especies", text)}
        />
        {errores.especies && (
          <Text style={styles.errorText}>{errores.especies}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Fecha Inicio (yyyy-mm-dd) "
          value={plantacion.fechaInicio}
          onChangeText={(text) => handleChange("fechaInicio", text)}
        />
        {errores.fechaInicio && (
          <Text style={styles.errorText}>{errores.fechaInicio}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Fecha Cosecha (yyyy-mm-dd)"
          value={plantacion.fechaCosecha}
          onChangeText={(text) => handleChange("fechaCosecha", text)}
        />
        {errores.fechaCosecha && (
          <Text style={styles.errorText}>{errores.fechaCosecha}</Text>
        )}

        {errores.general && (
          <Text style={styles.errorText}>{errores.general}</Text>
        )}
        <Button title="Guardar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginVertical: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#D5DBDB",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default add_plantacion;
