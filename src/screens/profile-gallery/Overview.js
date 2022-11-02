import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {ADMIN_API_URL} from '../../../config';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Overview = ({navigation}) => {
    const currentUser = useSelector(state => state.CurrentUser);

    const logout = async () => {
        await AsyncStorage.removeItem('USER_DATA');
        navigation.navigate('SplashScreen');
    };

    return (
        <View style={globalStyles.container}>
            <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                <MenuButton navigation={navigation} />
            </View>
            <View style={styles.whiteCard}>
                <Image
                    source={{
                        uri: `${ADMIN_API_URL}upload/${currentUser.user.avatarUrl}`,
                    }}
                    style={styles.avatar}
                />
                <View style={styles.caption}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {
                                fontSize: 16,
                                fontWeight: '800',
                                color: HiFiColors.Black,
                            },
                        ]}>
                        {currentUser.user.firstName +
                            ' ' +
                            currentUser.user.lastName}
                    </Text>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {
                                fontSize: 16,
                                fontWeight: '800',
                                color: HiFiColors.Primary,
                            },
                        ]}>
                        {currentUser.user.email}
                    </Text>
                </View>
            </View>
            <View style={styles.accountPanel}>
                <Text style={styles.account}>Account</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AccountInfoScreen');
                    }}>
                    <View style={styles.accountCard}>
                        <View>
                            <Text style={styles.captionTitle}>
                                Account Information
                            </Text>
                            <Text style={styles.captionDescription}>
                                Change your account information
                            </Text>
                        </View>

                        <FeatherIcon
                            name="chevron-right"
                            size={25}
                            color={HiFiColors.White}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.accountCard}>
                    <View>
                        <Text style={styles.captionTitle}>Contact Admins</Text>
                        
                    </View>
                    <FeatherIcon
                        name="chevron-right"
                        size={25}
                        color={HiFiColors.White}
                    />
                </View>
                {/* <View style={styles.accountCard}>
                    <View>
                        <Text style={styles.captionTitle}>
                            Deactivate Account
                        </Text>
                        <Text style={styles.captionDescription}>
                            Manage closure of your account
                        </Text>
                    </View>
                    <FeatherIcon
                        name="chevron-right"
                        size={25}
                        color={HiFiColors.White}
                    />
                </View> */}
                <View
                    style={{
                        alignSelf: 'stretch',
                        marginTop: 30,
                        marginBottom: 100,
                        width: '100%',
                    }}>
                    <TouchableOpacity onPress={() => logout()}>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}}
                            end={{x: 1.0, y: 1.0}}
                            colors={['#991450', '#40799D']}
                            style={[globalStyles.filledButton, {width: '95%'}]}>
                            <Text style={globalStyles.buttonLabel}>Logout</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    whiteCard: {
        backgroundColor: HiFiColors.White,
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        alignSelf: 'stretch',
        marginHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 50,
        height: 50,
        marginLeft: 15,
        marginTop: 5,
        marginRight: 5,
        borderRadius: 50,
    },
    caption: {
        marginLeft: 10,
        flex: 1
    },
    account: {
        marginLeft: 10,
        color: HiFiColors.White,
        fontSize: 28,
        marginVertical: 5,
        fontFamily: fonts.primary,
    },
    accountCard: {
        width: '95%',
        alignSelf: 'center',
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: HiFiColors.AccentFade,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    captionTitle: {
        color: HiFiColors.White,
        fontSize: 18,
        fontWeight: '400',
        marginVertical: 2,
        fontFamily: fonts.primary,
    },
    captionDescription: {
        color: HiFiColors.Label,
        fontSize: 14,
        fontWeight: '600',
        marginVertical: 2,
        fontFamily: fonts.primary,
    },
});
