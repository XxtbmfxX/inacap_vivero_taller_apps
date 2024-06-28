import { View, Text } from "react-native";
import React from "react";
import { Card } from "@rneui/base";


//acá agregué actualizarTarea como parámetro y la puse en actualizar tarea
const CardTareas = ({ nombreTarea = "Nombre de la Tarea", descripción = "Descripción de la Tarea", actualizarTarea }) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.cardTitle}>{nombreTarea}</Card.Title>
      <Card.Divider />
      <Text style={styles.cardDescription}>{descripción}</Text>

      <Text onPress={actualizarTarea} style={{color: "green"}}>Actualizar Tarea ✨✨ </Text>

    </Card>
  );
};

const styles = {
  cardContainer: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#f0f0f0",
    elevation: 5,
    marginVertical: 10,
    width: 300,
    marginVertical: 30 
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
