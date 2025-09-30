import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BottomNavBar from "../components/navbar";


const ProfileDashboard=()=>{
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
        <View style={{height:'100%',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column',backgroundColor:'#e0e3e9'}}>            
            <View style={{width:'90%',borderWidth:1,borderColor:'#000000',height:'10%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:24}}>
                    Account
                </Text>
                <FontAwesome name="bell" size={24} color="#fad312ff" />
            </View>
            <View style={{width:'90%',borderWidth:1,borderColor:'#000000',height:'70%'}} >

            </View>
            <BottomNavBar/>
        </View>
    </SafeAreaView>
    )
}
export default ProfileDashboard