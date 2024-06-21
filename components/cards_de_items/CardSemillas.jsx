import { View, Text } from "react-native";
import React from "react";
import { Card } from "@rneui/base";

const CardSemillas = ({
  despacho = "nombre",
  cantidad = "100",
  fechaColecta = "2024",
  fechaCosecha = "2024",
  peso100Semillas = "500gr",
  porcentajeGerminación = "20%",
  códigoBolsa = "123",
  condición = "nuevo",
  procedencia = "Máfil",
}) => {
  return (
    <Card containerStyle={{ padding: 0, borderRadius: 15, width: 300, }}>
      <View
        style={{
          backgroundColor: "lightgray",
          padding: 15,
        }}
      >
        <View
          style={{
            display: "grid",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Despacho: {despacho}
          </Text>
          <Text style={{ fontSize: 18 }}>Cantidad: {cantidad}</Text>
        </View>

        <View
          style={{
            display: "grid",

            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Fecha Colecta: {fechaColecta}</Text>
          <Text style={{ fontSize: 16 }}>Fecha Cosecha: {fechaCosecha}</Text>
        </View>

        <View
          style={{
            display: "grid",

            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Peso 100 Semillas: {peso100Semillas}
          </Text>
          <Text style={{ fontSize: 16 }}>
            Germinación: {porcentajeGerminación}
          </Text>
        </View>

        <View
          style={{
            display: "grid",

            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Código Bolsa: {códigoBolsa}</Text>
          <Text style={{ fontSize: 16 }}>Condición: {condición}</Text>
          <Text style={{ fontSize: 16 }}>Procedencia: {procedencia}</Text>
        </View>
      </View>
    </Card>
  );
};

export default CardSemillas;
