import { ScrollView, Text } from 'react-native'
import React from 'react'

import CardDespacho from '../../components/cards_de_items/CardDespacho'

const db = [
  {
    cantidadPlantas: 50,
    fechaRetiro: '2024-06-01',
    fechaSolicitud: '2024-05-25',
    numSemillas: 200,
    numeroGuia: 'AB123456',
    pedido: 'Pedido001'
  },
  {
    cantidadPlantas: 30,
    fechaRetiro: '2024-06-05',
    fechaSolicitud: '2024-05-28',
    numSemillas: 100,
    numeroGuia: 'CD789012',
    pedido: 'Pedido002'
  },
  {
    cantidadPlantas: 75,
    fechaRetiro: '2024-06-10',
    fechaSolicitud: '2024-06-01',
    numSemillas: 300,
    numeroGuia: 'EF345678',
    pedido: 'Pedido003'
  },
  {
    cantidadPlantas: 40,
    fechaRetiro: '2024-06-15',
    fechaSolicitud: '2024-06-05',
    numSemillas: 150,
    numeroGuia: 'GH901234',
    pedido: 'Pedido004'
  },
  {
    cantidadPlantas: 60,
    fechaRetiro: '2024-06-20',
    fechaSolicitud: '2024-06-10',
    numSemillas: 250,
    numeroGuia: 'IJ567890',
    pedido: 'Pedido005'
  }
]

const index = () => {
  return (
    <ScrollView contentContainerStyle={{alignItems: "center"}} >
      {
        db.map((despacho, indice) => (
          <CardDespacho 
            cantidadPlantas={despacho.cantidadPlantas}
            fechaRetiro={despacho.fechaRetiro}
            fechaSolicitud={despacho.fechaSolicitud}
            numSemillas={despacho.numSemillas}
            numeroGuia={despacho.numeroGuia}
            pedido={despacho.pedido}
            key={indice}
          />
        ))
      }
    </ScrollView>
  )
}

export default index
