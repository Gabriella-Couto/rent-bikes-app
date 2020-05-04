import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import {Pagar} from './Componentes/Pagamentos/Pagar';
import {VerBicicleta} from './Componentes/VerBicicleta';
import SideList from './Componentes/SideList';
import Index from './Navigation/Index';

export default function App() {
  return (
    <Index/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 30,
    height: 30
}
});
