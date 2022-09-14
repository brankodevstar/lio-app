import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native'

import SplashScreen from './src/screens/authentication/Splash';
import LoginScreen from './src/screens/authentication/Login';
import OTPScreen from './src/screens/authentication/OTP';

import HomeScreen from './src/screens/events-detail/Home';
import ReserveScreen from './src/screens/events-detail/Reserve';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: true,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      >
        <Stack.Screen
          name="ReserveScreen"
          component={ReserveScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
        />
        <Stack.Screen
          name="LoginhScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}