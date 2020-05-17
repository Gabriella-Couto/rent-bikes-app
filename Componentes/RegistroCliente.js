import React, { useState } from 'react';
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
import colors from "../colors";
import Constants from "expo-constants";
import api from '../api';
import { StackActions, NavigationActions } from 'react-navigation';

const RegistroAnunciante = ({ navigation }) => {
  const [corrente, setCorrente] = useState(false);
  const [poupanca, setPoupanca] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [cartao, setCartao] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiracao, setExpiracao] = useState('');
  const [titularCartao, setTitularCartao] = useState('');
  const [fone, setFone] = useState('');

  const clickContaCorrente = () => {
    if (poupanca == false) {
      setCorrente(!corrente)
    }
  }

  const clickContaPoupanca = () => {
    if (corrente == false) {
      setPoupanca(!poupanca)
    }
  }

  const signUp = () => {
    const user = {
        "user": {
          "name": nome,
          "email": email,
          "password": senha,
          "password_confirmation": confirmaSenha,
          "document": cpf,
          "phone": fone,
          "credit_card_number": cartao,
          "credit_card_name": titularCartao,
          "credit_card_cvv": cvv,
          "credit_card_expiration_date": expiracao
        }
    }

    try {
        const response = api.post('/users', user);
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'CadastrarBike' }),
          ],
        });
        navigation.dispatch(resetAction);
        console.log("sucesooo &&");
      } catch (_err) {
        console.log("Erro dispatch", _err); 
      }

  }

  return (
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.hr}>
            <TextInput
            placeholder="Nome completo"
            placeholderTextColor="white"
            style={[styles.textInput]}
            selectionColor="white"
            onChangeText={text => {
                setNome(text);
            }}
            />
        </View>
        <View style={styles.hr}>
            <TextInput
            placeholder="E-mail"
            placeholderTextColor="white"
            style={[styles.textInput]}
            // secureTextEntry={true}
            selectionColor="white"
            onChangeText={text => {
                setEmail(text);
            }}
            />
        </View>
        <View style={styles.hr}>
            <TextInput
            placeholder="Senha"
            placeholderTextColor="white"
            style={[styles.textInput]}
            selectionColor="white"
            onChangeText={text => {
                setSenha(text);
            }}
            />
        </View>
        <View style={styles.hr}>
            <TextInput
            placeholder="Confirmar senha"
            placeholderTextColor="white"
            style={[styles.textInput]}
            selectionColor="white"
            onChangeText={text => {
                setConfirmaSenha(text);
            }}
            />
        </View>
        <View style={styles.hr}>
            <TextInput
            placeholder="CPF"
            placeholderTextColor="white"
            style={[styles.textInput]}
            keyboardType='number-pad'
            selectionColor="white"
            onChangeText={text => {
                setCpf(text);
            }}
            />
        </View>
        <View style={styles.hr}>
            <TextInput
            placeholder="Número de telefone"
            placeholderTextColor="white"
            style={[styles.textInput]}
            keyboardType='number-pad'
            selectionColor="white"
            onChangeText={text => {
                setFone(text);
            }}
            />
        </View>
        <View>
            <Text style={styles.textPagamento}>Cadastrar método de pagamento:</Text>
            <View style={styles.hr}>
            <TextInput
                placeholder="Número do cartão"
                placeholderTextColor="white"
                style={[styles.textInput]}
                keyboardType='number-pad'
                selectionColor="white"
                onChangeText={text => {
                setCartao(text);
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
                onChangeText={text => {
                setCvv(text);
                }}
            />
            </View>
            <View style={styles.hr}>
            <TextInput
                placeholder="Nome no cartão"
                placeholderTextColor="white"
                style={[styles.textInput]}
                // secureTextEntry={true}
                selectionColor="white"
                onChangeText={text => {
                setTitularCartao(text);
                }}
            />
            </View>
            <View style={styles.hr}>
            <TextInput
                placeholder="Data de validade"
                placeholderTextColor="white"
                style={[styles.textInput]}
                selectionColor="white"
                onChangeText={text => {
                setExpiracao(text)
                }}
            />
            </View>
        </View>
        <TouchableOpacity
            style={styles.btn}
            mode="contained"
            onPress={() => {signUp()}}>
            <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
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
    paddingBottom: 100
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
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  textPagamento: {
    margin: 14,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default withNavigation(RegistroAnunciante)