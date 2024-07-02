import React from "react";
import { Card, Button } from "@rneui/base";
import { Link } from "expo-router";

const ItemsCard = ({ titulo = "Semillas", screen = "/index" }) => {
  return (
    <Link
      href={screen}
      style={{
        backgroundColor: "#379eff",
        color: "white",
        padding: 10,
        margin: 10,
        height: 100,
        textAlign: "center",
        paddingTop: 30,
        fontSize: 25
      }}
    >
      {titulo}
    </Link>
  );
};

export default ItemsCard;
