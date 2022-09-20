import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from '../screens/members/Chat';
import GroupChatScreen from '../screens/members/GroupChat';
import IndividualChatScreen from '../screens/members/IndividualChat';
import MemberInfoScreen from '../screens/members/MemberInfo';
import MemberListScreen from '../screens/members/MemberList';

const Stack = createStackNavigator();


export default MemberNavigator = () => {
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
                name="MemberListScreen"
                component={MemberListScreen}
            />
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
            />
            <Stack.Screen
                name="GroupChatScreen"
                component={GroupChatScreen}
            />
            <Stack.Screen
                name="IndividualChatScreen"
                component={IndividualChatScreen}
            />
            <Stack.Screen
                name="MemberInfoScreen"
                component={MemberInfoScreen}
            />

        </Stack.Navigator>
    )
}