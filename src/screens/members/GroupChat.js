import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import ChatFooter from '../../components/ChatFooter';
import MenuButton from '../../components/MenuButton';

import firestore from "@react-native-firebase/firestore";
import moment from 'moment';

const inMessage = (messageData, index) => {
    return (
        <View style={styles.chatRow} key={index}>
            <Image source={{ uri: messageData.avatar }} style={styles.memberAvatar} />
            <View style={styles.messageContainer}>
                <Text style={globalStyles.boldLabel}>
                    {messageData.message}
                </Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={globalStyles.label}>{messageData.createdAt}</Text>
            </View>
        </View>
    )
}

const outMessage = (messageData, index) => (
    <View style={[styles.chatRow, { justifyContent: 'flex-end' }]} key={index}>
        <View style={[styles.timeContainer, { alignItems: 'flex-end' }]}>
            <Text style={globalStyles.label}>{messageData.createdAt}</Text>
        </View>
        <View style={styles.myMessageContainer}>
            <Text style={globalStyles.boldLabel}>
                {messageData.message}
            </Text>
        </View>
    </View>
)

export default GroupChat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [groupMembers, setGroupMembers] = useState([]);
    const scrollViewRef = useRef();

    const chatRoom = 'TestGroupChatRoom';
    const collectionName = 'group-chat';
    const phoneNumber = 'myPhoneNumber';

    const onResult = (querySnapshot) => {
        setGroupMembers(querySnapshot.docs[0].data().members);
        querySnapshot.docs.sort((a, b) => {
            return Number.parseInt(a.data().createdAt.seconds) > Number.parseInt(b.data().createdAt.seconds) ? 1 : -1
        })
        const msgs = querySnapshot.docs.map((doc) => ({
            _id: doc.id,
            from: doc.data().from,
            to: doc.data().to,
            createdAt: moment(doc.data().createdAt.toDate()).format("yyyy-MM-DD hh.mm"),
            message: doc.data().text,
            type: doc.data().from === phoneNumber ? 'out' : 'in',
            avatar: 'https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1665360000&Signature=EwJRzME-8e-7KFD9akULq89xkJ4Sm7w9NIxwft~sr9~mrNNrUcjZZ2wLnLMVeSUhIg06b6ohB2CUI-J7~PghgJHh33OphGLxcZ9YvcxQhZeBSTIiBJwHujy2u7rzA4EIasL-vbw9kyoL24x3bLb0bz7rd1osIjlwL-J95LOfjS1xLKxAeaJYIzVCzk-spGNTtX80SDFPdfvhHd6aoaZ9vN-sNMq-EAvfaithVyHvmPouHov8Wlm8W82h6Pjd1UR4JZIURsRIcrucDSk8HXQZprlYGJmOe4Qwwq1GSrRfukFTgv1niWkwXn8MygzWoF2SxhZRJJYisdBZfCYLdXeEow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        }));
        setMessages(msgs);
    }

    const onError = (error) => {

    }

    const onSend = (message) => {
        const messageData = {
            chatRoom: chatRoom,
            createdAt: new Date(),
            text: message,
            from: phoneNumber,
            to: '',
            members: groupMembers
        };
        firestore().collection(collectionName).add(messageData).then(() => {
            console.log('message sent!')
        })
    }

    useEffect(() => {
        firestore()
            .collection(collectionName)
            .where('chatRoom', '==', chatRoom)
            .where('members', 'array-contains', phoneNumber)
            // .orderBy('createdAt', 'asc')
            .onSnapshot(onResult, onError);
    }, [])

    return (
        <View style={globalStyles.container}>
            <View style={styles.chatBoxHeader}>
                <MenuButton navigation={navigation} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                </TouchableOpacity>
                <Image
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/5ee5/588c/e94d6cbe8148ccee458be196f341f4a5?Expires=1665360000&Signature=PrfXpTDg6kT7kLjr-jHCwhbDykBUhxvkXiFlvykAruKQg7tIW~sq396Zre2Ax5wJsf~ntsZ674L~aw02hff9ui7ALuSfEUUGjpDtfPRHjtECjgi5klnOSYkK~NK3iIbYY~s2BgmTVvZewHtxL9t4uZaqeXwEfgSvrXEL2J8Fv5SAmWY5UiZltjO1v-FvmvbHLERCjuJ2g~p2nWCOo7ndMqoxbatiFENdN7i4GKXHTREJmVitpO4AVDNICoNOM9O~u1qAiXl~wPOfgzOYH3kAFvg3AfvDfwCKYjMAbpre8gQdzVSNGgPNL4F42Dsi54eECV8fPE8X5Sz7g34407twMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                    style={styles.headerImage} />
                <View>
                    <Text style={styles.headerTitle}>The Entreprenurial Club</Text>
                    <Text style={globalStyles.label}>6 Members</Text>
                </View>
            </View>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                {
                    messages.map((item, index) => {
                        if (item.type === 'in') {
                            return inMessage(item, index)
                        } else {
                            return outMessage(item, index)
                        }
                    })
                }
            </ScrollView>
            <ChatFooter onSend={onSend} />
        </View>
    )
}

const styles = StyleSheet.create({
    chatBoxHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    headerIcon: {
        padding: 10,
    },
    headerImage: {
        width: 52,
        height: 52,
        borderRadius: 100,
        marginRight: 10
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: fonts.primary,
        color: HiFiColors.White
    },
    chatRow: {
        flexDirection: 'row',
        padding: 10
    },
    memberAvatar: {
        width: 32,
        height: 32,
        borderRadius: 50
    },
    messageContainer: {
        padding: 15,
        backgroundColor: HiFiColors.Label,
        borderTopEndRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 10,
        maxWidth: Dimensions.get("window").width - 120
    },
    myMessageContainer: {
        padding: 15,
        backgroundColor: HiFiColors.AccentFade,
        borderTopStartRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 10,
        maxWidth: Dimensions.get("window").width - 120
    },
    timeContainer: {
        flex: 1,
        paddingTop: 10,
    },

})