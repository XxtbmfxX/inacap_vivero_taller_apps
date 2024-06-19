import { View, Text } from 'react-native'
import React from 'react'

const CardQuimicos = ({quimicos, fechaIngreso, cantidad, contenido, necesidadesltkg, categoria, presentacion, stockMinimo}) => {
  return (
    <>
    <Card.Title>
      {quimicos}
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
          {fechaIngreso}
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
          {`${cantidad} #(${stock})/#${stockMinimo} `}
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
        <Text>{contenido}</Text>
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
          {necesidadesltkg}
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
        <Text>{categoria}</Text>
        <Text>
          {presentacion}
        </Text>
      </View>
    </View>
  </>
  )
}




export default CardQuimicos
