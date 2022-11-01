import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';
import {ADMIN_API_URL} from '../../../config';
import Action from '../../service';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';

export default MemberInfo = ({route, navigation}) => {
    const {id} = route.params;
    const [user, setUser] = useState({});

    getUserData = async () => {
        const response = await Action.members.getById(id);
        if (response.data) {
            console.log('user data ===========> ', response.data);
            setUser(response.data);
        }
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getUserData();
        });
    }, [navigation]);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <View style={{position: 'absolute', left: 20}}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Member Info</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.memberProfileContainer}>
                    <View style={styles.memberMainInfo}>
                        <Image
                            source={{
                                uri: `${ADMIN_API_URL}upload/${user?.avatarUrl}`,
                            }}
                            style={styles.memberAvatar}
                        />
                        <Text
                            style={[
                                globalStyles.mediumStrongLabel,
                                {marginTop: 5},
                            ]}>
                            {user.firstName + ' ' + user.lastName}
                        </Text>
                        <Text
                            style={[
                                globalStyles.boldSmallLabel,
                                {marginVertical: 5},
                            ]}>
                            {user.caption}
                        </Text>
                        <Text style={globalStyles.boldLabel}>
                            {user.company}
                        </Text>
                    </View>
                    <View style={styles.memberDetailInfo}>
                        <View>
                            <View>
                                <Text style={globalStyles.boldLabel}>
                                    Member ID
                                </Text>
                                <Text style={globalStyles.boldSmallLabel}>
                                    {user._id}
                                </Text>
                            </View>
                            <View style={{marginVertical: 15}}>
                                <Text style={globalStyles.boldLabel}>
                                    Member Since
                                </Text>
                                <Text style={globalStyles.boldSmallLabel}>
                                    {moment(user.createdDt).format(
                                        'yyyy-MM-DD',
                                    )}
                                </Text>
                            </View>
                            <View>
                                <Text style={globalStyles.boldLabel}>
                                    Location
                                </Text>
                                <Text style={globalStyles.boldSmallLabel}>
                                    {user.city}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../../assets/images/logo.png')}
                            style={styles.memberDetailImage}
                        />
                    </View>
                    {/* <View style={styles.companyInfoContainer}>
                        <Text
                            style={[
                                globalStyles.strongLabel,
                                {marginBottom: 10},
                            ]}>
                            Company List
                        </Text>
                        <ScrollView style={{flex: 1}}>
                            {user?.investmentCompany?.map((item, index) => (
                                <View key={index} style={styles.companyInfo}>
                                    <Image
                                        source={{
                                            uri: `${ADMIN_API_URL}upload/${item.companyAvatarUrl}`,
                                        }}
                                        style={styles.companyAvatar}
                                    />
                                    <Text style={globalStyles.boldLabel}>
                                        {item.companyName}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View> */}
                </View>
                <View style={styles.chatButtonContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('IndividualChatScreen', {
                                partner: user,
                            })
                        }>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}}
                            end={{x: 1.0, y: 1.0}}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={styles.chatButtonBack}>
                            <EntypoIcon
                                name="chat"
                                size={30}
                                color={HiFiColors.White}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    memberProfileContainer: {
        backgroundColor: HiFiColors.AccentFade,
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    memberMainInfo: {
        paddingVertical: 10,
        borderBottomColor: HiFiColors.Label,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    memberAvatar: {
        width: 100,
        height: 100,
        borderRadius: 200,
    },
    memberDetailInfo: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    memberDetailImage: {
        width: 110,
        height: 110,
        borderRadius: 200,
    },
    chatButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    chatButtonBack: {
        padding: 15,
        borderRadius: 100,
    },
    companyInfoContainer: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: HiFiColors.Label,
        marginTop: 10,
        paddingVertical: 10,
    },
    companyInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    companyAvatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 15,
    },
});
