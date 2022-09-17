import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import ChatFooter from '../../components/ChatFooter';

const messageData = [
    {
        type: 'in',
        avatar: 'https://s3-alpha-sig.figma.com/img/de0b/4d43/821302c0177644a0cc7bf49a40c944e4?Expires=1664150400&Signature=WtdJKdCcHtzLWUYjvs9oi4CsAuNcRwBhu9Y5Sc5zFEm17QxmRZpVWnrH09odse3UAPW4vpC~j3GHJPIxHCS5e7TWoXXub34hpm6bKN21ugsnYUi5XgceVAuKZF9rnTaohQ62-1-LfJT5rLTG4LFoRb8UAC6dZMy-Eh2PBW~NrIga90yvVIxMrVeaaI4hK1slg875Coekm7x8lys8CHToufL7k9I9IN~ePXbmgM838GlUmzcBhmpH5lffGMcC~-7Y3bGW~YLeqhSqo8KQjeY~8AAwWXbehxygkIN3oiQZ~0BJRKmhZhCTP0thByb5yfnl-WRJZaP-nSXl2ImLIeuOmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        message: 'Hey! Thank you for the coupons!',
        timestamp: '15.01'
    },
    {
        type: 'out',
        avatar: '821302c0177644a0cc7bf49a40c944e4.png',
        message: 'Your welcome!',
        timestamp: '15.03'
    },
    {
        type: 'out',
        avatar: '821302c0177644a0cc7bf49a40c944e4.png',
        message: 'Where are you at right now?',
        timestamp: '15.03'
    },
    {
        type: 'in',
        avatar: 'https://s3-alpha-sig.figma.com/img/f46f/e832/7fe1a020fdff606843aff1544b1b36b8?Expires=1664150400&Signature=GXrUlPwxN4mXKu~y5gma7xdWleah7DK0q62JPJY-ZQFOA6oaDWpYffQ0aDeXuW0ma-jvIlQWlGgHvqbFTy0Inyt29fXNhYiHaS0xoMSlPGQec1NfpZU-RWmXovbbu2lLm9PcVlDTEijkud3v-ZMG3KilJG8q3b1gf2rzu-ZluUWu03sgFdkoIcmDDKExaYOprcZx8aUmoKOLiWvrcpWiryYnT1Gci1ULHmYbYTpipYs5PvT~HG0sk2tTtcMt5cQI59o2lD1rDsU2WC07HNwAWWRTHVRHDzksKxzsXMu~SXX0bXqAnmRaetfa5ZUswgQZuni6ynWr2nmTwm4cfUbiHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        message: 'Thanks once again!',
        timestamp: '15.11'
    },
    {
        type: 'in',
        avatar: 'https://s3-alpha-sig.figma.com/img/f46f/e832/7fe1a020fdff606843aff1544b1b36b8?Expires=1664150400&Signature=GXrUlPwxN4mXKu~y5gma7xdWleah7DK0q62JPJY-ZQFOA6oaDWpYffQ0aDeXuW0ma-jvIlQWlGgHvqbFTy0Inyt29fXNhYiHaS0xoMSlPGQec1NfpZU-RWmXovbbu2lLm9PcVlDTEijkud3v-ZMG3KilJG8q3b1gf2rzu-ZluUWu03sgFdkoIcmDDKExaYOprcZx8aUmoKOLiWvrcpWiryYnT1Gci1ULHmYbYTpipYs5PvT~HG0sk2tTtcMt5cQI59o2lD1rDsU2WC07HNwAWWRTHVRHDzksKxzsXMu~SXX0bXqAnmRaetfa5ZUswgQZuni6ynWr2nmTwm4cfUbiHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        message: 'I’m at the office right now.',
        timestamp: '15.12'
    },
    {
        type: 'out',
        avatar: '821302c0177644a0cc7bf49a40c944e4.png',
        message: 'Your welcome!',
        timestamp: '15.03'
    },
    {
        type: 'out',
        avatar: '821302c0177644a0cc7bf49a40c944e4.png',
        message: 'So when do we make our next?',
        timestamp: '15.03'
    },
    {
        type: 'in',
        avatar: 'https://s3-alpha-sig.figma.com/img/f46f/e832/7fe1a020fdff606843aff1544b1b36b8?Expires=1664150400&Signature=GXrUlPwxN4mXKu~y5gma7xdWleah7DK0q62JPJY-ZQFOA6oaDWpYffQ0aDeXuW0ma-jvIlQWlGgHvqbFTy0Inyt29fXNhYiHaS0xoMSlPGQec1NfpZU-RWmXovbbu2lLm9PcVlDTEijkud3v-ZMG3KilJG8q3b1gf2rzu-ZluUWu03sgFdkoIcmDDKExaYOprcZx8aUmoKOLiWvrcpWiryYnT1Gci1ULHmYbYTpipYs5PvT~HG0sk2tTtcMt5cQI59o2lD1rDsU2WC07HNwAWWRTHVRHDzksKxzsXMu~SXX0bXqAnmRaetfa5ZUswgQZuni6ynWr2nmTwm4cfUbiHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        message: 'Thanks once again!',
        timestamp: '15.11'
    },
    {
        type: 'in',
        avatar: 'https://s3-alpha-sig.figma.com/img/f46f/e832/7fe1a020fdff606843aff1544b1b36b8?Expires=1664150400&Signature=GXrUlPwxN4mXKu~y5gma7xdWleah7DK0q62JPJY-ZQFOA6oaDWpYffQ0aDeXuW0ma-jvIlQWlGgHvqbFTy0Inyt29fXNhYiHaS0xoMSlPGQec1NfpZU-RWmXovbbu2lLm9PcVlDTEijkud3v-ZMG3KilJG8q3b1gf2rzu-ZluUWu03sgFdkoIcmDDKExaYOprcZx8aUmoKOLiWvrcpWiryYnT1Gci1ULHmYbYTpipYs5PvT~HG0sk2tTtcMt5cQI59o2lD1rDsU2WC07HNwAWWRTHVRHDzksKxzsXMu~SXX0bXqAnmRaetfa5ZUswgQZuni6ynWr2nmTwm4cfUbiHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        message: 'I’m at the office right now.',
        timestamp: '15.12'
    },
    {
        type: 'out',
        avatar: '821302c0177644a0cc7bf49a40c944e4.png',
        message: 'Your welcome!',
        timestamp: '15.03'
    },
    {
        type: 'out',
        avatar: '821302c0177644a0cc7bf49a40c944e4.png',
        message: 'So when do we make our next?',
        timestamp: '15.03'
    },

]

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
                <Text style={globalStyles.label}>{messageData.timestamp}</Text>
            </View>
        </View>
    )
}

const outMessage = (messageData, index) => (
    <View style={[styles.chatRow, { justifyContent: 'flex-end' }]} key={index}>
        <View style={[styles.timeContainer, { alignItems: 'flex-end' }]}>
            <Text style={globalStyles.label}>{messageData.timestamp}</Text>
        </View>
        <View style={styles.myMessageContainer}>
            <Text style={globalStyles.boldLabel}>
                {messageData.message}
            </Text>
        </View>
    </View>
)

export default GroupChat = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <View style={styles.chatBoxHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                </TouchableOpacity>
                <Image
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/5ee5/588c/e94d6cbe8148ccee458be196f341f4a5?Expires=1664150400&Signature=OCMMgvFUM09O2jrBbViM95EcZxlS1ekM6BYKEXkqBP5l-B5Pxlqb4ryRxy0fUEh3JAI2KRKFVPZLyMkeBqK9gwcEfatQQlWG6hRAz0sbTBRJXVfG~4XOaBMRiv3qMjMetYhPk6XHIyZ-ZD4tpAkHrLDd3OYAigFLDd6Gbo5KcT2s2fbTYIs-s~wQK8bXoy1AZoeXAxjcSDSA0aRmZBU5rgGN62L5XTZ1Q2b~UoiIf6ibEM0YSzajQ3QVChiZzO-UBUXg90l0BcjyjDN-eEW9hfOiQhJVEPUmVTFAcFPj0raQ1hBQNSJOcyqr6Q0HFGYqEOUiV0yHEga1-1izvyTe-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                    style={styles.headerImage} />
                <View>
                    <Text style={styles.headerTitle}>The Entreprenurial Club</Text>
                    <Text style={globalStyles.label}>6 Members</Text>
                </View>
            </View>
            <ScrollView>
                {
                    messageData.map((item, index) => {
                        if (item.type === 'in') {
                            return inMessage(item, index)
                        } else {
                            return outMessage(item, index)
                        }
                    })
                }
            </ScrollView>
            <ChatFooter />
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