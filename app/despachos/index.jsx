import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import CardDespacho from "../../components/cards_de_items/CardDespacho";
import Navegacion from "../../components/Navegacion";
import { supabase } from "../../lib/supabase";

const index = () => {
  const [despachos, setDespachos] = useState([]);

  //Se cambió la función para usar supabase en vez de el AsyncStorage
  const getItems = async () => {
    let { data } = await supabase.from("despacho").select("*");
    setDespachos(data);
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
        Despachos
      </Text>
      <Navegacion
        titulo={"agregar Despacho"}
        screen={"/despachos/add_despacho"}
      />
      {
      despachos.length > 0 ?
      despachos.map((despacho, indice) => (
        <CardDespacho
          numeroGuiaDespacho={despacho.numero_guia_despacho}
          observaciones={despacho.observaciones}
          numeroDeSemanas={despacho.numero_de_semanas}
          predio={despacho.predio}
          cantidadDePlantas={despacho.cantidad_de_plantas}
          fechaRetiro={despacho.fecha_retiro}
          fechaSolicitud={despacho.fecha_solicitud}
          idComuna={despacho.id_comuna}
          idBeneficiario={despacho.id_beneficiario}
          idPrograma={despacho.id_programa}
          rutEncargado={despacho.rut_encargado}
          key={despacho.id_programa}
        />
      ))
      :
      <Text> No hay despachos u.u </Text>
      }
    </ScrollView>
  );
};

export default index;
