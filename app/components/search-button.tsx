import { TouchableOpacity } from "react-native"
import styles from '../../stylesScreens/components-styles'
import Entypo from '@expo/vector-icons/Entypo';
const SeachButtonMainScreens=()=>{
    return(
        <TouchableOpacity
                    style={styles.searchBtn}
                >
                    <Entypo name="magnifying-glass" size={30} color="#000000" />                    
        </TouchableOpacity>
    )
}
export default SeachButtonMainScreens