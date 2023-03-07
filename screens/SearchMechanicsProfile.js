import {  Text,SafeAreaView,ScrollView,Image,View,StyleSheet } from 'react-native';
import React, { useState} from 'react';
import COLORS from '../utils/Color';
import { TextInput } from 'react-native';
import Button from '../utils/button';
import SearchBar from '../utils/searchbar';
import Picker from '../utils/picker';
import Profile from '../utils/profile'


const HomeScreen =({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: "#1E293B", flex: 1}}>
        <ScrollView
        contentContainerStyle={{paddingTop: 40, paddingHorizontal: 20,alignItems:'center'}}>
          <SearchBar/>
          <Picker/>
          <Profile/>
        </ScrollView>
    </SafeAreaView>
  );
};
 export default HomeScreen;