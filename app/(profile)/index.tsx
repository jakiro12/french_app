import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


const ProfileDashboard=()=>{
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
    
        <View style={{height:'100%',width:'100%',backgroundColor:'#0022ffff'}}>
            <Text>
                Profile
            </Text>
        </View>
    </SafeAreaView>
    )
}
export default ProfileDashboard