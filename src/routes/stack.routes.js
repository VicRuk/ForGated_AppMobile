import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/FirstPage';
import Entrar from '../screens/Entrar';
import Incendio from '../screens/Incendio';
import Proximidade from '../screens/Proximidade';
import Gas from '../screens/Gas';
import Eletricidade from '../screens/Eletricidade';
import AuthRoutes from './tab.routes';
//import { Splash } from '../lotties/Splash';



const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Entrar" component={Entrar} /> 
            <Stack.Screen name="Home" component={AuthRoutes} />    
            <Stack.Screen name="Incendio" component={Incendio} /> 
            <Stack.Screen name="Proximidade" component={Proximidade} />   
            <Stack.Screen name="Gas" component={Gas} />   
            <Stack.Screen name="Eletricidade" component={Eletricidade} />   
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;