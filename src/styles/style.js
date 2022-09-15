import { Dimensions, StyleSheet } from 'react-native';
import HiFiColors from './colors';
import fonts from './fonts';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: HiFiColors.Accent
    },
    title: {
        color: HiFiColors.White,
        fontSize: 18,
        fontWeight: '700',
        fontFamily: fonts.title,
    },
    content: {
        color: HiFiColors.White,
        fontFamily: fonts.primary,
        fontSize: 14,
        fontWeight: '600'
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
        fontWeight: '600'
    },
    pageTitle: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 36,
        fontWeight: '700',
        marginVertical: 10
    },
    tinyLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 10,
        fontWeight: '600'
    },
    smallLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 12,
        fontWeight: '500'
    },
    boldSmallLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 12,
        fontWeight: '600'
    },
    label: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 14,
        fontWeight: '500',
    },
    boldLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 14,
        fontWeight: '600'
    },
    selectedBoldLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 14,
        fontWeight: '800'
    },
    strongLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 14,
        fontWeight: '800'
    },
    mediumLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 18,
        fontWeight: '500'
    },
    mediumBoldLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 18,
        fontWeight: '600'
    },
    mediumStrongLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 18,
        fontWeight: '800'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade,
    },
})

export default globalStyles;