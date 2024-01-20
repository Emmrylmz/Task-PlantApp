import {
  View,
  Text,
  Button,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";
import React, {
  FC,
  ForwardRefRenderFunction,
  FunctionComponent,
  useMemo,
} from "react";

interface IPrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
import createStyles from "./styles";
import { Colors } from '../../constants/colors';
const PrimarySkipButton: FC<IPrimaryButtonProps> = ({
  title,
  onPress,
  textStyle,
}) => {
  const styles = useMemo(() => createStyles(), []);

  return <Pressable style={[
    styles.button,
    {
        backgroundColor: Colors.GREEN
    }
  ]} onPress={onPress}>
    <Text style={[styles.text,]}>{title}</Text>
  </Pressable>;
};

export default PrimarySkipButton;
