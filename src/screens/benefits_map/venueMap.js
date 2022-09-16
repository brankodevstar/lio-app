import React from "react";
import { View, Text, Image, Dimensions, ImageBackground, TouchableOpacity, } from "react-native";
import globalStyles from "../../styles/style";
import { StyleSheet } from "react-native";
import HiFiColors from "../../styles/colors";
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from "react-native-gesture-handler";

export default VenueMap = () => {
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between' }]}>
                <TouchableOpacity>
                    <View>
                        <FeatherIcon name="arrow-left" size={20} color={HiFiColors.White} />
                    </View>
                </TouchableOpacity>
                <View style={styles.searchInputView}>
                    <TextInput style={styles.searchInput}/>
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
            <View>
                <ImageBackground
                    source={require('../../../assets/images/member-benefits/map-view/900fafb49287c0fdc6c722e7a58334a0.png')}
                    style={styles.imageBackground}>
                    <View style={styles.card}>
                        <View style={styles.graphic}>
                            <View style={styles.brandPart}>
                                <Image style={styles.brand} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/categories/adidas.png')} />
                            </View>
                            <TouchableOpacity>
                                <FeatherIcon name="heart" size={20} color={HiFiColors.White} style={{ marginTop: 10, marginRight: 5 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 5, }}>
                            <Text style={globalStyles.boldSmallLabel}>Adidas</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                                <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                    <Text style={[globalStyles.smallLabel, { color: HiFiColors.Secondary, fontWeight: '100', }]}> 4.8 </Text>
                                    <TouchableOpacity>
                                        <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.adidas}>
                        <TouchableOpacity>
                            <View style={[styles.location, { backgroundColor: HiFiColors.Accent }]}>
                                <Text style={[globalStyles.selectedBoldLabel, { color: HiFiColors.White, fontWeight: '800' }]}>Adidas</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mcdonald}>
                        <TouchableOpacity>
                            <View style={[styles.location, { backgroundColor: HiFiColors.White }]}>
                                <Text style={[globalStyles.selectedBoldLabel, { color: HiFiColors.Black, fontWeight: '800' }]}>McDonald's</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.amazon}>
                        <TouchableOpacity>
                            <View style={[styles.location, { backgroundColor: HiFiColors.White }]}>
                                <Text style={[globalStyles.selectedBoldLabel, { color: HiFiColors.Black, fontWeight: '800' }]}>Amazon</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.listButton}>
                <TouchableOpacity>
                    <View style={styles.addPostButtonContainer}>
                        <MaterialIcon name="list-alt" size={15} color={HiFiColors.White} style={{ marginRight: 5 }} />
                        <Text style={globalStyles.strongLabel}>List</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
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
    card: {
        position: 'absolute',
        width: 200,
        height: 160,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 8,
        marginLeft: 180,
        marginTop: 180,
    },
    graphic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maringTop: 16,
    },
    brandPart: {
        width: 160,
        height: 100,
        backgroundColor: HiFiColors.Black,
        borderRadius: 4,
        marginLeft: 10,
        marginTop: 10,
    },
    brand: {
        marginLeft: 30,
        marginTop: 20,
        width: 90,
        height: 60,
    },
    adidas: {
        position: 'absolute',
        width: 80,
        marginLeft: 200,
        marginTop: 360,
    },
    mcdonald: {
        position: 'absolute',
        width: 120,
        marginLeft: 40,
        marginTop: 400,
    },
    amazon: {
        position: 'absolute',
        width: 100,
        marginLeft: 200,
        marginTop: 530,
    },
    location: {
        paddingVertical: 6,
        alignItems: 'center',
        borderRadius: 30,
        width: '100%',
    },
    listButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    addPostButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        width: 100,
        backgroundColor: HiFiColors.AccentFade,
        opacity: 0.8,
    },
})