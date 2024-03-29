import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import React, { FC, useMemo } from "react";
import createStyles from "./styles";
import styles from "./styles";

interface ITermsAndPolicy {
  title: string;

  componentStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const TermsAndPolicy: FC<ITermsAndPolicy> = ({
  title,
  componentStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.body, componentStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

export default TermsAndPolicy;
