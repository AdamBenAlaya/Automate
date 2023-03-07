import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
export default function ForgotPassword() {
    const [number, onChangeNumber] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.tex1}>
                Forgot Password
            </Text>
            <Text style={styles.tex2}>
                Opps. It happens to the best of us. Input your email address to fix the issue.
            </Text>
            <View
                style={styles.inputV}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType='numeric'
                    placeholder='Enter the Phone number'
                />
            </View>
            <View
                style={styles.inputV}>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder='Enter the email adress'
                />
            </View>
            <View style={styles.butt} >
                <Button
                    title='Continue'
                    onPress={() => console.log('clicked!')}
                />
            </View>

        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#B7C0F4',
        justifyContent: 'center',
        alignItems: 'center',
    },

    tex1: {
        fontSize: 32,
        color: '#334155',
    },

    tex2:
    {
        width: 252,
        height: 40,
        fontSize: 16,
        lineHeight: 20,
        color: '#334155',
    },

    inputV: {
        alignItems: 'center',
        width: 345,
        height: 70,
        left: 2,
        marginBottom: 20,
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        marginTop: 20,
    },

    input: {
        height: 50,
        flex: 1,
        marginLeft: 20,
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