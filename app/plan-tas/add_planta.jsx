import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { validarFormularioPlanta } from "./validaciones";
import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";

const add_planta = () => {
  const { getPlantas } = useItems();

  const [especie, setEspecie] = useState("");
  const [especies, setEspecies] = useState([]);

  const [numeroCosechas, setNumeroCosechas] = useState([]);
  const [numeroCosecha, setNumeroCosecha] = useState("");

  const [numeroSectores, setNumeroSectores] = useState([]);
  const [numeroSector, setNumeroSector] = useState("");

  const [numeroPlatabanda, setNumeroPlatabanda] = useState("20");
  const [fechaDespacho, setFechaDespacho] = useState("2022-02-02");

  const [errores, setErrores] = useState({});

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

  const cargarNumeroCosechas = async () => {
    const { data, error } = await supabase
      .from("plantacion")
      .select("numero_cosecha");

    if (error) {
      console.error("Error al cargar cosecha:", error);
    } else {
      setNumeroCosechas(data);
    }
  };

  const cargarNumeroSectores = async () => {
    const { data, error } = await supabase
      .from("sector")
      .select("numero_sector");

    if (error) {
      console.error("Error al cargar sector:", error);
    } else {
      setNumeroSectores(data);
    }
  };


  useEffect(() => {
    cargarNumeroCosechas();
    cargarEspecies();
    cargarNumeroSectores()
  }, []);

  const handleSubmit = async () => {
    const erroresValidacion = validarFormularioPlanta(
      especie,
      numeroPlatabanda,
      numeroCosecha,
      numeroSector,
      fechaDespacho
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
      setErrores({
        general:
          "Error al obtener el id de la especie. Por favor, inténtalo de nuevo.",
      });
      return;
    }

    const { data: plantacionData, error: plantacionError } = await supabase
      .from("plantacion")
      .select("numero_cosecha")
      .eq("numero_cosecha", numeroCosecha)
      .single();

    if (plantacionError || !plantacionData) {
      console.error(
        "Error al obtener el id de la plantación:",
        plantacionError
      );
      setErrores({
        general:
          "Error al obtener el id de la plantación. Por favor, inténtalo de nuevo.",
      });
      return;
    }

    const { data: sectorData, error: sectorError } = await supabase
      .from("plantacion")
      .select("numero_cosecha")
      .eq("numero_cosecha", numeroCosecha)
      .single();

    if (sectorError || !sectorData) {
      console.error(
        "Error al obtener el id de la plantación:",
        sectorError
      );
      setErrores({
        general:
          "Error al obtener el id de la plantación. Por favor, inténtalo de nuevo.",
      });
      return;
    }

    const { data, error } = await supabase.from("planta").insert([
      {
        numero_platabanda: numeroPlatabanda,
        id_especie: especieData.id_especie,
        numero_cosecha: numeroCosecha,
        numero_sector: numeroSector,
        fecha_despacho: new Date(fechaDespacho),
      },
    ]);

    if (error) {
      console.error("Error al añadir planta:", error);
      setErrores({
        general: "Error al añadir la planta. Por favor, inténtalo de nuevo.",
      });
    } else {
      getPlantas();
      router.back();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Agregar Plantas</Text>

        <Picker
          selectedValue={especie}
          onValueChange={(itemValue) => setEspecie(itemValue)}
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
        </Picker>
        {errores.especie && (
          <Text style={styles.errorText}>{errores.especie}</Text>
        )}

        <Picker
          selectedValue={numeroCosecha}
          onValueChange={(itemValue) => setNumeroCosecha(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Seleccione una cosecha" value="" />
          {numeroCosechas.map((cosecha) => (
            <Picker.Item
              key={cosecha.numero_cosecha}
              label={cosecha.numero_cosecha}
              value={cosecha.numero_cosecha}
            />
          ))}
        </Picker>
        {errores.numeroCosecha && (
          <Text style={styles.errorText}>{errores.numeroCosecha}</Text>
        )}

        <Picker
          selectedValue={numeroSector}
          onValueChange={(itemValue) => setNumeroSector(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Seleccione un sector" value="" />
          {numeroSectores.map((sector) => (
            <Picker.Item
              key={sector.numero_sector}
              label={sector.numero_sector}
              value={sector.numero_sector}
            />
          ))}
        </Picker>
        {errores.numeroSector && (
          <Text style={styles.errorText}>{errores.numeroSector}</Text>
        )}


        <TextInput
          style={styles.input}
          placeholder="Año de Despacho"
          value={fechaDespacho}
          onChangeText={setFechaDespacho}
          keyboardType="text"
        />
        {errores.fechaDespacho && (
          <Text style={styles.errorText}>{errores.fechaDespacho}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Número de Cosecha"
          value={numeroCosecha}
          onChangeText={setNumeroCosecha}
          keyboardType="numeric"
        />
        {errores.numeroCosecha && (
          <Text style={styles.errorText}>{errores.numeroCosecha}</Text>
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
