import React from "react";
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { StyleSheet } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from "../../styles/style";
import HiFiColors from "../../styles/colors";

export default Navigation = () => {
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'flex-start', borderBottomWidth: 0, }]}>
                <TouchableOpacity>
                    <View>
                        <FeatherIcon name="x" size={20} color={HiFiColors.White} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.imageSection}>
                <Image style={styles.image}
                    source={require('../../../assets/images/fdd9945619a0269dd7ba72d1167f72e6.png')} />
                <Text style={[globalStyles.mediumBoldLabel, { marginTop: 40, marginLeft: 20, }]}>Leaders Of India</Text>
            </View>
            <View style={styles.textSection}>
                <Text style={globalStyles.mediumBoldLabel}>My Profile</Text>
                <Text style={globalStyles.mediumBoldLabel}>My Bookings</Text>
            </View>
            <View style={styles.footSection}>
                <Image style={styles.footImage}
                    source={require('../../../assets/images/avatars/avatar.jpg')} />
                <View style={styles.footText}>
                    <Text style={globalStyles.boldLabel}>Roger Sanchez</Text>
                    <Text style={[globalStyles.boldLabel, { color: HiFiColors.Blue }]}>R.Sanchez@email.com</Text>
                </View>
                <View style={styles.logout}>
                    <Text style={globalStyles.boldSmallLabel}>Logout</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageSection: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 80,
    },
    textSection: {
        marginTop: 20,
        marginLeft: 30,
    },
    footSection: {
        width: '95%',
        height: 70,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 320,
    },
    footImage: {
        marginLeft: 10,
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
        marginRight: 10,
        alignItems: 'center',
    }
})