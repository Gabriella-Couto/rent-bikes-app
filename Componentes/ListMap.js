import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import api from '../services/Api';
import Constants from "expo-constants";
import colors from "../colors";
import { withNavigation } from 'react-navigation';
import MapView from 'react-native-maps';


function ListMap({ navigation }) {
  const [bicycles, setBicycles] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  async function loadBicycles() {
    if (loading)
      return
    if (total > 0 && bicycles.length === total)
      return
    setLoading(true)

    const response = await api.get('/bicycles', {
      params: {
        page,
      }
    })
    setBicycles([...bicycles, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page)
    setLoading(false)
  }

  useEffect(() => {
    loadBicycles()
  }, [])


  return (

    <View style={styles.container}>
      <Text style={styles.btnText}>Escolha uma bicicleta</Text>

      {!loading && <MapView style={{ height: 500, width: "100%" }}
        initialRegion={{
          latitude: -46.656057,
          longitude: -23.587075,
          latitudeDelta: 0.035,
          longitudeDelta: 0.035
        }}
      >
        {bicycles.map(bicycle => {
          return (
            <MapView.Marker
              key={bicycle.id}
              coordinate={{
                latitude: parseFloat(bicycle.latitude),
                longitude: parseFloat(bicycle.longitude)
              }}
              title={bicycle.title}
              description={bicycle.description}
              onPress={() => navigation.navigate('VerBicicleta', { bicycle })}
              pinColor={'#f44336'}
            />
          );
        })}
      </MapView>
      }
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.venus800,
    alignItems: "center",
    flex: 1
  },

  imagem: {
    width: 200,
    height: 200,
    margin: 20,
    alignItems: "center",
    borderRadius: 20
  },

  btn: {
    marginVertical: 30,
    backgroundColor: colors.venus400,
    padding: 5,
    color: colors.moon1000,
    borderRadius: 30,
    width: 200,
    alignSelf: 'center',

  },

  btnText: {
    fontSize: 20,
    padding: 7,
    color: "white",
    textAlign: "center",
    fontWeight: 'bold',
    alignSelf: "center"
  },

  card: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 15,
    width: 300,
    height: 450,
    margin: 30
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: '600',
    alignSelf: "center"
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    alignSelf: "center"
  },
  price: {
    fontSize: 16,
    color: 'green',
    fontWeight: '500',
    marginTop: 10
  }
});

export default withNavigation(ListMap)
