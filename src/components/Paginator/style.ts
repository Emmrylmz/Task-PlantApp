import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      top:hp(10)
    },
    dot: {
      margin: 8,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#ccc',
    },
    activeDot: {
      backgroundColor: 'black',
    },
    inactiveDot: {
        backgroundColor: '#ccc',
      },
  })

  export default styles