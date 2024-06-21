import { View, Text } from "react-native";
import React from "react";
import { Card } from '@rneui/base';

const CardQuimicos = ({
  fechaIngreso,
  cantidad,
  contenido,
  necesidadesltkg,
  categoria,
  presentacion,
  stockMinimo,
  stock
}) => {
  return (
    <>
      <Card.Divider />
      <View
        style={{
          alignItems: "flex-start",
          backgroundColor: "lightgray",
          width: 350,
          padding: 15,
          borderRadius: 15,
          marginBottom: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {contenido}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {fechaIngreso}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
            gap: 5
          }}
        >
          <Text style={{ fontSize: 16 }}>{categoria}-</Text>
          <Text style={{ fontSize: 16 }}>{presentacion}</Text>
        </View>

        <View
          style={{
            display: "grid",
            justifyContent: "space-between",
            marginBottom: 10,
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Cantidad: {cantidad}</Text>
          <Text style={{ fontSize: 16 }}>Stock Mínimo: {stockMinimo}</Text>
          <Text style={{ fontSize: 16 }}>Stock Actual: {stock}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Necesidades: {necesidadesltkg}</Text>
        </View>
      </View>
    </>
  );
};

export default CardQuimicos;
