import {  FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from '../../stylesScreens/dashboard-main-styles'
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import BottomNavBar from "../components/navbar"
import SeachButtonMainScreens from "../components/search-button"
import { router } from "expo-router"
const DashBoardMainView=()=>{
    const [expanded,setExpanded]=useState<boolean>(false)
    const data=[
        {value:'uno'},
        {value:'dos'}
    ]
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
        <View style={styles.container}>
            <View style={styles.topViewContainer}>
                <View style={styles.headerCitiesContainer}>
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={()=>setExpanded(!expanded)}
                        style={styles.btnSetCities}>
                        <Text>Miami</Text>                    
                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.btnSetLanguage}>
                        <Text style={{color:'#6e8ac6'}}>EN/FR</Text>                    
                    </TouchableOpacity> 
                    {expanded ? (
                        <View style={styles.options}>
                            <FlatList
                                keyExtractor={(item)=>item.value}
                                data={data}
                                renderItem={
                                    ({item})=>(
                                        <Text>
                                            {item.value}
                                        </Text>
                                    )
                                }
                            />                      

                        </View>
                    )
                    :null
                }                   
                </View>
                <View
                    style={styles.headerDisplayOptions}
                    >
                    <TouchableOpacity 
                    style={styles.headerBtnActions}>
                        <Text>Dinner</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.headerBtnActions}>
                        <Text>Dinner</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.headerBtnActions}>
                        <Text>Dinner</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.headerBtnActions}>
                        <Text>Dinner</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardsContainer}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollCardsContainer}>
                    <TouchableOpacity 
                        onPress={()=>router.push('/dashboard/information/information')}
                        style={styles.cardDisplayOption}>

                    </TouchableOpacity>
                    <View style={styles.cardDisplayOption}>

                    </View>
                    <View style={styles.cardDisplayOption}>

                    </View>
                    <View style={styles.cardDisplayOption}>

                    </View>
                    <View style={styles.cardDisplayOption}>

                    </View>
                    <View style={styles.cardDisplayOption}>

                    </View>
                </ScrollView>
                <SeachButtonMainScreens/>
            </View>           
            <BottomNavBar/>
        </View>
        </SafeAreaView>
    )
}
export default DashBoardMainView