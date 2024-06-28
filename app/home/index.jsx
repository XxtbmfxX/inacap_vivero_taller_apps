import { View, Text, Touchable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import supabase from "@supabase/supabase-js";

import Navegacion from "../../components/Navegacion";
import ItemsCard from "../../components/ItemsCard";
import { Button } from "@rneui/base";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {/* <Navegacion titulo={"Volver al inicio index"} screen={"/"} /> */}

        <ItemsCard titulo="Plantación" screen="planta-cion" />
        <ItemsCard titulo="Despachos" screen="despachos" />
        <ItemsCard titulo="Semillas" screen="semillas" />
      </View>

      <View style={styles.column}>
        <ItemsCard titulo="Químicos" screen="quimicos" />

        <ItemsCard titulo="Materiales" screen="materiales" />
        <ItemsCard titulo="Plantas" screen="plan-tas" />
        <ItemsCard titulo="Tareas" screen="tareas" />
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
