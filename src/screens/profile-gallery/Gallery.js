import { View, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

import globalStyles from "../../styles/style";
import HiFiColors from '../../styles/colors';
import MenuButton from '../../components/MenuButton';

export default Gallery = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <View style={{ position: 'absolute', left: 20 }}>
                    <MenuButton navigation={navigation} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Gallery</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={{ paddingHorizontal: 15 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("EventInfoGalleryScreen") }}>
                    <View style={styles.galleryCard}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/images/baner-1.png')}
                                style={styles.galleryImage} />
                            <View style={styles.galleryCaption}>
                                <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                                <Text style={globalStyles.label}>Networking Event</Text>
                                <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("ViewPictureScreen") }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#991450', '#40799D']}
                                style={styles.icon}
                            >
                                <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                                <Text style={globalStyles.label}>15</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("EventInfoGalleryScreen") }}>
                    <View style={styles.galleryCard}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/images/baner-1.png')}
                                style={styles.galleryImage} />
                            <View style={styles.galleryCaption}>
                                <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                                <Text style={globalStyles.label}>Networking Event</Text>
                                <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("ViewPictureScreen") }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#991450', '#40799D']}
                                style={styles.icon}
                            >
                                <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                                <Text style={globalStyles.label}>15</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("EventInfoGalleryScreen") }}>
                    <View style={styles.galleryCard}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/images/baner-1.png')}
                                style={styles.galleryImage} />
                            <View style={styles.galleryCaption}>
                                <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                                <Text style={globalStyles.label}>Networking Event</Text>
                                <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("ViewPictureScreen") }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#991450', '#40799D']}
                                style={styles.icon}
                            >
                                <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                                <Text style={globalStyles.label}>15</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("EventInfoGalleryScreen") }}>
                    <View style={styles.galleryCard}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/images/baner-1.png')}
                                style={styles.galleryImage} />
                            <View style={styles.galleryCaption}>
                                <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                                <Text style={globalStyles.label}>Networking Event</Text>
                                <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("ViewPictureScreen") }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#991450', '#40799D']}
                                style={styles.icon}
                            >
                                <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                                <Text style={globalStyles.label}>15</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("EventInfoGalleryScreen") }}>
                    <View style={styles.galleryCard}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/images/baner-1.png')}
                                style={styles.galleryImage} />
                            <View style={styles.galleryCaption}>
                                <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                                <Text style={globalStyles.label}>Networking Event</Text>
                                <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("ViewPictureScreen") }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#991450', '#40799D']}
                                style={styles.icon}
                            >
                                <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                                <Text style={globalStyles.label}>15</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("EventInfoGalleryScreen") }}>
                    <View style={styles.galleryCard}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/images/baner-1.png')}
                                style={styles.galleryImage} />
                            <View style={styles.galleryCaption}>
                                <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                                <Text style={globalStyles.label}>Networking Event</Text>
                                <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("ViewPictureScreen") }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#991450', '#40799D']}
                                style={styles.icon}
                            >
                                <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                                <Text style={globalStyles.label}>15</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("EventInfoGalleryScreen") }}>
                    <View style={styles.galleryCard}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/images/baner-1.png')}
                                style={styles.galleryImage} />
                            <View style={styles.galleryCaption}>
                                <Text style={globalStyles.mediumLabel}>Start Up Grind</Text>
                                <Text style={globalStyles.label}>Networking Event</Text>
                                <Text style={globalStyles.label}>20-22 Sep, 2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("ViewPictureScreen") }}>
                            <LinearGradient
                                start={{ x: 0.0, y: 1.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#991450', '#40799D']}
                                style={styles.icon}
                            >
                                <MaterialComunityIcons name="image-album" size={20} color={HiFiColors.White} style={{ marginHorizontal: 5 }} />
                                <Text style={globalStyles.label}>15</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    galleryCard: {
        marginVertical: 5,
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    galleryImage: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    galleryCaption: {
        marginHorizontal: 10,
        alignSelf: 'flex-start',
    },
    icon: {
        width: 80,
        borderRadius: 40,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
})