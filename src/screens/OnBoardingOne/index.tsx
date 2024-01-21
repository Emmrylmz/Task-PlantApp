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
        <View className="w-full h-full pt-3 ">
          <View className=" flex-row items-center">
            <Text className="font-Rubik text-3xl leading-7 tracking-normal font-medium text-MAIN_TEXT_COLOR">
              Take a photo to
            </Text>
            <View className="flex-col ">
              <Text className="font-Rubik text-3xl font-extrabold leading-7 pt-1  text-MAIN_TEXT_COLOR">
                {" "}
                identify
              </Text>
            </View>
          </View>
          <Text className="font-Rubik text-3xl leading-7 tracking-normal font-medium text-MAIN_TEXT_COLOR">
            The plant!
          </Text>
        </View>
      </FixedTop>
      <ImageContentTwo />
    </View>
  );
};

export default OnBoardingOne;
