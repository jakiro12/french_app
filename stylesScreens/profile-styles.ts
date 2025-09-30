import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface InitScreen{
    container:ViewStyle
   
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
})

export default ProfileStyles