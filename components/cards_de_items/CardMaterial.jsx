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
          width: 300,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          marginBottom: 30
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Card.Title style={{ fontSize: 17 }}>{nombreMaterial}</Card.Title>
        </View>

        <View
          style={{
            flex: 10,
            flexDirection: "row",
            gap: 40,
            margin: 15,
          }}
        >
          <Text style={{ fontSize: 17 }}>
            {cantidad}
            {unidadDeMedida}
          </Text>
        </View>
      </View>
    </>
  );
};

export default CardMaterial;
