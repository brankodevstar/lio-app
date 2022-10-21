import React, {useState} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import globalStyles from '../../styles/style';
import {StyleSheet} from 'react-native';
import HiFiColors from '../../styles/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import MenuButton from '../../components/MenuButton';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapMarker from '../../components/MapMarker';
import MapCallout from '../../components/MapCallout';

const initMarkers = [
    {
        lating: {
            latitude: 17.391731,
            longitude: 78.476982,
        },
        title: 'Adidas',
        description: 'desc-1',
    },
    {
        lating: {
            latitude: 17.4,
            longitude: 78.5,
        },
        title: "McDonald's",
        description: 'desc-2',
    },
];

const benefitToRegion = benefit => {
    return {
        latitude: Number.parseFloat(
            benefit.location.replaceAll(' ', '').split(',')[0],
        ),
        longitude: Number.parseFloat(
            benefit.location.replaceAll(' ', '').split(',')[1],
        ),
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
    };
};

const benefitToLocation = benefit => {
    return {
        latitude: Number.parseFloat(
            benefit.location.replaceAll(' ', '').split(',')[0],
        ),
        longitude: Number.parseFloat(
            benefit.location.replaceAll(' ', '').split(',')[1],
        ),
    };
};

export default VenueMap = ({route, navigation}) => {
    const {clickedIndex, benefits} = route.params.mapInfo;
    const [viewState, setViewState] = useState(true);
    const [region, setRegion] = useState(
        benefitToRegion(benefits[clickedIndex]),
    );
    console.log('region =========> ', region);
    const [markers, setMarkers] = useState(benefits);

    const toggleViewState = () => {
        setViewState(!viewState);
    };

    return (
        <View style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {justifyContent: 'space-between'},
                ]}>
                <MenuButton navigation={navigation} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <FeatherIcon
                        name="arrow-left"
                        size={20}
                        color={HiFiColors.White}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
                <View style={styles.searchInputView}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="sports"
                        placeholderTextColor={HiFiColors.Label}
                    />
                    <TouchableOpacity>
                        <FeatherIcon
                            name="search"
                            size={20}
                            color={HiFiColors.White}
                            style={{borderWidth: 0, marginRight: 10}}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <FontAwesome5Icon
                        name="sliders-h"
                        size={20}
                        color={HiFiColors.White}
                        style={styles.headerButton}
                    />
                </TouchableOpacity>
            </View>
            <MapView
                style={{
                    flex: 1,
                }}
                region={region}>
                {markers.map((marker, index) => (
                    <Marker key={index} coordinate={benefitToLocation(marker)}>
                        <MapMarker title={marker.name} />
                        <Callout tooltip={true}>
                            <MapCallout marker={marker} />
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            {/* <View style={styles.listButton}>
                <TouchableOpacity>
                    <View style={styles.addPostButtonContainer}>
                        <MaterialIcon
                            name="list-alt"
                            size={15}
                            color={HiFiColors.White}
                            style={{marginRight: 5}}
                        />
                        <Text style={globalStyles.strongLabel}>List</Text>
                    </View>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    headerIcon: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        padding: 5,
    },
    imageBackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    searchInputView: {
        flex: 1,
        backgroundColor: HiFiColors.AccentFade,
        marginHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        color: HiFiColors.White,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    listButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    addPostButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        width: 100,
        backgroundColor: HiFiColors.AccentFade,
        opacity: 0.8,
    },
});
