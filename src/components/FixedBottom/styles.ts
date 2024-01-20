import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const createStyles = () =>
  StyleSheet.create({
    body: {
      'width':'100%',
      'height':hp(17),
      position:"absolute",
      bottom:0,
      alignItems:"center",
      textAlign:'center',
      zIndex:900
    },

  });

export default createStyles;
