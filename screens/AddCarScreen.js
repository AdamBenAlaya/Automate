import {  Text,SafeAreaView,ScrollView,Image,View,StyleSheet } from 'react-native';
import React, { useState} from 'react';
import COLORS from '../utils/Color';
import { TextInput } from 'react-native';
import Button from '../utils/button';
const AddCarScreen =({navigation})=>{
    const car ={
        brand: "",
        CarModel: "",
        kilometrage: "",
        oilChange:"",
        TechnicalVisit:"",
    };
    const [carInfo,SetCarInfo] =useState(car);
    console.log(carInfo);
return (
    <SafeAreaView style={{backgroundColor: COLORS.purple, flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20,alignItems:'center'}}>
        <Text style={{color: COLORS.white, fontSize: 40, fontWeight: 'bold', textAlign:'center'}}>
          Add your car
        </Text>
       <Image
       style={{width: 102,height: 88}}
       source={require('../images/add.png')}
       resizeMode='cover'
       />
       <View style={{marginVertical:20}} >
        <Text style={styles.brandStyle} >brand:</Text>
        <TextInput
        value={carInfo.brand}
        onChangeText={(text) => {
        SetCarInfo({ brand: text });
        }}
        outlined
        style={{width: 350,
            height: 42.73,
            left: 0,
            top: 39.27,
          borderWidth:2,
          backgroundColor:'#374151'}}
        />
        <Text style={styles.CarModelStyle} >CarModel:</Text>
        <TextInput
        value={carInfo.CarModel}
        onChangeText={(text) => {
        SetCarInfo({ CarModel: text });
        }}
        outlined
        style={{width: 350,
            height: 40,
            left: 0,
            top: 80,
          borderWidth:2,
          backgroundColor:'#374151'}}
        />
        <Text style={styles.kilometrageStyle} >kilometrage:</Text>
        <TextInput
        value={carInfo.kilometrage}
        onChangeNumber={(number) => {
        SetCarInfo({ kilometrage: number });
        }}
        outlined
        style={{
            width: 350,
            height: 40,
            left: 0,
            top: 120,
          borderWidth:2,
          backgroundColor:'#374151'}}
        />
        <Text style={styles.oilChangeStyle} >Oil Change:</Text>
        <TextInput
        value={carInfo.oilChange}
        onChangeNumber={(number) => {
        SetCarInfo({ kilometrage: number });
        }}
        outlined
        placeholder="dd/mm/yy"
        placeholderTextColor="#fff"
        style={{
            width: 350,
            height: 40,
            left: 0,
            top: 150,
          borderWidth:2,
          backgroundColor:'#374151'}}
        />
        <Text style={styles.TechnicalVisitStyle} >Technical Visit:</Text>
        <TextInput
        value={carInfo.TechnicalVisit}
        onChangeNumber={(number) => {
        SetCarInfo({ TechnicalVisit: number });
        }}
        outlined
        placeholder="dd/mm/yy"
        placeholderTextColor="#fff"
        style={{
            width: 350,
            height: 40,
            left: 0,
            top: 200,
          borderWidth:2,
          backgroundColor:'#374151'}}
        />
        <Button onPress={()=>{
            navigation.navigate('tab')
        }}title='Add this car'/>
        <Text style={styles.alreadyStyle}>Already have a car?</Text>
       </View>
    </ScrollView>
    </SafeAreaView>
 );
};
const styles = StyleSheet.create({
    brandStyle:{
        position: 'absolute',
         width: 56.95,
         height: 22.44,
         left: 0,
          top: 12,
          fontfamily: 'Abhaya Libre',
          fontweight: 1000,
          fontsize: 14,
          lineheight: '150%',
          color:'#FFFFFF',
    },
    CarModelStyle:{
        position: 'absolute',
        width: 75.59,
        height: 21,
        left: 0,
        top: 94,
        fontfamily: 'Abhaya Libre',
        fontweight: 700,
        fontsize: 14,
        lineheight: '150%',
        color:'#FFFFFF',
    },
    kilometrageStyle:{
        position: 'absolute',
        width: 120,
        height: 29.13,
        left: 0,
        top: 172,
        fontfamily: 'Abhaya Libre',
        fontweight: 700,
        fontsize: 16.3107,
        lineheight: '150%',
        color:'#FFFFFF',
    },
    alreadyStyle:{
        position: 'absolute',
        width: 247,
        height: 21,
        left: 23,
        top: 480,
        fontfamily: 'Abhaya Libre Medium',
        fontweight: 500,
        fontsize: 12,
        lineheight: '150%',  
        textalign: 'center',
        color: '#9CA3AF',
        display:'flex',

    },
    oilChangeStyle:{
      position: 'absolute',
      width: 147,
      height: 21,
      left: 0,
      top: 250,

      fontfamily: 'Abhaya Libre',
      fontweight: 700,
      fontsize: 14,
      lineheight: '150%',
      color: '#FFFFFF',
    },
    TechnicalVisitStyle:{
      position: 'absolute',
      width: 120,
      height: 21,
      left: 0,
      top: 330,

      fontfamily: 'Abhaya Libre',
      fontweight: 700,
      fontsize: 14,
      lineheight: '150%',
      color: '#FFFFFF',
    },
});

export default AddCarScreen;