import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SelectList from 'react-native-dropdown-select-list';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from "../../styles/style";
import HiFiColors from '../../styles/colors';
import { TextInput } from "react-native-gesture-handler";

export default AccountInfo = ({ navigation }) => {

    const [selected, setSelected] = React.useState("");
    const data = [{ key: '1', value: 'Jammu & Kashmir' }];

    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { borderBottomWidth: 0, height: 60, }]}>
                <View style={[styles.headerIconBack, { left: 20, }]}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.title}>Account Information</Text>
            <ScrollView style={{ paddingBottom: 30, }}>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>First Name</Text>
                        <TextInput style={styles.inputBox}>Mohammed</TextInput>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Last Name</Text>
                        <TextInput style={styles.inputBox}>Ali</TextInput>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Email Address</Text>
                        <TextInput style={styles.inputBox}>m.ali@email.com</TextInput>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Mobile Number</Text>
                        <View style={styles.phoneInputPanel}>
                            <SelectList searchPlaceholder={''} inputStyles={styles.inputStyle}
                                boxStyles={styles.regionSelect} setSelected={setSelected} data={data} />
                            <TextInput style={[styles.inputBox, { width: 240 }]}>56 125-7482</TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>City</Text>
                        <View style={styles.phoneInputPanel}>
                            <SelectList searchPlaceholder={''} inputStyles={styles.inputStyle}
                                boxStyles={[styles.regionSelect, { width: '78%' }]} setSelected={setSelected} data={data} />
                        </View>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Gender</Text>
                        <View style={styles.phoneInputPanel}>
                            <SelectList searchPlaceholder={''} inputStyles={styles.inputStyle}
                                boxStyles={[styles.regionSelect, { width: '78%' }]} setSelected={setSelected} data={data} />
                        </View>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Gender</Text>
                        <View style={[styles.phoneInputPanel, { marginRight: 20 }]}>
                            <SelectList searchPlaceholder={''} inputStyles={styles.inputStyle}
                                boxStyles={[styles.regionSelect, { width: 120 }]} setSelected={setSelected} data={data} />
                            <SelectList searchPlaceholder={''} inputStyles={styles.inputStyle}
                                boxStyles={[styles.regionSelect, { width: 120 }]} setSelected={setSelected} data={data} />
                            <SelectList searchPlaceholder={''} inputStyles={styles.inputStyle}
                                boxStyles={[styles.regionSelect, { width: 120 }]} setSelected={setSelected} data={data} />
                        </View>
                    </View>
                </View>
                <View style={styles.border}></View>
                <Text style={styles.title}>Update Password</Text>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Current Password</Text>
                        <TextInput style={styles.inputBox} placeholder='Current Password' placeholderTextColor='#fff' ></TextInput>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>New Password</Text>
                        <TextInput style={styles.inputBox} placeholder='New Password' placeholderTextColor='#fff'></TextInput>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Confirm New Password</Text>
                        <TextInput style={styles.inputBox} placeholder='Confirm New Password' placeholderTextColor='#fff'></TextInput>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginTop: 30, marginBottom: 50, width: 450 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('OTPScreen')}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={globalStyles.filledButton}
                        >
                            <Text style={globalStyles.buttonLabel}>Update Account Details</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerIconBack: {
        position: 'absolute',
    },
    headerIcon: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        padding: 5,
    },
    title: {
        color: HiFiColors.White,
        fontSize: 24,
        marginLeft: 20,
    },
    infoPanel: {
        marginLeft: 20,
    },
    unitPanel: {
        marginTop: 20,
    },
    inputBox: {
        paddingLeft: 10,
        marginTop: 10,
        borderRadius: 5,
        marginRight: 20,
        color: HiFiColors.White,
        backgroundColor: HiFiColors.AccentFade,
    },
    phoneInputPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    regionSelect: {
        backgroundColor: HiFiColors.AccentFade,
        width: 100,
        marginTop: 10,
        borderWidth: 0,
    },
    inputStyle: {
        color: HiFiColors.White,
    },
    border: {
        borderWidth: 0.2,
        borderColor: HiFiColors.Label,
        width: '95%',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 50,
    },
})