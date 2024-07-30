import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";
import Navegacion from "../../components/Navegacion";
import CardMaterial from "../../components/cards_de_items/CardMaterial";

import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";


/**
 * Componente Index que muestra una lista de materiales con la capacidad de agregar y eliminar.
 *
 * @componente
 * @returns {JSX.Element} El componente renderizado.
 *
 * @función handleDelete
 * Maneja la eliminación de un material seleccionado.
 *
 * @función openModal
 * Abre el modal de confirmación de eliminación.
 *
 * @función useEffect
 * Obtiene los materiales al montar el componente.
 */
const index = () => {
   const {materiales, setMateriales, getMateriales} = useItems()

  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (materialSeleccionado !== null) {
      console.log(materialSeleccionado);

      const { error } = await supabase
        .from("material")
        .delete()
        .eq("id_material", materialSeleccionado);
      if (error == null) {
        setMateriales(
          materiales.filter(
            (material) => material.id_material !== materialSeleccionado
          )
        );
      }

      setModalVisible(false);
      setMaterialSeleccionado(null);
    }
  };

  const openModal = (id) => {
    setMaterialSeleccionado(id);
    setModalVisible(true);
  };

 

  useEffect(() => {
    getMateriales();
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
        Materiales
      </Text>
      <Navegacion
        titulo={"Agregar Material"}
        screen={"/materiales/add_materiales"}
      />
      {materiales.length > 0 ? (
        materiales.map((material) => (
          <CardMaterial
            nombreMaterial={material.nombre}
            unidadDeMedida={material.unidad_medida}
            cantidad={material.cantidad}
            key={material.id_material}
            idMaterial={material.id_material}
            openModal={openModal}
            onUpdate={getMateriales} // Pasamos la función getMateriales para refrescar la lista
          />
        ))
      ) : (
        <Text style={{ fontSize: 20, color: "#000" }}>
          No hay materiales u.u
        </Text>
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
