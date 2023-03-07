import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import Button from "../components/Button";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ViewInfo = ({ navigation }) => {
  
  
  return (
    
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/Car.png")}
        />
        <Text style={styles.NameShop}>
            Top Auto repair
        </Text>
        <Text style={styles.Address}>
            Murall, Intramuros, Manila, Philppiness
        </Text>
        <Text style={styles.WorkingHours}>
            open From 8.00 to 18.00
        </Text>
        <Text style={styles.Type}>
            TYPE
        </Text> 
        <Text style={styles.TravelTime}>
            TRAVEL TIME
        </Text>
        <Text style={styles.TypeOfShop}>
            Car Repair Shop
        </Text>
        <Text style={styles.TravelTimeContent}>
            42 min 11 Britney Spears Songs
        </Text>
        <Text style={styles.Title}>
            AWESOME OVERVIEW
        </Text>
        <Text style={styles.Description}>
        "I recently had to take my car in for some repairs and I couldn't have been happier with the service I received from the team at Top Auto Repair. The staff was friendly and knowledgeable and took the time to explain the issues with my car and the steps they would be taking to fix them.”
        </Text>
      </View>
      <View style={styles.ButtonsContainer}>
      <Pressable style={styles.DirectionButton} >
                <Text style={[styles.textdecoration, styles.addbuttonText]}>Directions</Text>
      </Pressable>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 360,
    height: 640,
    backgroundColor: "#3F4673",
    
  },
  NameShop: {
    position: "absolute",
    width: 224,
    height: 28,
    left: 10,
    top: 290,
    fontFamily: "normal",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 27,
    color: 'white',
  },
  Address:{
    position: "absolute",
    width: 300,
    height: 50,
    left: 13,
    top: 317,
    color: 'white',
  },

  WorkingHours:{
    position: "absolute",
    width: 119,
    height: 14,
    left: 13,
    top: 359,

    fontFamily: "normal",
    fontStyle: "normal",
    fontSize: 10,
    lineheight: 14,
    color: '#AAAABC',
  },
  Type:{
    position: "absolute",
    width: 37.02,
    height: 13,
    left: 11,
    top: 383,

    fontFamily: "normal",
    fontStyle: "normal",
    
    fontSize: 10,
    lineHeight: 14,

    background: "#7389F4",
    opacity: 0.5,

  },
  TravelTime:{
    position: "absolute",
    width: 66,
    height: 13,
    left: 165,
    top: 383,

    fontFamily: 'normal',
    fontStyle: "normal",
    
    fontSize: 10,
    lineHeight: 14, 
    background: "#7389F4",
    opacity: 0.5,
  },

  TypeOfShop:{
    position: "absolute",
    width: 130.26,
    height: 23,
    left: 13.74,
    top: 396,

    fontFamily: 'normal',
    fontStyle: 'normal',
   
    fontSize: 15,
    lineHeight: 20,

    color: "#AAAABC",
  },
  TravelTimeContent:{
    position: 'absolute',
    height: 18,
    left: windowWidth*0.52,
    top: windowHeight*0.62,

    fontFamily: 'normal',
    fontStyle: 'normal',
    
    fontSize: 15,
    lineHeight: 20,

    color: "#AAAABC",
  },
  Title:{
    position: "absolute",
    width: 109.32,
    height: 11.33,
    left: windowWidth*0.02,
    top: windowHeight*0.45,

    fontFamily: 'normal',
    fontStyle: 'normal',
    
    fontSize: 10,
    lineHeight: 14,

    background: "#7389f4",
    opacity: 0.5,
  },
  Description:{
    position: 'absolute',
    width: 337,
    height: 110.67,
    left: windowWidth*0.03,
    top: windowHeight*0.68,

    fontFamily: 'normal',
    fontStyle: "normal",
    
    fontSize: 13,
    lineHeight: 18,

    color: "#AAAABC",
  },

  
  logo: {
    position: "absolute",
    width: 360,
    height: 283,
    left: 0,
    top: 0,
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    //fontWeight: "bold",
  },
  ButtonsContainer:{
    position: 'absolute',
    
    left: windowWidth *0.03,
    top: windowHeight *0.8,
  },

  DirectionButton:{
    borderRadius: 10,
    width: 95,
    backgroundColor: 'transparent',
    margin: 20,
    height: 25,
    borderColor: '#AAAABC',
    borderStyle:'solid',
    borderWidth:1,
  },
  addbuttonText: {
    textAlign: 'center',
    color: 'white',
    lineHeight:18,
    fontSize:13,
  },
});

export default ViewInfo;
