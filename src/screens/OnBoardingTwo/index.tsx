import { View, Text } from "react-native";
import React, { useEffect } from "react";
import FixedTop from "../../components/FixedTop";
import ImageContentTwo from "../../components/ImageContentTwo";
import styles from "./styles";
import ImageContentThree from "../../components/ImageContentThree";

const OnBoardingTwo = () => {

  return (
    <View style={styles.body}>
      <FixedTop title="Get plant care guides" />
      <ImageContentThree /> 
    </View>
  );
};

export default OnBoardingTwo;
