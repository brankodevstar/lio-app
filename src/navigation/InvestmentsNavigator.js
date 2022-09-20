import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ConfirmationScreen from '../screens/investments/Confirmation';
import InvestScreen from '../screens/investments/Invest';
import InvestmentDetailScreen from '../screens/investments/InvestmentDetail';
import InvestmentsScreen from '../screens/investments/Investments';

const Stack = createStackNavigator();


export default InvestmentsNavigator = () => {
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
                name="InvestmentsScreen"
                component={InvestmentsScreen}
            />
            <Stack.Screen
                name="ConfirmationScreen"
                component={ConfirmationScreen}
            />
            <Stack.Screen
                name="InvestScreen"
                component={InvestScreen}
            />
            <Stack.Screen
                name="InvestmentDetailScreen"
                component={InvestmentDetailScreen}
            />
        </Stack.Navigator>
    )
}