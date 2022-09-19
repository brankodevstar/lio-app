import React from "react";
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { StyleSheet } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from "react-native-gesture-handler";

import globalStyles from "../../styles/style";
import HiFiColors from "../../styles/colors";

export default TransactionHistory = () => {
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between', borderBottomWidth: 0, }]}>
                <TouchableOpacity>
                    <View>
                        <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} />
                    </View>
                </TouchableOpacity>
                <View style={styles.searchInputView}>
                    <TextInput style={styles.searchInput} />
                    <TouchableOpacity style={{ marginHorizontal: 20, }}>
                        <View>
                            <FeatherIcon name="search" size={20} color={HiFiColors.White} style={{ borderWidth: 0 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <FontAwesome5Icon name="sliders-h" size={20} color={HiFiColors.White} style={styles.headerButton} />
                </TouchableOpacity>
            </View>
            <View style={styles.historySection}>
                <Text style={[globalStyles.title, { fontSize: 24, fontWeight: '200', marginBottom: 10,}]}>My Bookings</Text>
                <View style={styles.historyCard}>
                    <Image style={styles.image}
                        source={require('../../../assets/images/profile/17762da99063aafa349337af1f8148ae.jpg')} />
                    <View>
                        <Text style={globalStyles.label}>#1081 • Start Up Grind</Text>
                        <Text style={globalStyles.label}>1/1/2021</Text>
                    </View>
                </View>
                <View style={styles.historyCard}>
                    <Image style={styles.image}
                        source={require('../../../assets/images/member-benefits/66e0b7b5e754b7b5fa7ca4eac619841f.jpg')} />
                    <View>
                        <Text style={globalStyles.label}>#1081 • Start Up Grind</Text>
                        <Text style={globalStyles.label}>1/1/2021</Text>
                    </View>
                </View>
                <View style={styles.historyCard}>
                    <Image style={styles.image}
                        source={require('../../../assets/images/member-benefits/5f1221038de92f99dec778a185d8cbc6.jpg')} />
                    <View>
                        <Text style={globalStyles.label}>#1081 • Start Up Grind</Text>
                        <Text style={globalStyles.label}>1/1/2021</Text>
                    </View>
                </View>
                <View style={styles.historyCard}>
                    <Image style={styles.image}
                        source={require('../../../assets/images/profile/afaa204d7353c52d3c57b29a46c24a65.jpg')} />
                    <View>
                        <Text style={globalStyles.label}>#1081 • Start Up Grind</Text>
                        <Text style={globalStyles.label}>1/1/2021</Text>
                    </View>
                </View>
                <View style={styles.historyCard}>
                    <Image style={styles.image}
                        source={require('../../../assets/images/member-benefits/90bb7fbc8257b4114ab01a0bbcf91c64.jpg')} />
                    <View>
                        <Text style={globalStyles.label}>#1081 • Start Up Grind</Text>
                        <Text style={globalStyles.label}>1/1/2021</Text>
                    </View>
                </View>
                <View style={styles.historyCard}>
                    <Image style={styles.image}
                        source={require('../../../assets/images/member-benefits/8c31e35fbfe0c83a43c165b9134a2047.jpg')} />
                    <View>
                        <Text style={globalStyles.label}>#1081 • Start Up Grind</Text>
                        <Text style={globalStyles.label}>1/1/2021</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchInputView: {
        width: '85%',
        backgroundColor: HiFiColors.AccentFade,
        marginHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        width: '80%',
        color: HiFiColors.White,
        paddingLeft: 10,
        fontSize: 20,
    },
    historySection: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    historyCard: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderBottomColor: HiFiColors.Label,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        paddingBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20,
        borderRadius: 6,
    }
})