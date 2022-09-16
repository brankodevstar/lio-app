import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/authentication/Splash';
import LoginScreen from '../screens/authentication/Login';
import OTPScreen from '../screens/authentication/OTP';

import HomeScreen from '../screens/events-detail/Home';
import ReserveScreen from '../screens/events-detail/Reserve';
import ConfirmDetailScreen from '../screens/events-detail/ConfirmDetail';

import CalendarScreen from '../screens/calendar-partner/Calendar';
import PartnerDetailScreen from '../screens/calendar-partner/PartnerDetail';

import MemberBenefitsScreen from '../screens/benefits_map/memberBenefits';

import ForumScreen from '../screens/forum/Forum';
import AddPostScreen from '../screens/forum/AddPost';

import MemberListScreen from '../screens/members/MemberList';
import MemberInfoScreen from '../screens/members/MemberInfo';
import ChatScreen from '../screens/members/Chat';

import TabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

export default MainNavigator = () => {
    return (
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
                name="OTPScreen"
                component={OTPScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
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
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
            />
        </Stack.Navigator>
    )
}