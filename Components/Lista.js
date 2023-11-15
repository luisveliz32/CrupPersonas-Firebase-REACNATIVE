import {react} from 'react';
import { Text ,View} from 'react-native';
//import data from '../data/data';
const data=[
    {
      id: '1',
      title: 'Primer item',
    },
    {
      id: '2',
      title: 'Segund Item',
    },
    {
      id: '3',
      title: 'Tercero Item',
    },
    {
        id: '4',
        title: 'Cuarto Item',
      },
  ];
const Lista=()=>{
    return(
        <View>
            {data.map(item=>(
                <View key={item.id}>
                    <Text>{item.id}</Text>
                    <Text>{item.title}</Text>
                </View>
            ))

            }
        </View>
    )
}

export default Lista;