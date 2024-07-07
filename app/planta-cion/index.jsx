import { Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";
import Navegacion from "../../components/Navegacion";
import CardPlantacion from "../../components/cards_de_items/CardPlantacion";
import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";

const index = () => {
  const { plantacion, setPlantacion, getPlantación } = useItems();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlantacion, setSelectedPlantacion] = useState(null);

  const handleDelete = async () => {
    if (selectedPlantacion !== null) {
      const { error } = await supabase
        .from("plantacion")
        .delete()
        .eq("numero_cosecha", selectedPlantacion);

      console.log(error);

      if (error === null) {
        setPlantacion(
          plantacion.filter(
            (plantaCion) => plantaCion.numero_cosecha !== selectedPlantacion
          )
        );
      }

      setModalVisible(false);
      setSelectedPlantacion(null);
    }
  };

  const openModal = (id) => {
    setSelectedPlantacion(id);
    setModalVisible(true);
  };

  useEffect(() => {
    getPlantación();
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
        Plantación
      </Text>

      <Navegacion
        titulo={"Agregar Plantación"}
        screen={"/planta-cion/add_plantacion"}
      />
      {plantacion.length > 0 ? (
        plantacion.map((plantacion) => (
          <CardPlantacion
            fechaInicio={plantacion.fecha_inicio}
            fechaCosecha={plantacion.fecha_cosecha}
            numeroCosecha={plantacion.numero_cosecha}
            plantacion={plantacion.plantacion}
            nombreColector={plantacion.nombre_colector}
            especies={plantacion.especies}
            otrasEspecies={plantacion.otras_especies}
            openModal={openModal}
            key={plantacion.numero_cosecha}
            onUpdate={getPlantación} // Pasamos la función getPlantación para refrescar la lista
          />
        ))
      ) : (
        <Text>No hay plantaciones unu </Text>
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
