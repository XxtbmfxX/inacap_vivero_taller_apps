import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Navegacion from "../../components/Navegacion";
import CardMaterial from "../../components/cards_de_items/CardMaterial";

import { supabase } from "../../lib/supabase";

const index = () => {
  const [materiales, setMateriales] = useState([]);

//Se cambió la función para usar supabase en vez de el AsyncStorage
  const getItems = async () => {
    let { data} = await supabase.from("material").select("*");
    setMateriales(data);
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
        Materiales
      </Text>
      <Navegacion
        titulo={"Agregar Material"}
        screen={"/materiales/add_materiales"}
      />
      {materiales.length > 0 ? (
        materiales.map((material, indice) => (
          <CardMaterial
            nombreMaterial={material.nombre}
            unidadDeMedida={material.unidad_de_medida}
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
