import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";
import Navegacion from "../../components/Navegacion";

import CardPlantas from "../../components/cards_de_items/CardPlantas";

import { supabase } from "../../lib/supabase";

const index = () => {
  const [plantas, setPlantas] = useState([]);
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null); //-> id de la planta desde la card
  const [modalVisible, setModalVisible] = useState(false);


  const handleDelete = async () => {
  
      
    if (plantaSeleccionada != null) {     
      const { error } = await supabase
      .from('planta')
      .delete()
      .eq('id_planta', plantaSeleccionada)

      if (error === null) {
        setPlantas(plantas.filter(planta => planta.id_planta !== plantaSeleccionada));
      }

      
      setModalVisible(false);
      setPlantaSeleccionada(null);
    }



  };

  const openModal = (id) => {
    setPlantaSeleccionada(id);
    setModalVisible(true);
  };


  //Se cambió la función para usar supabase en vez de el AsyncStorage
  const getItems = async () => {
    let { data } = await supabase.from("planta").select("*");
    setPlantas(data);
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
        Plantas
      </Text>
      <Navegacion titulo={"Agregar Planta"} screen={"/plan-tas/add_planta"} />

      {plantas.length > 0 ? (
        plantas.map((planta) => (
          <CardPlantas
            key={planta.id_planta}
            idPlanta={planta.id_planta}
            añoDespacho={planta.año_despacho}
            numeroPlatabanda={planta.numero_platabanda}
            idEspecie={planta.id_especie}
            numeroCosecha={planta.numero_cosecha}
            numeroSector={planta.numero_sector}
            openModal={openModal}
          />
        ))
      ) : (
        <Text>No hay plantas 🤯</Text>
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
