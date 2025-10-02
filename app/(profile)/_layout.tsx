import { Tabs } from "expo-router";


export default function NavBarLayout() {
  return (  
  <Tabs screenOptions={{headerShown:false,tabBarStyle: { display: "none" }}}>
    <Tabs.Screen  name="index"
    />   
    <Tabs.Screen  name="email/email-settings"
    />   
  </Tabs>
  )
}
