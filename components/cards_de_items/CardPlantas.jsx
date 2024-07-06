import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Card } from "@rneui/base";

const CardPlantas = ({
  añoDespacho = "N/A",
  numeroPlatabanda = "N/A",
  idEspecie = "N/A",
  numeroCosecha = "N/A",
  numeroSector = "N/A",
  idPlanta = "N/A",
  openModal

}) => {

  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Divider />
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
        <Text style={styles.value}> {añoDespacho}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cosecha:</Text>
        <Text style={styles.value}>{numeroCosecha}</Text>
      </View>
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
});

export default CardPlantas;
