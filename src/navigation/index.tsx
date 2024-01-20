import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GettingStarted from "../screens/GettingStarted";
import OnBoardingCarousel from "../screens/OnBoardingCarousel";
import PaywallScreen from "../screens/PaywellScreen";
import HomePage from "../screens/HomePage";
const MainStack = createNativeStackNavigator<MainStackParamList>();

interface MainStackParamList extends ParamListBase {
    GetStarted: undefined;
    OnBoardingCarousel: undefined;
    PaywallScreen: undefined;
    // ... other screens
  }
  

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="GettingStarted"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="GettingStarted" component={GettingStarted} />
        <MainStack.Screen
          name="OnBoardingCarousel"
          component={OnBoardingCarousel}
          options={{
            headerLeft: () => null,
            gestureEnabled: false
          // Hide the back button
          }}
        />
        <MainStack.Screen
          name="PaywallScreen"
          component={PaywallScreen}
          options={{
            headerLeft: () => null, // Hide the back button
          }}
        />
        <MainStack.Screen name="HomePage" component={HomePage} />
        {/* ... other screens as needed */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}