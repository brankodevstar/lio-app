import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {CheckBox} from 'react-native-elements';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';
import {ADMIN_API_URL} from '../../../config';
import Action from '../../service';
import Modal from 'react-native-modal';
import fonts from '../../styles/fonts';
import { SafeAreaView } from 'react-native';

const checkedIconTag = () => (
    <View
        style={{
            backgroundColor: HiFiColors.Accent,
            width: 30,
            height: 30,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: HiFiColors.Label,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <FeatherIcon name="check" size={20} color={HiFiColors.White} />
    </View>
);

const unCheckedIconTag = () => (
    <View
        style={{
            width: 30,
            height: 30,
            borderWidth: 2,
            borderColor: HiFiColors.Label,
            borderRadius: 50,
        }}></View>
);

export default MemberList = ({navigation}) => {
    const [members, setMembers] = useState([]);
    const currentUser = useSelector(state => state.CurrentUser);
    const [userName, setUserName] = useState('');
    const [captions, setCaptions] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [checkedRoles, setCheckedRoles] = useState([]);
    const [checkAll, setCheckAll] = useState(false);

    const getMembers = async param => {
        const response = await Action.members.list(param);
        setMembers(response.data);
        if (!captions.length > 0) {
            let captionsTemp = [];
            response.data.map(item => {
                captionsTemp.push(item.caption);
            });
            captionsTemp = captionsTemp.filter(onlyUnique);
            setCaptions(captionsTemp);
        }
    };

    const onSearch = () => {
        getMembers({username: userName});
    };

    const filterMembersByRole = async () => {
        const response = await Action.members.list({username: userName});
        if (checkedRoles.length > 0) {
            let membersClone = response.data;
            membersClone = membersClone.filter(
                item => checkedRoles.indexOf(item.caption) > -1,
            );
            setMembers(membersClone);
        } else {
            setMembers(response.data);
        }
    };

    const roleCheck = role => {
        let checkedRolesClone = checkedRoles;
        if (checkedRolesClone.indexOf(role) > -1) {
            checkedRolesClone = checkedRolesClone.filter(item => item != role);
        } else {
            checkedRolesClone.push(role);
        }
        setCheckedRoles(Object.assign([], checkedRolesClone));
        setCheckAll(checkedRolesClone.length === captions.length);
    };

    const toggleCheckAll = () => {
        if (checkAll) {
            setCheckedRoles([]);
        } else {
            setCheckedRoles(captions);
        }
        setCheckAll(!checkAll);
    };

    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getMembers({});
            setUserName('');
        });
    }, [navigation]);

    return (
        <SafeAreaView style={globalStyles.container}>
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
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
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
                    onSubmitEditing={onSearch}
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

            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => {
                    setModalVisible(false);
                    filterMembersByRole();
                }}
                swipeDirection={['down']}
                propagateSwipe={true}
                style={globalStyles.modalContainer}>
                <View style={styles.modalContentContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <Text style={styles.modalCommentTitle}>
                            Member Roles
                        </Text>
                        <View style={styles.memberRoleCheckbox}>
                            <CheckBox
                                checkedIcon={checkedIconTag()}
                                uncheckedIcon={unCheckedIconTag()}
                                onPress={toggleCheckAll}
                                checked={checkAll}
                            />
                            <Text style={globalStyles.strongLabel}>
                                CheckAll
                            </Text>
                        </View>
                    </View>
                    <ScrollView>
                        {captions.map((item, index) => (
                            <View key={index} style={styles.memberRoleCheckbox}>
                                <CheckBox
                                    checkedIcon={checkedIconTag()}
                                    uncheckedIcon={unCheckedIconTag()}
                                    onPress={() => {
                                        roleCheck(item);
                                    }}
                                    checked={
                                        checkedRoles.indexOf(item) > -1
                                            ? true
                                            : false
                                    }
                                />
                                <Text style={globalStyles.strongLabel}>
                                    {item}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </Modal>
        </SafeAreaView>
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
    modalContentContainer: {
        backgroundColor: HiFiColors.Accent,
        paddingVertical: 30,
        paddingHorizontal: 20,
        height: (Dimensions.get('window').height / 5) * 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalCommentTitle: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 20,
        fontWeight: '700',
    },
    memberRoleCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
