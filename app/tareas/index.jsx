import { ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Navegacion from "../../components/Navegacion";
import CardTareas from "../../components/cards_de_items/CardTareas";
import { useRouter } from 'expo-router';

import { supabase } from "../../lib/supabase";

const index = () => {
  const [tareas, setTareas] = useState([]);
  const router = useRouter();
  //Se cambió la función para usar supabase en vez de el AsyncStorage
  const getItems = async () => {
    let { data } = await supabase.from("tarea").select("*");
    setTareas(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  const navegarAEditarTarea = (indice, nombreTarea, descripcionTarea) => {
    router.push({
      pathname: "/tareas/update_tarea",
      params: { indice, nombreTarea, descripcionTarea },
    });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          marginHorizontal: "auto",
          marginVertical: 30,
        }}
      >
        Tareas
      </Text>
      <Navegacion titulo={"agregar tareas"} screen={"/tareas/add_tarea"} />
      {tareas.length > 0 ? (
        tareas.map((tarea, indice) => (
          <TouchableOpacity
            key={indice}
            onPress={() =>
              navegarAEditarTarea(
                indice,
                tarea.nombre_tarea,
                tarea.descripcion_tarea
              )
            }
          >
            <CardTareas
              ref={() =>
                navegarAEditarTarea(
                  indice,
                  tarea.nombre_tarea,
                  tarea.descripcion_tarea
                )
              }
              nombreTarea={tarea.nombre_tarea}
              descripción={tarea.descripcion_tarea}
            />
          </TouchableOpacity>
        ))
      ) : (
        <Text>No hay elementos ＞︿＜</Text>
      )}
    </ScrollView>
  );
};

export default index;
