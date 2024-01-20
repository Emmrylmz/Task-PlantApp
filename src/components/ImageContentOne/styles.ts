import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const createStyles = () =>
    StyleSheet.create({
        body: {
            width:hp(100),
            height:wp(100),
            top:hp(12),
            left:wp(4),
            alignItems: 'center',
            flex:0.7,
            justifyContent:"center",
            position:"relative",
        },
        PlantSVG:{
            height:'100%',
            width:'100%',
            position:"absolute",
        },
        ScanSVG:{
            height:'100%',
            width:hp(43),
            bottom:hp(6),
            position:'absolute',
            zIndex:1,
        },
        Purple:{
            position:'absolute',
            zIndex:10
        },
        Blue:{
            position:'absolute'

        },
        Orange:{
            position:'absolute'
        }

    });

export default createStyles;