import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from '../../../stylesScreens/profile-styles'
import BottomNavBar from "@/app/components/navbar"

const EmailSetting=()=>{
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
        <View style={styles.container}>
            <Text >
                asdfasdfasd
            </Text>
            <BottomNavBar/>
        </View>
        </SafeAreaView>
    )
}

export default EmailSetting