import {react , useState} from 'react';
import { View,TextInput,StyleSheet,Button } from 'react-native';
import appFirebase from'../Credenciales';
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc} from 'firebase/firestore';

const db=getFirestore(appFirebase);

import Constants from 'expo-constants'; 
const NuevoUsuario=({navigation})=>{

    const[persona,setpersona]=useState({
        nombre:'',
        apellidop:'',
        apellidom:'',
        sexo:'',
    })

    const capturandoinput=(value,name)=>{
        setpersona({...persona,[name]:value})
    }


    const guardarpersona= async()=>{
        try {
            await addDoc(collection(db,'persona'),{
                ...persona
            })
            console.log('exito')
        } catch (error) {
         console.log(error);   
        }
        navigation.navigate('Listar Usuarios');
        
    }

    return(
        <View style={styles.container}>
            <TextInput
                placeholder='Nombre'
                style={styles.input}
                onChangeText={(value)=>capturandoinput(value,'nombre')}
                value={persona.nombre}
            />
            <TextInput
                placeholder='Apellido Paterno'
                style={styles.input}
                onChangeText={(value)=>capturandoinput(value,'apellidop')}
                value={persona.apellidop}
            />
            <TextInput
                placeholder='Apellido Materno'
                style={styles.input}
                onChangeText={(value)=>capturandoinput(value,'apellidom')}
                value={persona.apellidom}
            />
            <TextInput
                placeholder='sexo'
                style={styles.input}
                onChangeText={(value)=>capturandoinput(value,'sexo')}
                value={persona.sexo}
            />
            <Button
                title='Guardar usuario'
                style={styles.boton}
                onPress={guardarpersona}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        marginVertical:5

    },
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        padding:8,
        margin:15
    },
    boton:{
        backgroundColor:'blue',
        padding:10
    }
  });

export default NuevoUsuario;