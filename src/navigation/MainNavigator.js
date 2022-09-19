import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/authentication/Splash';
import LoginScreen from '../screens/authentication/Login';
import OTPScreen from '../screens/authentication/OTP';

import MemberBenefitsScreen from '../screens/benefits-map/MemberBenefits';
import VenueMapScreen from '../screens/benefits-map/VenueMap';

import CalendarScreen from '../screens/calendar-partner/Calendar';
import PartnerDetailScreen from '../screens/calendar-partner/PartnerDetail';

import ConfirmDetailScreen from '../screens/events-detail/ConfirmDetail';
import HomeScreen from '../screens/events-detail/Home';
import ReserveScreen from '../screens/events-detail/Reserve';

import ForumScreen from '../screens/forum/Forum';
import AddPostScreen from '../screens/forum/AddPost';

import ConfirmationScreen from '../screens/investments/Confirmation';
import InvestScreen from '../screens/investments/Invest';
import InvestmentDetailScreen from '../screens/investments/InvestmentDetail';
import InvestmentsScreen from '../screens/investments/Investments';

import ChatScreen from '../screens/members/Chat';
import GroupChatScreen from '../screens/members/GroupChat';
import IndividualChatScreen from '../screens/members/IndividualChat';
import MemberInfoScreen from '../screens/members/MemberInfo';
import MemberListScreen from '../screens/members/MemberList';

import MyInvestmentScreen from '../screens/my-investment/MyInvestment';
import MyInvestmentDetailScreen from '../screens/my-investment/MyInvestmentDetail';

import MemberProfileInfoScreen from '../screens/profile/MemberInfo';
import NavigationScreen from '../screens/profile/Navigation';
import TransactionHistoryScreen from '../screens/profile/TransactionHistory';

import AccountInfoScreen from '../screens/profile-gallery/AccountInfo';
import EventInfoGalleryScreen from '../screens/profile-gallery/EventInfoGallery';
import GalleryScreen from '../screens/profile-gallery/Gallery';
import OverviewScreen from '../screens/profile-gallery/Overview';
import ViewPictureScreen from '../screens/profile-gallery/ViewPicture';


import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default MainNavigator = () => {
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
                name="DrawerHome"
                component={DrawerNavigator}
            />

            <Stack.Screen
                name="TabHome"
                component={TabNavigator}
            />
            <Stack.Screen
                name="MemberBenefitsScreen"
                component={MemberBenefitsScreen}
            />
            <Stack.Screen
                name="VenueMapScreen"
                component={VenueMapScreen}
            />

            <Stack.Screen
                name="CalendarScreen"
                component={CalendarScreen}
            />
            <Stack.Screen
                name="PartnerDetailScreen"
                component={PartnerDetailScreen}
            />

            <Stack.Screen
                name="ConfirmDetailScreen"
                component={ConfirmDetailScreen}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="ReserveScreen"
                component={ReserveScreen}
            />

            <Stack.Screen
                name="ForumScreen"
                component={ForumScreen}
            />
            <Stack.Screen
                name="AddPostScreen"
                component={AddPostScreen}
            />

            <Stack.Screen
                name="ConfirmationScreen"
                component={ConfirmationScreen}
            />
            <Stack.Screen
                name="InvestScreen"
                component={InvestScreen}
            />
            <Stack.Screen
                name="InvestmentDetailScreen"
                component={InvestmentDetailScreen}
            />
            <Stack.Screen
                name="InvestmentsScreen"
                component={InvestmentsScreen}
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
            <Stack.Screen
                name="MemberListScreen"
                component={MemberListScreen}
            />

            <Stack.Screen
                name="MyInvestmentScreen"
                component={MyInvestmentScreen}
            />
            <Stack.Screen
                name="MyInvestmentDetailScreen"
                component={MyInvestmentDetailScreen}
            />

            <Stack.Screen
                name="MemberProfileInfoScreen"
                component={MemberProfileInfoScreen}
            />
            <Stack.Screen
                name="NavigationScreen"
                component={NavigationScreen}
            />
            <Stack.Screen
                name="TransactionHistoryScreen"
                component={TransactionHistoryScreen}
            />

            <Stack.Screen
                name="AccountInfoScreen"
                component={AccountInfoScreen}
            />
            <Stack.Screen
                name="EventInfoGalleryScreen"
                component={EventInfoGalleryScreen}
            />
            <Stack.Screen
                name="GalleryScreen"
                component={GalleryScreen}
            />
            <Stack.Screen
                name="OverviewScreen"
                component={OverviewScreen}
            />
            <Stack.Screen
                name="ViewPictureScreen"
                component={ViewPictureScreen}
            />
        </Stack.Navigator>
    )
}