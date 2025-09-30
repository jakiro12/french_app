import { StyleSheet,ImageStyle,ViewStyle,TextStyle} from "react-native";

interface InitScreen{
    container:ViewStyle
    headerImageDisplay:ImageStyle
    textRedeem:TextStyle
    btnRedeem:ViewStyle
    boxMainInformation:ViewStyle
}

const AboutStyles : InitScreen = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#e0e3e9',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerImageDisplay:{
        width:'100%',
        objectFit:'cover',
        height:'20%',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    btnRedeem:{
        width:'90%',
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ea3c27',
        borderRadius:20
    },
    textRedeem:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:18
    },
    boxMainInformation:{
        width:'90%',
        height:'50%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#ea3c27',
        borderBottomWidth:1
    }

})
export default AboutStyles