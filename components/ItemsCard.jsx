import React from 'react';
import { Card, Button } from '@rneui/base';
import { Link } from 'expo-router';

const ItemsCard = ({titulo="Semillas", screen="/semillas"}) => {
  return (
    <Link href={screen} style={{ backgroundColor: "#379eff", color: "white", padding: 10, margin: 10 }}  >
      {titulo}
    </Link>
  )
}

export default ItemsCard