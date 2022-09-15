import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';

export default Calendar = () => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerContainer}>
                <Text style={globalStyles.mediumStrongLabel}>Calendar</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.calendarContainer}>
                    <CalendarPicker
                        weekdays={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
                        textStyle={globalStyles.label}
                        width={Dimensions.get("screen").width - 50}
                        startFromMonday={true}
                        previousComponent={<FeatherIcon name="chevron-left" size={15} color={HiFiColors.Label} style={{ left: 10 }} />}
                        nextComponent={<FeatherIcon name="chevron-right" size={15} color={HiFiColors.Label} style={{ right: 10 }} />}
                        selectedDayStyle={{ backgroundColor: HiFiColors.Primary }}
                        dayLabelsWrapper={{ borderBottomWidth: 0, borderTopWidth: 0 }}
                        yearTitleStyle={globalStyles.mediumStrongLabel}
                        monthTitleStyle={globalStyles.mediumStrongLabel}
                    />
                </View>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity>
                        <View style={styles.buttonBack}>
                            <Text style={globalStyles.boldLabel}>Ongoing</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.buttonBack}>
                            <Text style={globalStyles.boldLabel}>Upcoming</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.buttonBack, { backgroundColor: HiFiColors.White }]}>
                            <Text style={[globalStyles.boldLabel, { color: HiFiColors.Accent }]}>Completed</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.eventsLabelContainer}>
                    <Text style={globalStyles.mediumBoldLabel}>6 Upcoming Events</Text>
                    <TouchableOpacity>
                        <FeatherIcon name="chevron-up" size={15} color={HiFiColors.White} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.eventsContainer}>
                <View style={styles.eventCard}>
                    <Text style={[globalStyles.tinyLabel, { color: HiFiColors.Label, marginRight: 20 }]}>09:00 PM</Text>
                    <View style={styles.eventPanel}>
                        <Image source={require('../../../assets/images/event-001.png')} style={styles.eventImage} resizeMode="stretch" />
                        <View>
                            <Text style={globalStyles.mediumBoldLabel}>Start Up Grind</Text>
                            <Text style={globalStyles.tinyLabel}>Networking Event</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.eventCard}>
                    <Text style={[globalStyles.tinyLabel, { color: HiFiColors.Label, marginRight: 20 }]}>10:00 PM</Text>
                    <View style={[styles.eventPanel, { backgroundColor: HiFiColors.AccentFade }]}>
                        <Image source={require("../../../assets/images/timeline.png")} style={{ marginLeft: -10 }} />
                    </View>
                </View>
                <View style={styles.eventCard}>
                    <Text style={[globalStyles.tinyLabel, { color: HiFiColors.Label, marginRight: 20 }]}>11:00 PM</Text>
                    <View style={[styles.eventPanel, { backgroundColor: HiFiColors.AccentFade }]}>
                    </View>
                </View>
                <View style={styles.eventCard}>
                    <Text style={[globalStyles.tinyLabel, { color: HiFiColors.Label, marginRight: 20 }]}>12:00 AM</Text>
                    <View style={[styles.eventPanel, { backgroundColor: HiFiColors.AccentFade }]}>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    calendarContainer: {
        backgroundColor: HiFiColors.AccentFade,
        borderColor: HiFiColors.Label,
        borderWidth: 1,
        borderRadius: 5,
        padding: 20
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    buttonBack: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 6,
        width: Dimensions.get("window").width / 3 - 20,
        alignItems: 'center',
        borderRadius: 100
    },
    eventsLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    eventsContainer: {
        paddingHorizontal: 20,
        marginBottom: 10
    },
    eventCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: HiFiColors.AccentFade,
        paddingVertical: 5,
    },
    eventPanel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: HiFiColors.Primary,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 70

    },
    eventImage: {
        width: 56,
        height: 56,
        borderRadius: 5,
        marginRight: 10
    }
})
