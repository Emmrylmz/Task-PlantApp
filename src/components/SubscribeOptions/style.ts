import { StyleSheet } from "react-native";
import { buttonWidth } from "../PrimarySkipButton/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";


const styles = 
  StyleSheet.create({
    container: {
      'width':buttonWidth,
      'height':'38%',
      alignSelf:'center',
      alignItems:'center',
      borderRadius:12,
      backgroundColor:Colors.GREEN,
      justifyContent:"center",
      position:'absolute',
      zIndex:1000,
      borderStyle:"solid",
      
      borderColor:"red"


    },
    innerRow:{
      borderStyle:'solid',
      

    },
    textContainer: {

    },
    text: {
      fontWeight: "700",
      color:Colors.WHITE,
      textAlign:"center",
      justifyContent:"center"
      
    },
  });
  export default styles