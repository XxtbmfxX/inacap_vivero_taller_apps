import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "@rneui/base";
import { supabase } from "../../lib/supabase";

const CardPlantacion = ({
  plantacion,
  fechaInicio,
  fechaCosecha,
  especies,
  numeroCosecha,
  nombreColector,
  openModal,
  onUpdate,
  otrasEspecies
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newPlantacion, setNewPlantacion] = useState(plantacion);
  const [newFechaInicio, setNewFechaInicio] = useState(fechaInicio);
  const [newFechaCosecha, setNewFechaCosecha] = useState(fechaCosecha);
  const [newEspecies, setNewEspecies] = useState(otrasEspecies.join(","));
  const [newNombreColector, setNewNombreColector] = useState(nombreColector);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from('plantacion')
      .update({
        plantacion: newPlantacion,
        fecha_inicio: newFechaInicio,
        fecha_cosecha: newFechaCosecha,
        otras_especies: newEspecies.split(",").map(e => e.trim()),
        nombre_colector: newNombreColector,
      })
      .eq('numero_cosecha', numeroCosecha);

    if (!error) {
      onUpdate();
      setEditMode(false);
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <Card.Divider />
      <View style={styles.cardContainer}>
        {editMode ? (
          <>
            <TextInput
              style={styles.input}
              value={newPlantacion}
              onChangeText={setNewPlantacion}
              placeholder="Plantación"
            />
            <TextInput
              style={styles.input}
              value={newFechaInicio}
              onChangeText={setNewFechaInicio}
              placeholder="Fecha de Inicio"
            />
            <TextInput
              style={styles.input}
              value={newFechaCosecha}
              onChangeText={setNewFechaCosecha}
              placeholder="Fecha de Cosecha"
            />
            <TextInput
              style={styles.input}
              value={newEspecies}
              onChangeText={setNewEspecies}
              placeholder="Especies (separadas por coma)"
            />
            <TextInput
              style={styles.input}
              value={newNombreColector}
              onChangeText={setNewNombreColector}
              placeholder="Nombre del Colector"
            />
            <Button title="Guardar" onPress={handleUpdate} />
            <Button title="Cancelar" onPress={() => setEditMode(false)} />
          </>
        ) : (
          <>
            <Button
              buttonStyle={{ backgroundColor: "red" }}
              onPress={() => openModal(numeroCosecha)}
            >
              Eliminar
            </Button>
            <View style={styles.header}>
              <Card.Title style={styles.title}>Plantación: {plantacion}</Card.Title>
              <Text style={styles.text}>id: {numeroCosecha}</Text>
              <Text style={styles.text}>Fecha Inicio: {fechaInicio}</Text>
              <Text style={styles.text}>Fecha Termino: {fechaCosecha}</Text>
            </View>
            <Text style={styles.subtitle}>Especies</Text>
            <View style={styles.especiesContainer}>
              <Text style={styles.especieText}>{otrasEspecies.join(", ")}</Text>
            </View>
            <Text style={styles.text}>Nombre del Colector: {nombreColector}</Text>
            <Text style={styles.text}>Número Cosecha: {numeroCosecha}</Text>
            <Button title="Actualizar" onPress={() => setEditMode(true)} />
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'lightgray',
    borderRadius: 15,
    padding: 10,
    width: 350,
    justifyContent: 'space-between'
  },
  header: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  especiesContainer: {
    flexDirection: 'row',
  },
  especieText: {
    marginRight: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default CardPlantacion;
