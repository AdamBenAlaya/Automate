import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Image
              alt=""
              source={{
                uri: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
              }}
              style={styles.profileAvatar}
            />

            <View style={styles.profileBody}>
              <Text style={styles.profileName}>top auto</Text>

              <Text style={styles.profileHandle}>Engine mechanics</Text>
            </View>
        </View>
        

          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-between'
  },
  profile: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop: 1,
    paddingHorizontal: 100,
    paddingBottom: 5,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  profileAvatar: {
    justifyContent:'space-between',
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: '#B7C0F4',
  },
 
});