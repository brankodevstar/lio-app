import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/authentication/Splash';
import LoginScreen from './src/screens/authentication/Login';
import OTPScreen from './src/screens/authentication/OTP';

import InvestmentDetailScreen from './src/screens/investments/InvestmentDetail';

import MemberInfoScreen from './src/screens/profile/MemberInfo';
import TransactionHistoryScreen from './src/screens/profile/TransactionHistory';
import NavigationScreen from './src/screens/profile/Navigation';

import MainNavigator from './src/navigation/MainNavigator';

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
          name="NavigationScreen"
          component={NavigationScreen}
        />
        <Stack.Screen
          name="TransactionHistoryScreen"
          component={TransactionHistoryScreen}
        />
        <Stack.Screen
          name="MemberInfoScreen"
          component={MemberInfoScreen}
        />
        <Stack.Screen
          name="InvestmentDetail"
          component={InvestmentDetailScreen}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
        />
        <Stack.Screen
          name="Home"
          component={MainNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}