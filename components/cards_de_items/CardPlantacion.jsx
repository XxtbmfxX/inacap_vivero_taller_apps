import { View, Text } from "react-native";
import React from "react";
import { Card } from "@rneui/base";

const CardPlantacion = ({
  plantacion = "titulo plantación",
  fechaInicio = "2024-07",
  fechaTermino = "2025",
  especies = ["especie1", "especie2", "especie3"],
  numeroCosecha = 420,
}) => {
  return (
    <>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "left",
          backgroundColor: "lightgray",
          height: 150,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <View
          style={{
            flex: 40,
            flexDirection: "row",
            gap: 80,
            margin: 15,
            alignItems: "baseline",
          }}
        >
      <Card.Title>{plantacion}</Card.Title>

          <Text>{fechaInicio}</Text>

          <Text>{fechaTermino}</Text>
        </View>

        <View
          style={{
            flex: 10,
            flexDirection: "row",
            gap: 40,
            margin: 15,
          }}
        >
          {
            especies.map((especie) => (
              <Text>{especie}</Text>
            ))
          
          }

          <Text>{numeroCosecha}</Text>
        </View>
      </View>
    </>
  );
};

export default CardPlantacion;
