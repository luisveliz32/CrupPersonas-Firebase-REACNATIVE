import { StatusBar } from 'expo-status-bar';
import { Alert,StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import Principal from './Components/principal';
//import Lista from './Components/Lista';
//import Flatlist from './Components/Flatlist';
//import Saludo from './Components/Saludo';
//import Contador from './Components/Contador';
//import NuevoUusuario from './Components/NuevoUusuario';
import Principal from './components/principal';
export default function App() {
  return (
    <NavigationContainer>
      <Principal></Principal>
    </NavigationContainer>
  );
}

