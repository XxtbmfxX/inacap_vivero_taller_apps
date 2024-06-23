import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Navegacion  from "../../components/Navegacion";

import CardPlantas  from "../../components/cards_de_items/CardPlantas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { convertToObject } from "typescript";



const index = () => {

  const [plantas, setPlantas] = useState([])
  


  
  const cargarPlantas = async () => {
    try {
      const plantasGuardadas = await AsyncStorage.getItem('plantas');
      const plantas = plantasGuardadas ? JSON.parse(plantasGuardadas) : [];
      setPlantas(plantas);
    } catch (error) {
      console.error('Error al cargar las plantas:', error);
    }
  };

  useEffect(() => {
    cargarPlantas();
  }, []);



  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
   <Navegacion titulo={"Agregar Planta"} screen={"/plan-tas/add_planta"} />

      { 
      plantas.length > 0 ? 
      plantas.map((planta, indice) => (
        <CardPlantas
          especie={planta.especie}
          sector={planta.sector}
          añoDespacho={planta.añoDespacho}
          key={indice}
        />
      ))
      :
      <Text>No hay plantas 🤯</Text>
      }
    </ScrollView>
  );
};

export default index;
