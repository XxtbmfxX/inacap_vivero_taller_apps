import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";
import Navegacion from "../../components/Navegacion";
import CardMaterial from "../../components/cards_de_items/CardMaterial";

import { supabase } from "../../lib/supabase";

const index = () => {
  const [materiales, setMateriales] = useState([]);
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

  const getItems = async () => {
    let { data } = await supabase.from("material").select("*");
    setMateriales(data);
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
            unidadDeMedida={material.unidad_de_medida}
            cantidad={material.cantidad}
            key={material.id_material}
            idMaterial={material.id_material}
            openModal={openModal}
            onUpdate={getItems} // Pasamos la función getItems para refrescar la lista
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
