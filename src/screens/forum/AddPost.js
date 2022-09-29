import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { ADMIN_API_URL } from '@env';
import { useSelector } from 'react-redux';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';
import Action from '../../service';

export default AddPost = ({ navigation }) => {
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const currentUser = useSelector(state => state.CurrentUser);
    const [activityIndicator, setActivityIndicator] = useState(false);

    const createFormData = (photo) => {
        const data = new FormData();
        data.append('file', {
            filename: photo?.assets[0].fileName,
            name: photo?.assets[0].fileName,
            type: photo?.assets[0].type,
            uri: photo?.assets[0].uri
        });
        return data;
    };

    const handleChoosePhoto = async () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response.assets) {
                setPhoto(response);
                fetch(`${ADMIN_API_URL}upload`, {
                    method: 'POST',
                    body: createFormData(response),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data'
                    },
                })
                    .then((response) => response.json())
                    .then((response) => {
                        setPhoto(response.filename);
                    })
                    .catch((error) => {
                        console.log('error', error);
                    });
            }
        })
    }

    const handleSave = async () => {
        setActivityIndicator(true);
        if (!description) {
            alert('Description is required!');
        }
        const data = {
            posterFirstName: currentUser.user.firstName,
            posterLastName: currentUser.user.lastName,
            posterAvatarUrl: currentUser.user.avatarUrl,
            description: description,
            imgUrl: photo,
            heartRate: 0,
            articleNumber: 0,
            createdDt: new Date(),
            comments: []
        }
        Action.forum.create(data).then(response => {
            if (response.data) {
                navigation.goBack();
            } else {
                alert('Save failed!');
            }
            setActivityIndicator(false);
        }).catch(error => {
            console.log('error ===>', error);
        })
        setActivityIndicator(false);
    }

    return (
        <ScrollView style={[globalStyles.container]}>
            {activityIndicator && <ActivityIndicator size="large" style={{ position: 'absolute', left: '50%', top: '50%' }} />}
            <View style={globalStyles.headerContainer}>
                <View style={{ position: 'absolute', left: 20 }}>
                    <MenuButton navigation={navigation} />
                </View>
                <View style={styles.closeButtonPos}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FeatherIcon name="x" size={15} color={HiFiColors.White} style={styles.closeButtonBack} />
                    </TouchableOpacity>
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Create Post</Text>
            </View>
            <View style={{ alignItems: 'center', paddingHorizontal: 15 }}>
                <Image source={{ uri: `${ADMIN_API_URL}upload/${photo}` }} style={styles.backImage} resizeMode="stretch" />
            </View>

            <View style={styles.postInputContainer}>
                <TouchableOpacity style={styles.chooseImageBtnBack} onPress={handleChoosePhoto}>
                    <Text style={globalStyles.boldLabel}>Choose Image</Text>
                </TouchableOpacity>
                <Text style={styles.titleLabel}>Write a Caption</Text>
                <TextInput
                    placeholder='Write Caption'
                    placeholderTextColor={HiFiColors.Label}
                    style={styles.inputBox}
                    multiline numberOfLines={10}
                    value={description}
                    onChangeText={(value) => setDescription(value)}
                />

                <TouchableOpacity style={styles.writeCaptionBack} onPress={handleSave}>
                    <Text style={globalStyles.boldLabel}>Post</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    closeButtonPos: {
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 65,
        top: 15
    },
    closeButtonBack: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: HiFiColors.AccentFade,

    },
    backImage: {
        width: '100%',
        height: 200,
        marginHorizontal: 15,
    },
    chooseImageBtnBack: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: HiFiColors.AccentFade,
        width: '40%',
        alignItems: 'center'
    },
    writeCaptionBack: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 40,
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center',
        marginTop: 10
    },
    titleLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 20,
        fontWeight: '700',
        fontFamily: fonts.primary,
    },
    postInputContainer: {
        padding: 15
    },
    inputBox: {
        backgroundColor: HiFiColors.AccentFade,
        borderColor: HiFiColors.Label,
        borderWidth: 1,
        color: HiFiColors.White,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        textAlignVertical: 'top'
    },
})