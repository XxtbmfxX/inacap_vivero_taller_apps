import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
// import { Picker } from '@react-native-picker/picker';
import { validarFormularioPlanta } from "./validaciones";
import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";

const add_planta = () => {
  const { getPlantas } = useItems();
  const [especie, setEspecie] = useState("");
  const [especies, setEspecies] = useState([]);
  const [numeroPlatabanda, setNumeroPlatabanda] = useState("");
  const [añoDespacho, setAñoDespacho] = useState("");
  const [numeroSector, setNumeroSector] = useState("");
  const [errores, setErrores] = useState({});
  const router = useRouter();

  useEffect(() => {
    const cargarEspecies = async () => {
      const { data, error } = await supabase
        .from("especie")
        .select("id_especie, nombre_especie");

      if (error) {
        console.error("Error al cargar especies:", error);
      } else {
        setEspecies(data);
      }
    };

    cargarEspecies();
  }, []);

  const handleSubmit = async () => {
    const erroresValidacion = validarFormularioPlanta(
      especie,
      añoDespacho,
      numeroSector,
      numeroPlatabanda
    );
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setErrores({});

    const { data: especieData, error: especieError } = await supabase
      .from("especie")
      .select("id_especie")
      .eq("nombre_especie", especie)
      .single();

    if (especieError || !especieData) {
      console.error("Error al obtener el id de la especie:", especieError);
      setErrores({ general: "Error al obtener el id de la especie. Por favor, inténtalo de nuevo." });
      return;
    }

    const id_especie = especieData.id_especie;

    const { data, error } = await supabase
      .from("planta")
      .insert([{
        id_especie,
        anio_despacho: añoDespacho,
        numero_platabanda: numeroPlatabanda,
        numero_sector: numeroSector,
      }]);

    if (error) {
      console.error("Error al añadir planta:", error);
      setErrores({ general: "Error al añadir la planta. Por favor, inténtalo de nuevo." });
    } else {
      getPlantas();
      router.back();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Plantas</Text>
        {/* <Picker
          selectedValue={especie}
          onValueChange={(itemValue, itemIndex) => setEspecie(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Seleccione una especie" value="" />
          {especies.map((especie) => (
            <Picker.Item
              key={especie.id_especie}
              label={especie.nombre_especie}
              value={especie.nombre_especie}
            />
          ))}
        </Picker> */}
        {errores.especie && (
          <Text style={styles.errorText}>{errores.especie}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Año de Despacho"
          value={añoDespacho}
          onChangeText={setAñoDespacho}
          keyboardType="numeric"
        />
        {errores.añoDespacho && (
          <Text style={styles.errorText}>{errores.añoDespacho}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Número de Sector"
          value={numeroSector}
          onChangeText={setNumeroSector}
        />
        {errores.numeroSector && (
          <Text style={styles.errorText}>{errores.numeroSector}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Número Platabanda"
          value={numeroPlatabanda}
          onChangeText={setNumeroPlatabanda}
        />
        {errores.numeroPlatabanda && (
          <Text style={styles.errorText}>{errores.numeroPlatabanda}</Text>
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

export default add_planta;
