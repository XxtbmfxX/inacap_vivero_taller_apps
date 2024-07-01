import { View, Text, Touchable, StyleSheet } from "react-native";
import { Link } from "expo-router";

import Navegacion from "../../components/Navegacion";
import ItemsCard from "../../components/ItemsCard";
import { Button } from "@rneui/base";

// import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gmqsanwdflqjboqryynz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcXNhbndkZmxxamJvcXJ5eW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1NzA4NDcsImV4cCI6MjAzMjE0Njg0N30.ezQ8J3vsWqjD1LuqhENTGmguYcrGo3hwnCkLlbjqWic"
);

const index = () => {
  const [químicos, setQuímicos] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    let { data, error } = await supabase.from("quimico").select("*");
    console.log(data, error, "a");
    setQuímicos(data);
  };

  return (
    <View style={styles.container}>
      {químicos.map((quimico) => (
        <Text>{quimico.nombre}</Text>
      ))}
      <View style={styles.column}>
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
