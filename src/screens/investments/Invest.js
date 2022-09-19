import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
// import { Slider } from 'react-native-elements';
import Slider from '@react-native-community/slider';

export default Invest = ({ navigation }) => {
    const [equity, setEquity] = useState(0);

    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between' }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.closeButtonBack}>
                        <FeatherIcon name="x" size={15} color={HiFiColors.White} />
                    </View>
                </TouchableOpacity>
                <Text style={globalStyles.mediumStrongLabel}>Invest</Text>
                <TouchableOpacity><Text style={globalStyles.boldLabel}>Clear</Text></TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={globalStyles.label}>Your Investment</Text>
                <View style={styles.card}>
                    <View style={styles.contentTitle}>
                        <Text style={globalStyles.boldLabel}>Your Invesment Amount</Text>
                        <Text style={globalStyles.mediumBoldLabel}>₹12,500</Text>
                    </View>
                    <Slider
                        trackStyle={{ height: 8 }}
                        thumbStyle={{ height: 32, width: 40, backgroundColor: HiFiColors.Secondary }}
                        maximumTrackTintColor='#3a495d'
                        minimumTrackTintColor={HiFiColors.Secondary}
                    />
                </View>
                <View style={styles.card}>
                    <View style={styles.contentTitle}>
                        <Text style={globalStyles.boldLabel}>Your Equity</Text>
                        <Text style={globalStyles.mediumBoldLabel}>{equity * 5}%</Text>
                    </View>
                    <View style={styles.equityContainer}>
                        <TouchableOpacity style={[styles.equity, equity >= 1 ? { backgroundColor: HiFiColors.Secondary } : {}]} onPress={() => { setEquity(1) }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.equity, equity >= 2 ? { backgroundColor: HiFiColors.Secondary } : {}]} onPress={() => { setEquity(2) }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.equity, equity >= 3 ? { backgroundColor: HiFiColors.Secondary } : {}]} onPress={() => { setEquity(3) }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.equity, equity >= 4 ? { backgroundColor: HiFiColors.Secondary } : {}]} onPress={() => { setEquity(4) }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.equity, equity >= 5 ? { backgroundColor: HiFiColors.Secondary } : {}]} onPress={() => { setEquity(5) }}>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.confirmInvesButtonContainer}>
                <TouchableOpacity>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={['#7B61FF', '#991450', '#40799D']}
                        style={[globalStyles.filledButton, styles.confirmButton]}
                    >
                        <Text style={globalStyles.buttonLabel}>Confirm Commitment</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    closeButtonBack: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: HiFiColors.AccentFade
    },
    contentContainer: {
        padding: 20,
        flex: 1
    },
    titleLabel: {
        fontSize: 24,
        fontWeight: '400',
        fontFamily: fonts.primary,
        color: HiFiColors.White
    },
    card: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        marginVertical: 10
    },
    contentTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    equityContainer: {
        flexDirection: 'row',
    },
    equity: {
        flex: 1,
        backgroundColor: HiFiColors.White,
        borderRadius: 10,
        marginHorizontal: 3,
        height: 7
    },
    confirmInvesButtonContainer: {
        padding: 20,
        backgroundColor: HiFiColors.AccentFade
    },
    confirmButton: {
        alignSelf: 'flex-end',
        width: '50%',
    },
})