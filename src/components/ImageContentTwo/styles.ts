import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const createStyles = () =>
    StyleSheet.create({
        body: {
            width:'100%',
            height:'100%',
            alignItems: 'center',
            justifyContent:"center",
            position:"relative"
        },
        PlantSVG:{
            position:"relative",
            zIndex:5,
            bottom:hp(25)
        },
        PhoneSVG:{
            position:'absolute',
            zIndex:10,
            top:hp(8)
        },
        ScanInclined:{
            zIndex:30,
            position:"absolute",
            bottom:hp(13)

        }

    });

export default createStyles;