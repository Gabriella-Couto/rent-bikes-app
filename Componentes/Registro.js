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
  
  return (
    <View style={styles.container}>
      <Text style={styles.textPagamento}>Você pretende?</Text>
      <View style={styles.btnPessoa}>
        <TouchableOpacity
            style={styles.btn}
            mode="contained"
            onPress={() => { navigation.navigate('RegistroCliente'); }}
          >
            <Text style={styles.btnText}>Alugar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={() => { navigation.navigate('RegistroAnunciante'); }}
        >
          <Text style={styles.btnText}>Anunciar</Text>
        </TouchableOpacity>
      </View>
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
  btn: {
    marginVertical: 30,
    backgroundColor: 'white',
    padding: 5,
    color: colors.moon1000,
    borderRadius: 30,
    width: 125,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
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