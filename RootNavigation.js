import React from "react";
import {View,Text,TextInput} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./Splash";
import PinNumber from "./PinNumber";
import Welcome from "./Welcome";
const Stack =createNativeStackNavigator();
const RootNavigation =()=>
{
  return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName=" splash" //nickname //screen Id
         screenOptions={{headerShown:false}}>
          <Stack.Screen name={'splash'} component={Splash}/>
          <Stack.Screen name={'pin'} component={PinNumber}/>
          <Stack.Screen name={'wlcm'} component={Welcome}/>
          </Stack.Navigator>
      </NavigationContainer>

  )
}
export default RootNavigation;


