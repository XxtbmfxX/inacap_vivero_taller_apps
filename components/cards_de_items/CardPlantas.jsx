import { View, Text } from 'react-native'
import React from 'react'



const CardPlantas = ({plantas, especie, sector, añoDespacho }) => {
  return (
    <>
    <Card.Title>
      {plantas}
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
          flex: 10,
          flexDirection:
            "row",
          gap: 100,
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
          {especie}
        </Text>
        
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          {sector}
        </Text>
      </View>
  
      <View
        style={{
          flex: 100,
          flexDirection:
            "row",
          gap: 100,
          margin: 15
        }}
      >
        <Text>
          {añoDespacho}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          #
        </Text>
      </View>
  
      
     
    </View>
  </>
  )
}


export default CardPlantas
