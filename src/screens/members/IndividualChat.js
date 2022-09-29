import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import ChatFooter from '../../components/ChatFooter';
import MenuButton from '../../components/MenuButton';
import moment from 'moment';
import { useSelector } from 'react-redux';
import firestore from "@react-native-firebase/firestore";

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

export default IndividualChat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const scrollViewRef = useRef();
    const chatRoom = ['b', 'a'].sort().join('-');
    const collectionName = "chat";
    const currentUser = useSelector(state => state.CurrentUser)

    const onResult = (querySnapshot) => {
        querySnapshot.docs.sort((a, b) => {
            return Number.parseInt(a.data().createdAt.seconds) > Number.parseInt(b.data().createdAt.seconds) ? 1 : -1
        })
        const msgs = querySnapshot.docs.map((doc) => ({
            _id: doc.id,
            from: doc.data().from,
            to: doc.data().to,
            createdAt: moment(doc.data().createdAt.toDate()).format("yyyy-MM-DD hh.mm"),
            message: doc.data().text,
            type: doc.data().from === 'a' ? 'out' : 'in'
        }));
        setMessages(msgs);
    }

    const onError = (error) => {

    }

    useEffect(() => {
        firestore()
            .collection(collectionName)
            .where('chatRoom', '==', chatRoom)
            // .orderBy('createdAt', 'asc')
            .onSnapshot(onResult, onError);
    }, []);

    const onSend = (message) => {
        const messageData = {
            chatRoom: chatRoom,
            createdAt: new Date(),
            text: message,
            from: 'a',
            to: 'b',
            read: 0
        }
        firestore().collection(collectionName).add(messageData).then(() => {
            console.log('message sent!')
        })
    }

    return (
        <View style={globalStyles.container}>
            <View style={styles.chatBoxHeader}>
                <MenuButton navigation={navigation} />
                <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
                    <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                </TouchableOpacity>
                <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1664150400&Signature=bwm-JDGhizn-nMTW8bmFxW16V2j6meR7vdxSoaPbXYzY72DA-hEVS7mMmbRSSvdJ-DnYGU4Kj0ySspbmJz6KEBDiHPlW2vI47s7~ibOyHTL4KOYMXIgpCWnNYbWSRplgAQXPhszaNW7EUd57QdueS2qYD171BhgU4YyuALpQAqk2WnAJ-LXtpF9SAsobphxdntqCkHvPhs2ncCqFXPW8ksBmG2AHpT3rmZQCFVEhpVbU-TbzEI8iUEgwwNIizUTOHAwKWdPM1u2NGhYneh934graF2EtanSl1Aa~RLkXaK6NCcBiYS5YIn21Z3VPg6Ovh5rBYYugIRHSi8vRdazgig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }} style={styles.headerImage} />
                <View>
                    <Text style={styles.headerTitle}>Michael Snow</Text>
                    <Text style={globalStyles.label}>@snowmichael09</Text>
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
        marginHorizontal: 10
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