import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default Overview = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <View style={styles.whiteCard}>
                <Image
                    source={require('../../../assets/images/avatars/avatar.jpg')}
                    style={styles.avatar} />
                <View style={styles.caption}>
                    <Text style={[globalStyles.mediumBoldLabel, { fontSize: 16, fontWeight: '800', color: HiFiColors.Black, }]}>Roger Sanchez</Text>
                    <Text style={[globalStyles.mediumBoldLabel, { fontSize: 16, fontWeight: '800', color: HiFiColors.Primary, }]}>R.Sanchez@email.com</Text>
                </View>
            </View>
            <View style={styles.accountPanel}>
                <Text style={styles.account}>Account</Text>
                <View style={styles.accountCard}>
                    <View>
                        <Text style={styles.captionTitle}>Account Information</Text>
                        <Text style={styles.captionDescription}>Change your account information</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate("AccountInfoScreen") }}>
                        <FeatherIcon name="chevron-right" size={15} color={HiFiColors.White} />
                    </TouchableOpacity>
                </View>
                <View style={styles.accountCard}>
                    <View>
                        <Text style={styles.captionTitle}>Wallet</Text>
                        <Text style={styles.captionDescription}>Manage payment methods</Text>
                    </View>
                    <TouchableOpacity>
                        <FeatherIcon name="chevron-right" size={15} color={HiFiColors.White} />
                    </TouchableOpacity>
                </View>
                <View style={styles.accountCard}>
                    <View>
                        <Text style={styles.captionTitle}>Deactivate Account</Text>
                        <Text style={styles.captionDescription}>Manage closure of your account</Text>
                    </View>
                    <TouchableOpacity>
                        <FeatherIcon name="chevron-right" size={15} color={HiFiColors.White} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'stretch', marginTop: 30, marginBottom: 100, width: '100%' }}>
                    <TouchableOpacity >
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={[globalStyles.filledButton, { width: '95%' }]}
                        >
                            <Text style={globalStyles.buttonLabel}>Logout</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    whiteCard: {
        backgroundColor: HiFiColors.White,
        width: '95%',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        height: 80,
        alignSelf: 'center',
        paddingBottom: 20,
        alignItems: 'center',
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
        paddingTop: 5,
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
    }
})