import {react} from 'react';
import { Text } from 'react-native';

const Saludo=(props)=>{
    return(
        <Text>hola {props.nombre} mi apellido es {props.apellido} </Text>
    )
}
export default Saludo;
