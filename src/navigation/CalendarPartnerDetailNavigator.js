import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import CalendarScreen from '../screens/calendar-partner/Calendar';
import PartnerDetailScreen from '../screens/calendar-partner/PartnerDetail';

const Stack = createStackNavigator();


export default CalendarPartnerDetailNavigator = () => {
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
                name="CalendarScreen"
                component={CalendarScreen}
            />
            <Stack.Screen
                name="PartnerDetailScreen"
                component={PartnerDetailScreen}
            />

        </Stack.Navigator>
    )
}