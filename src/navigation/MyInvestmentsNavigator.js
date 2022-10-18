import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyInvestmentScreen from '../screens/my-investment/MyInvestment';
import MyInvestmentDetailScreen from '../screens/my-investment/MyInvestmentDetail';

const Stack = createStackNavigator();

export default MyInvestmentsNavigator = () => {
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
                name="MyInvestmentScreen"
                component={MyInvestmentScreen}
            />
            <Stack.Screen
                name="MyInvestmentDetailScreen"
                component={MyInvestmentDetailScreen}
            />
        </Stack.Navigator>
    );
};
