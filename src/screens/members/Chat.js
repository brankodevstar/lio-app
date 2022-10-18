import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {CheckBox} from 'react-native-elements';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

import MenuButton from '../../components/MenuButton';
import {ADMIN_API_URL} from '../../../config';
import Action from '../../service';

const checkedIconTag = () => (
    <View
        style={{
            backgroundColor: HiFiColors.Accent,
            width: 30,
            height: 30,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: HiFiColors.Accent,
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

const checkedUser = () => (
    <View style={styles.checkedUserContainer}>
        <Image
            source={require('../../../assets/images/avatars/7fe1a020fdff606843aff1544b1b36b8.png')}
            style={styles.checkedUserAvatar}
        />
        <Text style={globalStyles.smallLabel}>Hemant</Text>
        <View
            style={{
                position: 'absolute',
                top: -2,
                right: -2,
            }}>
            <TouchableOpacity>
                <FeatherIcon
                    name="x"
                    size={15}
                    color={HiFiColors.White}
                    style={styles.checkedUserCancel}
                />
            </TouchableOpacity>
        </View>
    </View>
);

export default Chat = ({navigation}) => {
    const [isSettingModalVisible, setSettingModalVisible] = useState(false);
    const [isParticipantModalVisible, setParticipantModalVisible] =
        useState(false);
    const [isNewGroupModalVisible, setNewGroupModalVisible] = useState(false);
    const currentUser = useSelector(state => state.CurrentUser);
    const [members, setMembers] = useState([]);
    const [checkedMembers, setCheckedMembers] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [description, setDescription] = useState('');

    const getMembers = async () => {
        const response = await Action.members.list({});
        if (response.data) {
            setMembers(
                response.data.filter(item => item._id != currentUser.user._id),
            );
        }
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getMembers();
        });
    }, [navigation]);

    const [isChecked, setChecked] = useState(false);

    const toggleSettingModal = () => {
        setSettingModalVisible(!isSettingModalVisible);
    };

    const toggleCheckbox = () => {
        setChecked(!isChecked);
    };

    const memberCheck = id => {
        let checkedMembersClone = checkedMembers;
        if (checkedMembersClone.indexOf(id) > -1) {
            checkedMembersClone = checkedMembersClone.filter(
                item => item != id,
            );
        } else {
            checkedMembersClone.push(id);
        }
        setCheckedMembers(Object.assign([], checkedMembersClone));
    };

    const createGroupChat = () => {
        if (!groupName) {
            alert('Group name is required!');
            return;
        }
        setNewGroupModalVisible(false);
        let checkedMembersClone = checkedMembers;
        checkedMembersClone.push(currentUser.user._id);
        navigation.navigate('GroupChatScreen', {
            groupInfo: {
                name: groupName,
                description: description,
                members: checkedMembersClone,
            },
        });
    };

    return (
        <View style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {justifyContent: 'space-between'},
                ]}>
                <MenuButton navigation={navigation} />
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                        <FeatherIcon
                            name="search"
                            size={20}
                            color={HiFiColors.White}
                            style={styles.headerButton}
                        />
                    </TouchableOpacity>
                    <Text style={globalStyles.mediumStrongLabel}>Chats</Text>
                    <TouchableOpacity
                        onPress={() => {
                            toggleSettingModal();
                            setCheckedMembers([]);
                            setGroupName('');
                            setDescription('');
                        }}>
                        <FeatherIcon
                            name="plus-circle"
                            size={20}
                            color={HiFiColors.White}
                            style={styles.headerButton}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {members.map((item, index) => (
                    <View key={index} style={styles.chatItemContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.memberAvatarContainer}>
                                <Image
                                    source={{
                                        uri: `${ADMIN_API_URL}upload/${item.avatarUrl}`,
                                    }}
                                    style={styles.avatarImage}
                                />
                                <FontistoIcon
                                    name="ellipse"
                                    size={8}
                                    color={HiFiColors.Green}
                                    style={styles.onlineCheckTag}
                                />
                            </View>
                            <View>
                                <Text style={globalStyles.selectedBoldLabel}>
                                    {item.firstName + ' ' + item.lastName}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <Ionicons
                                        name="checkmark-done-sharp"
                                        size={15}
                                        color={HiFiColors.Blue}
                                        style={{marginRight: 5}}
                                    />
                                    <Text style={globalStyles.boldSmallLabel}>
                                        Lorem ipsum dolor sit amet
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={globalStyles.smallLabel}>4:44 PM</Text>
                            {/* <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={styles.chatCount}
                        >
                            <Text style={globalStyles.smallLabel}>3</Text>
                        </LinearGradient> */}
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Setting Modal start */}
            <Modal
                isVisible={isSettingModalVisible}
                onSwipeComplete={() => setSettingModalVisible(false)}
                swipeDirection={['down']}
                propagateSwipe={true}
                style={globalStyles.modalContainer}>
                <View style={styles.modalContentContainer}>
                    <Text
                        style={[
                            globalStyles.mediumStrongLabel,
                            {alignSelf: 'center', marginBottom: 20},
                        ]}>
                        Chat
                    </Text>
                    <TouchableOpacity
                        style={{marginBottom: 10}}
                        onPress={() => {
                            setSettingModalVisible(false);
                            navigation.navigate('IndividualChatScreen');
                        }}>
                        <Text style={globalStyles.boldLabel}>New Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            toggleSettingModal();
                            setParticipantModalVisible(true);
                        }}>
                        <Text style={globalStyles.boldLabel}>
                            Create a Group
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* Setting Modal end */}

            {/* Add Participant Modal start */}
            <Modal
                isVisible={isParticipantModalVisible}
                onSwipeComplete={() => setParticipantModalVisible(false)}
                swipeDirection={['down']}
                propagateSwipe={true}
                style={globalStyles.modalContainer}>
                <View
                    style={[
                        styles.modalContentContainer,
                        {height: (Dimensions.get('window').height / 6) * 5},
                    ]}>
                    <Text
                        style={[
                            globalStyles.mediumStrongLabel,
                            {alignSelf: 'center', marginBottom: 20},
                        ]}>
                        Add Participants
                    </Text>
                    <View style={styles.addParticipantHeader}>
                        <TouchableOpacity
                            onPress={() => setParticipantModalVisible(false)}>
                            <Text
                                style={[
                                    globalStyles.boldLabel,
                                    {color: HiFiColors.Label},
                                ]}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <Text
                            style={[
                                globalStyles.boldSmallLabel,
                                {color: HiFiColors.Label},
                            ]}>
                            {checkedMembers.length} / {members.length}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setParticipantModalVisible(false);
                                setNewGroupModalVisible(true);
                            }}>
                            <Text
                                style={[
                                    globalStyles.boldLabel,
                                    {color: HiFiColors.Blue},
                                ]}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        placeholder="Search Members"
                        placeholderTextColor={HiFiColors.Label}
                        style={styles.searchMemberInput}
                    />
                    <View style={styles.memberCheck}>
                        <View style={{flexDirection: 'row'}}>
                            {checkedMembers.map((item, index) => (
                                <View
                                    key={index}
                                    style={styles.checkedUserContainer}>
                                    <Image
                                        source={{
                                            uri: `${ADMIN_API_URL}upload/${
                                                members.filter(
                                                    temp => temp._id == item,
                                                )[0]?.avatarUrl
                                            }`,
                                        }}
                                        style={styles.checkedUserAvatar}
                                    />
                                    <Text style={globalStyles.smallLabel}>
                                        {members.filter(
                                            temp => temp._id == item,
                                        )[0]?.firstName +
                                            ' ' +
                                            members.filter(
                                                temp => temp._id == item,
                                            )[0]?.lastName}
                                    </Text>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: -2,
                                            right: -2,
                                        }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                memberCheck(item);
                                            }}>
                                            <FeatherIcon
                                                name="x"
                                                size={15}
                                                color={HiFiColors.White}
                                                style={styles.checkedUserCancel}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                    <ScrollView style={{height: 150}}>
                        <TouchableOpacity>
                            <TouchableWithoutFeedback>
                                <View>
                                    {members.map((item, index) => (
                                        <View
                                            key={index}
                                            style={styles.memberContainer}>
                                            <View
                                                style={
                                                    styles.memberAvatarContainer
                                                }>
                                                <Image
                                                    source={{
                                                        uri: `${ADMIN_API_URL}upload/${item.avatarUrl}`,
                                                    }}
                                                    style={styles.avatarImage}
                                                />
                                            </View>
                                            <View style={styles.memberInfo}>
                                                <View>
                                                    <Text
                                                        style={
                                                            globalStyles.selectedBoldLabel
                                                        }>
                                                        {item.firstName +
                                                            ' ' +
                                                            item.lastName}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            globalStyles.boldSmallLabel
                                                        }>
                                                        {item.caption}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        alignItems: 'center',
                                                    }}>
                                                    <CheckBox
                                                        checkedIcon={checkedIconTag()}
                                                        uncheckedIcon={unCheckedIconTag()}
                                                        onPress={() => {
                                                            memberCheck(
                                                                item._id,
                                                            );
                                                        }}
                                                        checked={
                                                            checkedMembers.indexOf(
                                                                item._id,
                                                            ) > -1
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </TouchableWithoutFeedback>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>
            {/* Add Participant Modal end */}

            {/* New Group Modal start */}
            <Modal
                isVisible={isNewGroupModalVisible}
                onSwipeComplete={() => setNewGroupModalVisible(false)}
                swipeDirection={['down']}
                propagateSwipe={true}
                style={globalStyles.modalContainer}>
                <View
                    style={[
                        styles.modalContentContainer,
                        {height: (Dimensions.get('window').height / 3) * 2},
                    ]}>
                    <View style={styles.confirmNewGroupHeader}>
                        <TouchableOpacity
                            onPress={() => {
                                setNewGroupModalVisible(false);
                                setParticipantModalVisible(true);
                            }}>
                            <Text style={globalStyles.boldLabel}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={globalStyles.mediumStrongLabel}>
                            New Group
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                createGroupChat();
                            }}>
                            <Text
                                style={[
                                    globalStyles.boldLabel,
                                    {color: HiFiColors.Blue},
                                ]}>
                                Create
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        {/* <TouchableOpacity>
                            <FeatherIcon name="camera" size={20} color={HiFiColors.Blue} style={styles.cameraButton} />
                        </TouchableOpacity> */}
                        <View style={{flex: 1}}>
                            <TextInput
                                placeholder="Group Name"
                                placeholderTextColor={HiFiColors.Label}
                                value={groupName}
                                onChangeText={value => setGroupName(value)}
                                style={styles.groupName}
                            />
                            <TextInput
                                multiline
                                placeholder="Description"
                                placeholderTextColor={HiFiColors.Label}
                                value={description}
                                onChangeText={value => setDescription(value)}
                                style={styles.groupDescription}
                            />
                        </View>
                    </View>
                    <Text style={[globalStyles.boldLabel, {marginBottom: 10}]}>
                        Participants: {checkedMembers.length} OF{' '}
                        {members.length}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        {checkedMembers.map((item, index) => (
                            <View
                                key={index}
                                style={styles.checkedUserContainer}>
                                <Image
                                    source={{
                                        uri: `${ADMIN_API_URL}upload/${
                                            members.filter(
                                                temp => temp._id == item,
                                            )[0]?.avatarUrl
                                        }`,
                                    }}
                                    style={styles.checkedUserAvatar}
                                />
                                <Text style={globalStyles.smallLabel}>
                                    {members.filter(temp => temp._id == item)[0]
                                        ?.firstName +
                                        ' ' +
                                        members.filter(
                                            temp => temp._id == item,
                                        )[0]?.lastName}
                                </Text>
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: -2,
                                        right: -2,
                                    }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            memberCheck(item);
                                        }}>
                                        <FeatherIcon
                                            name="x"
                                            size={15}
                                            color={HiFiColors.White}
                                            style={styles.checkedUserCancel}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </Modal>
            {/* New Group Modal end */}
        </View>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        margin: 5,
    },
    chatItemContainer: {
        paddingVertical: 15,
        paddingLeft: 5,
        paddingRight: 15,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderLeftWidth: 10,
        borderLeftColor: HiFiColors.Accent,
    },
    memberAvatarContainer: {
        marginRight: 15,
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    onlineCheckTag: {
        padding: 2,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        position: 'absolute',
        right: -2,
        top: 0,
    },
    chatCount: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 5,
    },
    modalContentContainer: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    searchMemberInput: {
        backgroundColor: HiFiColors.Accent,
        color: HiFiColors.White,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    memberContainer: {
        flexDirection: 'row',
        paddingVertical: 7,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addParticipantHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    memberCheck: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomColor: HiFiColors.Label,
        borderBottomWidth: 1,
        paddingVertical: 15,
    },
    memberInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.Label,
    },
    confirmNewGroupHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    checkedUserContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: 80,
    },
    checkedUserAvatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    checkedUserCancel: {
        padding: 5,
        backgroundColor: HiFiColors.Accent,
        borderRadius: 50,
    },
    cameraButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: HiFiColors.Accent,
        marginRight: 10,
    },
    groupName: {
        paddingVertical: 10,
        borderColor: HiFiColors.Label,
        borderWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        color: HiFiColors.White,
    },
    groupDescription: {
        paddingVertical: 10,
        borderColor: HiFiColors.Label,
        borderWidth: 0,
        color: HiFiColors.White,
        textAlignVertical: 'top',
    },
});
