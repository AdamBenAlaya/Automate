import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

const OTPScreen = () => {
  const [otpN, setNOTP] = useState('');
  const [otpE, setEOTP] = useState('');
  // const otpInput = useRef(null);

  const handleOTPChange = (text) => {
    setNOTP(text);
    setEOTP(text);
  };

  const handleVerifyOTP = () => {
    // Add your OTP verification logic here
  };
  const otpNdigits = otpN.split('')
  const otpEdigits = otpE.split('')




  return (

    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification </Text>
      <Text style={styles.title1}>Enter the OTP sent to _+21627114764  </Text>
      <OTPTextInput tintColor='blue' ref={otpInput} />
      <Text style={styles.title1}>Enter the OTP sent to your email </Text>
      <OTPTextInput tintColor='blue' ref={otpInput} />
      <Text style={{
        marginBottom: 20,
        fontWeight: 'bold'
      }} > 00:120 sec  </Text>
      <Text style={{
        marginBottom: 50,
        fontWeight: 'bold',
      }}>Don't receive code? Re-send </Text>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B7C0F4',
    padding: 60,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  otpDigitContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpDigit: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: ' center',
    padding: 10,
    position: 'absolute',
    width: 252,
    height: 56,
    left: 85,
    top: 750,
    backgroundColor: '#7389F4',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    left: 80,
  },
  title1: {
    fontSize: 15,

    marginBottom: 20,
  },

};

export default OTPScreen;


