import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, Text, Pressable, Image } from 'react-native';
import * as Location from 'expo-location';
import ShopCreation from '../screens/ShopCreation';
export default function App({navigation}) {
    const [region, setRegion] = useState({
        latitude: 34.00000000,
        longitude: 9.00000000,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErroMsg('permission denied')
            return
        }
        let location = await Location.getCurrentPositionAsync()
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })

    }



    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={region}
            >
                <Marker coordinate={region} title='Marker' />

            </MapView>
            <View style={{flexDirection:'row',justifyContent:'space-between',height:'10%',backgroundColor:'#7389F4'}}>
                <Pressable onPress={() => {navigation.navigate("Shop");}} style={{backgroundColor:'#334155',width:'85%',height:'60%',borderRadius:4,margin:6,marginTop:13}}>
                    <Text  style={{color:'white',textAlign:'center',paddingTop:10}}>Validate</Text>
                </Pressable>
                <Pressable onPress={userLocation} style={{marginRight:10,marginTop:20}}>
                    <Image source={require("../images/MyLocationImage.png")} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '89%',
    },
});