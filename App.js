import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import RootNavigator from "./navigators/RootNavigator";
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import LogIn from "./screens/LogIn";
import Schedule from "./screens/Schedule";
import SignUp from "./screens/SignUp";
/**/ 
export default function App() {
  return ( 
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
   );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#94A3B8'
  }
})