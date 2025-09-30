import {  FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from '../../stylesScreens/dashboard-main-styles'
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import BottomNavBar from "../components/navbar"
import SeachButtonMainScreens from "../components/search-button"
import { router } from "expo-router"
import { cities } from "../utils/cities"
import { Image } from "react-native"
const DashBoardMainView=()=>{
    const [expanded,setExpanded]=useState<boolean>(false)   
    const [cityOption,setCityOption]=useState<string>(cities[0])
    const handleCityOption=(el:string)=>{
        setCityOption(el)
        setExpanded(false)
    }
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={["bottom", "top"]}>
        <View style={styles.container}>
            <View style={styles.topViewContainer}>
                <View style={styles.headerCitiesContainer}>
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={()=>setExpanded(!expanded)}
                        style={styles.btnSetCities}>
                        <Text>{cityOption}</Text>                    
                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.btnSetLanguage}>
                        <Text style={{color:'#6e8ac6'}}>EN/FR</Text>                    
                    </TouchableOpacity> 
                    {expanded ? (
                        <View style={styles.options}>
                            <FlatList
                                contentContainerStyle={{rowGap:8,paddingVertical:8}}
                                keyExtractor={(item)=>item}
                                data={cities}
                                renderItem={
                                    ({item})=>(
                                        <TouchableOpacity style={{width:'auto',height:'auto'}}
                                            onPress={()=>handleCityOption(item)}
                                            activeOpacity={1}
                                        >
                                        <Text style={{width:'100%',textAlign:'center'}}>
                                            {item}
                                        </Text>
                                        </TouchableOpacity>
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
                    style={[styles.headerBtnActions]}>
                       <Text style={{color:'#6e8ac6'}}>Dining</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.headerBtnActions}>
                        <Text style={{color:'#6e8ac6'}}>Travel</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.headerBtnActions}>
                        <Text style={{color:'#6e8ac6'}}>Wellness</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.headerBtnActions}>
                        <Text style={{color:'#6e8ac6'}}>Expert Services</Text>
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
                             <Image 
                            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTot-ub4GXnrxi24-JeQH0EgOo8BzurrecA8Q&s'}}
                            style={{width:'100%',objectFit:'cover',height:'100%'}}
                        />
                    </TouchableOpacity>
                    <View style={styles.cardDisplayOption}>
                          <Image 
                            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQS5RGTL-EnFbOtVHWdVZPjZbXyTOpVT6icw&s'}}
                            style={{width:'100%',objectFit:'cover',height:'100%'}}
                        />  
                    </View>
                    <View style={styles.cardDisplayOption}>
                            <Image 
                            source={{uri:'https://media.timeout.com/images/103470200/750/422/image.jpg'}}
                            style={{width:'100%',objectFit:'cover',height:'100%'}}
                        />
                    </View>
                    <View style={styles.cardDisplayOption}>
                        <Image 
                            source={{uri:'https://platform.sandiego.eater.com/wp-content/uploads/sites/25/chorus/uploads/chorus_asset/file/24879554/AsaGagaKamon_EaterSD_KimberlyMotos_31of32___1_.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400'}}
                            style={{width:'100%',objectFit:'cover',height:'100%'}}
                        />
                    </View>
                    <View style={styles.cardDisplayOption}>
                            <Image 
                            source={{uri:'https://images.squarespace-cdn.com/content/v1/64e81daf628fed5e7c669a44/0eb32c3e-6ab7-4f4d-897c-32e6afb00dec/SalaRestobarInteriorPhotoBeverly'}}
                            style={{width:'100%',objectFit:'cover',height:'100%'}}
                        />
                    </View>
                    <View style={styles.cardDisplayOption}>
                            <Image 
                            source={{uri:'https://t4.ftcdn.net/jpg/03/77/30/21/360_F_377302114_tf9ODo7YMTQPjc90LQSSKyYnt4uDUKXE.jpg'}}
                            style={{width:'100%',objectFit:'cover',height:'100%'}}
                        />
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