import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import PieChart from 'react-native-pie-chart';
import { VictoryPie } from 'victory-native';

import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import globalStyles from '../../styles/style';
import MenuButton from '../../components/MenuButton';

export default MyInvestment = ({ navigation }) => {
    const series = [21.4, 14.3, 28.6, 21.4, 14.3];
    const sampleData = [
        { x: 'Sports', y: 21.4 },
        { x: 'Fin Tech', y: 14.3 },
        { x: 'Travel', y: 28.6 },
        { x: 'Agri Tech', y: 21.4 },
        { x: 'Food', y: 14.3 },
    ]
    const sliceColor = ['#31356E', '#2F5F98', '#941149', '#41B8D5', '#3A7E9F']

    return (
        <ScrollView style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'center' }]}>
                <View style={{ position: 'absolute', left: 20 }}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>My Investments</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.mainInfoContainer}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={['#7B61FF', '#991450', '#40799D']}
                        style={[styles.mainInfoBack]}
                    >
                        <Text style={[styles.mainInfoTitle, { alignSelf: 'flex-start', marginLeft: 20, marginBottom: 15 }]}>My Investments</Text>
                        <Text style={[styles.mainInfoTitle, { marginLeft: 40 }]}>₹900,000</Text>
                    </LinearGradient>
                </View>
                <View style={styles.chartInfo}>
                    <Text style={[styles.chartTitle, { alignSelf: 'flex-start' }]}>Investment Split</Text>
                    <VictoryPie
                        data={sampleData}
                        colorScale={sliceColor}
                        labels={({ datum }) => datum.x + '\n' + datum.y + '%'}
                        style={{ labels: { fill: HiFiColors.Label, fontSize: 8, fontWeight: "300", fontFamily: fonts.primary, } }}
                        width={300}
                        height={300}
                    />
                </View>
                <View style={styles.myListContainer}>
                    <Text style={[styles.chartTitle, { alignSelf: 'flex-start', marginBottom: 20 }]}>My List</Text>
                    <View style={styles.investContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate("MyInvestmentDetailScreen") }}>
                            <Text style={[styles.chartTitle, { marginRight: 10 }]}>1.</Text>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/9430/b221/89993a64dea4336dbfc07dfbcc947e82?Expires=1664755200&Signature=T2ct2kS~LQaG7mvWHwxnLm1bPTRxDH8ctD6R3gQ3-o~gc6xKO9f3vw0BiKKMiBWVTc959sIgjVDr5fqVApqVimVXjfhR-99BrlbnakS8ehoVA4LphFasJUXuwVc2h8vSlNnDwwStMwRY4-7~KG2syrzyi-RTGdnF8m4RhT7WOCElYvd2RhxN2D~lUXFe~f1QijRqQBlZFxZSD5rQynA79te~EMoJCSjF4bpVO~48KlB2w7yF03JPxppc8gPXES5GNRkjDfJQUtGMiz7aQkAE~kKhEoNdWu6xwKjVn8PXnuSrDVP-j5BqWtYr4UbjnnlY5I7NXIPJi7mjyB3WRLaibQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.investImage} />
                            <Text style={styles.investLabel}>Step Change</Text>
                            <Text style={[globalStyles.tinyLabel, styles.myInvestCategory]}>Environment</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.investContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate("MyInvestmentDetailScreen") }}>
                            <Text style={[styles.chartTitle, { marginRight: 10 }]}>2.</Text>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/5543/7311/19585c65b08e7c3b133264559ea04520?Expires=1664755200&Signature=BCiBzpVgxfb1XVqbgfaSNefB~PP6bt-iweYM9j3jb~nrdKINz3XrIZZlvPX1D8LkJqncVNcW0f0~Vs~X1dA6mLR1j6V1lgbasUH8cMoq36-XPzGsAia8CbrAVVw1uzvKzsxkLRs7uSGOaorJ1vwfyctznh6x6rxV8jtLCbflvGsocq8GXLfD1vqCx65bkUOJIcM8ub~4BfgE~5FN2dEovIBxurB4Sn9Ldfa4oGvod0zI7ufLbw8IH4aPxX2avxXKpGJ5STqreAkwTo3Cdl1wawJZBj4xbdMfCtx64UeEQ3rbZLC6-FsVVY2xx9CmI3PsRs0MxbRkbng1JkiEnHrayg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.investImage} />
                            <Text style={styles.investLabel}>Clickup</Text>
                            <Text style={[globalStyles.tinyLabel, styles.myInvestCategory]}>SaaS tool</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.investContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate("MyInvestmentDetailScreen") }}>
                            <Text style={[styles.chartTitle, { marginRight: 10 }]}>3.</Text>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/8016/5a20/745a66de3321c1eaff9ce85ffb6b5ddb?Expires=1664755200&Signature=HGghXcI8pjwGv7Szlzf98eJFELaJRSzbO6FIJ9OYh1KrzZkTFoHnRFe0emXTZi2Zv5c3~c~hGHUjgTTbXFA-h5TtxyydfWturw2J8K3aO8G6m7vvh83pZF1Xsw6CcTjz3Jvvgepozcu2BtZq4zzcvb03PU9r0MuooOvamUMM4R37pPw~TgRxInvILvsr~2EZ~Q-dwFJtgi~gjuAJk~T~R5dVyAIcv7Qn3yR1rMKuSiDgbJMgIgTRU0oXXxnMKd~Do1b--XIdlhSL1UB-qykEB4WBFZWmoG4Aj015LF2MsHjLO6nNbjCaXCTtyVPvY8JJFR8tJbbDNQLeQDbIwlTa7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.investImage} />
                            <Text style={styles.investLabel}>Dynamo Softwares</Text>
                            <Text style={[globalStyles.tinyLabel, styles.myInvestCategory]}>Software Development</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.investContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate("MyInvestmentDetailScreen") }}>
                            <Text style={[styles.chartTitle, { marginRight: 10 }]}>4.</Text>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/9430/b221/89993a64dea4336dbfc07dfbcc947e82?Expires=1664755200&Signature=T2ct2kS~LQaG7mvWHwxnLm1bPTRxDH8ctD6R3gQ3-o~gc6xKO9f3vw0BiKKMiBWVTc959sIgjVDr5fqVApqVimVXjfhR-99BrlbnakS8ehoVA4LphFasJUXuwVc2h8vSlNnDwwStMwRY4-7~KG2syrzyi-RTGdnF8m4RhT7WOCElYvd2RhxN2D~lUXFe~f1QijRqQBlZFxZSD5rQynA79te~EMoJCSjF4bpVO~48KlB2w7yF03JPxppc8gPXES5GNRkjDfJQUtGMiz7aQkAE~kKhEoNdWu6xwKjVn8PXnuSrDVP-j5BqWtYr4UbjnnlY5I7NXIPJi7mjyB3WRLaibQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.investImage} />
                            <Text style={styles.investLabel}>Step Change</Text>
                            <Text style={[globalStyles.tinyLabel, styles.myInvestCategory]}>Environment</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.investContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate("MyInvestmentDetailScreen") }}>
                            <Text style={[styles.chartTitle, { marginRight: 10 }]}>5.</Text>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/5543/7311/19585c65b08e7c3b133264559ea04520?Expires=1664755200&Signature=BCiBzpVgxfb1XVqbgfaSNefB~PP6bt-iweYM9j3jb~nrdKINz3XrIZZlvPX1D8LkJqncVNcW0f0~Vs~X1dA6mLR1j6V1lgbasUH8cMoq36-XPzGsAia8CbrAVVw1uzvKzsxkLRs7uSGOaorJ1vwfyctznh6x6rxV8jtLCbflvGsocq8GXLfD1vqCx65bkUOJIcM8ub~4BfgE~5FN2dEovIBxurB4Sn9Ldfa4oGvod0zI7ufLbw8IH4aPxX2avxXKpGJ5STqreAkwTo3Cdl1wawJZBj4xbdMfCtx64UeEQ3rbZLC6-FsVVY2xx9CmI3PsRs0MxbRkbng1JkiEnHrayg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.investImage} />
                            <Text style={styles.investLabel}>Clickup</Text>
                            <Text style={[globalStyles.tinyLabel, styles.myInvestCategory]}>SaaS tool</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.investContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate("MyInvestmentDetailScreen") }}>
                            <Text style={[styles.chartTitle, { marginRight: 10 }]}>6.</Text>
                            <Image
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/8016/5a20/745a66de3321c1eaff9ce85ffb6b5ddb?Expires=1664755200&Signature=HGghXcI8pjwGv7Szlzf98eJFELaJRSzbO6FIJ9OYh1KrzZkTFoHnRFe0emXTZi2Zv5c3~c~hGHUjgTTbXFA-h5TtxyydfWturw2J8K3aO8G6m7vvh83pZF1Xsw6CcTjz3Jvvgepozcu2BtZq4zzcvb03PU9r0MuooOvamUMM4R37pPw~TgRxInvILvsr~2EZ~Q-dwFJtgi~gjuAJk~T~R5dVyAIcv7Qn3yR1rMKuSiDgbJMgIgTRU0oXXxnMKd~Do1b--XIdlhSL1UB-qykEB4WBFZWmoG4Aj015LF2MsHjLO6nNbjCaXCTtyVPvY8JJFR8tJbbDNQLeQDbIwlTa7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }}
                                style={styles.investImage} />
                            <Text style={styles.investLabel}>Dynamo Softwares</Text>
                            <Text style={[globalStyles.tinyLabel, styles.myInvestCategory]}>Software Development</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    mainInfoContainer: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade
    },
    mainInfoBack: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 20,
        borderRadius: 10,
        width: "100%",
    },
    mainInfoTitle: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: fonts.primary,
        color: HiFiColors.White
    },
    chartInfo: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade
    },
    chartTitle: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: fonts.primary,
        color: HiFiColors.White
    },
    myListContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade
    },
    investContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        marginVertical: 5
    },
    investImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: HiFiColors.White,
        marginRight: 10
    },
    investLabel: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        marginRight: 10
    },
    myInvestCategory: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: HiFiColors.Primary,
        borderRadius: 20
    }
})