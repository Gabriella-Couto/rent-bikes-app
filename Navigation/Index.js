import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import TelaInicio from '../Componentes/TelaInicio';
import VerBicicleta from '../Componentes/VerBicicleta';
import Pagar from '../Componentes/Pagamentos/Pagar';
import { Platform } from 'react-native';
import Registro from '../Componentes/Registro';
import AlterarPagamento from '../Componentes/Pagamentos/AlterarPagamento';


const Index = createStackNavigator({
    TelaInicio: TelaInicio,
    VerBicicleta: VerBicicleta,
    Pagamento: Pagar,
    SignUp: Registro,
    AlterarPagamento: AlterarPagamento
}, {
        defaultNavigationOptions: {
            headerTintColor: Platform.OS === 'android' ? '#842a6c' : '#842a6c'
        }
    })

export default createAppContainer(Index);