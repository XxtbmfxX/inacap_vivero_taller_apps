import { View } from 'react-native'
import { Text } from '@rneui/base'
import React from 'react'

export type Props = {
    título: string;
};

const TitulosSecciones: React.FC<Props> = ({ título }) => {
    return (
        <View>
            <Text h1 style={{textAlign: "center", marginVertical: 20}} >{título}</Text>
        </View>
    )
}

export default TitulosSecciones
