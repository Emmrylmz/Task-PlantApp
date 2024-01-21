import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleSheet } from "react-native";

const createStyles = () =>
    StyleSheet.create({
        body: {
            width:'100%',
            height:'100%',
            alignItems: 'center',
            justifyContent:"center",
            position:"relative"
        },
        BackgroundObjectSVG:{
            height:hp(50),
            width:wp(100),
            zIndex:-100,
            bottom:hp(25),
            position:'absolute'
            
        },
        FlatIPhoneSVG:{
            width:wp(100),
            height:hp(60),
            zIndex:1,

        },
        Artwork:{
            height:hp(40),
            width:wp(100),
            zIndex:10,
            position:'absolute',
            top:hp(19)
        }

    });

export default createStyles;