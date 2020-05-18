import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from "../colors";
import MapView from 'react-native-maps';

const VerBicicleta = ({ route, navigation }) => {
  const alugarClick = () => {
  }

  const { params } = navigation.state;
  const bicycle = params.bicycle;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.productImg} source={{ uri: bicycle.image_url }} />
          <Text style={styles.title} >{bicycle.title}</Text>
          <Text style={styles.price}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(bicycle.price)}</Text>
          <Text style={styles.description} >{bicycle.description}</Text>
        </View>

        <View style={styles.separator}></View>
        <TouchableOpacity
          style={styles.btn}
          mode="contained"
          onPress={() => { navigation.navigate('Pagamento', { bicycle }) }}
        >
          <Text style={styles.btnText}>Alugar</Text>
        </TouchableOpacity>
        <MapView style={{ height: 300, width: "100%" }}
          initialRegion={{
            latitude: bicycle.latitude,
            longitude: bicycle.longitude
          }}
        >
          <MapView.Marker
            key={bicycle.id}
            coordinate={{
              latitude: bicycle.latitude,
              longitude: bicycle.longitude
            }}
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
    borderRadius: 10,
  },
  productImg: {
    width: 250,
    height: 250,
    margin: 20,
    alignItems: "center",
    borderRadius: 20
  },
  title: {
    fontSize: 28,
    color: "#696969",
    fontWeight: 'bold',
    textAlign: "center",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: 'bold',
    textAlign: "center",

  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: "#696969",
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