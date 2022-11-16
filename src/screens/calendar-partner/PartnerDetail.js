import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';
import {SafeAreaView} from 'react-native';

export default PartnerDetail = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={globalStyles.headerContainer}>
                    <View style={{position: 'absolute', left: 20}}>
                        <MenuButton navigation={navigation} />
                    </View>
                    <Text style={globalStyles.mediumStrongLabel}>
                        Partner Details
                    </Text>
                </View>
                <View style={styles.section}>
                    <Image
                        source={require('../../../assets/images/partner-detail-banner.png')}
                        resizeMode="stretch"
                        borderRadius={5}
                        style={styles.bannerImage}
                    />
                    <Text style={globalStyles.pageTitle}>Marriot Hotel</Text>
                    <View style={styles.nameContainer}>
                        <Text
                            style={[
                                globalStyles.smallLabel,
                                {marginRight: 10},
                            ]}>
                            ₹₹ •{' '}
                        </Text>
                        <Text
                            style={[
                                styles.conferenceTag,
                                globalStyles.smallLabel,
                            ]}>
                            Hotel
                        </Text>
                        <Text
                            style={[
                                globalStyles.smallLabel,
                                {marginRight: 10},
                            ]}>
                            {' '}
                            • 3 km away{' '}
                        </Text>
                        <Text style={globalStyles.smallLabel}>
                            {' '}
                            • Open Now{' '}
                        </Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[globalStyles.label, styles.discription]}>
                        Both a live and online event, Startup Grind is one of
                        the most renowned startup conferences in North America.
                        Powered by Microsoft for Startups, this event is a great
                        opportunity for large-scale and early-phase startups to
                        come together, meet investors, exchange ideas, and
                        participate in workshops.
                    </Text>
                    <View style={styles.card}>
                        <View style={{flex: 1}}>
                            <Text
                                style={[
                                    globalStyles.strongLabel,
                                    {fontSize: 15, fontWeight: '600'},
                                ]}>
                                Address
                            </Text>
                            <Text style={globalStyles.label}>
                                WRQG+G8R, Vinoo Mankad Rd, Churchgate, Mumbai,
                                Maharashtra 400020
                            </Text>
                        </View>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}}
                            end={{x: 0.0, y: 1.0}}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={styles.iconBack}>
                            <FeatherIcon
                                name="map-pin"
                                size={20}
                                color={HiFiColors.White}
                            />
                        </LinearGradient>
                    </View>
                    <View style={styles.card}>
                        <View style={{flex: 1}}>
                            <Text
                                style={[
                                    globalStyles.strongLabel,
                                    {fontSize: 15, fontWeight: '600'},
                                ]}>
                                Phone:
                            </Text>
                            <Text style={globalStyles.label}>
                                +91 22 2279 5500
                            </Text>
                        </View>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}}
                            end={{x: 0.0, y: 1.0}}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={styles.iconBack}>
                            <FeatherIcon
                                name="phone-call"
                                size={20}
                                color={HiFiColors.White}
                            />
                        </LinearGradient>
                    </View>
                    <View style={styles.card}>
                        <View style={{flex: 1}}>
                            <Text
                                style={[
                                    globalStyles.strongLabel,
                                    {fontSize: 15, fontWeight: '600'},
                                ]}>
                                Hours:
                            </Text>
                            <Text style={globalStyles.label}>
                                Wednesday Open 24 hours
                            </Text>
                            <Text style={globalStyles.label}>
                                Thursday Open 24 hours
                            </Text>
                            <Text style={globalStyles.label}>
                                Friday Open 24 hours
                            </Text>
                            <Text style={globalStyles.label}>
                                Saturday Open 24 hours
                            </Text>
                            <Text style={globalStyles.label}>
                                Sunday Open 24 hours
                            </Text>
                            <Text style={globalStyles.label}>
                                Monday Open 24 hours
                            </Text>
                            <Text style={globalStyles.label}>
                                Tuesday Open 24 hours
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: HiFiColors.Accent,
        paddingBottom: 20,
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    bannerImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 25,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
    },
    conferenceTag: {
        borderRadius: 18,
        backgroundColor: HiFiColors.Primary,
        paddingHorizontal: 10,
        paddingVertical: 1,
        marginRight: 10,
    },
    discription: {
        marginBottom: 15,
    },
    iconBack: {
        padding: 5,
        borderRadius: 50,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
});
