import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableWithoutFeedback } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default AddPost = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { justifyContent: 'space-between', borderBottomWidth: 0 }]}>
                <TouchableOpacity>
                    <View style={styles.closeButtonBack}>
                        <FeatherIcon name="x" size={15} color={HiFiColors.White} />
                    </View>
                </TouchableOpacity>
                <Text style={globalStyles.mediumStrongLabel}>Create Post</Text>
                <View></View>
            </View>
            <View>
                <Image source={require('../../../assets/images/forum/5e397f029e80b36b1f356c2dff42be37.png')} style={styles.backImage} resizeMode="stretch" />
            </View>
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
                style={styles.modalContainer}>
                <View style={styles.modalContentContainer}>
                    <Text style={styles.modalCommentTitle}>Write a Caption</Text>
                    <View style={styles.captionContainer}>
                        <Text style={[globalStyles.label, { color: HiFiColors.Label }]}>
                            Really glad to be a part of the wonderful team. Lorem ipsum dolor sit amet, consectetur ut labore et dolore. Lorem ipsum dolor sit amet, consectetur ut labore et dolore. Lorem ipsum dolor sit amet, consectetur ut labore et dolore.
                        </Text>
                        <TouchableOpacity>
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
                    <View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    closeButtonBack: {
        padding: 5,
        borderRadius: 50,
        backgroundColor: HiFiColors.AccentFade
    },
    backImage: {
        width: '100%',
        height: 500
    },
    writeCaptionBack: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        marginTop: 10
    },
    modalContainer: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalCommentTitle: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 20,
        fontWeight: '700'
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