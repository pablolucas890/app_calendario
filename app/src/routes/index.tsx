import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './stack.routes'

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Index: String;
            Login: String;
            BemVindo: String;
            Calendario: String;
            Evento:String;
        }
    }
}

const Routes = () => (
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
);

export default Routes;

