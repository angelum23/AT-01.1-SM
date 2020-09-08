import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import de páginas
import { Home } from '../pages/Home';
import { CameraApp } from '../pages/Video';
import { Profile } from '../pages/Profile'

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component ={Home} />
                <Stack.Screen name="Video" component ={CameraApp} />
                <Stack.Screen name="Profile" component ={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
      );
};