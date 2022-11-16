import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {Slider} from 'react-native-elements';
import MenuButton from '../../components/MenuButton';
import {SafeAreaView} from 'react-native';

export default Confirmation = ({navigation}) => {
    const [equity, setEquity] = useState(0);

    return (
        <SafeAreaView style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {justifyContent: 'center', borderBottomWidth: 0},
                ]}>
                <View style={{position: 'absolute', left: 20}}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Confirmation</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.confirmDialog}>
                    <Image
                        source={require('../../../assets/images/confirmation.png')}
                        style={styles.confirmationImage}
                    />
                    <Text style={styles.messageTitle}>Congratulations!</Text>
                    <Text
                        style={[
                            styles.messageTitle,
                            {marginVertical: 15, textAlign: 'center'},
                        ]}>
                        {' '}
                        Your investment in AirLift Technologies was successful!
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
        flex: 1,
    },
    confirmDialog: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageTitle: {
        fontSize: 24,
        fontWeight: '400',
        fontFamily: fonts.primary,
        color: HiFiColors.White,
    },
    confirmationImage: {
        width: 175,
        height: 175,
        marginVertical: 20,
    },
});
