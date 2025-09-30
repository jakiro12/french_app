import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from '../../../stylesScreens/about-styles'
import BottomNavBar from "@/app/components/navbar"
const InformationAbout=()=>{
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>    
        <View style={styles.container}>
           <Image 
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTot-ub4GXnrxi24-JeQH0EgOo8BzurrecA8Q&s'}}
                style={styles.headerImageDisplay}
           />
           <View style={styles.boxMainInformation}>
            <View style={{width:'100%',height:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start'}}>
                <Text style={{fontWeight:'bold',color:'#ea3c27'}}>
                    PASTIS MIAMI
                </Text>
                <Text>Restaurant</Text>
            </View>
            <View>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis autem, tempore reiciendis cupiditate quidem numquam quibusdam, dolorum totam voluptatibus temporibus obcaecati. Repellat nam temporibus fugiat rem incidunt, libero voluptates. Vitae!</Text>
            </View>
            <View style={{width:'100%',height:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start'}}>
                <Text>380 NW 26th st, Miami, FL 33127</Text>    
                <Text>www.pastismiami.com</Text>
            </View>
            <View style={{marginBottom:30}}>
                <Text style={{fontWeight:'bold',color:'#ea3c27'}}>MFC perk:</Text>
                <Text>A round of sparking wine for the party with purchase of entrees</Text>
            </View>
           </View>           
           <TouchableOpacity
                style={styles.btnRedeem}
            >
                <Text
                    style={styles.textRedeem}
                >REDEEM</Text>
           </TouchableOpacity>
           <BottomNavBar/>
        </View>
    </SafeAreaView>
    )
}
export default InformationAbout