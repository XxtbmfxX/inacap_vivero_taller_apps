import { Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Button } from "@rneui/base";

import ItemsCard from "../components/ItemsCard";
import InputDatos from "../components/InputDatos";
import CardModal from "../components/CardModal";

export default function Index() {
  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
          <Link href="/home" style={{ width: "50%",  textAlign: "center", borderBottomWidth: 2, fontSize: 24 }}>
            Ir a home
          </Link>
      </View>
  );
}
