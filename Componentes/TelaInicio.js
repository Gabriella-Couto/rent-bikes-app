import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Input,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from "../colors";
import Constants from "expo-constants";

const TelaInicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
                setPassword(text);
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.btn}
            mode="contained"
            onPress={() => { navigation.navigate('Lista'); }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.venus800,
    alignItems: "center",
    flex: 1,
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