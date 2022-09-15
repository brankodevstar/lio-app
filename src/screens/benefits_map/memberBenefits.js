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

export default MemberBenefits = () => {
    return (
        <ScrollView style={{ backgroundColor: HiFiColors.Accent, }} contentContainerStyle={{ paddingVertical: 20 }}>
            <View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/images/member-benefits/categories/adidas.png')} />
                </View>
            </View>
            <View style={styles.caption}>
                <Text style={styles.captionTitle}>
                    Member benefits
                </Text>
                <Text style={styles.catptionDescription}>
                    Check out some of these exciting and
                </Text>
                <Text style={styles.catptionDescription}>
                    exclusive member benefits just for YOU!
                </Text>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categoriesTitle}>
                    Categories
                </Text>
                <View style={styles.buttonGroup}>
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
                </View>
                <View style={styles.categoriesView}>
                    <View style={styles.categoryRowView}>
                        <View style={styles.categoryCard}>
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
                            <View style={styles.captionView}>
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
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
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.categoryCard}>
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
                            <View style={styles.captionView}>
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
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
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
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
                            <View style={styles.captionView}>
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
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
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.categoryCard}>
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
                            <View style={styles.captionView}>
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
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
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
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
                            <View style={styles.captionView}>
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
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
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
                                    <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                                        <Text style={[globalStyles.label, { color: HiFiColors.Secondary, fontWeight: '100', }]}>4.8 </Text>
                                        <TouchableOpacity>
                                            <FontAwesomeIcon name="star" size={15} color={HiFiColors.Secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.categoryCard}>
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
                            <View style={styles.captionView}>
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
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
                                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
                                <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>1.5 kms away • </Text>
                                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
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
    imageContainer: {
        flexDirection: 'row',
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
        fontSize: 45,
        color: HiFiColors.White,
        marginBottom: 20,
    },
    catptionDescription: {
        color: HiFiColors.Label,
        font: fonts.Manrope,
        fontSize: 20,
        fontWeight: '500',
    },
    categories: {
        paddingTop: 20,
    },
    categoriesTitle: {
        color: HiFiColors.White,
        font: fonts.Poppins,
        fontWeight: '400',
        fontSize: 30,
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
        borderRadius: 60
    },
    categoriesView: {
        paddingTop: 20,
    },
    categoryRowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 15,
    },
    categoryView: {
        paddingVertical: 5,
        width: Dimensions.get("window").width / 2 - 20,
        height: 200,
        backgroundColor: HiFiColors.Black,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    categoryImage: {
        width: '100%',
        height: 120,
        marginTop: 20,
    },
    iconBack: {
        padding: 5,
        borderRadius: 50,
    },
    captionView: {
        width: Dimensions.get("window").width / 2 - 20,
    }
})