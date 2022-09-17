import { View, Text, StyleSheet, Image, } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

import globalStyles from "../../styles/style";
import HiFiColors from '../../styles/colors';


export default Gallery = () => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <Text style={globalStyles.mediumStrongLabel}>Gallery</Text>
            </View>
            <ScrollView style={{ paddingBottom: 20 }}>
                <View style={styles.galleryContent}>
                    <View style={styles.galleryCard}>
                        <Image
                            source={require('../../../assets/images/baner-1.png')}
                            style={styles.galleryImage} />
                        <View style={styles.galleryCaption}>
                            <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.label}>Networking Event</Text>
                            <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={styles.icon}
                        >
                            <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                            <Text style={globalStyles.label}>15</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.galleryCard}>
                        <Image
                            source={require('../../../assets/images/baner-1.png')}
                            style={styles.galleryImage} />
                        <View style={styles.galleryCaption}>
                            <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.label}>Networking Event</Text>
                            <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={styles.icon}
                        >
                            <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                            <Text style={globalStyles.label}>15</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.galleryCard}>
                        <Image
                            source={require('../../../assets/images/baner-1.png')}
                            style={styles.galleryImage} />
                        <View style={styles.galleryCaption}>
                            <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.label}>Networking Event</Text>
                            <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={styles.icon}
                        >
                            <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                            <Text style={globalStyles.label}>15</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.galleryCard}>
                        <Image
                            source={require('../../../assets/images/baner-1.png')}
                            style={styles.galleryImage} />
                        <View style={styles.galleryCaption}>
                            <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.label}>Networking Event</Text>
                            <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={styles.icon}
                        >
                            <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                            <Text style={globalStyles.label}>15</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.galleryCard}>
                        <Image
                            source={require('../../../assets/images/baner-1.png')}
                            style={styles.galleryImage} />
                        <View style={styles.galleryCaption}>
                            <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.label}>Networking Event</Text>
                            <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={styles.icon}
                        >
                            <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                            <Text style={globalStyles.label}>15</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.galleryCard}>
                        <Image
                            source={require('../../../assets/images/baner-1.png')}
                            style={styles.galleryImage} />
                        <View style={styles.galleryCaption}>
                            <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.label}>Networking Event</Text>
                            <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={styles.icon}
                        >
                            <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                            <Text style={globalStyles.label}>15</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.galleryCard}>
                        <Image
                            source={require('../../../assets/images/baner-1.png')}
                            style={styles.galleryImage} />
                        <View style={styles.galleryCaption}>
                            <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.label}>Networking Event</Text>
                            <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={styles.icon}
                        >
                            <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                            <Text style={globalStyles.label}>15</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.galleryCard}>
                        <Image
                            source={require('../../../assets/images/baner-1.png')}
                            style={styles.galleryImage} />
                        <View style={styles.galleryCaption}>
                            <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.label}>Networking Event</Text>
                            <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#991450', '#40799D']}
                            style={styles.icon}
                        >
                            <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                            <Text style={globalStyles.label}>15</Text>
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    galleryContent: {
        alignItems: 'center',
        paddingTop: 10,
    },
    galleryCard: {
        width: '95%',
        height: 100,
        backgroundColor: HiFiColors.AccentFade,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    galleryImage: {
        width: 70,
        height: 70,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    galleryCaption: {
        marginHorizontal: 10,
        alignSelf: 'flex-start',
        width: '45%',
    },
    icon: {
        width: 80,
        borderRadius: 40,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        height: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})