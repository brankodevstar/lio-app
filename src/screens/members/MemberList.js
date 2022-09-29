import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';
import { ADMIN_API_URL } from '@env';
import Action from '../../service';

export default MemberList = ({ navigation }) => {
    const [members, setMembers] = useState([]);

    const getMembers = async () => {
        const response = await Action.members.list({});
        if (response.data) {
            setMembers(response.data);
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => { getMembers(); })
    }, [navigation]);

    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between' }]}>
                <MenuButton navigation={navigation} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <FeatherIcon name="search" size={15} color={HiFiColors.White} style={styles.headerButton} />
                    </TouchableOpacity>
                    <Text style={globalStyles.mediumStrongLabel}>Members</Text>
                    <TouchableOpacity>
                        <FontAwesome5Icon name="sliders-h" size={15} color={HiFiColors.White} style={styles.headerButton} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={{ paddingBottom: 20 }}>
                {
                    members.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate("MemberInfoScreen", { id: item._id })}>
                            <View style={styles.memberCard}>
                                <Image source={{ uri: `${ADMIN_API_URL}upload/${item.avatarUrl}` }} style={styles.memberAvatar} resizeMode="center" />
                                <View style={styles.memberInfo}>
                                    <Text style={globalStyles.strongLabel}>{item.firstName + ' ' + item.lastName}</Text>
                                    <Text style={globalStyles.boldSmallLabel}>{item._id}</Text>
                                    <Text style={globalStyles.boldSmallLabel}>{item.city}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
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