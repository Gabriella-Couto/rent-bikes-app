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
      <Text style={styles.title}>Escolha uma bicicleta</Text>

      {!loading && <MapView style={{ height: 800, width: "100%", borderRadius: 30 }}
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

  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: '600',
    alignSelf: "center",
    color: "white",
    margin: 20
  },

});

export default withNavigation(ListMap)
