import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HiFiColors from '../styles/colors';
import globalStyles from '../styles/style';

export default MapMarker = props => {
    return (
        <View style={styles.container}>
            <Text style={[globalStyles.boldLabel, {color: HiFiColors.Black}]}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: HiFiColors.Label,
    },
});
