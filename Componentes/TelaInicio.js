import React from 'react';
import { StyleSheet, Button, Text, View, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

const TelaInicio = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imagem} source = {require('../Imagens/logo.png')} />
      </View>

      <View>
          <Text style={styles.text}>Olá, Bem Vindxs!</Text>
      </View>
      <View style={styles.modal}>
        <Button
            title="Login"
            onPress={() => {navigation.navigate('VerBicicleta');}}
        />

        <Button
            title="Cadastrar"
            onPress={() => {}}
        />
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
  },
  modal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  text: {
    color: '#000000',
    marginTop: 10,
    fontSize: 25,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 50,
  }
});

export default withNavigation(TelaInicio)