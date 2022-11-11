import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    ActivityIndicator,
} from 'react-native';
import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Action from '../../service';
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../../redux/actions';

export default Splash = ({navigation}) => {
    const [loginFlag, setLoginFalg] = useState(true);
    const [activityIndicator, setActivityIndicator] = useState(true);

    const dispatch = useDispatch();

    checkUserLoginStatus = async () => {
        setActivityIndicator(true);
        const userData = await AsyncStorage.getItem('USER_DATA');
        if (userData) {
            Action.members
                .list({phone: userData})
                .then(response => {
                    if (response.data.length > 0) {
                        dispatch(
                            allActions.UserAction.setUser(response.data[0]),
                        );
                        storeData(response.data[0]);
                        setActivityIndicator(false);
                        setLoginFalg(true);
                        navigation.reset({
                            index: 0,
                            routes: [{name: 'Home'}],
                        });
                    } else {
                        setActivityIndicator(false);
                        setLoginFalg(false);
                    }
                })
                .catch(err => {
                    setActivityIndicator(false);
                    setLoginFalg(false);
                });
        } else {
            setActivityIndicator(false);
            setLoginFalg(false);
        }
    };

    const removeUserData = async () => {
        await AsyncStorage.removeItem('USER_DATA');
    };

    const goToLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'LoginScreen'}],
        });
    };

    const storeData = async userData => {
        try {
            await AsyncStorage.setItem('USER_DATA', userData.phone);
        } catch {}
    };

    useEffect(() => {
        // removeUserData();
        checkUserLoginStatus();
    }, []);
    return (
        <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={[globalStyles.container]}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={styles.logo}
                />
                <View style={{alignItems: 'center', marginVertical: 8}}>
                    <Text style={[globalStyles.title, { fontSize: 24 }]}>Leaders for</Text>
                    <Text style={[globalStyles.title, { fontSize: 24 }]}>India Organization</Text>
                </View>
                <Text style={[globalStyles.content, {marginVertical: 20}]}>
                    Invest | Innovate | Impact
                </Text>
                {activityIndicator && (
                    <ActivityIndicator
                        size="large"
                        style={{position: 'absolute'}}
                    />
                )}
                <View style={{alignSelf: 'stretch', marginBottom: 100}}>
                    {!loginFlag && (
                        <TouchableOpacity onPress={() => goToLogin()}>
                            <LinearGradient
                                start={{x: 0.0, y: 0.0}}
                                end={{x: 1.0, y: 1.0}}
                                colors={['#7B61FF', '#991450', '#40799D']}
                                style={globalStyles.filledButton}>
                                <Text style={globalStyles.buttonLabel}>
                                    Login
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: HiFiColors.Accent,
        opacity: 0.8,
    },
    logo: {
        width: 150,
        height: 150,
    },
});
