import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Cardsemillas from "../../components/cards_de_items/CardSemillas";
import Navegacion from "../../components/Navegacion";


import {supabase} from '../../lib/supabase'


const index = () => {

  const [semillas, setSemillas] = useState([]);
  const [codigoSeleccionado, setCodigoSeleccionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = async () => {
    if (codigoSeleccionado !== null) {
      const { error } = await supabase
       .from("semilla")
       .delete()
       .eq("codigo_bolsa", codigoSeleccionado);

      if (error == null) {
        setCodigoSeleccionado(semillas.filter(semilla => semilla.codigo_bolsa !== codigoSeleccionado))
      }

      setModalVisible(false);
      setCodigoSeleccionado(null);
    }
  };

  const openModal = (id) => {
    setModalVisible(true);
    setCodigoSeleccionado(id);
  };

  //Se cambió la función para usar supabase en vez de el AsyncStorage
    const getItems = async () => {
      let { data} = await supabase.from("semilla").select("*");
      setSemillas(data);
    };
  
    useEffect(() => {
      getItems()
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
      <Navegacion titulo={"agregar semilla"} screen={"/semillas/add_semillas"} />

      {semillas.length > 0 ? semillas.map((semilla, indice) => (
        <Cardsemillas
        key={indice}
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
      />
      
      )):
        <Text>
          No hay elementos ＞︿＜
        </Text>
      }
      <ModalConfirmarDelete
        visible={modalVisible}
        onConfirm={handleDelete}
        onCancel={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};

export default index;
