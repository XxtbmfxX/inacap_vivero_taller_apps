import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import CardQuimicos from "../../components/cards_de_items/CardQuimicos";

import Navegacion from "../../components/Navegacion";
import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";

import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";

/**
 * Componente Index que muestra una lista de químicos con la capacidad de agregar y eliminar.
 *
 * @componente
 * @returns {JSX.Element} El componente renderizado.
 *
 * @función handleDelete
 * Maneja la eliminación de un químico seleccionado.
 *
 * @función openModal
 * Abre el modal de confirmación de eliminación.
 *
 * @función useEffect
 * Obtiene los químicos al montar el componente.
 */

const index = () => {
  
  const {químicos, setQuímicos, getQuímicos } = useItems();


  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuimico, setSelectedQuimico] = useState(null);

  const handleDelete = async () => {
    if (selectedQuimico) {
      const { error } = await supabase
        .from('quimico')
        .delete()
        .eq('id', selectedQuimico.id);
      
      if (error === null) {
        setQuímicos(químicos.filter(químico => químico.id !== selectedQuimico.id));
      }

      setModalVisible(false);
      setSelectedQuimico(null);
    }
  };

  const openModal = (item) => {
    setSelectedQuimico(item);
    setModalVisible(true);
  };

  

  useEffect(() => {
    getQuímicos();
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
        químicos.map((quimico) => (
          <CardQuimicos
            fechaIngreso={quimico.fecha_ingreso}
            cantidad={quimico.cantidad}
            contenido={quimico.contenido}
            categoria={quimico.categoria}
            presentacion={quimico.presentacion}
            stockMinimo={quimico.stock_minimo}
            nombre={quimico.nombre}
            id={quimico.id}
            openModal={openModal}
            key={quimico.id}
            onUpdate={getQuímicos}
          />
        ))
      ) : (
        <Text>No hay químicos unu</Text>
      )}
      <ModalConfirmarDelete
        visible={modalVisible}
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};

export default index;
