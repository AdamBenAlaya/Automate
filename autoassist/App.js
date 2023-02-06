import { StyleSheet, Text, View } from 'react-native';
import SignUp from './Screens/SignUp';
import CompleteSignUp from './Screens/CompleteSignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
    /*<NavigationContainer style={styles.container} screenOptions = {{headerStyle : {backgroundColor:'red'}}}>
    <Stack.Navigator initialRouteName='SignUp'>
      <Stack.Screen options={{title :"AutoRepair"}} name='SignUp' component={SignUp} />
      <Stack.Screen name='CompleteSignUp' component={CompleteSignUp} />
    </Stack.Navigator>
    </NavigationContainer>*/

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
