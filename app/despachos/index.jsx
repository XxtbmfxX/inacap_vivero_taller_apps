import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";

import CardDespacho from "../../components/cards_de_items/CardDespacho";
import Navegacion from "../../components/Navegacion";
import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";

const index = () => {

   const {getDespachos, despachos, setDespachos} = useItems()

  const [despachoSeleccionado, setDespachoSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (despachoSeleccionado) {
      const { error } = await supabase
        .from("despacho")
        .delete()
        .eq("numero_guia_despacho", despachoSeleccionado);
      if (error === null) {
        setDespachos(
          despachos.filter(
            (despacho) => despacho.numero_guia_despacho !== despachoSeleccionado
          )
        );
      }

      setModalVisible(false);
      setDespachoSeleccionado(null);
    }
  };

  const openModal = (item) => {
    setDespachoSeleccionado(item);
    setModalVisible(true);
  };


  useEffect(() => {
    getDespachos();
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
        Despachos
      </Text>
      <Navegacion
        titulo={"agregar Despacho"}
        screen={"/despachos/add_despacho"}
      />
      {despachos.length > 0 ? (
        despachos.map((despacho) => (
          <CardDespacho
            numeroGuiaDespacho={despacho.numero_guia_despacho}
            observaciones={despacho.observaciones}
            numeroDeSemanas={despacho.numero_de_semanas}
            predio={despacho.predio}
            cantidadDePlantas={despacho.cantidad_de_plantas}
            fechaRetiro={despacho.fecha_retiro}
            fechaSolicitud={despacho.fecha_solicitud}
            idComuna={despacho.id_comuna}
            idBeneficiario={despacho.id_beneficiario}
            idPrograma={despacho.id_programa}
            rutEncargado={despacho.rut_encargado}
            openModal={openModal}
            key={despacho.numero_guia_despacho}
            onUpdate={getDespachos} // Pasamos la función getDespachos para refrescar la lista
          />
        ))
      ) : (
        <Text> No hay despachos u.u </Text>
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
