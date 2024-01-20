import { View, Text, Image } from "react-native";
import React, { useMemo } from "react";
import PlantSVG from "../../../assets//Svgs/Plant.svg";
import ScanSVG from "../../../assets/Svgs/Camera Line.svg";
import createStyles from "./styles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ImageContentOne = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <View style={styles.PlantSVG}>
        <PlantSVG height="100%" width="100%" />
      </View>
      <View style={styles.ScanSVG}>
        <ScanSVG height="100%" width="100%"  />
      </View>
    </View>
  );
};

const plantHeight = hp(10);

export default ImageContentOne;
