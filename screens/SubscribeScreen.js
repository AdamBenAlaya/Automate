import * as React from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import { validateEmail } from "../utils";
import { useState } from "react";
const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');
  const [fname, SetfName] = useState('')
  const [name, SetName] = useState('')
  const [phonenbr, Setphonenbr] = useState(0)
  const [password, Setpassword] = useState('');
  const [repassord, ConfirmPassword] = useState('');
  const isEmailValid = validateEmail(email);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter Your Credentials To Access To Our Application      </Text>
      <TextInput
        style={styles.input}
        selectionColor='green'
        value={name}
        onChange={SetName}
        autoCapitalize='none'
        autoCompleteType='text'
        placeholder='Enter Your name'
        keyboardType='text'>
      </TextInput>
      <TextInput
        style={styles.input}
        selectionColor='green'
        value={fname}
        onChange={SetfName}
        autoCapitalize='none'
        autoCompleteType='text'
        placeholder='Enter Your Last name'
        keyboardType='text'>
      </TextInput>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Type your email"}
      />
      <TextInput
        style={styles.input}
        selectionColor='green'
        value={phonenbr}
        onChange={Setphonenbr}
        autoCapitalize='none'
        autoCompleteType='email'
        placeholder='Enter Your Phone Number'
        keyboardType='Numeric'>
      </TextInput>
      <TextInput
        style={styles.input}
        selectionColor='green'
        value={password}
        onChange={Setpassword}
        autoCapitalize='none'
        autoCompleteType='password'
        placeholder='Enter Your Password'
        keyboardType='password'
        secureTextEntry={true}>
      </TextInput>
      <TextInput
        style={styles.input}
        selectionColor='green'
        value={repassord}
        onChange={ConfirmPassword}
        autoCapitalize='none'
        autoCompleteType='password'
        placeholder='Enter Your Password Again'
        keyboardType='password'
        secureTextEntry={true}>
      </TextInput>
      <Button
        onPress={() => {
          Alert.alert("Account Created Successfully !!");
        }}
        disabled={!isEmailValid}
      >
        Log In
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
    alignItems: 'center',
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
});

export default SubscribeScreen;
