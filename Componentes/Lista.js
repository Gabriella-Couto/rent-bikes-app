import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import api from '../services/Api';
import { useNavigation } from 'react-navigation';
import Constants from "expo-constants";
import colors from "../colors";



export default function Lista() {
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

    < View style={styles.container} >
      <Text style={styles.btnText}>Escolha uma bicicleta</Text>

      <FlatList
        data={bicycles}
        keyExtractor={bicycle => String(bicycle.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: bicycle }) => (
          <View style={styles.card} >
            <Image style={styles.imagem} source={{ uri: bicycle.image_url }} />
            <Text style={styles.title} >{bicycle.title}</Text>
            <Text style={styles.description} >{bicycle.description}</Text>
            <Text style={styles.price}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(bicycle.price)}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigateToDetail(bicycle)}>
              <Text style={styles.btnText}>Ver mais detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
