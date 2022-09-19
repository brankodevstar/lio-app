import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';

export default InvestmentDetail = ({ navigation }) => {
    const [category, setCategory] = useState('overview');

    return (
        <ScrollView style={styles.container}>
            <View>
                <ImageBackground
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/55aa/b93b/08747a6aa955f30bd62b90a0e5ffe4c1?Expires=1664150400&Signature=acJ7Biazgf-f9HIgynJ~cZZEvWztDY-enQbt1F9bpiTIMREIoVgXu6idj2hbRAFNGjpKywPwhPox7Rj3qNdymJHF9888wmAaCCrGLBDi2ZdzFj-PnR33cg54cVlWV88ET1UNclz3j2CCM9wpn~jA8-U48Nq9~5p5~tTAFR0ki0Lq3ABflBYyYW--P-6s8e-qHNyQSKLdH6tk4FaoReCyC-G-5ddVbTGQNlCHPIJlHZu7eYTXFXUrReNf4tVG9ZdIg9wjAmehOqIwMyCUKQP0asm08db~bT~guAk9Z1dza4ebJkeIEMufGCpo5W0r5haWEkdseSo-wVkBIUcyrCWGYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                    resizeMode="stretch"
                    style={styles.bannerImage} >
                    <View style={[styles.headerIconBack, { left: 20, }]}>
                        <TouchableOpacity>
                            <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.headerIconBack, { right: 60, }]}>
                        <TouchableOpacity>
                            <FontAwesomeIcon name="heart" size={20} color={HiFiColors.Primary} style={styles.headerIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.headerIconBack, { right: 20, }]}>
                        <TouchableOpacity>
                            <FeatherIcon name="share-2" size={20} color={HiFiColors.White} style={styles.headerIcon} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View >
            <View style={styles.content}>
                <Text style={globalStyles.pageTitle}>Startup Grind</Text>
                <View style={styles.nameContainer}>
                    <Text style={[styles.conferenceTag, globalStyles.smallLabel]}>Conference</Text>
                    <Text style={[globalStyles.smallLabel, { marginRight: 10 }]}> • Delhi, India </Text>
                    <Text style={globalStyles.smallLabel}> • Round close by 23 Sep, 22 </Text>
                </View>
                <ScrollView horizontal style={styles.categorySelect}>
                    <TouchableOpacity
                        style={[styles.investmentCategory, category === 'overview' ? { backgroundColor: HiFiColors.White, color: HiFiColors.Accent } : {}]}
                        onPress={() => setCategory('overview')}>
                        <Text style={[globalStyles.boldLabel, category === 'overview' ? { color: HiFiColors.Accent } : {}]}>Overview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.investmentCategory, category === 'detail' ? { backgroundColor: HiFiColors.White, color: HiFiColors.Accent } : {}]}
                        onPress={() => setCategory('detail')} >
                        <Text style={[globalStyles.boldLabel, category === 'detail' ? { color: HiFiColors.Accent } : {}]}>Pitch Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.investmentCategory, category === 'team' ? { backgroundColor: HiFiColors.White, color: HiFiColors.Accent } : {}]}
                        onPress={() => setCategory('team')}>
                        <Text style={[globalStyles.boldLabel, category === 'team' ? { color: HiFiColors.Accent } : {}]}>Team</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.investmentCategory, category === 'documents' ? { backgroundColor: HiFiColors.White, color: HiFiColors.Accent } : {}]}
                        onPress={() => setCategory('documents')}>
                        <Text style={[globalStyles.boldLabel, category === 'documents' ? { color: HiFiColors.Accent } : {}]}>Documents</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View >
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: HiFiColors.Accent,
    },
    bannerImage: {
        width: '100%',
        height: 250,
    },
    headerIconBack: {
        position: 'absolute',
        top: 20,
    },
    headerIcon: {
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 50,
        padding: 5,
    },
    content: {
        paddingHorizontal: 20
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 25,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1
    },
    conferenceTag: {
        borderRadius: 18,
        backgroundColor: HiFiColors.Primary,
        paddingHorizontal: 10,
        paddingVertical: 1,
        marginRight: 10
    },
    categorySelect: {
        paddingVertical: 10,
        flexDirection: 'row',
    },
    investmentCategory: {
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: HiFiColors.AccentFade,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        width: 100
    },
    InvestNowButtonContainer: {
        flex: 1,
        marginVertical: 15
    },
    reverseButton: {
        alignSelf: 'flex-end',
        width: '40%'
    },
})