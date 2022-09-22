import React from "react";
import { View, Text, Image, Dimensions, ImageBackground, ScrollView } from "react-native";
import globalStyles from "../../styles/style";
import { StyleSheet } from "react-native";
import HiFiColors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { color } from "react-native-reanimated";
import MenuButton from '../../components/MenuButton';

export default MemberBenefits = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: HiFiColors.Accent, }} contentContainerStyle={{ paddingVertical: 20 }}>
            <View>
                <View style={styles.imageRow}>
                    <View style={styles.imageContainer1}>
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/8c31e35fbfe0c83a43c165b9134a2047.jpg')} />
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/5c5a264257f09ce652c6f7531420197d.jpg')} />
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/b4276329cae57635c4ae0550731805d1.jpg')} />
                    </View>
                    <View style={styles.imageContainer2}>
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/b2a37d28055200c2b7ed1ee99d5229c3.jpg')} />
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/66e0b7b5e754b7b5fa7ca4eac619841f.jpg')} />
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/eebc71ff474b7592d66fc2ffe8416b7d.jpg')} />
                    </View>
                    <View style={styles.imageContainer3}>
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/ae0265bcf5f64944ac35825f79149fbe.jpg')} />
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/90bb7fbc8257b4114ab01a0bbcf91c64.jpg')} />
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/dcaa341b60cd84b8177fd55f5bcb2293.jpg')} />
                    </View>
                    <View style={styles.imageContainer4}>
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/0ee818a426e850e7df3f97cbd219278b.jpg')} />
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/4123d4d62d72c79db6d30bccca2f2b7b.jpg')} />
                        <Image style={styles.imageView} resizeMode={'stretch'} source={require('../../../assets/images/member-benefits/ae0265bcf5f64944ac35825f79149fbe.jpg')} />
                    </View>
                </View>
            </View>
            <View style={styles.caption}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <MenuButton navigation={navigation} />
                    <Text style={styles.captionTitle}>
                        Member benefits
                    </Text>
                </View>
                <Text style={styles.catptionDescription}>
                    Check out some of these exciting and exclusive member benefits just for YOU!
                </Text>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categoriesTitle}>
                    Categories
                </Text>
                <View style={styles.buttonGroup}>
                    <ScrollView horizontal>
                        <TouchableOpacity>
                            <View style={[styles.buttonBack, { backgroundColor: HiFiColors.White }]}>
                                <Text style={[globalStyles.selectedBoldLabel, { color: HiFiColors.Label, fontWeight: '800' }]}>Featured</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.buttonBack}>
                                <Text style={[globalStyles.boldLabel, { fontWeight: '800' }]}>Sports</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.buttonBack}>
                                <Text style={[globalStyles.boldLabel, { fontWeight: '800' }]}>Food</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.buttonBack}>
                                <Text style={[globalStyles.boldLabel, { fontWeight: '800' }]}>Sports</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.buttonBack}>
                                <Text style={[globalStyles.boldLabel, { fontWeight: '800' }]}>Food</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.categoriesView}>
                    <View style={styles.categoryRowView}>
                        <View style={styles.categoryCard}>
                            <TouchableOpacity onPress={() => { navigation.navigate("VenueMapScreen") }}>
                                <View style={styles.categoryView}>
                                    <ImageBackground
                                        source={require('../../../assets/images/member-benefits/categories/adidas.png')}
                                        resizeMode="stretch"
                                        style={styles.categoryImage}>
                                        <View style={{ alignSelf: 'flex-end' }}>
                                            <TouchableOpacity>
                                                <FeatherIcon name="heart" size={25} color={HiFiColors.White} style={styles.headerIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                    <Text style={[globalStyles.mediumBoldLabel, { alignSelf: 'flex-end', marginTop: 25, }]}>
                                        30% Off
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.captionView}>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={globalStyles.mediumBoldLabel}>Adidas</Text>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>Jubilee Hills</Text>
                                    </View>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 0.0, y: 1.0 }}
                                        colors={['#7B61FF', '#991450', '#40799D']}
                                        style={styles.iconBack}
                                        alignSelf='flex-end'
                                    >
                                        <FeatherIcon name="phone-call" size={20} color={HiFiColors.White} />
                                    </LinearGradient>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.categoryCard}>
                            <TouchableOpacity onPress={() => { navigation.navigate("VenueMapScreen") }}>
                                <View style={styles.categoryView}>
                                    <ImageBackground
                                        source={require('../../../assets/images/member-benefits/categories/adidas.png')}
                                        resizeMode="stretch"
                                        style={styles.categoryImage}>
                                        <View style={{ alignSelf: 'flex-end' }}>
                                            <TouchableOpacity>
                                                <FeatherIcon name="heart" size={25} color={HiFiColors.White} style={styles.headerIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                    <Text style={[globalStyles.mediumBoldLabel, { alignSelf: 'flex-end', marginTop: 25, }]}>
                                        30% Off
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.captionView}>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={globalStyles.mediumBoldLabel}>Adidas</Text>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>Jubilee Hills</Text>
                                    </View>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 0.0, y: 1.0 }}
                                        colors={['#7B61FF', '#991450', '#40799D']}
                                        style={styles.iconBack}
                                        alignSelf='flex-end'
                                    >
                                        <FeatherIcon name="phone-call" size={20} color={HiFiColors.White} />
                                    </LinearGradient>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.categoryRowView}>
                        <View style={styles.categoryCard}>
                            <TouchableOpacity onPress={() => { navigation.navigate("VenueMapScreen") }}>
                                <View style={styles.categoryView}>
                                    <ImageBackground
                                        source={require('../../../assets/images/member-benefits/categories/adidas.png')}
                                        resizeMode="stretch"
                                        style={styles.categoryImage}>
                                        <View style={{ alignSelf: 'flex-end' }}>
                                            <TouchableOpacity>
                                                <FeatherIcon name="heart" size={25} color={HiFiColors.White} style={styles.headerIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                    <Text style={[globalStyles.mediumBoldLabel, { alignSelf: 'flex-end', marginTop: 25, }]}>
                                        30% Off
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.captionView}>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={globalStyles.mediumBoldLabel}>Adidas</Text>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>Jubilee Hills</Text>
                                    </View>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 0.0, y: 1.0 }}
                                        colors={['#7B61FF', '#991450', '#40799D']}
                                        style={styles.iconBack}
                                        alignSelf='flex-end'
                                    >
                                        <FeatherIcon name="phone-call" size={20} color={HiFiColors.White} />
                                    </LinearGradient>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.categoryCard}>
                            <TouchableOpacity onPress={() => { navigation.navigate("VenueMapScreen") }}>
                                <View style={styles.categoryView}>
                                    <ImageBackground
                                        source={require('../../../assets/images/member-benefits/categories/adidas.png')}
                                        resizeMode="stretch"
                                        style={styles.categoryImage}>
                                        <View style={{ alignSelf: 'flex-end' }}>
                                            <TouchableOpacity>
                                                <FeatherIcon name="heart" size={25} color={HiFiColors.White} style={styles.headerIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                    <Text style={[globalStyles.mediumBoldLabel, { alignSelf: 'flex-end', marginTop: 25, }]}>
                                        30% Off
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.captionView}>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={globalStyles.mediumBoldLabel}>Adidas</Text>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>Jubilee Hills</Text>
                                    </View>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 0.0, y: 1.0 }}
                                        colors={['#7B61FF', '#991450', '#40799D']}
                                        style={styles.iconBack}
                                        alignSelf='flex-end'
                                    >
                                        <FeatherIcon name="phone-call" size={20} color={HiFiColors.White} />
                                    </LinearGradient>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.categoryRowView}>
                        <View style={styles.categoryCard}>
                            <TouchableOpacity onPress={() => { navigation.navigate("VenueMapScreen") }}>
                                <View style={styles.categoryView}>
                                    <ImageBackground
                                        source={require('../../../assets/images/member-benefits/categories/adidas.png')}
                                        resizeMode="stretch"
                                        style={styles.categoryImage}>
                                        <View style={{ alignSelf: 'flex-end' }}>
                                            <TouchableOpacity>
                                                <FeatherIcon name="heart" size={25} color={HiFiColors.White} style={styles.headerIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                    <Text style={[globalStyles.mediumBoldLabel, { alignSelf: 'flex-end', marginTop: 25, }]}>
                                        30% Off
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.captionView}>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={globalStyles.mediumBoldLabel}>Adidas</Text>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>Jubilee Hills</Text>
                                    </View>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 0.0, y: 1.0 }}
                                        colors={['#7B61FF', '#991450', '#40799D']}
                                        style={styles.iconBack}
                                        alignSelf='flex-end'
                                    >
                                        <FeatherIcon name="phone-call" size={20} color={HiFiColors.White} />
                                    </LinearGradient>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.categoryCard}>
                            <TouchableOpacity onPress={() => { navigation.navigate("VenueMapScreen") }}>
                                <View style={styles.categoryView}>
                                    <ImageBackground
                                        source={require('../../../assets/images/member-benefits/categories/adidas.png')}
                                        resizeMode="stretch"
                                        style={styles.categoryImage}>
                                        <View style={{ alignSelf: 'flex-end' }}>
                                            <TouchableOpacity>
                                                <FeatherIcon name="heart" size={25} color={HiFiColors.White} style={styles.headerIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                    <Text style={[globalStyles.mediumBoldLabel, { alignSelf: 'flex-end', marginTop: 25, }]}>
                                        30% Off
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.captionView}>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={globalStyles.mediumBoldLabel}>Adidas</Text>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>Jubilee Hills</Text>
                                    </View>
                                    <LinearGradient
                                        start={{ x: 0.0, y: 0.0 }}
                                        end={{ x: 0.0, y: 1.0 }}
                                        colors={['#7B61FF', '#991450', '#40799D']}
                                        style={styles.iconBack}
                                        alignSelf='flex-end'
                                    >
                                        <FeatherIcon name="phone-call" size={20} color={HiFiColors.White} />
                                    </LinearGradient>
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageRow: {
        flexDirection: 'row',
    },
    imageView: {
        width: 100,
        height: 120,
        borderRadius: 10,
        margin: 5,
    },
    imageContainer1: {
        width: Dimensions.get("window").width / 3.5,
        marginTop: -80,
        marginLeft: -20,
        borderRadius: 10,
    },
    imageContainer2: {
        width: Dimensions.get("window").width / 3.5,
        marginTop: -40,
        borderRadius: 10,
    },
    imageContainer3: {
        width: Dimensions.get("window").width / 3.5,
        marginTop: -50,
        borderRadius: 10,
    },
    imageContainer4: {
        width: Dimensions.get("window").width / 3.5,
        marginTop: -30,
        borderRadius: 10,
    },
    caption: {
        paddingLeft: 10,
        marginTop: 20,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade,
    },
    captionTitle: {
        font: fonts.Poppins,
        fontWeight: '500',
        fontSize: 36,
        color: HiFiColors.White,
        fontFamily: fonts.primary,
    },
    catptionDescription: {
        color: HiFiColors.Label,
        font: fonts.Manrope,
        fontSize: 18,
        fontWeight: '500',
        fontFamily: fonts.primary,
    },
    categories: {
        paddingTop: 20,
    },
    categoriesTitle: {
        color: HiFiColors.White,
        font: fonts.Poppins,
        fontWeight: '800',
        fontSize: 24,
        fontFamily: fonts.primary,
        paddingLeft: 15,
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingRight: 15,
        paddingLeft: 15,
    },
    buttonBack: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 6,
        width: Dimensions.get("window").width / 3 - 20,
        alignItems: 'center',
        borderRadius: 60,
        marginHorizontal: 5
    },
    categoriesView: {
    },
    categoryRowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    categoryView: {
        backgroundColor: HiFiColors.Black,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    categoryImage: {
        width: '100%',
        height: 100,
    },
    iconBack: {
        padding: 5,
        borderRadius: 50,
    },
    captionView: {
        width: Dimensions.get("window").width / 2 - 20,
    }
})