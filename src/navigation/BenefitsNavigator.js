import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import MemberBenefitsScreen from '../screens/benefits-map/MemberBenefits';
import VenueMapScreen from '../screens/benefits-map/VenueMap';

const Stack = createStackNavigator();


export default BenefitsNavigator = () => {
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
                name="MemberBenefitsScreen"
                component={MemberBenefitsScreen}
            />
            <Stack.Screen
                name="VenueMapScreen"
                component={VenueMapScreen}
            />

        </Stack.Navigator>
    )
}