import { View, Text, ScrollView, ViewBase } from "react-native";
import React, { useEffect, useState } from "react";

import Navegacion from "../../components/Navegacion";

import CardPlatacion from "../../components/cards_de_items/CardPlantacion";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
  const [plantacion, setPlantacion] = useState([]);

  const cargarPlantaciones = async () => {
    try {
      const plantacionesGuardadas = await AsyncStorage.getItem("plantaciones");
      const plantaciones = plantacionesGuardadas
        ? JSON.parse(plantacionesGuardadas)
        : [];
      setPlantacion(plantaciones);
    } catch (error) {
      console.error("Error al cargar las plantaciones:", error);
    }
  };

  useEffect(() => {
    cargarPlantaciones();
  }, []);

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 30,
          marginHorizontal: "auto",
          marginVertical: 30,
        }}
      >
        Plantación
      </Text>

        <Navegacion
          titulo={"Agregar Plantación"}
          screen={"/planta-cion/add_plantacion"}
        />
        {plantacion.length > 0 ? (
          plantacion.map((plantacion, indice) => (
            <CardPlatacion
              fechaInicio={plantacion.fechaInicio}
              fechaTermino={plantacion.fechaTermino}
              numeroCosecha={plantacion.numeroCosecha}
              plantacion={plantacion.plantacion}
              key={indice}
            />
          ))
        ) : (
          <Text>No hay plantaciones unu </Text>
        )}
    </ScrollView>
  );
};

export default index;
