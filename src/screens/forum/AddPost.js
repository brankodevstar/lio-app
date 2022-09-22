import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';

export default AddPost = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <View style={{ position: 'absolute', left: 20 }}>
                    <MenuButton navigation={navigation} />
                </View>
                <View style={styles.closeButtonPos}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FeatherIcon name="x" size={15} color={HiFiColors.White} style={styles.closeButtonBack} />
                    </TouchableOpacity>
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Create Post</Text>
            </View>
            <Image source={require('../../../assets/images/forum/5e397f029e80b36b1f356c2dff42be37.png')} style={styles.backImage} resizeMode="stretch" />
            <TouchableOpacity onPress={toggleModal}>
                <View style={styles.writeCaptionBack}>
                    <Text style={globalStyles.boldLabel}>Write Caption</Text>
                </View>
            </TouchableOpacity>

            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['down']}
                propagateSwipe={true}
                style={globalStyles.modalContainer}
            >
                <View style={styles.modalContentContainer}>
                    <Text style={styles.modalCommentTitle}>Write a Caption</Text>
                    <View style={styles.captionContainer}>
                        <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>
                            Really glad to be a part of the wonderful team. Lorem ipsum dolor sit amet, consectetur ut labore et dolore. Lorem ipsum dolor sit amet, consectetur ut labore et dolore. Lorem ipsum dolor sit amet, consectetur ut labore et dolore.
                        </Text>

                    </View>
                    <TouchableOpacity onPress={toggleModal}>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#7B61FF', '#991450', '#40799D']}
                            style={styles.uploadButtonBack}
                        >
                            <Text style={globalStyles.mediumBoldLabel}>Upload</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    closeButtonPos: {
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 65,
        top: 15
    },
    closeButtonBack: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: HiFiColors.AccentFade,

    },
    backImage: {
        width: '100%',
        height: 400
    },
    writeCaptionBack: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center',
        marginTop: 10
    },
    modalCommentTitle: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 20,
        fontWeight: '700',
        fontFamily: fonts.primary,
    },
    modalContentContainer: {
        backgroundColor: HiFiColors.Accent,
        paddingVertical: 30,
        paddingHorizontal: 20,
        height: Dimensions.get("window").height / 2 - 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    captionContainer: {
        paddingVertical: 20,
        borderBottomColor: HiFiColors.AccentFade,
        borderBottomWidth: 1
    },
    uploadButtonBack: {
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 50,
    }
})