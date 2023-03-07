import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import RootNavigator from "./navigators/RootNavigator";
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import LogIn from "./screens/LogIn";
/*<NavigationContainer>
      <RootNavigator />
    </NavigationContainer>*/ 
export default function App() {
  return (
    <View style={styles.container}>
    <LogIn/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'purple'
  }
})