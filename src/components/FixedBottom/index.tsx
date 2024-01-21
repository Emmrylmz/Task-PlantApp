import { View, Text, ViewStyle, StyleProp } from "react-native";
import React, { FC, ReactElement, ReactNode, useMemo } from "react";
import createStyles from "./styles";
import { cloneChildrenWithKeys } from "../../utils/utils";

interface IFixedBottomProps {
  children?: ReactNode | ReactNode[] | ReactElement | ReactElement[];
  bodyStyle?:StyleProp<ViewStyle>;
}

const FixedBottom: FC<IFixedBottomProps> = ({ children,bodyStyle }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <>
      <View style={[styles.body,bodyStyle]}>{cloneChildrenWithKeys(children)}</View>
    </>
  );
};



export default FixedBottom;
