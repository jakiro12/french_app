import { Text,  TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from '../../../stylesScreens/profile-styles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";
import BottomNavBar from "@/app/components/navbar";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const UpcomingEvents=()=>{
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
            <View style={styles.container}>
                 <View style={styles.topNavigationBar}>
                <TouchableOpacity 
                    onPress={()=>router.back()}
                    style={styles.btnBackContainer}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                    <Text>Back</Text>
                </TouchableOpacity>
                <View
                    style={styles.topNavigationBarTitle}
                >
                    <Text style={{fontSize:16,fontWeight:'bold'}}>New Card</Text>
                </View>
                <TouchableOpacity 
                    style={styles.saveBtnContainer}
                >
                    <Text
                        
                    >Save</Text>
                </TouchableOpacity>
            </View>
            <View style={{width:'90%',height:'auto',rowGap:20,marginBottom:'auto',marginTop:10}}>
                <Text style={{fontSize:14,fontWeight:300}}>HISTORY</Text>
                <TouchableOpacity style={styles.upcomingCardEvents}>
                    <View style={styles.btnSetEvent}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Sweet</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color="black" />
                    </View>
                        <Text>Sun, 3 Nov, 1:00 PM</Text>
                    <View style={{width:'auto',height:'auto',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <FontAwesome6 name="ticket" size={14} color="black" />
                        <Text>2 persons</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <BottomNavBar/>
            </View>
        </SafeAreaView>
    )
}

export default UpcomingEvents