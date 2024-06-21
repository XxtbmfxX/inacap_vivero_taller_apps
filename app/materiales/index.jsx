import { ScrollView, Text } from "react-native";
import React from "react";


import CardMaterial from "../../components/cards_de_items/CardMaterial";

const db = [
  {
    nombreMaterial: "Cemento",
    unidadDeMedida: "kg",
    cantidad: 50
  },
  {
    nombreMaterial: "Cemento",
    unidadDeMedida: "kg",
    cantidad: 50
  },
  {
    nombreMaterial: "Cemento",
    unidadDeMedida: "kg",
    cantidad: 50
  },
  {
    nombreMaterial: "Arena",
    unidadDeMedida: "m³",
    cantidad: 2
  },
  {
    nombreMaterial: "Ladrillos",
    unidadDeMedida: "unidades",
    cantidad: 500
  },
  {
    nombreMaterial: "Varillas de acero",
    unidadDeMedida: "metros",
    cantidad: 100
  },
  {
    nombreMaterial: "Madera",
    unidadDeMedida: "m³",
    cantidad: 1
  }
];

const index = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      {db.map((material, indice) => (
        <CardMaterial
          nombreMaterial={material.nombreMaterial}
          unidadDeMedida={material.unidadDeMedida}
          cantidad={material.cantidad}
          key={indice}
        />
      ))}
    </ScrollView>
  );
};

export default index;
