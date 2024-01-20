import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";
import PrimarySkipButton from "../../components/PrimarySkipButton";
import FixedBottom from "../../components/FixedBottom";
import FixedTop from "../../components/FixedTop";
import ImageContentOne from "../../components/ImageContentOne";

const GettingStarted = () => {
  return (
    <View style={styles.body}>
      <FixedTop title="sup" />
      <ImageContentOne/>
      <FixedBottom>
        <PrimarySkipButton title="hey" onPress={() => alert("yo")} />
      </FixedBottom>
    </View>
  );
};

export default GettingStarted;
