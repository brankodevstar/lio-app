import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';
import {ADMIN_API_URL} from '../../../config';
import Action from '../../service';

export default Gallery = ({navigation}) => {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const response = await Action.events.list();
        if (response.data) {
            setEvents(response.data);
        }
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getEvents();
        });
    }, [navigation]);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <View style={{position: 'absolute', left: 20}}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Gallery</Text>
            </View>
            <ScrollView
                contentContainerStyle={{paddingBottom: 20}}
                style={{paddingHorizontal: 15}}>
                {events.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            navigation.navigate('EventInfoGalleryScreen', {
                                id: item._id,
                            });
                        }}>
                        <View style={styles.galleryCard}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    source={{
                                        uri: `${ADMIN_API_URL}upload/${item.photos[0]}`,
                                    }}
                                    style={styles.galleryImage}
                                />
                                <View style={styles.galleryCaption}>
                                    <Text style={globalStyles.mediumLabel}>
                                        {item.title}
                                    </Text>
                                    <Text style={globalStyles.label}>
                                        {item.category}
                                    </Text>
                                    <Text style={globalStyles.label}>
                                        {moment(item.createdDt).format(
                                            'yyyy-MM-DD hh.mm',
                                        )}
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('ViewPictureScreen', {
                                        index: 0,
                                        photos:
                                            item?.photos?.length &&
                                            item?.photos,
                                    });
                                }}>
                                <LinearGradient
                                    start={{x: 0.0, y: 1.0}}
                                    end={{x: 1.0, y: 1.0}}
                                    colors={['#991450', '#40799D']}
                                    style={styles.icon}>
                                    <MaterialComunityIcons
                                        name="image-album"
                                        size={20}
                                        color={HiFiColors.White}
                                        style={{marginHorizontal: 5}}
                                    />
                                    <Text style={globalStyles.label}>
                                        {item.photos.length}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    galleryCard: {
        marginVertical: 5,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    galleryImage: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    galleryCaption: {
        marginHorizontal: 10,
        alignSelf: 'flex-start',
    },
    icon: {
        width: 80,
        borderRadius: 40,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
