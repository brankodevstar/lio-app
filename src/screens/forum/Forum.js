import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';


export default Forum = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { borderBottomWidth: 0 }]}>
                <Text style={globalStyles.mediumStrongLabel}>Forum</Text>
            </View>
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.userNameContainer}>
                            <Image source={require('../../../assets/images/avatars/89054f02d25fd8b775c707f4239e6db3.png')} style={styles.avatarImage} />
                            <Text style={styles.userNameLabel}>Sansa Indira</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={toggleModal}>
                                <FeatherIcon name="more-vertical" size={20} color={HiFiColors.White} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={globalStyles.label}>Really glad to be a part of the wonderful team. Lorem ipsum dolor sit amet, consectetur ut labore et dolore😁😍</Text>
                    </View>
                    <Image source={require('../../../assets/images/forum/1e3c40fef25f3337704ef983162d8f7d.png')} style={styles.cardImage} />
                    <View style={styles.cardFooter}>
                        <View style={{ flexDirection: 'row' }}>
                            <FeatherIcon name="heart" size={15} color={HiFiColors.White} style={styles.labelSpace} />
                            <Text style={[globalStyles.boldLabel, styles.labelSpace]}>1.892</Text>
                            <FeatherIcon name="message-circle" size={15} color={HiFiColors.White} style={styles.labelSpace} />
                            <Text style={globalStyles.boldLabel}>72</Text>
                        </View>
                        <Text style={styles.timeLabel}>2 Hours ago</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.userNameContainer}>
                            <Image source={require('../../../assets/images/avatars/dacd64e8bd3d6a9717bbc6ddfd7a55f6.png')} style={styles.avatarImage} />
                            <Text style={styles.userNameLabel}>Sansa Indira</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={toggleModal}>
                                <FeatherIcon name="more-vertical" size={20} color={HiFiColors.White} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={globalStyles.label}>This has been one hell of a week. Lorem ipsum dolor sit amet, consectetur ut labore et dolore😁😍</Text>
                    </View>
                    <Image source={require('../../../assets/images/forum/cbda085b8c73d90125722ff265283537.png')} style={styles.cardImage} />
                    <View style={styles.cardFooter}>
                        <View style={{ flexDirection: 'row' }}>
                            <FeatherIcon name="heart" size={15} color={HiFiColors.White} style={styles.labelSpace} />
                            <Text style={[globalStyles.boldLabel, styles.labelSpace]}>1.892</Text>
                            <FeatherIcon name="message-circle" size={15} color={HiFiColors.White} style={styles.labelSpace} />
                            <Text style={globalStyles.boldLabel}>72</Text>
                        </View>
                        <Text style={styles.timeLabel}>2 Hours ago</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.userNameContainer}>
                            <Image source={require('../../../assets/images/avatars/dacd64e8bd3d6a9717bbc6ddfd7a55f6.png')} style={styles.avatarImage} />
                            <Text style={styles.userNameLabel}>Sansa Indira</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={toggleModal}>
                                <FeatherIcon name="more-vertical" size={20} color={HiFiColors.White} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.discriptionContainer}>
                        <Text style={globalStyles.label}>This has been one hell of a week. Lorem ipsum dolor sit amet, consectetur ut labore et dolore😁😍</Text>
                    </View>
                    <Image source={require('../../../assets/images/forum/cbda085b8c73d90125722ff265283537.png')} style={styles.cardImage} />
                    <View style={styles.cardFooter}>
                        <View style={{ flexDirection: 'row' }}>
                            <FeatherIcon name="heart" size={15} color={HiFiColors.White} style={styles.labelSpace} />
                            <Text style={[globalStyles.boldLabel, styles.labelSpace]}>1.892</Text>
                            <FeatherIcon name="message-circle" size={15} color={HiFiColors.White} style={styles.labelSpace} />
                            <Text style={globalStyles.boldLabel}>72</Text>
                        </View>
                        <Text style={styles.timeLabel}>2 Hours ago</Text>
                    </View>
                </View>
            </ScrollView>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("AddPostScreen")}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={['#2d3b48', '#162534']}
                        style={styles.addPostButtonContainer}
                    >
                        <MaterialIcon name="list-alt" size={15} color={HiFiColors.White} style={{ marginRight: 5 }} />
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
                    <Text style={styles.modalCommentTitle}>Comments</Text>
                    <ScrollView style={styles.commentScroll}>
                        <TouchableOpacity>
                            <TouchableWithoutFeedback>
                                <View>
                                    <View style={styles.commentsTag}>
                                        <Image source={require('../../../assets/images/avatars/07761a26bdc324932f3da15e966ebe97.png')} style={styles.avatarImage} />
                                        <Text style={globalStyles.boldLabel}>Arthur Black <Text style={[globalStyles.boldLabel, { color: HiFiColors.Primary }]}>@dudewayne9</Text> I will go there next week, is it worth it? maybe we can go there together haha.</Text>
                                    </View>
                                    <View style={styles.commentsTag}>
                                        <Image source={require('../../../assets/images/avatars/54bcd2f8d0c3783972547e2d7a723e91.png')} style={styles.avatarImage} />
                                        <Text style={globalStyles.boldLabel}>Jacob Howard <Text style={[globalStyles.boldLabel, { color: HiFiColors.Primary }]}>@john_flicks</Text> Haha isn’t that funny to you? share it to your mother and tell me her reaction!</Text>
                                    </View>
                                    <View style={styles.commentsTag}>
                                        <Image source={require('../../../assets/images/avatars/0aaf7f0b9c129b90a93d11ab0c521784.png')} style={styles.avatarImage} />
                                        <Text style={globalStyles.boldLabel}>Diane Richards <Text style={[globalStyles.boldLabel, { color: HiFiColors.Primary }]}>@smith12jackson</Text> Look at that! we must go there this weekend dude, come on!</Text>
                                    </View>
                                    <View style={styles.commentsTag}>
                                        <Image source={require('../../../assets/images/avatars/07761a26bdc324932f3da15e966ebe97.png')} style={styles.avatarImage} />
                                        <Text style={globalStyles.boldLabel}>Arthur Black <Text style={[globalStyles.boldLabel, { color: HiFiColors.Primary }]}>@dudewayne9</Text> I will go there next week, is it worth it? maybe we can go there together haha.</Text>
                                    </View>
                                    <View style={styles.commentsTag}>
                                        <Image source={require('../../../assets/images/avatars/54bcd2f8d0c3783972547e2d7a723e91.png')} style={styles.avatarImage} />
                                        <Text style={globalStyles.boldLabel}>Jacob Howard <Text style={[globalStyles.boldLabel, { color: HiFiColors.Primary }]}>@john_flicks</Text> Haha isn’t that funny to you? share it to your mother and tell me her reaction!</Text>
                                    </View>
                                    <View style={styles.commentsTag}>
                                        <Image source={require('../../../assets/images/avatars/0aaf7f0b9c129b90a93d11ab0c521784.png')} style={styles.avatarImage} />
                                        <Text style={globalStyles.boldLabel}>Diane Richards <Text style={[globalStyles.boldLabel, { color: HiFiColors.Primary }]}>@smith12jackson</Text> Look at that! we must go there this weekend dude, come on!</Text>
                                    </View>
                                    <View style={styles.commentsTag}>
                                        <Image source={require('../../../assets/images/avatars/07761a26bdc324932f3da15e966ebe97.png')} style={styles.avatarImage} />
                                        <Text style={globalStyles.boldLabel}>Arthur Black <Text style={[globalStyles.boldLabel, { color: HiFiColors.Primary }]}>@dudewayne9</Text> I will go there next week, is it worth it? maybe we can go there together haha.</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={styles.addCommentBack}>
                        <TouchableOpacity>
                            <MaterialCommunityIcon name="emoticon-happy-outline" size={30} color={HiFiColors.Label} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder='Write your comments'
                            placeholderTextColor={HiFiColors.Label}
                            style={styles.addCommentTextInput} />
                        <TouchableOpacity>
                            <FeatherIcon name="send" size={25} color={HiFiColors.Label} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        paddingHorizontal: 15
    },
    card: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: HiFiColors.AccentFade,
        marginVertical: 10
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.Label
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
        alignItems: 'center'
    },
    userNameLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 16,
        fontWeight: '700'
    },
    discriptionContainer: {
        marginVertical: 10
    },
    cardImage: {
        borderRadius: 10,
        width: '100%',
        height: 150,
        marginBottom: 15
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    labelSpace: {
        marginRight: 10
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
        bottom: 30
    },
    modalCommentTitle: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 20,
        fontWeight: '700'
    },
    modalContentContainer: {
        backgroundColor: HiFiColors.Accent,
        paddingVertical: 30,
        paddingHorizontal: 20,
        height: Dimensions.get("window").height / 5 * 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    commentScroll: {
        marginTop: 20,
    },
    commentsTag: {
        flexDirection: 'row',
        marginBottom: 15
    },
    addCommentBack: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    addCommentTextInput: {
        alignSelf: 'stretch',
        flex: 1,
        marginHorizontal: 10,
        color: HiFiColors.White
    },

})