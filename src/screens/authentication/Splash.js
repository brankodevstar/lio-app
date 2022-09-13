import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Button } from 'react-native';
import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default Splash = () => {
    return (
        <ImageBackground source={require('../../../assets/images/background.png')}
            style={[globalStyles.container]}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={styles.logo} />
                <View style={{ alignItems: 'center', marginVertical: 8 }}>
                    <Text style={globalStyles.title}>Leaders for</Text>
                    <Text style={globalStyles.title}>India Organization</Text>
                </View>
                <Text style={[globalStyles.content, { marginVertical: 20 }]}>Some amazing tag line here lorem ipsum</Text>
                <View style={{ alignSelf: 'stretch', marginBottom: 100 }}>
                    <TouchableOpacity >
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={globalStyles.filledButton}
                        >
                            <Text style={globalStyles.buttonLabel}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: HiFiColors.Accent,
        opacity: 0.8,
        borderWidth: 1,
        borderColor: 'white',
    },
    logo: {
        width: 100,
        height: 100,
    }
})