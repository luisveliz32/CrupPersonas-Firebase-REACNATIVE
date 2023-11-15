import {react , useState} from 'react';
import { View,Text,Button } from 'react-native';
const Contador=()=>{
    const[contador,setcontador]=useState(0);

    const aumentar=()=>{
        setcontador(contador+1);
    }

    const disminuir=()=>{
        setcontador(contador-1);
    }

    return(
        <View>
            <Text>Contador {contador}</Text>
            <Button title='+' color="green" onPress={aumentar}></Button>
            <Button title='-' color="red" onPress={disminuir}></Button>
        </View>
        
    )
}
export default Contador;