import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export default Reserve = () => {

    return (
        <View style={globalStyles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <View style={styles.closeButtonBack}>
                        <FeatherIcon name="x" size={15} color={HiFiColors.White} />
                    </View>
                </TouchableOpacity>
                <Text style={globalStyles.mediumStrongLabel}>Reserve</Text>
                <TouchableOpacity><Text style={globalStyles.boldLabel}>Clear</Text></TouchableOpacity>
            </View>
            <View style={styles.section}>
                <Text style={globalStyles.mediumStrongLabel}>Where & When?</Text>
                <View style={styles.persons}>
                    <View style={{ flex: 1 }}>
                        <Text style={[globalStyles.strongLabel, { marginBottom: 5 }]}>Persons</Text>
                        <Text style={globalStyles.label}>Select the number of seats that you want to purchase</Text>
                    </View>
                    <View style={styles.personNumber}>
                        <FeatherIcon name="minus-circle" size={20} color={HiFiColors.Label} />
                        <View style={styles.personNumberBack}>
                            <FeatherIcon name="user" size={20} color={HiFiColors.White} />
                            <Text style={globalStyles.mediumLabel}>1</Text>
                        </View>
                        <FeatherIcon name="plus-circle" size={20} color={HiFiColors.Label} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 20 }}>
                <TextInput
                    multiline
                    numberOfLines={10}
                    style={styles.bookingNotes}
                    placeholder="Add booking notes (optional)"
                    placeholderTextColor={HiFiColors.Label}
                    color={HiFiColors.White}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.footerContentContainer}>
                    <Text style={globalStyles.label}>From <Text style={globalStyles.mediumBoldLabel}>₹15 ₹7 /</Text> entry</Text>
                    <Text style={globalStyles.tinyLabel}>Limited time offer. 50% off</Text>
                </View>
                <View style={styles.reverseButtonContainer}>
                    <TouchableOpacity>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={[globalStyles.filledButton, styles.reverseButton]}
                        >
                            <Text style={globalStyles.buttonLabel}>Reverse</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade

    },
    closeButtonBack: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: HiFiColors.AccentFade
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade
    },
    persons: {
        flexDirection: 'row',
        paddingVertical: 15,
    },
    personNumber: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    personNumberBack: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 5,
        marginHorizontal: 15
    },
    bookingNotes: {
        backgroundColor: HiFiColors.AccentFade,
        borderColor: HiFiColors.Label,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10
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
    reverseButtonContainer: {
        flex: 1,
    },
    reverseButton: {
        alignSelf: 'flex-end'
    }
})