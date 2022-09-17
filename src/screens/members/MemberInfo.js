import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default MemberInfo = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <Text style={globalStyles.mediumStrongLabel}>Member Info</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.memberProfileContainer}>
                    <View style={styles.memberMainInfo}>
                        <Image source={require('../../../assets/images/avatars/821302c0177644a0cc7bf49a40c944e4.png')} style={styles.memberAvatar} />
                        <Text style={[globalStyles.mediumStrongLabel, { marginTop: 5 }]}>Hemant Perdesi</Text>
                        <Text style={[globalStyles.boldSmallLabel, { marginVertical: 5 }]}>Motor Vehicle Inspector at</Text>
                        <Text style={globalStyles.boldLabel}>Motorway India Ltd</Text>
                    </View>
                    <View style={styles.memberDetailInfo}>
                        <View>
                            <View>
                                <Text style={globalStyles.boldLabel}>Member ID</Text>
                                <Text style={globalStyles.boldSmallLabel}>789653PO</Text>
                            </View>
                            <View style={{ marginVertical: 15 }}>
                                <Text style={globalStyles.boldLabel}>Member Since</Text>
                                <Text style={globalStyles.boldSmallLabel}>16th Aug 2022</Text>
                            </View>
                            <View>
                                <Text style={globalStyles.boldLabel}>Location</Text>
                                <Text style={globalStyles.boldSmallLabel}>Delhi, India</Text>
                            </View>
                        </View>
                        <Image source={require('../../../assets/images/fdd9945619a0269dd7ba72d1167f72e6.png')} style={styles.memberDetailImage} />
                    </View>
                </View>
                <View style={styles.chatButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={styles.chatButtonBack}
                        >
                            <EntypoIcon name="chat" size={30} color={HiFiColors.White} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15
    },
    memberProfileContainer: {
        backgroundColor: HiFiColors.AccentFade,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    memberMainInfo: {
        paddingVertical: 10,
        borderBottomColor: HiFiColors.Label,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    memberAvatar: {
        width: 100,
        height: 100,
        borderRadius: 200,
    },
    memberDetailInfo: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    memberDetailImage: {
        width: 110,
        height: 110,
        borderRadius: 200,
    },
    chatButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    chatButtonBack: {
        padding: 15,
        borderRadius: 100,
    }
})