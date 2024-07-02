import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Cardsemillas from "../../components/cards_de_items/CardSemillas";
import Navegacion from "../../components/Navegacion";


import {supabase} from '../../lib/supabase'


const index = () => {

  const [semillas, setSemillas] = useState([]);

  //Se cambió la función para usar supabase en vez de el AsyncStorage
    const getItems = async () => {
      let { data} = await supabase.from("semilla").select("*");
      setSemillas(data);
    };
  
    useEffect(() => {
      getItems()
    }, []);

  

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Text
        style={{
          fontSize: 30,
          marginHorizontal: "auto",
          marginVertical: 30,
        }}
      >
        Semillas
      </Text>
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
