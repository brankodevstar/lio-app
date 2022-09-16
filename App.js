import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/authentication/Splash';
import LoginScreen from './src/screens/authentication/Login';
import OTPScreen from './src/screens/authentication/OTP';

import HomeScreen from './src/screens/events-detail/Home';
import ReserveScreen from './src/screens/events-detail/Reserve';
import ConfirmDetailScreen from './src/screens/events-detail/ConfirmDetail';

import CalendarScreen from './src/screens/calendar-partner/Calendar';
import PartnerDetailScreen from './src/screens/calendar-partner/PartnerDetail';

import MemberBenefitsScreen from './src/screens/benefits_map/memberBenefits';

import ForumScreen from './src/screens/forum/Forum';
import AddPostScreen from './src/screens/forum/AddPost';

import MemberListScreen from './src/screens/members/MemberList';
import MemberInfoScreen from './src/screens/members/MemberInfo';
import ChatScreen from './src/screens/members/Chat';

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

        <Stack.Screen
          name="TabHome"
          component={TabNavigator}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
        />
        <Stack.Screen
          name="MemberInfo"
          component={MemberInfoScreen}
        />
        <Stack.Screen
          name="MemberList"
          component={MemberListScreen}
        />
        <Stack.Screen
          name="AddPost"
          component={AddPostScreen}
        />
        <Stack.Screen
          name="MemberBenefitsScreen"
          component={MemberBenefitsScreen}
        />


        <Stack.Screen
          name="Forum"
          component={ForumScreen}
        />
        <Stack.Screen
          name="PartnerDetail"
          component={PartnerDetailScreen}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
        />
        <Stack.Screen
          name="ConfirmDetail"
          component={ConfirmDetailScreen}
        />
        <Stack.Screen
          name="ReserveScreen"
          component={ReserveScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}