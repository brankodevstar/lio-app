import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableLatestRenderer} from 'react-native-maps';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import SplashScreen from './src/screens/authentication/Splash';
import LoginScreen from './src/screens/authentication/Login';
import OTPScreen from './src/screens/authentication/OTP';

import MainNavigator from './src/navigation/MainNavigator';
import {SafeAreaView} from 'react-native';

const Stack = createStackNavigator();

export default App = () => {
    enableLatestRenderer();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardOverlayEnabled: true,
                        cardStyle: {
                            backgroundColor: 'white',
                        },
                    }}>
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                    />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="OTPScreen" component={OTPScreen} />
                    <Stack.Screen name="Home" component={MainNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};
