import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/authentication/Splash';
import LoginScreen from './src/screens/authentication/Login';
import OTPScreen from './src/screens/authentication/OTP';

<<<<<<< HEAD
=======
import ChatScreen from './src/screens/members/Chat';
import OverViewScreen from './src/screens/profile-gallery/Overview';
import GalleryScreen from './src/screens/profile-gallery/Gallery';
import EventInfoGalleryScreen from './src/screens/profile-gallery/EventInfoGallery';
import ViewPictureScreeen from './src/screens/profile-gallery/ViewPicture';
import AccountInfoScreen from './src/screens/profile-gallery/AccountInfo';

import TabNavigator from './src/navigation/MainTabNavigator';
>>>>>>> 5dc9025dbed1006ef428c3c31eb2fa3a68db3076
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
<<<<<<< HEAD
          name="SplashScreen"
          component={SplashScreen}
=======
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
>>>>>>> 5dc9025dbed1006ef428c3c31eb2fa3a68db3076
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