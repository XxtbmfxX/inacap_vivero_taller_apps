import { Text, View } from 'react-native'
import { Input } from '@rneui/base';

const InputDatos = ({valor= "código semilla"})  => {
    return (
        <Input
        containerStyle={{ borderWidth: 2, margin: 5, width: "95%", borderRadius: 5 }}
        disabledInputStyle={{ background: "#ddd" }}
        inputContainerStyle={{}}
        // errorMessage="Oops! that's not correct."
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        label="Cambiar por el label indicado"
        labelStyle={{}}
        labelProps={{}}
        placeholder={"Ingrese " + valor}
      />
    )
}

export default InputDatos