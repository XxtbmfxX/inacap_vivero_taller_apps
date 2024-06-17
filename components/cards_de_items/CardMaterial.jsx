import { View, Text } from 'react-native'
import React from 'react'

const CardMaterial = ({materiales, nombre, unidadDeMedida,cantidad }) => {
  return (
    <View>
      <Text>CardMaterial</Text>
    </View>
  )
}

 <>
  <Card.Title>
    {materiales}
  </Card.Title>
  <Card.Divider />
  <View
    style={{
      position: "relative",
      alignItems: "left",
      backgroundColor:
        "lightgray",
      width: 300,
      height: 130,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15
    }}
  >
    <View
      style={{
        flex: 1,
        flexDirection:
          "row",
        gap: 80,
        margin: 25,
        alignItems:
          "baseline"
      }}
    >
      <Text style = {{fontSize: 17}}>
        {nombre}
      </Text>

    </View>

    <View
      style={{
        flex: 10,
        flexDirection:
          "row",
        gap: 40,
        margin: 15
      }}
    >
      <Text style>
        {unidadDeMedida}
      </Text>

    </View>
    <View
      style={{
        flex: 10,
        flexDirection:
          "row",
        gap: 47,
        margin: 10
      }}
    >
    <Text></Text>
        <Text></Text>
            <Text></Text>
                <Text></Text>
      <Text>
        {cantidad}
      </Text>

    </View>
    
   
  </View>
</>

export default CardMaterial
