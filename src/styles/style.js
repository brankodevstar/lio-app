import { Dimensions, StyleSheet } from 'react-native';
import HiFiColors from './colors';
import fonts from './fonts'

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: HiFiColors.Accent
    },
    title: {
        color: HiFiColors.White,
        fontSize: 18,
        fontFamily: fonts.title,
    },
    content: {
        color: HiFiColors.White,
        fontFamily: fonts.primary,
        fontSize: 14,
    },
    filledButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 76,
        width: "80%",
    },
    buttonLabel: {
        color: HiFiColors.White,
        fontSize: 12,
    }
})

export default globalStyles;