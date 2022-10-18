import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import EventInfoGalleryScreen from '../screens/profile-gallery/EventInfoGallery';
import GalleryScreen from '../screens/profile-gallery/Gallery';
import ViewPictureScreen from '../screens/profile-gallery/ViewPicture';

const Stack = createStackNavigator();

export default GalleryNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardOverlayEnabled: true,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
            <Stack.Screen
                name="EventInfoGalleryScreen"
                component={EventInfoGalleryScreen}
            />
            <Stack.Screen
                name="ViewPictureScreen"
                component={ViewPictureScreen}
            />
        </Stack.Navigator>
    );
};
