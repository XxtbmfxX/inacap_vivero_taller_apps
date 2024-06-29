import { ScrollView, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Navegacion from '../../components/Navegacion';
import CardTareas from '../../components/cards_de_items/CardTareas';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from 'expo-router';

const Index = () => {
  const [db, setDb] = useState([]);
  const router = useRouter();

  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    try {
      const tareasGuardadas = await AsyncStorage.getItem("tareas");
      if (tareasGuardadas) {
        setDb(JSON.parse(tareasGuardadas));
      }
    } catch (error) {
      console.error("Error al cargar las tareas:", error);
    }
  };

  const navegarAEditarTarea = (indice, nombreTarea, descripcionTarea) => {
    router.push({
      pathname: '/tareas/update_tarea',
      params: { indice, nombreTarea, descripcionTarea }
    });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Text>Tareas</Text>
      <Navegacion titulo={"agregar tareas"} screen={"/tareas/add_tarea"} />
      {db.map((tarea, indice) => (
        <TouchableOpacity
          key={indice}
          onPress={() => navegarAEditarTarea(indice, tarea.nombreTarea, tarea.descripcionTarea)}
        >
          <CardTareas
            nombreTarea={tarea.nombreTarea}
            descripción={tarea.descripcionTarea}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Index;