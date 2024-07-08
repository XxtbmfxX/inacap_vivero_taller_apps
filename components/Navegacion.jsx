import React from "react";
import { Link } from "expo-router";


/**
 * Componente Navegacion que representa un enlace de navegación en la aplicación.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.titulo - Texto del enlace de navegación.
 * @param {string} props.screen - Ruta o pantalla a la que enlaza el componente.
 * @returns {JSX.Element} El componente renderizado.
 */

const Navegacion = ({ titulo, screen }) => {
  return (
    <Link
      href={screen}
      style={{
        backgroundColor: "#379eff",
        color: "white",
        padding: 10,
        margin: 10,
        bottom: 30
      }}
    >
      {titulo}
    </Link>
  );
};

export default Navegacion;
