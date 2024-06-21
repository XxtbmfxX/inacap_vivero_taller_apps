import { ScrollView, Text } from "react-native";
import React from "react";

import Cardsemillas from "../../components/cards_de_items/CardSemillas";

const db = [
  {
    despacho: "Pedido 1 🌱",
    cantidad: "200",
    fechaColecta: "2023-05-15",
    fechaCosecha: "2023-09-10",
    peso100Semillas: "450gr",
    porcentajeGerminación: "85%",
    códigoBolsa: "A123",
    condición: "Secas 🌞",
    procedencia: "Valdivia 🌲",
  },
  {
    despacho: "Pedido 2 🌻",
    cantidad: "300",
    fechaColecta: "2023-06-20",
    fechaCosecha: "2023-10-05",
    peso100Semillas: "500gr",
    porcentajeGerminación: "90%",
    códigoBolsa: "B456",
    condición: "Recién Cosechadas 🌾",
    procedencia: "La Serena 🌵",
  },
  {
    despacho: "Pedido 3 🌿",
    cantidad: "150",
    fechaColecta: "2023-04-25",
    fechaCosecha: "2023-08-15",
    peso100Semillas: "400gr",
    porcentajeGerminación: "75%",
    códigoBolsa: "C789",
    condición: "Orgánicas 🌍",
    procedencia: "Concepción 🌳",
  },
  {
    despacho: "Pedido 4 🌸",
    cantidad: "250",
    fechaColecta: "2023-07-10",
    fechaCosecha: "2023-11-20",
    peso100Semillas: "550gr",
    porcentajeGerminación: "95%",
    códigoBolsa: "D012",
    condición: "Frescas 💧",
    procedencia: "Puerto Montt 🌧️",
  },
  {
    despacho: "Pedido 5 🍃",
    cantidad: "180",
    fechaColecta: "2023-03-30",
    fechaCosecha: "2023-07-25",
    peso100Semillas: "480gr",
    porcentajeGerminación: "80%",
    códigoBolsa: "E345",
    condición: "En Almacenaje 🏠",
    procedencia: "Temuco 🌿",
  },
];


const index = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      {db.map((semilla, indice) => (
        <Cardsemillas
          despacho = {semilla.despacho}
          cantidad = {semilla.cantidad}
          fechaColecta = {semilla.fechaColecta}
          fechaCosecha = {semilla.fechaCosecha}
          peso100Semillas = {semilla.peso100Semillas}
          porcentajeGerminación = {semilla.porcentajeGerminación}
          códigoBolsa = {semilla.códigoBolsa}
          condición = {semilla.condición}
          procedencia = {semilla.procedencia}
          key={indice}
        />
      ))}
    </ScrollView>
  );
};

export default index;
