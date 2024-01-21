import { View, Text } from "react-native";
import React from "react";
import { buttonWidth } from "../PrimarySkipButton/styles";
import IconSVG from "../../../assets/Svgs/home/Icon.svg";
import { Input } from "react-native-elements";
import { Colors } from "../../constants/colors";

const SearchBar = () => {
  return (
    <View className="justify-center ">
      
      <View style={{ width: buttonWidth }} className="bg-WHITE h-12 rounded-lg justify-center p-3">
    <View className="flex flex-row items-center">
      <View className="w-6 h-6">
        <IconSVG height="100%" width="100%" />
      </View>
      <Input
        placeholder="Search for plants"
        inputContainerStyle={{ borderBottomWidth: 0 }}
        placeholderTextColor={Colors.INPUT_PLACEHOLDER_COLOR}
        style={{ flex: 1, marginLeft: 10,fontFamily:'Rubik' }} 
        className="top-3.5"
      />
    </View>
  </View>
    </View>
  );
};

export default SearchBar;
