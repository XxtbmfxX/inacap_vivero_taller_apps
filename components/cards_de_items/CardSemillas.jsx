import { View, Text } from "react-native";
import React from "react";
import { Card } from "@rneui/base";

const CardSemillas = ({
  codigoBolsa = "123",
  cantidad = "100",
  fechaRecepcion = "2024-01-01",
  fechaColecta = "2024-01-01",
  porcentajeGerminacion = "20%",
  pesoEnviado = "500gr",
  pesoRecibido = "450gr",
  condicionSemilla = "nuevo",
  idEspecie = "E001",
  idProcedencia = "P001",
  idBodega = "B001",
  rutColector = "12345678-9",
}) => {
  return (
    <Card containerStyle={{ padding: 0, borderRadius: 15, width: 300 }}>
      <View style={{ backgroundColor: "lightgray", padding: 15 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Código Bolsa: {codigoBolsa}
          </Text>
          <Text style={{ fontSize: 18 }}>Cantidad: {cantidad}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 16 }}>Fecha Recepción: {fechaRecepcion}</Text>
          <Text style={{ fontSize: 16 }}>Fecha Colecta: {fechaColecta}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 16 }}>
            Peso Enviado: {pesoEnviado}
          </Text>
          <Text style={{ fontSize: 16 }}>
            Peso Recibido: {pesoRecibido}
          </Text>
          <Text style={{ fontSize: 16 }}>
            Germinación: {porcentajeGerminacion}
          </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 16 }}>Condición: {condicionSemilla}</Text>
          <Text style={{ fontSize: 16 }}>Especie: {idEspecie}</Text>
          <Text style={{ fontSize: 16 }}>Procedencia: {idProcedencia}</Text>
          <Text style={{ fontSize: 16 }}>Bodega: {idBodega}</Text>
          <Text style={{ fontSize: 16 }}>Colector: {rutColector}</Text>
        </View>
      </View>
    </Card>
  );
};

export default CardSemillas;
