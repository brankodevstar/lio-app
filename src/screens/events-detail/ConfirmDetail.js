import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';


export default ConfirmDetail = () => {

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <TouchableOpacity>
                    <View style={styles.closeButtonBack}>
                        <FeatherIcon name="x" size={15} color={HiFiColors.White} />
                    </View>
                </TouchableOpacity>
                <Text style={globalStyles.mediumStrongLabel}>Confirmation Details</Text>
                <TouchableOpacity><Text style={globalStyles.boldLabel}>Edit</Text></TouchableOpacity>
            </View>
            <View style={styles.section}>
                <ImageBackground
                    source={require('../../../assets/images/baner-1.png')}
                    resizeMode="stretch"
                    borderRadius={5}
                    style={styles.bannerImage} >
                    <LinearGradient
                        start={{ x: 0.5, y: 0.0 }}
                        end={{ x: 0.5, y: 1.0 }}
                        colors={['#16253400', '#162534']}
                        style={styles.bannerMask}
                    >
                    </LinearGradient>
                </ImageBackground>
                <Text style={[globalStyles.tinyLabel, { color: HiFiColors.Label }]}>
                    Booking registered on 12/12/2021 05:00 PM • #9810941
                </Text>
                <View style={styles.card}>
                    <Text style={[globalStyles.tinyLabel, { color: HiFiColors.Label }]}>SUMMARY</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={globalStyles.strongLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.boldSmallLabel}>2 days booking (Thu, Fri)</Text>
                            <Text style={[globalStyles.boldSmallLabel, { color: HiFiColors.Label }]}>Wednesday. 03/24/2022•05:00 PM</Text>
                        </View>
                        <View>
                            <FontAwesomeIcon name="qrcode" size={60} color={'black'} />
                        </View>
                    </View>
                </View>
                <View style={[styles.card, { flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }]}>
                    <Image source={require('../../../assets/images/my-avatar.png')} style={styles.avatarImage} />
                    <Image source={require('../../../assets/images/other-avatar.png')} style={[styles.avatarImage, { marginLeft: -10, marginRight: 10 }]} />
                    <Text style={globalStyles.boldSmallLabel}>You & 300 others are going</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    closeButtonBack: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: HiFiColors.AccentFade
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center'
    },
    bannerImage: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    bannerMask: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 5,
        marginTop: 10
    },
    avatarImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
})