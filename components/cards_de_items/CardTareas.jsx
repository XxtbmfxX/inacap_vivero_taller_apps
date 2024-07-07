import { Text, TextInput, StyleSheet } from "react-native";
import React, { Children, useState } from "react";
import { Button, Card } from "@rneui/base";
import { supabase } from "../../lib/supabase";

const CardTareas = ({
  nombreTarea,
  descripción,
  idTarea,
  onUpdate,
  openModal,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newNombreTarea, setNewNombreTarea] = useState(nombreTarea);
  const [newDescripcion, setNewDescripcion] = useState(descripción);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("tarea")
      .update({
        nombre_tarea: newNombreTarea,
        descripcion_tarea: newDescripcion,
      })
      .eq("id_tarea", idTarea);

    if (!error) {
      onUpdate();
      setEditMode(false);
    } else {
      console.log(error.message);
    }
  };

  return (
    <Card containerStyle={styles.cardContainer}>
      {editMode ? (
        <>
          <TextInput
            style={styles.input}
            value={newNombreTarea}
            onChangeText={setNewNombreTarea}
            placeholder="Nombre de la Tarea"
          />
          <TextInput
            style={styles.input}
            value={newDescripcion}
            onChangeText={setNewDescripcion}
            placeholder="Descripción"
          />
          <Button title="Guardar" onPress={handleUpdate} />
          <Button title="Cancelar" onPress={() => setEditMode(false)} />
        </>
      ) : (
        <>
          <Button
            buttonStyle={{ backgroundColor: "red" }}
            onPress={() => openModal(idTarea)}
          >
            Eliminar
          </Button>
          <Card.Title style={styles.cardTitle}>{nombreTarea}</Card.Title>

          <Card.Divider />
          <Text style={styles.cardDescription}>
            Id:{idTarea} {descripción}
          </Text>
          <Button
            title="Actualizar"
            buttonStyle={{ marginTop: 20 }}
            onPress={() => setEditMode(true)}
          />
        </>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#f0f0f0",
    elevation: 5,
    marginVertical: 10,
    width: 300,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    fontSize: 16,
    color: "#666",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default CardTareas;
