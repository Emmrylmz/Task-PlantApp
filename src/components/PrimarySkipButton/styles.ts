import { Dimensions, StyleSheet } from "react-native";
import {  widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../../constants/colors";

const containerheight = Dimensions.get('window').height / 9
export const buttonWidth = Dimensions.get('window').width / 1.14

const createStyles = () =>
  StyleSheet.create({
    button: {
      'width':buttonWidth,
      'height':'38%',
      alignSelf:'center',
      alignItems:'center',
      borderRadius:12,
      backgroundColor:Colors.GREEN,
      justifyContent:"center",
      position:'absolute',
      zIndex:1000


    },
    text: {
      fontWeight: "700",
      color:Colors.WHITE,
      textAlign:"center",
      justifyContent:"center"
      
    },
  });

export default createStyles;
