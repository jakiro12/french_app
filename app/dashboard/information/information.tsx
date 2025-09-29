import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const InformationAbout=()=>{
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
    
        <View style={{height:'100%',width:'100%',backgroundColor:'#0022ffff'}}>
            <Text>
               informacion de la carta elegida
            </Text>
        </View>
    </SafeAreaView>
    )
}
export default InformationAbout