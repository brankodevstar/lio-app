import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import HomeStackNavigation from './HomeNavigator';
import MemberListNavigator from './MemberListNavigator';
import MyInvestmentsNavigator from './MyInvestmentsNavigator';
import InvestmentsNavigator from './InvestmentsNavigator';
import ForumNavigator from './ForumNavigator';
import BenefitsNavigator from './BenefitsNavigator';
import CalendarPartnerDetailNavigator from './CalendarPartnerDetailNavigator';

import globalStyles from '../styles/style';
import HiFiColors from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarBackground,
                tabBarActiveTintColor: HiFiColors.White,
                tabBarInactiveTintColor: HiFiColors.Label,
            }}
            initialRouteName="HomeScreen">
            <Tab.Screen
                name="HomeScreen"
                component={HomeStackNavigation}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <SimpleLineIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarLabel: ({focused, color}) => (
                        <Text
                            style={[
                                globalStyles.littleTinyLabel,
                                {color: color, marginBottom: 5},
                            ]}>
                            Home
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="BenefitsList"
                component={BenefitsNavigator}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <FontAwesomeIcon
                            name="diamond"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarLabel: ({focused, color}) => (
                        <Text
                            style={[
                                globalStyles.littleTinyLabel,
                                {color: color, marginBottom: 5},
                            ]}>
                            Benefits
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="MembersScreen"
                component={MemberListNavigator}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <FeatherIcon name="user" color={color} size={size} />
                    ),
                    tabBarLabel: ({focused, color}) => (
                        <Text
                            style={[
                                globalStyles.littleTinyLabel,
                                {color: color, marginBottom: 5},
                            ]}>
                            Members
                        </Text>
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Forum"
                component={ForumNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesignIcon name="earth" color={color} size={size} />
                    ),
                    tabBarLabel: ({ focused, color }) => (<Text style={[globalStyles.littleTinyLabel, { color: color, marginBottom: 5 }]}>Forum</Text>),
                }}
            /> */}
            <Tab.Screen
                name="CalendarPartnerDetail"
                component={CalendarPartnerDetailNavigator}
                options={{
                    tabBarIcon: ({focused, color, size}) => (
                        <FeatherIcon
                            name="calendar"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarLabel: ({focused, color}) => (
                        <Text
                            style={[
                                globalStyles.littleTinyLabel,
                                {color: color, marginBottom: 5},
                            ]}>
                            Calendar
                        </Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarBackground: {
        backgroundColor: HiFiColors.AccentFade,
        borderTopWidth: 0,
        paddingVertical: 10,
    },
});
