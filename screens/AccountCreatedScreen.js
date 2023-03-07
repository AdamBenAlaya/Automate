import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const AccountCreatedScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#B7C0F4', padding: 5 }}>
            <Image
                styles={styles.verif}
                source={require('../assets/Group57.png')} />
            <Text style={styles.text}>account Created!</Text>
            <Text style={[styles.text, { marginTop: 20, marginBottom: 200, fontSize: 18 }]}>Your account has been successfully created </Text>
            <View 
            style={styles.butt}
            >

            <Button title="Back to login!" onPress={() => console.log("Button pressed!")} />
            </View>
        </View>
    );
};


export default AccountCreatedScreen;
const styles = StyleSheet.create({
    verif: {
        position: 'absolute',
        width: 200,
        height: 200,
        left: '50%',
        top: '50%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
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

});

