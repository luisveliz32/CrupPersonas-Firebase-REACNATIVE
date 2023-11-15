import {react} from 'react';
import { Text ,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListarUsuario from './ListarUsuario';
import NuevoUsuario from './NuevoUsuario';
import ActualizarUsuario from './ActualizarUsuario';
import { Ionicons } from '@expo/vector-icons';
import { Title } from 'react-native-paper';

const Principal=()=>{
    const Stack=createNativeStackNavigator();
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:'blue'
                },
                headerTintColor:'white',
            }}
        >
            <Stack.Screen 
                name='Listar Usuarios' 
                component={ListarUsuario}
                options={({navigation,route})=>({
                        Title:'Crud Personas',
                        headerRight:()=>(
                            <Ionicons
                                name={'ios-add-circle'}
                                size={25}
                                color={'white'}
                                style={{ marginRight: 15 }}
                                onPress={() => navigation.navigate('Nuevo Usuario')}
                            />
                        ),
                    }
                )} 
            
            />   
            <Stack.Screen
                name='Nuevo Usuario'
                component={NuevoUsuario}    
            />

            <Stack.Screen
                name='Actualizar Usuario' 
                component={ActualizarUsuario}
            />



        </Stack.Navigator>
    )
}

export default Principal;