import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: hp(1.5),
    color: Colors.LIGHT_GREY,
  },
});

export default styles;
