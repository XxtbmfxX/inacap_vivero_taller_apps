import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

/**
 * Componente de tarjeta para mostrar detalles de un trabajador.
 * @returns {JSX.Element} Elemento de tarjeta que muestra el nombre del trabajador y un botón de eliminar.
 */

const CardTrabajadores = () => {
  return (
    <View >
      <Text> Nombre trabajador</Text>
      <Button title="Delete"  />
    </View>
  );
};

export default CardTrabajadores;
