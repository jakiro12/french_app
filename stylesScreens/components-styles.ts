import { StyleSheet,ImageStyle,ViewStyle,TextStyle } from "react-native";

interface InitScreen{
    navbarContainer:ViewStyle
    btnNavBarContainer:ViewStyle
    searchBtn:ViewStyle
}

const ComponentStyles : InitScreen = StyleSheet.create({
    navbarContainer:{
        width:'100%',
        height:50,  
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    btnNavBarContainer:{
        width:40,
        height:40,
    },
    searchBtn:{
        position:'absolute',
        right:10,
        bottom:10,
        width:50,
        height:50,
        backgroundColor:'#ea3c27',
        borderRadius:25,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ComponentStyles