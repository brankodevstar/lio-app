import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/authentication/Splash';
import LoginScreen from './src/screens/authentication/Login';
import OTPScreen from './src/screens/authentication/OTP';


import ChatScreen from './src/screens/members/Chat';
import OverViewScreen from './src/screens/profile-gallery/Overview';
import GalleryScreen from './src/screens/profile-gallery/Gallery';
import EventInfoGalleryScreen from './src/screens/profile-gallery/EventInfoGallery';
import ViewPictureScreeen from './src/screens/profile-gallery/ViewPicture';
import AccountInfoScreen from './src/screens/profile-gallery/AccountInfo';

import TabNavigator from './src/navigation/MainTabNavigator';
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
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          name="AccountInfoScreen"
          component={AccountInfoScreen}
        />
        <Stack.Screen
          name="ViewPictureScreeen"
          component={ViewPictureScreeen}
        />
        <Stack.Screen
          name="EventInfoGalleryScreen"
          component={EventInfoGalleryScreen}
        />
        <Stack.Screen
          name="GalleryScreen"
          component={GalleryScreen}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
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