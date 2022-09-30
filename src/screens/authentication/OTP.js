import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import globalStyles from '../../styles/style';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
    MaskSymbol,
    isLastFilledCell,
} from 'react-native-confirmation-code-field';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { sendSmsVerification, checkVerification } from '../../service/TwilioService';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions'
import Action from '../../service';

export default OTP = ({ route, navigation }) => {
    const { phoneNumber } = route.params;
    const CELL_COUNT = 6;
    const [value, setValue] = useState('');
    const [activityIndicator, setActivityIndicator] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const dispatch = useDispatch();

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const renderCell = ({ index, symbol, isFocused }) => {
        let textChild = null;

        if (symbol) {
            textChild = (
                <Text
                    maskSymbol="-"
                    style={{ color: HiFiColors.Label }}
                    isLastFilledCell={isLastFilledCell({ index, value })}>

                    {symbol}
                </Text>
            );
        } else if (isFocused) {
            textChild = <Cursor />;
        }

        return (
            <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {textChild}
            </Text>
        );
    }

    const confirmCode = async () => {
        setActivityIndicator(true);

        // temp code
        Action.members.list({ phone: phoneNumber.replace('+', '') }).then(response => {
            if (response.data.length > 0) {
                dispatch(allActions.UserAction.setUser(response.data[0]));
                navigation.navigate('Home');
            } else {
                alert('Unregistered user!');
            }
            setActivityIndicator(false);
        }).catch((err) => {
            console.log('login error ===> ', err);
            setActivityIndicator(false);
        })
        // temp code

        // if (checkVerification(phoneNumber, value)) {
        //     Action.members.list({ phone: phoneNumber.replace('+', '') }).then(response => {
        //         if (response.data.length > 0) {
        //             dispatch(allActions.UserAction.setUser(reponse.data[0]));
        //             navigation.navigate('Home');
        //         } else {
        //             alert('Unregistered user!');
        //         }
        //         setActivityIndicator(false);
        //     }).catch((err) => {
        //         console.log('login error ===> ', err);
        //         setActivityIndicator(false);
        //     })
        // } else {
        //     alert('Valid Failed!')
        //     setActivityIndicator(false);
        // }
    }

    const resendCode = async () => {
        setActivityIndicator(true);
        if (await sendSmsVerification(phoneNumber)) {

        }
        setActivityIndicator(false);
    }

    return (
        <View style={[globalStyles.container]}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between', borderBottomWidth: 0 }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={styles.logo} />
                <View style={styles.verificationCodePart}>
                    <Text style={styles.sentText}>Verification Code Sent</Text>
                    <Text style={styles.description}>A 6 digit verification code has been sent to your</Text>
                    <Text style={styles.description}>registered phone number and email address.</Text>
                </View>
                <SafeAreaView style={styles.root}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        maskSymbol="*"
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={renderCell}
                    />
                </SafeAreaView>
                {activityIndicator && <ActivityIndicator size="large" style={{ position: 'absolute' }} />}
                <View style={{ alignSelf: 'stretch', marginTop: 30, }}>

                    <TouchableOpacity onPress={confirmCode}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={globalStyles.filledButton}
                        >
                            <Text style={globalStyles.buttonLabel}>Confirm</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.notReceivedText}>Haven't received a code?</Text>
                </View>
                <View style={{ alignSelf: 'stretch', marginTop: 30, marginBottom: 100 }}>
                    <TouchableOpacity onPress={resendCode}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={globalStyles.filledButton}
                        >
                            <Text style={globalStyles.buttonLabel}>Resend Code</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        borderWidth: 0,
        borderColor: 'white',
    },
    logo: {
        width: 100,
        height: 100,
    },
    cell: {
        width: 40,
        height: 50,
        lineHeight: 50,
        fontSize: 24,
        fontFamily: fonts.primary,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: HiFiColors.White,
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    focusCell: {
        borderColor: '#000',
    },
    codeFieldRoot: {
        marginTop: 20,
        paddingBottom: 30,
        borderBottomWidth: 0.5,
        borderColor: HiFiColors.White,
    },
    verificationCodePart: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    sentText: {
        color: HiFiColors.White,
        fontSize: 14,
        fontWeight: 'bold',
        fontWeight: '600',
        fontFamily: fonts.primary,
        marginBottom: 10,
    },
    description: {
        color: HiFiColors.White,
        fontSize: 12,
        marginBottom: 2,
        fontFamily: fonts.primary,
        marginTop: 2,
    },
    notReceivedText: {
        color: HiFiColors.White,
        fontSize: 12,
        marginTop: 60,
        fontFamily: fonts.primary,
    },
    headerIconBack: {
        position: 'absolute',
        top: 20,
        left: 20,
        borderWidth: 1,
        borderColor: 'red',
        margin: 10
    },
    headerIcon: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        padding: 5,
    },
});