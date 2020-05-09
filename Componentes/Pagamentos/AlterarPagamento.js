import React, {useState} from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from "../../colors";
import Constants from "expo-constants";

const AlterarPagamento = ({ navigation }) => {
    const [numero, setNumero] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiracao, setExpiracao] = useState('');
    const [nome, setNome] = useState('');

    return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.center}>
                <View>
                    <Text style={styles.textPagamento}>Alterar método de pagamento:</Text>
                    <View style={styles.hr}>
                        <TextInput
                        placeholder="Número do cartão"
                        placeholderTextColor="white"
                        style={[styles.textInput]}
                        keyboardType='number-pad'
                        selectionColor="white"
                        value={numero}
                        onChangeText={text => {
                            setNumero(text)
                        }}
                    />
                    </View>
                    <View style={styles.hr}>
                        <TextInput
                        placeholder="Código de segurança"
                        placeholderTextColor="white"
                        style={[styles.textInput]}
                        keyboardType='number-pad'
                        selectionColor="white"
                        value={cvv}
                        onChangeText={text => {
                            setCvv(text)
                        }}
                    />
                    </View>
                    <View style={styles.hr}>
                        <TextInput
                        placeholder="Data de validade"
                        placeholderTextColor="white"
                        style={[styles.textInput]}
                        selectionColor="white"
                        value={expiracao}
                        onChangeText={text => {
                            setExpiracao(text)
                        }}
                    />
                    </View>
                    <View style={styles.hr}>
                        <TextInput
                        placeholder="Nome no cartão"
                        placeholderTextColor="white"
                        style={[styles.textInput]}
                        selectionColor="white"
                        value={nome}
                        onChangeText={text => {
                            setNome(text)
                        }}
                    />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    mode="contained"
                    onPress={() => { navigation.navigate('Pagamento'); }}
                    >
                    <Text style={styles.btnText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.venus800,
    alignItems: "center",
    flex: 1,
    paddingBottom: 300
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 30
  },

  welcome: {
    color: "white",
    fontSize: 40,
    marginTop: 30,
    fontFamily: "Courier", 
    fontWeight: "bold"
  },
  center: {
    alignItems: "center"
  },
  textInput: {
    paddingHorizontal: 10,
    color: "white",
  },
  hr: {
    paddingBottom: 5,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginVertical: 15,
    width: 300
  },
  btn: {
    marginVertical: 30,
    backgroundColor: 'white',
    padding: 5,
    color: colors.moon1000,
    borderRadius: 30,
    width: 125
  },
  btnText: {
    fontSize: 20,
    padding: 7,
    color: colors.moon1000,
    textAlign: "center",
    fontWeight: 'bold',
    alignSelf: "center"
  },
   btnPessoa: {
    flex: 1,
    alignContent: 'space-between',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  textPagamento: {
      margin: 14,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
  }
});

export default withNavigation(AlterarPagamento)