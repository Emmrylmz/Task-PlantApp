import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";



const createStyles = () =>
  StyleSheet.create({
    body: {
        top: hp(7),
        width:wp(89),
        height:hp(10),
        right:wp(4),
        position:'relative'
    },
    header: {
      fontWeight:'400',
      textAlign:'left',
      fontSize:wp(7.7),
      paddingBottom:hp(0.8),
      letterSpacing:0.07,
      color:Colors.MAIN_TEXT_COLOR,
      fontFamily:'Rubik', 
      

    },
    subheader:{
      fontSize:wp(4.3),
      lineHeight:22,
      fontWeight:'400',
      textAlign:'left',
      color:Colors.MAIN_TEXT_COLOR,
      opacity:0.8,
      fontFamily:'Rubik',
      gap:wp(10)


    }
  });

export default createStyles;