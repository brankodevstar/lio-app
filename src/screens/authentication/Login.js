import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../styles/fonts';
import {
    sendSmsVerification,
    checkVerification,
} from '../../service/TwilioService';

export default Login = ({navigation}) => {
    const [phone, setPhone] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [activityIndicator, setActivityIndicator] = useState(false);

    // Function to validate phone number
    const validatePhoneNumber = () => {
        const argPhone = String(phone).replace(/[^\d]/g, '');
        if (argPhone.length > 10) {
            return String('+' + argPhone);
        } else if (argPhone.length == 10) {
            return String('+91' + argPhone);
        } else {
            alert('Please insert valid phone number.');
            return '';
        }
        return argPhone;
    };

    const signInUser = async () => {
        // temp code
        try {
            setActivityIndicator(true);
            const argPhone = validatePhoneNumber();
            if (argPhone) {
                navigation.navigate('OTPScreen', {phoneNumber: argPhone});
                setActivityIndicator(false);
            } else {
                setActivityIndicator(false);
            }
        } catch (error) {
            console.log(error);
            setActivityIndicator(false);
        }
        // temp code

        // try {
        //   setActivityIndicator(true);
        //   const argPhone = validatePhoneNumber();
        //   if (argPhone) {
        //     if (await sendSmsVerification(argPhone)) {
        //       navigation.navigate('OTPScreen', {phoneNumber: argPhone});
        //       setActivityIndicator(false);
        //     } else {
        //       alert('Valid Failed!');
        //       setActivityIndicator(false);
        //     }
        //   } else {
        //     setActivityIndicator(false);
        //   }
        // } catch (error) {
        //   console.log(error);
        //   setActivityIndicator(false);
        // }
    };

    return (
        <View style={[globalStyles.container]}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={styles.logo}
                />
                <View>
                    <View style={{alignItems: 'center', marginVertical: 8}}>
                        <Text style={globalStyles.title}>Leaders for</Text>
                        <Text style={globalStyles.title}>
                            India Organization
                        </Text>
                    </View>
                </View>
                <View>
                    <Text
                        style={[
                            globalStyles.mediumBoldLabel,
                            styles.loginLabel,
                        ]}>
                        Login
                    </Text>
                </View>
                <PhoneInput
                    defaultValue={phone}
                    defaultCode="IN"
                    onChangeFormattedText={text => {
                        setPhone(text);
                    }}
                    withShadow
                />
                {activityIndicator && (
                    <ActivityIndicator
                        size="large"
                        style={{position: 'absolute'}}
                    />
                )}
                <View
                    style={{
                        alignSelf: 'stretch',
                        marginTop: 30,
                        marginBottom: 100,
                    }}>
                    <TouchableOpacity onPress={signInUser}>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}}
                            end={{x: 1.0, y: 1.0}}
                            colors={['#991450', '#40799D']}
                            style={globalStyles.filledButton}>
                            <Text style={globalStyles.buttonLabel}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
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
    textInput: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 11,
        paddingHorizontal: 16,
        marginVertical: 3,
        borderRadius: 5,
        fontSize: 14,
        width: '80%',
        fontFamily: fonts.primary,
        backgroundColor: HiFiColors.AccentFade,
        color: HiFiColors.White,
    },
    title: {
        color: HiFiColors.White,
        fontSize: 18,
        fontFamily: fonts.title,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    loginLabel: {
        marginBottom: 20,
    },
});
