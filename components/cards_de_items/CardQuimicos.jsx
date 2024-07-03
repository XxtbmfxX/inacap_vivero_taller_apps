import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "@rneui/base";

const CardQuimicos = ({
  fechaIngreso,
  cantidad,
  contenido,
  necesidadesltkg,
  categoria,
  presentacion,
  stockMinimo,
  stock,
  nombre,
}) => {

  const fecha = new Date(fechaIngreso);


  return (
    <>
      <Card.Divider />
      <View style={styles.cardContainer}>
          
        <View style={styles.header}>
          <Text style={styles.contenido}>Contenido: {contenido}</Text>
          <Text style={styles.contenido}>Nombre: {nombre}</Text>
        </View>
        <Text style={styles.fechaIngreso}>Fecha Ingreso: {fecha.toISOString().split('T')[0]}</Text>
        <View style={styles.categoryPresentation}>
          <Text style={styles.text}>Categoría: {categoria}</Text>
        </View>
        <Text style={styles.text}>Presentación: {presentacion}</Text>
        <View style={styles.details}>
          <Text style={styles.text}>Cantidad: {cantidad}</Text>
          <Text style={styles.text}>Stock Mínimo: {stockMinimo}</Text>
          {/* <Text style={styles.text}>Stock Actual: {stock}</Text> */}
        </View>
        <View style={styles.needs}>
          {/* <Text style={styles.text}>Necesidades: {necesidadesltkg}</Text> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "flex-start",
    backgroundColor: "lightgray",
    width: 350,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    gap: 10
  },
  header: {
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 20,
    gap: 20
  },
  contenido: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fechaIngreso: {
    fontSize: 16,
  },
  categoryPresentation: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  text: {
    fontSize: 16,
  },
  details: {
    justifyContent: "space-between",
    
  },
  needs: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
});

export default CardQuimicos;
