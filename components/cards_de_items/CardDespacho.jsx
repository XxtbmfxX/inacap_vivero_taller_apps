import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Card, Button } from "@rneui/base";
import { supabase } from "../../lib/supabase";


/**
 * Componente de tarjeta para mostrar y editar información de despachos.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.numeroGuiaDespacho - El número de la guía de despacho.
 * @param {string} props.observaciones - Las observaciones del despacho.
 * @param {number} props.numeroDeSemanas - El número de semanas del despacho.
 * @param {string} props.predio - El predio del despacho.
 * @param {number} props.cantidadDePlantas - La cantidad de plantas del despacho.
 * @param {string} props.fechaRetiro - La fecha de retiro del despacho.
 * @param {string} props.fechaSolicitud - La fecha de solicitud del despacho.
 * @param {number} props.idComuna - El ID de la comuna del despacho.
 * @param {number} props.idBeneficiario - El ID del beneficiario del despacho.
 * @param {number} props.idPrograma - El ID del programa del despacho.
 * @param {string} props.rutEncargado - El RUT del encargado del despacho.
 * @param {Function} props.openModal - Función para abrir el modal de eliminación.
 * @param {Function} props.onUpdate - Función para llamar cuando se actualiza el despacho.
 */


const CardDespacho = ({
  numeroGuiaDespacho,
  observaciones,
  numeroDeSemanas,
  predio,
  cantidadDePlantas,
  fechaRetiro,
  fechaSolicitud,
  idComuna,
  idBeneficiario,
  idPrograma,
  rutEncargado,
  openModal,
  onUpdate
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newNumeroGuiaDespacho, setNewNumeroGuiaDespacho] = useState(numeroGuiaDespacho);
  const [newObservaciones, setNewObservaciones] = useState(observaciones);
  const [newNumeroDeSemanas, setNewNumeroDeSemanas] = useState(numeroDeSemanas);
  const [newPredio, setNewPredio] = useState(predio);
  const [newCantidadDePlantas, setNewCantidadDePlantas] = useState(cantidadDePlantas);
  const [newFechaRetiro, setNewFechaRetiro] = useState(fechaRetiro);
  const [newFechaSolicitud, setNewFechaSolicitud] = useState(fechaSolicitud);
  const [newIdComuna, setNewIdComuna] = useState(idComuna);
  const [newIdBeneficiario, setNewIdBeneficiario] = useState(idBeneficiario);
  const [newIdPrograma, setNewIdPrograma] = useState(idPrograma);
  const [newRutEncargado, setNewRutEncargado] = useState(rutEncargado);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from('despacho')
      .update({
        numero_guia_despacho: newNumeroGuiaDespacho,
        observaciones: newObservaciones,
        numero_de_semanas: newNumeroDeSemanas,
        predio: newPredio,
        cantidad_de_plantas: newCantidadDePlantas,
        fecha_retiro: newFechaRetiro,
        fecha_solicitud: newFechaSolicitud,
        id_comuna: newIdComuna,
        id_beneficiario: newIdBeneficiario,
        id_programa: newIdPrograma,
        rut_encargado: newRutEncargado
      })
      .eq('numero_guia_despacho', numeroGuiaDespacho);

    if (!error) {
      onUpdate();
      setEditMode(false);
    } else {
      console.log(error.message);
    }
  };

  const FRetiro = new Date(fechaRetiro);
  const FSolicitud = new Date(fechaSolicitud);

  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.title}>Despacho</Card.Title>
      <Card.Divider />
      {editMode ? (
        <>
          <TextInput
            style={styles.input}
            value={newNumeroGuiaDespacho}
            onChangeText={setNewNumeroGuiaDespacho}
            placeholder="N° Guía Despacho"
          />
          <TextInput
            style={styles.input}
            value={newObservaciones}
            onChangeText={setNewObservaciones}
            placeholder="Observaciones"
          />
          <TextInput
            style={styles.input}
            value={newNumeroDeSemanas}
            onChangeText={setNewNumeroDeSemanas}
            placeholder="N° Semanas"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={newPredio}
            onChangeText={setNewPredio}
            placeholder="Predio"
          />
          <TextInput
            style={styles.input}
            value={newCantidadDePlantas}
            onChangeText={setNewCantidadDePlantas}
            placeholder="Cantidad de Plantas"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={newFechaRetiro}
            onChangeText={setNewFechaRetiro}
            placeholder="Fecha Retiro"
          />
          <TextInput
            style={styles.input}
            value={newFechaSolicitud}
            onChangeText={setNewFechaSolicitud}
            placeholder="Fecha Solicitud"
          />
          <TextInput
            style={styles.input}
            value={newIdComuna}
            onChangeText={setNewIdComuna}
            placeholder="ID Comuna"
          />
          <TextInput
            style={styles.input}
            value={newIdBeneficiario}
            onChangeText={setNewIdBeneficiario}
            placeholder="ID Beneficiario"
          />
          <TextInput
            style={styles.input}
            value={newIdPrograma}
            onChangeText={setNewIdPrograma}
            placeholder="ID Programa"
          />
          <TextInput
            style={styles.input}
            value={newRutEncargado}
            onChangeText={setNewRutEncargado}
            placeholder="RUT Encargado"
          />
          <Button buttonStyle={{marginTop: 10}} title="Guardar" onPress={handleUpdate} />
          <Button buttonStyle={{marginTop: 10}} title="Cancelar" onPress={() => setEditMode(false)} />
        </>
      ) : (
        <>
          <View style={styles.row}>
            <Button
              buttonStyle={{ backgroundColor: "red" }}
              onPress={() => openModal(numeroGuiaDespacho)}
            >
              Eliminar
            </Button>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>N° Guía Despacho:</Text>
            <Text style={styles.value}>{numeroGuiaDespacho}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>N° Semanas:</Text>
            <Text style={styles.value}>{numeroDeSemanas}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Predio:</Text>
            <Text style={styles.value}>{predio}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Cantidad de Plantas:</Text>
            <Text style={styles.value}>{cantidadDePlantas}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.fecha}>Fecha Retiro: {FRetiro.toISOString().split("T")[0]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.fecha}>Fecha Solicitud: {FSolicitud.toISOString().split("T")[0]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ID Comuna:</Text>
            <Text style={styles.value}>{idComuna}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ID Beneficiario:</Text>
            <Text style={styles.value}>{idBeneficiario}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ID Programa:</Text>
            <Text style={styles.value}>{idPrograma}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>RUT Encargado:</Text>
            <Text style={styles.value}>{rutEncargado}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Observaciones:</Text>
          </View>
          <Text>{observaciones}</Text>
          <Button title="Actualizar" onPress={() => setEditMode(true)} />
        </>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "lightgray",
    borderRadius: 15,
    padding: 15,
    width: 350,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  fecha: {
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    fontSize: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default CardDespacho;
