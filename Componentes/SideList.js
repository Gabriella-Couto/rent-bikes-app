import React, {useState} from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { Overlay, Text, Icon, Divider, Header } from 'react-native-elements'

export default function SideList() {
  
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      {showMenu ?
          <Overlay isVisible={showMenu} onBackdropPress={() => {setShowMenu(false)}} fullScreen={true} >
              <View >
                <Header
                    leftComponent={<TouchableOpacity onPress={() => {setShowMenu(false)}}>
                    <Icon
                      name='menu'
                      color='#000' />
                  </TouchableOpacity>}
                    centerComponent={{ text: 'Aluga Aí', style: { color: '#fff' } }}
                    rightComponent={<Image style={styles.imagem} source={require('../Imagens/logo.png')}/>}
                  />
                
                <Text style={styles.text}>Home</Text>
                <Divider style={styles.dividerLine} />
                <Text style={styles.text}>Anúncios</Text>
                <Divider style={styles.dividerLine} />
                <Text style={styles.text}>Perfil</Text>
                <Divider style={styles.dividerLine} />
                <Text style={styles.text}>Log out</Text>
              </View>
            
          </Overlay>
        :
        <TouchableOpacity onPress={() => {setShowMenu(true)}}>
          <Icon
            name='menu'
            color='#fff' />
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0
  },
  imagem: {
    width: 30,
    height: 30
  },
  dividerLine: {
    backgroundColor: '#000',
    margin: 15
  },
  text: {
    marginLeft: 20
  },
  background: {
    backgroundColor: '#8332a8'
  },
  icon: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginLeft: 2
  }
});