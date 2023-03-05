import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import { Picker } from '@react-native-picker/picker';
import PhoneInput from 'react-native-phone-number-input';
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/Car.png")}
        />
        <Text style={styles.title}>
          Welcome To Automate App
        </Text>
        <Text style={styles.title}>
          First Choose To Either Sign Up As A Mechanical Or A Car Owner
        </Text>
        <Picker style={styles.input} placeholder='Choose '>
          <Picker.Item label="Mechanical" value="Mechanical" />
          <Picker.Item label="Car Owner" value="Car Owner" />
          <Picker.Item label="Both" value="Both" />
        </Picker>
      </View>
      <Button
        onPress={() => {
          navigation.navigate("Shop");
        }}
      >
        Go To The Form
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 12,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
