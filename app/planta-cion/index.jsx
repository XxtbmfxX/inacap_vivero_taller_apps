import {  Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import Navegacion from "../../components/Navegacion";
import CardPlatacion from "../../components/cards_de_items/CardPlantacion";
import {supabase} from '../../lib/supabase'

const index = () => {
  const [plantacion, setPlantacion] = useState([]);

  //Se cambió la función para usar supabase en vez de el AsyncStorage
    const getItems = async () => {
      let { data} = await supabase.from("plantacion").select("*");
      setPlantacion(data);
    };
  
    useEffect(() => {
      getItems()
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
