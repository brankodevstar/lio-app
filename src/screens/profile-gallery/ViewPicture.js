import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FeatherIcon from 'react-native-vector-icons/Feather';

import globalStyles from "../../styles/style";
import HiFiColors from '../../styles/colors';
import fonts from '../../styles/fonts';
import MenuButton from '../../components/MenuButton';

export default ViewPicture = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer, { borderBottomWidth: 0, justifyContent: 'flex-start', alignItems: 'center' }]}>
                <MenuButton navigation={navigation} />
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={['#991450', '#40799D']}
                        style={styles.iconBack}
                    >
                        <FeatherIcon name="x" size={20} color={HiFiColors.White} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.imageContainer}
                source={require('../../../assets/images/gallery/6d2e078bf9298e50293ed20a9288b810.png')}
            />
            <View style={styles.paginationContainer}>
                <TouchableOpacity>
                    <FeatherIcon name="chevron-left" size={25} color={HiFiColors.White} />
                </TouchableOpacity>
                <Text style={[styles.paginationLabel, { marginLeft: 20, }]}> 2 </Text>
                <Text style={styles.paginationLabel}> of </Text>
                <Text style={[styles.paginationLabel, { marginRight: 20, }]}> 15 </Text>
                <TouchableOpacity>
                    <FeatherIcon name="chevron-right" size={25} color={HiFiColors.White} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconBack: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    imageContainer: {
        width: Dimensions.get("window").width,
        marginVertical: 60,
        flex: 1
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    paginationLabel: {
        fontFamily: fonts.primary,
        color: HiFiColors.White,
        fontSize: 15,
        fontWeight: '500'
    }
})