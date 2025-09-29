import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  return (  
    <GestureHandlerRootView style={{width:'100%',height:'100%'}}>
      <StatusBar/>
  <Stack >
    <Stack.Screen  name="index"
      options={{headerShown:false}}  
    />
    <Stack.Screen 
      name="(profile)"
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="dashboard/dashboard"
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="dashboard/information/information"
      options={{headerShown:false}}
    />
    <Stack.Screen name="not-found" 
      options={{headerShown:false}}
    />    
  </Stack>
  </GestureHandlerRootView>
  )
}
