import React from "react";
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { StyleSheet } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from "../../styles/style";
import HiFiColors from "../../styles/colors";


export default DrawerMenu = (props) => {
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'flex-start', borderBottomWidth: 0, }]}>
                <TouchableOpacity onPress={() => { props.navigation.closeDrawer() }}>
                    <FeatherIcon name="x" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.imageSection}>
                <Image style={styles.image}
                    source={require('../../../assets/images/fdd9945619a0269dd7ba72d1167f72e6.png')} />
                <Text style={[globalStyles.mediumBoldLabel, { marginTop: 40, marginLeft: 20 }]}>Leaders Of India</Text>
            </View>
            <View style={styles.textSection}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("HomeScreen") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate("BenefitsList") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>Benefits List</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate("EventDetails") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>Event Details</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate("CalendarPartnerDetail") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>Calendar & Partner Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate("Gallery") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate("Profile") }}>
                    <Text style={[globalStyles.mediumBoldLabel, { paddingVertical: 10 }]}>My Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footSection}>
                <Image style={styles.footImage}
                    source={require('../../../assets/images/avatars/avatar.jpg')} />
                <View style={styles.footText}>
                    <Text style={globalStyles.boldLabel}>Roger Sanchez</Text>
                    <Text style={[globalStyles.boldLabel, { color: HiFiColors.Blue }]}>R.Sanchez@email.com</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.logout}>
                        <Text style={globalStyles.boldSmallLabel}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
        flex: 1
    },
    footSection: {
        paddingVertical: 10,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        paddingHorizontal: 15,
        marginBottom: 20
    },
    footImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    footText: {
    },
    logout: {
        backgroundColor: HiFiColors.LightAccent,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})