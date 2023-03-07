import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../components/Button";

const Schedule = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text styles={styles.Month1}>
        July
      </Text>
      <Text styles={styles.Month2}>
        August
      </Text >
      <Text styles={styles.Month3}>
        September
      </Text>
      <Text styles={styles.Month4}>
       October
      </Text>
      <Text styles={styles.Month5}>
        November
      </Text>
      <Text styles={styles.Month6}>
        December
      </Text>
      <Text styles={styles.Months}>
        M T W T F S S
      </Text>
      <Text styles={styles.Row1}>
        1 2 3 4 5 6 7
      </Text>
      <Text styles={styles.Row2}>
        8 9 10 11 12 13 14
      </Text >
      <Text styles={styles.Row3}>
        15 16 17 18 19 20 21
      </Text>
      <Text styles={styles.Row4}>
        29 30 31
      </Text>
      <View styles={styles.Title}>
        <Text>
            Today's Schedule
        </Text>
        <Text styles={styles.time}>
            08:30
        </Text>
        <Text styles={styles.ScheduleName}>
            oil change
        </Text>
      </View>
      <View>
        <TexT>
            Dashboard
        </TexT>
        <Text>
            Shop list
        </Text>
        <Text>
            Schedule
        </Text>
        <Text>
            Your Profile
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default Schedule;
