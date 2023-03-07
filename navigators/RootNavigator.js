import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from '../screens/LogIn';
import ShopCreation from "../screens/ShopCreation";
import Map from '../components/Map';
import SearchShop from '../screens/SearchShop';
import ViewInfo from '../screens/ViewInfo';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Shop" component={ShopCreation} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="SearchShop" component={SearchShop} />
      <Stack.Screen name="ViewInfo" component={ViewInfo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
