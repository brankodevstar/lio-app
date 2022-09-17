import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';


export default Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View>
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
                        <View style={[styles.headerIconBack, { left: 20, }]}>
                            <TouchableOpacity>
                                <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.headerIconBack, { right: 60, }]}>
                            <TouchableOpacity>
                                <FontAwesomeIcon name="heart" size={20} color={HiFiColors.Primary} style={styles.headerIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.headerIconBack, { right: 20, }]}>
                            <TouchableOpacity>
                                <FeatherIcon name="share-2" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bannerControlBack}>
                            <MaterialIcon name="photo-album" size={15} color={HiFiColors.White} />
                            <Text style={globalStyles.label}>1/15</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View >
            <View style={styles.content}>
                <Text style={globalStyles.pageTitle}>Startup Grind</Text>
                <View style={styles.nameContainer}>
                    <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}>₹ • </Text>
                    <Text style={[styles.conferenceTag, globalStyles.smallLabel]}>Conference</Text>
                    <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}> • 3 km away </Text>
                    <Text style={globalStyles.smallLabel}> • 20-22 Sep, 2022 </Text>
                </View>
                <View style={styles.discriptionContainer}>
                    <Text style={[globalStyles.label, styles.discription]}>
                        Both a live and online event,
                        Startup Grind is one of the most renowned
                        startup conferences in North America.
                        Powered by Microsoft for Startups, this event is a
                        great opportunity for large-scale and early-phase
                        startups to come together, meet investors, exchange ideas,
                        and participate in workshops.
                    </Text>
                    <TouchableOpacity style={styles.readMoreButtonBack}>
                        <Text style={[globalStyles.smallLabel, styles.readMoreButton]}>Read More</Text>
                        <FeatherIcon name="chevron-down" size={10} color={'#0088EF'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.discriptionContainer}>
                    <View >
                        <View style={styles.category}>
                            <FeatherIcon name="users" size={20} color={HiFiColors.White} style={styles.icon} />
                            <View>
                                <Text style={globalStyles.boldLabel}>3000+ Delegates</Text>
                                <Text style={globalStyles.smallLabel}>Investors and exhibitors from all over India</Text>
                            </View>
                        </View>
                        <View style={styles.category}>
                            <FeatherIcon name="briefcase" size={20} color={HiFiColors.White} style={styles.icon} />
                            <View>
                                <Text style={globalStyles.boldLabel}>Business Services</Text>
                                <Text style={globalStyles.smallLabel}>Consisting of a rectangular floor with tiles.</Text>
                            </View>
                        </View>
                        <View style={styles.category}>
                            <FeatherIcon name="book" size={20} color={HiFiColors.White} style={styles.icon} />
                            <View>
                                <Text style={globalStyles.boldLabel}>Education and Training</Text>
                                <Text style={globalStyles.smallLabel}>In professional or organized basketball.</Text>
                            </View>
                        </View>
                        <View style={styles.category}>
                            <FeatherIcon name="slash" size={20} color={HiFiColors.White} style={styles.icon} />
                            <View>
                                <Text style={globalStyles.boldLabel}>Free Cancellation</Text>
                                <Text style={globalStyles.smallLabel}>Full fee refund but 1 day before</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={[globalStyles.boldLabel, { marginBottom: 10 }]}>Speakers</Text>
                        <View style={styles.speackers}>
                            <Image source={require('../../../assets/images/avatar-001.png')} style={styles.avatarImage} />
                            <Text style={styles.labelText}>Mahendra Singh Dhoni</Text>
                            <Text style={styles.blueMark}>Former Chairman</Text>
                        </View>
                        <View style={styles.speackers}>
                            <Image source={require('../../../assets/images/avatar-002.png')} style={styles.avatarImage} />
                            <Text style={styles.labelText}>Yuvraj Singh</Text>
                            <Text style={styles.blueMark}>Angel Investor</Text>
                        </View>
                        <View style={styles.speackers}>
                            <Image source={require('../../../assets/images/avatar-003.png')} style={styles.avatarImage} />
                            <Text style={styles.labelText}>Priyanka Bhatt</Text>
                            <Text style={styles.blueMark}>CEO StepChange</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={globalStyles.strongLabel}>Show all 10 speakers</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={[globalStyles.label, { marginBottom: 10 }]}>Exhibitors</Text>
                        <View style={styles.speackers}>
                            <Image source={require('../../../assets/images/exhibitor-001.png')} style={styles.avatarImage} />
                            <Text style={styles.labelText}>Step Change</Text>
                            <Text style={styles.redMark}>Environment</Text>
                        </View>
                        <View style={styles.speackers}>
                            <Image source={require('../../../assets/images/exhibitor-002.png')} style={styles.avatarImage} />
                            <Text style={styles.labelText}>Clickup</Text>
                            <Text style={styles.redMark}>SasS tool</Text>
                        </View>
                        <View style={styles.speackers}>
                            <Image source={require('../../../assets/images/exhibitor-003.png')} style={styles.avatarImage} />
                            <Text style={styles.labelText}>Dynamo Softwares</Text>
                            <Text style={styles.redMark}>Software Development</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={globalStyles.strongLabel}>Show all 10 exhibitors</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <ImageBackground
                            source={require('../../../assets/images/large-banner-1.png')}
                            resizeMode="stretch"
                            style={styles.bannerImage} >
                            <LinearGradient
                                start={{ x: 0.5, y: 0.0 }}
                                end={{ x: 0.5, y: 1.0 }}
                                colors={['#16253400', '#162534']}
                                style={styles.bannerMask}
                            >
                                <Text style={{ color: HiFiColors.White, fontSize: 36, fontWeight: '700' }}>50% OFF</Text>
                                <Text style={globalStyles.boldLabel}>FOR A LIMITED TIME</Text>
                                <Text style={globalStyles.mediumLabel}>Post C-19 Reopening</Text>
                                <View style={styles.reverseButtonBack}>
                                    <TouchableOpacity onPress={() => navigation.navigate("ReserveScreen")}>
                                        <LinearGradient
                                            start={{ x: 0.0, y: 0.0 }}
                                            end={{ x: 1.0, y: 1.0 }}
                                            colors={['#7B61FF', '#991450', '#40799D']}
                                            style={[globalStyles.filledButton, { width: '50%' }]}
                                        >
                                            <Text style={globalStyles.buttonLabel}>Reserve</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.discriptionContainer}>
                    <Text style={[globalStyles.boldLabel, { marginBottom: 10 }]}>Location</Text>
                    <View style={styles.locationStringContainer}>
                        <FeatherIcon name="map-pin" size={15} color={HiFiColors.White} />
                        <Text style={[globalStyles.smallLabel, { marginLeft: 5 }]}>Marriott Hotel New Delhi Aerocity, New Delhi</Text>
                    </View>
                    <Image source={require('../../../assets/images/location.png')} style={styles.mapImage} />
                    <View style={styles.mapContainer} >
                        <TouchableOpacity>
                            <Text style={[globalStyles.boldSmallLabel, styles.getDirectionButton]}>Get Directions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerContentContainer}>
                    <Text style={globalStyles.label}>From <Text style={globalStyles.mediumBoldLabel}>₹15 ₹7 /</Text> entry</Text>
                    <Text style={globalStyles.tinyLabel}>Limited time offer. 50% off</Text>
                </View>
                <View style={styles.reverseButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("ReserveScreen")}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={[globalStyles.filledButton, styles.reverseButton]}
                        >
                            <Text style={globalStyles.buttonLabel}>Reverse</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: HiFiColors.Accent,
    },
    bannerImage: {
        width: '100%',
        height: 250,
    },
    bannerMask: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIconBack: {
        position: 'absolute',
        top: 20,
    },
    headerIcon: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        padding: 5,
    },
    bannerControlBack: {
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    content: {
        paddingHorizontal: 20
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 25,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1
    },
    conferenceTag: {
        borderRadius: 18,
        backgroundColor: HiFiColors.Primary,
        paddingHorizontal: 10,
        paddingVertical: 1,
        marginRight: 10
    },
    discriptionContainer: {
        paddingVertical: 25,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1
    },
    discription: {
        marginBottom: 15
    },
    readMoreButtonBack: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    readMoreButton: {
        color: HiFiColors.Blue,
        marginRight: 10
    },
    icon: {
        marginRight: 10
    },
    category: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    speackers: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: HiFiColors.White
    },
    labelText: [
        globalStyles.boldSmallLabel, { marginRight: 10 }
    ],
    blueMark: [
        {
            backgroundColor: HiFiColors.Secondary,
            paddingVertical: 2,
            paddingHorizontal: 10,
            borderRadius: 20
        },
        globalStyles.tinyLabel
    ],
    redMark: [
        {
            backgroundColor: HiFiColors.Primary,
            paddingVertical: 2,
            paddingHorizontal: 10,
            borderRadius: 20
        },
        globalStyles.tinyLabel
    ],
    buttonContainer: {
        alignSelf: "stretch",
        paddingVertical: 10
    },
    buttonStyle: {
        width: '100%',
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 76,
        paddingVertical: 10,
        alignItems: 'center'
    },
    reverseButtonBack: {
        alignSelf: 'stretch', marginTop: 20,
    },
    mapImage: {
        width: '100%',
        height: 170,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    mapContainer: {
        backgroundColor: HiFiColors.AccentFade,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    getDirectionButton: {
        color: '#0088EF',
        marginVertical: 10
    },
    footer: {
        backgroundColor: HiFiColors.AccentFade,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 10,
    },
    footerContentContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    locationStringContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    reverseButtonContainer: {
        flex: 1,
    },
    reverseButton: {
        alignSelf: 'flex-end'
    }
})