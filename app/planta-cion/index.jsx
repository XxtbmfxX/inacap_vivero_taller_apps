import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";


import Navegacion from "../../components/Navegacion";

import CardPlatacion from "../../components/cards_de_items/CardPlantacion";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {

  const [plantacion, setPlantacion] = useState([]);

  const cargarPlantaciones = async () => {
    try {
      const plantacionesGuardadas = await AsyncStorage.getItem('plantaciones');
      const plantaciones = plantacionesGuardadas ? JSON.parse(plantacionesGuardadas) : [];
      setPlantacion(plantaciones);
    } catch (error) {
      console.error('Error al cargar las plantaciones:', error);
    }
  };

  useEffect(() => {
    cargarPlantaciones();
  }, []);

  return (
    <ScrollView>

      <Text>Plantación</Text>
   <Navegacion titulo={"Agregar Plantación"} screen={"/planta-cion/add_plantacion"} />
      {
        plantacion.length > 0 ?
        plantacion.map((plantacion, indice) => (
          // especies={plantacion.especies} // requiere de validar el formulario
          <CardPlatacion  fechaInicio={plantacion.fechaInicio} fechaTermino={plantacion.fechaTermino} numeroCosecha={plantacion.numeroCosecha} plantacion={plantacion.plantacion} key={indice} />

        ) ):
        <Text>No hay plantaciones unu </Text>
      }

     
    </ScrollView>
  );
};

export default index;
