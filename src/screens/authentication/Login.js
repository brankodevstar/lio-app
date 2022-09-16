import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../styles/fonts';

export default Login = ({ navigation }) => {
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
                <TextInput style={styles.textInput} placeholder='Mobile Number' placeholderTextColor='#fff' />
                <TextInput style={styles.textInput} placeholder='Password' placeholderTextColor='#fff' />
                <View style={{ alignSelf: 'stretch', marginTop: 30, marginBottom: 100 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('OTPScreen')}>
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
        lignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 11,
        paddingHorizontal: 16,
        marginVertical: 3,
        borderRadius: 5,
        fontSize: 14,
        width: '80%',
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