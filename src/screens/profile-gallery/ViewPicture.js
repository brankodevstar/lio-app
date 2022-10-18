import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';
import {ADMIN_API_URL} from '../../../config';

export default ViewPicture = ({route, navigation}) => {
    const {index, photos} = route.params;
    const [id, setId] = useState(index);

    const changeIndex = step => {
        const next = id + step;
        if (next > 0 && next < photos?.length) {
            setId(next);
        }
    };

    return (
        <View style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {
                        borderBottomWidth: 0,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    },
                ]}>
                <MenuButton navigation={navigation} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 1.0, y: 1.0}}
                        colors={['#991450', '#40799D']}
                        style={styles.iconBack}>
                        <FeatherIcon
                            name="x"
                            size={20}
                            color={HiFiColors.White}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.imageContainer}
                source={{
                    uri: `${ADMIN_API_URL}upload/${
                        photos?.length && photos[id]
                    }`,
                }}
            />
            <View style={styles.paginationContainer}>
                <TouchableOpacity onPress={() => changeIndex(-1)}>
                    <FeatherIcon
                        name="chevron-left"
                        size={25}
                        color={HiFiColors.White}
                    />
                </TouchableOpacity>
                <Text style={[styles.paginationLabel, {marginLeft: 20}]}>
                    {' '}
                    {id + 1}{' '}
                </Text>
                <Text style={styles.paginationLabel}> of </Text>
                <Text style={[styles.paginationLabel, {marginRight: 20}]}>
                    {' '}
                    {photos?.length}{' '}
                </Text>
                <TouchableOpacity onPress={() => changeIndex(1)}>
                    <FeatherIcon
                        name="chevron-right"
                        size={25}
                        color={HiFiColors.White}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iconBack: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        marginVertical: 60,
        flex: 1,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    paginationLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 15,
        fontWeight: '500',
    },
});
