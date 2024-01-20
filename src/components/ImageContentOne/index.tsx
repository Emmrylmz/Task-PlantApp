import { Image, View } from "react-native";
import React, { useMemo } from "react";
import PlantSVG from "../../../assets/Svgs/Plant.svg";
import ScanSVG from "../../../assets/Svgs/Camera Line.svg";
import createStyles from "./styles";

const Purple = "../../../assets/Svgs/page1/Purple.png";
const Orange = "../../../assets/Svgs/page1/Orange.png";
const Blue = "../../../assets/Svgs/page1/Blue.png";

const ImageContentOne = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <View style={styles.PlantSVG}>
        <PlantSVG height="100%" width="100%" />
      </View>
      <View style={styles.ScanSVG}>
        <ScanSVG height="100%" width="100%" />
      </View>
      <View style={styles.Purple}>
        <Image
          source={require(Purple)} // Replace with the actual path to your image
          style={{ width: "100%", height: "100%", position: "absolute" }} // Set the desired width and height
        />
      </View>
      <View style={styles.Orange}>
        <Image
          source={require(Orange)} // Replace with the actual path to your image
          style={{ width: "100%", height: "100%", position: "absolute" }} // Set the desired width and height
        />
      </View>
      <View style={styles.Blue}>
        <Image
          source={require(Blue)} // Replace with the actual path to your image
          style={{ width: "100%", height: "100%", position: "absolute" }} // Set the desired width and height
        />
      </View>
    </View>
  );
};

export default ImageContentOne;
