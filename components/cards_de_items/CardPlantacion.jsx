import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "@rneui/base";

const CardPlantacion = ({
  plantacion = "titulo plantación",
  fechaInicio = "2024-07",
  fechaCosecha = "2025",
  especies = ["especie1", "especie2", "especie3"],
  numeroCosecha = 420,
  nombreColector = "Juan"
}) => {
  return (
    <>
      <Card.Divider />
      <View style={styles.cardContainer}>
        <View style={styles.header}>
          <Card.Title style={styles.title}>Plantación: {plantacion}</Card.Title>
          <Text style={styles.text}>Fecha Inicio: {fechaInicio}</Text>
          <Text style={styles.text}>Fecha Termino: {fechaCosecha}</Text>
        </View>
        <Text style={styles.subtitle}>Especies</Text>
        <View style={styles.especiesContainer}>
          <Text style={styles.especieText}>{especies}</Text>

        </View>
        <Text style={styles.text}>Número Cosecha: {nombreColector}</Text>
        <Text style={styles.text}>Número Cosecha: {numeroCosecha}</Text>
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
});

export default CardPlantacion;
