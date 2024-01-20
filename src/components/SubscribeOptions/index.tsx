import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./style";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import LinearGradient from "react-native-linear-gradient";
import { buttonWidth } from "../PrimarySkipButton/styles";

const SubscriptionOption = () => {
    const [isDisabled,setIsDisabled] = useState(true)

    const EnabledSubOpiton = () => {
      return ( <TouchableOpacity onPress={() => setIsDisabled(!isDisabled)} style={{width:buttonWidth}} className="h-14 bg-WHITE rounded-xl flex flex-start justify-center space-x-6 pr-10 border-2  border-GREEN    flex-row ">
      <View className="flex justify-center relative">
        <View className="h-6 w-6 rounded-full bg-GREEN absolute right-4 " />
        <View className="h-2.5 w-2.5 bg-WHITE absolute rounded-full right-6" />
      </View>
      <View className="flex justify-center right-7">
        <Text className="text-lg text-white font-bold">1 Month</Text>
        <Text className="text-xs text-white opacity-70 bottom-1">
          $2.99/month, auto renewable
        </Text>
      </View>
      <View className="h-7 w-20 absolute bg-GREEN top-0 right-0 rounded-tr-lg rounded-bl-xl justify-center ">
        <Text className="pl-3 text-WHITE">Save 50%</Text>
      </View>
    </TouchableOpacity>)
    } 

    const disabledSubOpiton = () => {
      return (
        <TouchableOpacity style={{width:buttonWidth}} onPress={() => setIsDisabled(!isDisabled)} className="w-80 h-14 bg-gradient-custom rounded-xl flex flex-start justify-center space-x-6 pr-10 border  border-white   flex-row ">
        <View className="flex justify-center relative">
          <View className="h-6 w-6 rounded-full bg-LIGHT_GREY right-7 " />
        </View>
        <View className="flex justify-center right-10">
          <Text className="text-lg color-white font-bold">1 Month</Text>
          <Text className="text-xs color-white opacity-70 bottom-1">
            $2.99/month, auto renewable
          </Text>
        </View>
      </TouchableOpacity>
      )
    }
  
  return ( 
    isDisabled ? disabledSubOpiton() : EnabledSubOpiton()
   
  );
};

export default SubscriptionOption;
