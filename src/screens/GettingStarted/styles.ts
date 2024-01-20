import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const createStyles = 
  StyleSheet.create({
    body: {
      width: "100%",
      height: "100%",
      alignItems: "center",
    },
    text: {
      fontWeight: "300",
    },
    footerText: {
      top: hp(9),
      width: wp(50),
    },
  });

export default createStyles;
