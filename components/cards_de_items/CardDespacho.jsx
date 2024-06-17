import { View, Text } from 'react-native'
import React from 'react'

const CardDespacho = ({despachos, pedido, , fechaSolicitud,fechaRetiro,num_guia, cantidadPlantas, semillas  }) => {
  return (
    <View>
      <Text>CardDespacho</Text>
    </View>
  )
}
 <>
      <Card.Title>{despachos}</Card.Title>
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
            {pedido}
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            {num_guia}
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
          <Text>{fechaSolicitud}</Text>
          <Text>{fechaRetiro}</Text>
        </View>

        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            gap: 50,
            margin: 15,
          }}
        >
          <Text>{cantidadPlantas} #</Text>
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
          <Text>{n°_semillas}</Text>

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
