import { View, Text, SafeAreaView } from "react-native";
import React, { FC, useMemo } from "react";
import createStyles from "./styles";

interface IFixedTop {
  title: string;
  subtitle?: string;
  textBold?: string;
}

const FixedTop: FC<IFixedTop> = ({ title, subtitle, textBold }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{title}</Text>
      </View>
      <View style={styles.subheaderContainer}>
        <Text style={styles.subheader}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default FixedTop;
