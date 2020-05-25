import React, {useState} from 'react';
import { withNavigation } from 'react-navigation';
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
import colors from "../../colors";
import Constants from "expo-constants";
import { StackActions, NavigationActions } from 'react-navigation';
import api from '../../api';

const AlterarPagamento = ({ navigation }) => {
    const { params } = navigation.state;
    const usuarioLogado = params.user;
    const bicycle = params.bicycle;
    const [numero, setNumero] = useState(usuarioLogado.credit_card_number.toString());
    const [cvv, setCvv] = useState(usuarioLogado.credit_card_cvv.toString());
    const [expiracao, setExpiracao] = useState(usuarioLogado.credit_card_expiration_date);
    const [nome, setNome] = useState(usuarioLogado.name);

    const alterar = () => {
      const user = {
        "user": {
          "name": usuarioLogado.name,
          "email": usuarioLogado.email,
          "password": usuarioLogado.password,
          "password_confirmation": usuarioLogado.password_confirmation,
          "document": usuarioLogado.document,
          "phone": usuarioLogado.phone,
          "credit_card_number": numero,
          "credit_card_name": nome,
          "credit_card_cvv": cvv,
          "credit_card_expiration_date": expiracao
        }
      }

      try {
        const response = api.put(`/users/1`, user);

        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Pagamento', params: {user: user, bicycle: bicycle} }),
          ],
        });
        navigation.dispatch(resetAction);
      } catch (_err) {
        console.log("Erro dispatch", _err);
      }
    }

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
                        placeholder="Titular do cartão"
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
                    onPress={() => alterar()}
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

export default withNavigation(AlterarPagamento);