import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BottomNavBar from "../components/navbar";
import styles from '../../stylesScreens/profile-styles'

const ProfileDashboard=()=>{
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
        <View style={styles.container}>            
            <View style={{width:'90%',borderWidth:1,borderColor:'#000000',height:'10%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:24}}>
                    Account
                </Text>
                <FontAwesome name="bell" size={24} color="#fad312ff" />
            </View>
            <View style={{width:'90%',borderWidth:1,borderColor:'#000000',height:'80%',display:'flex',flexDirection:'column'}} >
                <View style={{width:'100%',height:'auto'}}>
                    <TouchableOpacity>
                        <Text>My reservation</Text>
                    </TouchableOpacity>    
                </View>
                <TouchableOpacity>
                    <Text>Email & Password</Text>
                </TouchableOpacity>

            </View>
            <BottomNavBar/>
        </View>
    </SafeAreaView>
    )
}
export default ProfileDashboard