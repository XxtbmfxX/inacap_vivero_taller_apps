import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { validarFormularioQuimico } from "./validaciones";
import { useItems } from "../../context/ItemsContext";
import { supabase } from "../../lib/supabase";

const AgregarQuimicosForm = () => {
  const { getQuímicos } = useItems();

  const [errores, setErrores] = useState({});

  const [quimico, setQuimico] = useState({
    nombre: "",
    contenido: "",
    categoria: "",
    presentacion: "",
    cantidad: "",
    etiqueta: "",
  });

  const handleChange = (field, value) => {
    setQuimico((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {

    const erroresValidacion = validarFormularioQuimico(quimico);
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }


    const { data, error } = await supabase.from("quimico").insert([
      {
        nombre: quimico.nombre,
        contenido: quimico.contenido,
        categoria: quimico.categoria,
        presentacion: quimico.presentacion,
        cantidad: quimico.cantidad,
        id_etiqueta: quimico.etiqueta,
      },
    ]);

    if (error) {
      console.error("Error al añadir tarea:", error);
      setErrores({
        general: "Error al añadir la tarea. Por favor, inténtalo de nuevo.",
      });
    } else {
      getQuímicos();
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Químicos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={quimico.nombre}
        onChangeText={(text) => handleChange("nombre", text)}
      />
      {errores.nombre && <Text style={styles.errorText}>{errores.nombre}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Contenido"
        value={quimico.contenido}
        onChangeText={(text) => handleChange("contenido", text)}
      />
      {errores.contenido && (
        <Text style={styles.errorText}>{errores.contenido}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Categoría (1, 2)"
        value={quimico.categoria}
        onChangeText={(text) => handleChange("categoria", text)}
      />
     
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        value={quimico.cantidad}
        onChangeText={(text) => handleChange("cantidad", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Presentación"
        value={quimico.presentacion}
        onChangeText={(text) => handleChange("presentacion", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Etiqueta (1)"
        value={quimico.etiqueta}
        onChangeText={(text) => handleChange("etiqueta", text)}
      />


       {errores.general && <Text style={styles.errorText}>{errores.general}</Text>}

      <Button title="Guardar" onPress={handleSubmit} />
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default AgregarQuimicosForm;
