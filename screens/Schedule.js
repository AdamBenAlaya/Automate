import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const Schedule = ({ navigation }) => {
  


  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <Calendar
        // Specify style for calendar container element. Default = {}
        style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350
              }}
      // Specify theme properties to override specific styles for calendar parts. Default = {}
      theme={{
      backgroundColor: '#0A233F',
      calendarBackground: '#0A233F',
      textSectionTitleColor: '#b6c1cd',
      textSectionTitleDisabledColor: '#d9e1e8',
      selectedDayBackgroundColor: '#00adf5',
      selectedDayTextColor: '#ffffff',
      todayTextColor: '#00adf5',
      dayTextColor: '#2d4150',
      textDisabledColor: '#d9e1e8',
      dotColor: '#00adf5',
      selectedDotColor: '#ffffff',
      arrowColor: 'orange',
      disabledArrowColor: '#d9e1e8',
      monthTextColor: 'blue',
      indicatorColor: 'blue',
      textDayFontFamily: 'monospace',
      textMonthFontFamily: 'monospace',
      textDayHeaderFontFamily: 'monospace',
      textDayFontWeight: '300',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: '300',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
      }}
      />
      <View style ={styles.ScheduleBox}>
        <Text>
        Today's Schedule
        </Text>
        <Text>
        08:30
        </Text>
        <Text>
        oil change
        </Text>
      </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
          containerMain:{
            backgroundColor: "#0A233F",
          },
          container:{
            marginBottom:40,
            marginTop: 70,
          },

          ScheduleBox:{
            position: "absolute",
            width: 392,
            height: 294,
            left: 0,
            top: 471,

            
            background: "#0A233F",  
            borderRadius: 30,

          }
});

export default Schedule;
