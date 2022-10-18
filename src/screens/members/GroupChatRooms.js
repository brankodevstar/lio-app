import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';

import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import Action from '../../service';

export default GroupChatRooms = ({route, navigation}) => {
    const currentUser = useSelector(state => state.CurrentUser);
    const myId = currentUser.user._id;
    const collectionName = 'group-chat';
    const [chatRooms, setChatRooms] = useState([]);
    const [users, setUsers] = useState([]);

    const onResult = querySnapshot => {
        querySnapshot.docs.sort((a, b) => {
            return Number.parseInt(a.data().createdAt.seconds) >
                Number.parseInt(b.data().createdAt.seconds)
                ? 1
                : -1;
        });
        const chatRoomsUni = [
            ...new Map(
                querySnapshot.docs.map(item => [item.data().chatRoom, item]),
            ).values(),
        ];
        setChatRooms(chatRoomsUni);
    };

    const onError = error => {};

    const goIntoChatRoom = (groupName, members) => {
        navigation.navigate('GroupChatScreen', {
            groupInfo: {
                name: groupName,
                description: '',
                members: members,
                allUsers: users,
            },
        });
    };

    useEffect(() => {
        Action.members
            .list({})
            .then(response => {
                setUsers(response.data);
                firestore()
                    .collection(collectionName)
                    .where('members', 'array-contains', myId)
                    .onSnapshot(onResult, onError);
            })
            .catch(err => {
                console.log('error ===> ', err);
            });
    }, []);

    return (
        <View style={globalStyles.container}>
            <View style={styles.chatBoxHeader}>
                <View style={{position: 'absolute', left: 20}}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Group Chats</Text>
            </View>
            <ScrollView
                style={styles.contentContainer}
                contentContainerStyle={{paddingBottom: 30}}>
                {chatRooms.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            goIntoChatRoom(
                                item.data().chatRoom,
                                item.data().members,
                            )
                        }>
                        <View style={styles.card}>
                            <Text style={globalStyles.boldLabel}>
                                {item.data().chatRoom}
                            </Text>
                            <Text
                                style={[
                                    globalStyles.boldSmallLabel,
                                    {marginLeft: 20},
                                ]}>
                                {item.data().members.length} members
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    chatBoxHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
    },
    contentContainer: {
        padding: 20,
    },
    card: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
