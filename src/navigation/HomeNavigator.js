import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MemberProfileInfoScreen from '../screens/profile/MemberInfo';
import NavigationScreen from '../screens/profile/Navigation';
import TransactionHistoryScreen from '../screens/profile/TransactionHistory';
import InvestmentDetailScreen from '../screens/investments/InvestmentDetail';
import EventsDetailScreen from '../screens/events-detail/EventsDetail';

const Stack = createStackNavigator();

export default HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardOverlayEnabled: true,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen
                name="MemberProfileInfoScreen"
                component={MemberProfileInfoScreen}
            />
            <Stack.Screen
                name="NavigationScreen"
                component={NavigationScreen}
            />            
            <Stack.Screen
                name="InvestmentDetailScreen"
                component={InvestmentDetailScreen}
            />
            <Stack.Screen
                name="EventsDetailScreen"
                component={EventsDetailScreen}
            />
            <Stack.Screen
                name="TransactionHistoryScreen"
                component={TransactionHistoryScreen}
            />
        </Stack.Navigator>
    );
};
