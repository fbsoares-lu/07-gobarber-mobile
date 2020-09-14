import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            headerShown: false, // não mostrar a visualização padrão
            cardStyle: {backgroundColor:'#312e38'} // Qual estilo que vou aplicar em cada uma das rotas
        }}
    >
        <App.Screen name="Dashboard" component={Dashboard}/>
    </App.Navigator>
);

export default AppRoutes;
