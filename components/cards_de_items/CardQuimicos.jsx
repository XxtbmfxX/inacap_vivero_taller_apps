import { View, Text } from 'react-native'
import React from 'react'

const CardQuimicos = () => {
  return (
    <View>
      <Text>CardQuimicos</Text>
    </View>
  )
}

<>
  <Card.Title>
    Químicos
  </Card.Title>
  <Card.Divider />
  <View
    style={{
      position: "relative",
      alignItems: "left",
      backgroundColor:
        "lightgray",
      width: 350,
      height: 200,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15
    }}
  >
    <View
      style={{
        flex: 10,
        flexDirection:
          "row",
        gap: 20,
        margin: 15,
        alignItems:
          "baseline"
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold"
        }}
      >
        Nombre
      </Text>
    </View>

    <View
      style={{
        flex: 20,
        flexDirection:
          "row",
        gap: 20,
        margin: 15
      }}
    >
      <Text>
        FechaIngreso
      </Text>
    </View>

    <View
      style={{
        flex: 1,
        flexDirection:
          "row",
        gap: 50,
        margin: 10
      }}
    >
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>
        Cantidad
        #(stock)/#(stock
        minimo)
      </Text>
    </View>

    <View
      style={{
        flex: 100,
        flexDirection:
          "row",
        gap: 30,
        margin: 15
      }}
    >
      <Text>Contenido</Text>
    </View>

    <View
      style={{
        flex: 10000,
        flexDirection:
          "row",
        gap: 30,
        margin: 15
      }}
    >
      <Text>
        Necesidades lt/kg
      </Text>
    </View>

    <View
      style={{
        flex: 1800,
        flexDirection:
          "row",
        gap: 150,
        margin: 15
      }}
    >
      <Text>Categoría</Text>
      <Text>
        Presentación
      </Text>
    </View>
  </View>
</>


export default CardQuimicos
