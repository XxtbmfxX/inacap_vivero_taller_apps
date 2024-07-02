import { ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import CardDespacho from '../../components/cards_de_items/CardDespacho'
import Navegacion from '../../components/Navegacion'
import {supabase} from '../../lib/supabase'

const index = () => {

  const [despachos, setDespachos] = useState([]);

//Se cambió la función para usar supabase en vez de el AsyncStorage
  const getItems = async () => {
    let { data} = await supabase.from("despacho").select("*");
    console.log(data)
    setDespachos(data);
  };

  useEffect(() => {
    getItems()
  }, []);


  return (
    <ScrollView contentContainerStyle={{alignItems: "center"}} >
      
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
        despachos.map((despacho, indice) => (
          <CardDespacho 
            cantidadPlantas={despacho.cantidadPlantas}
            fechaRetiro={despacho.fechaRetiro}
            fechaSolicitud={despacho.fechaSolicitud}
            numSemillas={despacho.numSemillas}
            numeroGuia={despacho.numeroGuia}
            pedido={despacho.pedido}
            key={indice}
          />
        ))
      }
    </ScrollView>
  )
}

export default index
