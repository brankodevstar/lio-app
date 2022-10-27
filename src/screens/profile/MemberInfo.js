import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';
import Action from '../../service';
import {ADMIN_API_URL} from '../../../config';
import moment from 'moment';
import {useSelector} from 'react-redux';

export default MemberInfo = ({navigation}) => {
    const [announcements, setAnnouncements] = useState([]);
    const currentUser = useSelector(state => state.CurrentUser);

    const getAnnouncements = async () => {
        const response = await Action.announcements.list();
        if (response.data) {
            setAnnouncements(response.data);
        }
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getAnnouncements();
        });
    }, [navigation]);

    return (
        <ScrollView style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {justifyContent: 'space-between'},
                ]}>
                <MenuButton navigation={navigation} />
                <Text style={globalStyles.mediumStrongLabel}>
                Leaders for India Organization
                </Text>
                <View style={styles.headerRightPart}>
                    {/* <TouchableOpacity onPress={() => { navigation.navigate("NavigationScreen") }}>
                        <MaterialIcons name="notifications-none" size={30} color={HiFiColors.White} />
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Profile');
                        }}>
                        <Image
                            source={{
                                uri: `${ADMIN_API_URL}upload/${currentUser.user.avatarUrl}`,
                            }}
                            style={styles.avtarStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.imageSection}>
                    <ImageBackground
                        source={require('../../../assets/images/baner-1.png')}
                        resizeMode="stretch"
                        borderRadius={7}
                        style={styles.bannerImage}>
                        <LinearGradient
                            start={{x: 0.5, y: 0.0}}
                            end={{x: 0.5, y: 1.0}}
                            colors={['#16253400', '#162534']}
                            style={styles.bannerMask}>
                            <View style={styles.innerPanel}>
                                <View
                                    style={[
                                        styles.sportsCaption,
                                        {
                                            backgroundColor:
                                                HiFiColors.LightGreen,
                                            paddingHorizontal: 10,
                                            paddingVertical: 2,
                                        },
                                    ]}>
                                    <Text style={globalStyles.boldSmallLabel}>
                                        Sports
                                    </Text>
                                </View>
                                <View style={styles.sportsCaption}>
                                    <Text
                                        style={[
                                            globalStyles.mediumBoldLabel,
                                            {fontSize: 20, fontWeight: '700'},
                                        ]}>
                                        Featured Events
                                    </Text>
                                </View>
                                <View style={[styles.sportsCaption]}>
                                    <Text style={globalStyles.boldSmallLabel}>
                                        22nd Aug 2022
                                    </Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </View>
                <View style={styles.featureSection}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {fontSize: 20, fontWeight: '400'},
                        ]}>
                        Featured Start Ups
                    </Text>
                    <ScrollView horizontal style={styles.imagePart}>
                        <View style={styles.upCard}>
                            <Image
                                source={require('../../../assets/images/profile/4d070f25e514471c404c84823a0ff305.png')}
                                style={styles.upImage}
                            />
                            <Text style={globalStyles.mediumStrongLabel}>
                                AirLift
                            </Text>
                            <Text
                                style={[
                                    globalStyles.label,
                                    {color: HiFiColors.Label},
                                ]}>
                                Fintech
                            </Text>
                        </View>
                        <View style={styles.upCard}>
                            <Image
                                source={require('../../../assets/images/profile/af822be8a49c57f824600cb1740daaa1.png')}
                                style={styles.upImage}
                            />
                            <Text style={globalStyles.mediumStrongLabel}>
                                AirLift
                            </Text>
                            <Text
                                style={[
                                    globalStyles.label,
                                    {color: HiFiColors.Label},
                                ]}>
                                Fintech
                            </Text>
                        </View>
                        <View style={styles.upCard}>
                            <Image
                                source={require('../../../assets/images/profile/6303cb0dea24fd73e177988f0be5eee0.png')}
                                style={styles.upImage}
                            />
                            <Text style={globalStyles.mediumStrongLabel}>
                                AirLift
                            </Text>
                            <Text
                                style={[
                                    globalStyles.label,
                                    {color: HiFiColors.Label},
                                ]}>
                                Fintech
                            </Text>
                        </View>
                        <View style={styles.upCard}>
                            <Image
                                source={require('../../../assets/images/profile/af822be8a49c57f824600cb1740daaa1.png')}
                                style={styles.upImage}
                            />
                            <Text style={globalStyles.mediumStrongLabel}>
                                AirLift
                            </Text>
                            <Text
                                style={[
                                    globalStyles.label,
                                    {color: HiFiColors.Label},
                                ]}>
                                Fintech
                            </Text>
                        </View>
                        <View style={styles.upCard}>
                            <Image
                                source={require('../../../assets/images/profile/6303cb0dea24fd73e177988f0be5eee0.png')}
                                style={styles.upImage}
                            />
                            <Text style={globalStyles.mediumStrongLabel}>
                                AirLift
                            </Text>
                            <Text
                                style={[
                                    globalStyles.label,
                                    {color: HiFiColors.Label},
                                ]}>
                                Fintech
                            </Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.bottomSection}>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            {fontSize: 20, fontWeight: '400'},
                        ]}>
                        Announcements
                    </Text>
                    {announcements.map((item, index) => (
                        <View key={index} style={styles.card}>
                            <View style={styles.cardHeader}>
                                <View style={styles.userNameContainer}>
                                    <Image
                                        source={require('../../../assets/images/logo.png')}
                                        style={styles.avatarImage}
                                    />
                                    <Text style={styles.userNameLabel}>
                                        Leaders for India Organization
                                    </Text>
                                </View>
                                {/* <View>
                                    <TouchableOpacity>
                                        <FeatherIcon
                                            name="more-vertical"
                                            size={20}
                                            color={HiFiColors.White}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                            <View style={styles.discriptionContainer}>
                                <Text style={globalStyles.label}>
                                    {item.description}
                                </Text>
                            </View>
                            <Image
                                source={{
                                    uri: `${ADMIN_API_URL}upload/${item.imgUrl}`,
                                }}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardFooter}>
                                <View style={{flexDirection: 'row'}}>
                                    <FeatherIcon
                                        name="heart"
                                        size={15}
                                        color={HiFiColors.White}
                                        style={styles.labelSpace}
                                    />
                                    <Text
                                        style={[
                                            globalStyles.boldLabel,
                                            styles.labelSpace,
                                        ]}>
                                        {item.clickCount.toLocaleString()}
                                    </Text>
                                    <FeatherIcon
                                        name="message-circle"
                                        size={15}
                                        color={HiFiColors.White}
                                        style={styles.labelSpace}
                                    />
                                    <Text style={globalStyles.boldLabel}>
                                        {item.commentCount.toLocaleString()}
                                    </Text>
                                </View>
                                <Text style={styles.timeLabel}>
                                    {moment
                                        .duration(
                                            moment(new Date()).diff(
                                                moment(item.createdDt),
                                            ),
                                        )
                                        .asHours() > 1
                                        ? Math.ceil(
                                              moment
                                                  .duration(
                                                      moment(new Date()).diff(
                                                          moment(
                                                              item.createdDt,
                                                          ),
                                                      ),
                                                  )
                                                  .asHours(),
                                          ) + ' Hours ago'
                                        : Math.ceil(
                                              moment
                                                  .duration(
                                                      moment(new Date()).diff(
                                                          moment(
                                                              item.createdDt,
                                                          ),
                                                      ),
                                                  )
                                                  .asMinutes(),
                                          ) + ' Minutes ago'}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerRightPart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avtarStyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: 10,
    },
    contentContainer: {
        padding: 20,
    },
    imageSection: {},
    bannerImage: {
        width: '100%',
        height: 250,
    },
    bannerMask: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerPanel: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    sportsCaption: {
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    featureSection: {
        paddingVertical: 20,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: HiFiColors.AccentFade,
    },
    imagePart: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    upCard: {
        paddingHorizontal: 10,
    },
    upImage: {
        width: 120,
        height: 120,
        marginBottom: 5,
        borderRadius: 7,
    },
    discriptionContainer: {
        marginVertical: 10,
    },
    cardImage: {
        borderRadius: 10,
        width: '100%',
        height: 150,
        marginBottom: 15,
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
        marginRight: 10,
    },
    bottomSection: {
        marginTop: 20,
    },
    card: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: HiFiColors.AccentFade,
        marginVertical: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.Label,
    },
    userNameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
    },
    userNameLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 16,
        fontWeight: '700',
    },
});
