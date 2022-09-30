import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../styles/fonts';
import { sendSmsVerification, checkVerification } from '../../service/TwilioService';

export default Login = ({ navigation }) => {
    const [phone, setPhone] = useState("");
    const [activityIndicator, setActivityIndicator] = useState(false);

    // Function to validate phone number
    const validatePhoneNumber = () => {
        const argPhone = String(phone).replace(/[^\d]/g, "");
        if (argPhone.length > 10) {
            return String("+" + argPhone);
        } else if (argPhone.length == 10) {
            return String("+91" + argPhone);
        }
    };

    const signInUser = async () => {
        try {
            setActivityIndicator(true);
            // temp code
            const argPhone = validatePhoneNumber();
            navigation.navigate('OTPScreen', { phoneNumber: argPhone });
            // temp code

            // const argPhone = validatePhoneNumber();
            // if (await sendSmsVerification(argPhone)) {
            //     navigation.navigate('OTPScreen', { phoneNumber: argPhone });
            // } else {
            //     alert('Valid Failed!')
            // }
            setActivityIndicator(false);
        } catch (error) {
            console.log(error);
            setActivityIndicator(false);
        }
    }

    return (
        <View style={[globalStyles.container]}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={styles.logo} />
                <View>
                    <View style={{ alignItems: 'center', marginVertical: 8 }}>
                        <Text style={globalStyles.title}>Leaders for</Text>
                        <Text style={globalStyles.title}>India Organization</Text>
                    </View>
                </View>
                <View>
                    <Text style={[globalStyles.mediumBoldLabel, styles.loginLabel]}>Login</Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Mobile Number'
                    placeholderTextColor={HiFiColors.Label}
                    value={phone}
                    keyboardType="number-pad"
                    onChangeText={(value) => setPhone(value)} />
                {activityIndicator && <ActivityIndicator size="large" style={{ position: 'absolute' }} />}
                <View style={{ alignSelf: 'stretch', marginTop: 30, marginBottom: 100 }}>
                    <TouchableOpacity onPress={signInUser}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={globalStyles.filledButton}
                        >
                            <Text style={globalStyles.buttonLabel}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

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
    }
})