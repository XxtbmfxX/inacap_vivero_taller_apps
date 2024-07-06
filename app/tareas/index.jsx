import { ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Navegacion from "../../components/Navegacion";
import CardTareas from "../../components/cards_de_items/CardTareas";
import { supabase } from "../../lib/supabase";

const Index = () => {
  const [tareas, setTareas] = useState([]);

  // Fetch items from supabase
  const getItems = async () => {
    let { data } = await supabase.from("tarea").select("*").order('id_tarea', { ascending: true })
    setTareas(data);
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
        Tareas
      </Text>
      <Navegacion titulo={"agregar tareas"} screen={"/tareas/add_tarea"} />
      {tareas.length > 0 ? (
        tareas.map((tarea) => (
          <CardTareas
            key={tarea.id_tarea}
            nombreTarea={tarea.nombre_tarea}
            descripción={tarea.descripcion_tarea}
            idTarea={tarea.id_tarea}
            onUpdate={getItems} // Pasamos la función getItems para refrescar la lista
          />
        ))
      ) : (
        <Text>No hay elementos ＞︿＜</Text>
      )}
    </ScrollView>
  );
};

export default Index;
