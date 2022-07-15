import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login} from "../pages/login";
import { BemVindo} from "../pages/bemVindo";
import { Index} from "../pages/Index";
import { Calendario } from "../pages/calendario";

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () =>(

    <Stack.Navigator >
    <Stack.Screen
        name="Index"
        component={Index}
        options={{headerShown: false }}

    />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false }}

        />

        <Stack.Screen
            name="BemVindo"
            component={BemVindo}
            options={{headerShown: false }}
        />
        <Stack.Screen
            name="Calendario"
            component={Calendario}
            options={{headerShown: false }}
        />
    </Stack.Navigator>
)
export default AppRoutes;