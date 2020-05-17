import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Index from './Navigation/Index';

export default function App() {
  return (
      <Index/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 30,
    height: 30
}
});
