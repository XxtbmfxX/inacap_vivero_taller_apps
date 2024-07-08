import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "@rneui/base";
import { supabase } from "../../lib/supabase";


/**
 * Componente de tarjeta para mostrar y editar detalles de una semilla.
 * @param {Object} props Propiedades del componente.
 * @param {number} props.codigoBolsa Código de bolsa de la semilla.
 * @param {number} props.cantidad Cantidad de semillas.
 * @param {string} props.fechaRecepcion Fecha de recepción de las semillas.
 * @param {string} props.fechaColecta Fecha de colecta de las semillas.
 * @param {number} props.porcentajeGerminacion Porcentaje de germinación de las semillas.
 * @param {number} props.pesoEnviado Peso enviado de las semillas.
 * @param {number} props.pesoRecibido Peso recibido de las semillas.
 * @param {string} props.condicionSemilla Condición de las semillas.
 * @param {number} props.idEspecie ID de la especie de las semillas.
 * @param {number} props.idProcedencia ID de la procedencia de las semillas.
 * @param {number} props.idBodega ID de la bodega de las semillas.
 * @param {number} props.rutColector RUT del colector de las semillas.
 * @param {Function} props.openModal Función para abrir un modal específico.
 * @param {Function} props.onUpdate Función para actualizar el estado después de una operación.
 * @returns {JSX.Element} Elemento de tarjeta que muestra o edita detalles de las semillas.
 */

const CardSemillas = ({
  codigoBolsa,
  cantidad,
  fechaRecepcion,
  fechaColecta,
  porcentajeGerminacion,
  pesoEnviado,
  pesoRecibido,
  condicionSemilla,
  idEspecie,
  idProcedencia,
  idBodega,
  rutColector,
  openModal,
  onUpdate
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newCantidad, setNewCantidad] = useState(cantidad);
  const [newFechaRecepcion, setNewFechaRecepcion] = useState(fechaRecepcion);
  const [newFechaColecta, setNewFechaColecta] = useState(fechaColecta);
  const [newPorcentajeGerminacion, setNewPorcentajeGerminacion] = useState(porcentajeGerminacion);
  const [newPesoEnviado, setNewPesoEnviado] = useState(pesoEnviado);
  const [newPesoRecibido, setNewPesoRecibido] = useState(pesoRecibido);
  const [newCondicionSemilla, setNewCondicionSemilla] = useState(condicionSemilla);


    /**
   * Maneja la actualización de los detalles de la semilla en la base de datos.
   * Actualiza la cantidad, fecha de recepción, fecha de colecta,
   * porcentaje de germinación, peso enviado, peso recibido y condición de la semilla.
   * Llama a la función onUpdate después de la actualización exitosa.
   * @returns {Promise<void>} Promesa que se resuelve después de la actualización.
   */

  const handleUpdate = async () => {
    const { error } = await supabase
      .from('semilla')
      .update({
        cantidad: newCantidad,
        fecha_recepcion: newFechaRecepcion,
        fecha_colecta: newFechaColecta,
        porcentaje_germinacion: newPorcentajeGerminacion,
        peso_enviado: newPesoEnviado,
        peso_recibido: newPesoRecibido,
        condicion_semilla: newCondicionSemilla,
      })
      .eq('codigo_bolsa', codigoBolsa);

    if (!error) {
      onUpdate();
      setEditMode(false);
    } else {
      console.log(error.message);
    }
  };

  return (
    <Card containerStyle={{ padding: 0, borderRadius: 15, width: 300 }}>
      <Button buttonStyle={{ backgroundColor: "red" }} onPress={() => openModal(codigoBolsa)}>
        Eliminar
      </Button>
      {editMode ? (
        <View style={{ padding: 15 }}>
          <TextInput
            style={styles.input}
            value={newCantidad}
            onChangeText={setNewCantidad}
            placeholder="Cantidad"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={newFechaRecepcion}
            onChangeText={setNewFechaRecepcion}
            placeholder="Fecha Recepción"
          />
          <TextInput
            style={styles.input}
            value={newFechaColecta}
            onChangeText={setNewFechaColecta}
            placeholder="Fecha Colecta"
          />
          <TextInput
            style={styles.input}
            value={newPorcentajeGerminacion}
            onChangeText={setNewPorcentajeGerminacion}
            placeholder="Porcentaje Germinación"
          />
          <TextInput
            style={styles.input}
            value={newPesoEnviado}
            onChangeText={setNewPesoEnviado}
            placeholder="Peso Enviado"
          />
          <TextInput
            style={styles.input}
            value={newPesoRecibido}
            onChangeText={setNewPesoRecibido}
            placeholder="Peso Recibido"
          />
          <TextInput
            style={styles.input}
            value={newCondicionSemilla}
            onChangeText={setNewCondicionSemilla}
            placeholder="Condición Semilla"
          />
          <Button title="Guardar" onPress={handleUpdate} />
          <Button title="Cancelar" onPress={() => setEditMode(false)} />
        </View>
      ) : (
        <View style={{ backgroundColor: "lightgray", padding: 15 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Código Bolsa: {codigoBolsa}
            </Text>
            <Text style={{ fontSize: 18 }}>Cantidad: {cantidad}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>Fecha Recepción: {fechaRecepcion}</Text>
            <Text style={{ fontSize: 16 }}>Fecha Colecta: {fechaColecta}</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>
              Peso Enviado: {pesoEnviado}
            </Text>
            <Text style={{ fontSize: 16 }}>
              Peso Recibido: {pesoRecibido}
            </Text>
            <Text style={{ fontSize: 16 }}>
              Germinación: {porcentajeGerminacion}
            </Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>Condición: {condicionSemilla}</Text>
            <Text style={{ fontSize: 16 }}>Especie: {idEspecie}</Text>
            <Text style={{ fontSize: 16 }}>Procedencia: {idProcedencia}</Text>
            <Text style={{ fontSize: 16 }}>Bodega: {idBodega}</Text>
            <Text style={{ fontSize: 16 }}>Colector: {rutColector}</Text>
          </View>
          <Button title="Actualizar" onPress={() => setEditMode(true)} />
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
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

export default CardSemillas;
