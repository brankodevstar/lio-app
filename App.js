import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native'

import SplashScreen from './src/screens/authentication/Splash';
import LoginScreen from './src/screens/authentication/Login';
import OTPScreen from './src/screens/authentication/OTP';

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
          name="OTPScreen"
          component={OTPScreen}
        />
        <Stack.Screen
          name="LoginhScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}