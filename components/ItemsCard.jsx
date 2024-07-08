import React from "react";
import { Link } from "expo-router";

/**
 * Componente ItemsCard que renderiza un enlace estilizado con un título.
 *
 * @componente
 * @param {string} titulo - El título que se muestra en la tarjeta.
 * @param {string} screen - La ruta a la que el enlace debe navegar.
 *
 * @ejemplo
 * return (
 *   <ItemsCard titulo="Semillas" screen="/semillas" />
 * )
 *
 * @returns {JSX.Element} El componente renderizado.
 */

const ItemsCard = ({ titulo = "Semillas", screen = "/index"}) => {
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
