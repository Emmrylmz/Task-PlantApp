import { View, Text } from "react-native";
import React, { useMemo } from "react";
import createStyles from "./styles";
import styles from "./styles";

const TermsAndPolicy = () => {
    
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.
      </Text>
    </View>
  );
};

export default TermsAndPolicy;
