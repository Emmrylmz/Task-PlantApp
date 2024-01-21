import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { buttonWidth } from "../PrimarySkipButton/styles";



const createStyles = () =>
  StyleSheet.create({
    body: {
        top: hp(5),
        width:buttonWidth,
        height:hp(10),
        right:wp(4),
        position:'absolute',
        zIndex:200,
    }
  });

export default createStyles;