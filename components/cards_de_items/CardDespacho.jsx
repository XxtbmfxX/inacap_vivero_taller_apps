import { View, Text } from 'react-native'
import React from 'react'

const CardDespacho = () => {
  return (
    <View>
      <Text>CardDespacho</Text>
    </View>
  )
}
 <>
      <Card.Title>Despachos</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "left",
          backgroundColor: "lightgray",
          width: 350,
          height: 350,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            gap: 20,
            margin: 15,
            alignItems: "baseline",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Pedido
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            Num guía#
          </Text>
        </View>

        <View
          style={{
            flex: 5,
            flexDirection: "row",
            gap: 20,
            margin: 15
          }}
        >
          <Text>FechaSolicitud</Text>
          <Text>FechaRetiro</Text>
        </View>

        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            gap: 50,
            margin: 15,
          }}
        >
          <Text>CantidadPlantas #</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 30,
            margin: 40,
            alignItems: "bottom",
          }}
        >
          <Text>Especie</Text>
          <Text>Especie</Text>
          <Text>Especie</Text>
        </View>
        <View
          style={{
            flex: 10,
            flexDirection: "row",
            gap: 30,
            margin: 15,
            alignItems: "bottom",
          }}
        >
          <Text>N° Semillas</Text>

        </View>
        
        <View
          style={{
            flex: 10,
            flexDirection: "row",
            gap: 30,
            margin: 15,
            alignItems: "bottom",
          }}
        >
          <Text style={{fontSize: 17}}>Observaciones</Text>

        </View>
      </View>
    </>


export default CardDespacho
