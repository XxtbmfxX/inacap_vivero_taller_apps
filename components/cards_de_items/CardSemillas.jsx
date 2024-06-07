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
    <Card>



      <View style="" >
        <Text>{despacho}</Text>
        <Text>{cantidad}</Text>
        <Text>{fechaColecta}</Text>
        <Text>{fechaCosecha}</Text>
      </View>

      <Text>{peso100Semillas}</Text>
      <Text>{porcentajeGerminación}</Text>
      <Text>{códigoBolsa}</Text>
      <Text>{condición}</Text>
      <Text>{procedencia}</Text>
    </Card>
  );
};

export default CardSemillas;
