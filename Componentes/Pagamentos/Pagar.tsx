import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

import { Divider, Overlay } from 'react-native-elements'

export const Pagar = () => {

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
            <Text style={styles.title}>Pagamento</Text>
            <View >
                <Text style={styles.lines}>Confirmar dados de pagamento:</Text>
                <Text style={styles.subContent}>Data validade: 03/22</Text>
                <Text style={styles.subContent}>Cartão: *********889</Text>

            </View>
            <View style={styles.marginBtn1}>
                <Button title="Alterar" onPress={alterarClick}/>
            </View>
            <Divider style={styles.dividerLine} />
            <View >
                <Text style={styles.lines}>Valor do aluguel: R$ 45,00</Text>
                <Text style={styles.lines}>Bicicleta: Bicicleta Mountain Bike Colli Bikes GPS 220</Text>

            </View>
            <View style={styles.marginBtn2}>

                <Button title="Pagar" onPress={pagarClick} />
            </View>
            <Overlay isVisible={showModal} onBackdropPress={toggleOverlay} fullScreen={false}>
                <Text style={styles.messageSuccess}>Pagamento realizado com sucesso!!!</Text>
            </Overlay>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  marginBtn1: {
      marginBottom: 130,
      marginTop: 10,
      width: 100
  },
  marginBtn2: {
    marginTop: 20,
    width: 100,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  subContent:{
      marginBottom: 3,
      marginLeft: 40
  },
  lines:{
    marginBottom: 3,
    marginLeft: 20
  },
  dividerLine: {
      backgroundColor: '#000',
      margin: 15
  },
  messageSuccess: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#32a852'
  }

});