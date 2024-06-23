import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Cardsemillas from "../../components/cards_de_items/CardSemillas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navegacion from "../../components/Navegacion";


const index = () => {

  const [semillas, setSemillas] = useState([]);

  const cargarSemillas = async () => {
    try {
      const SemillasGuardadas = await AsyncStorage.getItem('semillas');
      const Semillas = SemillasGuardadas ? JSON.parse(SemillasGuardadas) : [];
      setSemillas(Semillas);
    } catch (error) {
      console.error('Error al cargar las Semillas:', error);
    }
  };

  useEffect(() => {
    cargarSemillas();
  }, []);
  

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Navegacion titulo={"agregar semilla"} screen={"/semillas/add_semillas"} />

      {semillas.length > 0 ? semillas.map((semilla, indice) => (
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
      )):
        <Text>
          No hay elementos ＞︿＜
        </Text>
      }
    </ScrollView>
  );
};

export default index;
