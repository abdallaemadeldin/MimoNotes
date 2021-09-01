import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from 'src/screens/Splash/Splash';
import Products from '../screens/Products/Products';
import Details from 'src/screens/Details/Details';

const Stack = createNativeStackNavigator();

export default WindowStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                <Stack.Screen name="Products" component={Products} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                <Stack.Screen name="Details" component={Details} options={{ headerShown: false, animation: "slide_from_right" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}