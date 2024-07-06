import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "@rneui/base";
import { supabase } from "../../lib/supabase";

const CardPlantas = ({
  añoDespacho,
  numeroPlatabanda,
  idEspecie,
  numeroCosecha,
  numeroSector,
  idPlanta,
  openModal,
  onUpdate,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newAñoDespacho, setNewAñoDespacho] = useState(añoDespacho);
  const [newNumeroPlatabanda, setNewNumeroPlatabanda] = useState(numeroPlatabanda);
  const [newIdEspecie, setNewIdEspecie] = useState(idEspecie);
  const [newNumeroCosecha, setNewNumeroCosecha] = useState(numeroCosecha);
  const [newNumeroSector, setNewNumeroSector] = useState(numeroSector);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from('planta')
      .update({
        año_despacho: newAñoDespacho,
        numero_platabanda: newNumeroPlatabanda,
        id_especie: newIdEspecie,
        numero_cosecha: newNumeroCosecha,
        numero_sector: newNumeroSector,
      })
      .eq('id_planta', idPlanta);

    if (!error) {
      onUpdate();
      setEditMode(false);
    } else {
      console.log(error.message);
    }
  };

  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Divider />
      {editMode ? (
        <>
          <TextInput
            style={styles.input}
            value={newAñoDespacho}
            onChangeText={setNewAñoDespacho}
            placeholder="Año Despacho"
          />
          <TextInput
            style={styles.input}
            value={newNumeroPlatabanda}
            onChangeText={setNewNumeroPlatabanda}
            placeholder="Número Platabanda"
          />
          <TextInput
            style={styles.input}
            value={newIdEspecie}
            onChangeText={setNewIdEspecie}
            placeholder="ID Especie"
          />
          <TextInput
            style={styles.input}
            value={newNumeroCosecha}
            onChangeText={setNewNumeroCosecha}
            placeholder="Número Cosecha"
          />
          <TextInput
            style={styles.input}
            value={newNumeroSector}
            onChangeText={setNewNumeroSector}
            placeholder="Número Sector"
          />
          <Button title="Guardar" onPress={handleUpdate} />
          <Button title="Cancelar" onPress={() => setEditMode(false)} />
        </>
      ) : (
        <>
          <View style={styles.row}>
            <Button
              buttonStyle={{ backgroundColor: "red" }}
              onPress={() => openModal(idPlanta)}
            >
              Eliminar
            </Button>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Id Planta:</Text>
            <Text style={styles.value}>{idPlanta}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Especie:</Text>
            <Text style={styles.value}>{idEspecie}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Sector:</Text>
            <Text style={styles.value}>{numeroSector}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Platabanda:</Text>
            <Text style={styles.value}>{numeroPlatabanda}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Año Despacho:</Text>
            <Text style={styles.value}>{añoDespacho}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Cosecha:</Text>
            <Text style={styles.value}>{numeroCosecha}</Text>
          </View>
          <Button title="Actualizar" onPress={() => setEditMode(true)} />
        </>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    width: 350,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
  },
  value: {
    fontSize: 15,
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

export default CardPlantas;
