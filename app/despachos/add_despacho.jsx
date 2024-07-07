import { router, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useItems } from '../../context/ItemsContext';
import { validarFormularioDespacho } from "./validaciones";
import { supabase } from "../../lib/supabase";

const AgregarDespachoForm = () => {
  const { getDespacho } = useItems();
  const [numeroGuia, setNumeroGuia] = useState('');
  const [nombrePredio, setNombrePredio] = useState('');
  const [fechaSolicitud, setFechaSolicitud] = useState('');
  const [fechaRetiro, setFechaRetiro] = useState('');
  const [cantidadPlantas, setCantidadPlantas] = useState('');
  const [especies, setEspecies] = useState('');
  const [numeroSemanas, setNumeroSemanas] = useState('');
  const [observacion, setObservacion] = useState('');
  const [errores, setErrores] = useState({});
  const router = useRouter();

  const handleSubmit = async () => {
    const erroresValidacion = validarFormularioDespacho(
      numeroGuia,
      nombrePredio,
      fechaSolicitud,
      fechaRetiro,
      cantidadPlantas,
      especies,
      numeroSemanas,
      observacion
    );
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setErrores({});

    const { data, error } = await supabase
      .from('despacho')
      .insert({
        numero_guia_despacho: numeroGuia,
        predio: nombrePredio,
        fecha_solicitud: fechaSolicitud,
        fecha_retiro: fechaRetiro,
        cantidad_de_plantas: cantidadPlantas,
        especies: especies,
        numero_de_semanas: numeroSemanas,
        observaciones: observacion
      })
      .select();

    if (error) {
      console.error("Error al añadir despacho:", error);
      setErrores({ general: "Error al añadir el despacho. Por favor, inténtalo de nuevo." });
    } else {
      getDespacho();
      router.back();
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Despacho</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de Guía Despacho"
          placeholderTextColor="#000"
          value={numeroGuia}
          onChangeText={setNumeroGuia}
        />
        {errores.numeroGuia && (
          <Text style={styles.errorText}>{errores.numeroGuia}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Nombre Predio"
          placeholderTextColor="#000"
          value={nombrePredio}
          onChangeText={setNombrePredio}
        />
        {errores.nombrePredio && (
          <Text style={styles.errorText}>{errores.nombrePredio}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Fecha Solicitud"
          placeholderTextColor="#000"
          value={fechaSolicitud}
          onChangeText={setFechaSolicitud}
        />
        {errores.fechaSolicitud && (
          <Text style={styles.errorText}>{errores.fechaSolicitud}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Fecha Retiro"
          placeholderTextColor="#000"
          value={fechaRetiro}
          onChangeText={setFechaRetiro}
        />
        {errores.fechaRetiro && (
          <Text style={styles.errorText}>{errores.fechaRetiro}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Cantidad de Plantas"
          placeholderTextColor="#000"
          value={cantidadPlantas}
          onChangeText={setCantidadPlantas}
        />
        {errores.cantidadPlantas && (
          <Text style={styles.errorText}>{errores.cantidadPlantas}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Especies"
          placeholderTextColor="#000"
          value={especies}
          onChangeText={setEspecies}
        />
        {errores.especies && (
          <Text style={styles.errorText}>{errores.especies}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Número de Semanas"
          placeholderTextColor="#000"
          value={numeroSemanas}
          onChangeText={setNumeroSemanas}
        />
        {errores.numeroSemanas && (
          <Text style={styles.errorText}>{errores.numeroSemanas}</Text>
        )}
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Observación"
          placeholderTextColor="#000"
          multiline
          value={observacion}
          onChangeText={setObservacion}
        />
        {errores.observacion && (
          <Text style={styles.errorText}>{errores.observacion}</Text>
        )}
        {errores.general && (
          <Text style={styles.errorText}>{errores.general}</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
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

export default AgregarDespachoForm;
