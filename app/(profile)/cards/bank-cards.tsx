import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from '../../../stylesScreens/profile-styles'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";
import BottomNavBar from "@/app/components/navbar";


const SetBankCards=()=>{
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
                <View 
                    style={styles.inputContainer}
                >
                    
                </View>
            </View>
            <BottomNavBar/>
            </View>
        </SafeAreaView>
    )
}

export default SetBankCards