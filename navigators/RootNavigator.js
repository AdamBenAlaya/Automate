import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import ShopCreation from "../screens/ShopCreation";
import Map from '../components/Map';
import SearchShop from '../screens/SearchShop';
import ViewInfo from '../screens/ViewInfo';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Shop" component={ShopCreation} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="SearchShop" component={SearchShop} />
      <Stack.Screen name="ViewInfo" component={ViewInfo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
