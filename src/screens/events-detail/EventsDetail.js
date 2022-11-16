import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MapView, {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';
import Action from '../../service';
import {ADMIN_API_URL, GOOGLE_API_KEY} from '../../../config';
import {SafeAreaView} from 'react-native';

Geocoder.init(GOOGLE_API_KEY);

export default EventDetail = ({route, navigation}) => {
    const {id} = route.params;
    const [eventItem, setEventItem] = useState({});
    const [region, setRegion] = useState(null);
    const [mapLocationName, setMapLocationName] = useState('');

    const eventToRegion = item => {
        return {
            latitude: Number.parseFloat(
                item?.location?.replaceAll(' ', '')?.split(',')[0],
            ),
            longitude: Number.parseFloat(
                item?.location?.replaceAll(' ', '')?.split(',')[1],
            ),
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
        };
    };

    const eventToLocation = item => {
        return {
            latitude: Number.parseFloat(
                item?.location?.replaceAll(' ', '')?.split(',')[0],
            ),
            longitude: Number.parseFloat(
                item?.location?.replaceAll(' ', '')?.split(',')[1],
            ),
        };
    };

    const getEvent = async () => {
        const response = await Action.events.getById(id);
        setEventItem(response.data);
        setRegion(eventToRegion(response.data));
        let lat = response.data.location.replaceAll(' ', '').split(',')[0];
        let lng = response.data.location.replaceAll(' ', '').split(',')[1];
        let locationInfo = await Geocoder.from(lat, lng);
        setMapLocationName(locationInfo.results[0].formatted_address);
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getEvent();
        });
    }, [navigation]);

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView style={styles.container}>
                <View>
                    <ImageBackground
                        source={{
                            uri: `${ADMIN_API_URL}upload/${
                                eventItem?.photos?.length &&
                                eventItem?.photos[0]
                            }`,
                        }}
                        resizeMode="stretch"
                        style={styles.bannerImage}>
                        <LinearGradient
                            start={{x: 0.5, y: 0.0}}
                            end={{x: 0.5, y: 1.0}}
                            colors={['#16253400', '#162534']}
                            style={styles.bannerMask}>
                            <View
                                style={{
                                    position: 'absolute',
                                    left: 20,
                                    top: 15,
                                }}>
                                <MenuButton navigation={navigation} />
                            </View>
                            <View style={styles.bannerControlBack}>
                                <MaterialIcon
                                    name="photo-album"
                                    size={15}
                                    color={HiFiColors.White}
                                />
                                <Text style={globalStyles.label}>
                                    1/{eventItem?.photos?.length}
                                </Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </View>
                <View style={styles.content}>
                    <Text style={globalStyles.pageTitle}>
                        {eventItem?.title}
                    </Text>
                    <View style={styles.nameContainer}>
                        <Text
                            style={[
                                globalStyles.smallLabel,
                                {marginRight: 10},
                            ]}>
                            ₹ •{' '}
                        </Text>
                        <Text
                            style={[
                                styles.conferenceTag,
                                globalStyles.smallLabel,
                            ]}>
                            {eventItem?.category}
                        </Text>

                        <Text style={globalStyles.smallLabel}>
                            {' '}
                            • {eventItem?.createdDt?.split('T')[0]}{' '}
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.label, styles.discription]}>
                            {eventItem?.description}
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text
                            style={[
                                globalStyles.boldLabel,
                                {marginBottom: 10},
                            ]}>
                            Location
                        </Text>
                        <View style={styles.locationStringContainer}>
                            <FeatherIcon
                                name="map-pin"
                                size={15}
                                color={HiFiColors.White}
                            />
                            <Text
                                style={[
                                    globalStyles.smallLabel,
                                    {marginLeft: 5},
                                ]}>
                                {mapLocationName && mapLocationName}
                            </Text>
                        </View>
                        {region && (
                            <MapView style={styles.mapImage} region={region}>
                                <Marker
                                    coordinate={eventToLocation(
                                        eventItem,
                                    )}></Marker>
                            </MapView>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: HiFiColors.Accent,
        flex: 1,
    },
    bannerImage: {
        width: '100%',
        height: 250,
    },
    bannerMask: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 20,
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
    discriptionContainer: {
        paddingVertical: 25,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
    },
    discription: {
        marginBottom: 15,
    },
    readMoreButtonBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    readMoreButton: {
        color: HiFiColors.Blue,
        marginRight: 10,
    },
    icon: {
        marginRight: 10,
    },
    category: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
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
        backgroundColor: HiFiColors.White,
    },
    labelText: [globalStyles.boldSmallLabel, {marginRight: 10}],
    blueMark: [
        {
            backgroundColor: HiFiColors.Secondary,
            paddingVertical: 2,
            paddingHorizontal: 10,
            borderRadius: 20,
        },
        globalStyles.tinyLabel,
    ],
    redMark: [
        {
            backgroundColor: HiFiColors.Primary,
            paddingVertical: 2,
            paddingHorizontal: 10,
            borderRadius: 20,
        },
        globalStyles.tinyLabel,
    ],
    buttonContainer: {
        alignSelf: 'stretch',
        paddingVertical: 10,
    },
    buttonStyle: {
        width: '100%',
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 76,
        paddingVertical: 10,
        alignItems: 'center',
    },
    reverseButtonBack: {
        alignSelf: 'stretch',
        marginTop: 20,
    },
    mapImage: {
        width: '100%',
        height: 170,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
    },
    mapContainer: {
        backgroundColor: HiFiColors.AccentFade,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    getDirectionButton: {
        color: '#0088EF',
        marginVertical: 10,
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
        alignItems: 'flex-start',
    },
    locationStringContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    reverseButtonContainer: {
        flex: 1,
    },
    reverseButton: {
        alignSelf: 'flex-end',
    },
});
