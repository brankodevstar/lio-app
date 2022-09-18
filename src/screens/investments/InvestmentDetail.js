import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';

export default InvestmentDetail = ({ navigation }) => {
    const [category, setCategory] = useState('overview');

    const renderWithCategory = () => {
        if (category == 'overview') {
            return (
                <View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.mediumBoldLabel, { marginBottom: 10 }]}>Short Summary</Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.mediumBoldLabel, { marginBottom: 10 }]}>Highlights</Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            • Total 1M users with 3,00,000 MAU, grown 10X in last 12 month
                        </Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            • Already closed $1M in funding from Angels and institutional investors
                        </Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            • India's first PATENTED technology over writing Google, Amazon and Uber.
                        </Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            • Strong B2C and B2B models and been followed from "Google" investment
                        </Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            • Winner of Elevate 2018 by Govt Karnataka and STAMP 2018 by Toyota Mobility
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.mediumBoldLabel, { marginBottom: 10 }]}>Investment Details</Text>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>Target</Text>
                            <TextInput value='₹500,000' style={styles.detailInfo} />
                        </View>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>Minimum</Text>
                            <TextInput value='₹20,000' style={styles.detailInfo} />
                        </View>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>Investment Raised</Text>
                            <TextInput value='₹800,000' style={styles.detailInfo} />
                        </View>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>Previous Rounds</Text>
                            <TextInput value='₹900,000' style={styles.detailInfo} />
                        </View>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>Stage</Text>
                            <TextInput value='Profitable' style={styles.detailInfo} />
                        </View>
                    </View>
                </View>
            )
        }
        if (category === 'detail') {
            return (
                <View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.mediumBoldLabel, { marginBottom: 10 }]}>The Business</Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.mediumBoldLabel, { marginBottom: 10 }]}>The Market</Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.mediumBoldLabel, { marginBottom: 10 }]}>Progress/ Proof</Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.mediumBoldLabel, { marginBottom: 10 }]}>Barriers to Entry</Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={[globalStyles.mediumBoldLabel, { marginBottom: 10 }]}>Furure</Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                </View>
            )
        }
        if (category === 'team') {
            return (
                <View>
                    <View style={styles.discriptionContainer}>
                        <View style={styles.memberInfoContainer}>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/b504/9cba/0981f8fcfd9ec7e8e7ee7ee376289075?Expires=1664150400&Signature=DnLv5TlHy7BoTr8kyTK0p4NN40Rlbqi3ak~6R66BZK-cE1c1YbpL8xDzOiqkFW0WSyyeylHgjP5cAKu7TbxUVdPOhaGIxrQ7YqIzDvNGKrU-wzQYV1mkFsDswc8CNey7lE6QdQ7PjO9fJkSkUSuiXzvPcSzhJ8C7ByZv97RtLUOpId-r7Ax3LsXSQBdRW4DBWR-MdK1Dwo6Tyr8EsHA4~zZQXp5cuGaMiZIChPrPkjwplhu8MGOo5acGEg4Ev82fU1hQul4ePghjoFq5IshNxCkoMb5TA3meRiS8evSmCYOLrtOFhx5uC-fmqGG1MqnsWfi6qbRYPgrZ2~tZqEuXxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.memberAvatar}
                            />
                            <Text style={globalStyles.boldLabel}>Mahendra Singh Dhoni</Text>
                            <Text style={styles.memberJob}>CEO & Head of Operations</Text>
                        </View>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <View style={styles.memberInfoContainer}>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/b1d4/5601/96d92048b7772c8e793e75ce5f76929d?Expires=1664150400&Signature=Y0296ryLo8Ni7HPtUm~aEA02m6c04u~b-6kksm43AQESSQX0Dg5QiTHF-76cyXhzGx2aTcz06WmtMjOu6Gg-RNBmP9R6V-VMFS1o5KjeFWoUoP6x2lrcC7QW5BDn5~tnVaHzSZCL4ptD8N2s3iQ6Wcv7FbMDqmBm0aEuSnoDeOCIefnSD6KTrZ1LXSx8IXMvEN81F3XkO8Pu6xh1Pej9vgxKu7KPJF947knE70pJweUwMx0UBhY3Tp961lvcRrQ9r5SWV51Xz0XPTynJfGkSWkGyF9tyd5j9yDizzzuvYCQZvASpEq3-3dichZsKyOpatcWxeM7dPzotwDs1aZ1aVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.memberAvatar}
                            />
                            <Text style={globalStyles.boldLabel}>Yuvraj Singh</Text>
                            <Text style={styles.memberJob}>Marketing Director</Text>
                        </View>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <View style={styles.memberInfoContainer}>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/3419/d131/83dcf94df7de835d2c7fcbc219e992d6?Expires=1664150400&Signature=drRAm9yHgjxl5MXcncfnrztaaNksGDACmnZjvEKefGJ2GPaShX9bQGHFemglkL9NZIiM-O0jOgsyI1Ciz0sXL~N03bUMOC~bPxoxNuHFUkbDKjgWYMrVWpl1kkt9CcYiof0MWPhfu~eTaAkOjaZRJdRjHLgUPrLHhcRr1Nui3TggjDW~8SbqXFFi6HTPOZEevFZ~Q3qpCPklCMbyz3kNw0Mp9daba7SPmo0iPSeHpRIb-EBDQcbIqh1IO5Cv8Pn9gMzd4h98saInUg1TEdgVn4UZwHwTzumjYj~Khc127s0Ze119hJ4SR0bv2JvnbU1vO2S6hz~oKXiazRQ8yFkHMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.memberAvatar}
                            />
                            <Text style={globalStyles.boldLabel}>Priyanka Bhatt</Text>
                            <Text style={styles.memberJob}>Supply Chain Director</Text>
                        </View>
                        <Text style={[globalStyles.label, styles.discription]}>
                            Both a live and online event,
                            Startup Grind is one of the most renowned
                            startup conferences in North America.
                            Powered by Microsoft for Startups, this event is a
                            great opportunity for large-scale and early-phase
                            startups to come together, meet investors, exchange ideas,
                            and participate in workshops.
                        </Text>
                    </View>
                </View>
            )
        }
        if (category === 'documents') {
            return (
                <View>
                    <View style={styles.discriptionContainer}>
                        <View style={styles.documentContainer}>
                            <View>
                                <Image
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/b194/69e5/971683f800daa2f1011d02deedc51b77?Expires=1664150400&Signature=aMgZtuGJ1os9oFplLTl5v0ztVNuzjqfXvIKuaC3xvqcu3ygv1kQsRf9hbPD3UCcR70X09b~TTANWDcaqMaurI7FfjWO1tEdBGomQeQT2SMd1PIj9E9jrK-e~56DlTFSHg3GmiVuVZlKAem9YjfDYRZPzXAn6McaovwValYvlTpc-JJa9sIe8rXS5-tLLhEfFMgneCi8Wcbi~It5PFH2Ji1XT41Kkpbi30MQah8HaHU9GJZUn2wuHB5dINeGGDlimYNnximzRiQJIjORdMYWV~FiD0zFPnOMBhaTCdjrDyoEV4YJuEmL4fHGF4D7WzpWfNg4N49a~9A285vvJ5U3ttg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                    style={styles.documentImage}
                                />
                                <FeatherIcon name='paperclip' size={25} color={HiFiColors.Label} style={styles.paperclip} />
                            </View>
                            <Text style={globalStyles.selectedBoldLabel}>Slide Deck</Text>
                        </View>
                        <View style={styles.documentContainer}>
                            <View>
                                <Image
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/b194/69e5/971683f800daa2f1011d02deedc51b77?Expires=1664150400&Signature=aMgZtuGJ1os9oFplLTl5v0ztVNuzjqfXvIKuaC3xvqcu3ygv1kQsRf9hbPD3UCcR70X09b~TTANWDcaqMaurI7FfjWO1tEdBGomQeQT2SMd1PIj9E9jrK-e~56DlTFSHg3GmiVuVZlKAem9YjfDYRZPzXAn6McaovwValYvlTpc-JJa9sIe8rXS5-tLLhEfFMgneCi8Wcbi~It5PFH2Ji1XT41Kkpbi30MQah8HaHU9GJZUn2wuHB5dINeGGDlimYNnximzRiQJIjORdMYWV~FiD0zFPnOMBhaTCdjrDyoEV4YJuEmL4fHGF4D7WzpWfNg4N49a~9A285vvJ5U3ttg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                    style={styles.documentImage}
                                />
                                <FeatherIcon name='paperclip' size={25} color={HiFiColors.Label} style={styles.paperclip} />
                            </View>
                            <Text style={globalStyles.selectedBoldLabel}>Start up India Cetificate</Text>
                        </View>
                        <View style={styles.documentContainer}>
                            <View>
                                <Image
                                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/b194/69e5/971683f800daa2f1011d02deedc51b77?Expires=1664150400&Signature=aMgZtuGJ1os9oFplLTl5v0ztVNuzjqfXvIKuaC3xvqcu3ygv1kQsRf9hbPD3UCcR70X09b~TTANWDcaqMaurI7FfjWO1tEdBGomQeQT2SMd1PIj9E9jrK-e~56DlTFSHg3GmiVuVZlKAem9YjfDYRZPzXAn6McaovwValYvlTpc-JJa9sIe8rXS5-tLLhEfFMgneCi8Wcbi~It5PFH2Ji1XT41Kkpbi30MQah8HaHU9GJZUn2wuHB5dINeGGDlimYNnximzRiQJIjORdMYWV~FiD0zFPnOMBhaTCdjrDyoEV4YJuEmL4fHGF4D7WzpWfNg4N49a~9A285vvJ5U3ttg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                    style={styles.documentImage}
                                />
                                <FeatherIcon name='paperclip' size={25} color={HiFiColors.Label} style={styles.paperclip} />
                            </View>
                            <Text style={globalStyles.selectedBoldLabel}>National Start up Award 2020</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }

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
                {
                    renderWithCategory()
                }
                <View style={styles.InvestNowButtonContainer}>
                    <TouchableOpacity>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={[globalStyles.filledButton, styles.reverseButton]}
                        >
                            <Text style={globalStyles.buttonLabel}>Invest Now</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
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
    discriptionContainer: {
        paddingVertical: 10,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1
    },
    discription: {
        marginBottom: 5
    },
    detailInfoContainer: {
        marginBottom: 5
    },
    detailInfo: {
        backgroundColor: HiFiColors.AccentFade,
        borderColor: HiFiColors.Label,
        borderWidth: 1,
        color: HiFiColors.White,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    InvestNowButtonContainer: {
        flex: 1,
        marginVertical: 15
    },
    reverseButton: {
        alignSelf: 'flex-end',
        width: '40%'
    },
    memberInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    memberAvatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 5
    },
    memberJob: {
        padding: 5,
        borderRadius: 20,
        backgroundColor: HiFiColors.Secondary,
        fontSize: 10,
        fontWeight: '600',
        color: HiFiColors.White,
        marginLeft: 5
    },
    documentContainer: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
    },
    documentImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 15,
    },
    paperclip: {
        position: 'absolute',
        left: 20,
        top: 20
    }
})