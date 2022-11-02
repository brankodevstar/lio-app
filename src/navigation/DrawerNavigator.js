import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import TabNavigator from './TabNavigator';
import BenefitScreen from '../screens/benefits-map/MemberBenefits';
import MapBenefitLogoScreen from '../screens/benefits-map/VenueMap';
import CalendarScreen from '../screens/calendar-partner/Calendar';
import GalleryScreen from '../screens/profile-gallery/Gallery';
import OverviewScreen from '../screens/profile-gallery/Overview';
import ChatScreen from '../screens/members/Chat';
import MyBookingScreen from '../screens/profile/TransactionHistory';

import BenefitsNavigator from './BenefitsNavigator';
import EventDetailsNavigator from './EventDetailsNavigator';
import ProfileNavigator from './ProfileNavigator';
import GalleryNavigator from './GalleryNavigator';
import EventNavigator from './EventNavigator';
import CalendarPartnerDetailNavigator from './CalendarPartnerDetailNavigator';
import GroupChatScreen from '../screens/members/GroupChat';
import GroupChatRoomsScreen from '../screens/members/GroupChatRooms';
import MyInvestmentsNavigator from './MyInvestmentsNavigator';
import InvestmentsNavigator from './InvestmentsNavigator';
import ChatNavigator from './ChatNavigator';

import HiFiColors from '../styles/colors';
import DrawerMenu from './component/DrawerMenu';
import IndividualChatScreen from '../screens/members/IndividualChat';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderMenu = props => {
    return (
        <View style={{width: '100%', innerHeight: 50}}>
            <TouchableOpacity>menu</TouchableOpacity>
        </View>
    );
};

export default function DrawerNavigator(props) {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: '100%',
                    backgroundColor: HiFiColors.Accent,
                },
                drawerActiveTintColor: HiFiColors.White,
                drawerInactiveTintColor: HiFiColors.Label,
                headerStyle: {backgroundColor: HiFiColors.Accent},
                headerShadowVisible: false,
                headerTintColor: HiFiColors.White,
            }}
            drawerContent={props => <DrawerMenu {...props} />}
            initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    drawerLabel: 'Home',
                    headerTitle: false,
                }}
            />
            {/* <Drawer.Screen
                name="BenefitsList"
                component={BenefitsNavigator}
                options={{
                    drawerLabel: 'Benefits List',
                }}
            /> */}

            <Drawer.Screen
                name="OpenInvestmentsScreen"
                component={InvestmentsNavigator}
                options={{
                    drawerLabel: 'Open Investments',
                }}
            />
            <Drawer.Screen
                name="MyInvestmentsScreen"
                component={MyInvestmentsNavigator}
                options={{
                    drawerLabel: 'My Investments',
                }}
            />
            <Drawer.Screen
                name="EventDetails"
                component={EventDetailsNavigator}
                options={{
                    drawerLabel: 'Events',
                }}
            />
            <Drawer.Screen
                name="Events"
                component={EventNavigator}
                options={{
                    drawerLabel: 'Events',
                }}
            />
            <Drawer.Screen
                name="Gallery"
                component={GalleryNavigator}
                options={{
                    drawerLabel: 'Gallery',
                }}
            />
            <Drawer.Screen
                name="Chat"
                component={ChatNavigator}
                options={{
                    drawerLabel: 'Chat',
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    drawerLabel: 'My Profile',
                }}
            />
            {/* <Drawer.Screen name="GroupChatScreen" component={GroupChatScreen} /> */}
            {/* <Drawer.Screen
                name="GroupChatRooms"
                component={GroupChatRoomsScreen}
            />
            <Drawer.Screen
                name="IndividualChatScreen"
                component={IndividualChatScreen}
            /> */}
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({});
