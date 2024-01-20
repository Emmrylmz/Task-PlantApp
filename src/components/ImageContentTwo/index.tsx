import { View, Text, Image } from "react-native";
import React, { useMemo } from "react";
import PhoneSVG from "../../../assets/Svgs/Phone.svg";
import PlantSVG from "../../../assets/Svgs/Plant.svg";
import createStyles from "./styles";
import ScanInclined from "../../../assets/Svgs/ScanInclined.svg"


const ImageContentTwo = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <PhoneSVG height="90%" width="90%" style={styles.PhoneSVG} />
      <PlantSVG height="87%" width="87%" style={styles.PlantSVG} />
      <ScanInclined height="100%" width="100%" style={styles.ScanInclined}/>
    </View>
  );
};

export default ImageContentTwo;
