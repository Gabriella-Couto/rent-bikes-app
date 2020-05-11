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

const Registro = ({ navigation }) => {
  const [cliente, setCliente] = useState(false);
  const [anunciante, setAnunciante] = useState(false);
  const [corrente, setCorrente] = useState(false);
  const [poupanca, setPoupanca] = useState(false);

  const selecionarCliente = () => {
    if (anunciante == false) {
      setCliente(!cliente)
    }
  }

  const selecionarAnunciante = () => {
    if (cliente == false) {
      setAnunciante(!anunciante)
    }
  }

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

  return (

    <View style={styles.container}>
      <View style={styles.hr}>
        <TextInput
          placeholder="Nome completo"
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
          placeholder="E-mail"
          placeholderTextColor="white"
          style={[styles.textInput]}
          // secureTextEntry={true}
          selectionColor="white"
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.hr}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="white"
          style={[styles.textInput]}
          // secureTextEntry={true}
          selectionColor="white"
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.hr}>
        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="white"
          style={[styles.textInput]}
          // secureTextEntry={true}
          selectionColor="white"
          onChangeText={text => {
            setPassword(text);
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
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.btnPessoa}>
        <CheckBox
          title='Cliente'
          checkedIcon='check-square'
          uncheckedIcon='square-o'
          checked={cliente}
          onPress={() => selecionarCliente()}
        />
        <CheckBox
          title='Anunciante'
          checkedIcon='check-square'
          uncheckedIcon='square-o'
          checked={anunciante}
          onPress={() => selecionarAnunciante()}
        />
      </View>
      {cliente ?
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
                setPassword(text);
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
                setPassword(text);
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
                setPassword(text);
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
        :
        null
      }
      {anunciante ?
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
                setPassword(text);
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
                setPassword(text);
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
                setPassword(text);
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
        :
        null
      }
      <TouchableOpacity
        style={styles.btn}
        mode="contained"
        onPress={() => { navigation.navigate('VerBicicleta'); }}
      >
        <Text style={styles.btnText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
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

export default withNavigation(Registro)