import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
const Button = ({title, onPress = () => {

}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: 350,
        backgroundColor: '#9333EA',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        order :14,
        display: 'flex',
        flexDirection:'row',
        top:190,
      }}>
      <Text style={{color:'#FFFFFF' , fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;