import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ConfirmDetailScreen from '../screens/events-detail/ConfirmDetail';
import EventsDetailScreen from '../screens/events-detail/EventsDetail';
import EventsScreen from '../screens/events-detail/Events';
import ReserveScreen from '../screens/events-detail/Reserve';
import EventImageViewScreen from '../screens/image-gallery/ViewPicture';

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
            }}>
            <Stack.Screen name="EventsScreen" component={EventsScreen} />
            <Stack.Screen
                name="EventsDetailScreen"
                component={EventsDetailScreen}
            />
            <Stack.Screen
                name="ConfirmDetailScreen"
                component={ConfirmDetailScreen}
            />
            <Stack.Screen name="ReserveScreen" component={ReserveScreen} />
            <Stack.Screen
                name="EventImageViewScreen"
                component={EventImageViewScreen}
            />
        </Stack.Navigator>
    );
};
