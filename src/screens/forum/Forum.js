import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ActivityIndicator,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {ADMIN_API_URL} from '../../../config';
import moment from 'moment';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';

import Action from '../../service';

export default Forum = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const currentUser = useSelector(state => state.CurrentUser);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});
    const [comment, setComment] = useState('');
    const [activityIndicator, setActivityIndicator] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const getPosts = async () => {
        Action.forum
            .list()
            .then(response => {
                if (response.data) {
                    setPosts(response.data);
                }
            })
            .catch(error => {
                console.log('error ===>', error);
            });
    };

    const getById = async id => {
        const response = await Action.forum.getById(id);
        setSelectedPost(response.data);
    };

    const showCommentDialog = async id => {
        setModalVisible(true);
        getById(id);
    };

    const addComment = () => {
        setActivityIndicator(true);
        const data = selectedPost;
        const commentData = {
            commenterFirstName: currentUser.user.firstName,
            commenterLastName: currentUser.user.lastName,
            commenterEmailAddress: currentUser.user.email,
            commenterAvatarUrl: currentUser.user.avatarUrl,
            commentDescription: comment,
        };
        data.comments.push(commentData);
        Action.forum
            .update(data._id, data)
            .then(response => {
                if (response.data) {
                    getById(data._id);
                    setComment('');
                }
                setActivityIndicator(false);
            })
            .catch(error => {
                console.log('error ===> ', error);
                setActivityIndicator(false);
            });
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getPosts();
        });
    }, [navigation]);

    return (
        <View style={globalStyles.container}>
            <View
                style={[globalStyles.headerContainer, {borderBottomWidth: 0}]}>
                <View style={{position: 'absolute', left: 20}}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Forum</Text>
            </View>
            <ScrollView
                style={styles.scrollViewContainer}
                contentContainerStyle={{paddingBottom: 20}}>
                {posts.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.cardHeader}>
                            <View style={styles.userNameContainer}>
                                <Image
                                    source={{
                                        uri: `${ADMIN_API_URL}upload/${item.posterAvatarUrl}`,
                                    }}
                                    style={styles.avatarImage}
                                />
                                <Text style={styles.userNameLabel}>
                                    {item.posterFirstName +
                                        ' ' +
                                        item.posterLastName}
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        showCommentDialog(item._id);
                                    }}>
                                    <FeatherIcon
                                        name="more-vertical"
                                        size={20}
                                        color={HiFiColors.White}
                                    />
                                </TouchableOpacity>
                            </View>
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
                            <View style={{flexDirection: 'row'}}>
                                <FeatherIcon
                                    name="heart"
                                    size={15}
                                    color={HiFiColors.White}
                                    style={styles.labelSpace}
                                />
                                <Text
                                    style={[
                                        globalStyles.boldLabel,
                                        styles.labelSpace,
                                    ]}>
                                    {item.heartRate.toLocaleString()}
                                </Text>
                                <FeatherIcon
                                    name="message-circle"
                                    size={15}
                                    color={HiFiColors.White}
                                    style={styles.labelSpace}
                                />
                                <Text style={globalStyles.boldLabel}>
                                    {item.articleNumber.toLocaleString()}
                                </Text>
                            </View>
                            <Text style={styles.timeLabel}>
                                {moment
                                    .duration(
                                        moment(new Date()).diff(
                                            moment(item.createdDt),
                                        ),
                                    )
                                    .asHours() > 1
                                    ? Math.ceil(
                                          moment
                                              .duration(
                                                  moment(new Date()).diff(
                                                      moment(item.createdDt),
                                                  ),
                                              )
                                              .asHours(),
                                      ) + ' Hours ago'
                                    : Math.ceil(
                                          moment
                                              .duration(
                                                  moment(new Date()).diff(
                                                      moment(item.createdDt),
                                                  ),
                                              )
                                              .asMinutes(),
                                      ) + ' Minutes ago'}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddPostScreen')}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 1.0, y: 1.0}}
                        colors={['#2d3b48', '#162534']}
                        style={styles.addPostButtonContainer}>
                        <MaterialIcon
                            name="list-alt"
                            size={15}
                            color={HiFiColors.White}
                            style={{marginRight: 5}}
                        />
                        <Text style={globalStyles.strongLabel}>Add Post</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => setModalVisible(false)}
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
                                    {selectedPost?.comments?.map(
                                        (item, index) => (
                                            <View
                                                key={index}
                                                style={styles.commentsTag}>
                                                <Image
                                                    source={{
                                                        uri: `${ADMIN_API_URL}upload/${item.commenterAvatarUrl}`,
                                                    }}
                                                    style={styles.avatarImage}
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
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        paddingHorizontal: 15,
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
    avatarImage: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginRight: 10,
    },
    userNameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userNameLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 16,
        fontWeight: '700',
    },
    discriptionContainer: {
        marginVertical: 10,
    },
    cardImage: {
        borderRadius: 10,
        width: '100%',
        height: 150,
        marginBottom: 15,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    labelSpace: {
        marginRight: 10,
    },
    timeLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.Light,
        fontSize: 13,
        fontWeight: '400',
    },
    addPostButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        width: '40%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30,
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
});
