import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import globalStyles from '../../styles/style';
import { CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
    MaskSymbol,
    isLastFilledCell, 
} from 'react-native-confirmation-code-field';
import HiFiColors from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default OTP = () => {
    const CELL_COUNT = 6;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const renderCell = ({index, symbol, isFocused}) => {
        let textChild = null;

        if (symbol) {
            textChild = (
                <MaskSymbol
                    maskSymbol='-'
                    isLastFilledCell={isLastFilledCell({index, value})}>
                    {symbol}
                </MaskSymbol>
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

    return (
        <View style={[globalStyles.container]}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={styles.logo} />
                <View>
                    <Text>Verification Code Sent</Text>
                    <Text>A 6 digit verification code has been sent to your</Text>
                    <Text>registered phone number and email address.</Text>
                </View>
                <SafeAreaView style={styles.root}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={renderCell}
                    />
                </SafeAreaView>
                <View>
                    <Text>Haven't received a code?</Text>
                </View>
                <View style={{ alignSelf: 'stretch', marginTop: 30, marginBottom: 100 }}>
                    <TouchableOpacity >
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
        borderBottomWidth: 1,
        borderColor: HiFiColors.White,
      },
});