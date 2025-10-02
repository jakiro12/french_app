import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface InitScreen{
    container:ViewStyle
    headerContainer:ViewStyle
    mainOptionsContainer:ViewStyle
    btnActionToSetInfo:ViewStyle
    textBtnAction:TextStyle
}

const ProfileStyles : InitScreen = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#e0e3e9'
    },
    headerContainer:{
        width:'90%',        
        height:'10%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    mainOptionsContainer:{
        width:'90%',   
        height:'80%',
        display:'flex',
        flexDirection:'column'
    },
    btnActionToSetInfo:{
        width:'100%',
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'#6e8ac6',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    textBtnAction:{
        fontSize:16,
        fontWeight:'bold'
    }
})

export default ProfileStyles