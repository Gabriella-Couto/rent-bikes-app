import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from "../colors";
import MapView from 'react-native-maps';

const VerBicicleta = ({ navigation }) => {
  const alugarClick = () => {
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
          <Image style={styles.productImg} source={require('../Imagens/1.jpg')} />
          <Text style={styles.name}>Bicicleta de passeio</Text>
          <Text style={styles.price}>R$ 5,00/h</Text>
          <Text style={styles.description}>
            Esse conjunto de componentes é indicado para passeios em qualquer
            tipo de terreno com total conforto e segurança sem perder o estilo.
          </Text>
        </View>
        <View style={styles.separator}></View>
        <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={() => { navigation.navigate('Pagamento') }}
        >
          <Text style={styles.btnText}>Alugar</Text>
        </TouchableOpacity>
        <MapView style={{ height: 300, width: "100%" }}
          initialRegion={{
            latitude: "-23.6214181",
            longitude: "-46.6392422",
            latitudeDelta: 0.035,
            longitudeDelta: 0.035
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: "-23.6214181",
              longitude: "-46.6392422",
            }}
            pinColor={'#f44336'}

          />
        </MapView>
      </ScrollView>
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
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: 'bold'
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: 'bold'
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: "#696969",
  },
  star: {
    width: 40,
    height: 40,
  },

  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30
  },

  btn: {
    marginVertical: 30,
    backgroundColor: colors.venus400,
    padding: 5,
    color: colors.moon1000,
    borderRadius: 30,
    width: 125,
    alignSelf: 'center',

  },
  btnText: {
    fontSize: 20,
    padding: 7,
    color: "white",
    textAlign: "center",
    fontWeight: 'bold',
    alignSelf: "center"
  }

});
export default withNavigation(VerBicicleta)