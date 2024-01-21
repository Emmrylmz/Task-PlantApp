import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./style";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import LinearGradient from "react-native-linear-gradient";
import { buttonWidth } from "../PrimarySkipButton/styles";

interface ISubscriptionOpiton {
  duration: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

const SubscriptionOption: FC<ISubscriptionOpiton> = ({
  description,
  duration,
  isSelected,
  onSelect,
}) => {

  const EnabledSubOpiton = () => {
    return (
      <TouchableOpacity
        onPress={onSelect}
        style={{ width: buttonWidth }}
        className="h-14 rounded-xl flex flex-start justify-center space-x-6 pr-10 border  border-GREEN  p-5  flex-row  "
      >
        <View className="flex justify-center absolute left-10 top-3.5">
          <View className="h-6 w-6 rounded-full bg-GREEN  right-7 " />
          <View className="h-2 w-2 bg-WHITE rounded-full right-5 -top-4" />
        </View>
        <View className="flex  absolute flex-start left-6 top-1    ">
          <Text className="text-lg text-WHITE font-bold">{duration}</Text>
          <Text className="text-xs text-WHITE opacity-70 bottom-1">
            {description}
          </Text>
        </View>
        <View className="h-7 w-20 absolute bg-GREEN top-0 right-0 rounded-tr-lg rounded-bl-xl justify-center ">
          <Text className="pl-3 text-WHITE">Save 50%</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const DisabledSubOpiton = () => {
    return (
      <TouchableOpacity
        style={{ width: buttonWidth }}
        onPress={onSelect}
        className="h-14 bg-gradient-custom rounded-xl flex flex-start justify-center space-x-6 pr-10 py-5 border  border-WHITE relative bg-opacity-30  flex-row  "
      >
        <View className="flex justify-center absolute left-10 top-3.5">
          <View className="h-6 w-6 rounded-full bg-LIGHT_GREY right-7 " />
        </View>
        <View className="flex  absolute flex-start left-6 top-1 ">
          <Text className="text-lg color-WHITE font-bold">{duration}</Text>
          <Text className="text-xs color-WHITE opacity-70 bottom-1">
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return isSelected ?  EnabledSubOpiton() :DisabledSubOpiton() ;
};

export default SubscriptionOption;
