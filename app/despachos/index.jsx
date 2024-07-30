import { ScrollView, Text, View, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

import ModalConfirmarDelete from "../../components/ModalConfirmarDelete";

import CardDespacho from "../../components/cards_de_items/CardDespacho";
import Navegacion from "../../components/Navegacion";
import { supabase } from "../../lib/supabase";
import { useItems } from "../../context/ItemsContext";


/**
 * Componente Index que muestra una lista de despachos con la capacidad de agregar y eliminar.
 *
 * @componente
 * @returns {JSX.Element} El componente renderizado.
 *
 * @función handleDelete
 * Maneja la eliminación de un despacho seleccionado.
 *
 * @función openModal
 * Abre el modal de confirmación de eliminación.
 *
 * @función useEffect
 * Obtiene los despachos al montar el componente.
 */

const index = () => {

   const {getDespachos, despachos, setDespachos} = useItems()

  const [despachoSeleccionado, setDespachoSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredDespachos = despachos.filter(despacho =>
    despacho.numero_guia_despacho.toString().includes(searchQuery) ||
    despacho.predio.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por numero de guia o predio"
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <Navegacion
        titulo={"agregar Despacho"}
        screen={"/despachos/add_despacho"}
      />
      {filteredDespachos.length > 0 ? (
        filteredDespachos.map((despacho) => (
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


const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
});

export default index;


