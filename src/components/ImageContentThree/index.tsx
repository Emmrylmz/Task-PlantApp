import { View, Text, Image } from "react-native";
import React, { useMemo } from "react";
import OverlaySVG from "../../../assets/Svgs/page3/Overlay.svg";
import FlatIphone from "../../../assets/Svgs/page3/Flat iPhone.svg";
import createStyles from "./style";
import BackgroundObject from "../../../assets/Svgs/page3/BackgroundObject.svg"
import { LinearGradient } from "react-native-svg";

const artwork = "../../../assets/Svgs/page3/Artwork.png"
const background = "../../../assets/Svgs/page3/Object.png"

const ImageContentThree = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <View style={styles.FlatIPhoneSVG}>
        <FlatIphone height="100%" width="100%" style={{position:"absolute"}} />
      </View>
      <View style={styles.Artwork}>
      <Image
        source={require(artwork)} // Replace with the actual path to your image
        style={{width:'100%', height:'100%'}} // Set the desired width and height
      />
      </View>
      <View style={styles.BackgroundObjectSVG}>
      <Image
        source={require(background)} // Replace with the actual path to your image
        style={{width:'100%', height:'100%', position:'absolute'}} // Set the desired width and height
      />
      </View>
    </View>
  );
};

export default ImageContentThree;
