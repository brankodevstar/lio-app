import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OverviewScreen from '../screens/profile-gallery/Overview';
import AccountInfoScreen from '../screens/profile-gallery/AccountInfo';

const Stack = createStackNavigator();

export default ProfileNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardOverlayEnabled: true,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
            <Stack.Screen
                name="AccountInfoScreen"
                component={AccountInfoScreen}
            />
        </Stack.Navigator>
    );
};
