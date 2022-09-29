import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SelectList from 'react-native-dropdown-select-list';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { ADMIN_API_URL } from '@env';

import globalStyles from "../../styles/style";
import HiFiColors from '../../styles/colors';
import fonts from "../../styles/fonts";
import { TextInput } from "react-native-gesture-handler";
import MenuButton from '../../components/MenuButton';

export default AccountInfo = ({ navigation }) => {
    const [selected, setSelected] = useState("");
    const data = [{ key: '1', value: 'Jammu & Kashmir' }];
    const currentUser = useSelector(state => state.CurrentUser)
    const [user, setUser] = useState(currentUser.user);

    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { borderBottomWidth: 0, justifyContent: 'flex-start' }]}>
                <MenuButton navigation={navigation} />
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Account Information</Text>
            <ScrollView style={{ paddingBottom: 30, }}>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>First Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.firstName}
                            onChangeText={(value) => setUser({ ...user, firstName: value })} />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Last Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.lastName}
                            onChangeText={(value) => setUser({ ...user, lastName: value })} />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Email Address</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.email}
                            onChangeText={(value) => setUser({ ...user, email: value })} />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Mobile Number</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.phone}
                            onChangeText={(value) => setUser({ ...user, phone: value })} />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>City</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.city}
                            onChangeText={(value) => setUser({ ...user, city: value })} />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Gender</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.gender}
                            onChangeText={(value) => setUser({ ...user, gender: value })} />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Birthday</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.birthday}
                            onChangeText={(value) => setUser({ ...user, birthday: value })} />
                    </View>
                </View>
                <View style={styles.border}></View>
                <Text style={styles.title}>Update Password</Text>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Current Password</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder='Current Password'
                            placeholderTextColor={HiFiColors.Label} />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>New Password</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder='New Password'
                            placeholderTextColor={HiFiColors.Label} />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Confirm New Password</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder='Confirm New Password'
                            placeholderTextColor={HiFiColors.Label} />
                    </View>
                </View>
                <View style={{ marginTop: 20, marginBottom: 30, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('OTPScreen')}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={[globalStyles.filledButton, { width: '100%' }]}
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
        fontFamily: fonts.primary,
        marginBottom: 20
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