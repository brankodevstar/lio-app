import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import TabNavigator from './TabNavigator';
import BenefitScreen from '../screens/benefits-map/MemberBenefits'
import MapBenefitLogoScreen from '../screens/benefits-map/VenueMap'
import CalendarScreen from '../screens/calendar-partner/Calendar'
import GalleryScreen from '../screens/profile-gallery/Gallery'
import OverviewScreen from '../screens/profile-gallery/Overview'
import ChatScreen from '../screens/members/Chat'
import MyBookingScreen from '../screens/profile/TransactionHistory'



export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    drawerLabel: 'Home'
                }}
            />
            <Drawer.Screen
                name="BenefitsList"
                component={BenefitScreen}
                options={{
                    drawerLabel: 'Benefits List'
                }} />
            <Drawer.Screen
                name="MapBenefitLogo"
                component={MapBenefitLogoScreen}
                options={{
                    drawerLabel: 'Map Benefit Logo'
                }}
            />
            <Drawer.Screen
                name="CalendarScreen"
                component={CalendarScreen}
                options={{
                    drawerLabel: 'Calendar'
                }}
            />
            <Drawer.Screen
                name="MyBookingScreen"
                component={MyBookingScreen}
                options={{
                    drawerLabel: 'My Bookings'
                }}
            />
            <Drawer.Screen
                name="Gallery"
                component={GalleryScreen}
                options={{
                    drawerLabel: 'Gallery List'
                }}
            />
            <Drawer.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{
                    drawerLabel: 'Chat'
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={OverviewScreen}
                options={{
                    drawerLabel: 'My Profile'
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
})