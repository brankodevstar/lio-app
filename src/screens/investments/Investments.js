import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default Investments = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <Text style={globalStyles.mediumStrongLabel}>Open Investments</Text>
            </View>
            <View>
                <ScrollView horizontal style={styles.categoryScroll}>
                    <TouchableOpacity>
                        <View style={[styles.investmentCategory, { backgroundColor: HiFiColors.White }]}>
                            <Text style={[globalStyles.selectedBoldLabel, { color: HiFiColors.Accent }]}>Featured</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.investmentCategory}>
                            <Text style={[globalStyles.selectedBoldLabel,]}>Sports</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.investmentCategory}>
                            <Text style={[globalStyles.selectedBoldLabel,]}>Food</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.investmentCategory}>
                            <Text style={[globalStyles.selectedBoldLabel,]}>Food</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.investmentCategory}>
                            <Text style={[globalStyles.selectedBoldLabel,]}>Food</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.investmentCardScroll} contentContainerStyle={{ paddingVertical: 20 }}>
                    <TouchableOpacity>
                        <View style={styles.investmentContainer}>
                            <Image
                                style={styles.inventmentImage}
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/55aa/b93b/08747a6aa955f30bd62b90a0e5ffe4c1?Expires=1664150400&Signature=acJ7Biazgf-f9HIgynJ~cZZEvWztDY-enQbt1F9bpiTIMREIoVgXu6idj2hbRAFNGjpKywPwhPox7Rj3qNdymJHF9888wmAaCCrGLBDi2ZdzFj-PnR33cg54cVlWV88ET1UNclz3j2CCM9wpn~jA8-U48Nq9~5p5~tTAFR0ki0Lq3ABflBYyYW--P-6s8e-qHNyQSKLdH6tk4FaoReCyC-G-5ddVbTGQNlCHPIJlHZu7eYTXFXUrReNf4tVG9ZdIg9wjAmehOqIwMyCUKQP0asm08db~bT~guAk9Z1dza4ebJkeIEMufGCpo5W0r5haWEkdseSo-wVkBIUcyrCWGYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }} />
                            <View style={styles.investmentHeader}>
                                <Text style={globalStyles.smallLabel}>Airlift Technologies</Text>
                                <Text style={styles.nameLabel}>Fintech & Logistics</Text>
                            </View>
                            <Text style={[globalStyles.tinyLabel, { marginBottom: 10 }]}>Now you can shop everything in one place, and enjoy a quick 30-minute delivery right at your doorstep!</Text>
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
                                    <Text style={globalStyles.smallLabel}>45%</Text>
                                    <Text style={styles.textLabel}>Funded</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={globalStyles.smallLabel}>172</Text>
                                    <Text style={styles.textLabel}>Investors</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={globalStyles.smallLabel}>10 Days</Text>
                                    <Text style={styles.textLabel}>Round Close</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.investmentContainer}>
                            <Image
                                style={styles.inventmentImage}
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/55aa/b93b/08747a6aa955f30bd62b90a0e5ffe4c1?Expires=1664150400&Signature=acJ7Biazgf-f9HIgynJ~cZZEvWztDY-enQbt1F9bpiTIMREIoVgXu6idj2hbRAFNGjpKywPwhPox7Rj3qNdymJHF9888wmAaCCrGLBDi2ZdzFj-PnR33cg54cVlWV88ET1UNclz3j2CCM9wpn~jA8-U48Nq9~5p5~tTAFR0ki0Lq3ABflBYyYW--P-6s8e-qHNyQSKLdH6tk4FaoReCyC-G-5ddVbTGQNlCHPIJlHZu7eYTXFXUrReNf4tVG9ZdIg9wjAmehOqIwMyCUKQP0asm08db~bT~guAk9Z1dza4ebJkeIEMufGCpo5W0r5haWEkdseSo-wVkBIUcyrCWGYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }} />
                            <View style={styles.investmentHeader}>
                                <Text style={globalStyles.smallLabel}>Airlift Technologies</Text>
                                <Text style={styles.nameLabel}>Fintech & Logistics</Text>
                            </View>
                            <Text style={[globalStyles.tinyLabel, { marginBottom: 10 }]}>Now you can shop everything in one place, and enjoy a quick 30-minute delivery right at your doorstep!</Text>
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
                                    <Text style={globalStyles.smallLabel}>45%</Text>
                                    <Text style={styles.textLabel}>Funded</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={globalStyles.smallLabel}>172</Text>
                                    <Text style={styles.textLabel}>Investors</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={globalStyles.smallLabel}>10 Days</Text>
                                    <Text style={styles.textLabel}>Round Close</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.investmentContainer}>
                            <Image
                                style={styles.inventmentImage}
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/55aa/b93b/08747a6aa955f30bd62b90a0e5ffe4c1?Expires=1664150400&Signature=acJ7Biazgf-f9HIgynJ~cZZEvWztDY-enQbt1F9bpiTIMREIoVgXu6idj2hbRAFNGjpKywPwhPox7Rj3qNdymJHF9888wmAaCCrGLBDi2ZdzFj-PnR33cg54cVlWV88ET1UNclz3j2CCM9wpn~jA8-U48Nq9~5p5~tTAFR0ki0Lq3ABflBYyYW--P-6s8e-qHNyQSKLdH6tk4FaoReCyC-G-5ddVbTGQNlCHPIJlHZu7eYTXFXUrReNf4tVG9ZdIg9wjAmehOqIwMyCUKQP0asm08db~bT~guAk9Z1dza4ebJkeIEMufGCpo5W0r5haWEkdseSo-wVkBIUcyrCWGYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }} />
                            <View style={styles.investmentHeader}>
                                <Text style={globalStyles.smallLabel}>Airlift Technologies</Text>
                                <Text style={styles.nameLabel}>Fintech & Logistics</Text>
                            </View>
                            <Text style={[globalStyles.tinyLabel, { marginBottom: 10 }]}>Now you can shop everything in one place, and enjoy a quick 30-minute delivery right at your doorstep!</Text>
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
                                    <Text style={globalStyles.smallLabel}>45%</Text>
                                    <Text style={styles.textLabel}>Funded</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={globalStyles.smallLabel}>172</Text>
                                    <Text style={styles.textLabel}>Investors</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={globalStyles.smallLabel}>10 Days</Text>
                                    <Text style={styles.textLabel}>Round Close</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.investmentContainer}>
                            <Image
                                style={styles.inventmentImage}
                                source={{ uri: 'https://s3-alpha-sig.figma.com/img/55aa/b93b/08747a6aa955f30bd62b90a0e5ffe4c1?Expires=1664150400&Signature=acJ7Biazgf-f9HIgynJ~cZZEvWztDY-enQbt1F9bpiTIMREIoVgXu6idj2hbRAFNGjpKywPwhPox7Rj3qNdymJHF9888wmAaCCrGLBDi2ZdzFj-PnR33cg54cVlWV88ET1UNclz3j2CCM9wpn~jA8-U48Nq9~5p5~tTAFR0ki0Lq3ABflBYyYW--P-6s8e-qHNyQSKLdH6tk4FaoReCyC-G-5ddVbTGQNlCHPIJlHZu7eYTXFXUrReNf4tVG9ZdIg9wjAmehOqIwMyCUKQP0asm08db~bT~guAk9Z1dza4ebJkeIEMufGCpo5W0r5haWEkdseSo-wVkBIUcyrCWGYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }} />
                            <View style={styles.investmentHeader}>
                                <Text style={globalStyles.smallLabel}>Airlift Technologies</Text>
                                <Text style={styles.nameLabel}>Fintech & Logistics</Text>
                            </View>
                            <Text style={[globalStyles.tinyLabel, { marginBottom: 10 }]}>Now you can shop everything in one place, and enjoy a quick 30-minute delivery right at your doorstep!</Text>
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
                                    <Text style={globalStyles.smallLabel}>45%</Text>
                                    <Text style={styles.textLabel}>Funded</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={globalStyles.smallLabel}>172</Text>
                                    <Text style={styles.textLabel}>Investors</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={globalStyles.smallLabel}>10 Days</Text>
                                    <Text style={styles.textLabel}>Round Close</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

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