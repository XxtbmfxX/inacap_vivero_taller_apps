import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "@rneui/base";
import { supabase } from "../../lib/supabase";
import { formatDate } from "../../lib/utils";

const CardQuimicos = ({
  fechaIngreso,
  cantidad,
  contenido,
  categoria,
  presentacion,
  stockMinimo,
  nombre,
  id,
  onUpdate,
  openModal,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newNombre, setNewNombre] = useState(nombre);
  const [newCantidad, setNewCantidad] = useState(cantidad);
  const [newContenido, setNewContenido] = useState(contenido);
  const [newCategoria, setNewCategoria] = useState(categoria);
  const [newPresentacion, setNewPresentacion] = useState(presentacion);
  const [newStockMinimo, setNewStockMinimo] = useState(stockMinimo);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from('quimico')
      .update({
        nombre: newNombre,
        cantidad: newCantidad,
        contenido: newContenido,
        categoria: newCategoria,
        presentacion: newPresentacion,
        stock_minimo: newStockMinimo,
      })
      .eq('id', id);

    if (!error) {
      onUpdate();
      setEditMode(false);
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <Card.Divider />
      <View style={styles.cardContainer}>
        {editMode ? (
          <>
            <TextInput
              style={styles.input}
              value={newNombre}
              onChangeText={setNewNombre}
              placeholder="Nombre"
            />
            <TextInput
              style={styles.input}
              value={newCantidad}
              onChangeText={setNewCantidad}
              placeholder="Cantidad"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              value={newContenido}
              onChangeText={setNewContenido}
              placeholder="Contenido"
            />
            <TextInput
              style={styles.input}
              value={newCategoria}
              onChangeText={setNewCategoria}
              placeholder="Categoría"
            />
            <TextInput
              style={styles.input}
              value={newPresentacion}
              onChangeText={setNewPresentacion}
              placeholder="Presentación"
            />
            <TextInput
              style={styles.input}
              value={newStockMinimo}
              onChangeText={setNewStockMinimo}
              placeholder="Stock Mínimo"
              keyboardType="numeric"
            />
            <Button title="Guardar" onPress={handleUpdate} />
            <Button title="Cancelar" onPress={() => setEditMode(false)} />
          </>
        ) : (
          <>
            <Button
              buttonStyle={{ backgroundColor: "red" }}
              onPress={() => openModal({ id: id })}
            >
              Eliminar
            </Button>

            <View style={styles.header}>
              <Text style={styles.contenido}>id: {id}</Text>
              <Text style={styles.contenido}>Contenido: {contenido}</Text>
              <Text style={styles.contenido}>Nombre: {nombre}</Text>
            </View>
            <Text style={styles.fechaIngreso}>
              Fecha Ingreso: {formatDate(fechaIngreso)}
            </Text>
            <View style={styles.categoryPresentation}>
              <Text style={styles.text}>Categoría: {categoria}</Text>
            </View>
            <Text style={styles.text}>Presentación: {presentacion}</Text>
            <View style={styles.details}>
              <Text style={styles.text}>Cantidad: {cantidad}</Text>
              <Text style={styles.text}>Stock Mínimo: {stockMinimo}</Text>
            </View>
            <Button title="Actualizar" onPress={() => setEditMode(true)} />
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "flex-start",
    backgroundColor: "lightgray",
    width: 350,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    gap: 10,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 20,
    gap: 20,
  },
  contenido: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fechaIngreso: {
    fontSize: 16,
  },
  categoryPresentation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  details: {
    justifyContent: "space-between",
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

export default CardQuimicos;
