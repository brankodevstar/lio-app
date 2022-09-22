import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
import DrawerMenu from './component/DrawerMenu';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderMenu = (props) => {
    return (
        <View style={{ width: '100%', innerHeight: 50 }}>
            <TouchableOpacity>menu</TouchableOpacity>
        </View>
    )
}

export default function DrawerNavigator(props) {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: { width: '100%', backgroundColor: HiFiColors.Accent },
                drawerActiveTintColor: HiFiColors.White,
                drawerInactiveTintColor: HiFiColors.Label,
                headerStyle: { backgroundColor: HiFiColors.Accent, },
                headerShadowVisible: false,
                headerTintColor: HiFiColors.White,
                // header: (props) => (
                //     <View
                //         style={{
                //             backgroundColor: HiFiColors.Accent,
                //             left: 0,
                //             opacity: 1

                //         }}>
                //         <TouchableOpacity
                //             style={{ padding: 10 }}
                //             onPress={() => {
                //                 props.navigation.openDrawer()
                //             }}>
                //             <FeatherIcon name="menu" size={25} color={HiFiColors.White} />
                //         </TouchableOpacity>
                //     </View>
                // )
            }}

            drawerContent={props => < DrawerMenu {...props} />}
            initialRouteName="Home" >
            <Drawer.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    drawerLabel: 'Home',
                    headerTitle: false
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
        </Drawer.Navigator >
    )
}

const styles = StyleSheet.create({
})