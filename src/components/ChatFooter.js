import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from '../styles/style';
import HiFiColors from '../styles/colors';
import fonts from '../styles/fonts';


export default ChatFooter = (props) => {
    const [message, setMessage] = useState('');

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity>
                <FeatherIcon name='plus-circle' size={30} color={HiFiColors.White} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <TextInput
                    placeholder='Type your message'
                    placeholderTextColor={HiFiColors.Label}
                    style={styles.chatBox}
                    value={message}
                    onChangeText={(value) => { setMessage(value) }}
                />
            </View>
            <TouchableOpacity onPress={() => { props.onSend(message); setMessage('') }}>
                <FeatherIcon name='arrow-right-circle' size={30} color={HiFiColors.White} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    chatBox: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        color: HiFiColors.White
    }
})