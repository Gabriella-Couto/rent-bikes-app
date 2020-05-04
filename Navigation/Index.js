import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import TelaInicio from '../Componentes/TelaInicio';
import VerBicicleta  from '../Componentes/VerBicicleta';
import Pagar from '../Componentes/Pagamentos/Pagar';
import { Platform } from 'react-native';


const Index = createStackNavigator({
    TelaInicio: TelaInicio,
    VerBicicleta: VerBicicleta,
    Pagamento: Pagar
},{
    defaultNavigationOptions: {
        headerTintColor: Platform.OS === 'android' ? '#9d1cba' : '#9d1cba'
    }
})

export default createAppContainer(Index);