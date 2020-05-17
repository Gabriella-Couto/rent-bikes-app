import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from "../colors";
import Constants from "expo-constants";
import api from '../api';
import { StatusBar, AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import axios from 'axios';

const TelaInicio = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const signIn = async () => {

    try {
      // await api.get('/users').then(response => {
      //   let lista_users = response.data;
      //   console.log("lista", lista_users)
      
      //     lista_users.map((u) => {
      //       if(u.email.toLowerCase() == email.toLowerCase() && u.password == senha){
      //           AsyncStorage.setItem('UsuarioLogado', u);
      //           const resetAction = StackActions.reset({
      //             index: 0,
      //             actions: [
      //               NavigationActions.navigate({ routeName: 'VerBicicleta' }),
      //             ],
      //           });
      //           navigation.dispatch(resetAction);
      //       } else if(u.email == email && u.password != senha){

      //       }
      //     })
      //   });

        await api.get('/advertisers').then(response => {
          let lista_advertisers = response.data;
         // console.log("lista", lista_advertisers)

          lista_advertisers.map((u) => {
              if(u.email.toLowerCase() == email.toLowerCase() && u.password == senha){
                  let usuario = JSON.stringify(u);
                  console.log("user", usuario)

                  AsyncStorage.setItem('UsuarioLogado', usuario), () => {
                    AsyncStorage.getItem("UsuarioLogado", (err, result) => {
                      console.log("@@", result);
                    });
                  };

                  const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'CadastrarBike' }),
                    ],
                  });
                  navigation.dispatch(resetAction);
              } else if(u.email == email && u.password != senha){

              }
            })
        });
        
      } catch (_err) {
        console.log("Erro dispatch", _err); 
      }
  }

  return (
    <ScrollView>

      <View style={styles.container}>
        <Image style={styles.imagem} source={require('../Imagens/logo.png')} />
        <Text style={{ ...styles.welcome }}>Bem Vindxs!</Text>
        <View style={styles.hr}>
          <TextInput
            placeholder="email@aluga-ai.com"
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
            style={[styles.textInput]}
            // secureTextEntry={true}
            selectionColor="white"
            onChangeText={text => {
              setSenha(text);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={() => {navigation.navigate('Pagamento')}}
        >
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={async () => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.btnText}>Sign Up</Text>
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
    alignItems: "center"
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
    marginVertical: 20,
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
  }
});

export default withNavigation(TelaInicio)