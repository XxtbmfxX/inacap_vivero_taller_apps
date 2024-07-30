import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from "../../lib/supabase";
import { useItems } from '../../context/ItemsContext';
import { validarFormularioMaterial } from "./validaciones";
/**
 * Componente add_materiales que muestra una lista de materiales con la capacidad de agregar y eliminar.
 *
 * @component
 * @returns {JSX.Element} El componente renderizado.
 *
 * @function handleDelete
 * Maneja la eliminación de un material seleccionado.
 *
 * @function openModal
 * Abre el modal de confirmación de eliminación.
 *
 * @function useEffect
 * Obtiene los materiales al montar el componente.
 */
const add_materiales = () => {
  const { getMateriales } = useItems();
  const [nombreMaterial, setNombreMaterial] = useState("");
  const [unidadDeMedida, setUnidadDeMedida] = useState("");
  const [cantidadMaterial, setCantidadMaterial] = useState("");
  const [errores, setErrores] = useState({});
  const router = useRouter();

  const handleSubmit = async () => {
    const erroresValidacion = validarFormularioMaterial(
      nombreMaterial,
      unidadDeMedida,
      cantidadMaterial
    );
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }
    setErrores({});
    const { data, error } = await supabase
      .from("material")
      .insert([{
        nombre: nombreMaterial,
        unidad_medida: unidadDeMedida,
        cantidad: cantidadMaterial
      }]).select();

    if (error) {
      console.error("Error al añadir material: ", error);
      setErrores({
        general: "Error al añadir el material. Por favor, inténtalo de nuevo."
      });
    } else {
      getMateriales();
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar Materiales</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Material"
        value={nombreMaterial}
        onChangeText={setNombreMaterial}
      />
      {errores.nombre && <Text style={styles.errorText}>{errores.nombre}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Unidad de Medida"
        value={unidadDeMedida}
        onChangeText={setUnidadDeMedida}
      />
      {errores.unidadDeMedida && (
        <Text style={styles.errorText}>{errores.unidadDeMedida}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        keyboardType="numeric"
        value={cantidadMaterial}
        onChangeText={setCantidadMaterial}
      />
      {errores.cantidad && <Text style={styles.errorText}>{errores.cantidad}</Text>}
      {errores.general && (
        <Text style={styles.errorText}>{errores.general}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: "#358",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default add_materiales;
