import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ForumScreen from '../screens/forum/Forum';
import AddPostScreen from '../screens/forum/AddPost';

const Stack = createStackNavigator();

export default ForumNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardOverlayEnabled: true,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen name="ForumScreen" component={ForumScreen} />
            <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
        </Stack.Navigator>
    );
};
