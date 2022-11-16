import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,
    ActivityIndicator,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';
import Action from '../../service';
import {ADMIN_API_URL} from '../../../config';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
// import Carousel from 'react-native-snap-carousel';

export default MemberInfo = ({navigation}) => {
    const [announcements, setAnnouncements] = useState([]);
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [featuredInvestments, setFeaturedInvestments] = useState([]);
    const currentUser = useSelector(state => state.CurrentUser);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState({});
    const [activityIndicator, setActivityIndicator] = useState(false);
    const [comment, setComment] = useState('');

    const getAnnouncements = async () => {
        const response = await Action.announcements.list();
        if (response.data) {
            setAnnouncements(response.data);
        }
    };

    const getFeaturedEvents = async () => {
        const response = await Action.events.getFeaturedEvents();
        if (response.data) {
            setFeaturedEvents(response.data);
        }
    };

    const getFeaturedInvestments = async () => {
        const response = await Action.investments.getFeaturedInvestments();
        if (response.data) {
            setFeaturedInvestments(response.data);
        }
    };

    const getById = async id => {
        const response = await Action.announcements.getById(id);
        setSelectedAnnouncement(response.data);
    };

    const handleLikeClick = async id => {
        const response = await Action.announcements.increaseLike(id);
        if (response.data) {
            getAnnouncements();
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const showCommentDialog = async id => {
        setModalVisible(true);
        getById(id);
    };

    const addComment = () => {
        setActivityIndicator(true);
        const data = selectedAnnouncement;
        const commentData = {
            commenterFirstName: currentUser.user.firstName,
            commenterLastName: currentUser.user.lastName,
            commenterEmailAddress: currentUser.user.email,
            commenterAvatarUrl: currentUser.user.avatarUrl,
            commentDescription: comment,
        };
        if (!data.comments.length > 0) {
            data.comments = [];
        }
        data.comments.push(commentData);
        Action.announcements
            .update(data._id, data)
            .then(response => {
                if (response.data) {
                    getById(data._id);
                    setComment('');
                }
                setActivityIndicator(false);
            })
            .catch(error => {
                setActivityIndicator(false);
            });
    };

    const timeCalculator = timestamp => {
        let minDiff = Math.ceil(
            moment
                .duration(moment(new Date()).diff(moment(timestamp)))
                .asMinutes(),
        );
        let dayDiff = Math.floor(minDiff / 1440);
        let remainderMins = minDiff % 1440;
        let hourDiff = Math.floor(remainderMins / 60);
        remainderMins = remainderMins % 60;
        minDiff = remainderMins;
        let timeStr = dayDiff !== 0 ? dayDiff + ' Days ago' : 'Today';
        //  : '') +
        // (hourDiff !== 0 ? hourDiff + 'Hours ' : '') +
        // minDiff +
        // 'Minutes ago';
        return timeStr;
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getAnnouncements();
            getFeaturedEvents();
            getFeaturedInvestments();
        });
    }, [navigation]);

    return (
        <SafeAreaView style={globalStyles.container}>
            <ScrollView style={globalStyles.container}>
                <View
                    style={[
                        globalStyles.headerContainer,
                        {justifyContent: 'space-between', flex: 1},
                    ]}>
                    <MenuButton navigation={navigation} />
                    <Text style={globalStyles.mediumStrongLabel}>
                        Leaders for India Organization
                    </Text>
                    <View style={styles.headerRightPart}>
                        {/* <TouchableOpacity onPress={() => { navigation.navigate("NavigationScreen") }}>
                        <MaterialIcons name="notifications-none" size={30} color={HiFiColors.White} />
                    </TouchableOpacity> */}
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Profile');
                            }}>
                            <Image
                                source={{
                                    uri: `${ADMIN_API_URL}upload/${currentUser.user.avatarUrl}`,
                                }}
                                style={styles.avtarStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <ScrollView horizontal style={{flexDirection: 'row'}}>
                        {featuredEvents.length > 0 &&
                            featuredEvents.map((event, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        navigation.navigate(
                                            'EventsDetailScreen',
                                            {
                                                id: event._id,
                                            },
                                        );
                                    }}>
                                    <ImageBackground
                                        source={{
                                            uri: `${ADMIN_API_URL}upload/${event.photos[0]}`,
                                        }}
                                        resizeMode="stretch"
                                        borderRadius={7}
                                        style={styles.bannerImage}>
                                        <LinearGradient
                                            start={{x: 0.5, y: 0.0}}
                                            end={{x: 0.5, y: 1.0}}
                                            colors={['#16253400', '#162534']}
                                            style={styles.bannerMask}>
                                            <View style={styles.innerPanel}>
                                                <View
                                                    style={[
                                                        styles.sportsCaption,
                                                        {
                                                            backgroundColor:
                                                                HiFiColors.LightGreen,
                                                            paddingHorizontal: 10,
                                                            paddingVertical: 2,
                                                        },
                                                    ]}>
                                                    <Text
                                                        style={
                                                            globalStyles.boldSmallLabel
                                                        }>
                                                        {event.category}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={
                                                        styles.sportsCaption
                                                    }>
                                                    <Text
                                                        style={[
                                                            globalStyles.mediumBoldLabel,
                                                            {
                                                                fontSize: 20,
                                                                fontWeight:
                                                                    '700',
                                                            },
                                                        ]}>
                                                        {event.title}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={[
                                                        styles.sportsCaption,
                                                    ]}>
                                                    <Text
                                                        style={
                                                            globalStyles.boldSmallLabel
                                                        }>
                                                        {
                                                            event.createdDt.split(
                                                                'T',
                                                            )[0]
                                                        }
                                                    </Text>
                                                </View>
                                            </View>
                                        </LinearGradient>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                    <View style={styles.featureSection}>
                        <Text
                            style={[
                                globalStyles.mediumBoldLabel,
                                {fontSize: 20, fontWeight: '400'},
                            ]}>
                            Featured Start Ups
                        </Text>
                        <ScrollView horizontal style={styles.imagePart}>
                            {featuredInvestments.length > 0 &&
                                featuredInvestments.map((investment, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.upCard}
                                        onPress={() =>
                                            navigation.navigate(
                                                'InvestmentDetailScreen',
                                                {
                                                    id: investment._id,
                                                },
                                            )
                                        }>
                                        <Image
                                            source={{
                                                uri: `${ADMIN_API_URL}upload/${investment.imageUrl}`,
                                            }}
                                            style={styles.upImage}
                                        />
                                        <Text
                                            style={
                                                globalStyles.mediumStrongLabel
                                            }>
                                            {investment.title.length > 10
                                                ? investment.title.substring(
                                                      0,
                                                      12,
                                                  ) + '...'
                                                : investment.title}
                                        </Text>
                                        <Text
                                            style={[
                                                globalStyles.label,
                                                {color: HiFiColors.Label},
                                            ]}>
                                            {investment.title.categoryName > 10
                                                ? investment.categoryName.substring(
                                                      0,
                                                      12,
                                                  ) + '...'
                                                : investment.categoryName}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                        </ScrollView>
                    </View>
                    <View style={styles.bottomSection}>
                        <Text
                            style={[
                                globalStyles.mediumBoldLabel,
                                {fontSize: 20, fontWeight: '400'},
                            ]}>
                            Announcements
                        </Text>
                        {announcements.map((item, index) => (
                            <View key={index} style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.userNameContainer}>
                                        <Image
                                            source={require('../../../assets/images/logo.png')}
                                            style={styles.avatarImage}
                                        />
                                        <Text style={styles.userNameLabel}>
                                            Leaders for India Organization
                                        </Text>
                                    </View>
                                    {/* <View>
                                    <TouchableOpacity>
                                        <FeatherIcon
                                            name="more-vertical"
                                            size={20}
                                            color={HiFiColors.White}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                                </View>
                                <View style={styles.discriptionContainer}>
                                    <Text style={globalStyles.label}>
                                        {item.description}
                                    </Text>
                                </View>
                                <Image
                                    source={{
                                        uri: `${ADMIN_API_URL}upload/${item.imgUrl}`,
                                    }}
                                    style={styles.cardImage}
                                />
                                <View style={styles.cardFooter}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                handleLikeClick(item._id)
                                            }>
                                            <FeatherIcon
                                                name="heart"
                                                size={20}
                                                color={HiFiColors.Gold}
                                                style={styles.labelSpace}
                                            />
                                        </TouchableOpacity>
                                        <Text
                                            style={[
                                                globalStyles.boldLabel,
                                                styles.labelSpace,
                                            ]}>
                                            {item.clickCount.toLocaleString()}
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => {
                                                showCommentDialog(item._id);
                                            }}>
                                            <FeatherIcon
                                                name="message-circle"
                                                size={20}
                                                color={HiFiColors.White}
                                                style={styles.labelSpace}
                                            />
                                        </TouchableOpacity>
                                        <Text style={globalStyles.boldLabel}>
                                            {item.comments.length.toLocaleString()}
                                        </Text>
                                    </View>
                                    <Text style={styles.timeLabel}>
                                        {timeCalculator(item.createdDt)}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <Modal
                    isVisible={isModalVisible}
                    onSwipeComplete={() => {
                        setModalVisible(false);
                        getAnnouncements();
                    }}
                    swipeDirection={['down']}
                    propagateSwipe={true}
                    style={globalStyles.modalContainer}>
                    <View style={styles.modalContentContainer}>
                        {activityIndicator && (
                            <ActivityIndicator
                                size="large"
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                }}
                            />
                        )}
                        <Text style={styles.modalCommentTitle}>Comments</Text>
                        <ScrollView style={styles.commentScroll}>
                            <TouchableOpacity>
                                <TouchableWithoutFeedback>
                                    <View>
                                        {selectedAnnouncement?.comments?.map(
                                            (item, index) => (
                                                <View
                                                    key={index}
                                                    style={styles.commentsTag}>
                                                    <Image
                                                        source={{
                                                            uri: `${ADMIN_API_URL}upload/${item.commenterAvatarUrl}`,
                                                        }}
                                                        style={
                                                            styles.commenterAvartar
                                                        }
                                                    />
                                                    <View>
                                                        <View
                                                            style={{
                                                                flexDirection:
                                                                    'row',
                                                            }}>
                                                            <Text
                                                                style={
                                                                    globalStyles.boldLabel
                                                                }>
                                                                {item.commenterFirstName +
                                                                    ' ' +
                                                                    item.commenterLastName}
                                                            </Text>
                                                            <Text
                                                                style={[
                                                                    globalStyles.boldLabel,
                                                                    {
                                                                        color: HiFiColors.Primary,
                                                                        marginLeft: 10,
                                                                    },
                                                                ]}>
                                                                {
                                                                    item.commenterEmailAddress
                                                                }
                                                            </Text>
                                                        </View>
                                                        <Text
                                                            style={
                                                                globalStyles.boldLabel
                                                            }>
                                                            {
                                                                item.commentDescription
                                                            }
                                                        </Text>
                                                    </View>
                                                </View>
                                            ),
                                        )}
                                    </View>
                                </TouchableWithoutFeedback>
                            </TouchableOpacity>
                        </ScrollView>
                        <View style={styles.addCommentBack}>
                            <TouchableOpacity>
                                <MaterialCommunityIcon
                                    name="emoticon-happy-outline"
                                    size={30}
                                    color={HiFiColors.Label}
                                />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="Write your comments"
                                placeholderTextColor={HiFiColors.Label}
                                value={comment}
                                onChangeText={value => {
                                    setComment(value);
                                }}
                                style={styles.addCommentTextInput}
                            />
                            <TouchableOpacity onPress={addComment}>
                                <FeatherIcon
                                    name="send"
                                    size={25}
                                    color={HiFiColors.Label}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerRightPart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avtarStyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: 10,
    },
    contentContainer: {
        padding: 20,
    },
    imageSection: {},
    bannerImage: {
        width: Dimensions.get('window').width - 40,
        height: 250,
    },
    bannerMask: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerPanel: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    sportsCaption: {
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    featureSection: {
        paddingVertical: 20,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: HiFiColors.AccentFade,
    },
    imagePart: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    upCard: {
        paddingHorizontal: 10,
    },
    upImage: {
        width: 120,
        height: 120,
        marginBottom: 5,
        borderRadius: 7,
    },
    discriptionContainer: {
        marginVertical: 20,
    },
    cardImage: {
        borderRadius: 10,
        width: '100%',
        height: 120,
        marginBottom: 15,
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.Light,
        fontSize: 13,
        fontWeight: '400',
    },
    labelSpace: {
        marginRight: 10,
    },
    bottomSection: {
        marginTop: 20,
    },
    card: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: HiFiColors.AccentFade,
        marginVertical: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.Label,
    },
    userNameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    userNameLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 16,
        fontWeight: '700',
    },
    modalCommentTitle: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 20,
        fontWeight: '700',
    },
    modalContentContainer: {
        backgroundColor: HiFiColors.Accent,
        paddingVertical: 30,
        paddingHorizontal: 20,
        height: (Dimensions.get('window').height / 5) * 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    commentScroll: {
        marginTop: 20,
    },
    commentsTag: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    addCommentBack: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    addCommentTextInput: {
        alignSelf: 'stretch',
        flex: 1,
        marginHorizontal: 10,
        color: HiFiColors.White,
    },
    commenterAvartar: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginRight: 10,
    },
});
