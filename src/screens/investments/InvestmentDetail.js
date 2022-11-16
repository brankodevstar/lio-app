import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';
import Action from '../../service';
import {ADMIN_API_URL} from '../../../config';
import {SafeAreaView} from 'react-native';

export default InvestmentDetail = ({route, navigation}) => {
    const {id} = route.params;
    const [investment, setInvestment] = useState({});
    const [category, setCategory] = useState('overview');

    const getInvestments = async () => {
        const response = await Action.investments.getById(id);
        if (response.data) {
            setInvestment(response.data);
        }
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getInvestments();
        });
    }, [navigation]);

    const renderWithCategory = () => {
        if (category == 'overview') {
            return (
                <View>
                    <View style={styles.discriptionContainer}>
                        <Text
                            style={[
                                globalStyles.mediumBoldLabel,
                                {marginBottom: 10},
                            ]}>
                            Short Summary
                        </Text>
                        <Text style={[globalStyles.label, styles.discription]}>
                            {investment.overview?.shortSummary}
                        </Text>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text
                            style={[
                                globalStyles.mediumBoldLabel,
                                {marginBottom: 10},
                            ]}>
                            Highlights
                        </Text>
                        {investment.overview?.highlights.map((txt, index) => (
                            <Text
                                key={index}
                                style={[
                                    globalStyles.label,
                                    styles.discription,
                                ]}>
                                • {txt}
                            </Text>
                        ))}
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text
                            style={[
                                globalStyles.mediumBoldLabel,
                                {marginBottom: 10},
                            ]}>
                            Investment Details
                        </Text>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>Target</Text>
                            <Text style={styles.detailInfo}>
                                {investment.overview &&
                                    '₹' +
                                        investment.overview.investmentDetails.target.toString()}
                            </Text>
                        </View>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>Minimum</Text>
                            <Text style={styles.detailInfo}>
                                {investment.overview &&
                                    '₹' +
                                        investment.overview.investmentDetails.minimum.toString()}
                            </Text>
                        </View>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>
                                Investment Raised
                            </Text>
                            <Text style={styles.detailInfo}>
                                {investment.overview &&
                                    '₹' +
                                        investment.overview.investmentDetails.investmentRaised.toString()}
                            </Text>
                        </View>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>
                                Previous Rounds
                            </Text>
                            <Text style={styles.detailInfo}>
                                {investment.overview &&
                                    '₹' +
                                        investment.overview.investmentDetails.previousRound.toString()}
                            </Text>
                        </View>
                        <View style={styles.detailInfoContainer}>
                            <Text style={globalStyles.label}>Stage</Text>
                            <Text style={styles.detailInfo}>
                                {investment.overview?.investmentDetails.stage}
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }
        if (category === 'detail') {
            return (
                <View>
                    {investment.pitchDetails.map((item, index) => (
                        <View key={index} style={styles.discriptionContainer}>
                            <Text
                                style={[
                                    globalStyles.mediumBoldLabel,
                                    {marginBottom: 10},
                                ]}>
                                {item.title}
                            </Text>
                            <Text
                                style={[
                                    globalStyles.label,
                                    styles.discription,
                                ]}>
                                {item.description}
                            </Text>
                        </View>
                    ))}
                </View>
            );
        }
        if (category === 'team') {
            return (
                <View>
                    {investment.team.map((item, index) => (
                        <View key={index} style={styles.discriptionContainer}>
                            <View style={styles.memberInfoContainer}>
                                <Image
                                    source={{
                                        uri: `${ADMIN_API_URL}upload/${item.avatarUrl}`,
                                    }}
                                    style={styles.memberAvatar}
                                />
                                <Text style={globalStyles.boldLabel}>
                                    {item.name}
                                </Text>
                                <View
                                    style={{
                                        marginLeft: 10,
                                        borderRadius: 20,
                                        padding: 8,
                                        backgroundColor: HiFiColors.Secondary,
                                    }}>
                                    <Text style={styles.memberJob}>
                                        {item.roleName}
                                    </Text>
                                </View>
                            </View>
                            <Text
                                style={[
                                    globalStyles.label,
                                    styles.discription,
                                ]}>
                                {item.description}
                            </Text>
                        </View>
                    ))}
                </View>
            );
        }
        if (category === 'documents') {
            return (
                <View style={styles.discriptionContainer}>
                    {investment.documents.map((item, index) => (
                        <View key={index} style={styles.documentContainer}>
                            <View>
                                {/* <Image
                                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/b194/69e5/971683f800daa2f1011d02deedc51b77?Expires=1664150400&Signature=aMgZtuGJ1os9oFplLTl5v0ztVNuzjqfXvIKuaC3xvqcu3ygv1kQsRf9hbPD3UCcR70X09b~TTANWDcaqMaurI7FfjWO1tEdBGomQeQT2SMd1PIj9E9jrK-e~56DlTFSHg3GmiVuVZlKAem9YjfDYRZPzXAn6McaovwValYvlTpc-JJa9sIe8rXS5-tLLhEfFMgneCi8Wcbi~It5PFH2Ji1XT41Kkpbi30MQah8HaHU9GJZUn2wuHB5dINeGGDlimYNnximzRiQJIjORdMYWV~FiD0zFPnOMBhaTCdjrDyoEV4YJuEmL4fHGF4D7WzpWfNg4N49a~9A285vvJ5U3ttg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                        style={styles.documentImage}
                                    /> */}
                                <FeatherIcon
                                    name="paperclip"
                                    size={25}
                                    color={HiFiColors.Label}
                                    style={styles.paperclip}
                                />
                            </View>
                            <Text style={globalStyles.selectedBoldLabel}>
                                {item.documentName}
                            </Text>
                        </View>
                    ))}
                </View>
            );
        }
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView style={styles.container}>
                <ImageBackground
                    source={{
                        uri: `${ADMIN_API_URL}upload/${investment.imageUrl}`,
                    }}
                    resizeMode="stretch"
                    style={styles.bannerImage}>
                    <View
                        style={{
                            position: 'absolute',
                            top: 20,
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <MenuButton navigation={navigation} />
                        <View>
                            <TouchableOpacity
                                style={styles.headerIconBack}
                                onPress={() => {
                                    navigation.goBack();
                                }}>
                                <FeatherIcon
                                    name="arrow-left"
                                    size={20}
                                    color={HiFiColors.White}
                                    style={styles.headerIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* <View style={[styles.headerIconBack, {right: 60}]}>
                        <TouchableOpacity>
                            <FontAwesomeIcon
                                name="heart"
                                size={20}
                                color={HiFiColors.Primary}
                                style={styles.headerIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.headerIconBack, {right: 20}]}>
                        <TouchableOpacity>
                            <FeatherIcon
                                name="share-2"
                                size={20}
                                color={HiFiColors.White}
                                style={styles.headerIcon}
                            />
                        </TouchableOpacity>
                    </View> */}
                </ImageBackground>
                <View style={styles.content}>
                    <Text style={globalStyles.pageTitle}>
                        {investment.title}
                    </Text>
                    <View style={styles.nameContainer}>
                        {/* <Text
                        style={[styles.conferenceTag, globalStyles.smallLabel]}>
                        Conference
                    </Text> */}
                        <Text
                            style={[
                                globalStyles.smallLabel,
                                {marginRight: 10},
                            ]}>
                            {' '}
                            • {investment.location}{' '}
                        </Text>
                        <Text style={globalStyles.smallLabel}>
                            {' '}
                            {investment.closeDay}{' '}
                        </Text>
                    </View>
                    <ScrollView horizontal style={styles.categorySelect}>
                        <TouchableOpacity
                            style={[
                                styles.investmentCategory,
                                category === 'overview'
                                    ? {
                                          backgroundColor: HiFiColors.White,
                                          color: HiFiColors.Accent,
                                      }
                                    : {},
                            ]}
                            onPress={() => setCategory('overview')}>
                            <Text
                                style={[
                                    globalStyles.boldLabel,
                                    category === 'overview'
                                        ? {color: HiFiColors.Accent}
                                        : {},
                                ]}>
                                Overview
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.investmentCategory,
                                category === 'detail'
                                    ? {
                                          backgroundColor: HiFiColors.White,
                                          color: HiFiColors.Accent,
                                      }
                                    : {},
                            ]}
                            onPress={() => setCategory('detail')}>
                            <Text
                                style={[
                                    globalStyles.boldLabel,
                                    category === 'detail'
                                        ? {color: HiFiColors.Accent}
                                        : {},
                                ]}>
                                Pitch Details
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.investmentCategory,
                                category === 'team'
                                    ? {
                                          backgroundColor: HiFiColors.White,
                                          color: HiFiColors.Accent,
                                      }
                                    : {},
                            ]}
                            onPress={() => setCategory('team')}>
                            <Text
                                style={[
                                    globalStyles.boldLabel,
                                    category === 'team'
                                        ? {color: HiFiColors.Accent}
                                        : {},
                                ]}>
                                Team
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.investmentCategory,
                                category === 'documents'
                                    ? {
                                          backgroundColor: HiFiColors.White,
                                          color: HiFiColors.Accent,
                                      }
                                    : {},
                            ]}
                            onPress={() => setCategory('documents')}>
                            <Text
                                style={[
                                    globalStyles.boldLabel,
                                    category === 'documents'
                                        ? {color: HiFiColors.Accent}
                                        : {},
                                ]}>
                                Documents
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                    {renderWithCategory()}
                    <View style={styles.InvestNowButtonContainer}>
                        {/* <TouchableOpacity onPress={() => { navigation.navigate("InvestScreen") }}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={[globalStyles.filledButton, styles.reverseButton]}
                        >
                            <Text style={globalStyles.buttonLabel}>Invest Now</Text>
                        </LinearGradient>
                    </TouchableOpacity> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: HiFiColors.Accent,
    },
    bannerImage: {
        width: '100%',
        height: 250,
    },
    headerIconBack: {
        backgroundColor: HiFiColors.Accent,
        padding: 8,
        borderRadius: 100,
    },
    headerIcon: {},
    content: {
        paddingHorizontal: 20,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 25,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
    },
    conferenceTag: {
        borderRadius: 18,
        backgroundColor: HiFiColors.Primary,
        paddingHorizontal: 10,
        paddingVertical: 1,
        marginRight: 10,
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
        width: 100,
    },
    discriptionContainer: {
        paddingVertical: 10,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
    },
    discription: {
        marginBottom: 5,
    },
    detailInfoContainer: {
        marginBottom: 5,
    },
    detailInfo: {
        backgroundColor: HiFiColors.AccentFade,
        // borderColor: HiFiColors.Label,
        // borderWidth: 1,
        color: HiFiColors.White,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    InvestNowButtonContainer: {
        flex: 1,
        marginVertical: 15,
    },
    reverseButton: {
        alignSelf: 'flex-end',
        width: '40%',
    },
    memberInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    memberAvatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 5,
    },
    memberJob: {
        fontSize: 10,
        fontWeight: '600',
        color: HiFiColors.White,
        fontFamily: fonts.primary,
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
        margin: 10,
    },
});
