import React from 'react';
import { TextInput, View, StyleSheet, Text, Image, Button } from 'react-native';

function PasswordRecoverySuccessful() {

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
                        secureTextEntry={true}
                        value={'**********'}
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
                        secureTextEntry={true}
                        value={'**********'}
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

            
            <Image
                style={styles.img}
                source={require('../assets/Frame16.png')}
            />


            <View
                style={styles.butt}
            >
                
                <Button

                    title='Back to Login'
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
       
 alignItems: 'center',
        
    },

    tex1: {
        width: 300,
        height: 38,
        fontWeight: 'bold',
        fontSize: 32,
        textAign: 'center',
        color: '#000113',
        marginBottom:10,
        marginTop:50,
    },


    tex2: {
        width: 300,
        height: 90,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000113',
        paddingTop: 40,
        marginBottom: 30,


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
        top: 800,
        backgroundColor: '#7389F4',
        borderRadius: 8,
    },

    img: {
        position: 'absolute',
        width: 304,
        height: 280,
        left: 55,
        top: 466,


    }


})


export default PasswordRecoverySuccessful;