import { Image, Text, View } from "react-native";
import React, { useMemo } from "react";
import PlantSVG from "../../../assets/Svgs/Plant.svg";
import ScanSVG from "../../../assets/Svgs/Camera Line.svg";
import createStyles from "./styles";
import FixedTop from "../FixedTop";
import { buttonWidth } from "../PrimarySkipButton/styles";
import { heightPercentageToDP } from "react-native-responsive-screen";

const Purple = "../../../assets/Svgs/page1/Purple.png";     // Didn't render as expected
const Orange = "../../../assets/Svgs/page1/Orange.png";
const Blue = "../../../assets/Svgs/page1/Blue.png";
const Background = "../../../assets/Svgs/page1/Background.png";

const ImageContentOne = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <View className="h-100 w-200">
        <Image
          source={require(Background)} // Replace with the actual path to your image
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />
      </View>
      <View style={styles.PlantSVG}>
        <PlantSVG height="100%" width="100%" />
      </View>
      <View style={styles.ScanSVG}>
        <ScanSVG height="100%" width="100%" />
      </View>
    </View>
  );
};

export default ImageContentOne;

