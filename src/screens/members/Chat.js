import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ScrollView } from 'react-native-gesture-handler';

export default MemberInfo = () => {
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between' }]}>
                <TouchableOpacity>
                    <FeatherIcon name="search" size={20} color={HiFiColors.White} style={styles.headerButton} />
                </TouchableOpacity>
                <Text style={globalStyles.mediumStrongLabel}>Chats</Text>
                <TouchableOpacity>
                    <FeatherIcon name="plus-circle" size={20} color={HiFiColors.White} style={styles.headerButton} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.chatItemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.memberAvatarContainer}>
                            <Image source={require('../../../assets/images/avatars/f14583d4fa72dd0c419994432fa612d8.png')} style={styles.avatarImage} />
                            <FontistoIcon name="ellipse" size={8} color={HiFiColors.Green} style={styles.onlineCheckTag} />
                        </View>
                        <View>
                            <Text style={globalStyles.selectedBoldLabel}>Hemant Perdesi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="checkmark-done-sharp" size={15} color={HiFiColors.Blue} style={{ marginRight: 5 }} />
                                <Text style={globalStyles.boldSmallLabel}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={styles.chatCount}
                        >
                            <Text style={globalStyles.smallLabel}>3</Text>
                        </LinearGradient>
                    </View>
                </View>
                <View style={styles.chatItemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.memberAvatarContainer}>
                            <Image source={require('../../../assets/images/avatars/781c710a587bd211f11ba1155753fe38.png')} style={styles.avatarImage} />
                            <FontistoIcon name="ellipse" size={8} color={HiFiColors.Green} style={styles.onlineCheckTag} />
                        </View>
                        <View>
                            <Text style={globalStyles.selectedBoldLabel}>Hemant Perdesi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="checkmark-done-sharp" size={15} color={HiFiColors.Blue} style={{ marginRight: 5 }} />
                                <Text style={globalStyles.boldSmallLabel}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                    </View>
                </View>
                <View style={styles.chatItemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.memberAvatarContainer}>
                            <Image source={require('../../../assets/images/avatars/54bcd2f8d0c3783972547e2d7a723e91.png')} style={styles.avatarImage} />
                            <FontistoIcon name="ellipse" size={8} color={HiFiColors.White} style={styles.onlineCheckTag} />
                        </View>
                        <View>
                            <Text style={globalStyles.selectedBoldLabel}>Hemant Perdesi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="checkmark-done-sharp" size={15} color={HiFiColors.White} style={{ marginRight: 5 }} />
                                <Text style={globalStyles.boldSmallLabel}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                    </View>
                </View>
                <View style={styles.chatItemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.memberAvatarContainer}>
                            <Image source={require('../../../assets/images/avatars/7fe1a020fdff606843aff1544b1b36b8.png')} style={styles.avatarImage} />
                            <FontistoIcon name="ellipse" size={8} color={HiFiColors.White} style={styles.onlineCheckTag} />
                        </View>
                        <View>
                            <Text style={globalStyles.selectedBoldLabel}>Hemant Perdesi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="checkmark-done-sharp" size={15} color={HiFiColors.White} style={{ marginRight: 5 }} />
                                <Text style={globalStyles.boldSmallLabel}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                    </View>
                </View>
                <View style={styles.chatItemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.memberAvatarContainer}>
                            <Image source={require('../../../assets/images/avatars/781c710a587bd211f11ba1155753fe38.png')} style={styles.avatarImage} />
                            <FontistoIcon name="ellipse" size={8} color={HiFiColors.White} style={styles.onlineCheckTag} />
                        </View>
                        <View>
                            <Text style={globalStyles.selectedBoldLabel}>Hemant Perdesi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="checkmark-done-sharp" size={15} color={HiFiColors.White} style={{ marginRight: 5 }} />
                                <Text style={globalStyles.boldSmallLabel}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                    </View>
                </View>
                <View style={styles.chatItemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.memberAvatarContainer}>
                            <Image source={require('../../../assets/images/avatars/54bcd2f8d0c3783972547e2d7a723e91.png')} style={styles.avatarImage} />
                            <FontistoIcon name="ellipse" size={8} color={HiFiColors.White} style={styles.onlineCheckTag} />
                        </View>
                        <View>
                            <Text style={globalStyles.selectedBoldLabel}>Hemant Perdesi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="checkmark-done-sharp" size={15} color={HiFiColors.White} style={{ marginRight: 5 }} />
                                <Text style={globalStyles.boldSmallLabel}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                    </View>
                </View>
                <View style={styles.chatItemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.memberAvatarContainer}>
                            <Image source={require('../../../assets/images/avatars/7fe1a020fdff606843aff1544b1b36b8.png')} style={styles.avatarImage} />
                            <FontistoIcon name="ellipse" size={8} color={HiFiColors.White} style={styles.onlineCheckTag} />
                        </View>
                        <View>
                            <Text style={globalStyles.selectedBoldLabel}>Hemant Perdesi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="checkmark-done-sharp" size={15} color={HiFiColors.White} style={{ marginRight: 5 }} />
                                <Text style={globalStyles.boldSmallLabel}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                    </View>
                </View>
                <View style={styles.chatItemContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.memberAvatarContainer}>
                            <Image source={require('../../../assets/images/avatars/781c710a587bd211f11ba1155753fe38.png')} style={styles.avatarImage} />
                            <FontistoIcon name="ellipse" size={8} color={HiFiColors.White} style={styles.onlineCheckTag} />
                        </View>
                        <View>
                            <Text style={globalStyles.selectedBoldLabel}>Hemant Perdesi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="checkmark-done-sharp" size={15} color={HiFiColors.White} style={{ marginRight: 5 }} />
                                <Text style={globalStyles.boldSmallLabel}>Lorem ipsum dolor sit amet</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    headerButton: {
        margin: 5,
    },
    chatItemContainer: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    memberAvatarContainer: {
        marginRight: 15
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    onlineCheckTag: {
        padding: 2,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        position: 'absolute',
        right: -2,
        top: 0
    },
    chatCount: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 5
    }
})