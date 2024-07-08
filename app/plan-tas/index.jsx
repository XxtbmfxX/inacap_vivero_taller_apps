import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";
import Navegacion from "../../components/Navegacion";

import CardPlantas from "../../components/cards_de_items/CardPlantas";

import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";


/**
 * Componente index que muestra una lista de plantas con la capacidad de agregar y eliminar.
 *
 * @componente
 * @returns {JSX.Element} El componente renderizado.
 *
 * @función handleDelete
 * Maneja la eliminación de una planta seleccionada.
 *
 * @función openModal
 * Abre el modal de confirmación de eliminación.
 *
 * @función useEffect
 * Obtiene las plantas al montar el componente.
 */

const index = () => {
  const { plantas, setPlantas, getPlantas } = useItems();

  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null); //-> id de la planta desde la card
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (plantaSeleccionada != null) {
      const { error } = await supabase
        .from("planta")
        .delete()
        .eq("id_planta", plantaSeleccionada);

      if (error === null) {
        setPlantas(
          plantas.filter((planta) => planta.id_planta !== plantaSeleccionada)
        );
      }

      setModalVisible(false);
      setPlantaSeleccionada(null);
    }
  };

  const openModal = (id) => {
    setPlantaSeleccionada(id);
    setModalVisible(true);
  };

  useEffect(() => {
    getPlantas();
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
            onUpdate={getPlantas} // Pasamos la función getPlantas para refrescar la lista
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
