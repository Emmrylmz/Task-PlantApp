import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreens } from "./stacks";
import { OnBoardingScreens } from "./stacks";
import { useSelector } from "react-redux";
import { selectHasFinished } from "../features/selectors";
const rootStack = createNativeStackNavigator<OnBoardingParamList>();

interface OnBoardingParamList extends ParamListBase {
  GetStarted: undefined;
  OnBoardingCarousel: undefined;
  PaywallScreen: undefined;
}

const RootStack = () => {
  const isOnboardingComplete = useSelector(selectHasFinished);

  return (
    <NavigationContainer>
    {isOnboardingComplete ? <MainScreens /> : <OnBoardingScreens />}
  </NavigationContainer>
  );
};

export default RootStack;
