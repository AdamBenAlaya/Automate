import { Image, Text, StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity,Pressable } from 'react-native'
import React, { Component } from 'react'
import Button from "../components/Button";


const CustomButton = ({ title, onPress, buttonStyle, textStyle },{navigation}) => {
    return (
        <TouchableOpacity onPress={(onPress)} style={[styles.customButton, buttonStyle]}>
            <Text style={[styles.customButtonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
const SignUp = ({navigation}) => {
    const handleLogin = ({navigation}) => {
        alert('Account Created Successfully !')
    };
    return (
        <KeyboardAvoidingView behavior='padding' style={{backgroundColor:'#94A3B8' ,flex:1}}>
            <View>
                <Text style={styles.mainword}>Sign Up</Text>
                <Text style={styles.labelname}>Username:</Text>
                <TextInput
                    style={styles.inputname}
                />
                <Text style={styles.labelemail}>Email:</Text>
                <TextInput
                    style={styles.inputemail}
                /> 
                <Text style={styles.labelphone}>Phone Number:</Text>
                <TextInput style={styles.inputphone}
                />
                <Text style={styles.labelpass}>Enter Your Password</Text>
                <TextInput
                    style={styles.inputpass} />
                <Text style={styles.labelmec}>Choose To Sign Up as <Text style={{ color: 'black' }}>Mechanical</Text>Or A <Text style={{ color: 'black' }}>Car Owner</Text></Text>
                <TextInput
                    style={styles.inputmec} />

                <Button
                    onPress={() => {
                    navigation.navigate("ViewInfo");
                    }}
                >
                    Go To The Form
                </Button>
            </View>
            <CustomButton
                title="SignUp"
                onPress={()=>{
                    navigation.navigate('OtpScreen')
                }}
                buttonStyle={{ marginTop: 20, borderRadius: 10 }}
                textStyle={{ fontSize: 20 }}
            />
            <Text style={styles.continue}>Or Continue With</Text>
            <Image source={require("../assets/Signgoogle.png")} style={styles.google} />
            <Image source={require("../assets/continuefacebook.png")} style={styles.facebook} />
            <Text style={styles.logc}>Already Have An Account ? <Pressable style={{ color: 'white' }}><Text>Log In</Text></Pressable></Text>
        </KeyboardAvoidingView>
        
    )
}
const styles = StyleSheet.create({
    mainword:{
        position:'absolute',
        width:160,
        height:50,
        left:140,
        top:130,
        fontFamily:'Roboto',
        fontStyle:'normal',
        //fontWeight:400,
        fontSize:32,
        lineHeight:40,
        color:'#FFFFFF',
    },
    logc: {
        position: 'absolute',
        width:500,
        height:20,
        left:89,
        top:790,
        fontFamily:'Roboto',
        fontStyle:'normal',
        //fontWeight:400,
        fontSize:15,
        lineHeight:18,
    },
    google: {
        marginTop: 13,
        resizeMode: 'contain',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 20,
        position: 'absolute',
        width: 120,
        height: 40,
        left: 30,
        top: 710,
    },
    facebook: {
        marginTop: 13,
        resizeMode: 'contain',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 20,
        position: 'absolute',
        width: 120,
        height: 37,
        left: 250,
        top: 710,
    },
    continue: {
        position: 'absolute',
        width: 230,
        height: 16,
        left: 140,
        top: 700,
        lineHeight: 16,
        fontSize: 16,
       // fontWeight: 400,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
    },
    customButton: {
        backgroundColor: '#334155',
        height: 40,
        width: 298,
        height: 40,
        left: 46,
        top: 510,
    },
    customButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    inputmec: {
        position: 'absolute',
        width: 298,
        height: 130,
        left: 47,
        top: 479,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    labelmec: {
        fontFamily: 'Roboto',
        //fontWeight: 400,
        width: 350,
        height: 20,
        left: 47,
        top: 479,
        fontSize: 12,
        color: '#FFFFFF',
    },
    labelpass: {
        fontFamily: 'Roboto',
        //fontWeight: 400,
        width: 200,
        height: 20,
        left: 47,
        top: 404,
        fontSize: 12,
        color: '#FFFFFF',
    },
    inputpass: {
        position: 'absolute',
        width: 298,
        height: 100,
        left: 47,
        top: 404,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    inputphone: {
        position: 'absolute',
        width: 298,
        height: 80,
        left: 47,
        top: 350,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    labelphone: {
        fontFamily: 'Roboto',
        //fontWeight: 400,
        width: 110,
        height: 20,
        left: 47,
        top: 350,
        fontSize: 12,
        color: '#FFFFFF',
    },
    inputemail: {
        position: 'absolute',
        width: 298,
        height: 65,
        left: 47,
        top: 275,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    labelemail: {
        fontFamily: 'Roboto',
       // fontWeight: 400,
        width: 100,
        height: 20,
        left: 47,
        top: 275,
        fontSize: 12,
        color: '#FFFFFF',
    },
    labelname: {
        fontFamily: 'Roboto',
        //fontWeight: 400,
        width: 100,
        height: 20,
        left: 47,
        top: 210,
        fontSize: 12,
        color: '#FFFFFF',
    },
    inputname: {
        position: 'absolute',
        width: 298,
        height: 50,
        left: 47,
        top: 210,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
});
export default SignUp;