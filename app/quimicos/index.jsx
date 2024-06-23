import { ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import CardQuimicos from '../../components/cards_de_items/CardQuimicos'

import AsyncStorage from "@react-native-async-storage/async-storage";
import Navegacion from "../../components/Navegacion";


const index = () => {

  const [quimicos, setQuimicos] = useState([])

  
  const cargarQuimicos = async () => {
    try {
      const quimicosGuardadas = await AsyncStorage.getItem('quimicos');
      const quimicos = quimicosGuardadas ? JSON.parse(quimicosGuardadas) : [];
      setQuimicos(quimicos);
    } catch (error) {
      console.error('Error al cargar las quimicos:', error);
    }
  };

  useEffect(() => {
    cargarQuimicos();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Navegacion titulo={"agregar químico"} screen={"/quimicos/add_quimicos"} />

      {quimicos.length > 0? quimicos.map((quimico, indice) => (
        <CardQuimicos
        fechaIngreso={quimico.fechaIngreso}
        cantidad={quimico.cantidad}
        contenido={quimico.contenido}
        necesidadesltkg={quimico.necesidadesltkg}
        categoria={quimico.categoria}
        presentacion={quimico.presentacion}
        stockMinimo={quimico.stockMinimo}
        key={indice}
        />
      )): 
      <Text>
        No hay químicos unu
      </Text>
      }
    </ScrollView>
  );
  
}

export default index