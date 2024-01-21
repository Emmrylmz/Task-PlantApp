import { View, Text } from "react-native";
import React from "react";
import { buttonWidth } from "../PrimarySkipButton/styles";
import IconSVG from "../../../assets/Svgs/home/Icon.svg";
import { Input } from "react-native-elements";


const SearchBar = () => {
  return (
    
      <View className="space-y-2 pb-4">
        <Text className="text-xl font-Rubik">Hi, plant lover!</Text>
        <Text className="text-2xl font-Rubik font-bold">
          Good Afternoon! ⛅
        </Text>
      </View>
      <View
        style={{ width: buttonWidth }}
        className="flex flex-col bg-WHITE h-12  rounded-lg space-x-5 justify-center p-4  "
      >
        <View className="w-6 h-6 absolute ">
          <IconSVG height="100%" width="100%" />
        </View>
        <View>
          <Input
            placeholder="Search for plants"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            className="z-100 top-3"
          />
        </View>
      </View>
  );
};

export default SearchBar;
