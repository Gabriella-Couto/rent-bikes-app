import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Divider, Overlay } from 'react-native-elements'
import colors from '../../colors';

const Pagar = ({ navigation }) => {

  const [showModal, setShowModal] = useState(false);
  const alterarClick = () => {
  }

  const pagarClick = () => {
    setShowModal(true);
  }

  const toggleOverlay = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do aluguel</Text>
      <View style={styles.alignCenter}>
        <Text >Confirmar dados de pagamento:</Text>
        <Text >Data validade: 03/22</Text>
        <Text >Cartão: *********889</Text>
      </View>
      <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={() => {navigation.navigate('AlterarPagamento')}}
          >
          <Text style={styles.btnText}>Alterar cartão</Text>
      </TouchableOpacity>
      <View style={styles.dividerLine} ></View>
      <View style={styles.alignCenter}>
        <Text>Valor do aluguel: R$ 45,00</Text>
        <Text>Bicicleta: Bicicleta Mountain Bike Colli Bikes GPS 220</Text>
      </View>
      <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={() => {pagarClick()}}
          >
          <Text style={styles.btnText}>Pagar</Text>
      </TouchableOpacity>
      <Overlay isVisible={showModal} onBackdropPress={toggleOverlay} fullScreen={false}>
        <Text style={styles.messageSuccess}>Pagamento realizado com sucesso!</Text>
        <View style={styles.dividerLine} ></View>
        <Text>Agora contate o vendedor no número 11 97778-0988 para combinar o local para pegar a sua bicicleta.</Text>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 15,
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingTop: 15
  },
  cardItens: {
    marginBottom: 3,
    marginLeft: 40,
    fontSize: 16
  },
  lines: {
    marginBottom: 3,
    marginLeft: 35,
    fontSize: 16
  },
  dividerLine: {
    paddingBottom: 2,
    backgroundColor: colors.venus400,
    marginVertical: 15,
    width: 330,
    marginTop: 130
  },
  messageSuccess: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray'
  },
  btn: {
    marginVertical: 30,
    backgroundColor: colors.venus400,
    padding: 5,
    borderRadius: 30,
    width: 150,
    alignContent: 'center',
    alignSelf: "center"
  },
  btnText: {
    fontSize: 18,
    padding: 7,
    color: '#fff',
    textAlign: "center",
    fontWeight: 'bold',
    alignSelf: "center",
    backgroundColor: colors.venus400,
  }, 
  alignCenter: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 3,
    fontSize: 18
  }

});

export default withNavigation(Pagar)