import { View, Text } from "react-native";
import React from "react";
import { Card } from "@rneui/base";

const CardDespacho = ({
  pedido = "Nombre Pedido",
  fechaSolicitud = "12-03-2024",
  fechaRetiro = "12-05-2024",
  numeroGuia = "123",
  cantidadPlantas = "234",
  numSemillas = "300",
}) => {
  return (
    <>
      <Card.Divider />
      <View
        style={{
          display: "grid",
          position: "relative",
          alignItems: "left",
          backgroundColor: "lightgray",
          width: 350,
          height: 350,
          paddingLeft: 15,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Card.Title>{pedido}</Card.Title>

        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              height: 40,
            }}
          >
            {pedido}
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            {numeroGuia}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text>{fechaSolicitud}</Text>
          <Text>{fechaRetiro}</Text>
        </View>

        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            gap: 50,
            margin: 15,
          }}
        >
          <Text>{cantidadPlantas} #</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 30,
            alignItems: "bottom",
          }}
        >
          <Text>Especie</Text>
          <Text>Especie</Text>
          <Text>Especie</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 30,
            alignItems: "bottom",
          }}
        >
          <Text>{numSemillas}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 30,
            alignItems: "bottom",
          }}
        >
          <Text style={{ fontSize: 17 }}>Observaciones</Text>
        </View>
      </View>
    </>
  );
};

export default CardDespacho;
