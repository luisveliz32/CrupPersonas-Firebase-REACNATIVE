import {react,useState,useEffect} from 'react';
import { Text,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import appFirebase from '../Credenciales';
import Constants from 'expo-constants'; 
import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoc} from 'firebase/firestore';
import { View } from 'react-native-web';

const db= getFirestore(appFirebase);

const ListarUsuario=({navigation})=>{
    const[listar,setlistar]=useState([]);

    const optenerlista=async()=>{
        try {
            const lista=await getDocs(collection(db,'persona'));
            const docs=[];
            lista.forEach((doc)=>{
                const {nombre,apellidop,apellidom,sexo}=doc.data();
                docs.push(
                    {
                        id:doc.id,
                        nombre,
                        apellidop,
                        apellidom,
                        sexo
                    }
                )

            });

            setlistar(docs);

        } catch (error) {
            console.log(error);    
        }
    }

    useEffect(()=>{
        optenerlista();
    },[listar])

    const renderItem=({item})=>{
        return(
            <TouchableOpacity
                onPress={()=>navigation.navigate('Actualizar Usuario',{item})}
            >
                <View style={{
                    borderBottomWidth:1,
                    borderBottomColor:'#ccc',
                    padding:5
                }} >
                    <Text style={{fontWeight:'bold'}}>{item.nombre} {item.apellidop}  {item.apellidom}</Text>
                    <Text>Sexo:{item.sexo}</Text>
                    <Text> id:{item.id}</Text>
                </View>
            </TouchableOpacity>

        )
    };


    return(
        <view style={styles.container}>
            <FlatList
                data={listar}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}
            />
        </view>
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
export default ListarUsuario;