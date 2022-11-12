import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    BackHandler,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FilePickerManager from 'react-native-file-picker';

import globalStyles from '../styles/style';
import HiFiColors from '../styles/colors';
import fonts from '../styles/fonts';
import {ADMIN_API_URL} from '../../config';
import {Dimensions} from 'react-native';

export default ChatFooter = props => {
    const [message, setMessage] = useState('');
    const [attachFile, setAttachFile] = useState(null);
    const [activityIndicator, setActivityIndicator] = useState(false);

    const createFormData = attached => {
        const data = new FormData();
        data.append('file', {
            filename: attached.fileName,
            name: attached.fileName,
            type: attached.type,
            uri: attached.uri,
        });
        return data;
    };

    const handleChooseFile = async () => {
        FilePickerManager.showFilePicker(null, response => {
            setActivityIndicator(true);
            if (response.didCancel) {
                setActivityIndicator(false);
            } else if (response.error) {
                setActivityIndicator(false);
            } else {
                fetch(`${ADMIN_API_URL}upload`, {
                    method: 'POST',
                    body: createFormData(response),
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    .then(res => res.json())
                    .then(res => {
                        setAttachFile(res.filename);
                        props.onSend(res.originalname, res.filename);
                        setActivityIndicator(false);
                    })
                    .catch(error => {
                        setActivityIndicator(false);
                    });
            }
        });
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', function() {
            return true;
        }) 
    }, [])

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={handleChooseFile}>
                <FeatherIcon
                    name="plus-circle"
                    size={30}
                    color={HiFiColors.White}
                />
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TextInput
                    placeholder="Type your message"
                    placeholderTextColor={HiFiColors.Label}
                    style={styles.chatBox}
                    value={message}
                    onChangeText={value => {
                        setMessage(value);
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    props.onSend(message);
                    setMessage('');
                }}>
                <FeatherIcon
                    name="arrow-right-circle"
                    size={30}
                    color={HiFiColors.White}
                />
            </TouchableOpacity>
            {activityIndicator && (
                <ActivityIndicator
                    size="large"
                    style={{
                        position: 'absolute',
                        left: Dimensions.get('window').width / 2 - 20,
                        bottom: Dimensions.get('window').height / 2 - 20,
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    chatBox: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        color: HiFiColors.White,
    },
});
