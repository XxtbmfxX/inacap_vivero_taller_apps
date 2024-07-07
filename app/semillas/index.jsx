import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";

import CardSemillas from "../../components/cards_de_items/CardSemillas";
import Navegacion from "../../components/Navegacion";

import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";

const Index = () => {
  const { semillas, getSemillas, setSemillas } = useItems();

  const [codigoSeleccionado, setCodigoSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (codigoSeleccionado !== null) {
      const { error } = await supabase
        .from("semilla")
        .delete()
        .eq("codigo_bolsa", codigoSeleccionado);

      if (!error) {
        setSemillas(semillas.filter(semilla => semilla.codigo_bolsa !== codigoSeleccionado));
      }

      setModalVisible(false);
      setCodigoSeleccionado(null);
    }
  };

  const openModal = (id) => {
    setModalVisible(true);
    setCodigoSeleccionado(id);
  };

  const handleUpdate = async () => {
    await getSemillas();
  };

  useEffect(() => {
    getSemillas();
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
        Semillas
      </Text>
      <Navegacion
        titulo={"agregar semilla"}
        screen={"/semillas/add_semillas"}
      />

      {semillas.length > 0 ? (
        semillas.map((semilla) => (
          <CardSemillas
            key={semilla.codigo_bolsa}
            codigoBolsa={semilla.codigo_bolsa}
            cantidad={semilla.cantidad}
            fechaRecepcion={semilla.fecha_recepcion}
            fechaColecta={semilla.fecha_colecta}
            porcentajeGerminacion={semilla.porcentaje_germinacion}
            pesoEnviado={semilla.peso_enviado}
            pesoRecibido={semilla.peso_recibido}
            condicionSemilla={semilla.condicion_semilla}
            idEspecie={semilla.id_especie}
            idProcedencia={semilla.id_procedencia}
            idBodega={semilla.id_bodega}
            rutColector={semilla.rut_colector}
            openModal={openModal}
            onUpdate={handleUpdate}
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
