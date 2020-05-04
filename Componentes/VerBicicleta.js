import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import {withNavigation} from 'react-navigation';

const VerBicicleta = ({ navigation }) => {
    const alugarClick = () => {

    }

    return (
        <ScrollView >
            <View style={styles.container}>
                <Image style={styles.imagem} source={require('../Imagens/1.jpg')}/>
                <Text style={styles.title}>Bicicleta 29 KSW 24v Câmbios Shimano Tx-800 Disco Hidráulico Suspensão com Trava Branco e Preto 17</Text>
                <View >
                <Text style={styles.lines}>Preço por hora: R$ 5,00</Text>
                <Text style={styles.lines}>Preço por dia: R$ 100,00</Text>
                <Text style={styles.lines}>Detalhes: A Bicicleta Aro 29 KSW Xlt 24V Câmbios Shimano Freio a Disco Hidráulico Suspensão com Trava Quadro em Alumínio 6061 é equipada com Câmbios Shimano.
                O freio a disco é desenvolvido para melhor desempenho nas frenagens em qualquer terreno, quadro em alumínio 6061 e suspensão dianteira com 80mm de Curso.
                Esse conjunto de componentes é indicado para passeios em qualquer tipo de terreno com total conforto e segurança sem perder o estilo.</Text>
                <Text style={styles.lines}>Anunciado por: Edivaldo</Text>
                <Text style={styles.lines}>Retirada em: Butantã, São Paulo - SP</Text>
                </View>
                <View style={styles.btn1}>
                    <Button title="Alugar" onPress={() => {navigation.navigate('Pagamento')}}/>
                </View>
            </View>
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  },
  imagem: {
      width: 300,
      height: 300
  },
  btn1: {
    width: 100,
    margin: 20
  },
  lines:{
    marginBottom: 5
  }, price: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#32adf0'
  }

});

export default withNavigation(VerBicicleta)