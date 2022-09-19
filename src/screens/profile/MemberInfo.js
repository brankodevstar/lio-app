import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
export default MemberInfo = () => {
    return (
        <ScrollView style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between' }]}>
                <Text style={globalStyles.mediumStrongLabel}>Leaders Of India</Text>
                <View style={styles.headerRightPart}>
                    <TouchableOpacity>
                        <View>
                            <MaterialIcons name="notifications-none" size={25} color={HiFiColors.White} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/avatars/avatar.jpg')} style={styles.avtarStyle} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageSection}>
                <ImageBackground
                    source={require('../../../assets/images/baner-1.png')}
                    resizeMode="stretch"
                    style={styles.bannerImage} >
                    <LinearGradient
                        start={{ x: 0.5, y: 0.0 }}
                        end={{ x: 0.5, y: 1.0 }}
                        colors={['#16253400', '#162534']}
                        style={styles.bannerMask}
                    >
                        <View style={styles.innerPanel}>
                            <View style={[styles.sportsCaption, { backgroundColor: HiFiColors.LightGreen, width: 80, }]}>
                                <Text style={globalStyles.mediumBoldLabel}>Sports</Text>
                            </View>
                            <View style={styles.sportsCaption}>
                                <Text style={[globalStyles.mediumBoldLabel, { fontSize: 20, fontWeight: '600', }]}>Featured Events</Text>
                            </View>
                            <View style={[styles.sportsCaption, { alignItems: 'flex-start', }]}>
                                <Text style={globalStyles.mediumBoldLabel}>22nd Aug 2022</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View >
            <View style={styles.featureSection}>
                <Text style={globalStyles.mediumBoldLabel}>Featured Start Ups</Text>
                <View style={styles.imagePart}>
                    <View style={styles.upCard}>
                        <Image source={require('../../../assets/images/profile/4d070f25e514471c404c84823a0ff305.png')}
                            style={styles.upImage} />
                        <Text style={globalStyles.label}>AirLift</Text>
                        <Text style={globalStyles.label}>Fintech</Text>
                    </View>
                    <View style={styles.upCard}>
                        <Image source={require('../../../assets/images/profile/af822be8a49c57f824600cb1740daaa1.png')}
                            style={styles.upImage} />
                        <Text style={globalStyles.label}>AirLift</Text>
                        <Text style={globalStyles.label}>Fintech</Text>
                    </View>
                    <View style={styles.upCard}>
                        <Image source={require('../../../assets/images/profile/6303cb0dea24fd73e177988f0be5eee0.png')}
                            style={styles.upImage} />
                        <Text style={globalStyles.label}>AirLift</Text>
                        <Text style={globalStyles.label}>Fintech</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <Text style={globalStyles.mediumBoldLabel}>Announcements</Text>
                <View>
                    <View style={styles.discriptionContainer}>
                        <Text style={globalStyles.label}>Really glad to be a part of the wonderful team.</Text>
                        <Text style={globalStyles.label}>Lorem ipsum dolor sit amet, consectetur ut labore et dolore</Text>
                        <Text style={globalStyles.label}>😁😍</Text>
                    </View>
                    <Image source={require('../../../assets/images/forum/1e3c40fef25f3337704ef983162d8f7d.png')} style={styles.cardImage} />
                    <View style={styles.cardFooter}>
                        <View style={{ flexDirection: 'row' }}>
                            <FeatherIcon name="heart" size={15} color={HiFiColors.White} style={styles.labelSpace} />
                            <Text style={[globalStyles.boldLabel, styles.labelSpace]}>1.892</Text>
                            <FeatherIcon name="message-circle" size={15} color={HiFiColors.White} style={styles.labelSpace} />
                            <Text style={globalStyles.boldLabel}>72</Text>
                        </View>
                        <Text style={styles.timeLabel}>2 Hours ago</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerRightPart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avtarStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
    },
    imageSection: {
        width: '95%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: HiFiColors.AccentFade,
        marginBottom: 15,
        alignSelf: 'center',
        alignItems: 'center',
    },
    bannerImage: {
        width: '100%',
        height: 250,
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom: 30,
    },
    bannerMask: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerPanel: {
        position: 'relative',
        marginTop: 60,
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },
    sportsCaption: {
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    featureSection: {
        paddingHorizontal: 10,
        paddingBottom: 20,
        borderBottomColor: HiFiColors.Label,
        borderBottomWidth: 0.5,
        width: '95%'
    },
    imagePart: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    upCard: {
        paddingHorizontal: 10,
    },
    upImage: {
        width: Dimensions.get("window").width / 3 - 20,
        height: 120,
        marginBottom: 5,
        borderRadius: 10,
        marginLeft: 5,
    },
    discriptionContainer: {
        marginVertical: 10
    },
    cardImage: {
        borderRadius: 10,
        width: '95%',
        height: 150,
        marginBottom: 15
    },
    bottomSection: {
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: HiFiColors.Label,
        borderBottomWidth: 0.5,
        width: '95%'
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.Light,
        fontSize: 13,
        fontWeight: '400',
    },
    labelSpace: {
        marginRight: 10
    },
})
