import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import colors from "../colors";
import api from '../api';
import { StackActions, NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

const CadastrarBike = ({ navigation }) => {
    const [titulo, setTitulo] = useState('');
    const [preco, setPreco] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');

    const cadastar = async () => {
        let usuarioLogado = "";

        await AsyncStorage.getItem('UsuarioLogado', (err, result) => {
            usuarioLogado = result;
        });

        let advertiser = JSON.parse(usuarioLogado);

        const bike = {
            "bicycle": {
                "title": titulo,
                "price": preco,
                "longitude": longitude,
                "latitude": latitude,
                "description": descricao,
                "available": true,
                "image_url": imagem,
                "advertiser_id": advertiser.id
            }
        }

        try {
            const response = api.post('/bicycles', bike);

            await AsyncStorage.setItem('BicicletaCadastrada', JSON.stringify((await response).data));

            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'VerBicicleta', params: {bicycle: bike, anunciante: true} }),
                ],
            });
            navigation.dispatch(resetAction);
        } catch (_err) {
            console.log("Erro dispatch", _err);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                    <View style={styles.hr}>
                        <TextInput
                            placeholder="Título do anúncio"
                            placeholderTextColor="black"
                            style={[styles.textInput]}
                            selectionColor="black"
                            onChangeText={text => {
                                setTitulo(text);
                            }}
                        />
                    </View>
                    <View style={styles.hr}>
                        <TextInput
                            placeholder="Descrição da bicicleta"
                            placeholderTextColor="black"
                            style={[styles.textInput]}
                            selectionColor="black"
                            onChangeText={text => {
                                setDescricao(text);
                            }} />
                    </View>
                    <View style={styles.hr}>
                        <TextInput
                            placeholder="Preço por hora"
                            placeholderTextColor="black"
                            style={[styles.textInput]}
                            selectionColor="black"
                            onChangeText={text => {
                                setPreco(text);
                            }} />
                    </View>
                    <View style={styles.hr}>
                        <TextInput
                            placeholder="Latitude da bicicleta"
                            placeholderTextColor="black"
                            style={[styles.textInput]}
                            selectionColor="black"
                            onChangeText={text => {
                                setLatitude(text);
                            }} />
                    </View>
                    <View style={styles.hr}>
                        <TextInput
                            placeholder="Longitude da bicicleta"
                            placeholderTextColor="black"
                            style={[styles.textInput]}
                            selectionColor="black"
                            onChangeText={text => {
                                setLongitude(text);
                            }} />
                    </View>
                    <View style={styles.hr}>
                        <TextInput
                            placeholder="Url da imagem da bicicleta"
                            placeholderTextColor="black"
                            style={[styles.textInput]}
                            selectionColor="black"
                            onChangeText={text => {
                                setImagem(text);
                            }} />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    mode="contained"
                    onPress={() => { cadastar() }}
                >
                    <Text style={styles.btnText}>Cadastrar</Text>
                </TouchableOpacity>

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
    textInput: {
        paddingHorizontal: 10,
        color: "black",
    },
    hr: {
        paddingBottom: 5,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 15,
        width: 270
    },
    btn: {
        marginVertical: 30,
        backgroundColor: colors.venus400,
        padding: 5,
        borderRadius: 30,
        width: 125,
        alignContent: 'center',
        alignSelf: "center"
    },
    btnText: {
        fontSize: 20,
        padding: 7,
        color: '#fff',
        textAlign: "center",
        fontWeight: 'bold',
        alignSelf: "center",
        backgroundColor: colors.venus400,
    },

});
export default withNavigation(CadastrarBike)