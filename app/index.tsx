import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from '../stylesScreens/index-styles'
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
    <View
      style={styles.container}
    >
      <Image 
        source={require('../assets/images/nameapp.png')}
        style={{width:'90%',height:300,objectFit:'contain'}}
      />
      <View style={styles.btnsLoginContainer}>
          <TouchableOpacity 
            onPress={()=>router.push('/dashboard/dashboard')}
            style={styles.btnAction}>
            <Text style={styles.textBtnAction}>Login
              </Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.btnAction}>
            <Text style={styles.textBtnAction}>Apply for Membership
              </Text>
            </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}
