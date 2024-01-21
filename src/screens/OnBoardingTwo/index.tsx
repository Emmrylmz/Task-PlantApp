import { View, Text } from "react-native";
import React, { useEffect } from "react";
import FixedTop from "../../components/FixedTop";
import ImageContentTwo from "../../components/ImageContentTwo";
import styles from "./styles";
import ImageContentThree from "../../components/ImageContentThree";

const OnBoardingTwo = () => {

  return (
    <View style={styles.body}>
      <FixedTop>
      <View className="flex flex-row ">
          <Text className="text-4xl font-normal font-Rubik">
            Get plant{" "}
          </Text>
          <Text className="text-4xl font-bold">care guides </Text>
        </View>

      </FixedTop>
      <ImageContentThree /> 
    </View>
  );
};

export default OnBoardingTwo;
