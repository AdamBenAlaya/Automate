import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'

export default function ShopCreation({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.textdecoration, styles.mainText]}>Adding A Store</Text>

            <View style={[styles.form1]}>
                <View style={{ marginTop: 30 }}>
                    <Text style={[styles.textdecoration, styles.labels]}>Give It A Specific Name :</Text>
                    <TextInput
                        style={styles.inputs}
                    />
                </View>

                <View style={{ marginTop: 30 }}>

                    <Text style={[styles.textdecoration, styles.labels]}>Speciality of the store :</Text>
                    <TextInput
                        style={styles.inputs}
                    />
                </View>

                <Pressable style={{marginTop:30}} 
                onPress={()=>{
                    navigation.navigate("Map")
                }}>
                <Text style={[styles.textdecoration, styles.locationButton]}
                
                >Add Location</Text>
            </Pressable>
                <View style={{ marginTop: 30 }}>

                    <Text style={[styles.textdecoration, styles.labels]}>Speciality of the store :</Text>
                    <TextInput
                        style={styles.inputs}
                    />
                </View>
                <Pressable style={{ marginTop: 30}}
                    onPress={() => {
                        navigation.navigate("Map")
                    }}>
                    <Text style={[styles.textdecoration, styles.locationButton, styles.addloc]}
                    >Add Location</Text>
                </Pressable>

            </View>

            <View style={styles.form2}>

                <Pressable style={styles.addbutton} >
                    <Text style={[styles.textdecoration, styles.addbuttonText]}>Add Shop!</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addloc: {
        textDecorationLine: 'underline',
    },
    container: {
        flex: 1,
        backgroundColor: '#1E293B'
    },
    mainText: {
        textAlign: 'center',
        margin: 20,
        fontSize: 22
    },
    form1: {
        flex: 0.7,
        // backgroundColor:'blue'
    },
    form2: {
        flex: 0.3
    },
    textdecoration: {
        color: 'white',
    },
    labels: {
        paddingLeft: 20,
        left: 20,
    },
    inputs: {
        width: 330,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 6,
        paddingLeft: 5,
        left: 25,
    },
    addbutton: {
        width: 320,
        backgroundColor: '#7389F4',
        margin: 20,
        height: 58.55,
        borderRadius: 12,
        left:20,

    },
    addbuttonText: {
        textAlign: 'center',
        paddingTop: 19

    },
    locationButton: {
        textAlign: 'center'
    }
})