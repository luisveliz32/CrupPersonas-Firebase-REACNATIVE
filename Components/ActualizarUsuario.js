import {react , useState} from 'react';
import { View,TextInput,StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';
import appFirebase from '../Credenciales';
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc, updateDoc} from 'firebase/firestore';

const db=getFirestore(appFirebase);

const ActualizarUsuario=({navigation,route})=>{

    const { item } = route.params;
    console.log(item);
    const[persona,setpersona]=useState({
        nombre:item.nombre,
        apellidop:item.apellidop,
        apellidom:item.apellidom,
        sexo:item.sexo,
    })

    const actualizar=async(id)=>{
        try {
            const a =doc(db,'persona',id);
            await updateDoc(a,persona);
            console.log('persona actualizada con exito');

            navigation.navigate('Listar Usuarios');
        } catch (error) {
            console.log(error);
        }
    }

    const eliminar=async(id)=>{
        try {
            await deleteDoc(doc(db,'persona',id));
            console.log('Persona Eliminada con Exito');
            navigation.navigate('Listar Usuarios');
        } catch (error) {
            console.log(error)
        }
    }

    const capturandoinput=(value,name)=>{
        setpersona({...persona,[name]:value})
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
                title='Actualizar usuario'
                style={styles.boton}
                onPress={()=>actualizar(item.id)}
            />
            <Button
                title='Eliminar Usuario'
                color="red"
                onPress={()=>eliminar(item.id)}
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

export default ActualizarUsuario;