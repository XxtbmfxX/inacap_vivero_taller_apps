import { View, Text, TouchableOpacity } from "react-native";
import React, { forwardRef } from "react";
import { Card } from "@rneui/base";
import UpdateTarea from "../../app/tareas/update_tarea";

const CardTareas = forwardRef(({ nombreTarea = "Nombre de la Tarea", descripción = "Descripción de la Tarea" }, ref) => {
  return (
    <TouchableOpacity onPress={ref}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>{nombreTarea}</Card.Title>
        <Card.Divider />
        <Text style={styles.cardDescription}>{descripción}</Text>
      </Card>
    </TouchableOpacity>
  );
});

const styles = {
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
};

export default CardTareas;