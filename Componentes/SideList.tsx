import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Text>Anúncios</Text>
      <Text>Perfil</Text>
      <Text>Log out</Text>
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