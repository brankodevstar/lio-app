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

import BenefitsNavigator from './BenefitsNavigator';
import EventDetailsNavigator from './EventDetailsNavigator';
import ProfileNavigator from './ProfileNavigator';
import GalleryNavigator from './GalleryNavigator';
import CalendarPartnerDetailNavigator from './CalendarPartnerDetailNavigator';

import HiFiColors from '../styles/colors';


export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: { width: 300 },
                overlayColor: HiFiColors.AccentFade
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
                component={BenefitsNavigator}
                options={{
                    drawerLabel: 'Benefits List'
                }}
            />
            <Drawer.Screen
                name="EventDetails"
                component={EventDetailsNavigator}
                options={{
                    drawerLabel: 'Event Details'
                }}
            />
            <Drawer.Screen
                name="CalendarPartnerDetail"
                component={CalendarPartnerDetailNavigator}
                options={{
                    drawerLabel: 'Calendar & Partner Detail'
                }}
            />
            <Drawer.Screen
                name="Gallery"
                component={GalleryNavigator}
                options={{
                    drawerLabel: 'Gallery'
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    drawerLabel: 'My Profile'
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
})