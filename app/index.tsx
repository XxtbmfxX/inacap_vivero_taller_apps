import { Text, View, ScrollView } from "react-native";

import ItemsCard from "../components/ItemsCard";
import InputDatos from "../components/InputDatos";
import CardModal from "../components/CardModal";

export default function Index() {
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: "100%",
          gap: 20,
        }}
      >
        <ItemsCard titulo="Plantación" />
        <ItemsCard titulo="Despachos" />
        <ItemsCard titulo="Semillas" />
        <ItemsCard titulo="Químicos" />
        <ItemsCard titulo="Materiales" />
        <ItemsCard titulo="Plantas" />
        <ItemsCard titulo="Tareas" />
      </View>

      <View>
        <InputDatos />
      </View>

      <View>
        <CardModal />
      </View>
    </ScrollView>
  );
}
