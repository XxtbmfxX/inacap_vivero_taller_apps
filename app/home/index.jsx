import { View, Text } from 'react-native'
import React from 'react'

import ItemsCard from '../../components/ItemsCard'

const index = () => {
  return (
    <View
    style={{
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      height: "100%",
      gap: 20,
    }}
  >

    {/* No sé por qué colocar planatacion y plantas no se puede colocar  */}
    <ItemsCard titulo="Plantación" screen='planta-cion' /> 
    <ItemsCard titulo="Despachos" screen='despachos'  />
    <ItemsCard titulo="Semillas" screen='semillas'  />
    <ItemsCard titulo="Químicos" screen='quimicos'  />
    <ItemsCard titulo="Materiales" screen='materiales'  />
    <ItemsCard titulo="Plantas" screen='plan-tas'  />
    <ItemsCard titulo="Tareas" screen='tareas'  />
  </View>
  )
}

export default index