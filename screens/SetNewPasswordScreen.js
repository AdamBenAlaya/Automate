import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

function SetNewPasswordScreen() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View
      style={styles.container}>
      <Text
        style={styles.tex1}> Set New Password </Text>
      <Text style={styles.tex2}
      > Enter your new password below and check the hint while setting it. </Text>
      <View>
        <TextInput
          style={styles.inputV}
          placeholder="Set new password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >

          <Text
            style={{ color: 'green', }}
          >
            Hint here
          </Text>
          <Text
            style={{
              color: 'red',
              textAlign: 'left',
            }}
          >
            Forgot password?
          </Text>
        </View>

      </View>
      <View>
        <TextInput
          style={styles.inputV}
          placeholder="Confirm new password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View
        style={styles.butt}
      >
        <Button

          title='Submit Password'
          onPress={() => console.log("clicked")}

        />
      </View>

    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7C0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tex1: {
    width: 300,
    height: 38,
    fontWeight: 'bold',
    fontSize: 32,
    textAign: 'center',
    color: '#000113',
  },

  tex2: {
    width: 300,
    height: 90,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000113',
    paddingTop: 16,
    marginTop: 30,
    marginBottom: 40,


  },

  inputV: {
    width: 345,
    height: 70,
    left: 2,
    marginBottom: 20,
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 2,
    padding: 10,


  },

  butt: {


    justifyContent: 'center',
    alignItems: ' center',
    padding: 10,
    position: 'absolute',
    width: 252,
    height: 56,
    left: 85,
    top: 678,
    backgroundColor: '#7389F4',
    borderRadius: 8,
  },


})


export default SetNewPasswordScreen;
