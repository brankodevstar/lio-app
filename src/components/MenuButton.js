import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HiFiColors from '../styles/colors';

export default MenuButton = props => {
    return (
        <View
            style={{
                backgroundColor: HiFiColors.Accent,
                left: 0,
                opacity: 1,
                marginRight: 10,
            }}>
            <TouchableOpacity
                style={{padding: 5}}
                onPress={() => {
                    props.navigation.openDrawer();
                }}>
                <FeatherIcon name="menu" size={25} color={HiFiColors.White} />
            </TouchableOpacity>
        </View>
    );
};
