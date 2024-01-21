import { View, Text, SafeAreaView, ViewStyle, StyleProp } from "react-native";
import React, { FC, ReactElement, ReactNode, useMemo } from "react";
import createStyles from "./styles";
import { cloneChildrenWithKeys } from "../../utils/utils";

interface IFixedTopProps {
  children?: ReactNode | ReactNode[] | ReactElement | ReactElement[];
  bodyStyle?:StyleProp<ViewStyle>;
}
const FixedTop: FC<IFixedTopProps> = ({ children,bodyStyle }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <>
      <View style={[styles.body,bodyStyle]}>{cloneChildrenWithKeys(children)}</View>
    </>
  );
};

export default FixedTop;
