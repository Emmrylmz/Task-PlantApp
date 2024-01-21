import { View, Text } from "react-native";
import React from "react";
import ArrowSVG from "../../../assets/Svgs/home/arrow.svg";
import MailSVG from "../../../assets/Svgs/home/Group 9058.svg";
import { buttonWidth } from "../PrimarySkipButton/styles";
import { heightPercentageToDP } from "react-native-responsive-screen";

const PremiumAvailable = () => {
  return (
    <View style={{ width: buttonWidth }} className="pb-4">
      <View className="flex-row space-x-3 border rounded-lg h-16 justify-center items-center bg-PAYMENT_BACKGROUND">
        <View className="h-16 w-16 flex justify-center pt-2 pl-2 ">
          <View className="absolute z-30 pl-11 pb-5">
            <Notification />
          </View>
          <MailSVG height="100%" width="100%" />
        </View>
        <View>
          <View className="flex-row">
            <Text className="text-lg font-semibold font-Roboto text-PREMIUM_MESSAGE">FREE </Text>
            <Text className="text-lg font-Roboto text-PREMIUM_MESSAGE">Premium Available</Text>
          </View>
          <View>
            <Text className="text-md tracking-wider font-Roboto text-PREMIUM_MESSAGE">Tap to upgrade your account!</Text>
          </View>
        </View>
        <View className="h-16 w-16 items-center justify-center">
          <ArrowSVG className="height-full w-full" />
        </View>
      </View>
    </View>
  );
};

const Notification = () => {
  return (
    <View className="flex-1 justify-center ">
      <View className="h-3.5 w-3.5 rounded-full bg-RED items-center ">
        <View>
          <Text className="text-xs text-WHITE font-normal">1</Text>
        </View>
      </View>
    </View>
  );
};

export default PremiumAvailable;
