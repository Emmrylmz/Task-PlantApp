import { BackHandler, View } from "react-native";
import React, { FC, useEffect, useMemo } from "react";
import styles from "./styles";
import PrimarySkipButton from "../../components/PrimarySkipButton";
import FixedBottom from "../../components/FixedBottom";
import FixedTop from "../../components/FixedTop";
import ImageContentOne from "../../components/ImageContentOne";
import {
  NavigationProp,
  ParamListBase,
  StackActions,
} from "@react-navigation/native";
import TermsAndPolicy from "../../components/TermsAndPolicy";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import createStyles from "./styles";

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
        <View style={styles.footerText}>
          <TermsAndPolicy title="By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy."  />
        </View>
      </FixedBottom>
    </View>
  );
};

export default GettingStarted;
