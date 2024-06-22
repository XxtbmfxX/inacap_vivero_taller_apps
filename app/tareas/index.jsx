import { ScrollView, Text} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navegacion from './Navegacion';
import CardTareas from '../../components/cards_de_items/CardTareas'

const Index = () => {
  const [tareas, setTareas] = useState([]);

  const cargarTareas = async () => {
    try {
      const tareasGuardadas = await AsyncStorage.getItem('tareas');
      const tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
      setTareas(tareas);
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Text>Tareas</Text>
      <Navegacion titulo={"agregar tareas"} screen={"/tareas/add_tarea"} />
      {tareas.map((tarea, indice) => (
        <CardTareas
          nombreTarea={tarea.nombreTarea}
          descripción={tarea.descripcion}
          key={indice}
        />
      ))}
    </ScrollView>
  );
};

export default Index;
