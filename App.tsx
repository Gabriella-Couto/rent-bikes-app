import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import {Pagar} from './Componentes/Pagamentos/Pagar';
import {VerBicicleta} from './Componentes/VerBicicleta';
import SideList from './Componentes/SideList';
import TelaCliente from './Componentes/TelaInicio';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={<SideList/>}
        centerComponent={{ text: 'Aluga Aí', style: { color: '#fff' } }}
        rightComponent={<Image style={styles.imagem} source={require('./Imagens/logo.png')}/>}
      />
        <TelaCliente/>
    </View>
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
