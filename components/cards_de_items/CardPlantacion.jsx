import { View, Text } from 'react-native'
import React from 'react'

const CardPlantacion = ({plantacion, fechaInicio, fechaTermino,}) => {
  return (<>
  <Card.Title>
    {plantacion}
  </Card.Title>
  <Card.Divider />
  <View
    style={{
      position: "relative",
      alignItems: "left",
      backgroundColor:
        "lightgray",
      width: 300,
      height: 150,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15
    }}
  >
    <View
      style={{
        flex: 40,
        flexDirection:
          "row",
        gap: 80,
        margin: 15,
        alignItems:
          "baseline"
      }}
    >
      <Text>
        {fechaInicio}
      </Text>
      
      <Text>
        {fechaTermino}
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
      <Text>
      Especie
      </Text>
      <Text>
      Especie 2
      </Text>
      <Text>
     N° Cosecha #
      </Text>

    </View>

    
   
  </View>
</>

  )
}



export default CardPlantacion
