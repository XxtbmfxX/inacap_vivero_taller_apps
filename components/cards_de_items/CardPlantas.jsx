import { View, Text } from "react-native";
import React from "react";

import { Card } from "@rneui/base";

const CardPlantas = ({ especie="nombre Especie", sector="1", añoDespacho="2023" }) => {
  return (
    <>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "flex-start",
          backgroundColor: "lightgray",
          width: 300,
          height: 150,
          borderRadius: 15,
          padding: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {especie}
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {sector}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>{añoDespacho}</Text>
        </View>
      </View>
    </>
  );
};

export default CardPlantas;
