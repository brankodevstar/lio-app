import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import HiFiColors from '../styles/colors';
import globalStyles from '../styles/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ADMIN_API_URL} from '../../config';
import {Svg, Image as ImageSvg} from 'react-native-svg';

export default MapCallout = props => {
    return (
        <View style={styles.container}>
            <View style={styles.graphic}>
                <View style={styles.brandPart}>
                    <Svg width={160} height={100}>
                        <ImageSvg
                            width={'100%'}
                            height={'100%'}
                            preserveAspectRatio="xMidYMid slice"
                            href={{
                                uri: `${ADMIN_API_URL}upload/${props.marker.imgUrl}`,
                            }}
                        />
                    </Svg>
                </View>
                <TouchableOpacity>
                    <FeatherIcon
                        name="heart"
                        size={20}
                        color={HiFiColors.White}
                        style={{marginTop: 10, marginRight: 5}}
                    />
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: 10, marginTop: 5}}>
                <Text style={globalStyles.boldSmallLabel}>
                    {props.marker.name}
                </Text>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text
                        style={[globalStyles.label, {color: HiFiColors.Label}]}>
                        {props.marker.distance} kms away •{' '}
                    </Text>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text
                            style={[
                                globalStyles.smallLabel,
                                {
                                    color: HiFiColors.Secondary,
                                    fontWeight: '100',
                                },
                            ]}>
                            {' '}
                            {props.marker.rating}{' '}
                        </Text>
                        <TouchableOpacity>
                            <FontAwesomeIcon
                                name="star"
                                size={15}
                                color={HiFiColors.Secondary}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 160,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 5,
        marginBottom: 15
    },
    graphic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maringTop: 16,
    },
    brandPart: {
        width: 160,
        height: 100,
        // backgroundColor: HiFiColors.Black,
        borderRadius: 4,
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brand: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'yellow',
    },
});
