import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
    Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SelectList from 'react-native-dropdown-select-list';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-native-modal';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import PhoneInput from 'react-native-phone-number-input';

import {ADMIN_API_URL} from '../../../config';
import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {TextInput} from 'react-native-gesture-handler';
import MenuButton from '../../components/MenuButton';
import allActions from '../../redux/actions';
import Action from '../../service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default AccountInfo = ({navigation}) => {
    const [selected, setSelected] = useState('');
    const data = [{key: '1', value: 'Jammu & Kashmir'}];
    const currentUser = useSelector(state => state.CurrentUser);
    const [user, setUser] = useState(currentUser.user);
    const [activityIndicator, setActivityIndicator] = useState(false);
    const [modalActivitiIndicator, setModalActivityIndicator] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();

    const handleUpdateUser = async () => {
        console.log('save user data ====> ', user);

        setActivityIndicator(true);
        Action.members
            .update(user._id, user)
            .then(response => {
                if (response.data) {
                    dispatch(allActions.UserAction.setUser(response.data));
                    storeData(response.data);
                    alert('Save success!');
                }
                setActivityIndicator(false);
            })
            .catch(err => {
                setActivityIndicator(false);
            });
    };

    const storeData = async userData => {
        try {
            await AsyncStorage.setItem('USER_DATA', userData.phone);
        } catch {}
    };

    const createFormData = photo => {
        const data = new FormData();
        data.append('file', {
            filename: photo?.assets[0].fileName,
            name: photo?.assets[0].fileName,
            type: photo?.assets[0].type,
            uri: photo?.assets[0].uri,
        });
        return data;
    };

    const setPickerResponse = response => {
        setModalActivityIndicator(true);
        if (response.assets) {
            fetch(`${ADMIN_API_URL}upload`, {
                method: 'POST',
                body: createFormData(response),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(response => response.json())
                .then(res => {
                    setModalActivityIndicator(false);
                    setUser({...user, avatarUrl: res.filename});
                })
                .catch(error => {
                    setModalActivityIndicator(false);
                });
        } else {
            setModalActivityIndicator(false);
        }
    };

    const onImageLibraryPress = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        };
        launchImageLibrary(options, setPickerResponse);
    };

    const onCameraPress = () => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            cameraType: 'front',
        };
        launchCamera(options, setPickerResponse);
    };

    return (
        <View style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {borderBottomWidth: 0, justifyContent: 'flex-start'},
                ]}>
                <MenuButton navigation={navigation} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <FeatherIcon
                        name="arrow-left"
                        size={20}
                        color={HiFiColors.White}
                        style={styles.headerIcon}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Account Information</Text>
            <ScrollView style={{paddingBottom: 30}}>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>
                            Profile Picture
                        </Text>
                        <View style={{width: 120}}>
                            <Image
                                source={{
                                    uri: `${ADMIN_API_URL}upload/${user.avatarUrl}`,
                                }}
                                style={styles.userAvatar}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(true);
                                }}
                                style={{
                                    backgroundColor: HiFiColors.AccentFade,
                                    padding: 10,
                                    borderRadius: 100,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                }}>
                                <FeatherIcon
                                    name="camera"
                                    size={25}
                                    style={{
                                        color: HiFiColors.Label,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}></View>
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>First Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.firstName}
                            onChangeText={value =>
                                setUser({...user, firstName: value})
                            }
                        />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Last Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.lastName}
                            onChangeText={value =>
                                setUser({...user, lastName: value})
                            }
                        />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>
                            Email Address
                        </Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.email}
                            onChangeText={value =>
                                setUser({...user, email: value})
                            }
                        />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>
                            Mobile Number
                        </Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.phone}
                            onChangeText={value =>
                                setUser({...user, phone: value})
                            }
                        />
                        {/* <PhoneInput
                            value={user.phone}
                            // defaultValue={user.phone}
                            // defaultCode="IN"
                            onChangeFormattedText={value => {
                                setUser({...user, phone: value});
                            }}
                            containerStyle={{
                                backgroundColor: HiFiColors.AccentFade,
                                borderRadius: 5,
                                color: HiFiColors.White,
                                paddingVertical: 0,
                                width: Dimensions.get('window').width - 40,
                                marginTop: 10,
                            }}
                            textContainerStyle={{
                                backgroundColor: HiFiColors.AccentFade,
                                borderRadius: 5,
                                paddingVertical: 0,
                            }}
                            codeTextStyle={{
                                color: HiFiColors.White,
                            }}
                            textInputStyle={{
                                color: HiFiColors.White,
                            }}
                            withShadow
                        /> */}
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>City</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.city}
                            onChangeText={value =>
                                setUser({...user, city: value})
                            }
                        />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Gender</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.gender}
                            onChangeText={value =>
                                setUser({...user, gender: value})
                            }
                        />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>Birthday</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={user.birthday}
                            onChangeText={value =>
                                setUser({...user, birthday: value})
                            }
                        />
                    </View>
                </View>
                {/* <View style={styles.border}></View>
                <Text style={styles.title}>Update Password</Text>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>
                            Current Password
                        </Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Current Password"
                            placeholderTextColor={HiFiColors.Label}
                        />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>
                            New Password
                        </Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="New Password"
                            placeholderTextColor={HiFiColors.Label}
                        />
                    </View>
                </View>
                <View style={styles.infoPanel}>
                    <View style={styles.unitPanel}>
                        <Text style={globalStyles.smallLabel}>
                            Confirm New Password
                        </Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Confirm New Password"
                            placeholderTextColor={HiFiColors.Label}
                        />
                    </View>
                </View> */}
                <View
                    style={{
                        marginTop: 20,
                        marginBottom: 30,
                        paddingHorizontal: 20,
                    }}>
                    <TouchableOpacity onPress={handleUpdateUser}>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}}
                            end={{x: 1.0, y: 1.0}}
                            colors={['#991450', '#40799D']}
                            style={[
                                globalStyles.filledButton,
                                {width: '100%'},
                            ]}>
                            <Text style={globalStyles.buttonLabel}>
                                Update Account Details
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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

            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['down']}
                propagateSwipe={true}
                style={globalStyles.modalContainer}>
                <View style={styles.modalContentContainer}>
                    {modalActivitiIndicator && (
                        <ActivityIndicator
                            size="large"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                            }}
                        />
                    )}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 40,
                        }}>
                        <TouchableOpacity
                            style={styles.modalButtonBack}
                            onPress={onImageLibraryPress}>
                            <FeatherIcon
                                name="image"
                                color={HiFiColors.Label}
                                size={30}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalButtonBack}
                            onPress={onCameraPress}>
                            <FeatherIcon
                                name="camera"
                                color={HiFiColors.Label}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    headerIconBack: {
        position: 'absolute',
    },
    headerIcon: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        padding: 5,
    },
    title: {
        color: HiFiColors.White,
        fontSize: 24,
        marginLeft: 20,
        fontFamily: fonts.primary,
        marginBottom: 20,
    },
    infoPanel: {
        paddingHorizontal: 20,
    },
    userAvatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 15,
    },
    unitPanel: {
        marginTop: 20,
    },
    inputBox: {
        paddingLeft: 10,
        marginTop: 10,
        borderRadius: 5,
        color: HiFiColors.White,
        backgroundColor: HiFiColors.AccentFade,
    },
    phoneInputPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    regionSelect: {
        backgroundColor: HiFiColors.AccentFade,
        width: 100,
        marginTop: 10,
        borderWidth: 0,
    },
    inputStyle: {
        color: HiFiColors.White,
    },
    border: {
        borderWidth: 0.2,
        borderColor: HiFiColors.Label,
        width: '95%',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 50,
    },
    modalContentContainer: {
        backgroundColor: HiFiColors.Accent,
        paddingVertical: 30,
        paddingHorizontal: 20,
        height: (Dimensions.get('window').height / 5) * 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalButtonBack: {
        backgroundColor: HiFiColors.AccentFade,
        padding: 10,
        borderRadius: 100,
    },
});
