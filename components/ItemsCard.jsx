import React from 'react';
import { Card, Button } from '@rneui/base';

const ItemsCard = ({titulo="Semillas"}) => {
  return (
    <Button
      buttonStyle={{ width: 150 }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      onPress={() => alert("Ir a la  sección de " + titulo)}
      title={titulo}
      titleStyle={{ marginHorizontal: 5 }}
    />
  )
}

export default ItemsCard