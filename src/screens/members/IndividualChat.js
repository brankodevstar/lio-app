import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import ChatFooter from '../../components/ChatFooter';
import MenuButton from '../../components/MenuButton';
import moment from 'moment';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {ADMIN_API_URL} from '../../../config';
import Action from '../../service';

const inMessage = (messageData, index) => {
    return (
        <View style={styles.chatRow} key={index}>
            <View style={styles.messageContainer}>
                <Text style={globalStyles.boldLabel}>
                    {messageData.message}
                </Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={globalStyles.label}>{messageData.createdAt}</Text>
            </View>
        </View>
    );
};

const outMessage = (messageData, index) => (
    <View style={[styles.chatRow, {justifyContent: 'flex-end'}]} key={index}>
        <View style={[styles.timeContainer, {alignItems: 'flex-end'}]}>
            <Text style={globalStyles.label}>{messageData.createdAt}</Text>
        </View>
        <View style={styles.myMessageContainer}>
            <Text style={globalStyles.boldLabel}>{messageData.message}</Text>
        </View>
    </View>
);

export default IndividualChat = ({route, navigation}) => {
    const {partner} = route.params;
    const partnerId = partner._id;
    const collectionName = 'chat';
    const currentUser = useSelector(state => state.CurrentUser);
    const myId = currentUser.user._id;
    const chatRoom = [myId, partnerId].sort().join('-');

    const [messages, setMessages] = useState([]);
    const scrollViewRef = useRef();

    const onResult = querySnapshot => {
        querySnapshot.docs.sort((a, b) => {
            return Number.parseInt(a.data().createdAt.seconds) >
                Number.parseInt(b.data().createdAt.seconds)
                ? 1
                : -1;
        });
        const msgs = querySnapshot.docs.map(doc => ({
            _id: doc.id,
            from: doc.data().from,
            to: doc.data().to,
            createdAt: moment(doc.data().createdAt.toDate()).format(
                'hh.mm',
            ),
            message: doc.data().text,
            type: doc.data().from === myId ? 'out' : 'in',
        }));
        setMessages(msgs);
    };

    const onError = error => {
        console.log('get chat data error ===> ', error);
    };

    const onSend = message => {
        const messageData = {
            chatRoom: chatRoom,
            createdAt: new Date(),
            text: message,
            from: myId,
            to: partnerId,
            read: 0,
        };
        firestore()
            .collection(collectionName)
            .add(messageData)
            .then(() => {
                console.log('message sent!');
            });
    };

    useEffect(() => {
        firestore()
            .collection(collectionName)
            .where('chatRoom', '==', chatRoom)
            .onSnapshot(onResult, onError);
    }, [route.params]);

    return (
        <View style={globalStyles.container}>
            <View style={styles.chatBoxHeader}>
                <MenuButton navigation={navigation} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FeatherIcon
                        name="arrow-left"
                        size={20}
                        color={HiFiColors.White}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
                <Image
                    source={{
                        uri: `${ADMIN_API_URL}upload/${partner.avatarUrl}`,
                    }}
                    style={styles.headerImage}
                />
                <View>
                    <Text style={styles.headerTitle}>
                        {partner.firstName + ' ' + partner.lastName}
                    </Text>
                    {/* <Text style={globalStyles.label}>{partner.email}</Text> */}
                </View>
            </View>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() =>
                    scrollViewRef.current.scrollToEnd({animated: true})
                }>
                {messages.map((item, index) => {
                    if (item.type === 'in') {
                        return inMessage(item, index);
                    } else {
                        return outMessage(item, index);
                    }
                })}
            </ScrollView>
            <ChatFooter onSend={onSend} />
        </View>
    );
};

const styles = StyleSheet.create({
    chatBoxHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    headerIcon: {
        padding: 10,
    },
    headerImage: {
        width: 52,
        height: 52,
        borderRadius: 100,
        marginHorizontal: 10,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: fonts.primary,
        color: HiFiColors.White,
    },
    chatRow: {
        flexDirection: 'row',
        padding: 10,
    },
    memberAvatar: {
        width: 32,
        height: 32,
        borderRadius: 50,
    },
    messageContainer: {
        padding: 15,
        backgroundColor: HiFiColors.Label,
        borderTopEndRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 10,
        maxWidth: Dimensions.get('window').width - 120,
    },
    myMessageContainer: {
        padding: 15,
        backgroundColor: HiFiColors.AccentFade,
        borderTopStartRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 10,
        maxWidth: Dimensions.get('window').width - 120,
    },
    timeContainer: {
        flex: 1,
        paddingTop: 10,
    },
});
