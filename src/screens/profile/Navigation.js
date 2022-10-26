import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';

export default Navigation = ({navigation}) => {
    return (
        <View style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {justifyContent: 'flex-start', borderBottomWidth: 0},
                ]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FeatherIcon
                        name="x"
                        size={20}
                        color={HiFiColors.White}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.imageSection}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/fdd9945619a0269dd7ba72d1167f72e6.png')}
                />
                <Text
                    style={[
                        globalStyles.mediumBoldLabel,
                        {marginTop: 40, marginLeft: 20},
                    ]}>
                    Leaders for India Organization
                </Text>
            </View>
            <View style={styles.textSection}>
                <Text style={globalStyles.mediumBoldLabel}>My Profile</Text>
                <Text style={globalStyles.mediumBoldLabel}>My Bookings</Text>
            </View>
            <View style={styles.footSection}>
                <Image
                    style={styles.footImage}
                    source={require('../../../assets/images/avatars/avatar.jpg')}
                />
                <View style={styles.footText}>
                    <Text style={globalStyles.boldLabel}>Roger Sanchez</Text>
                    <Text
                        style={[
                            globalStyles.boldLabel,
                            {color: HiFiColors.Blue},
                        ]}>
                        R.Sanchez@email.com
                    </Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.logout}>
                        <Text style={globalStyles.boldSmallLabel}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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
        width: 100,
        height: 100,
    },
    textSection: {
        marginTop: 20,
        marginLeft: 30,
    },
    footSection: {
        paddingVertical: 25,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        marginTop: 320,
    },
    footImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    footText: {
        marginLeft: 10,
        marginRight: 40,
    },
    logout: {
        backgroundColor: HiFiColors.LightAccent,
        borderRadius: 25,
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
