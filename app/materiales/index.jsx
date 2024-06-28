import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Navegacion from "../../components/Navegacion";
import CardMaterial from "../../components/cards_de_items/CardMaterial";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
  const [materiales, setMateriales] = useState([]);

  const cargarMateriales = async () => {
    try {
      const materialesGuardadas = await AsyncStorage.getItem("materiales");
      const materiales = materialesGuardadas
        ? JSON.parse(materialesGuardadas)
        : [];
      setMateriales(materiales);
    } catch (error) {
      console.error("Error al cargar las materiales:", error);
    }
  };

  useEffect(() => {
    cargarMateriales();
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
        Materiales
      </Text>
      <Navegacion
        titulo={"Agregar Material"}
        screen={"/materiales/add_materiales"}
      />
      {materiales.length > 0 ? (
        materiales.map((material, indice) => (
          <CardMaterial
            nombreMaterial={material.nombreMaterial}
            unidadDeMedida={material.unidadDeMedida}
            cantidad={material.cantidad}
            key={indice}
          />
        ))
      ) : (
        <Text style={{ fontSize: 20, color: "#000" }}>
          No hay materiales u.u
        </Text>
      )}
    </ScrollView>
  );
};

export default index;
