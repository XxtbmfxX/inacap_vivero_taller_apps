import { ScrollView, Text } from "react-native";
import React from "react";

import CardPlantas  from "../../components/cards_de_items/CardPlantas";


const db = [
  {
    especie: "🌲 Pino",
    sector: "Norte",
    añoDespacho: 2022
  },
  {
    especie: "🌳 Roble",
    sector: "Sur",
    añoDespacho: 2021
  },
  {
    especie: "🌴 Palmera",
    sector: "Oeste",
    añoDespacho: 2023
  },
  {
    especie: "🌵 Cactus",
    sector: "Este",
    añoDespacho: 2020
  },
  {
    especie: "🍁 Arce",
    sector: "Centro",
    añoDespacho: 2022
  },
  {
    especie: "🌿 Helecho",
    sector: "Noroeste",
    añoDespacho: 2021
  },
  {
    especie: "🌸 Cerezo",
    sector: "Suroeste",
    añoDespacho: 2023
  },
  {
    especie: "🍀 Trébol",
    sector: "Noreste",
    añoDespacho: 2020
  },
  {
    especie: "🌺 Hibisco",
    sector: "Sureste",
    añoDespacho: 2022
  },
  {
    especie: "🍂 Haya",
    sector: "Noroeste",
    añoDespacho: 2021
  }
];

const index = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      {db.map((planta, indice) => (
        <CardPlantas
          especie={planta.especie}
          sector={planta.sector}
          añoDespacho={planta.añoDespacho}
          key={indice}
        />
      ))}
      <Text>a</Text>
    </ScrollView>
  );
};

export default index;
