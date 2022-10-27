import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
// import Search from 'react-native-search-box';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';
import {ADMIN_API_URL} from '../../../config';
import Action from '../../service';

export default MemberList = ({navigation}) => {
    const [members, setMembers] = useState([]);
    const currentUser = useSelector(state => state.CurrentUser);
    const [userName, setUserName] = useState('');

    const getMembers = async param => {
        const response = await Action.members.list(param);
        setMembers(response.data);
    };

    const onSearch = () => {
        getMembers({username: userName});
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getMembers({});
        });
    }, [navigation]);

    return (
        <View style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {justifyContent: 'space-between'},
                ]}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <MenuButton navigation={navigation} />
                    <Text style={globalStyles.mediumStrongLabel}>Members</Text>
                    <TouchableOpacity>
                        <FontAwesome5Icon
                            name="sliders-h"
                            size={15}
                            color={HiFiColors.White}
                            style={styles.headerButton}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    style={styles.searchBox}
                    placeholder="Search Members"
                    placeholderTextColor={HiFiColors.Label}
                    value={userName}
                    onChangeText={val => setUserName(val)}
                />
                <View
                    style={{
                        position: 'absolute',
                        right: 25,
                    }}>
                    <TouchableOpacity onPress={onSearch}>
                        <FeatherIcon
                            name="search"
                            size={20}
                            color={HiFiColors.White}
                            style={[styles.headerButton, styles.searchButton]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingHorizontal: 20}}>
                <Text style={globalStyles.mediumBoldLabel}>
                    Member Count: {members.length}
                </Text>
            </View>
            <ScrollView
                style={styles.scrollViewContainer}
                contentContainerStyle={{paddingBottom: 20}}>
                {members.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            navigation.navigate('MemberInfoScreen', {
                                id: item._id,
                            })
                        }>
                        <View style={styles.memberCard}>
                            <Image
                                source={{
                                    uri: `${ADMIN_API_URL}upload/${item.avatarUrl}`,
                                }}
                                style={styles.memberAvatar}
                                resizeMode="center"
                            />
                            <View style={styles.memberInfo}>
                                <Text style={globalStyles.strongLabel}>
                                    {item.firstName + ' ' + item.lastName}
                                </Text>
                                <Text style={globalStyles.boldSmallLabel}>
                                    {item._id}
                                </Text>
                                <Text style={globalStyles.boldSmallLabel}>
                                    {item.city}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        margin: 5,
    },
    scrollViewContainer: {
        paddingHorizontal: 15,
        marginTop: 20,
    },
    memberCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        marginVertical: 5,
    },
    memberInfo: {
        marginLeft: 20,
    },
    memberAvatar: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    searchBoxContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    searchBox: {
        borderWidth: 1,
        flex: 1,
        borderColor: HiFiColors.Label,
        color: HiFiColors.White,
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 40,
    },
    searchButton: {
        padding: 10,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 100,
    },
});
