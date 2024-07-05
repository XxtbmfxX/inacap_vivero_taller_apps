import { View, Text } from 'react-native'
import React from 'react'
import CardTrabajadores from '../../components/cards_de_items/CardTrabajadores'

const index = () => {
  return (
    <View>
      <Text>Trabajadores</Text>
      <CardTrabajadores/>
    </View>
  )
}

export default index