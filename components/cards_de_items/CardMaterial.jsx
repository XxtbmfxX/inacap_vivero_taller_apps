import { View, Text } from "react-native";
import React from "react";

import { Card } from "@rneui/base";

const CardMaterial = ({
  nombreMaterial = "Nombre del Material",
  unidadDeMedida = "cm",
  cantidad = 12,
}) => {
  return (
    <>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "left",
          backgroundColor: "lightgray",
          width: 350,
          borderRadius: 15,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Card.Title style={{ fontSize: 30 }}>{nombreMaterial}</Card.Title>
        </View>

        <View>
          <Text style={{ fontSize: 30, margin: 20 }}>
            {cantidad}-{unidadDeMedida}
          </Text>
        </View>
      </View>
    </>
  );
};

export default CardMaterial;
