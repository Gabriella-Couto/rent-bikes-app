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
import { CheckBox } from 'react-native-elements';
import api from '../api';
import { StackActions, NavigationActions } from 'react-navigation';
import { StatusBar, AsyncStorage } from 'react-native';

const RegistroAnunciante = ({ navigation }) => {
  const [corrente, setCorrente] = useState(false);
  const [poupanca, setPoupanca] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [conta, setConta] = useState('');
  const [banco, setBanco] = useState('');
  const [agencia, setAgencia] = useState('');
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

  
  const signUp = async () => {
    const advertiser = {
        "advertiser": {
          "name": nome,
          "email": email,
          "password": senha,
          "password_confirmation": confirmaSenha,
          "document": cpf,
          "phone": fone,
          "agency": agencia,
          "account_number": conta,
          "bank_name": banco,
          "account_type": poupanca == true? "Conta poupança" : "Conta corrente"
        }
    }

    try {
        const response = api.post('/advertisers', advertiser);

        AsyncStorage.setItem('UsuarioLogado', JSON.stringify((await response).data));

        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'CadastrarBike' }),
          ],
        });
        navigation.dispatch(resetAction);
        
        console.log("sucesso dispatch");
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
            textContentType="password"
            secureTextEntry={true}
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
            textContentType="password"
            secureTextEntry={true}
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
            <Text style={styles.textPagamento}>Cadastrar conta para receber pagamento:</Text>
            <View style={styles.hr}>
            <TextInput
                placeholder="Número da conta"
                placeholderTextColor="white"
                style={[styles.textInput]}
                keyboardType='number-pad'
                selectionColor="white"
                onChangeText={text => {
                setConta(text);
                }}
            />
            </View>
            <View style={styles.hr}>
            <TextInput
                placeholder="Agência"
                placeholderTextColor="white"
                style={[styles.textInput]}
                keyboardType='number-pad'
                selectionColor="white"
                onChangeText={text => {
                setAgencia(text);
                }}
            />
            </View>
            <View style={styles.hr}>
            <TextInput
                placeholder="Banco"
                placeholderTextColor="white"
                style={[styles.textInput]}
                selectionColor="white"
                onChangeText={text => {
                setBanco(text);
                }}
            />
            </View>
            <View style="conta">
            <CheckBox
                center
                title='Conta poupança'
                checkedIcon='check-square'
                uncheckedIcon='square-o'
                checked={poupanca}
                onPress={() => clickContaPoupanca()}
            />
            <CheckBox
                center
                title='Conta corrente'
                checkedIcon='check-square'
                uncheckedIcon='square-o'
                checked={corrente}
                onPress={() => clickContaCorrente()}
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