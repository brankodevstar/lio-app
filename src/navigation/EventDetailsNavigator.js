import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ConfirmDetailScreen from '../screens/events-detail/ConfirmDetail';
import EventsDetailScreen from '../screens/events-detail/EventsDetail';
import ReserveScreen from '../screens/events-detail/Reserve';

const Stack = createStackNavigator();


export default EventDetailsNavigator = () => {
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
                name="EventsDetailScreen"
                component={EventsDetailScreen}
            />
            <Stack.Screen
                name="ConfirmDetailScreen"
                component={ConfirmDetailScreen}
            />
            <Stack.Screen
                name="ReserveScreen"
                component={ReserveScreen}
            />

        </Stack.Navigator>
    )
}