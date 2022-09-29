import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import moment from 'moment';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';
import Action from '../../service';
import { ADMIN_API_URL } from '@env';

export default EventInfoGallery = ({ route, navigation }) => {
    const { id } = route.params;
    const [eventItem, setEventItem] = useState({});

    const getEvent = async () => {
        const response = await Action.events.getById(id);
        setEventItem(response.data);
    }

    useEffect(() => {
        navigation.addListener('focus', () => { getEvent(); })
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={globalStyles.headerContainer}>
                <View style={[styles.headerIconBack, { left: 20, }]}>
                    <MenuButton navigation={navigation} />
                </View>
                <View style={[styles.headerIconBack, { left: 65, }]}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                    </TouchableOpacity>
                </View>
                <Text style={globalStyles.mediumStrongLabel}>{eventItem.title}</Text>
            </View>
            <ScrollView style={styles.container}>
                <View>
                    <ImageBackground
                        source={{ uri: `${ADMIN_API_URL}upload/${eventItem?.photos?.length && eventItem?.photos[0]}` }}
                        resizeMode="stretch"
                        style={styles.bannerImage} >
                        <LinearGradient
                            start={{ x: 0.5, y: 0.0 }}
                            end={{ x: 0.5, y: 1.0 }}
                            colors={['#16253400', '#162534']}
                            style={styles.bannerMask}
                        >
                        </LinearGradient>
                    </ImageBackground>
                </View >
                <View style={styles.content}>
                    <Text style={globalStyles.pageTitle}>{eventItem.title}</Text>
                    <View style={styles.nameContainer}>
                        <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}>₹ • </Text>
                        <Text style={[styles.conferenceTag, globalStyles.smallLabel]}>Conference</Text>
                        <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}> • {eventItem.location} </Text>
                        <Text style={globalStyles.smallLabel}> • {moment(eventItem.createdDt).format("yyyy-MM-DD hh.mm")} </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.label, styles.discription]}>
                            {eventItem.description}
                        </Text>
                        <TouchableOpacity style={styles.readMoreButtonBack}>
                            <Text style={[globalStyles.smallLabel, styles.readMoreButton]}>Read More</Text>
                            <FeatherIcon name="chevron-down" size={10} color={'#0088EF'} />
                        </TouchableOpacity>
                        <View style={styles.galleryView}>
                            <View style={styles.columnContainer}>
                                {
                                    eventItem?.photos?.length && eventItem?.photos.map((photo, index) => (
                                        index % 2 === 0 && 
                                        <TouchableOpacity key={index} onPress={() => { navigation.navigate("ViewPictureScreen", { index: index, photos: eventItem?.photos?.length && eventItem?.photos }) }}>
                                            <Image
                                                source={{ uri: `${ADMIN_API_URL}upload/${photo}` }}
                                                style={styles.primaryImage}
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                            <View style={styles.columnContainer}>
                                {
                                    eventItem?.photos?.length && eventItem?.photos.map((photo, index) => (
                                        index % 2 === 1 && 
                                        <TouchableOpacity key={index} onPress={() => { navigation.navigate("ViewPictureScreen", { index: index, photos: eventItem?.photos?.length && eventItem?.photos }) }}>
                                            <Image
                                                source={{ uri: `${ADMIN_API_URL}upload/${photo}` }}
                                                style={styles.primaryImage}
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                            {/* <View style={styles.columnContainer}>
                                {
                                    eventItem?.photos?.length && eventItem?.photos.map((photo, index) => (
                                        remainder(index, photo)
                                    ))
                                }
                            </View> */}
                        </View>
                    </View>
                </View >
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: HiFiColors.Accent,
        paddingBottom: 50,
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
    },
    galleryView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: HiFiColors.AccentFade,
        marginTop: 20,
    },
    columnContainer: {
        width: Dimensions.get("window").width / 2 - 30,
        marginTop: 20,
    },
    primaryImage: {
        width: '100%',
        height: 200,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
    }
})