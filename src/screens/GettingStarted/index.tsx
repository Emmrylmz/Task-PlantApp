import { BackHandler, Text, View } from "react-native";
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import createStyles from "./styles";
import { buttonWidth } from "../../components/PrimarySkipButton/styles";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const GettingStarted: FC<IProps> = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <FixedTop>
        <View style={{ width: buttonWidth}}>
          <View className="flex flex-row ">
            <Text className="text-3xl font-normal font-Rubik">Welcome to </Text>
            <Text className="text-3xl font-bold">PlantApp</Text>
          </View>
          <View className="top-1">
            <Text
              style={{ fontSize: wp(4) }}
              className="font-normal leading-6 tracking-tight text-MAIN_TEXT_COLOR opacity-70 font-Rubik "
            >
              Identify more than 3000+ plants and 88% accuracy.
            </Text>
          </View>
        </View>
      </FixedTop>

      <ImageContentOne />

      <FixedBottom>
        <PrimarySkipButton
          title="Get Started"
          disabled={false}
          onPress={() => navigation.navigate("OnBoardingCarousel")}
        />
        <View style={styles.footerText}>
          <TermsAndPolicy title="By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy." textStyle={{fontSize:wp(3)}} componentStyle={{width:wp(60)}} />
        </View>
      </FixedBottom>
    </View>
  );
};

export default GettingStarted;
