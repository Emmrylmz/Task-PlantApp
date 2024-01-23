import { Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import FixedTop from "../../components/FixedTop";
import ImageContentTwo from "../../components/ImageContentTwo";
import styles from "./styles";
import { buttonWidth } from "../../components/PrimarySkipButton/styles";
import { heightPercentageToDP } from "react-native-responsive-screen";
import BrushSVG from "../../../assets/Svgs/Brush.svg";

const Brush = "../../../assets/Svgs/Brush.png";
const OnBoardingOne = () => {
  return (
    <View style={styles.body}>
      <FixedTop
        bodyStyle={{
          width: buttonWidth,
          height: heightPercentageToDP(15),
        }}
      >
        <View className="flex flex-row ">
          <Text className="text-3xl font-normal font-Rubik">
            Take a photo to{" "}
          </Text>
          <Text className="text-3xl font-bold">identify </Text>
        </View>
        <View className="flex flex-row ">
          <Text className="text-3xl font-normal font-Rubik">plant </Text>
        </View>
      </FixedTop>
      <ImageContentTwo />
    </View>
  );
};

export default OnBoardingOne;
