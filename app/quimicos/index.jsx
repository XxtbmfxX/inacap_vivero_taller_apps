import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import CardQuimicos from "../../components/cards_de_items/CardQuimicos";

import Navegacion from "../../components/Navegacion";

import { supabase } from "../../lib/supabase";

const index = () => {
  const [químicos, setQuímicos] = useState([]);

  const getItems = async () => {
    let { data, error } = await supabase.from("quimico").select("*");
    setQuímicos(data);
  };

  useEffect(() => {
    getItems();
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
        Químicos
      </Text>
      <Navegacion
        titulo={"agregar químico"}
        screen={"/quimicos/add_quimicos"}
      />

      {químicos.length > 0 ? (
        químicos.map((quimico, indice) => (
          <CardQuimicos
            fechaIngreso={quimico.fecha_ingreso}
            cantidad={quimico.cantidad}
            contenido={quimico.contenido}
            necesidadesltkg={quimico.necesidadesltkg}
            categoria={quimico.categoria}
            presentacion={quimico.presentacion}
            stockMinimo={quimico.stock_minimo}
            nombre={quimico.nombre}
            key={indice}
          />
        ))
      ) : (
        <Text>No hay químicos unu</Text>
      )}
    </ScrollView>
  );
};

export default index;
