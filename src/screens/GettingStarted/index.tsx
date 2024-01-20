import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";
import PrimarySkipButton from "../../components/PrimarySkipButton";
import FixedBottom from "../../components/FixedBottom";

const GettingStarted = () => {
  return (
    <View style={styles.body}>
      <FixedBottom>
        <PrimarySkipButton title="hey" onPress={() => alert("yo")} />
      </FixedBottom>
    </View>
  );
};

export default GettingStarted;
