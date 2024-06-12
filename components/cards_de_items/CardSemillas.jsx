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
    <>
      <Card.Title>Semillas</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "left",
          backgroundColor: "lightgray",
          width: 350,
          height: 200,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <View
          style={{
            flex: 10,
            flexDirection: "row",
            gap: 20,
            margin: 15,
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Despacho
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            Cantidad #
          </Text>
        </View>

        <View
          style={{
            flex: 30,
            flexDirection: "row",
            gap: 20,
            margin: 10,
          }}
        >
          <Text>FechaColecta</Text>
          <Text>FechaCosecha</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 50,
            margin: 10,
          }}
        >
          <Text>Peso 100 Semillas</Text>
          <Text>Porcentaje Germinación#</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 30,
            margin: 40,
            alignItems: "bottom",
          }}
        >
          <Text>Cod.Bolsa</Text>
          <Text>Condición</Text>
          <Text>Procedencia</Text>
        </View>
      </View>
    </>

    
  );
};

export default CardSemillas;
