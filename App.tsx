import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './Componentes/Map';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>OI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
