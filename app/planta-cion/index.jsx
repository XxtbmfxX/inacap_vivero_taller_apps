import { Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";
import Navegacion from "../../components/Navegacion";
import CardPlatacion from "../../components/cards_de_items/CardPlantacion";
import { supabase } from "../../lib/supabase";

const index = () => {
  const [plantacion, setPlantacion] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlantacion, setSelectedPlantacion] = useState(null);

  const handleDelete = async () => {
    if (selectedPlantacion) {

      const { a } = await supabase
        .from("plantacion")
        .select()
        .eq("numero_cosecha", selectedPlantacion.id.toString());


      console.log(selectedPlantacion.id, a)


      const { error } = await supabase
        .from("plantacion")
        .delete()
        .eq("numero_cosecha", selectedPlantacion.id.toString());

      if (error === null) {
        setQuímicos(
          químicos.filter((químico) => químico.numero_cosecha !== selectedPlantacion.id)
        );
      }

      setModalVisible(false);
      setSelectedPlantacion(null);
    }
  };

  const openModal = (item) => {
    setSelectedPlantacion(item);
    setModalVisible(true);
  };

  //Se cambió la función para usar supabase en vez de el AsyncStorage
  const getItems = async () => {
    let { data } = await supabase.from("plantacion").select("*");
    setPlantacion(data);
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
        Plantación
      </Text>

      <Navegacion
        titulo={"Agregar Plantación"}
        screen={"/planta-cion/add_plantacion"}
      />
      {plantacion.length > 0 ? (
        plantacion.map((plantacion) => (
          <CardPlatacion
            fechaInicio={plantacion.fecha_inicio}
            fechaCosecha={plantacion.fecha_cosecha}
            numeroCosecha={plantacion.numero_cosecha}
            plantacion={plantacion.plantacion}
            nombreColector={plantacion.nombre_colector}
            especies={plantacion.especies}
            openModal={openModal}
            key={plantacion.numero_cosecha}
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
