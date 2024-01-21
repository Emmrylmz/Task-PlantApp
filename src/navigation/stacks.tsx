import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GettingStarted from "../screens/GettingStarted";
import OnBoardingCarousel from "../screens/OnBoardingCarousel";
import PaywallScreen from "../screens/PaywellScreen";
import HomePage from "../screens/HomePage";
const OnBoarding = createNativeStackNavigator<OnBoardingParamList>();
const HomeStack = createNativeStackNavigator<OnBoardingParamList>();

interface OnBoardingParamList extends ParamListBase {
  GetStarted: undefined;
  OnBoardingCarousel: undefined;
  PaywallScreen: undefined;
}
interface HomeStackParamList extends ParamListBase {
  HomePage: undefined;
}

export const OnBoardingScreens = () => {
  return (
    <OnBoarding.Navigator
      initialRouteName="GettingStarted"
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnBoarding.Screen name="GettingStarted" component={GettingStarted} />
      <OnBoarding.Screen
        name="OnBoardingCarousel"
        component={OnBoardingCarousel}
        options={{
          headerLeft: () => null,
          gestureEnabled: false,
          // Hide the back button
        }}
      />
      <OnBoarding.Screen
        name="PaywallScreen"
        component={PaywallScreen}
        options={{
          headerLeft: () => null, // Hide the back button
        }}
      />
    </OnBoarding.Navigator>
  );
};

export const MainScreens = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="GettingStarted"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomePage" component={HomePage} />
    </HomeStack.Navigator>
  );
};
