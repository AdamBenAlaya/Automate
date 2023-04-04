import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable , SafeAreaView} from "react-native";
import Button from "../components/Button";
import {Dimensions} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



    
const ViewInfo = ({ navigation }) => {
  
  
  return (
    
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/shop.jpg")}
        />
        <SafeAreaView style={{ flex: 1 }}>
      <View >
        
        <View style={styles.stars}>
          <MaterialIcons name="star" size={32} style={styles.starselected} />
          <MaterialIcons name="star" size={32} style={styles.starselected} />
          <MaterialIcons name="star" size={32} style={styles.starselected} />
          <MaterialIcons name="star" size={32} style={styles.starselected} />
          <MaterialIcons name="star" size={32} style={styles.starselected} />
        </View>
      </View>
    </SafeAreaView>
  

        
     
        
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
            42 min     11 Britney Spears Songs
        </Text>
        <Text style={styles.Title}>
            AWESOME OVERVIEW
        </Text>
        <Text style={styles.Description}>
        "I recently had to take my car in for some repairs and I couldn't have been happier with the service I received from the team at Top Auto Repair. The staff was friendly and knowledgeable and took the time to explain the issues with my car and the steps they would be taking to fix them.”
        </Text>
      </View>
      <View style={styles.DirectionButtonContainer}>
      <Pressable style={styles.DirectionButton} >
                <Text style={[styles.textdecoration, styles.addbuttondirectionText]}>Directions</Text>
      </Pressable>
      
        
      </View>
    
      <View style={styles.CallButtonContainer}>
      <Pressable style={styles.CallButton} >
                <Text style={[styles.textdecoration, styles.addbuttoncallText]}>Call</Text>
      </Pressable>
      
        
      </View>
      <View style={styles.ShareButtonContainer}>
      <Pressable style={styles.ShareButton} >
                <Text style={[styles.textdecoration, styles.addbuttonshareText]}>Share</Text>
      </Pressable>
      <Image
          style={styles.gps}
          source={require("../assets/gps.png")}
        />
        <Image
          style={styles.direction}
          source={require("../assets/direction.png")}
        />
        <Image
          style={styles.call}
          source={require("../assets/call.png")}
        />
         <Image
          style={styles.share}
          source={require("../assets/share.png")}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    width: 500,
    height: 200,
    
    backgroundColor: "#161A32",
    
  },
  NameShop: {
    
    position: "absolute",
   
    left: 13,
    top:380,
    color: 'white',
    fontWeight:'bold',
     fontSize:'30'
  },
  Address:{
    position: "absolute",
    width: 300,
    height: 20,
    left: 60,
    top: 430,
    color: 'white',
  },

  WorkingHours:{
    position: "absolute",
    width: 300,
    height: 50,
    left: 20,
    top: 460,

    fontFamily: "normal",
    fontStyle: "normal",
    fontSize: 13,
   
    color: '#AAAABC',
  },
  Type:{
    position: "absolute",
    width: 40,
    height: 13,
    left: 11,
    

    fontFamily: "normal",
    fontStyle: "normal",
    
    fontSize: 15,
    lineHeight: 14,
    fontWeight:'bold',

    color: "#7389F4",
    opacity: 0.5,
    top:540,
    left:40,

  },
  TravelTime:{
    position: "absolute",
    width: 100,
    height: 13,
    left: 165,
    top: 540,

    fontFamily: 'normal',
    fontStyle: "normal",
    fontWeight:'bold',
    
    fontSize: 15,
    lineHeight: 14, 
    color: "#7389F4",
    opacity: 0.5,
  },

  TypeOfShop:{
    position: "absolute",
    width: 500.26,
    height: 20,
    left: 13.74,
    top: 560,
    fontSize:30,

    fontFamily: 'normal',
    fontStyle: 'normal',
   
    fontSize: 15,
    lineHeight: 20,

    color: "#AAAABC",
  },
  TravelTimeContent:{
    position: "absolute",
    width: 500.26,
    height: 20,
    left: 170.74,
    top: 560,
    fontSize:30,

    fontFamily: 'normal',
    fontStyle: 'normal',
   
    fontSize: 15,
    lineHeight: 20,

    color: "#AAAABC",
  },
  Title:{
    position: 'absolute',
    height: 100,
    
    left: 25,
    top: 590,

    fontFamily: 'normal',
    fontStyle: 'normal',
    
    fontSize: 13,
    lineHeight:30,

    color:  "#7389F4",
    opacity:0.5 ,
   
  },
  Description:{
    position: 'absolute',
    
    width: 380,
    height: 150.67,
    left: windowWidth*0.03,
    top: 620,

    fontFamily: 'normal',
    fontStyle: "normal",
    
    fontSize: 13,
    lineHeight: 30,

    color: "#AAAABC",
  },

  
  logo: {
    position: "absolute",
    width: 600,
    height: 380,
    right: 10 ,
    top: 0,
    borderBottomEndRadius:80
  },
 
  DirectionButtonContainer:{
    position: 'absolute',
    
    left: 0,
    top: 800,
  },

  DirectionButton:{
    borderRadius: 15,
    width: 120,
    backgroundColor: '#7360BE',
    margin: 10,
    height: 50,
    borderColor: '#AAAABC',
   
   
    
  },
  addbuttondirectionText: {
    textAlign: 'center',
    color: 'white',
    lineHeight:20,
    fontSize:15,
    left:15,
    top:13,
    fontWeight:'bold',
    

  },
  CallButtonContainer:{
    position: 'absolute',
    
    left: 140,
    top: 800,
  },
  CallButton:{
    borderRadius: 15,
    width: 110,
    backgroundColor: 'transparent',
    margin: 10,
    height: 50,
    borderColor: '#AAAABC',
    borderStyle:'solid',
    borderWidth:1,
   
  },


  addbuttoncallText: {
    textAlign: 'center',
    color: 'white',
    lineHeight:20,
    fontSize:15,
    left:20,
    top:13,
    fontWeight:'bold',


  },
  ShareButtonContainer:{
    position: 'absolute',
    
    left: 270,
    top: 800,
  },
  ShareButton:{
    borderRadius: 15,
    width: 110,
    backgroundColor: 'transparent',
    margin: 10,
    height: 50,
    borderColor: '#AAAABC',
    borderStyle:'solid',
    borderWidth:1,
  },


  addbuttonshareText: {
    textAlign: 'center',
    color: 'white',
    lineHeight:20,
    fontSize:15,
    left:20,
    top:13,
    fontWeight:'bold',


  },

  
  
  stars: {
    display: 'flex',
    flexDirection: 'row',
    
    position: "absolute",
    height: 280,
    right: 330 ,
    top: 435,
  
    
  },
  starselected: {
    color: '#EDC139',
    
  
  },
  gps:{

    position: "absolute",
    width: 25,
    height: 25,
    right:360 ,
    bottom:420,
  },
  direction:{

    position: "absolute",
    width: 25,
    height: 25,

    right:358 ,
    bottom:23,
  },
  call:{

    position: "absolute",
    width: 25,
    height: 25,

    right:207 ,
    bottom:23,
  },
  share:{

    position: "absolute",
    width: 25,
    height: 25,

    right:80 ,
    bottom:23,
  },
  
  
});

export default ViewInfo;
