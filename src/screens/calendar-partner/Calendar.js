import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';

import globalStyles from '../../styles/style';
import HiFiColors from '../../styles/colors';
import Navigation from '../profile/Navigation';
import MenuButton from '../../components/MenuButton';
import {ADMIN_API_URL} from '../../../config';
import Action from '../../service';

export default EventCalendar = ({navigation}) => {
    const [moreDetail, setMoreDetail] = useState(true);
    const [events, setEvents] = useState([]);
    const [markDates, setMarkDates] = useState({});
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    const getEvents = async () => {
        const response = await Action.events.list();
        if (response.data) {
            setEvents(response.data);
            let markedDatesTemp = {};
            const markStyle = {marked: true, dotColor: '#50cebb'};
            let upcomingEventsTemp = [];
            response.data.map(item => {
                markedDatesTemp[
                    moment(item.activeTime, 'YYYY-MM-DD').format().split('T')[0]
                ] = markStyle;
            });
            // let eventsClone = response.data.sort((a, b) => {
            //     return Number.parseInt(new Date(a.activeTime)) >
            //         Number.parseInt(new Date(b.activeTime))
            //         ? 1
            //         : -1;
            // });
            // console.log('eventsClone => ', eventsClone);
            // // setEvents(eventsClone);
            // eventsClone.map(item => {
            //     if (
            //         new Date().getTime() < new Date(item.activeTime).getTime()
            //     ) {
            //         console.log('item.activeTime = ', item.activeTime);
            //         upcomingEventsTemp.push(item);
            //     }
            //     markedDatesTemp[
            //         moment(item.activeTime, 'YYYY-MM-DD').format().split('T')[0]
            //     ] = markStyle;
            // });
            setMarkDates(markedDatesTemp);
            setUpcomingEvents(upcomingEventsTemp);
        }
    };

    const toggleMoreDetail = () => {
        setMoreDetail(!moreDetail);
    };

    useEffect(() => {
        navigation.addListener('focus', () => {
            getEvents();
        });
    }, [navigation]);

    const clickDate = (day) => {
        let upcomingEvents = [];
        events.map(item => {
            let dateString = moment(item.activeTime, 'YYYY-MM-DD').format().split('T')[0];
            if (day.dateString === dateString) {
                console.log('item.activeTime = ', item.activeTime);
                upcomingEvents.push(item);
            }
        });
        setUpcomingEvents(upcomingEvents);
    };

    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.headerContainer]}>
                <View style={{position: 'absolute', left: 20}}>
                    <MenuButton navigation={navigation} style={{left: 0}} />
                </View>
                <Text style={globalStyles.mediumStrongLabel}>Calendar</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.calendarContainer}>
                    <Calendar
                        markedDates={markDates}
                        onDayPress={(day) => clickDate(day) }
                        theme={{
                            calendarBackground: HiFiColors.AccentFade,
                            selectedDayBackgroundColor: HiFiColors.AccentFade,
                            indicatorColor: HiFiColors.AccentFade,
                            selectedDayTextColor: HiFiColors.White,
                            todayTextColor: HiFiColors.White,
                            todayBackgroundColor: HiFiColors.Primary,
                            dayTextColor: HiFiColors.White,
                            textDisabledColor: HiFiColors.Label,
                            arrowColor: HiFiColors.White,
                            indicatorColor: HiFiColors.White,
                            monthTextColor: HiFiColors.White,
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '300',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 14,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 14,
                        }}
                        hideExtraDays={true}
                    />
                    {/* <CalendarPicker
                        weekdays={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
                        textStyle={globalStyles.label}
                        width={Dimensions.get('screen').width - 50}
                        startFromMonday={true}
                        marking
                        previousComponent={
                            <FeatherIcon
                                name="chevron-left"
                                size={15}
                                color={HiFiColors.Label}
                                style={{left: 10}}
                            />
                        }
                        nextComponent={
                            <FeatherIcon
                                name="chevron-right"
                                size={15}
                                color={HiFiColors.Label}
                                style={{right: 10}}
                            />
                        }
                        selectedDayStyle={{backgroundColor: HiFiColors.Primary}}
                        selectedDate
                        dayLabelsWrapper={{
                            borderBottomWidth: 0,
                            borderTopWidth: 0,
                        }}
                        yearTitleStyle={globalStyles.mediumStrongLabel}
                        monthTitleStyle={globalStyles.mediumStrongLabel}
                    /> */}
                </View>
                {/* <View style={styles.buttonGroup}>
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
                        <View
                            style={[
                                styles.buttonBack,
                                {backgroundColor: HiFiColors.White},
                            ]}>
                            <Text
                                style={[
                                    globalStyles.boldLabel,
                                    {color: HiFiColors.Accent},
                                ]}>
                                Completed
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.eventsLabelContainer}>
                    <Text style={globalStyles.mediumBoldLabel}>
                        {upcomingEvents.length} Upcoming Events
                    </Text>
                    <TouchableOpacity onPress={toggleMoreDetail}>
                        {moreDetail ? (
                            <FeatherIcon
                                name="chevron-up"
                                size={15}
                                color={HiFiColors.White}
                            />
                        ) : (
                            <FeatherIcon
                                name="chevron-down"
                                size={15}
                                color={HiFiColors.White}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            {moreDetail && (
                <ScrollView style={styles.eventsContainer}>
                    {upcomingEvents.map((item, index) => (
                        <View key={index} style={styles.eventCard}>
                            <Text
                                style={[
                                    globalStyles.tinyLabel,
                                    {color: HiFiColors.Label, marginRight: 10},
                                ]}>
                                {
                                    moment(new Date(item.activeTime)).format(
                                    'yyyy-MM-DD HH.mm A',
                                )}
                            </Text>
                            <View style={{flex: 1}}>
                                <TouchableOpacity
                                    style={[styles.eventPanel]}
                                    onPress={() => {
                                        navigation.navigate(
                                            'PartnerDetailScreen',
                                        );
                                    }}>
                                    <Image
                                        source={{
                                            uri: `${ADMIN_API_URL}upload/${item.photos[0]}`,
                                        }}
                                        style={styles.eventImage}
                                        resizeMode="stretch"
                                    />
                                    <View>
                                        <Text
                                            style={
                                                globalStyles.mediumBoldLabel
                                            }>
                                            {item.title}
                                        </Text>
                                        <Text style={globalStyles.tinyLabel}>
                                            {item.category}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                    {/* <View style={styles.eventCard}>
                        <Text
                            style={[
                                globalStyles.tinyLabel,
                                {color: HiFiColors.Label, marginRight: 20},
                            ]}>
                            10:00 PM
                        </Text>
                        <View
                            style={[
                                styles.eventPanel,
                                {backgroundColor: HiFiColors.AccentFade},
                            ]}>
                            <Image
                                source={require('../../../assets/images/timeline.png')}
                                style={{marginLeft: -10}}
                            />
                        </View>
                    </View> */}
                </ScrollView>
            )}
        </View>
    );
};

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
        padding: 20,
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    buttonBack: {
        backgroundColor: HiFiColors.AccentFade,
        paddingVertical: 6,
        width: Dimensions.get('window').width / 3 - 20,
        alignItems: 'center',
        borderRadius: 100,
    },
    eventsLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    eventsContainer: {
        paddingHorizontal: 20,
        marginBottom: 10,
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
        backgroundColor: HiFiColors.AccentFade,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 70,
    },
    eventImage: {
        width: 56,
        height: 56,
        borderRadius: 5,
        marginRight: 10,
    },
});
