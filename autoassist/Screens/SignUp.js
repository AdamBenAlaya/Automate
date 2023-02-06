import React, { useState } from 'react'
import { StyleSheet, Image, View, Text, Button, Pressable } from 'react-native'
import { TextInput } from 'react-native-paper'
import PhoneInput from 'react-native-phone-number-input';
import CompleteSignUp from './CompleteSignUp';
import {navigation} from '@react-navigation/native';
const SignUp = ({ navigation }) => {
    const [fname, SetfName] = useState('')
    const [name, SetName] = useState('')
    const [phonenbr, Setphonenbr] = useState(0)
    const [email, Setemail] = useState('');
    const [password, Setpassword] = useState('');
    const [repassord, ConfirmPassword] = useState('');
    /*                <Button title='Sign Up' style={styles.button} />

    */ 
    return (
        <View style={styles.container}>
            <Image style={styles.logoStyle}
                source={require('../Logo/324160435_2264882830359139_6470241347563821199_n.png')}>

            </Image>
            <Text style={styles.headerText}>
                Welcome To Auto Mate

            </Text>
            <TextInput
                style={styles.input}
                selectionColor='green'
                value={name}
                onChange={SetName}
                autoCapitalize='none'
                autoCompleteType='email'
                placeholder='Enter Your name'
                keyboardType='text'>
            </TextInput>
            <TextInput
                style={styles.input}
                selectionColor='green'
                value={fname}
                onChange={SetfName}
                autoCapitalize='none'
                autoCompleteType='name'
                placeholder='Enter Your Last Name '
                keyboardType='text'>
            </TextInput>
            <PhoneInput style={styles.input}
                defaultValue={phonenbr}
                onChangeText={Setphonenbr}
            />
            <TextInput
                style={styles.input}
                selectionColor='green'
                value={email}
                onChange={Setemail}
                autoCapitalize='none'
                autoCompleteType='email'
                placeholder='Enter Your Email'
                keyboardType='email-address'>
            </TextInput>
            <TextInput
                style={styles.input}
                selectionColor='green'
                value={password}
                onChange={Setpassword}
                autoCompleteType='password'
                placeholder='Enter Your password'
                keyboardType='password'
                secureTextEntry={true}
            >
            </TextInput>
            <TextInput
                style={styles.input}
                selectionColor='green'
                value={repassord}
                onChange={ConfirmPassword}
                autoCompleteType='password'
                placeholder='Confirm Your password'
                keyboardType='password'
                secureTextEntry={true}
            >
            </TextInput>
            <Pressable onPress={() => navigation.navigate({CompleteSignUp})}>
                <Text>Sign Up</Text>
            </Pressable>

            <Text style={styles.forgotPassword}>
                Forgot Your Password ?
            </Text>
            <Text>Already Have An Account ?</Text><Text style={{ color: 'blue' }}>Sign Up</Text>
        </View>





    );
};
export default SignUp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyle: {
        width: 250,
        height: 110,
        marginBottom: 8,
        resizeMode: 'contain'
    },
    headerText: {
        fontSize: 21,
        color: "green",
        fontWeight: 'bold',
        paddingVertical: 12,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
        color: 'blue'
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: "#0283a9",
    },
    link: {
        fontWeight: 'bold',
        color: "#0283a9",
    },
    input: {
        width: '100%',
        borderRadius: 20,
        marginVertical: 12,
        backgroundColor: 'white',
    },
    button: {
        width: '35%',
        height: 60,
        marginVertical: 10,
        paddingVertical: 2,
        backgroundColor: "green",
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
})