import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import {useSelector} from 'react-redux';
import {ADMIN_API_URL} from '../../../config';

import ChatScreen from '../../screens/members/Chat';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default DrawerMenu = props => {
    const currentUser = useSelector(state => state.CurrentUser);

    const logout = async () => {
        await AsyncStorage.removeItem('USER_DATA');
        props.navigation.navigate('SplashScreen');
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            {/* <View
                style={[
                    globalStyles.headerContainer,
                    {justifyContent: 'flex-start', borderBottomWidth: 0},
                ]}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.closeDrawer();
                    }}>
                    <FeatherIcon
                        name="x"
                        size={20}
                        color={HiFiColors.White}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
            </View> */}
            <View style={styles.imageSection}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/logo.png')}
                />
                <View
                    style={{
                        flexDirection: 'column',
                        marginLeft: 20,
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {justifyContent: 'center'},
                        ]}>
                        Leaders for
                    </Text>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {justifyContent: 'center'},
                        ]}>
                        India
                    </Text>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {justifyContent: 'center'},
                        ]}>
                        Organization
                    </Text>
                </View>
            </View>
            <View style={styles.textSection}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.reset({
                            index: 0,
                            routes: [{name: 'Home'}],
                        });
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {paddingVertical: 10},
                        ]}>
                        Home
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => { props.navigation.navigate("BenefitsList") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>Benefits List</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('OpenInvestmentsScreen');
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {paddingVertical: 10},
                        ]}>
                        Investments
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('MyInvestmentsScreen');
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {paddingVertical: 10},
                        ]}>
                        My Investments
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('EventDetails');
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {paddingVertical: 10},
                        ]}>
                        Events
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => { props.navigation.navigate("CalendarPartnerDetail") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>Calendar & Partner Detail</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Events');
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {paddingVertical: 10},
                        ]}>
                        Events
                    </Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Gallery');
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {paddingVertical: 10},
                        ]}>
                        Gallery
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Chat');
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {paddingVertical: 10},
                        ]}>
                        Chat
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => { props.navigation.navigate("GroupChatRooms") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>Group Chats</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Profile');
                    }}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {paddingVertical: 10},
                        ]}>
                        My Profile
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footSection}>
                <Image
                    style={styles.footImage}
                    source={{
                        uri: `${ADMIN_API_URL}upload/${currentUser.user.avatarUrl}`,
                    }}
                />
                <View style={styles.footText}>
                    <Text style={globalStyles.boldLabel}>
                        {currentUser.user.firstName +
                            ' ' +
                            currentUser.user.lastName}
                    </Text>
                    <Text
                        style={[
                            globalStyles.boldLabel,
                            {color: HiFiColors.Blue},
                        ]}>
                        {currentUser.user.email}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => logout()}>
                        <View style={styles.logout}>
                            <Text style={globalStyles.boldSmallLabel}>
                                Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerIcon: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        padding: 5,
    },
    imageSection: {
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
    },
    image: {
        width: 75,
        height: 75,
    },
    textSection: {
        marginTop: 20,
        marginLeft: 30,
        flex: 1,
    },
    footSection: {
        paddingVertical: 10,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginHorizontal: 15,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    footImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    footText: {
        marginHorizontal: 10,
        flex: 1,
    },
    logout: {
        backgroundColor: HiFiColors.LightAccent,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
