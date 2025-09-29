import { Image,  TouchableOpacity, View } from "react-native"
import styles from '../../stylesScreens/components-styles'
import { router } from "expo-router"

const BottomNavBar=()=>{
    return(
        <View style={styles.navbarContainer}>
            <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.btnNavBarContainer}>
                <Image 
                    source={require('../../assets/images/ping.png')}
                    style={{width:40,height:40,objectFit:'cover'}}
                />
            </TouchableOpacity>
                <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.btnNavBarContainer}>
                <Image 
                    source={require('../../assets/images/calendar.png')}
                    style={{width:40,height:40,objectFit:'cover'}}
                />
            </TouchableOpacity>
              <TouchableOpacity 
                activeOpacity={0.7}
                onPress={()=>router.push('/(profile)')}
                style={styles.btnNavBarContainer}>
                <Image 
                    source={require('../../assets/images/profile.png')}
                    style={{width:40,height:40,objectFit:'cover'}}
                />
            </TouchableOpacity>
             <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.btnNavBarContainer}>
                <Image 
                    source={require('../../assets/images/web.png')}
                    style={{width:40,height:40,objectFit:'cover'}}
                />
            </TouchableOpacity>          
        </View>
    )
}
export default BottomNavBar