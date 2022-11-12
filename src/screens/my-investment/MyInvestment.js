import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {VictoryPie} from 'victory-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import globalStyles from '../../styles/style';
import MenuButton from '../../components/MenuButton';
import Action from '../../service';
import {ADMIN_API_URL} from '../../../config';

const sum = (items, prop) => {
    return items.reduce((a, b) => {
        return a + b[prop];
    }, 0);
};

export default MyInvestment = ({navigation}) => {
    const [chartData, setChartData] = useState([]);
    const [sliceColor, setSliceColor] = useState([]);
    const [investmentSum, setInvestmentSum] = useState(0);
    const [userInfo, setUserInfo] = useState({});

    const dynamicColors = function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    };

    const initChartData = async () => {
        const userData = await AsyncStorage.getItem('USER_DATA');
        Action.members
            .list({phone: userData})
            .then(response => {
                if (response.data.length > 0) {
                    const currentUser = response.data[0];
                    setUserInfo(currentUser);
                    const tempInvestmentSum = sum(
                        currentUser.investmentCompany,
                        'currentValue',
                    );
                    let tempChartData = [];
                    let tempColors = [];
                    currentUser.investmentCompany.map((item, index) => {
                        tempChartData.push({
                            x: item.companyName,
                            y: Number.parseFloat(
                                (
                                    (item.currentValue / tempInvestmentSum) *
                                    100
                                ).toFixed(1),
                            ),
                        });
                        tempColors.push(dynamicColors());
                    });
                    setInvestmentSum(tempInvestmentSum);
                    setSliceColor(tempColors);
                    setChartData(tempChartData);
                }
            })
            .catch(err => {});
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            initChartData();
        });
    }, [navigation]);

    return (
        <ScrollView style={globalStyles.container}>
            <View
                style={[
                    globalStyles.headerContainer,
                    {justifyContent: 'center'},
                ]}>
                <View style={{position: 'absolute', left: 20}}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>
                    My Investments
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.mainInfoContainer}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 1.0, y: 1.0}}
                        colors={['#7B61FF', '#991450', '#40799D']}
                        style={[styles.mainInfoBack]}>
                        <Text
                            style={[
                                styles.mainInfoTitle,
                                {
                                    alignSelf: 'flex-start',
                                    marginLeft: 20,
                                    marginBottom: 15,
                                },
                            ]}>
                            My Investments
                        </Text>
                        <Text style={[styles.mainInfoTitle, {marginLeft: 40}]}>
                            ₹{investmentSum.toLocaleString()}
                        </Text>
                    </LinearGradient>
                </View>
                <View style={styles.chartInfo}>
                    <Text
                        style={[styles.chartTitle, {alignSelf: 'flex-start'}]}>
                        Investment Split
                    </Text>
                    <VictoryPie
                        radius={Dimensions.get('window').width / 5}
                        data={chartData}
                        colorScale={sliceColor}
                        labels={({datum}) => datum.x + '\n' + datum.y + '%'}
                        style={{
                            labels: {
                                fill: HiFiColors.Label,
                                fontSize: 12,
                                fontWeight: '300',
                                fontFamily: fonts.primary,
                                borderWidth: 1,
                                borderColor: 'red',
                            },
                        }}
                        height={300}
                    />
                </View>
                <View style={styles.myListContainer}>
                    <Text
                        style={[
                            styles.chartTitle,
                            {alignSelf: 'flex-start', marginBottom: 20},
                        ]}>
                        My Company List
                    </Text>
                    {userInfo?.investmentCompany?.map((item, index) => (
                        <View key={index} style={styles.investContainer}>
                            {/* <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    navigation.navigate(
                                        'MyInvestmentDetailScreen',
                                    );
                                }}> */}
                                <Text
                                    style={[
                                        styles.chartTitle,
                                        {marginRight: 20},
                                    ]}>
                                    {index + 1}
                                </Text>
                                <Image
                                    source={{
                                        uri: `${ADMIN_API_URL}upload/${item.companyAvatarUrl}`,
                                    }}
                                    style={styles.investImage}
                                />
                                <Text style={styles.investLabel}>
                                    {item.companyName}
                                </Text>
                                {/* <Text
                                    style={[
                                        globalStyles.tinyLabel,
                                        styles.myInvestCategory,
                                    ]}>
                                    Environment
                                </Text> */}
                            {/* </TouchableOpacity> */}
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    mainInfoContainer: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade,
    },
    mainInfoBack: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 20,
        borderRadius: 10,
        width: '100%',
    },
    mainInfoTitle: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: fonts.primary,
        color: HiFiColors.White,
    },
    chartInfo: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade,
    },
    chartTitle: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: fonts.primary,
        color: HiFiColors.White,
    },
    myListContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade,
    },
    investContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        marginVertical: 5,
    },
    investImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: HiFiColors.White,
        marginRight: 25,
    },
    investLabel: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        marginRight: 10,
    },
    myInvestCategory: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: HiFiColors.Primary,
        borderRadius: 20,
    },
});
