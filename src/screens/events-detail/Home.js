import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Button, ScrollView, Dimensions } from 'react-native';
import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default Home = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
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
                    ></LinearGradient>
                </ImageBackground>
            </View>
            <View style={styles.content}>
                <Text style={globalStyles.pageTitle}>Startup Grind</Text>
                <View style={styles.nameContainer}>
                    <Text style={globalStyles.smallLabel}>₹ • </Text>
                    <Text style={[styles.conferenceTag, globalStyles.smallLabel]}>Conference</Text>
                    <Text style={globalStyles.smallLabel}> • 3 km away </Text>
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
                    <TouchableOpacity>
                        <Text style={[globalStyles.smallLabel, styles.readMoreButton]}>Read More</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.discriptionContainer}>
                    <View >
                        <View style={styles.category}>
                            <Image />
                            <View>
                                <Text style={globalStyles.label}>3000+ Delegates</Text>
                                <Text style={globalStyles.smallLabel}>Investors and exhibitors from all over India</Text>
                            </View>
                        </View>
                        <View style={styles.category}>
                            <Image />
                            <View>
                                <Text style={globalStyles.label}>Business Services</Text>
                                <Text style={globalStyles.smallLabel}>Consisting of a rectangular floor with tiles.</Text>
                            </View>
                        </View>
                        <View style={styles.category}>
                            <Image />
                            <View>
                                <Text style={globalStyles.label}>Education and Training</Text>
                                <Text style={globalStyles.smallLabel}>In professional or organized basketball.</Text>
                            </View>
                        </View>
                        <View style={styles.category}>
                            <Image />
                            <View>
                                <Text style={globalStyles.label}>Free Cancellation</Text>
                                <Text style={globalStyles.smallLabel}>Full fee refund but 1 day before</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={[globalStyles.label, { marginBottom: 10 }]}>Speakers</Text>
                        <View style={styles.speackers}>
                            <Image />
                            <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}>Mahendra Singh Dhoni</Text>
                            <Text style={[globalStyles.smallLabel, styles.blueMark]}>Former Chairman</Text>
                        </View>
                        <View style={styles.speackers}>
                            <Image />
                            <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}>Yuvraj Singh</Text>
                            <Text style={[globalStyles.smallLabel, styles.blueMark]}>Angel Investor</Text>
                        </View>
                        <View style={styles.speackers}>
                            <Image />
                            <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}>Priyanka Bhatt</Text>
                            <Text style={[globalStyles.smallLabel, styles.blueMark]}>CEO StepChange</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={globalStyles.label}>Show all 10 speakers</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={[globalStyles.label, { marginBottom: 10 }]}>Exhibitors</Text>
                        <View style={styles.speackers}>
                            <Image />
                            <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}>Step Change</Text>
                            <Text style={[globalStyles.smallLabel, styles.redMark]}>Environment</Text>
                        </View>
                        <View style={styles.speackers}>
                            <Image />
                            <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}>Clickup</Text>
                            <Text style={[globalStyles.smallLabel, styles.redMark]}>SasS tool</Text>
                        </View>
                        <View style={styles.speackers}>
                            <Image />
                            <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}>Dynamo Softwares</Text>
                            <Text style={[globalStyles.smallLabel, styles.redMark]}>Software Development</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={globalStyles.label}>Show all 10 exhibitors</Text>
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
                                <Text style={{ color: HiFiColors.White, fontSize: 36 }}>50% OFF</Text>
                                <Text style={globalStyles.smallLabel}>FOR A LIMITED TIME</Text>
                                <Text style={globalStyles.label}>Post C-19 Reopening</Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.discriptionContainer}>
                    <Text style={[globalStyles.label, { marginBottom: 10 }]}>Location</Text>
                    <Text style={[globalStyles.smallLabel, { marginBottom: 10 }]}>Marriott Hotel New Delhi Aerocity, New Delhi</Text>
                    <ImageBackground source={require('../../../assets/images/location.png')} style={styles.mapImage} >
                        <View style={styles.mapContainer}>
                            <TouchableOpacity>
                                <Text style={[globalStyles.smallLabel, styles.getDirectionButton]}>Get Directions</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerContentContainer}>
                    <Text style={globalStyles.label}>From ₹15 ₹7 / entry</Text>
                    <Text style={globalStyles.smallLabel}>Limited time offer. 50% off</Text>
                </View>
                <View style={styles.reverseButtonContainer}>
                    <TouchableOpacity>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: HiFiColors.Accent,
    },
    bannerImage: {
        width: '100%',
        height: 200,
    },
    bannerMask: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        paddingHorizontal: 20
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 25,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1
    },
    conferenceTag: {
        borderRadius: 18,
        backgroundColor: HiFiColors.Primary,
        paddingHorizontal: 10,
        paddingVertical: 1,
    },
    discriptionContainer: {
        paddingVertical: 25,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1
    },
    discription: {
        marginBottom: 15
    },
    readMoreButton: {
        color: '#0088EF'
    },
    category: {
        marginBottom: 20
    },
    speackers: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    blueMark: {
        backgroundColor: HiFiColors.Secondary,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    redMark: {
        backgroundColor: HiFiColors.Primary,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 20
    },
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
    mapImage: {
        width: '100%',
        height: 140,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapContainer: {
        backgroundColor: HiFiColors.AccentFade,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    getDirectionButton: {
        color: '#0088EF',
        marginVertical: 10
    },
    footer: {
        backgroundColor: HiFiColors.AccentFade,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 10
    },
    footerContentContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    reverseButtonContainer: {
        flex: 1,
    },
    reverseButton: {
        alignSelf: 'flex-end'
    }
})