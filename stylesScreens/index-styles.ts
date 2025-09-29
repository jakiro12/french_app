import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface InitScreen{
    container:ViewStyle
    btnsLoginContainer:ViewStyle
    btnAction:ViewStyle
    textBtnAction:TextStyle
}

const loginStyles : InitScreen = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#e0e3e9',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    btnsLoginContainer:{
        width:'95%',
        height:50,        
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',                
    },
    btnAction:{
        width:160,
        height:'auto',
        padding:10,
        backgroundColor:'#6e8ac6',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textBtnAction:{
        color:'#ffffff',
        fontWeight:600
    }

})

export default loginStyles