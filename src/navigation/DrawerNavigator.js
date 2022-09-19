import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import MemberListScreen from '../screens/members/MemberList';
import MemberInfoScreen from '../screens/members/MemberInfo';
import HomeScreen from '../screens/events-detail/Home';
import ForumScreen from '../screens/forum/Forum';

import ChatScreen from '../screens/members/Chat';

import globalStyles from '../styles/style';
import HiFiColors from '../styles/colors';
import TabNavigator from './TabNavigator';



export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabNavigator} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
})