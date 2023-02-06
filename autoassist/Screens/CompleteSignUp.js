import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput , Image ,Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
const CompleteSignUp = () => {
  const [model, SetModel] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  /*constructor()
  {
    this.state={selectedLabel:''};
  }
  show=(value) =>{
<DateTimePicker value={new Date()} onChange={this.setDate} style={styles.input}
      />
    alert(value);
    this.setState({selectedLabel:value})
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
  }*/
  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle}
        source={require('../Logo/324160435_2264882830359139_6470241347563821199_n.png')}>

      </Image>
      <Text style={styles.headerText}>Finish Filling This Form </Text>
      <Text style={styles.picker}>Car Brand :</Text>
      <Picker style={styles.input} placeholder='Car Brand' /*selectedValue={this.state.selectedLabel} onValueChange={this.show.bind()}*/>
        <Picker.Item label="BMW" value="BMW" />
        <Picker.Item label="Toyota" value="Toyota" />
        <Picker.Item label="Mercedes" value="Mercedes" />
        <Picker.Item label="Nissan" value="Nissan" />
        <Picker.Item label="Mini Cooper" value="Mini Cooper" />
      </Picker>
      <TextInput
        style={styles.input}
        selectionColor='green'
        value={model}
        onChangeText={SetModel}
        autoCompleteType='password'
        placeholder='Car Model'
        keyboardType='text'
      />
    
      <TextInput
        style={styles.input}
        selectionColor='green'
        autoCompleteType='text'
        placeholder='Kilometrage'
        keyboardType='numeric'
      />

<Button title=' Complete Sign Up' style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap:'1rem',
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 21,
    color: "green",
    fontWeight: 'bold',
    paddingVertical: 12,
},
  logoStyle: {
    width: 250,
    height: 110,
    marginBottom: 8,
    resizeMode: 'contain'
},
  picker: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 12,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 12,
    backgroundColor: 'white',
  },
  button: {
    width: '35%',
    height: 60,
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: "green",
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
},
});

export default CompleteSignUp;