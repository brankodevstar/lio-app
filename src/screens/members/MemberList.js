import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default MemberList = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between' }]}>
                <TouchableOpacity>
                    <FeatherIcon name="search" size={15} color={HiFiColors.White} style={styles.headerButton} />
                </TouchableOpacity>
                <Text style={globalStyles.mediumStrongLabel}>Members</Text>
                <TouchableOpacity>
                    <FontAwesome5Icon name="sliders-h" size={15} color={HiFiColors.White} style={styles.headerButton} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={{ paddingBottom: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("MemberInfo")}>
                    <View style={styles.memberCard}>
                        <Image source={require('../../../assets/images/avatars/f14583d4fa72dd0c419994432fa612d8.png')} style={styles.memberAvatar} resizeMode="center" />
                        <View style={styles.memberInfo}>
                            <Text style={globalStyles.strongLabel}>Hemant Perdesi</Text>
                            <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            <Text style={globalStyles.boldSmallLabel}>Motorway India Ltd</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MemberInfo")}>
                    <View style={styles.memberCard}>
                        <Image source={require('../../../assets/images/avatars/781c710a587bd211f11ba1155753fe38.png')} style={styles.memberAvatar} resizeMode="center" />
                        <View style={styles.memberInfo}>
                            <Text style={globalStyles.strongLabel}>Hemant Perdesi</Text>
                            <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            <Text style={globalStyles.boldSmallLabel}>Motorway India Ltd</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MemberInfo")}>
                    <View style={styles.memberCard}>
                        <Image source={require('../../../assets/images/avatars/54bcd2f8d0c3783972547e2d7a723e91.png')} style={styles.memberAvatar} resizeMode="center" />
                        <View style={styles.memberInfo}>
                            <Text style={globalStyles.strongLabel}>Hemant Perdesi</Text>
                            <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            <Text style={globalStyles.boldSmallLabel}>Motorway India Ltd</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MemberInfo")}>
                    <View style={styles.memberCard}>
                        <Image source={require('../../../assets/images/avatars/7fe1a020fdff606843aff1544b1b36b8.png')} style={styles.memberAvatar} resizeMode="center" />
                        <View style={styles.memberInfo}>
                            <Text style={globalStyles.strongLabel}>Hemant Perdesi</Text>
                            <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            <Text style={globalStyles.boldSmallLabel}>Motorway India Ltd</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MemberInfo")}>
                    <View style={styles.memberCard}>
                        <Image source={require('../../../assets/images/avatars/f14583d4fa72dd0c419994432fa612d8.png')} style={styles.memberAvatar} resizeMode="center" />
                        <View style={styles.memberInfo}>
                            <Text style={globalStyles.strongLabel}>Hemant Perdesi</Text>
                            <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            <Text style={globalStyles.boldSmallLabel}>Motorway India Ltd</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MemberInfo")}>
                    <View style={styles.memberCard}>
                        <Image source={require('../../../assets/images/avatars/781c710a587bd211f11ba1155753fe38.png')} style={styles.memberAvatar} resizeMode="center" />
                        <View style={styles.memberInfo}>
                            <Text style={globalStyles.strongLabel}>Hemant Perdesi</Text>
                            <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            <Text style={globalStyles.boldSmallLabel}>Motorway India Ltd</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MemberInfo")}>
                    <View style={styles.memberCard}>
                        <Image source={require('../../../assets/images/avatars/54bcd2f8d0c3783972547e2d7a723e91.png')} style={styles.memberAvatar} resizeMode="center" />
                        <View style={styles.memberInfo}>
                            <Text style={globalStyles.strongLabel}>Hemant Perdesi</Text>
                            <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            <Text style={globalStyles.boldSmallLabel}>Motorway India Ltd</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MemberInfo")}>
                    <View style={styles.memberCard}>
                        <Image source={require('../../../assets/images/avatars/7fe1a020fdff606843aff1544b1b36b8.png')} style={styles.memberAvatar} resizeMode="center" />
                        <View style={styles.memberInfo}>
                            <Text style={globalStyles.strongLabel}>Hemant Perdesi</Text>
                            <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            <Text style={globalStyles.boldSmallLabel}>Motorway India Ltd</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerButton: {
        margin: 5,
    },
    scrollViewContainer: {
        paddingHorizontal: 15,
        marginTop: 20
    },
    memberCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        marginVertical: 5
    },
    memberInfo: {
        marginLeft: 20
    },
    memberAvatar: {
        width: 60,
        height: 60,
        borderRadius: 5,
    }
})