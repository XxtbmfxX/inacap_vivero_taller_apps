import { View, Text, Touchable, StyleSheet } from "react-native";
import { Link } from "expo-router";

import ItemsCard from "../../components/ItemsCard";
import { Button } from "@rneui/base";




const index = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.column}>
        <ItemsCard titulo="Cuenta" screen="/cuenta" />
        <ItemsCard titulo="Plantación" screen="planta-cion" />
        <ItemsCard titulo="Despachos" screen="despachos" />
        <ItemsCard titulo="Semillas" screen="semillas" />
      </View>

      <View style={styles.column}>
        <ItemsCard titulo="Químicos" screen="quimicos" />

        <ItemsCard titulo="Materiales" screen="materiales" />
        <ItemsCard titulo="Plantas" screen="plan-tas" />
        <ItemsCard titulo="Tareas" screen="tareas" />
        <ItemsCard titulo="Trabajadores" screen="trabajadores" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    backgroundColor: "#f0f0f0", // color de fondo opcional para visualizar las columnas
    margin: 5, // margen opcional para separar las columnas
  },
});

export default index;
