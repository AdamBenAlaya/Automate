import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopCreation from "../screens/ShopCreation";
import Map from '../components/Map';
import SearchShop from '../screens/SearchShop';
import ViewInfo from '../screens/ViewInfo';
//import Dashboard from "../screens/Dashboard.js";
import Schedule from '../screens/Schedule';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () =>{
   return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle:{
          backgroundColor:'black',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = focused
              ? 'car-sport'
              : 'car-sport-outline';
          } else if (route.name === 'Schedual') {
            iconName = focused ? 'calendar' : 'calendar';
          }
          else if (route.name === 'ShopList') {
            iconName = focused ? 'basket-outline' : 'basket-sharp';
          }
          else if (route.name === 'YourProfile') {
            iconName = focused ? 'profile' : 'profile'; // No functional 
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
       
      })}

      tabBarOptions={{
          activeTintColor:'white',
          inactiveTintColor:'gray',
      }}
      >
          <Tab.Screen name='ViewInfo' component={ViewInfo} />
          <Tab.Screen name='Schedule' component={Schedule} />
          
           
      </Tab.Navigator>

   );
}
const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name='tab' component= {Tabs}/>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Shop" component={ShopCreation} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="SearchShop" component={SearchShop} />
      <Stack.Screen name="ViewInfo" component={ViewInfo}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
