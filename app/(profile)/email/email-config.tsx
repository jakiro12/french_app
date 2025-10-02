import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from '../../../stylesScreens/profile-styles'
import BottomNavBar from "@/app/components/navbar"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";

const EmailSetting=()=>{
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
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Email  & Password</Text>
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
                <Text style={styles.inputTitle}>
                    Email
                </Text>
                <TextInput 
                    placeholder="example@gmail.com"
                    style={styles.inputBox}
                />
                </View>
                <View 
                    style={styles.inputContainer}
                >
                <Text style={styles.inputTitle}>
                    Confirm Password
                </Text>
                <TextInput 
                    style={styles.inputBox}
                />
                </View>
                <View 
                    style={styles.inputContainer}
                >
                <Text style={styles.inputTitle}>
                    New Password
                </Text>
                <TextInput 
                    style={styles.inputBox}
                />
                </View>
                <View 
                    style={styles.inputContainer}
                >
                <Text style={styles.inputTitle}>
                    Confirm Password
                </Text>
                <TextInput 
                   
                    style={styles.inputBox}
                />
                </View>
            </View>
            <BottomNavBar/>
        </View>
        </SafeAreaView>
    )
}

export default EmailSetting