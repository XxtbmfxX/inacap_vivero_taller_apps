import { View, Text } from "react-native";
import React from "react";

import { Card, Button } from "@rneui/base";

const CardModal = ({ dato = "semilla" }) => {
  return (
    <Card containerStyle={{}}  >
      <Card.Title>Desea eliminar {dato}</Card.Title>
      <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"}}  >

      {/* Botón 1 */}
      <Button
        buttonStyle={{ width: 120 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F",
        }}
        onPress={() => alert(dato + " eliminado")}
        title="Si"
        titleStyle={{ marginHorizontal: 5 }}
      />
      {/* Botón 2 */}
      <Button
        buttonStyle={{ width: 120 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F",
        }}
        onPress={() => alert("Cerrar modal y dejar cosas como están")}
        title="No"
        titleStyle={{ marginHorizontal: 5 }}
      />
      </View>

    </Card>
  );
};

export default CardModal;
