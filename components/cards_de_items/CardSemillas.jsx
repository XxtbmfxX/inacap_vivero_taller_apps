import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "@rneui/base";
import { supabase } from "../../lib/supabase";

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
