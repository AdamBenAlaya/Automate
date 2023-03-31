import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'

export default function AddCar({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Your Car</Text>
      <TextInput
        placeholder='Brand'
        placeholderTextColor='#94A3B8'
        style={styles.inputStyle}
      />
      <TextInput
        placeholder='Type'
        placeholderTextColor='#94A3B8'
        style={styles.inputStyle}
      />
      <TextInput
        placeholder='Kilometreage'
        placeholderTextColor='#94A3B8'
        style={styles.inputStyle}
      />
      <TextInput
        placeholder='Car Age'
        placeholderTextColor='#94A3B8'
        style={styles.inputStyle}
      />
      <TextInput
        placeholder='Insurance Date'
        placeholderTextColor='#94A3B8'
        style={styles.inputStyle}
      />
      <TextInput
        placeholder='Car Emptying Date'
        placeholderTextColor='#94A3B8'
        style={styles.inputStyle}
      />
      <TextInput
        placeholder='Technical Visit'
        placeholderTextColor='#94A3B8'
        style={styles.inputStyle}
      />
      <Pressable style={styles.button} 
        onPress={()=>{
          navigation.navigate('tab')
        }}
      >
        <Text style={{ textAlign: 'center', color: 'white', paddingTop: 10 }}>Add Car</Text>
      </Pressable>
      <View style={styles.skipSection}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Already Have a Car ?</Text>
        <Pressable style={styles.skipButton}>
          <Text style={{ textAlign: 'center', color: 'white', paddingTop: 5 }}>Skip</Text>
        </Pressable>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1E293B',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    margin: 70,
    marginBottom: 10,
    fontSize: 30
  },
  formLabels: {
    color: 'white',
    // margin:10,
    marginLeft: 30
  },
  inputStyle: {
    // backgroundColor:'white',
    margin: 30,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#94A3B8',
    color: 'white',
    padding: 10,
    paddingLeft: 0
  },
  button: {
    backgroundColor: '#334155',
    height: 40,
    margin: 30,
    marginTop: 50
  },
  skipSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    marginTop: 0,

  },
  skipButton: {
    backgroundColor: '#7389F4',
    height: 30,
    width: 70,
    borderRadius: 5


  }

})