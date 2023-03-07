import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import RootNavigator from "./navigators/RootNavigator";
import Map from "./components/Map"
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      {/* <Map/> */}
    </NavigationContainer>
  );
}