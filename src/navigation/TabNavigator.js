import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import MemberListScreen from '../screens/members/MemberList';
import HomeScreen from '../screens/events-detail/Home';
import ForumScreen from '../screens/forum/Forum';
import InvestmentsScreen from '../screens/investments/Investments.js'
import MyInvestmentScreen from '../screens/my-investment/MyInvestment'

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
            initialRouteName="HomeScreen"
        >
            <Tab.Screen
                name="BenefitsScreen"
                component={InvestmentsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesomeIcon name="diamond" color={color} size={size} />
                    ),
                    tabBarLabel: ({ focused, color }) => (<Text style={[globalStyles.littleTinyLabel, { color: color, marginBottom: 5 }]}>Benefits</Text>),
                }}
            />
            <Tab.Screen
                name="MembersScreen"
                component={MemberListScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FeatherIcon name="user" color={color} size={size} />
                    ),
                    tabBarLabel: ({ focused, color }) => (<Text style={[globalStyles.littleTinyLabel, { color: color, marginBottom: 5 }]}>Members</Text>),
                }}
            />
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <SimpleLineIcons name="home" color={color} size={size} />
                    ),
                    tabBarLabel: ({ focused, color }) => (<Text style={[globalStyles.littleTinyLabel, { color: color, marginBottom: 5 }]}>Home</Text>),
                }}
            />
            <Tab.Screen
                name="ForumScreen"
                component={ForumScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesignIcon name="earth" color={color} size={size} />
                    ),
                    tabBarLabel: ({ focused, color }) => (<Text style={[globalStyles.littleTinyLabel, { color: color, marginBottom: 5 }]}>Forum</Text>),
                }}
            />
            <Tab.Screen
                name="InvestmentsScreen"
                component={MyInvestmentScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ borderWidth: 1, borderColor: color, padding: 3, alignItems: 'center', width: 30, height: 30, borderRadius: 50 }}>
                            <FontAwesomeIcon name="inr" color={color} size={size} />
                        </View>
                    ),
                    tabBarLabel: ({ focused, color }) => (<Text style={[globalStyles.littleTinyLabel, { color: color, marginBottom: 5 }]}>Investments</Text>),
                }}
            />
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    tabBarBackground: {
        backgroundColor: HiFiColors.AccentFade,
        height: 60,
        borderTopWidth: 0,
        paddingVertical: 10
    },
})