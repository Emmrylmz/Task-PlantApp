import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../../constants/colors";

const styles=
    StyleSheet.create({
        body: {
            width:'100%',
            height:'100%',
            alignItems: 'center',
            position:'relative',
            backgroundColor:Colors.PAYMENT_BACKGROUND
        },
        bottomContainer: {
            position:'absolute',
            bottom:0,
            width:wp(90),
            height:hp(70),
            alignItems:'center',
            zIndex:1000

            
        },
        topContainer: {
            height:hp(65),
            width:'100%',
            position:'absolute',

        },
        FooterText: {
            top:hp(6),
            paddingTop:hp(1)

        }
    });

export default styles;