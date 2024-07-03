// views/CardDespacho.js
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "@rneui/base";
import { formatDate } from "../../lib/utils";

const CardDespacho = ({
  numeroGuiaDespacho = "N/A",
  observaciones = "N/A",
  numeroDeSemanas = "N/A",
  predio = "N/A",
  cantidadDePlantas = "N/A",
  fechaRetiro = "N/A",
  fechaSolicitud = "N/A",
  idComuna = "N/A",
  idBeneficiario = "N/A",
  idPrograma = "N/A",
  rutEncargado = "N/A",
}) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.title}>Despacho</Card.Title>
      <Card.Divider />

      <View style={styles.row}>
        <Text style={styles.label}>N° Guía Despacho:</Text>
        <Text style={styles.value}>{numeroGuiaDespacho}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>N° Semanas:</Text>
        <Text style={styles.value}>{numeroDeSemanas}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Predio:</Text>
        <Text style={styles.value}>{predio}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cantidad de Plantas:</Text>
        <Text style={styles.value}>{cantidadDePlantas}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Fecha Retiro:</Text>
        <Text style={styles.value}>{formatDate(fechaRetiro)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Fecha Solicitud:</Text>
        <Text style={styles.value}>{formatDate(fechaSolicitud)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>ID Comuna:</Text>
        <Text style={styles.value}>{idComuna}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>ID Beneficiario:</Text>
        <Text style={styles.value}>{idBeneficiario}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>ID Programa:</Text>
        <Text style={styles.value}>{idPrograma}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>RUT Encargado:</Text>
        <Text style={styles.value}>{rutEncargado}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Observaciones:</Text>
      </View>
      <Text> {observaciones}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    padding: 15,
    width: 350,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    fontSize: 15,
  },
});

export default CardDespacho;
