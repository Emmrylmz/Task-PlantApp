import { BackHandler, View } from "react-native";
import React, { FC, useEffect } from "react";
import styles from "./styles";
import PrimarySkipButton from "../../components/PrimarySkipButton";
import FixedBottom from "../../components/FixedBottom";
import FixedTop from "../../components/FixedTop";
import ImageContentOne from "../../components/ImageContentOne";
import { NavigationProp, ParamListBase, StackActions } from "@react-navigation/native";
import TermsAndPolicy from "../../components/TermsAndPolicy";


interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const GettingStarted: FC<IProps> = ({ navigation }) => {

  
  return (
    <View style={styles.body}>
      <FixedTop
        title="Welcome to PlantApp"
        subtitle="Identify more than 3000+ plants and 88% accuracy."  
      />

      <ImageContentOne />

      <FixedBottom>
        <PrimarySkipButton
          title="Get Started"
          disabled={false}
          onPress={() => navigation.navigate("OnBoardingCarousel")}
        />
        <TermsAndPolicy />
      </FixedBottom>
    </View>
  );
};

export default GettingStarted;
