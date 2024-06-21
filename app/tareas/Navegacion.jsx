import React from 'react';
import { Link } from 'expo-router';

const Navegacion = ({ titulo, screen }) => {
  return (
    <Link href={screen} style={{ backgroundColor: "#379eff", color: "white", padding: 10, margin: 10 }}>
      {titulo}
    </Link>
  );
}

export default Navegacion;
