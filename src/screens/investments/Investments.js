import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';
import { ADMIN_API_URL } from '@env';
import Action from '../../service';

export default Investments = ({ navigation }) => {
    const [investments, setInvestments] = useState([]);
    const [category, setCategory] = useState(1);

    const getInvestments = async (categoryId) => {
        const param = {
            type: categoryId
        }
        const response = await Action.investments.list(param);
        if (response.data) {
            setInvestments(response.data);
        }
    };

    useEffect(() => {
        navigation.addListener('focus', () => { getInvestments(category); })
    }, [navigation]);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <View style={{ position: 'absolute', left: 20 }}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Open Investments</Text>
            </View>
            <View>
                <ScrollView horizontal style={styles.categoryScroll}>
                    <TouchableOpacity onPress={() => { setCategory(1); getInvestments(1); }}>
                        <View style={[styles.investmentCategory, category === 1 ? { backgroundColor: HiFiColors.White } : {}]}>
                            <Text style={[globalStyles.selectedBoldLabel, category === 1 ? { color: HiFiColors.Accent } : {}]}>Featured</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setCategory(2); getInvestments(2); }}>
                        <View style={[styles.investmentCategory, category === 2 ? { backgroundColor: HiFiColors.White } : {}]}>
                            <Text style={[globalStyles.selectedBoldLabel, category === 2 ? { color: HiFiColors.Accent } : {}]}>Sports</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setCategory(3); getInvestments(3); }}>
                        <View style={[styles.investmentCategory, category === 3 ? { backgroundColor: HiFiColors.White } : {}]}>
                            <Text style={[globalStyles.selectedBoldLabel, category === 3 ? { color: HiFiColors.Accent } : {}]}>Food</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.investmentCardScroll} contentContainerStyle={{ paddingVertical: 20 }}>
                    {
                        investments.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => { navigation.navigate("InvestmentDetailScreen", { id: item._id }) }}>
                                <View style={styles.investmentContainer}>
                                    <Image
                                        style={styles.inventmentImage}
                                        source={{ uri: `${ADMIN_API_URL}upload/${item.imageUrl}` }} />
                                    <View style={styles.investmentHeader}>
                                        <Text style={globalStyles.smallLabel}>{item.title}</Text>
                                        <Text style={styles.nameLabel}>{item.categoryName}</Text>
                                    </View>
                                    <Text style={[globalStyles.tinyLabel, { marginBottom: 10 }]}>{item.description}</Text>
                                    <View style={styles.statusbar}>
                                        <LinearGradient
                                            start={{ x: 0.0, y: 0.0 }}
                                            end={{ x: 1.0, y: 1.0 }}
                                            colors={['#7B61FF', '#991450', '#40799D']}
                                            style={{ width: '50%', height: 7, borderRadius: 10 }}
                                        >
                                        </LinearGradient>
                                    </View>
                                    <View style={styles.inventmentEventContainer}>
                                        <View style={styles.labelContainer}>
                                            <Text style={globalStyles.smallLabel}>{item.funded}%</Text>
                                            <Text style={styles.textLabel}>Funded</Text>
                                        </View>
                                        <View style={styles.labelContainer}>
                                            <Text style={globalStyles.smallLabel}>{item.investors}</Text>
                                            <Text style={styles.textLabel}>Investors</Text>
                                        </View>
                                        <View style={styles.labelContainer}>
                                            <Text style={globalStyles.smallLabel}>{item.roundClose} Days</Text>
                                            <Text style={styles.textLabel}>Round Close</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryScroll: {
        paddingVertical: 10
    },
    investmentCategory: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: HiFiColors.AccentFade,
        marginHorizontal: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    investmentCardScroll: {
        padding: 10
    },
    investmentContainer: {
        padding: 10,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        marginVertical: 7
    },
    inventmentImage: {
        width: '100%',
        height: 150,
        borderRadius: 10
    },
    investmentHeader: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginVertical: 10
    },
    statusbar: {
        height: 7,
        backgroundColor: HiFiColors.White,
        borderRadius: 10
    },
    inventmentEventContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
    },
    nameLabel: {
        color: HiFiColors.Label,
        fontSize: 10,
        fontWeight: '300',
        fonts: fonts.primary
    },
    textLabel: {
        color: HiFiColors.Label,
        fontSize: 10,
        fontWeight: '400',
        fonts: fonts.primary
    },
    labelContainer: {
        marginHorizontal: 5,
        alignItems: 'center'
    }

})