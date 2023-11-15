import {react} from 'react';
import { Text ,View,FlatList} from 'react-native';

const datos = [
    { id: '1', name: 'Juan', apellidos:'Cruz' },
    { id: '2', name: 'María', apellidos:'carvajal' },
    { id: '3', name: 'Pedro', apellidos:'Cespedes' },
    { id: '4', name: 'Luisa', apellidos:'Perez' },
    // Agrega más elementos según sea necesario
  ];

const render=({item})=>(
    <View>
        <Text>Nombre: {item.name} apllido: {item.apellidos}</Text>
        
    </View>       
)
const Flatlist=()=>{
    return(
        <FlatList
            data={datos}
            renderItem={render}
            keyExtractor={(item)=>item.id}
        />
    )
}
export default Flatlist;