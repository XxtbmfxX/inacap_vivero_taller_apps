import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CardTareas from "../../components/cards_de_items/CardTareas";
import { useItems } from "../../context/ItemsContext";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";
import Navegacion from "../../components/Navegacion";
import { supabase } from "../../lib/supabase";


/**
 * Componente Index que muestra una lista de tareas con la capacidad de agregar y eliminar.
 *
 * @componente
 * @returns {JSX.Element} El componente renderizado.
 *
 * @función handleDelete
 * Maneja la eliminación de una tarea seleccionada.
 *
 * @función openModal
 * Abre el modal de confirmación de eliminación.
 *
 * @función useEffect
 * Obtiene las tareas al montar el componente.
 */

const Index = () => {
  const { tareas, getTareas, setTareas } = useItems();


  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (tareaSeleccionada !== null) {
      const { error } = await supabase
        .from("tarea")
        .delete()
        .eq("id_tarea", tareaSeleccionada);

      if (error == null) {
        setTareas(tareas.filter(tarea => tarea.id_tarea !== setTareaSeleccionada));

      }

      setModalVisible(false);
      setTareaSeleccionada(null);
    }
  };

  const openModal = (id) => {
    setModalVisible(true);
    setTareaSeleccionada(id);
  };


  useEffect(() => {
    getTareas();
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
            openModal={openModal}
          />
        ))
      ) : (
        <Text>No hay elementos ＞︿＜</Text>
      )}
        <ModalConfirmarDelete
        visible={modalVisible}
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};

export default Index;
