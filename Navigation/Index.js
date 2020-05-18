import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import TelaInicio from '../Componentes/TelaInicio';
import VerBicicleta from '../Componentes/VerBicicleta';
import Pagar from '../Componentes/Pagamentos/Pagar';
import { Platform } from 'react-native';
import Registro from '../Componentes/Registro';
import RegistroCliente from '../Componentes/RegistroCliente';
import RegistroAnunciante from '../Componentes/RegistroAnunciante';
import AlterarPagamento from '../Componentes/Pagamentos/AlterarPagamento';
import CadastrarBike from '../Componentes/CadastarBike';
import ListMap from '../Componentes/ListMap';

const Index = createStackNavigator({
    TelaInicio: TelaInicio,
    VerBicicleta: VerBicicleta,
    Pagamento: Pagar,
    SignUp: Registro,
    AlterarPagamento: AlterarPagamento,
    RegistroAnunciante: RegistroAnunciante,
    RegistroCliente: RegistroCliente,
    CadastrarBike: CadastrarBike,
    ListMap: ListMap,
    AlterarPagamento: AlterarPagamento
}, {
        defaultNavigationOptions: {
            headerTintColor: Platform.OS === 'android' ? '#842a6c' : '#842a6c'
        }
    })

export default createAppContainer(Index);