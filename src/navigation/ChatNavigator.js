import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ImageGalleryInfoScreen from '../screens/image-gallery/ImageGalleryInfo';
import GalleryScreen from '../screens/image-gallery/Gallery';
import ViewPictureScreen from '../screens/image-gallery/ViewPicture';
import ChatScreen from '../screens/members/Chat';
import IndividualChat from '../screens/members/IndividualChat';
import GroupChatScreen from '../screens/members/GroupChat';

const Stack = createStackNavigator();

export default ChatNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardOverlayEnabled: true,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen
                name="IndividualChat"
                component={IndividualChat}
            />
            <Stack.Screen name="GroupChatScreen" component={GroupChatScreen} />
        </Stack.Navigator>
    );
};
