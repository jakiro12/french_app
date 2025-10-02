import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BottomNavBar from "../components/navbar";
import styles from '../../stylesScreens/profile-styles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ProfileDashboard=()=>{
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
        <View style={styles.container}>            
            <View style={styles.headerContainer}>
                <Text style={{fontSize:24}}>
                    Account
                </Text>
                <FontAwesome name="bell" size={24} color="#fad312ff" />
            </View>
            <View style={styles.mainOptionsContainer} >
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
                <View style={{width:'100%',height:'auto'}}>
                    <TouchableOpacity style={styles.btnActionToSetInfo}>
                        <Text style={styles.textBtnAction}>My reservation</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </TouchableOpacity>    
                    <TouchableOpacity style={styles.btnActionToSetInfo}>
                        <Text style={styles.textBtnAction}>My RSVPs</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </TouchableOpacity>    
                    <TouchableOpacity style={styles.btnActionToSetInfo}>
                        <Text style={styles.textBtnAction}>My Credits</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.btnActionToSetInfo}>
                        <Text style={styles.textBtnAction}>My Membership</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.btnActionToSetInfo}>
                        <Text style={styles.textBtnAction}>Hotel Bookings</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </TouchableOpacity>    
                    <TouchableOpacity style={styles.btnActionToSetInfo}>
                        <Text style={styles.textBtnAction}>Favourites</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </TouchableOpacity> 
                </View>
                <View style={{width:'100%',height:'auto'}}>
                    <Text style={{fontSize:15,marginBottom:10,marginTop:5}}>ACCOUNT SETTINGS</Text>
                    <TouchableOpacity style={styles.btnActionToSetInfo}>
                        <Text style={styles.textBtnAction}>Email</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.btnActionToSetInfo}>
                        <Text style={styles.textBtnAction}>Password</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </TouchableOpacity> 
                </View> 
                               
                </ScrollView>
            </View>
            <BottomNavBar/>
        </View>
    </SafeAreaView>
    )
}
export default ProfileDashboard