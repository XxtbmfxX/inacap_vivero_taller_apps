import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "@rneui/base";
import { supabase } from "../../lib/supabase";


/**
 * Componente de tarjeta para mostrar y editar detalles de un material.
 * @param {Object} props Propiedades del componente.
 * @param {number} props.idMaterial ID del material.
 * @param {string} props.nombreMaterial Nombre del material.
 * @param {string} props.unidadDeMedida Unidad de medida del material.
 * @param {number} props.cantidad Cantidad del material.
 * @param {Function} props.openModal Función para abrir un modal específico.
 * @param {Function} props.onUpdate Función para actualizar el estado después de una operación.
 * @returns {JSX.Element} Elemento de tarjeta que muestra o edita detalles del material.
 */
const CardMaterial = ({
  idMaterial,
  nombreMaterial,
  unidadDeMedida,
  cantidad,
  openModal,
  onUpdate,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newNombreMaterial, setNewNombreMaterial] = useState(nombreMaterial);
  const [newUnidadDeMedida, setNewUnidadDeMedida] = useState(unidadDeMedida);
  const [newCantidad, setNewCantidad] = useState(cantidad);

  /**
   * Maneja la actualización de los detalles del material en la base de datos.
   * Actualiza el nombre, unidad de medida y cantidad del material.
   * Llama a la función onUpdate después de la actualización exitosa.
   * @returns {Promise<void>} Promesa que se resuelve después de la actualización.
   */
  const handleUpdate = async () => {
    const { error } = await supabase
      .from('material')
      .update({
        nombre: newNombreMaterial,
        unidad_de_medida: newUnidadDeMedida,
        cantidad: newCantidad,
      })
      .eq('id_material', idMaterial);

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
              value={newNombreMaterial}
              onChangeText={setNewNombreMaterial}
              placeholder="Nombre del Material"
            />
            <TextInput
              style={styles.input}
              value={newUnidadDeMedida}
              onChangeText={setNewUnidadDeMedida}
              placeholder="Unidad de Medida"
            />
            <TextInput
              style={styles.input}
              value={newCantidad}
              onChangeText={setNewCantidad}
              placeholder="Cantidad"
              keyboardType="numeric"
            />
            <Button title="Guardar" onPress={handleUpdate} />
            <Button title="Cancelar" onPress={() => setEditMode(false)} />
          </>
        ) : (
          <>
            <Button
              buttonStyle={{ backgroundColor: "red" }}
              onPress={() => openModal(idMaterial)}
            >
              Eliminar
            </Button>
            <Card.Title style={styles.title}>{nombreMaterial}</Card.Title>
            <Text style={styles.text}>
              {cantidad} - {unidadDeMedida}
            </Text>
            <Button title="Actualizar" onPress={() => setEditMode(true)} />
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    alignItems: "flex-start",
    backgroundColor: "lightgray",
    width: 350,
    borderRadius: 15,
    marginBottom: 30,
    padding: 10,
  },
  title: {
    fontSize: 30,
  },
  text: {
    fontSize: 30,
    margin: 20,
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

export default CardMaterial;
