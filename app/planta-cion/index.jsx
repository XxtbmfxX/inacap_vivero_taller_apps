import { View, Text, ScrollView } from "react-native";
import React from "react";

import CardPlatacion from "../../components/cards_de_items/CardPlantacion";

const db = [
  {
    especies: ["rosas", "hortalizas", "menta"],
    fechaInicio: "16-02-2024",
    fechaTermino: "16-03-2024",
    numeroCosecha: 3,
    plantacion: "🤯🤯🤯",
  },
  {
    especies: ["tomates", "albahaca", "lavanda"],
    fechaInicio: "01-03-2024",
    fechaTermino: "01-04-2024",
    numeroCosecha: 2,
    plantacion: "🍅🌿💜",
  },
  {
    especies: ["girasoles", "pepino", "romero"],
    fechaInicio: "15-03-2024",
    fechaTermino: "15-04-2024",
    numeroCosecha: 1,
    plantacion: "🌻🥒🌿",
  },
  {
    especies: ["zanahorias", "cilantro", "menta"],
    fechaInicio: "01-04-2024",
    fechaTermino: "01-05-2024",
    numeroCosecha: 4,
    plantacion: "🥕🌿🌱",
  },
  {
    especies: ["lechuga", "perejil", "tomillo"],
    fechaInicio: "10-04-2024",
    fechaTermino: "10-05-2024",
    numeroCosecha: 3,
    plantacion: "🥬🌿🌱",
  },
  {
    especies: ["pepino", "espinaca", "oregano"],
    fechaInicio: "20-04-2024",
    fechaTermino: "20-05-2024",
    numeroCosecha: 2,
    plantacion: "🥒🌿🌿",
  },
];


const index = () => {
  return (
    <ScrollView>
      <Text>Plantación</Text>

      {
        db.map((plantacion, indice) => (
          <CardPlatacion especies={plantacion.especies} fechaInicio={plantacion.fechaInicio} fechaTermino={plantacion.fechaTermino} numeroCosecha={plantacion.numeroCosecha} plantacion={plantacion.plantacion} key={indice} />

        ) )
      }

     
    </ScrollView>
  );
};

export default index;
